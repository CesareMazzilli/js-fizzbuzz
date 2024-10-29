// Scriviamo un programma che stampi i numeri da 1 a 100 
// al posto dei numeri multipli di 3 --> stampi "Fizz"
// al posto dei numeri multipli di 5 --> stampi "Buzz"
// al posto dei numeri multipli sia di 3 che di 5 --> stampi "FizzBuzz"


for (var i = 1; i <= 100, i++;) {

    // var resto 3 = i % 3;
    // var resto 5 = i % 5;
    // var resto 15 = i % 15;

    if (i % 3 == 0 && i % 5 == 0) { // equivale a : i % 15 == 0
        // il numero è multiplo sia di 3 che di 5 --> stampo FizzBuzz
        console.log('FizzBuzz');
    } else if (i % 5 == 0) {
        // il resto della divisione per 5 è 0, quindi è multiplo di 5 --> stampo Buzz
        console.log('Buzz');
    } else if (i % 3 == 0) {
        // il resto della divisione per 3 è 0, quindi è multiplo di 3 --> stampo Fizz
        console.log('Fizz');
    } else {
        // il numero non è multiplo né di 3, né di 5 --> stampo il numero esatto
        console.log(i);
    }
}
