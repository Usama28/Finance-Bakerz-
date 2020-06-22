
getResult()
function getResult()
{
    const myDate=new Date()
    const getMonth=myDate.getMonth()
    const monthID=document.getElementById('select-month')
    monthID.value=getMonth

    const getYear=myDate.getFullYear()
    const yearID=document.getElementById('select-year')
    yearID.value=getYear

    var headMail=localStorage.getItem('Mail')
    document.getElementById('mail-span').innerHTML=headMail

}
//function for icnome modal
// function incomeResult()
// {
    
//     var tagValue=document.getElementById('inp-tag').value
//     if(tagValue=='')
//     {
//         document.getElementById('modal-error').innerHTML='Fill All Fields'
//         document.getElementById('modal-error').style.backgroundColor='red'
//         document.getElementById('modal-error').style.color='white'
//         document.getElementById('modal-error').style.padding='2%'
//         setTimeout(()=>document.getElementById('modal-error').remove(),2000)
//         return false
//     }
// }
//function for Expense modal
function expenseResult()
{
 
    var amountValue=document.getElementById('amount-tag')
    amountValue= amountValue.innerText
    debugger
    // var tagValue=document.getElementById('inp-tag').value
   
    // if(tagValue=="")
    // {
    //     document.getElementById('expense-error').innerHTML='Fill All Fields'
    //     document.getElementById('expense-error').style.backgroundColor='red'
    //     document.getElementById('expense-error').style.color='white'
    //     document.getElementById('expense-error').style.padding='2%'
    //     setTimeout(()=>document.getElementById('expense-error').remove(),2000)
    //     return false
    // }

}