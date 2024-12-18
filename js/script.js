let indexSlide = 0;
nextSlide();

function validateForm() {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const interest = document.getElementById("interest");

  if (name.value === "") {
    name.classList.add("error-input");
    document.getElementById("name-error").innerHTML = "Name is required";
  }

  if (email.value === "") {
    email.classList.add("error-input");
    document.getElementById("email-error").innerHTML = "Email is required";
  }

  if (interest.value === "") {
    interest.classList.add("error-input");
    document.getElementById("interest-error").innerHTML =
      "Interest is required";
  }

  if (name.value !== "" && email.value !== "" && interest.value !== "") {
    name.value = "";
    email.value = "";
    interest.value = "";
    showPopup();
  }
}

function setupValidationListeners() {
  const fields = [
    { id: "name", errorId: "name-error", event: "input" },
    { id: "email", errorId: "email-error", event: "input" },
    { id: "interest", errorId: "interest-error", event: "change" }, // 'change' event for select
  ];

  fields.forEach(({ id, errorId, event }) => {
    const inputField = document.getElementById(id);
    const errorField = document.getElementById(errorId);

    inputField.addEventListener(event, () => {
      if (inputField.value.trim() !== "") {
        inputField.classList.remove("error-input");
        errorField.innerHTML = "";
      }
    });
  });
}

setupValidationListeners();

function nextSlide() {
  showBanner((indexSlide += 1));
}

function showBanner(n) {
  const imageList = document.getElementsByClassName("banner-img");

  if (n > imageList.length - 1) {
    indexSlide = 0;
  }

  for (let i = 0; i < imageList.length; i++) {
    imageList[i].style.display = "none";
  }

  imageList[indexSlide].style.display = "block";
}

setInterval(nextSlide, 5000);

// Show the popup when the "Contact Us" button is clicked
function showPopup() {
  document.getElementById("contactPopup").style.display = "flex";
}

// Close the popup when the close button is clicked
function closePopup() {
  document.getElementById("contactPopup").style.display = "none";
}
