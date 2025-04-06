const markMass=78;
const markHeight=1.69;
const johnMass=95;
const johnheight=1.88;
const markBmi=(markMass/markHeight**2);
const johnBmi=(johnMass/(johnheight*johnheight));
console.log(markBmi,johnBmi);
if(markBmi>johnBmi){
    console.log(`${markBmi} is higher than ${johnBmi}`);
}else{
    console.log('john has a shorter than mark');
}




