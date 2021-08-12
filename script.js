function compute(){
  //form validation for principal/amount box
   if (checkInput() == false){
      alert("incorrect value for amount, has to be positive");
      document.getElementById("principal").focus();
      return 0;
   }
   //variables for buttons
   var principal = document.getElementById("principal").value;
   var rate = document.getElementById("rate").value;
   var years = document.getElementById("years").value;
   
//interest calculation
   var interest = principal * years * rate /100;
//year calculation
   var year = new Date().getFullYear()+parseInt(years);

   //final result print
   document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+ interest+ ",\<br\>in the year "+year+"\<br\>"
}
//update rate
function updateRate(){
   var rateval = document.getElementById("rate").value;
   document.getElementById("rate_val").innerText = rateval + "%";
}
//function to perform input validation for principal
function checkInput(){
   var amount = document.getElementById("principal").value;

   if (amount < 0 || amount == 0){
      return false
   }
   else{
      return true;
   }
}

        