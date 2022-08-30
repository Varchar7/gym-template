console.log(contact.firstName.value);
console.log(contact.lastName.value);
console.log(contact.subject.value);
console.log(contact.email.value);
console.log(contact.message.value);

function showAlert(message) {
  document.getElementById("message").style.display = "block";
  document.getElementById("alert-message").innerText = message;
  setTimeout(() => {
    document.getElementById("message").style.display = "none";
  }, 1500);
}
function submitForm(e) {
  const validEmail = contact.email.value.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  if (
    contact.firstName.value == "" ||
    contact.lastName.value == "" ||
    contact.subject.value == "" ||
    contact.email.value == "" ||
    contact.message.value == ""
  ) {
    showAlert("You Must Filled All Values");
  } else if (!validEmail) {
    showAlert("Please type valid email");
  } else {
    showAlert("You request accepted successfully");
  }
}
