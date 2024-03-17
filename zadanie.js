expenses = {
    "2023-01": {
        "01": {
            "food": [ 22.11, 43, 11.72, 2.2, 36.29, 2.5, 19 ],
            "fuel": [ 210.22 ]
        },
        "09": {
            "food": [ 11.9 ],
            "fuel": [ 190.22 ]
        }
    },
    "2023-03": {
        "07": {
            "food": [ 20, 11.9, 30.20, 11.9 ]
        },
        "04": {
            "food": [ 10.20, 11.50, 2.5],
            "fuel": []
        }
    },
    "2023-04": {}
}



function get_median_of_first_week_expenses(expenses) {
    result = null
    let filteredExpenses = [] 
    for (const month in expenses){
        const monthNumber = parseInt(month.substr(5))
        const yearNumber = parseInt(month.substr(0,4))
        const firstMonthDay = new Date (yearNumber, monthNumber-1, 1).getDay()
        let dayToSunday = 0
        let sundayDay = 0
            if ( firstMonthDay === 0 ) {
                 dayToSunday = 0
                 sundayDay = 1
            }
            else {
                 dayToSunday = 7 - firstMonthDay
                 sundayDay = dayToSunday+1
            }

           for(const day in expenses[month]){
            const dayNumber = parseInt(day)
            if (dayNumber <= sundayDay){
            valuesArray = Object.values(expenses[month][day])
            joinedArray = valuesArray.join(',')
            filteredExpenses.push(joinedArray)
        }
    }
    joinedFilteredArray = filteredExpenses.join(',').split(',').sort((a,b)=>a-b).filter((el)=>el > 0)
    }
console.log(joinedFilteredArray)

if (joinedFilteredArray.length % 2 == 0 ){
    let numberOne = parseFloat(joinedFilteredArray[(joinedFilteredArray.length/2)-1])
    let numberTwo = parseFloat(joinedFilteredArray[(joinedFilteredArray.length/2)])
    result = (numberOne+numberTwo)/2
}
    else{
        console.log(((joinedFilteredArray.length-1)/2)+1)
        result = joinedFilteredArray[((joinedFilteredArray.length-1)/2)]
    }

    return result
}
// print(get_median_of_first_week_expenses(expenses))
console.log('wynik zadania',get_median_of_first_week_expenses(expenses))