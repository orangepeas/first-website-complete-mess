let name = "Mike"
let no = 5

console.log(name + ' ' + no)

let trainer = {name: 'Elliot',
               age: 27,
               role: 'Technical Learning Specialist'
            };

console.log(trainer.name)

let string = "bingo bango";
let int = 1;
let newarray = [1, 3, 2, true, 'yes'];

function thankYou(){  //alert does a popup
    alert( "Thank You! ");
}

function helloWorld(){
    console.log("Hello World!")
}

function upgrade(x,y){ //this function changes the font size and fotn color elements for objects with the id "upgradable" when run
    document.getElementById("upgradable").style.fontSize = x;
    document.getElementById("upgradable").style.color = y;
}