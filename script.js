const button = document.getElementById("myButton");

let timeoutId;

button.addEventListener("mousedown", function () {
  timeoutId = setTimeout(function () {
    button.classList.add("long-press");

    alert("Long click detected!");
  }, 1000); // wait for 1 second to detect long press
});

button.addEventListener("mouseup", function () {
  clearTimeout(timeoutId);
  button.classList.remove("long-press");
});

button.addEventListener("click", function () {
  alert("Hello, world!");
});
