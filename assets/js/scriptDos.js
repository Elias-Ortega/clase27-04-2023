function consumoDeAPI() {

    $.ajax({
        type: "get",
        url: "https://pokeapi.co/api/v2/pokemon",
        success: function (response) {
           console.log(response);
           /* for(var i = 0; i < response.results.length; i++){
                console.log(response.results[i]);
           } */

           /* For of recorre arreglos. se declara una variable temporal */
           for(var pokemon of response.results){
                console.log(pokemon.url);
           }

           /* forEach, map, filter */
           
           /* Con definicion de funcion anterior */
           function callback(pokemon, index){
                console.log(pokemon +  " " + index);
           }  

           response.results.forEach(callback);  

           /* Con funcion anonima */
           response.results.forEach(function(pokemon, index){
                console.log(pokemon +  " " + index);
           });   
          
           /* Filter */
            var filtrados =response.results.filter(function(pokemon , index){
                return pokemon.name =='metapod';
                
           });
           console.log(filtrados);
        }
    });

}

consumoDeAPI();

