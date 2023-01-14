let aKey = [];
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

    //declare function to input answers to key
    function intoKeys(aq) {
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
      //runs intoKeys add keys together = nKey
      let nKey = (intoKeys(aq1)+intoKeys(aq2)+intoKeys(aq3)+intoKeys(aq4)+intoKeys(aq5));
      //nKey to sKey
      let sKey = nKey.toString();
      // declare and call function to split string into 3 language scoring variables
      
     console.log("here is skey: " +sKey);
      function keyStrip(theKey) {
        return aKey= [theKey.slice(2), theKey.slice(1,2), theKey.slice(0,1)];
      }
      keyStrip(sKey);
      console.log(aKey);
      //declare function to use key to get final string


      function keyDecoder(cS,jS,pY){
        console.log("cS: "+ cS + "  jS: " +jS +"  pY: "+pY);  
        if(pY > 3){
            return "Python, very confident";
          }
          else if(pY > 2){
            return "Python, fairly confident";
          }
          else if (cS > 2){
            return "C#, very confident";
          }
          else if (jS > 2){
            return "JavaScript, very confident";
          }
          else if (pY > 1){
            return "Python, maybe, but you are well rounded";
          }
          else if (cS > 1){
            return "You are going to have to figure it out for yourself";
          }
          else if (jS > 1){
            return "JavaScript might work for you, but so would a nice vacation";
          }
          else {
            return "No. Idea. ¯\_(ツ)_/¯";
        }
     }
   
    
  document.querySelector("p").innerText =keyDecoder(aKey[2],aKey[1],aKey[0]); //(keystrip(sKey));
  }
}