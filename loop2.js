function num(param1, param2) {
    let count = 1
    while (count <= 10) {
        console.log(count)
        count = count + 1
    }


}
// num(1,10)

function numbers(param1, param2) {
    let count = param1
    while (count <= param2) {
        console.log(count)
        count = count + 1
    }
}

//numbers(6,10)

function even(param1, param2) {
    let count = param1
    while (count <= param2) {
        if (count % 2 == 0) {
            console.log(count)

        }

        count = count + 1
    }


}
//even(25,100)

function sum(param1, param2) {
    let count = param1
    let sum = 0

    while (count <= param2) {
        sum = count + sum
        count = count + 1
    }
    console.log(sum)
}

//sum(1,5)


function timestable(param1, param2, param3) {
    let count = param1
    while (count <= param2) {
        console.log(count * param3)
        count = count + 1
    }
}
//timestable(1, 12 , 12)

function leap(param1){
    let leapyears=param1
    let leapYearCount= 0
    while(leapYearCount<=20){
        if(leapyears%4==0){
            console.log(leapyears)
            leapYearCount=leapYearCount+1
        }
   leapyears=leapyears+1
   
    }

}
leap(2016)

