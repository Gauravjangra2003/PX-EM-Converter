let inpBase = document.getElementById("inp-base-px");
let inpPX = document.getElementById("inp-px");
let inpEM = document.getElementById("inp-em");


//Function to convert pixels to em
let pxToEm = () => {
  let inpBaseValue = inpBase.value;
  let pxValue = inpPX.value;
  //Checking if input field is not empty
  //If not empty then calculate the em value
  if (pxValue.length != 0) {
    inpEM.value = pxValue / inpBaseValue;
  }
  //If empty then clear em field
  else {
    inpEM.value = "";
  }
};


//Function to convert em to pixel
let emToPx = () => {
  let inpBaseValue = inpBase.value;
  let emValue = inpEM.value;
  //Checking if input field is not empty
  //If not empty then calculate the pixel value
  if (emValue.length != 0) {
    inpPX.value = emValue * inpBaseValue;
  }
  //If empty then clear the Px field
  else {
    inpPX.value = "";
  }
};


    //Function to calculate EM and PX when Base Font Size is changed
let calcEmPx = () => {
  //Checking if input field is not empty
  //If not empty then run emToPx()/pxToEm()
  if (inpBase.value.length != 0) {
    emToPx();
  }
  //If empty then clear Px and em field
  else {
    inpPX.value = "";
    inpEM.value = "";
  }
};


//Adding oninput event to each input field

inpPX.oninput = pxToEm;     // That Convert Pixel to EM 
inpEM.oninput = emToPx;     // That Convert Em to Pixel
inpBase.oninput = calcEmPx;   // That calculate Em AND Pixel when the font size of both are Chnaged