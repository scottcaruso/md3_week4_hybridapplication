//Scott Caruso
//MiU 1206
//Project 3 - Homepage JS file

//The below function gets the name of elements from the form.

function elementName(x){
   var elementName = document.getElementById(x);
   return elementName;              
};

//The below is a test function to use to verify that JS is working right in specific locations.
function testFunction(){
   alert("JS is working!")
};

function showAndroidToast(toast) {
    Native.showToast(toast);
};

function handleReturn() {
	var validation = verifyAllFields();
	if (validation == false)
	{
		Native.showToast("Please fill out all fields and try again!");
	} else
	{
		var eventName = elementName("eventname").value;
		var eventLocation = elementName("location").value;
		var eventDetails = elementName("details").value;
		var allDayEvent = elementName("allday").value;
		Native.handleReturnFromWebPage(eventName,eventLocation,eventDetails,allDayEvent);
	}
};

function enableDatePickers(){
   if(elementName("allday").value == "No")
   {
      elementName("starttime").disabled = false;
      elementName("endtime").disabled = false;
   } else
   {
      elementName("starttime").disabled = true;
      elementName("endtime").disabled = true;
   }
};

function verifyAllFields(){
	if(elementName("eventname").value == "")
	{
		return false;
	} else if (elementName("location").value == "")
	{
		return false;
	} else if (elementName("details").value == "")
	{	
		return false;
	} else
	{
		return true;
	}
};

//Make things happen when the links are clicked.
//var testClick = elementName("submit");
//testClick.addEventListener("click", Native.showToast("Hello!"));
