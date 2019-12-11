

function register(){

    let username = document.register.username.value;
    let password = doucment.register.password.value;

    let email = document.register.email;
    
    let valid = true; 

    let custmoreDataBase = _custmoreDataBase;
    for ( var profile in custmoreDataBase ){
        if (email == profile.email){
            
            valid = false;
            break;
        }
    }
    if (vaild){    
        custmoreDataBase.add(username,password, email);
    }else{
        alert("an account with the email provided already exist!");
    }

}