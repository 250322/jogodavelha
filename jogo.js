const celulas = document.querySelectorAll(".celula");
let checarturno = true;
let turno;
const jogador_x = "x";
const jogador_o = "o";
let jogoacabou = false;
document.addEventListener("click", (event)=> {
if(event.target.matches(".celula")&&! jogoacabou){
    jogar(event.target.id);
}
});
function jogar(id){
    const celula = document.getElementById(id);
    if(celula.textContent === ""){
        turno = checarturno ? jogador_x : jogador_o;
        checarturno = !checarturno;
        celula.textContent = turno;
        celula.classList.add(turno);
        celula.removeEventListener("click",jogar);
        verificarVencedor(turno);
    }
}
function verificarVencedor(jogador) {
    const combinacoesVitoria = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];

    for(const combinacao of combinacoesVitoria){
        const[a,b,c] = combinacao;
        if(
            celulas[a].textContent === jogador &&
            celulas[b].textContent === jogador &&
            celulas[c].textContent === jogador
        ) {
            jogoaAcabou = true;
            alert(`o jogador ${jogador} venceu!`);
            return;
        }
    }

    if([...celulas].every(( celula) => celula.textContent !== "" )){
        jogoAcabou = true;
        alert("empate!");

    }

}
