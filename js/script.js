// variables that helps to store data
let num_1 = document.querySelector('.calc');
let screen = document.querySelector('.monitor');
let buttons = document.querySelectorAll('.num');
let clear = document.querySelector('.arth_7');
let equal = document.querySelector('.arth_6');

// click buttons to appear on screen

buttons.forEach(function(button){
    button.addEventListener('click', function(e){
        let value = e.target.dataset.num;
        screen.value += value;
        
    })
});
// equal button to get value
equal.addEventListener('click', function(e){
    if(screen.value === ""){
        screen.value = '';

    }else{
        let answer = eval(screen.value);
        screen.value = answer;
    }
});
// clear button to clear screen
clear.addEventListener('click', function(e){
    screen.value = "";
});

    
