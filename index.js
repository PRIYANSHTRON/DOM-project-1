function logic(){

var random1 = Math.floor(Math.random()*6)+1;   //generating random numbers from 1 to 6
var random2 = Math.floor(Math.random()*6)+1;   //generating random numbers from 1 to 6

var randomdiceimage1= "images/dice"+random1+".png"    //storing images from dice1-dice6.png
var randomdiceimage2= "images/dice"+random2+".png"    //storing images from dice1-dice6.png

document.querySelector(".img1").setAttribute("src",randomdiceimage1)

document.querySelector(".img2").setAttribute("src",randomdiceimage2)

if(random1 > random2){
    document.querySelector('h1').innerHTML='Player 1 Wins !!!'
}
else if(random1 < random2){
    document.querySelector('h1').innerHTML='PLayer 2 Wins !!!'
}
else{
    document.querySelector('h1').innerHTML="LOL, it's a tie"
}

}