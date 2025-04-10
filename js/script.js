function validateForm() {
    const fname = document.getElementById('firstName').value;
    const lname = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    if(fname=="") 
    {
        alert('Please enter your name.');
        return false; 
    }
    if(lname=="") 
    {
        alert('Please enter your last name.');
        return false; 
    }
    if (!email.includes('@')) 
    {
      alert('Please enter a valid email address.');
      return false;
    }

    if (message.trim().length < 10) 
    {
      alert('Please enter a message with at least 10 characters.');
      return false;
    }

    return true;
  }