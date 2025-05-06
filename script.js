function getFormvalue(event) {
	event.preventDefault();
	const firstname=document.querySelector('input[name="fname"]').value;
	const lastname=document.querySelector('input[name="lname"]').value;
	const message=`First Name: ${firstName} Last Name: ${lastName}`;
	alert(message);
    //Write your code here

}
