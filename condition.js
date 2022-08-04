
function vowel(letter) {
    switch (letter) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            {
                return ' is a vowel';
            }
        default:
            {
                return ' not vowel';
            }
    }
}
//console.log(vowel('d'))


function days(month) {
    if (month == 'January') {
        return '31'
    } else if (month == 'March') {
        return '31'
    } else if (month == 'February') {
        return 'usually has 28 days but every 4 years has 29!!!'
    } else if (month == 'May') {
        return '31'
    } else if (month == 'July') {
        return '31'
    } else if (month == 'August') {
        return '31'
    } else if (month == 'October') {
        return '31'
    } else if (month == 'December') {
        return '31'
    } else {
        return '30'
    }

}


//console.log(days('June'))


function leapyear(leapyear) {
    if (leapyear % 4 == 0) {
        return 'LEAP YEAR!!!!!'
    } else {
        return 'not a leap year :((('
    }
}
//console.log(leapyear(2016,4));

function evenodd(evenorodd) {
    if (evenorodd % 2 == 0) {
        return ' even number'
    } else {
        return 'odd'
    }
}
//console.log(evenodd(-1001,2))


function negiposi(posinegi) {
    if (posinegi >= 0) {
        return 'positive'
    } else {
        return 'negative'
    }
}
//console.log(negiposi(17273747374747563858))


function integers(integer1, integer2) {
    if (integer1 == integer2) {
        return 'equal'
    } else {
        return 'not equal'
    }
}
//console.log(integers(-10,10))

function biggernumber(number1, number2) {
    if (number1 == number2) {
        return 'equal'
    } else if (number1 > number2) {
        return 'number1 bigger'
    } else (number1 < number2)
    { return 'number2 bigger' }

}
//console.log(biggernumber(20,50))

function dayofdaweek(weekendornot) {
    switch (weekendornot){
        case 7:
        case 1: 
        {
            return 'weekend'
        } 
        default:
            {
                return 'weekday'
            }
    }

}
console.log(dayofdaweek(5))


function classificationofage(age){
    if (age<2){
        return 'infant'
    } else if (age>=5){
        return 'toddler'
    } else if (age<=13) {
        return 'kid'
    } else if (age<=18) {
        return 'teen'
    } else if (age<=60) {
        return 'adult'
    } else {
        return 'senior'
    }

}
//console.log(classificationofage(15))


