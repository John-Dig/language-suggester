
//
window.onload = function() {
  let form = document.querySelector("form");
  //runs on submission
  form.onsubmit = function(e) {
    e.preventDefault();
  //put answers into string variables
     aq1 =document.getElementById("q1").value;
     aq2 =document.getElementById("q2").value;
     aq3 =document.getElementById("q3").value;
     aq4 =document.getElementById("q4").value;
     aq5 =document.getElementById("q5").value;
     console.log("here");

     //declare function for key for final l output
      function langPref(aq) {
        
          if (aq === "Math") {
            return 1;
          }
          if (aq === "Verbal") {
            return 10;
          }
          if(aq === "I sure do") {
            return 10;
          }
          if(aq === "No, that's annoying") {
            return 100;
          }   
          if(aq === "I love the guy, he's a saint") {
            return 100;
          }
          if(aq === "I hate him, he's the devil") {
            return 1;
          }
          if(aq === "Build a bridge with sticks and nature to cross a ravine"){
            return 1;
          }
          if(aq ==="Act your way free with cunning and charisma"){
            return 10;
          }
          if(aq ==="Yes"){
            return 1;
          }
          if(aq ==="No"){
            return 100;
          }
          else {
            alert("Something not entered correctly");
          }
        }
        let lKey = (langPref(aq1)+langPref(aq2)+langPref(aq3)+langPref(aq4)+langPref(aq5));
        function keyDecoder(lKey) {
          if(lKey=== 10) {
            lKey === 
          }



        }
          

        document.querySelector("p").innerText = aq2;
      
  };
}  
//business logic