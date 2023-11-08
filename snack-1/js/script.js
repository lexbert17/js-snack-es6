const racingBike = [
    {
        brand: "bianchi",
        weight: 9.4
    },
    {
        brand: "scott",
        weight: 7.8 
    },
    {
        brand: "specialized",
        weight: 10.4
    }
    
]

const [_ , lighterbike] = racingBike;
console.log(lighterbike);

const {brand, weight} = lighterbike;
console.log(brand, weight);

const string = `la bici più leggera è la ${brand} con un peso di ${weight} kg.`
console.log(string);
  
const resultElem =document.getElementById("result")
resultElem.innerHTML = string
console.log(resultElem);


