
var currentNumberOfBags = 0;
var currentLbsPerBag = 0;
var totalLbsReceived = 0;
var currentTotalLbsBags = 0;

 
var currentTime = new Date(); 
    hour = currentTime.getHours();
    min  = currentTime.getMinutes();
    sec  = currentTime.getSeconds();

     function myTime(event) {
 document.getElementById("time").innerHTML =(hour + ":" + min + ":" + sec);
}        

	// Get the values that were typed in the name and description fields
	function addItem(event) {
		
	var date = document.getElementById("date").value;
	var time = document.getElementById("time").value;	
	var amoutTaken = document.getElementById("amout-taken").value;
	var productionLine = document.getElementById("production-line").value;
	var area = document.getElementById("area").value;
	var employeeName = document.getElementById("employee-name").value;
	var bagBalance = document.getElementById("bag-balance").value;
	var lbsBalance = document.getElementById("lbs-balance").value;
 	var comment = document.getElementById("comment").value;
  
  	// For debugging purposes to see what we typed in the input fields
	console.log("You typed: ", time  );

	// Create a new table row on the fly
	var newRow = document.createElement("tr");

	// Add table cells to the new table row
	var fields = [
		date, 
		time, 
		amoutTaken, 
		productionLine, 
		area, 
		employeeName, 
		bagBalance, 
		lbsBalance,
		comment,
	];
	for(var index = 0; index < fields.length; index++) {
		newRow.innerHTML += "<td>" + fields[index] + "</td>";
	}
	var fieldIds = [
	 	"date", 
		"time", 
		"amout-taken",	 
		"production-line", 
		"area", 
		"employee-name", 
		"bag-balance", 
		"lbs-balance",
		"comment",	  
	];

	// Subtract amountTaken from the currentNumberOfBags
	currentNumberOfBags = currentNumberOfBags - amoutTaken;

	// Update the current number of bags SPAN
	updateCurrentNumberOfBagsSpan();


	// Clear up the form fields
	for (var index = 0; index < fieldIds.length; index++) {
		document.getElementById(fieldIds[index]).value = '';
	}

	
	// Finally add the new record (new row) to the end of the table
	document.getElementById("list").appendChild(newRow);	
}


function updateBagBalance (event) {
    // Find value of a
   // var numberBags =  parseInt(document.getElementById("number-bags").value); 
   var numberBags = currentNumberOfBags;
	// Find the value of b
	var amoutTaken = event.target.value;

	console.log (Number(numberBags, amoutTaken));

	// Compute a - b
	var bagBalance = numberBags - amoutTaken;

	    //bag Balance lights
	 var greenLight =  document.getElementById("green-light");
	 var yellowLight = document.getElementById("yellow-light");
	 var redLight = document.getElementById("red-light");
	 
	

	  document.getElementById("bag-balance").value = bagBalance;
	  
	 if( bagBalance >= 50) {	 	 
	 	 greenLight.style.backgroundColor = "green";
	 	 body.style.backgroundColor = "green";	 	 
	 }  else  {	 	 
	 	 greenLight.style.backgroundColor = "white";
	  } if(bagBalance <= 25) {	 	
	  	 yellowLight.style.backgroundColor = "white";
	  }  else if (bagBalance <= 49){	 	
	  	 yellowLight.style.backgroundColor = "yellow";
	   }    if(bagBalance <= 25) {	 	
	     redLight.style.backgroundColor = "red";
	  	 } else if (bagBalance <= 10) {
	  	 		alert("Enter PassWord")
	  	 }

}
		


function changeCurrentBags (event) {
	currentNumberOfBags = event.target.value;
	//console.log(event.target.value);
	document.getElementById('current-number-of-bags').innerHTML =  currentNumberOfBags;	 

}

function updateCurrentNumberOfBagsSpan() {
	document.getElementById('current-number-of-bags').innerHTML =  currentNumberOfBags;

}



function changeCurrentLbsPerBag (event) {
	 
	 var lbsPerBag = document.getElementById("lbs-per-bag").value;
	 console.log("LbsPerBag");
	 var numberBags = document.getElementById("number-bags").value;
	  var numberBags = currentNumberOfBags;
	 console.log("numberBags");
	 var totalLbsReceived = document.getElementById("amount-received");
	 var  totalLbsReceived =  lbsPerBag * Number(numberBags);
	  
	 console.log("totalLbsReceived");


	 totalLbsReceived = event.target.value;
	console.log(event.target.value);

}






	


	
		
	



