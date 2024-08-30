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

async function fetchPokemonById(id) {
    const pokemonEndPoint = `${URL}pokemon/${id}`;
    const SpecieEndPoint = `${URL}pokemon-species/${id}`;

    var pokemonData, specieData

    try {
        const response = await fetch(pokemonEndPoint);
        if(!response.ok){
            throw new Error("Error al obtener los datos");
        }
        pokemonData = await response.json();
    } catch (error) {
        console.error("Error en la petición a la API:", error)
        return {}
    }

    try {
        const response = await fetch(SpecieEndPoint);
        if(!response.ok){
            throw new Error("Error al obtener los datos");
        }
        specieData = await response.json();
    } catch (error) {
        console.error("Error en la petición a la API:", error)
        return {}
    }

    return formatApiPokemonData(pokemonData, specieData);
}

//formats the api response to only the necessary data
function formatApiPokemonData(pokemon, specie){
    var format = {
        id: pokemon.id,
        name: pokemon.name,
        sprite: pokemon.sprites?.other["dream_world"]["front_default"],
        weight: pokemon.weight,
        height: pokemon.height,
    };

    format.types = pokemon?.types?.map((element)=>{
        return element.type.name;
    });

    const moves = []
    for(let i = 0; i < 3; i++){
        moves.push(pokemon?.moves[i]?.move?.name)
    }
    format.moves = moves;

    format.stats = pokemon?.stats?.map((element)=>{
        return {
            stat: element.stat.name,
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

export {GetPokemonById}