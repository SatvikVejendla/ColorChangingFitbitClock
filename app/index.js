import clock from "clock";
import document from "document";
import { preferences } from "user-settings";
import * as util from "../common/utils";

// Update the clock every minute
clock.granularity = "seconds";


var r = 255;
var g = 0;
var b = 0;
var stage=1;
async function start() {
  await wait(1);
  
  if(stage == 1){
    g+=15;
  } else if(stage == 2){
    r-=15;
  } else if(stage == 3){
    b+=15;
  } else if(stage == 4){
    g-=15;
  } else if(stage == 5){
    r+=15;
  } else if(stage == 6){
    b-=15;
  }
  if(stage== 1 && g>=250){
    stage = 2;
  }
  if(stage==2 && r<=0){
    stage = 3;
  }
  if(stage == 3 && b>=250){
    stage = 4;
  }
  if(stage == 4 && g<=0){
    stage = 5;
  }
  if(stage == 5 && r >= 250){
    stage = 6;
  }
  if(stage == 6 && b<=0){
    stage = 1;
  }
  const hex = util.rgbToHex(r, g, b);
  background.gradient.colors.c1 = hex;
  background.gradient.colors.c2 = hex;
  start();
  
}
start();

// Get a handle on the <text> element
const myLabel = document.getElementById("clock-label");
const background = document.getElementById('background');

clock.ontick = (evt) => {
  let today = evt.date;
  let hours = today.getHours();
  let seconds = util.zeroPad(today.getSeconds());
  if (preferences.clockDisplay === "12h") {
    // 12h format
    hours = hours % 12 || 12;
  } else {
    // 24h format
    hours = util.zeroPad(hours);
  }
  
  
  let mins = util.zeroPad(today.getMinutes());
  myLabel.text = `${hours}:${mins}:${seconds}`;
}


function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}