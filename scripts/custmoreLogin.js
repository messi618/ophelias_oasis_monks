
const  checkCuslogin = require( './databasehandler.js');

function Validate(){
    let username = document.getElementById("inputEmail").value;
    let password = document.getElementById("inputPassword").value;
    let valid = false; 

    username = "martin@mail";
    password = "123";   
   
 checkCuslogin(username,password);
    
    
    

}

