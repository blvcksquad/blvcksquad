function myfunction(){
    var x =document.getElementById("pass");

    if(x.type === "user"){
        x.type = "text";
    }
    else{
        x.type = "1";
    }
}

function validate(){
    var password = document.getElementById("pass");
    var length = document.getElementById("length");

    if(password.value.length >= 8){
        alert("Login Succesfull");
        window.location.replace("https://blvcksquad.github.io/blvcksquad-1/");
        return false;
    }
    else{
        alert("Login Failed");
    }
}



function lpage(){
    window.location.replace("Landingpage.html")
}
