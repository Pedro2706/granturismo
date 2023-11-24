const currentPlayer = document.querySelector(".currentPlayer");

let selected;
let player = "x";

let positions = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7],
];

function init(){
    selected = [];

    currentPlayer.innerHTML = `JOGADOR DA VEZ: $(player)`;

  document.querySelectorAll(".game button").forEach((item) => {
    item.innerHTML = "";
    item.addEventListenner("click", newMove);
  });
}

init();

function newMove(e){
    const index = e.target.getAttribute("data-1");
    e.target.innerHTML = player;
    e.target.removeEventlistenner("click", newMove);
    selected[index] = player

    setTimeout(() =>{
        check();
      }, [100]);

      player = player === "x" ? "O" : "x";
      currentPlayer.innerHTML = `JOGADOR DA VEZ: $(player)`;
    }

    function check(){
        let playerLastMove = player === "x" ? "O" : "x";

        const itens = selected
           .map((item, i) => [item, i])
           .filter((item) => item[0] === playerLastMove)
           .map((item) =>[1]);
          
        for (pos of positions){
            if (pos.every((item)=> itens.includes(item))) {
                alert("O JOGADOR '" + playerLastMove + "'GANHOU!");
                init();
                return;
    }
  }

  if (selected,filter((item) => item).length === 9){
    alert("DEU EMPATE!");
    init();
    return;
  }
}