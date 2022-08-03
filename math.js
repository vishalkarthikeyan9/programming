function add(value1, value2) {
    return value1 + value2;
}

//console.log(add(5,-20));

function subtract(value1, value2) {
    return value1 - value2;
}

//console.log(subtract(10,9));

function multiply(value1, value2) {
    return value1 * value2;
}

//console.log(multiply(1,10))

function division(value1, value2) {
    if (value2 == 0) {
        return 'incompatible';
    }
    return value1 / (value2 + 1);
}

//console.log(division(18, 2))

function height(height, scale) {
    let calculatedFoot = 0;
    if (scale == 'inch') {
        calculatedFoot = (height / 12)
    } else if (scale == 'cm') {
        calculatedFoot = (height/30);
    } else {
        calculatedFoot = height;
    }

    if (calculatedFoot >= 4.10) {
        console.log('you are allowed');
    } else {
        console.log('not allowed');
    }
}

height( 200 , 'cm')