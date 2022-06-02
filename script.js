const btn = document.querySelector(".btn");

function gerar_cor(opacidade = 1){
    let r = Math.random()*255;
    let g = Math.random()*255;
    let b = Math.random()*255;
    return `rgba(${r},${g},${b}, ${opacidade})`
}

function mudarCor(){
    document.body.style.backgroundColor = gerar_cor();
}
