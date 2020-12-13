window.onload = run;

function run() {
  const button = document.getElementById("button");
  let clicked = 0;

  function clickHandler() {
    clicked += 1;
    button.innerText = `Clicked ${clicked} times`;
  }

  button.addEventListener("click", clickHandler);
}
