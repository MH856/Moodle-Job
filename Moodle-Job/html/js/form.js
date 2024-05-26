  "use strict"
  
  //Calling all function when the website is loaded and ready
  $(document).ready(function () {

    formInput();



  });




  //form input to send to the back-end
  const formInput = () => {



    $('#studentForm').submit( ()=> {
     const ID_Input = $('#inputID').val();
     const ID_Password = $('#inputPassword').val();
     
      if(ID_Input == "" || ID_Input == ""){
        $('#invalidInputID').removeClass('d-none')
        return false;
      }else if(ID_Password == "" || ID_Password == ""){
        $('#invalidInputID').addClass('d-none')
        $('#invalidInputPassword').removeClass('d-none')
        return false;
      }else{
        $('#invalidInputPassword').addClass('d-none');
        var studentData = {
            studentID: ID_Input,
            studentPassword: ID_Password
        }
        sendData(studentData)
      }
    })

    $('#studentForm2').submit( ()=> {
      const ID_Input2 = $('#inputID2').val();
      const ID_Password2 = $('#inputPassword2').val();
      
       if(ID_Input2 == "" || ID_Input2 == ""){
         $('#invalidInputID2').removeClass('d-none')
         return false;
       }else if(ID_Password2 == "" || ID_Password2 == ""){
         $('#invalidInputID2').addClass('d-none')
         $('#invalidInputPassword2').removeClass('d-none')
         return false;
       }else{
         $('#invalidInputPassword2').addClass('d-none');
         var studentData = {
             studentID: ID_Input,
             studentPassword: ID_Password
         }
         sendDataMobile(studentData)
       }
     })


  }


const sendData = (studentData) => {
    $.post({
   
        url: "/",
        data: studentData
    }).done(function( msg ) {
        alert( "Data Saved: " + msg );
    });


}

const sendDataMobile = (studentData) => {
  $.post({
 
      url: "/",
      data: studentData
  }).done(function( msg ) {
      alert( "Data Saved: " + msg );
  });


}