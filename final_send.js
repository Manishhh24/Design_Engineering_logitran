function dataconverter(){

    let xhr = new XMLHttpRequest();
    let url = "http://64.227.180.95:8081/company/save";

    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");

    var companyname = document.forms["companyform"]["name"].value;
    console.log(companyname);

    var email = document.forms["companyform"]["email"].value;
    console.log(email);
    
    var pass = document.forms["companyform"]["password"].value;
    console.log(pass);

    var phoneno = document.forms["companyform"]["contactNo"].value;
    console.log(phoneno);

    var addrss = document.forms["companyform"]["address"].value;
    console.log(addrss);

    var comname = String.toString(companyname);
    var cemail = String.toString(email);
    var cpass = String.toString(pass);
    var cphoneno = String.toString(phoneno);
    var caddrss = String.toString(addrss);

    let texty = '{ "name" : "' + companyname + '", "email" : "' + email + '", "password" : "'+ pass + '", "contactNo" : "' + phoneno + '", "address" : "' + addrss + '"}';

    //const obj = JSON.parse(text);

    xhr.send(texty);

    console.log("DONEEE");


    console.log(texty);
    console.log("DONEEE");



}