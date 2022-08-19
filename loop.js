function loopMyName(times) {
    let count = 1;
    while (count <= times) {
        console.log('Vishal kutty!!!');
        count = count + 1;
    }
}
//loopMyName(100);

function loopCount(numbers) {
    let count = 1;
    while (count <= numbers) {
        console.log(count)
        count = count + 1
    }

}

//loopCount(10)


function printNumbers(param1, param2) {
    let count = param1;
    while (count <= param2) {
        console.log(count)
        count = count + 1
    }
}
// printNumbers(20,30)

function findEvenNumbers(param1, param2) {
    let count = param1;
    let eventCount = 0;
    let oddCount = 0;
    while (count <= param2) {
        if (count % 2 == 0) {
            eventCount = eventCount + 1;
        } else {
            oddCount = oddCount + 1;
        }
        count = count + 1;
    }
    console.log('total even numbers', eventCount);
    console.log('total odd numbers,', oddCount)
}
// findEvenNumbers(20,30)


function sum(param1, param2) {
    let count = param1;
    let sumvalue = 0;
    while (count <= param2) {
        sumvalue = sumvalue + count;
        count = count + 1;
    }
    console.log(sumvalue);
}
//sum(1, 5)

function leapyear(leap1, leap2) {
    let year = leap1
    let leapyears = 0
    while (year <= leap2) {
        if (year % 4 == 0) {
            leapyears = leapyears + 1
        }
        year = year + 1
    }
    console.log(leapyears)
}
//leapyear(2020,2028)


function timestable(param1, param2, param3) {
    let count = param1
    while (count <= param2) {
        console.log(param3 * count)
        count = count + 1
    }

}
//timestable(1, 12 , 5)
//timestable(1, 12 , 7)
//timestable(1, 12 , 9)

function leapyears(leap1) {
    let currentYear = leap1
    let leapYearCount = 0
    while (leapYearCount <= 20) {
        if (currentYear % 4 == 0) {
            console.log(currentYear)
            leapYearCount = leapYearCount + 1;
        }
        currentYear = currentYear + 1
    }

}
//leapyears(2014)

function prime(primenumber) {
    let startingnumber = 2

    while (startingnumber <= primenumber - 1) {
        if (primenumber % startingnumber == 0) {
            return false;
        }
        startingnumber = startingnumber + 1
    }
    return true;
}
 console.log(prime(6))

 function printAllPrime(){
    let number=2;
    while(number<=100){
        if (prime(number)){
            console.log(number);
        }
        number = number+1;
    }
}
printAllPrime()


