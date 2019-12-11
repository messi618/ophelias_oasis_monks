


function Validate(_staffDataBase){
    let username = document.login.username.value;
    let password = doucment.lgoin.password.value;
    let valid = false; 
    let staffDataBase = _staffDataBase;

    for (const profile in staffDataBase) {
        if (username == profile.username && password == profile.password){
            valid = true;
            break;
        }
    }
    if (valid){
        alert("login was successful");
        window.location = "./main.html";
        return false;
    }else{
        alert("login was not successful, please try again.")
    }
    

}