/*const xmlhttp = new XMLHttpRequest();
  xmlhttp.onload = function() {
    myObj = JSON.parse(this.responseText);
    var tableData = '';
    $.each(myObj, function(index, data) {
    tableData += '<tr><td>'+data.companyId+'</td><td>'+data.name+'</td><td>'+data.email+'</td><td>'+data.password+'</td><td>' + data.contactNo + '</td><td>' + data.address + '</td></tr>';
    });

   /* for (x in myObj) {
      text += "<tr><td>" + myObj[x].name + "</td></tr>";
    }
    text += "</table>"    */
    //document.getElementById("tbody").innerHTML = tableData;
  //}  

  /*xmlhttp.open("POST", "http://64.227.180.95:8081/company/getList", true);
  xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");  */



  /*const xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", "http://64.227.180.95:8081/company/getList", true);
  xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xmlhttp.onload = function() {
    myObj = JSON.parse(this.responseText);
    var textyy = "<table border='1'><thead><tr><th>Company ID</th><th>Company Name</th><th>Company Email</th><th>Password</th><th>Contact No.</th><th>Address</th></tr></thead>"
    for (x in myObj) {
      textyy = textyy + "<tr><td>" + myObj[x].companyId + "</td><td>" + myObj[x].name + "</td><td>" + myObj[x].email + "</td><td>" + myObj[x].password + "</td><td>" + myObj[x].contactNo + "</td><td>"+ myObj[x].address + "</td></tr>";
    }
    textyy =  textyy + "</table>"    
    document.getElementById("demo").innerHTML = textyy;
    console.log("Got the data");
  }
    console.log("End");  */

    fetch('http://64.227.180.95:8081/company/getList').then(function (response) {
	// The API call was successful!
	return response.json();
}).then(function (data) {
	// This is the JSON from our response
  console.log(data)

  /*myObj = JSON.parse(data); */
  var textyy = "<table border='1'><thead><tr><th>Company ID</th><th>Company Name</th><th>Company Email</th><th>Password</th><th>Contact No.</th><th>Address</th></tr></thead>"
    for (var i=0; i<data.length; i++) {
      textyy = textyy + '<tr><td>'+ data[i].companyId +'</td><td>'+ data[i].name +'</td><td>'+ data[i].email +'</td><td>'+ data[i].password +'</td><td>' + data[i].contactNo + '</td><td>' + data[i].address + '</td></tr>';
    }
    textyy =  textyy + "</table>"    
    document.getElementById("demo").innerHTML = textyy;
    console.log("Got the data"); 
    console(textyy);


	//console.log(data);
}).catch(function (err) {
	// There was an error
	console.warn('Something went wrong.', err);
});

