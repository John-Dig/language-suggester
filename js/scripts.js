
//
window.onload = function() {
  let form = document.querySelector("form");
  //runs on submission
  form.onsubmit = function(e) {
    e.preventDefault();
    //console.log("submitted, and " + document.getElementById("q5").value);
   
     aq1 =document.getElementById("q1").value;
     aq2 =document.getElementById("q2").value;
     aq3 =document.getElementById("q3").value;
     aq4 =document.getElementById("q4").value;
     aq5 =document.getElementById("q5").value;


     //calculate language preference
    

     
     

      let langPref = function(aq) {
        let result = 0;
        
          if (aq === "Math") {
            result = 1;
          }
          if (aq === "Verbal") {
            result = 10;
            
          }
          if(aq === "I sure do") {
            result = 10;
          }
          if(aq === "No, that's annoying") {
            result = 100;

          }   
          console.log(result);
        }

        let lan1 = langPref(aq1);
        let lan2 = langPref(aq2);
        let lan3 = langPref(aq3);
        let lan4 = langPref(aq4);
        let lan5 = langPref(aq5);
        let lanFinal = lan1 + lan2 + lan3 + lan4 + lan5;
        console.log (lanFinal);
        console.log(lan1, lan2);




        // let language = langPref(aq1) + langPref(aq2);
        // console.log(language);

      }
      
  };

//business logic

