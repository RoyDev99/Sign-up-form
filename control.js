function checkInputs(){
 let in1= document.getElementById("in1").value;
 let in2= document.getElementById("in2").value;
 let in3= document.getElementById("in3").value;
 let in4= document.getElementById("in4").value;
 let in5= document.getElementById("in5").value;
 let in6= document.getElementById("in6").value;
 
 if(in1=="")
 {
  document.getElementById("in1").style.borderColor="red";
 }
 else
 {
  document.getElementById("in1").style.borderColor="green";
 }
 
 if(in2=="")
 {
  document.getElementById("in2").style.borderColor="red";
 }
 else
 {
  document.getElementById("in2").style.borderColor="green";
 }
 
 if(in3=="")
 {
  document.getElementById("in3").style.borderColor="red";
 }
 else
 {
  document.getElementById("in3").style.borderColor="green";
 }
 
 if(in4=="")
 {
  document.getElementById("in4").style.borderColor="red";
 }
 else
 {
  document.getElementById("in4").style.borderColor="green";
 }
 
 if(in5=="")
 {
  document.getElementById("in5").style.borderColor="red";
 }
 else
 {
  document.getElementById("in5").style.borderColor="green";
 }
 
 if(in6=="")
 {
  document.getElementById("in6").style.borderColor="red";
 }
 else
 {
  if(in6===in3){
  document.getElementById("in6").style.borderColor="green";}
  else{
   document.getElementById("in6").style.borderColor="red";
  }
 }
}

function resetInputs(){
 document.getElementById("in1").value="";
 document.getElementById("in2").value="";
 document.getElementById("in3").value="";
 document.getElementById("in4").value="";
 document.getElementById("in5").value="";
 document.getElementById("in6").value="";
}

window.onbeforeunload=function(){
 resetInputs();
};
