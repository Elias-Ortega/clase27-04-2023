function consumoDeAPI() {

    $.ajax({
        type: "get",
        url: "https://pokeapi.co/api/v2/pokemon",
        success: function (response) {
           console.log(response);

        }
    });

}

consumoDeAPI();

