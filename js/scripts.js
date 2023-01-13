//declare variables
var aq1 ="f";
var aq2 ="f";
var aq3 ="f";
var aq4 ="f";
var aq5 ="f";
console.log(aq1);
//
window.onload = function() {
  let form = document.querySelector("form");
  //runs on submission
  form.onsubmit = function(e) {
    e.preventDefault();
      console.log('here');
    let aq1 =document.getElementById("#q1");
    let aq2 =document.getElementById("#q2");
    let aq3 =document.getElementById("#q3");
    let aq4 =document.getElementById("#q4");
    let aq5 =document.getElementById("#q5");
  };
};