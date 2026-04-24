function ahoj() {
    console.log ("ahoj")
    console.log ("ahoj")
}

ahoj();

let greeting = "Nazdárek";

function showGreeting() {
    console.log (greeting)
}

showGreeting();

function funkceUvnitr() {
    let cislo = 123;
    console.log(cislo);
}

funkceUvnitr();

// Parametr a Argument

function test(name) {
    console.log("Ahoj" + name);
}

test("Tomáš")
test("Ema")
test(123)

function scitani(num1, num2) {
    console.log(num1 + num2)
}
scitani(4,6)

function odcitani(num1, num2) {
    console.log(num1 - num2)
}

odcitani(69,2)

function deleni(num1, num2) {
    console.log(num1 / num2)
}

deleni(134,2)

function nasobeni(num1, num2) {
    console.log(num1 * num2)
}

nasobeni(1,67)

function printRange(start, end) {

    for (let i = start; i <= end; i++)
    console.log (i);
}
printRange (3,7)