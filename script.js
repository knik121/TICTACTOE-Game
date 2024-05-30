let turn="X"
let gameover=0;

//change turn
const changeTurn=()=>{
    return turn==="X"?"O":"X"
}

//Game over
const checkWin=()=>{
    let boxtexts=document.getElementsByClassName('boxtext');
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,4,8],
        [2,4,6],
        [0,3,6],
        [1,4,7],
        [2,5,8],
    ]
    wins.forEach(e=>{
        if(boxtexts[e[0]].innerText!=="" && ((boxtexts[e[0]].innerText===boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText===boxtexts[e[2]].innerText))){
            document.querySelector('.info').innerText=boxtexts[e[0]].innerText+" Wins!!"
            gameover=1;
        }
    })
}
const checkdraw=()=>{
    let boxtexts=document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element=>{
        if(element.innerText!==""){
            gameover+=1;
        }
    });
    if(gameover==9){
        document.getElementsByClassName("info")[0].innerText="DRAW!!";
    }
    else gameover=0;
}

//Game logic
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText==='' && gameover==0){
            boxtext.innerText=turn;
            turn=changeTurn();
            checkWin();
            if(gameover==0) checkdraw();
            if(gameover==0){
                document.getElementsByClassName("info")[0].innerText=turn+"'S TURN";
            }
        }
    })
})

//Add a listener to reset
reset.addEventListener('click',()=>{
    let boxtexts=document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element=>{
        element.innerText=""
    });
    turn="X"
    gameover=0
    document.getElementsByClassName("info")[0].innerText=turn+"'S TURN";
})