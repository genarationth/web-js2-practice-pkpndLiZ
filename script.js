// Part2: New contender

// Challenge 1: Create an Age Calculator
// const myBirthYear = 1996;
// const futureYear = 2023;

// myPossibleAge = futureYear - myBirthYear;

// console.log(`If you were born in ${myBirthYear}, then in 2026 you’ll be ${myPossibleAge-1} or ${myPossibleAge} (depending on the month in 2026).`)


//Challenge 2: Create an information card

function getUserInformation() {
    let name = document.getElementById("name").value;
    let location = document.getElementById("location").value;
    let hobby = document.getElementById("hobby").value;
    let displayInfo = document.getElementById("displayInfo").innerHTML = `Hi, my name is ${name}. I live in ${location} and enjoy ${hobby}.`;
    console.log(`Hi, my name is ${name}. I live in ${location} and enjoy ${hobby}.`);
 }