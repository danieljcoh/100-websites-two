let body = document.body
let btn_el = document.getElementById("btn")

function alert(){
  // Generate a random color in hex format
  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  const randomColor2 = '#' + Math.floor(Math.random() * 16777215).toString(16);
  const randomColor3 = '#' + Math.floor(Math.random() * 16777215).toString(16);
  // Set the background color of the color box to the random color
  
  body.style.backgroundColor = randomColor;
  btn_el.style.borderColor = randomColor2;
  btn_el.style.color = randomColor;
  btn_el.style.backgroundColor = randomColor3;
}

