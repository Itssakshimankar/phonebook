
function createcontact(name, number, email, address ) {
	return {
		   name:name,
		   number:number,
		   email:email,
		   address:address,
		 };
 }
 
 
 const phonebook = [];
 
 function addContact(name, number, email, address)
  {
	const contact = createcontact(name, number, email, address);
	phonebook.push(contact);
	console.log("The contact is a created");
 }
 

 function searchContact(name) {
	const contact = phonebook.find(contact => contact.name === name);
	if (contact)
	 {
	    console.log(`Name is: ${contact.name}`);
	    console.log(`Number is: ${contact.number}`);
	    console.log(`Email is: ${contact.email}`);
	    console.log(`Address is: ${contact.address}`);
	} 
	else 
	{
	    console.log("The contact is not found");
	}
 }


 
 function updateContact(name, newnumber, newemail) {
	const contact = phonebook.find(contact => contact.name === name);
	if (contact)
	{
	    contact.number = newnumber;
	    contact.email = newemail;
	    console.log("we are updated the our contact ");
	}
	 else
    {
	    console.log("The contact is not found");
	}
 }
 

 
 function deleteContact(name) {
	for (let i = 0; i < phonebook.length; i++) {
	    if (phonebook[i].name === name) {
		   delete phonebook[i];
		   console.log("the contact is deleted");
		   return; 
	    }
	}
 }
 

 addContact("sakshi","9970635805","sakshimankar06@gmail.com","adgaon");
 addContact("dhanu","9970635805","sakshimankar06@gmail.com","adgaon");
 updateContact("sakshi","847839374","pranjali33@fmaokojio");
 searchContact("sakshi");
 searchContact('hanu');
 
 