var userNameRegex=/^[a-zA-Z]+$/;
var passwordRegex=/^[a-zA-Z@_]{8,14}$/;

var loginPageHandle=function loginPageValidation(){
    var inputUserId=document.getElementById("userId").value;
    var emptyUserName=document.getElementById("emptyUserName");
    var incorrectUserName=document.getElementById("incorrectUserName");
    var inputPassword=document.getElementById("pass").value;
    var emptyPassword=document.getElementById("emptyPassword");
    var incorrectPassword=document.getElementById("incorrectPassword");

    if(inputUserId===""){
        emptyUserName.innerHTML="Username cannot be empty";
        return false;
    }
    if(userNameRegex.test(inputUserId)===false){
        incorrectUserName.innerHTML="Username cannot contain special characters";
        return false;
    }
    if(inputPassword===""){
        emptyPassword.innerHTML="Password cannot be empty";
        return false;
    }
    if(passwordRegex.test(inputPassword)===false){
        incorrectPassword.innerHTML="Minimum password length must be 8 character";
        return false;
    }
    return true;
}