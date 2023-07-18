const radioElement = document.querySelectorAll("input");
const rating = document.querySelector(".rating-value");
radioElement.forEach((radio) => {
  console.log(radio);
  radio.addEventListener("click", () => {
    let value = radio.value;
    console.log(value);
    rating.innerText = `${value} of 5`;
  });
});
