const salary = 25001;
const isBCS = true;
const height = 61; 
const hasCar = false;

// if(salary > 20000 && height > 66){
//     console.log('siuuuu----patro');
// }
// else{
//     console.log('no siuuuu');
// }

// if(salary > 25000 || height > 72){
//     console.log('siuuuu');
// }
// else{
//     console.log('not siuuu');
// }

// more and more

// if(salary > 25000 || height > 72 || isBCS == true){
//     console.log('siuuuu');
// }
// else{
//     console.log('not siuuu');
// }

if(salary > 25000 && height > 72 && isBCS == true){
    console.log('siuuuu');
}
else{
    console.log('not siuuu');
}


// --------- complex conditon -------------

if((salary > 25000 && hasCar == true) || isBCS == true){
  console.log('siuuuu');
}

if((salary > 25000 || hasCar == true) && isBCS == true){
  console.log('siuuuu');
}
