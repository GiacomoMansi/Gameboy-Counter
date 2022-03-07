/*  Summerize Created Element */
let display = document.getElementById ("display");
let summerize = document.createElement("p");
summerize.innerHTML = "0";
summerize.className = "summ"
display.prepend(summerize);

/*  Plus button Created Element */
let gameboy = document.getElementById ("gameboy");
let plus = document.createElement("button");
plus.innerHTML = "+";
plus.className = "plus"
gameboy.append(plus);

/*  Less button Created Element */
let less = document.createElement("button");
less.innerHTML = "-";
less.className = "less"
gameboy.append(less);

/*  Reset button Created Element */
let reset = document.createElement("button");
reset.innerHTML = "reset";
reset.className = "reset"
gameboy.append(reset);


/*  Function Counter */

let summValue = 0;

/*  Plus Button */
plus.addEventListener ("click", function(event){
    summValue += 1;
    summerize.innerHTML = summValue;
});
/*  Less Button */
less.addEventListener ("click", function(event){
    summValue -= 1;
    summerize.innerHTML = summValue;
});
/*  Reset Button */
reset.addEventListener ("click", function(event){
    summValue = 0;
    summerize.innerHTML = summValue;
});
