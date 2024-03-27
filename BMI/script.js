let weightSlider = document.getElementById("myWeight");
let weightOutput = document.getElementById("inputWeight");

let heightSlider = document.getElementById("myHeight");
let heightOutput = document.getElementById("inputHeight");

weightOutput.innerHTML = weightSlider.value;
heightOutput.innerHTML = heightSlider.value;

weightSlider.oninput = function () {
  weightOutput.innerHTML = this.value;
}
heightSlider.oninput = function () {
  heightOutput.innerHTML = this.value;
}

function showValWeight(newVal) {
  weightSlider.value=newVal;
};

function showValHeight(newVal) {
  heightSlider.value=newVal;
};

weightSlider.addEventListener("input", updateValueWeight);
heightSlider.addEventListener("input", updateValueHeight);
function updateValueWeight(e) {
  weightOutput.value = e.srcElement.value;
}
function updateValueHeight(e) {
  heightOutput.value = e.srcElement.value;
}

function calculateBmi() {
  let weight = document.bmiForm.realweight.value;
  let height = (document.bmiForm.realheight.value)/100;
  let realbmi = (weight)/Math.pow(height, 2);
  let realbmiOutput = document.getElementById("yourbmi");
  let messageOutput = document.getElementById("evaluationMessage");
  let roundedBmi = realbmi.toFixed(1);
  messageOutput.innerHTML = "";
  realbmiOutput.innerHTML = " " + roundedBmi;
  if (roundedBmi > 25) {
    messageOutput.innerHTML = "<br>DO EXCERCISE";
  }
  else if(roundedBmi<18) {

    messageOutput.innerHTML = "<br>HAVE PROPER MEAL";
    
  } else {
    messageOutput.innerHTML = "<br>FIT & FINE";
    
  }
}