class Message{
    constructor(name, email, message){
        this.name=name;
        this.email=email;
        this.message=message;
    }
}
var txtName=document.getElementById('userName');
var txtEmail=document.getElementById('userEmail');
var txtMessage=document.getElementById('userMessage');

function clearInputs(){
    txtName.value="";
    txtEmail.value="";
    txtMessage.value="";
}

function logMessage(){
    var newMessage = new Message(txtName.value,txtEmail.value,txtMessage.value);
    if(txtName.value === '' || txtEmail.value ==='' || txtMessage ==='')
        alert("Please fill out all forms of input.");
    clearInputs();
    console.log(newMessage);    
}

//I can't figure out how to pass the information from the input fields to the object