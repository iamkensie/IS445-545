const message = prompt('Choose an Option:\n1:Show messages\n2:Add a message\n3:Delete a message\n0:Quit');
const messages = ['message 01', 'message 02', 'message 03', 'message 04', 'message 05'];

// alert('Your input is: ' + message)
const output = document.getElementById("output");
//output.innerHTML = 'Your message is ' + message

if(message === 1){
    for(i=0;i<messages.length;i++)
    {let x = i; x++; //let x is the initiator, x++ is to add 
        output.innerHTML += (x + ": " + messages[i] + '<br>'); 
    }
} 

else if(message === 2){
    const message2 = prompt('Enter a new message:');
    messages.push(message2);
    for(i=0;i<messages.length;i++)
    {let x = i;x++;
        output.innerHTML += (x + ": " + messages[i] + '<br>'); 
    }
} 

else if(message === 3){
    let message3 = prompt('Enter the message index (between 1 and 5):');
    parseInt(message3);
    message3--;
    messages.splice(message3,1);
    for(i=0;i<messages.length;i++)
    {let x = i; x++;
        output.innerHTML += (x + ": " + messages[i] + '<br>'); 
    }
}

else if(message === 0){
    output.innerHTML="ByEEEEe";
        } 
else{
    output.innerHTML="the input is invalid and the user should refresh the page and try again \nPlease refresh and select a correct command.";

}