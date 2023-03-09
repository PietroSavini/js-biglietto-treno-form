//costanti
const priceKm = (0.21)
const minorDiscount = (0.80);
const elderDiscount = (0.60);

//INPUT ------------------->variable initializzation from user

const submitBtn = document.getElementById('submit');
submitBtn.addEventListener("click", function() {
    const usernameInput = document.getElementById('user-id');
    const username = usernameInput.value;
    console.log(username);
}
)

// let userName = document.getElementById('user-id');
// let age;
// let totalKm;
// let finalPrice;

// //data control for userName
// const regex = /^[a-zA-Z]+$/;

// if (!regex.test(userName)){
//     alert ('Il nome può contenere solo lettere');
//     location.reload();
// }else {
//      age = prompt('inserisca la sua età');
//     //data control
//     if(age > 150){
//         alert('non accettiamo mummie o salme a bordo');
//         location.reload();
//     }else{
//          totalKm = prompt('per quanti km deve viaggiare a bordo del nostro treno? (inserisca numeri interi)');
//     } 
// }

// //variables as numbers
// age = parseInt(age);
// totalKm = parseInt(totalKm);
// finalPrice = parseInt(finalPrice);

// console.log(userName);
// console.log(age);
// console.log(totalKm);

// //discount calculations
// if(age < 18){
//     finalPrice = (totalKm * priceKm) * minorDiscount;
// }else if(age >= 65){
//     finalPrice = (totalKm * priceKm) * elderDiscount;
// }else{
//     finalPrice = totalKm * priceKm;
// }

// //final price with 2 decimals
// finalPrice = finalPrice.toFixed(2)
// console.log('this is the final price:' + finalPrice);