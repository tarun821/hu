function yoyo(){
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
    if(username =="html" && password == "css"){
        //alert("Login Successfully");
        window.location.href="index.html";
        return false;
    }
    if(username =="" && password == ""){
        alert("username and password must be filled !");
        return false;
    }
    else if(username ==""){
        alert("username must be filled !");
        return false;
    }
    else if(password == ""){
        alert("password must be filled !");
        return false;
    }
    else if(username =="html" && password != "css"){
        alert("Wrong password !");
        return false;
    }
    else if(username != "html" && password == "css"){
        alert("Wrong username !");
        return false;
    }
    else{
        alert("check username and password !");
    }

}