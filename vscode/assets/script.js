function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")

    // pegar a tag img
    const img = document.querySelector("#profile img")

    //substituir a imagem
    if (body.classList.contains("light")) {

        //se tiver light mode, adicionar a imagem light
        img.setAttribute("src", "./assets/avatar.light,pnp.jpg");
    } else {

        img.setAttribute("src", "./assets/avatar1.png");
    }

}