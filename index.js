const P = new Pokedex.Pokedex();
const searchParams = new URLSearchParams(window.location.search);

if (searchParams.has("searchQuery")) {
    let value = searchParams.get("searchQuery");
    parsePokemon(P.getPokemonByName(value));
}

function parsePokemon(response) {
    response.then((result) => {
        console.log(result)

        let template = $("#template").clone();
        
        template.show();
        template.find("#name").html(result.name);
        template.find("#image").attr("src", result.sprites.other['official-artwork'].front_default)
        template.appendTo("#poke_response")
        result.types.forEach((type) => {
            console.log(type);
            let typeDiv = document.createElement("div");
            typeDiv.classList.add("btn", "ms-2", type.type.name);

            typeDiv.innerHTML = type.type.name
            
            template.find("#types").append(typeDiv);
        })
        template.find("#types")

    });

}