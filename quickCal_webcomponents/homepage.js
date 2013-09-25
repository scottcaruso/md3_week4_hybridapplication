//Scott Caruso
//MiU 1206
//Project 3 - Homepage JS file

//The below function gets the name of elements from the form.

/*$(document).bind("pageinit", function(){
   var form = $("#addcardform");
   form.validate({
      invalidHandler: function(form, validator){},
      submitHandler: function(){
         saveCard();
      }
   });
});*/


function elementName(x){
   var elementName = document.getElementById(x);
   return elementName;              
};

//The below is a test function to use to verify that JS is working right in specific locations.
function testFunction(){
   alert("JS is working!")
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
}

/*   if(elementName("submit").value != "Edit Card"){
      var y = localStorage.length;
      var id = y+1;
   } else {
      var id = elementName("submit").key;
      };
   var cardColors = getCardColors();
   var cardType = getCardType();
   var card = {};
      card.name = ["Card Name:", elementName("cardname").value];
      card.usage = ["Currently In Use?", elementName("currentuse").value];
      card.type = ["Card Type:", cardType];
      card.mana = ["Mana Cost:", elementName("manacost").value];
      card.colors = ["Colors:", cardColors];
      card.notes = ["Notes:", elementName("comments").value];
      card.number = ["Number Owned:", elementName("numberowned").value];
   localStorage.setItem(id, JSON.stringify(card));
   alert(elementName("cardname").value + " has been added!");
   window.location="#home";
   window.location.reload();
};*/

//Make things happen when the links are clicked.
var testClick = elementName("submit");
testClick.addEventListener("click", testFunction);
