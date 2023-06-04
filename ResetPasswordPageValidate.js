var passRegex=/^[a-zA-Z@_]{8,14}$/;

var passwordHandle=function passwordPageHandler(){
    var inputOldPassword=document.getElementById("oldPass").value;
    var inputNewPassword=document.getElementById("newPass").value;
    var inputretypeNewPassword=document.getElementById("retypeNewPass").value;
    var incorrectOldPassword=document.getElementById("incorrectOldPassword");
    var incorrectNewPassword=document.getElementById("incorrectNewPassword");
    var incorrectRetypeNewPassword=document.getElementById("incorrectRetypeNewPassword");

    if(inputOldPassword===""){
        incorrectOldPassword.innerHTML="Password should not be empty";
        return false;
    }
    if(passRegex.test(inputOldPassword)===false){
        incorrectOldPassword.innerHTML="Minimum password length must be 8 character with combination (A-Z) (a-z) (0-9)";
        return false;
    }
    if(inputNewPassword===""){
        incorrectNewPassword.innerHTML="Password should not be empty";
        return false;
    }
    if(passRegex.test(inputNewPassword)===false){
        incorrectNewPassword.innerHTML="Minimum password length must be 8 character with combination (A-Z) (a-z) (0-9)";
        return false;
    }
    if(inputretypeNewPassword===""){
        incorrecttypeNewPassword.innerHTML="Password should not be empty";
        return false;
    }
    if(passRegex.test(inputretypeNewPassword)===false){
        incorrectRetypeNewPassword.innerHTML="Minimum password length must be 8 character with combination (A-Z) (a-z) (0-9)";
        return false;
    }
    if(inputNewPassword!==inputretypeNewPassword){
        alert("New password and retyped password should be same");
        return false;
    }
    return true;
}