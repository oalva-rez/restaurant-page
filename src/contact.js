function addContact() {
  let formHeader = document.createElement("h2");
  let formContainer = document.createElement("form");
  let nameContainer = document.createElement("div");
  let nameLabel = document.createElement("label");
  let nameInput = document.createElement("input");
  let phoneContainer = document.createElement("div");
  let phoneLabel = document.createElement("label");
  let phoneInput = document.createElement("input");
  let emailContainer = document.createElement("div");
  let emailLabel = document.createElement("label");
  let emailInput = document.createElement("input");
  let commentInput = document.createElement("textarea");
  let submitBtn = document.createElement("button");

  formContainer.setAttribute("class", "form-container");
  formContainer.setAttribute("action", "#");
  nameLabel.setAttribute("for", "name");
  nameInput.setAttribute("id", "name");
  phoneLabel.setAttribute("for", "phone");
  phoneLabel.setAttribute("type", "tel");
  phoneInput.setAttribute("id", "phone");
  emailLabel.setAttribute("type", "email");
  emailLabel.setAttribute("for", "email");
  emailInput.setAttribute("id", "email");
  commentInput.setAttribute("class", "comment");
  commentInput.setAttribute("placeholder", "Eg. 'The ramen was to die for!'");

  nameContainer.append(nameLabel);
  nameContainer.append(nameInput);
  phoneContainer.append(phoneLabel);
  phoneContainer.append(phoneInput);
  emailContainer.append(emailLabel);
  emailContainer.append(emailInput);
  formContainer.append(formHeader);
  formContainer.append(nameContainer);
  formContainer.append(phoneContainer);
  formContainer.append(emailContainer);
  formContainer.append(commentInput);
  formContainer.append(submitBtn);

  formHeader.textContent = "Tell us about your experience!";
  nameLabel.textContent = "Name:";
  phoneLabel.textContent = "Phone:";
  emailLabel.textContent = "Email:";
  submitBtn.textContent = "Submit";

  return formContainer;
}

export default addContact;
