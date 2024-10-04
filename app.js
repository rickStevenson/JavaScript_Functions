console.log("Hello Class!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count){

    if(count < 0){
        console.log("Please provide a non negative number");
        return;
    }

    for(let i = 0; i <= count; i++){
        if(i % 2 != 0){
            console.log(i);
        }
    }
}

printOdds(-10);
printOdds(10);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(name, age){
    
    if(!name || !age){
        console.log("Please provide you name and age");
        return;
    }

    let aboveSixteen = `Congrats ${name}, you can drive!`;
    let belowSixteen = `Sorry ${name}, but you need to wait until you're 16.`

    if(age >= 16){
        console.log(aboveSixteen);
    }else{
        console.log(belowSixteen);
    }
}

checkAge("Bubba", 15);
checkAge("Jack", 18);
checkAge();

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

function findQuadrant(x, y) {
    if (x === 0 && y === 0) {
        console.log("The point is at the origin.");
    } else if (x === 0) {
        console.log(`(${x}, ${y}) is on the y-axis.`);
    } else if (y === 0) {
        console.log(`(${x}, ${y}) is on the x-axis.`);
    } else if (x > 0 && y > 0) {
        console.log(`(${x}, ${y}) is in Quadrant 1.`);
    } else if (x < 0 && y > 0) {
        console.log(`(${x}, ${y}) is in Quadrant 2.`);
    } else if (x < 0 && y < 0) {
        console.log(`(${x}, ${y}) is in Quadrant 3.`);
    } else if (x > 0 && y < 0) {
        console.log(`(${x}, ${y}) is in Quadrant 4.`);
    }
}

findQuadrant(-9, 8);
findQuadrant(10, 0);
findQuadrant(0, 4);
findQuadrant(3,4);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

function typeOfTriangle(side1, side2, side3) {
    if (side1 + side2 <= side3 || side1 + side3 <= side2 || side2 + side3 <= side1) {
        console.log(`Sides ${side1}, ${side2}, ${side3} make an invalid triangle.`);
    } else {
        if (side1 == side2 && side1 == side3) {
            console.log(`Sides ${side1}, ${side2}, ${side3} make an equilateral triangle.`);
        }
        else if (side1 == side2 || side2 == side3 || side3 == side1) {
            console.log(`Sides ${side1}, ${side2}, ${side3} make an isosceles triangle.`);
        }
        else {
            console.log(`Sides ${side1}, ${side2}, ${side3} make a scalene triangle.`);
        }
    }
}

typeOfTriangle(1, 2, 2);  
typeOfTriangle(1, 1, 2);  
typeOfTriangle(3, 3, 3);  
typeOfTriangle(3, 4, 5);  

// Exercise Bonus Section
console.log("EXERCISE Bonus:\n==========\n");

function dataPlanStatus(planLimit, day, usage){
let daysInMonth = 30;
let daysLeftInMonth = daysInMonth - day;
let averageDailyUseAllowedToStayUnderLimit = planLimit / daysInMonth;
let currentDailyUsage = usage / day;
let projectedDailyUseBasedOnDailyCurrentUse = (currentDailyUsage * daysInMonth) - planLimit;
let dailyUseExceededBy = currentDailyUsage - averageDailyUseAllowedToStayUnderLimit;
let projectAmountToStayBelowMonthlyPlanLimit = averageDailyUseAllowedToStayUnderLimit - dailyUseExceededBy;
console.log(`${day} days used, ${daysLeftInMonth} days remaining`);
console.log(`Average use per day to stay under plan limit: ${averageDailyUseAllowedToStayUnderLimit.toFixed(2)} GB/day`);
console.log(`Your average use per day: ${currentDailyUsage.toFixed(2)} GB/day.`);
console.log(`You are EXCEEDING your average daily use by ${dailyUseExceededBy.toFixed(2)} GB/day, 
continuing this high usage, you'll exceed your data plan by ${projectedDailyUseBasedOnDailyCurrentUse.toFixed(2)} GB`);
console.log(`To stay below your data plan, use no more than ${projectAmountToStayBelowMonthlyPlanLimit.toFixed(2)} GB/day.`);
}

dataPlanStatus(100, 15, 56);