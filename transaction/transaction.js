
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

    if(getAmount=='' || getDate=="" || getSelect=="" || getDescription=="")
    {
        document.getElementById('income-error').innerHTML='Fill All Fields'
        document.getElementById('income-error').style.backgroundColor='red'
        document.getElementById('income-error').style.color='white'
        document.getElementById('income-error').style.padding='2%'
        setTimeout(()=>document.getElementById('income-error').remove(),2000)
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

    if(getAmount=='' || getDate=="" || getSelect=="" || getDescription=="")
    {
        document.getElementById('expense-error').innerHTML='Fill All Fields'
        document.getElementById('expense-error').style.backgroundColor='red'
        document.getElementById('expense-error').style.color='white'
        document.getElementById('expense-error').style.padding='2%'
        setTimeout(()=>document.getElementById('expense-error').remove(),2000)
        return false
    }
    else
    {
        alert('43')
    }
    
}