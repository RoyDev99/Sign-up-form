function checkInputs(){
 let in1= document.getElementById("in1").value;
 let in2= document.getElementById("in2").value;
 let in3= document.getElementById("in3").value;
 let in4= document.getElementById("in4").value;
 let in5= document.getElementById("in5").value;
 let in6= document.getElementById("in6").value;
 let count1=0;
 let count2=0;
 let count3=0;
 let count4=0;
 let count5=0;
 let count6=0;
 if(in1=="")
 {
  document.getElementById("in1").style.borderColor="red";
 }
 else
 {
  document.getElementById("in1").style.borderColor="green";
  count1=1;
 }
 
 if(in2=="")
 {
  document.getElementById("in2").style.borderColor="red";
 }
 else
 {
  document.getElementById("in2").style.borderColor="green";
  count2=1;
 }
 
 if(in3=="")
 {
  document.getElementById("in3").style.borderColor="red";
 }
 else
 {
  document.getElementById("in3").style.borderColor="green";
  count3=1;
 }
 
 if(in4=="")
 {
  document.getElementById("in4").style.borderColor="red";
 }
 else
 {
  document.getElementById("in4").style.borderColor="green";
  count4=1;
 }
 
 if(in5=="")
 {
  document.getElementById("in5").style.borderColor="red";
 }
 else
 {
  document.getElementById("in5").style.borderColor="green";
  count5=1;
 }
 
 if(in6=="")
 {
  document.getElementById("in6").style.borderColor="red";
 }
 else
 {
  if(in6===in3){
  document.getElementById("in6").style.borderColor="green";
  count6=1;
  }
  else{
   document.getElementById("in6").style.borderColor="red";
  }
 }
 
 if(count1==1 && count2==1 && count3==1 && count4==1 && count5==1 && count6==1)
 {
  alert("welcome " +in1+" "+in4);
 }
 else
 {
  alert("Please check your input");
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
