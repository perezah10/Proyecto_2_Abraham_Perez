function imprimir(){
    let btn = document.querySelector("#btnGo");
    let lista = document.querySelector("#listResult");
    for (let i = 1; i <= 20; i++) {
        let elementoLista = document.createElement("li");
        if (i % 2 == 0) {
            elementoLista.textContent = i + " es par";
        } else {
            elementoLista.textContent = i + " es impar";
        }
        lista.appendChild(elementoLista);
    }
    let title = document.querySelector("h1");
    title.style.color = "#5fa5f5";
    title.style.textShadow = "2px 2px 4px #000000";
    let colorBody = document.querySelector("body");
    colorBody.style.backgroundColor = "#cfbdb5";
}