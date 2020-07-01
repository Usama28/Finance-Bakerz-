console.log(firebase)
      
function submitForm()
{ 
    var getUser=document.querySelector('#name-id').value
    var getMail=document.querySelector('#mail-id').value
    var getPassword=document.querySelector('#password-id').value
    var getConfirmPassword=document.querySelector('#confirm-id').value

    console.log(getMail)
    console.log(getPassword)

    firebase.auth().createUserWithEmailAndPassword(getMail, getPassword)
    .then(function(user)
    {
        location.href="login.html"
    })
    .catch(function(error) 
    {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
    
       document.getElementById('error-id').innerHTML=error
       document.getElementById('error-id').style.color='white'
       document.getElementById('error-id').style.backgroundColor='red'
       document.getElementById('error-id').style.padding='2%'
       document.getElementById('error-id').style.width='111%'
       setTimeout(()=>document.getElementById('error-id').remove(),2000)
      });


//   //  user attributes
//     if(getUser=='')
//     {

    // document.getElementById('error-id').innerHTML=error
    // document.getElementById('error-id').style.color=
    // document.getElementById('error-id').style.backgroundColor='red'
    // document.getElementById('error-id').style.padding=2%
    // setTimeout(()=>document.getElementById('error-id').remove(),2000)


//         document.querySelector('#error-name').innerHTML='Username Cannot be blank'
//         document.querySelector('#error-name').style.color='red';
//         setTimeout(()=>document.querySelector('#error-name').remove(),2000)
//         return false
        
//     }
//     else if(getUser.length<=3)
//     {
//         document.querySelector('#error-name').innerHTML='Username should be greater than 3'
//         document.querySelector('#error-name').style.color='red';
//         setTimeout(()=>document.querySelector('#error-name').remove(),2000)
//         return false
//     }
//     else
//     {
//         localStorage.setItem('User',getUser)
//         getUser==''
//     }

//     //mail attributes
//     if(getMail=='')
//     {
//         document.querySelector('#error-mail').innerHTML='Mail Cannot be blank'
//         document.querySelector('#error-mail').style.color='red';
//         setTimeout(()=>document.querySelector('#error-mail').remove(),2000)
//         return false
        
//     }
//     else if(getMail[getMail.length-1]=='@')
//     {
//         document.querySelector('#error-mail').innerHTML='Mail should not end at @'
//         document.querySelector('#error-mail').style.color='red';
//         setTimeout(()=>document.querySelector('#error-mail').remove(),2000)
//         return false
//     }

//     else
//     {
//         var getIndex=getMail.indexOf('@')
//         for(var i=0;i<getMail.length;i++)
//         {
//             if(getIndex==-1)
//             {
//                 document.querySelector('#error-mail').innerHTML='Invalid Email'
//                 document.querySelector('#error-mail').style.color='red';
//                 setTimeout(()=>document.querySelector('#error-mail').remove(),2000)
//                 return false
//             }
//             else if(getIndex<1)
//             {
//                 document.querySelector('#error-mail').innerHTML='Mail Should not start with @'
//                 document.querySelector('#error-mail').style.color='red';
//                 setTimeout(()=>document.querySelector('#error-mail').remove(),2000)
//                 return false
//             }
//         }
//     localStorage.setItem('Mail',getMail)
//     getMail=''
//     }
//     //password attributes
//     var upperCase=/[A-Z]/
//     var lowerCase=/[a-z]/
//     var num=/[0-9]/

//     if(getPassword=='')
//     {
//         document.querySelector('#error-pass').innerHTML='Password can not be blank'
//         document.querySelector('#error-pass').style.color='red';
//         setTimeout(()=>document.querySelector('#error-pass').remove(),2000)
//         return false
//     }
//     else if(getPassword.length<8)
//     {
//         document.querySelector('#error-pass').innerHTML='Passwor should be greater than 8'
//         document.querySelector('#error-pass').style.color='red';
//         setTimeout(()=>document.querySelector('#error-pass').remove(),2000)
//         return false
//     }
//     else if(getPassword.search(upperCase)==-1 || getPassword.search(lowerCase)==-1 || getPassword.search(num)==-1)
//     {
//         document.querySelector('#error-pass').innerHTML='Choose a strong password<br>containing uppercase lowercase<br>& numbers'
//         document.querySelector('#error-pass').style.color='red';
//         setTimeout(()=>document.querySelector('#error-pass').remove(),2000)
//         return false
//     }
//     else
//     {
//         localStorage.setItem('Password',getPassword)
//     }

//     //confirm password attributes
//     if(getPassword !== getConfirmPassword)
//     {
//         document.querySelector('#error-confirm').innerHTML='Password does not matches'
//         document.querySelector('#error-confirm').style.color='red';
//         setTimeout(()=>document.querySelector('#error-confirm').remove(),2000)
//         return false
//     }
   

}