let display1= document.getElementById("scoreDisplay1")
let display2= document.getElementById("scoreDisplay2")

let score1= 0
let score2 = 0  

function add1for1(){
    score1 +=1
    display1.textContent= score1
    
}
function add2for1(){
    score1 +=2
    display1.textContent= score1
    
}
function add3for1(){
    score1 +=3
    display1.textContent= score1
    
}
function add1for2(){
    score2 +=1
    display2.textContent= score2
    
} 
function add2for2(){
    score2 +=2
    display2.textContent= score2
    
} 
  function add3for2(){
    score2 +=3
    display2.textContent= score2
    
} 

function newGame(){
    score1= 0 
    score2 = 0 
    display1.textContent = score1
    display2.textContent = score2
}
