function myfunction(){
    var x =document.getElementById("pass");

    if(x.type === "passwor"){
        x.type = "text";
    }
    else{
        x.type = "password";
    }
}

function validate(){
    var password = document.getElementById("pass");
    var length = document.getElementById("length");

    if(password.value.length >= 8){
        alert("Login Succesfull");
        window.location.replace("404.html");
        return false;
    }
    else{
        alert("Login Failed");
    }
}



function lpage(){
    window.location.replace("Landingpage.html")
}
