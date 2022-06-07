let btn = document.querySelector(".btn");
let rgb = document.querySelector(".rgb")

function cor(opacidade = 1) {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    return `rgb(${r}, ${g}, ${b}, ${opacidade})`;
}


function mudarCor() {
    document.body.style.backgroundColor = cor();
    console.log(cor());
    rgb.innerHTML = `O rgb dessa cor é ${cor()}`;
    rgb.style.display = "block"
}
