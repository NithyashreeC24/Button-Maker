let backgrouncolor = document.getElementById("bgColorInput");
let fontcolor = document.getElementById("fontColorInput");
let fontsize = document.getElementById("fontSizeInput");
let fontweight = document.getElementById("fontWeightInput");
let padding = document.getElementById("paddingInput");
let borderradius = document.getElementById("borderRadiusInput");
let custombutton = document.getElementById("customButton");

function applyButton() {
    custombutton.style.backgroundColor = backgrouncolor.value;
    custombutton.style.color = fontcolor.value;
    custombutton.style.fontSize = fontsize.value;
    custombutton.style.fontWeight = fontweight.value;
    custombutton.style.padding = padding.value;
    custombutton.style.borderRadius = borderradius.value;

}
