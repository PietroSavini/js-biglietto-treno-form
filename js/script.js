//costanti
let kmPrice = 0.21;
console.log(kmPrice);
let username;
let kmTravel;
let ageDiscount;
let finalPrice;
let offerType;
let rN1;
let rN2;

//INPUT ------------------->variable initializzation from user
const submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click", function() {
    //input initializzation
    //data control for username
    const regex = /^[a-zA-Z\s]+$/;
    const usernameInput = document.getElementById("user-id");
    let username = usernameInput.value;
    if (!regex.test(username)){

        alert ('Il nome può contenere solo lettere e spazi, la pagina verrà ricaricata');
        location.reload();

    }else {

        const kmInput = document.getElementById('km-travel');
        kmTravel = kmInput.value;

        //age discount initializzation
        const ageInput = document.getElementById('user-age')
        console.log(ageInput.value);

        if (ageInput.value === 'minorenne'){
            ageDiscount = ('0.80');
            offerType = ('Sconto Minorenni');

        }else if (ageInput.value === 'over-65'){
            ageDiscount = ('0.60');
            offerType = ('Sconto Over-65');
        }else{
            ageDiscount = ('1');
            offerType = ('Biglietto standard');
        }
        console.log(offerType);
    }
    
    //OUTPUT ON SCREEN----------------------------------------------
    //calculations for final price
    ageDiscount = parseFloat(ageDiscount);
    kmTravel = parseFloat(kmTravel);
    kmPrice = parseFloat(kmPrice);
    finalPrice = (kmTravel * kmPrice) * ageDiscount;
    finalPrice = finalPrice.toFixed(2);
    document.getElementById("final-price").innerHTML = '€' + `${finalPrice}`;
    console.log(username);
    console.log(kmTravel);
    console.log(ageDiscount);
    
    //offet Type display
    document.getElementById("ticket-typeof").innerHTML = offerType;

    // random number generators
    rN1 = Math.floor(Math.random() *100000);
    rN2 = Math.floor(Math.random() *10 + 1);
    document.getElementById('cp-code').innerHTML = rN1;
    document.getElementById('wagon-num').innerHTML = rN2;
    document.getElementById('user').innerHTML = username;
}   
)

const emptyBtn = document.getElementById('empty');
emptyBtn.addEventListener("click", function() {
    location.reload();
})