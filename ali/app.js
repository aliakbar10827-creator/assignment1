function addnumber(num1, num2) {
    return num1 + num2
}
let Addition = addnumber(9, 17);
console.log(Addition);


//subtraction section
function subtractnumber(num3, num4) {
    return num3 - num4
}
let Subtraction = subtractnumber(20, 10);
console.log(Subtraction);


//multiplication section
function multiplication(num5, num6) {
    return num5 * num6
}
let Multiplication = multiplication(5, 5)
console.log(Multiplication);


// division section
function divide(num7, num8) {
    return num7 / num8
}
let Divide = divide(10, 5)
console.log(Divide)


// getRemainder
function getRemainder(num9, num10) {
    return num9 % num10
}
let GetRemainder = getRemainder(17, 5)
console.log(GetRemainder)


// isPositive
let numm = Number(prompt("Enter your number"));

function isPositive(numm) {
    if (numm > 0) {
        console.log("Number is positive");
    } else if (numm < 0) {
        console.log("Number is not positive");
    } else {
        console.log("Number is Zero");
    }
}

isPositive(numm)


// isNegative
let numb = Number(prompt("Enter your number"));

function isNegative(numb) {
    if (numb < 0) {
        console.log("Congratulation! Number is negative")
    } else {
        console.log("Number is not negative")
    }
}

isNegative(numb)


// checkEven
let numbe = Number(prompt("Enter your number"));

function checkEven(numbe) {
    if (numbe % 2 === 0) {
        console.log("Number is Even")
    } else {
        console.log("Number is odd")
    }
}


// isEqual
let nuum1 = Number(prompt("Enter you First number"))
let nuum2 = Number(prompt("Enter you Second number"))

function isEqual(nuum1, nuum2) {
    if (nuum1 === nuum2) {
        console.log("Both are equal")
    } else {
        console.log("Both are not equal")
    }
}

isEqual(nuum1, nuum2)


// compareNumbers
let num1 = Number(prompt("Enter your first number"))
let num2 = Number(prompt("Enter your Second number"))

function compareNumbers(num1, num2) {
    if (num1 > num2) {
        console.log(num1 + " is greater than " + num2);
    }
    else if (num1 < num2) {
        console.log(num1 + " is not greater than " + num2);
    }
}

compareNumbers(num1, num2)


// getFullName
let name1 = prompt("Enter your first name");
let name2 = prompt("Enter your second name");

function getFullName(name1, name2) {
    if (name1 && name2) {
        console.log("Welcome " + name1 + " " + name2);
    } else {
        console.log("you didn't Enter your name")
    }
}

getFullName(name1, name2)


//getGrade
let number = Number(prompt("Enter your Number"))

function getGrade(number) {
    if (number >= 40) {
        console.log("You are pass")
    } else if (number < 40) {
        console.log("Your fail")
    } else {
        console.log("you didn't do your exam")
    }
}

getGrade(number)


// isEligibleToVote
let age = Number(prompt("Enter your age"))

function isEligibleToVote(age) {
    if (age >= 18) {
        console.log("Your Eligible for Voting")
    } else if (age < 18) {
        console.log("You're not Eligible for Voting")
    }
}

isEligibleToVote(age)


// findAbsoluteValue
let num = Number(prompt("Enter your number"))

function findAbsoluteValue(num) {
    if (num < 0);

    else {

    }
}

findAbsoluteValue(num)


// checkTemperature
let temperature = Number(prompt("Enter the room's temperature"))

function checkTemperature(temperature) {
    if (temperature > 30) {
        console.log("It's Hot")
    } else if (temperature <= 10 && 0) {
        console.log("It's Cold")
    } else {
        console.log("It's Normal")
    }
}

checkTemperature(temperature)


// getTriangleType
let a = Number(prompt("Enter First side  of triangle"))
let b = Number(prompt("Enter Second side  of triangle"))
let c = Number(prompt("Enter Third side  of triangle"))

function getTriangleType(a, b, c) {
    if (a == b & b == c) {
        console.log("Equilateral")
    } else if (a === b || b === c || a === c) {
        console.log("Isosceles")
    } else {
        console.log("all sides are different")
    }
}

getTriangleType(a, b, c)


// calculateDiscountedPrice
let price = Number(prompt("Enter product price"));
let discount = Number(prompt("Enter discount percentage"));

function calculateDiscountedPrice(price, discount) {

    let discountAmount = (price * discount) / 100;

    let finalPrice = price - discountAmount;

    console.log("Original Price: " + price);
    console.log("Discount: " + discountAmount);
    console.log("Final Price: " + finalPrice);

}

calculateDiscountedPrice(price, discount);


// isPasswordValid
let pass = prompt("Enter the password");

function isPasswordValid(pass) {
    if (pass === "ali") {
        console.log("You're phone is unlock")
    } else {
        console.log("Wrong password")
    }
}

isPasswordValid(pass)