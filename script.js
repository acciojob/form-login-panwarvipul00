function getFormvalue(event) {
	event.preventDefault();
	const firstname=document.querySelector('input[name="fname"]').value;
	const lastname=document.querySelector('input[name="lname"]').value;
	const message = `First Name: ${firstname} Last Name: ${lastname}`;
	alert(message);
    //Write your code here

}
