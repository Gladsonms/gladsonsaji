$(document).ready(function() {
    $('#Errorname').hide();
    let Errorname=true;
    $('#name').on('input',function () {
        this.value=this.value.replace(/[^a-zA-z ]/, '').replace(/(\..*)\./, '$1');
      validateusername();
    })
    var validname=false;
    
   function validateusername ()
   {

     let namevalue = $('#name').val();
    
     var nameRegex=/^[a-zA-Z ]+$/ 
     if (namevalue.includes('  ')){
       $('#Errorname').show();
       $('#Errorname').html("2 consicutive space are not allowed")
       Errorname = false;
       validname=false;
       return false;

     }
     
     else if(!namevalue.match(nameRegex))
     {  
         
         $("#Errorname").show();
         $("#Errorname").html("Name contain only alphabets ")
         Errorname = false;
         validname=false;
         return false;
     }
     else if(namevalue.length=0)
     {
         $('#Errorname').show();
         $('#Errorname').html("name field cant be empty");
         Errorname=false;
         validname=false;
         return false;

     }
     else if ((namevalue.length < 3) || (namevalue > 15))
     {
            $('#Errorname').show()
            $('#Errorname').html("Please enter a valid name ");
            Errorname=false;
            validname=false;
            return false;
    
     }
     else
     {
         $('#Errorname').hide();
         validname=true;
     }
   }
   var validmail=false
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
           validmail=false;

       }
       else if(!mailValue.match(regexEmail))
       {
        $('#Errormail').show();
        $('#Errormail').html("Not an email format");
        Errormail=false;
        return false;
        validmail=flase;
       }
       else {
           $('#Errormail').hide();
           validmail=true;
       }
   }
   $('#Errorphone').hide();
   let Errorphone=true;
   var validphone=false;
   $('#phone').on('input',function(e){
       this.value=this.value.replace(/[^0-9]/,'');
       validatePhone();
   })
 
       function validatePhone(){
           let phonevalue=$("#phone").val();
          
           if(phonevalue.length!=10)
           {
               $('#Errorphone').show();
               $('#Errorphone').html("Please enter a valid number")
               validphone=false;
               Errorphone=false;
               return false;
           }
           
           else if(isNaN(phonevalue))
           {
            $('#Errorphone').show();
            $('#Errorphone').html("Please enter a valid number")
            validphone=false;
            Errorphone=false;
            return false;
           }
           else{
               $('#Errorphone').hide();
               validphone=true;
           }

       }
   $('#ErrorMessage').hide();
     let ErrorMessage=true;
     var validMessage=false;
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
             validMessage=false
         }
         else
         {
            $('#ErrorMessage').hide();
            validMessage=true;
         }
     }

     $('#submit-form').submit((e)=>{
        e.preventDefault()
        if(validname==true && validphone==true && validmail==true && validMessage==true){
            $('#ErrMsg').text("")
            $.ajax({
                
                url:"https://script.google.com/macros/s/AKfycbxqeL4Dw3JtyLmmzW0AXjJDTxQtmQ8Sc0ZGTn_o2raFt_gNhJUOrJcW4l8XEfRY5byu/exec",
                data:$("#submit-form").serialize(),
                method:"post",
                success:function (response){
                    // alert("Form submitted successfully")
                    $("#SucessMsg").text("Thanks for Your Response we will contact you back shortly");
                    window.location.reload()
                    //window.location.href="https://google.com"
                },
                error:function (err){
                    alert("Something Error")
    
                }
            })
        }
        else
        {
        //    console.log("ihi")
            $("#Errorname").show();
            $("#Errorname").text("Please enter your name");
            $("#Errormail").show();
            $("#Errormail").text("Please enter your mail id");
            $("#Errorphone").show();
            $("#Errorphone").text("Please Enter your phone number");
           $("#ErrorMessage").show();
            $("#ErrorMessage").text("Please enter your Message");
            $('#ErrMsg').text("Please enter all fields")
            // console.log("error")
        }
        
     })
     
     
   
  })

   