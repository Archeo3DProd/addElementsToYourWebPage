
const buttonColor = document.getElementById("buttonColor");
const textColor = document.getElementById("textColor");
const contentColor = document.getElementById("contentColor");

buttonColor.addEventListener("click", addTextColor);

function addTextColor() {
  const newTextColor = document.createElement("p");
  newTextColor.innerText = textColor.value;
  contentColor.appendChild(newTextColor);

  let colorIndex = Math.floor(Math.random() * 5) + 1;
  switch (colorIndex) {
    case 1:
      newTextColor.className = "red";
      break;
    case 2:
      newTextColor.className = "blue";
      break;
    case 3:
      newTextColor.className = "orange";
      break;
    case 4:
      newTextColor.className = "green";
      break;
    default:
      newTextColor.className = "purple";
  }
}
