const account_id = 34372
let account_email = "soumya622gmail.com"
var account_password = "23234"
account_city = "jaipur"
let account_state;
// account_id = 343 not allowed


account_email = "hello@gmail.com"
account_password = "2321"
account_city = "bangluru"


/* prefer not to use var 
because of issue in block scope and functional scope
*/
console.log(account_password);

console.table([account_email,account_id,account_password,account_state,account_city])