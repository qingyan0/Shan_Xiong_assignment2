const itemsObject = [
    { quantity: 1, price: 200},
    { quantity: 3, price: 350},
    { quantity: 5, price: 400},
]

const result= itemsObject.map(function (item) {
    return {quantity: item.quantity * 2, 
              price: item.price * 2}
  });
console.log(result);

const newarr = itemsObject.filter ((item,index) =>{
    return item.quantity > 2 
            && item. price > 300
})
console.log(newarr);


const total = itemsObject.reduce(function (temp,item) {
    return {quantity:temp.quantity + item.quantity ,
            price:temp.price + item.price}
});
console.log(total);




const string = ' Perhaps The Easiest-to-understand Case   For Reduce Is   To Return The Sum Of   All The Elments In  An Array ';
let reg =string.replace(/[^a-z]\s/gi ,"");  
let text = reg.toLowerCase();
console.log(text);