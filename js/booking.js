// TRAIN TICKET CALCULATOR
/*
info: price * km = € 0,21

1 Ask how many km and age to passenger [x]
2 Set 20% discount for age <18 [x]
3 Set 40% discount for age >65 [x]
4 Set a value validator [x]

*/
function calculate() {

    var age = parseInt( document.getElementById("age").value );

    var km = parseInt( document.getElementById("km").value );

    var kmPrice = 0.21;

    var mileage = km * kmPrice;

    var oldDiscount = mileage - mileage * 0.4;

    var youngDiscount = mileage - mileage * 0.2;

    // console.log(oldDiscount.toFixed(2));

    // console.log(youngDiscount.toFixed(2));

    // console.log(mileage.toFixed(2));

    // VALIDATOR
    if ( isNaN(age) || age <= 0 || age >= 100 ){
        var age = NaN;
        alert("Warning! invalid age value! Retry");
        return;
    }

    if ( isNaN(km) || km <= 0 || km >= 100 ){
        var km = NaN;
        alert("Warning! invalid km value! Retry");
        return;
    }

    // AGE SELECTOR
    if ( age >= 18 && age <= 65 ){

        // console.log(mileage.toFixed(2) + "normale");

        document.getElementById("ticket").style.display = "block";

        document.getElementById("ticket-price").innerHTML = mileage.toFixed(2) + " €";

    }   else if ( age < 18 ){

        // console.log(youngDiscount.toFixed(2) + "giovane");

        document.getElementById("ticket").style.display = "block";

        document.getElementById("discount").style.display = "block";

        document.getElementById("ticket-discount").innerHTML = "-20%"

        document.getElementById("ticket-price").innerHTML = youngDiscount.toFixed(2) + " €";

    }   else {

        // console.log(oldDiscount.toFixed(2) + "vecchio");

        document.getElementById("ticket").style.display = "block";

        document.getElementById("discount").style.display = "block";

        document.getElementById("ticket-discount").innerHTML = "-40%"

        document.getElementById("ticket-price").innerHTML = oldDiscount.toFixed(2) + " €";

    }

}
