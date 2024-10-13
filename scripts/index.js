let string = "";

let buttons = document.querySelectorAll(".panel");
Array.from(buttons).forEach((panel) => {
  panel.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      document.getElementById("outputWindow").value = string;
    } else if (e.target.innerHTML == "AC") {
      string = "";
      document.getElementById("outputWindow").value = string;
    } else if (e.target.innerHTML == "DEL") {
      string = string.substring(0, string.length - 1);
      document.getElementById("outputWindow").value = string;
    } else {
      string = string + e.target.innerHTML;
      document.getElementById("outputWindow").value = string;
    }
  });
});
