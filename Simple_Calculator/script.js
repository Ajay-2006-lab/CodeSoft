const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const val = btn.textContent;
    const current = display.value;
    const last = current.slice(-1);

    if (val === "C") {
      display.value = "";
    } else if (val === "⌫") {
      display.value = current.slice(0, -1);
    } else if (val === "=") {
      try {
        display.value = eval(current);
      } catch {
        display.value = "Error";
      }
    } else if (["+", "-", "*", "/"].includes(val)) {
      if (["+", "-", "*", "/"].includes(last)) {
        display.value = current.slice(0, -1) + val;
      } else if (current !== "") {
        display.value += val;
      }
    } else if (val === ".") {
      const parts = current.split(/[\+\-\*\/]/);
      const lastPart = parts[parts.length - 1];
      if (!lastPart.includes(".")) {
        display.value += val;
      }
    } else {
      if (current === "0" && val !== ".") {
        display.value = val;
      } else {
        display.value += val;
      }
    }
  });
});