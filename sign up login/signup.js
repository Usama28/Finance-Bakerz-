console.log(firebase)
console.log('firesotr',firebase.firestore)
function submitForm()
{ 
    var getPlan=document.getElementById('select-plan').value
    var getUser=document.getElementById('name-id').value
    var getMail=document.getElementById('mail-id').value
    var getPassword=document.getElementById('password-id').value
    var getConfirmPassword=document.getElementById('confirm-id').value

    console.log(getMail)
    console.log(getPassword)

    firebase.auth().createUserWithEmailAndPassword(getMail, getPassword)
    .then(function(userResponse){
        console.log(userResponse)
        const userId = userResponse.user.uid    //user id sign up krty hwe jo generate hui

        /*
            1) .add({}) (generates unique ID for the document)
            2) .doc(<id>).set({}) (you tell the ID to firebase)
        */

        // firebase.firestore().collection('users').add({
        firebase.firestore().collection('users').doc(userId).set(        //set ==>data firebase me bhjny k lye
            {                                                            
                                                            //get==>firesbase se data access krny k lye 
                Username:getUser,                           //get k bad .then k function me aik variable declare phr {varaiable.data()} <==to get data from firebase
                Plan:getPlan,
                Email:getMail
            }).then(function() 
            {
                alert("Successfully Registered!")
                window.location.replace('login.html')

            }).catch(function(error)
            {
                var errorMessage = error.message;
                alert(errorMessage)
            })
        
    })
    .catch(function(error) 
    {
       
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        
        let getError=document.createElement('div')
        getError.innerHTML=error
        getError.style.color='white'
        getError.style.backgroundColor='red'
        getError.style.padding='2%'
        getError.style.width='111%'
        document.getElementById('error-id').appendChild(getError)
       setTimeout(()=>getError.remove(),2000)
      });

}