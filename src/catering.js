function initForm() {
  const form = document.querySelector(".container");
  const visa = document.querySelector(".visa");
  const cash = document.querySelector(".cash");

  visa.addEventListener("click", () => {
    if (!visa.classList.contains("on")) {
      visa.classList.toggle("on");
      if (cash.classList.contains("on")) {
        cash.classList.toggle("on");
      }
    }
  });
  cash.addEventListener("click", () => {
    if (!cash.classList.contains("on")) {
      cash.classList.toggle("on");
      if (visa.classList.contains("on")) {
        visa.classList.toggle("on");
      }
    }
  });
  form.addEventListener("submit", validateForm);
}
function validateForm(evt) {
  evt.preventDefault();
}

export { initForm, validateForm };
