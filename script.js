
function CheckValidation()                                   
{
    var firstName = document.forms["RegForm"]["Name"];
    var surname = document.forms["RegForm"]["Surname"]; 
    var email = document.forms["RegForm"]["Email"];   
    var birth = document.forms["RegForm"]["DateofBirth"]; 
    var gender =  document.forms["RegForm"]["Subject"]; 
    var password = document.forms["RegForm"]["Password"]; 
   
    
  
    if (firstName.value == "")                                 
    {
        window.alert("Please enter your name.");
        firstName.focus();
        return false;
    }
  
    if (!firstName.value.match(/^\s*[a-zA-Z,ç,Ç,ğ,Ğ,ı,İ,ö,Ö,ş,Ş,ü,Ü,\s]+\s*$/) && firstName.value !="")
     {
    firstName.value="";
    window.alert("Please Enter only alphabets in text");
    firstName.focus();
         return false;
     
      }
        
    if (surname.value == "")                              
    {
        window.alert("Please enter your surname.");
        surname.focus();
        return false;
    }
     if (!surname.value.match(/^\s*[a-zA-Z,ç,Ç,ğ,Ğ,ı,İ,ö,Ö,ş,Ş,ü,Ü,\s]+\s*$/) && surname.value !="")
     {
    surname.value="";
    window.alert("Please Enter only alphabets in text");
    surname.focus();
         return false;
     
      }
      
    if (email.value == "")                                  
    {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }
  
    if (email.value.indexOf("@", 0) <= 0)                
    {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }
  
    if (email.value.indexOf(".", 0) < 0)                
    {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }

     if (birth.value == "")                          
        {
            window.alert("Please enter your date of birth.");
            birth.focus();
            return false;
        } 
  
    if (password.value == "")                       
    {
        window.alert("Please enter your password");
        password.focus();
        return false;
    }
    
     if(password.value.length < 6) {
        alert("Error: Password must contain at least six characters!");
        password.focus();
        return false;
      }
    if(password.value.length > 15) {
        alert("Error: Password cannot have more than fifteen characters!");
        password.focus();
        return false;
      }
    
     re = /[A-Z]/;
      if(!re.test(password.value)) {
        alert("Error: password must contain at least one uppercase letter!");
        password.focus();
        return false;
      }
     re =  /[!#$%&?*\-+]/;
      if(!re.test(password.value)) {
        alert("Error: password must contain at least one special character!");
        password.focus();
        return false;
      }
    re = /[0-9]/;
      if(!re.test(password.value)) {
        alert("Error: password must contain at least one number (0-9)!");
        password.focus();
        return false;
      }
      
        var date_regex = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]|(?:Jan|Mar|May|Jul|Aug|Oct|Dec)))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2]|(?:Jan|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec))\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)(?:0?2|(?:Feb))\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9]|(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep))|(?:1[0-2]|(?:Oct|Nov|Dec)))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/ ;
        if(!(date_regex.test(birth.value)))
        {
        alert("Error: Date should be in dd/mm/yyyy format!");    
        return false;
            
        }
    
    if (gender.selectedIndex < 1)
    {
        alert("Please enter your gender.");
        gender.focus();
        return false;
    }
  
    return true;
}
    