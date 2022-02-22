let plus = document.getElementById ("plus");
let less = document.getElementById ("less");
let reset = document.getElementById ("reset");
let summrize = document.getElementById ("summ");

let summValue = 0;

plus.addEventListener ("click", function(event){
    summValue += 1;
    summ.innerHTML = summValue;
});
less.addEventListener ("click", function(event){
    summValue -= 1;
    summ.innerHTML = summValue;
});
reset.addEventListener ("click", function(event){
    summValue = 0;
    summ.innerHTML = summValue;
});