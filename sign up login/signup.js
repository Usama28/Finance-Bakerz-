function submitForm()
{
    const getUser=document.getElementById('user-id').value
    const getMail=document.getElementById('mail-id').value
    const getPassword=document.getElementById('password-id').value
    const getConfirmPassword=document.getElementById('confirm-id').value
    const getErrorID=document.getElementById('error-id')
   
    if(getUser=='')
    {
        getErrorID.innerHTML='User Cannot be blank'
    }
    else if(getUser.length<=3)
    {
        getErrorID.innerHTML='Username should be greater than 3'
    }

}