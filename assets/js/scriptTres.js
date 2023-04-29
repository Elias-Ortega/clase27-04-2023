/* https://pokeapi.co/api/v2/pokemon */

function consumoDeAPI() {
    var arregloPokemones = [];
    $.ajax({
        type: "get",
        url: "https://pokeapi.co/api/v2/pokemon",
        dataType: "json",
        async:false,
        success: function (response) {
             arregloPokemones =  consumoDeAPIPorPokemon(response.results);
        }
    });
    return arregloPokemones
}

function consumoDeAPIPorPokemon(arregloPokemonURL) {
    var arregloPokemonesInfoCompleta = [];
    arregloPokemonURL.forEach(function (pokemon) {
        $.ajax({
            type: "get",
            url: pokemon.url,
            dataType: "json",
            async:false,
            success: function (response) {
                arregloPokemonesInfoCompleta.push(response);
            }
        });
    });
    return arregloPokemonesInfoCompleta;
}

console.log(consumoDeAPI());

/* Filter */