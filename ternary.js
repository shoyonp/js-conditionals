//TERNARY  --> three parts
//    ?   :
// condition ? do something when true : do something when false

const age = 12;

// normal if else
// if(age >= 18 ){
//     console.log('you can vote')
// }
// else{
//     console.log('tui kida')
// }


// simple ternary
// age >= 18 ? console.log('you can vote') : console.log('tui kida')

let price = 500;
const isLeader = false;

if(isLeader == true){
    price = 0
}
else{
    price = price + 100;
}
// console.log(price)

price = isLeader === true ? 0 : price + 100;

// optional : semi advanced ternary

if(isLeader === true){
    if(price > 1000){
        price = price /2;
    }
    else{
        price = 0;
    }
}
else{
    price = price + 1000;
}


// feel free to ignore
// price = isLeader === true ? price > 1000 ? price /2 : 0 : price + 1000;
price = isLeader === true ? 
price > 1000 ?
 price /2 : 0 
 : price + 1000;
