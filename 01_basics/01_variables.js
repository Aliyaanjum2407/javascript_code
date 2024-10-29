const accountId = 145656
let accountEmail ="aliya@gmail.com"
var accountPassword = "141414"
accountCity = "banglore" 


/*
prefer not to use var
because of issue in block scope and functional scope
*/
accountEmail = "sabiya@gmail.com"
accountPassword = "242424"
console.table([accountId, accountEmail, accountPassword, accountCity])