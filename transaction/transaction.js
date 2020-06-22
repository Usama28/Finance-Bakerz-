
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
// function for icnome modal
function incomeResult()
{
    
    let getAmount=document.getElementById('amount-tag').value
    let getDate=document.getElementById('date-tag').value
    let getSelect=document.getElementById('select-tag').value
    let getDescription=document.getElementById('desc-tag').value
   console.log(getDate)
   console.log(getSelect)
   console.log(getDescription)
   console.log(getAmount)
    if(getAmount=='' || getDate=="" || getSelect=="" || getDescription=="")
    {
        document.getElementById('modal-error').innerHTML='Fill All Fields'
        document.getElementById('modal-error').style.backgroundColor='red'
        document.getElementById('modal-error').style.color='white'
        document.getElementById('modal-error').style.padding='2%'
        setTimeout(()=>document.getElementById('modal-error').remove(),2000)
        return false
    }
}
//function for Expense modal
function expenseResult()
{
 
    let getAmount=document.getElementById('amount2-tag').value
    let getDate=document.getElementById('date2-tag').value
    let getSelect=document.getElementById('select2-tag').value
    let getDescription=document.getElementById('desc2-tag').value
   console.log(getDate)
   console.log(getSelect)
   console.log(getDescription)
   console.log(getAmount)
    if(getAmount=='' || getDate=="" || getSelect=="" || getDescription=="")
    {
        document.getElementById('modal-error').innerHTML='Fill All Fields'
        document.getElementById('modal-error').style.backgroundColor='red'
        document.getElementById('modal-error').style.color='white'
        document.getElementById('modal-error').style.padding='2%'
        setTimeout(()=>document.getElementById('modal-error').remove(),2000)
        return false
    }

}