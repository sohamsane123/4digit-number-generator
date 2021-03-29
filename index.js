// function randomNumber(){
//   var randomNum = Math.floor(Math.random() * 3 + 1);
//   if (randomNum === 1) {
//     document.getElementById("text").innerHTML = "College Paper";
//   } else if (randomNum === 2) {
//     document.getElementById("text").innerHTML = "21set 1st Paper";
//   } else if (randomNum === 3){
//     document.getElementById("text").innerHTML = "21set 2nd Paper";
//   }
// }

function FourDigitRandomNumber(){
  var val = Math.floor(1000 + Math.random() * 9000);
  document.getElementById("text").innerHTML = val;

}
