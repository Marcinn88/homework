func get_median_of_first_week_expenses(expenses) {
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

print(get_median_of_first_week_expenses(expenses))
