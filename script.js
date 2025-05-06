function getFormvalue(event) {
  event.preventDefault();

  const firstName = document.querySelector('input[name="fname"]').value;
  const middleName = document.querySelector('input[name="mname"]')?.value || '';
  const lastName = document.querySelector('input[name="lname"]').value;

  // Build full name (exclude extra spaces if middle name is blank)
  const fullName = [firstName, middleName, lastName].filter(Boolean).join(' ');

  alert(fullName); // ONLY the full name, as expected by the test
}
