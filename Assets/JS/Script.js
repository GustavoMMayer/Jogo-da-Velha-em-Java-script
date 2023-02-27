let player1 ='O';
let player2='X'
let jogadasPlayer1=[];
let jogadasPlayer2=[];
let playerWin = '';
let activeGame = true;
let jogadas =[];
let activePlayer;
let vitoriasP1 =0;
let vitoriasP2 =0;
let possibilidades=[
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [7,5,3]
]

function clicou(event){
    if(activeGame){
   let ultimaJoagada = event.target.id;
  
   
    if(jogadas.some(j=>j.campo == ultimaJoagada)){
        alert('campo ja jogado')
    }else{
        let ultimaJoagadaNumber = convert(ultimaJoagada)
        jogadas.push({player:activePlayer,campo:ultimaJoagada, valor:ultimaJoagadaNumber});
        render(event.target.id, activePlayer );
        if(activePlayer === 'O'){
            jogadasPlayer1.push(ultimaJoagadaNumber)
        }else if(activePlayer === 'X'){
            jogadasPlayer2.push(ultimaJoagadaNumber)
        }
        
        ganhou(activePlayer);

       
        changePlayer();
        renderWins ()
        
    }

}  
};
function convert(string){
    switch (string){
        case "um":
            return 1;
            break;
        case "dois":
            return 2;
        case "tres":
            return 3;
        case "quatro":
            return 4;
        case "cinco":
            return 5;
        case "seis":
            return 6;
        case "sete":
            return 7;
        case "oito":
            return 8;
        case "nove":
            return 9;    
    }
}

function ganhou(player){
    let camposMarcados
    if(player === 'O'){
        camposMarcados = jogadasPlayer1
    }else{
        camposMarcados = jogadasPlayer2

    }
    
    if(camposMarcados.length>=3){
        
        for (let i in possibilidades) {
            let possibilidade = possibilidades[i];
            let contemTodos = true;
            for (let j in possibilidade) {
              if (!camposMarcados.includes(possibilidade[j])) {
                contemTodos = false;
                break;
              }
            }
            
            if (contemTodos) {
                console.log(`o jogador ${player} ganhou`)
                activeGame =false
                if(player === "O"){
                    vitoriasP1 ++;
                }else if(player==="X"){
                    vitoriasP2++;
                }
                document.querySelector('.msgwin').innerHTML = `${player} é o vencedor!!`
                
              return true;
            }
          }
          if(jogadas.length>8){
            document.querySelector('.msgwin').innerHTML = `Deu Velha, empate!! Reinice o Round para continuar`
           
            activeGame=false;
          }
          return false;
    }
    
    
}


function changePlayer(){
    if(activePlayer == undefined){
        let random = Math.random();
        if(random >= .5){
            activePlayer = player1;
        }else{
            activePlayer = player2;
        }
    }else if(activePlayer === player1){
        activePlayer = player2;
    }else{
        activePlayer = player1;

    }
    
}

function render (id, playerRend){
    document.querySelector(`#${id}`).innerHTML= playerRend;
        

}

function renderWins (){
    document.querySelector('.owins').innerHTML = `<h3>${player1}: ${vitoriasP1} vitorias.</h3><h3> ${player2}: ${vitoriasP2} vitorias. </h3>
    <h2> Jogador atual: ${activePlayer}</h2> `;
}

function restartRound(){
    activePlayer;
    for(let i in jogadas){
        document.querySelector(`#${jogadas[i].campo}`).innerHTML= '';
        }
    jogadas =[];
    jogadasPlayer1=[];
    jogadasPlayer2=[];
    activeGame= true;
    document.querySelector('.msgwin').innerHTML = '';

}
function restart(){
    restartRound()
    vitoriasP1 = 0;
    vitoriasP2 = 0;
}


document.querySelector('.game').addEventListener('click',clicou);
document.querySelector('#buttonRestartRound').addEventListener('click', restartRound);
document.querySelector('#buttonRestart').addEventListener('click', restart);

changePlayer();
renderWins ()