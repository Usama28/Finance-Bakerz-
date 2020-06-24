
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
//logout function
function logOut()
{
    window.location.replace("../sign up login/login.html")
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
    else
    {
        return incomeToList()
    }
}
function incomeToList()
{
    let rightIcon=document.createElement('I')
    rightIcon.className="fa fa-arrow-right"
    console.log(rightIcon)
    document.write(rightIcon)
    
    let incomeArray=[]
    incomeArray.push(rightIcon)
    incomeArray.push(document.getElementById('date-tag').value)
    incomeArray.push(document.getElementById('select-tag').value)
    incomeArray.push( 'RS '+ document.getElementById('amount-tag').value)
    incomeArray.push(upwardIcon)

    let bodyElements=document.getElementById('body-data')
    let createRow=document.createElement('TR')
    for(var i=0;i<incomeArray.length;i++)
    {
        let createData=document.createElement('TD')
        createData.innerHTML=incomeArray[i]
        createRow.appendChild(createData)  
         console.log(createRow)
    }
    bodyElements.appendChild(createRow)

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
   
    
}