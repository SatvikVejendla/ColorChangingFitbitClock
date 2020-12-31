// Add zero in front of numbers < 10
export function zeroPad(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  
  
  export function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
  
  export function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }
  