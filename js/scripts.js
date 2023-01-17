
window.addEventListener("load", function() {
  document.getElementById("button1").addEventListener("click", mainFunction); 
  document.getElementById("button2").addEventListener("click",resetProcedure);
});

const mainFunction = function(e){
  e.preventDefault;
  //put answers into variables
  aq1 =document.getElementById("q1").value;
  aq2 =document.getElementById("q2").value;
  aq3 =document.getElementById("q3").value;
  aq4 =document.getElementById("q4").value;
  aq5 =document.getElementById("q5").value;
  //run intoScoringKey 5 times, outputting variables into single variable: numberKey
  let numberKey = (intoScoringKeys(aq1)+intoScoringKeys(aq2)+intoScoringKeys(aq3)+intoScoringKeys(aq4)+intoScoringKeys(aq5));
  //numberKey to stringKey variable
  let stringKey = numberKey.toString();
  //run keyStrip on stringKey, outputting array: aKey[]
  keyStrip(stringKey);
  //run keyDecoder on aKey[] and output text to DOM  
  document.querySelector("p").innerText =keyDecoder(aKey[2],aKey[1],aKey[0]);
  // make reset button and answer visible, submit button go away
  document.getElementById("output").setAttribute("class", "visible");
  document.getElementById("button2").setAttribute("class","visible");
  document.getElementById("button1").setAttribute("class","hidden");
  console.log(document.getElementById("button2"));
  };

// FUNCTIONS
//declare function to input answers to key
function intoScoringKeys(aq) {
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
    return "error";
  }
}
//declare keyStrip: separates stringKey to array of 3 string variables [aKey]
function keyStrip(theKey) {
  return aKey= [theKey.slice(2), theKey.slice(1,2), theKey.slice(0,1)];
}
//takes in single digit scores for each of 3 language possibilities
function keyDecoder(cS,jS,pY){
  // IF YOU WANT TO TWEAK ANSWERS console.log("cS: "+ cS + "  jS: " +jS +"  pY: "+pY);  
  // first if is to make sure all 5 questions were answered
  if(pY.length > 5 ){
    return "Please go back and make sure you've answered each question."
  }
  
    else if(pY > 3){
      return "Python, very confident";
    }
    else if(pY > 2){
      return "Python, but I am a little biased";
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
      return "C# might work for you, but so would a nice vacation!";
    }
    else {
      return "No. Idea. ¯\_(ツ)_/¯";
    }
}
function resetProcedure() {
  document.getElementById("button2").setAttribute("class","hidden");
  document.getElementById("output").setAttribute("class","hidden");
  document.getElementById("button1").setAttribute("class","visible");
  document.querySelector("form").reset();
}