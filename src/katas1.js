function oneThroughTwenty() {
    
  let meuRetorno = [];
  for (let counter = 1; counter <= 20; counter++) {
    meuRetorno.push(counter)
  }
  return meuRetorno;
}

console.log(oneThroughTwenty());
//call function oneThroughTwenty

function evensToTwenty() {
  // Retornar os números pares de 1 a 20. (2, 4, 6,…, 18, 20)  
  let meuRetorno = [];
  for (let counter = 1; counter <= 20; counter++) {
    if(counter%2 ===0){
    meuRetorno.push(counter)
    }
  }
  return meuRetorno;
}
console.log(evensToTwenty());
//call function evensToTwenty

function oddsToTwenty() {
    
  //Retornar os números ímpares de 1 a 20. (1, 3, 5,…, 17, 19)
  let meuRetorno = [];
  for (let counter = 1; counter <= 20; counter++) {
    if(counter%2 !==0){
    meuRetorno.push(counter)
    }
  }
  return meuRetorno;
}
console.log(oddsToTwenty());
//call function oddsToTwenty

function multiplesOfFive() {
    
  // Retornar os múltiplos de 5 até 100. (5, 10, 15,…, 95, 100)
  let meuRetorno = [];
  for (let counter = 1; counter <= 100; counter++) {
    if(counter%5 ===0){
    meuRetorno.push(counter)
    }
  }
  return meuRetorno;
}
console.log(multiplesOfFive());
//call function multiplesOfFive

function squareNumbers() {
    
 //Retornar todos os números até 100 que forem quadrados perfeitos. (1, 4, 9, …, 81, 100)
 let meuRetorno = [];
 for (let counter = 1; counter <= 100; counter++) {
   if(Math.sqrt(counter) % 1 === 0){
   meuRetorno.push(counter)
   }
 }
 return meuRetorno;
}
console.log(squareNumbers());
//call function squareNumbers

function countingBackwards() {
    
  //Retornar os números contando de trás para frente de 20 até 1. (20, 19, 18, …, 2, 1)
  let meuRetorno = [];
  for (let counter = 20; counter >= 1; counter--) {
    meuRetorno.push(counter)
  }
  return meuRetorno;
}
console.log(countingBackwards());

//call function countingBackwards

function evenNumbersBackwards() {
    
 //Retornar os números pares de 20 até 1. (20, 18, 16, …, 4, 2)
 let meuRetorno = [];
  for (let counter = 20; counter >= 1; counter--) {
    if(counter%2 ===0){
    meuRetorno.push(counter)
    }
  }
  return meuRetorno;
}
console.log(evenNumbersBackwards());
//call function evenNumbersBackwards

function oddNumbersBackwards() {
    
 //Retornar os números ímpares de 20 até 1. (19, 17, 15, …, 3, 1)
 let meuRetorno = [];
 for (let counter = 20; counter >= 1; counter--) {
   if(counter%2 !==0){
   meuRetorno.push(counter)
   }
 }
 return meuRetorno;
}
console.log(oddNumbersBackwards());
//call function oddNumbersBackwards

function multiplesOfFiveBackwards() {
    
 //Retornar os múltiplos de 5 contando de trás para frente a partir de 100. (100, 95, 90, …, 10, 5)
 let meuRetorno = [];
  for (let counter = 100; counter >= 1; counter--) {
    if(counter%5 ===0){
    meuRetorno.push(counter)
    }
  }
  return meuRetorno;
}
console.log(multiplesOfFiveBackwards());
//call function multiplesOfFiveBackwards

function squareNumbersBackwards() {
    
   //Retornar os quadrados perfeitos contando de trás para frente a partir de 100. (100, 81, 64, …, 4, 1)
   let meuRetorno = [];
   for (let counter = 100; counter >= 1; counter--){
     if(Math.sqrt(counter) % 1 === 0){
       meuRetorno.push(counter)
     }
   }
   return meuRetorno;
}
console.log(squareNumbersBackwards());
//call function squareNumbersBackwards
