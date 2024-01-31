export function saveUserData({ id, email, firstName, lastName }) {
  localStorage.setItem("userId", id);
  localStorage.setItem("userEmail", email);
  localStorage.setItem("userFirstName", firstName);
  localStorage.setItem("userLastName", lastName);
}

export function getUserData() {
  const id = localStorage.getItem("userId");
  const email = localStorage.getItem("userEmail");
  const firstName = localStorage.getItem("userFirstName");
  const lastName = localStorage.getItem("userLastName");

  const userData = { id: id, email: email, firstName: firstName, lastName };

  return userData;
}

export function deleteUserData() {
  localStorage.removeItem("userId");
  localStorage.removeItem("userEmail");
  localStorage.removeItem("userFirstName");
  localStorage.removeItem("userLastName");
}
