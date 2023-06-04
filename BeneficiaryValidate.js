var beneficiaryHandle=function beneficiaryPageHandler(){
    var inputFirstName=document.getElementById("firstName").value;
    var inputLastName=document.getElementById("lastName").value;
    var inputAccountNumber=document.getElementById("AccNumber").value;
    var inputTLimit=document.getElementById("tLimit").value;
    var inputEmail=document.getElementById("eAddress").value;
    var inputIfsc=document.getElementById("ifsc").value;
    var emptyFirstName=document.getElementById("emptyFirstName");
    var emptyLastName=document.getElementById("emptyLastName");
    var emptyAN=document.getElementById("emptyAN");
    var emptyTLimit=document.getElementById("emptyTLimit");
    var emptyEmail=document.getElementById("emptyEmail");
    var emptyIFSC=document.getElementById("emptyIFSC");


    if(inputFirstName===""){
        emptyFirstName.innerHTML="Username cannot be empty";
        return false;
    }
    if(inputLastName===""){
        emptyLastName.innerHTML="Username cannot be empty";
        return false;
    }
    if(inputAccountNumber===""){
        emptyAN.innerHTML="Username cannot be empty";
        return false;
    }
    if(inputTLimit===""){
        emptyTLimit.innerHTML="Username cannot be empty";
        return false;
    }
    if(inputEmail===""){
        emptyEmail.innerHTML="Username cannot be empty";
        return false;
    }
    if(inputIfsc===""){
        emptyIFSC.innerHTML="Username cannot be empty";
        return false;
    }
    return true;
}