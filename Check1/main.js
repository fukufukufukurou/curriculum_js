//問1 まったく分かりません・・
let numbers=[2,5,12,13,15,18,22];
for(let i=0 ; i<numbers.length ; i++){
if(numbers[i]%2===0){
console.log(numbers[i]);
let num=numbers[i];

function isEven(num){
  console.log(num+'は偶数です');
}
}
}

//問２
class Car{
  constructor(gas,number){
    this.gas=gas;
    this.number=number;
}
getNumGas(gas,number){
  console.log(`ガソリンは${this.gas}です。ナンバーは${this.number}です。`);
}
}

let i=new Car('軽油',888);
i.getNumGas();