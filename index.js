function validate(){
    var username = document.getElementById("username").value;
    var subject = document.getElementById("subject").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var cpassword = document.getElementById("cpassword").value;
    var message = document.getElementById("message").value;
    
    
    var error_message = document.getElementById("error_message");
    
    error_message.style.padding = "10px";
    
    var text;
    if(username.length < 5)
    {
      text = "Please Enter valid username";
      error_message.innerHTML = text;
      return false;
    }


    if(subject.length < 10){
      text = "Please Enter Correct Subject";
      error_message.innerHTML = text;
      return false;
    }


    if(isNaN(phone) || phone.length != 10){
      text = "Please Enter valid Phone Number";
      error_message.innerHTML = text;
      return false;
    }


    if(email.indexOf("@") == -1 || email.length < 6){
      text = "Please Enter valid Email";
      error_message.innerHTML = text;
      return false;
    }


    if(password.length < 8 || password.includes('.'))
    {
          text = "pleas enter password";
          error_message.innerHTML = text;
          return false;
    }

    if (password !== cpassword) 
    {
        text = "password not matched";
        error_message.innerHTML = text;
        return false;
    }
    
    if(message.length <= 140){
      text = "Please Enter More Than 140 Characters";
      error_message.innerHTML = text;
      return false;
    }
    alert("Form Submitted Successfully!");
    return true;
  }