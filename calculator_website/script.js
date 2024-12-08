function clearDisplay(){
  document.getElementById("display").innerHTML = ""

}
function appendValue(value){
  document.getElementById("display").innerHTML+=value;
}
function calculateResult(){
  const display = document.getElementById("display");
  display.innerHTML = eval(display.innerHTML);
}