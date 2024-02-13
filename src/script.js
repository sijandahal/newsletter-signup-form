document.addEventListener("DOMContentLoaded", () => {
  const form__subscribe = document.querySelector(".form__subscribe");
  const errorMessage = document.querySelector(".errorMessage");
  const email = document.querySelector(".email");
  const overlay = () => {
    const overLayWrapper = document.createElement("div");
    overLayWrapper.classList.add("overlay__wrapper");
    document.body.appendChild(overLayWrapper);
  };
  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const validate = (e) => {
    const emailValue = e.target.value;
    console.log(emailValue);
    if (validateEmail(emailValue)) {
      errorMessage.textContent = "Your Email is Valid";
      errorMessage.style.color = "green";
    } else {
      errorMessage.textContent = "Valid Email Required";
      errorMessage.style.color = "red";
    }

    return false;
  };

  form__subscribe.addEventListener("submit", (e) => {
    e.preventDefault();
    const emailValue = email.value;
    if (validateEmail(emailValue)) {
      overlay();
    }
  });

  email.addEventListener("input", validate);
});
