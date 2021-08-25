$(document).ready(function() {
    $('#Errorname').hide();
    let Errorname=true;
    $('#name').on('input',function () {
      validateusername();
    })
   function validateusername ()
   {
     let namevalue = $('#name').val();
     var nameRegex=/^[a-zA-Z ]+$/ 
     if (namevalue.includes('  ')){
       $('#Errorname').show();
       $('#Errorname').html("2 consicutive space are not allowed")
       Errorname = false;
       return false;
     }
     else if(!namevalue.match(nameRegex))
     {
         $("#Errorname").show();
         $("#Errorname").html("Name contain only alphabets ")
     }
     else if(namevalue.length=0)
     {
         $('#Errorname').show();
         $('#Errorname').html("name field cant be empty");
         Errorname=false;
         return false;

     }
     else if ((namevalue.length < 3) || (namevalue > 15))
     {
            $('#Errorname').show()
            $('#Errorname').html("Please enter a valid name ");
            Errorname=false;
            return false;
    
     }
     else
     {
         $('#Errorname').hide();
     }
   }
  $('#Errormail').hide();
  let Errormail=true;
  $('#email').on('input',function(){
      validateMail();
  })
   function validateMail() {
       let mailValue=$('#email').val();
       var regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
       if(mailValue.length==0)
       {
           $('#Errormail').show();
           $('#Errormail').html("Mail cant be empty");
           Errormail=false;
           return false;

       }
       else if(!mailValue.match(regexEmail))
       {
        $('#Errormail').show();
        $('#Errormail').html("Not an email format");
        Errormail=false;
        return false;
       }
       else {
           $('#Errormail').hide();
       }
   }
   $('#Errorphone').hide();
   let Errorphone=true;
   $('#phone').on('input',function(){
       validatePhone();
   })
       function validatePhone(){
           let phonevalue=$("#phone").val();
           if(phonevalue.length!=10)
           {
               $('#Errorphone').show();
               $('#Errorphone').html("Please enter a valid number")
               Errorphone=false;
               return false;
           }
           else if(isNaN(phonevalue))
           {
            $('#Errorphone').show();
            $('#Errorphone').html("Please enter a valid number")
            Errorphone=false;
            return false;
           }
           else{
               $('#Errorphone').hide();
           }

       }
   $('#ErrorMessage').hide();
     let ErrorMessage=true;
     $('#message').on('input',function(){
         validateMeassage();
     })
     function validateMeassage(){
         let messageValue=$("#message").val();
         if(messageValue.length<15)
         {
             $("#ErrorMessage").show();
             $("#ErrorMessage").html("Please enter atleast 15 charcaters");
             ErrorMessage=false;
             return false;
         }
         else
         {
             $('#ErrorMessage').hide();
         }
     }
     
  })

   