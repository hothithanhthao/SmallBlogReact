export function getTimeStamp() {
    //Create the current date value
    var current_date = new Date()

    var hour = current_date.getHours()
    var minute = current_date.getMinutes()
    var second = current_date.getSeconds()

    
    var result = (hour + ":" + minute + ":" + second ).toString()

    return result
}