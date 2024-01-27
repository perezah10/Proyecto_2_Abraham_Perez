function imprimir(){
    let btn = document.querySelector("#btnGo");
    for (let i = 1; i <= 20; i++) {
        if (i % 2 == 0) {
            console.log(i + " es par");
        } else {
            console.log(i + " es impar");
        }
    }
    let title = document.querySelector("h1");
    title.style.color = "#5fa5f5";
    title.style.textShadow = "2px 2px 4px #000000";
    let colorBody = document.querySelector("body");
    colorBody.style.backgroundColor = "#cfbdb5";
}