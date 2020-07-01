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
        
        var getError=document.createElement('div')
        getError.innerHTML=error
        getError.style.color='white'
        getError.style.backgroundColor='red'
        getError.style.padding='2%'
        getError.style.width='111%'
        var getMain=document.getElementById('main-form')
        var regBtn=document.getElementById('submit-btn')
        getMain.insertBefore(getError,regBtn)
        // document.getElementById('error-id').appendChild(getError)
    //    setTimeout(()=>getError.remove(),2000)
      });

  

}