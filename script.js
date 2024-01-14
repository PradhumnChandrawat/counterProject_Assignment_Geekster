increase.addEventListener("click", function () {
  counter.innerText = parseInt(counter.innerText) + 1;
});

decrease.addEventListener("click", function () {
  counter.innerText = parseInt(counter.innerText) - 1;
});

reset.addEventListener("click", function () {
  counter.innerText = 0;
});
