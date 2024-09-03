const URL = "https://pokeapi.co/api/v2/"

async function GetPokemonById(id) {
    //pokemon key
    const key = `pokemon${id}`;

    //load from cache
    const cachePokemon = JSON.parse(localStorage.getItem(key))
    if (cachePokemon) return cachePokemon;
    
    //load from api
    const pokemon = await fetchPokemonById(id);
    if(pokemon != {}){
        localStorage.setItem(key, JSON.stringify(pokemon));
    }
    return pokemon;
}

async function GetAllPokemon(){
    //storage key
    const key = `allPokemon`;

    //load from cache
    const cachePokemon = JSON.parse(localStorage.getItem(key))
    if (cachePokemon) return cachePokemon;

    //load from api
    const pokemons = await fetchAllPokemon();
    if(pokemons != {}){
        const pokemonList = pokemons?.results?.map((element)=>{
            return {
                ...element,
                id: element?.url?.split("/")[6]
            }
        })

        const formatPokemons = {
            ...pokemons,
            results: pokemonList
        }
        localStorage.setItem(key, JSON.stringify(formatPokemons));
        return formatPokemons;
    }

    return pokemons
}

async function fetchPokemonById(id) {
    const pokemonEndPoint = `${URL}pokemon/${id}`;
    return fetchPokemonDataByUrl(pokemonEndPoint);
}

async function fetchPokemonDataByUrl(url){
    //id, name, description, img, weight, height, types, moves, stats
    var pokemonData, specieData;

    try {
        const response = await fetch(url);
        if(!response.ok){
            throw new Error("Error al obtener los datos");
        }
        pokemonData = await response.json();
    } catch (error) {
        console.error("Error en la petición a la API:", error)
        return {}
    }

    try {
        const response = await fetch(pokemonData?.species.url);
        if(!response.ok){
            throw new Error("Error al obtener los datos");
        }
        specieData = await response.json();
    } catch (error) {
        console.error("Error en la petición a la API:", error)
        return {}
    }

    return formatPokemonDataById(pokemonData, specieData);
}

async function fetchAllPokemon(){
    const endPoint = `${URL}pokemon?limit=10000`;

    try {
        const response = await fetch(endPoint);
        if(!response.ok){
            throw new Error("Error al obtener los datos");
        }
        return await response.json();
    } catch (error) {
        console.error("Error en la petición a la API:", error)
        return {}
    }
}

//formats the api response to only the necessary data
function formatPokemonDataById(pokemon, specie){
    var format = {
        id: pokemon.id,
        name: pokemon.name,
        sprite: pokemon.sprites?.other["dream_world"]["front_default"],
        info: {
            weight: pokemon.weight,
            height: pokemon.height,
        }
    };

    if(!format.sprite){
        format.sprite = pokemon.sprites?.other["official-artwork"]["front_default"];
    }

    format.types = pokemon?.types?.map((element)=>{
        return element.type.name;
    });

    const moves = []
    for(let i = 0; i < 3; i++){
        moves.push(pokemon?.moves[i]?.move?.name)
    }
    format.moves = moves;

    format.stats = pokemon?.stats?.map((element)=>{
        var name;
        switch(element?.stat?.name){
            case "hp":
                name = "HP";
                break;
            case "attack":
                name = "ATK";
                break;
            case "defense":
                name = "DEF";
                break;
            case "special-attack":
                name = "SATK";
                break;
            case "special-defense":
                name = "SDEF";
                break;
            case "speed":
                name = "SPD";
                break;
        }
        return {
            stat: name,
            value: element["base_stat"]
        };
    });


    for(let i = 0 ; i < specie["flavor_text_entries"].length; i++){
        var description = specie["flavor_text_entries"][i];
        if(description?.language?.name == "es"){
            format.description = description["flavor_text"];
            break;
        }
    }

    return format;
}

export {GetPokemonById, GetAllPokemon}