var n = document.querySelectorAll(".drum").length;

for( var i=0 ; i< n; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var ht = this.innerHTML;
        makeSound(ht);
        anima(ht);
    });
}

document.addEventListener("keypress",function(event){
        makeSound(event.key);
        anima(event.key);
});

function makeSound(key){
    switch(key){
        case "w":
            var a1 = new Audio("sounds/4.mp3");
            a1.play();
            break;
        case "a":
            var a2 = new Audio("sounds/5.mp3");
            a2.play();
            break;
        case "s":
            var a3 = new Audio("sounds/6.mp3");
            a3.play();
            break;
        case "d":
            var a4 = new Audio("sounds/7.mp3");
            a4.play();
            break;
        case "j":
                var a5 = new Audio("sounds/2.mp3");
                a5.play();
                break;
        case "k":
                var a6 = new Audio("sounds/3.mp3");
                a6.play();
                break;
        case "l":
                var a7 = new Audio("sounds/1.mp3");
                a7.play();
                break;  
        default: alert("key");
    }
}

function anima(ckey){
    var actbutton = document.querySelector("." + ckey);
    actbutton.classList.add("pressed");

    settime(function(){
        actbutton.classList.remove("pressed")
    } , 100);
}