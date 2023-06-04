var fNameRegex=/^[a-zA-Z]+$/;
var lNameRegex=/^[a-zA-Z]+$/;
var passwordRegex=/^[a-zA-Z@_]{8,14}$/;
var aNumberRegex=/^\d{8}$/;
var emailRegex=/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;


var registrationPageHandler=function registrationPage(){
    var inputFName=document.getElementById("fname").value;
    var inputLName=document.getElementById("lname").value;
    var inputPassword=document.getElementById("password").value;
    var inputANumber=document.getElementById("anumber").value;
    var inputAddress=document.getElementById("address").value;
    var inputEmail=document.getElementById("email").value;
    var emptyFName=document.getElementById("emptyFName");
    var emptyLName=document.getElementById("emptyLName");
    var emptyPassword=document.getElementById("emptyPassword");
    var emptyANumber=document.getElementById("emptyANumber");
    var emptyAddress=document.getElementById("emptyAddress");
    var emptyEmail=document.getElementById("emptyEmail");
    var incorrectFName=document.getElementById("incorrectFName");
    var incorrectLName=document.getElementById("incorrectLName");
    var incorrectPassword=document.getElementById("incorrectPassword");
    var incorrectANumber=document.getElementById("incorrectANumber");
    var incorrectEmail=document.getElementById("incorrectEmail");

    if(inputFName===""){
        emptyFName.innerHTML="First Name cannot be empty";
        return false;
    }
    if(inputLName===""){
        emptyLName.innerHTML="Last Name cannot be empty";
        return false;
    }
    if(inputPassword===""){
        emptyPassword.innerHTML="Password cannot be empty";
        return false;
    }
    if(inputANumber===""){
        emptyANumber.innerHTML="Account number cannot be empty";
        return false;
    }
    if(inputAddress===""){
        emptyAddress.innerHTML="Address cannot be empty";
        return false;
    }
    if(inputEmail===""){
        emptyEmail.innerHTML="Email cannot be empty";
        return false;
    }
    if(fNameRegex.test(inputFName)===false){
        incorrectFName.innerHTML="First name only contain Alphabets";
        return false;
    }
    if(lNameRegex.test(inputLName)===false){
        incorrectLName.innerHTML="Last name only contain Alphabets";
        return false;
    }
    if(passwordRegex.test(inputPassword)===false){
        incorrectPassword.innerHTML="Minimum password length must be 8 character";
        return false;
    }
    if(aNumberRegex.test(inputANumber)===false){
        incorrectANumber.innerHTML="Account number must contain 8 non-negative numbers";
        return false;
    }
    if(emailRegex.test(inputEmail)===false){
        incorrectEmail.innerHTML="should be in email format";
        return false;
    }
    return true;
}