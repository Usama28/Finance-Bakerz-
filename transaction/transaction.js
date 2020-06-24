
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
    
    let upwardIcon=document.createElement('I')
    upwardIcon.className="fa fa-arrow-up" 

    rightIcon.id='income-icon'
    upwardIcon.id='income-icon'
    
    let incomeArray=[]
    incomeArray.push(document.getElementById('date-tag').value)
    incomeArray.push(document.getElementById('select-tag').value)
    incomeArray.push( '<span style="font-weight:bold">RS</span> '+ document.getElementById('amount-tag').value)

    let bodyElements=document.getElementById('body-data')
    let createRow=document.createElement('TR')
    let iconTD1=document.createElement('TD')
    iconTD1.appendChild(rightIcon)
    createRow.appendChild(iconTD1)

    for(var i=0;i<incomeArray.length;i++)
    {
        let createData=document.createElement('TD')
        createData.innerHTML=incomeArray[i] 
        createRow.appendChild(createData)
    }
    let iconTD2=document.createElement('TD')
    iconTD2.appendChild(upwardIcon)
    createRow.appendChild(iconTD2)
    bodyElements.appendChild(createRow)
    clearIncomeFileds()
}
function clearIncomeFileds()
{
    document.getElementById('date-tag').value=''
    document.getElementById('select-tag').value=''
    document.getElementById('amount-tag').value=''
    document.getElementById('desc-tag').value=''
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
       return expenseToList()
   }    
}
function expenseToList()
{
    let leftIcon=document.createElement('I')
    leftIcon.className="fa fa-arrow-left"
    
    let downIcon=document.createElement('I')
    downIcon.className="fa fa-arrow-down" 

    leftIcon.id='expense-icon'
    downIcon.id='expense-icon'
    
    let expenseArray=[]
    expenseArray.push(document.getElementById('date2-tag').value)
    expenseArray.push(document.getElementById('select2-tag').value)
    expenseArray.push('<span style="font-weight:bold">RS</span> '+document.getElementById('amount2-tag').value)

    let bodyElements=document.getElementById('body-data')
    let createExpenseRow=document.createElement('TR')
    let expenseTD1=document.createElement('TD')
    expenseTD1.appendChild(leftIcon)
    createExpenseRow.appendChild(expenseTD1)

    for(var j=0;j<expenseArray.length;j++)
    {
        let expenseData=document.createElement('TD')
        expenseData.innerHTML=expenseArray[j]
        createExpenseRow.appendChild(expenseData)
    }
    let expenseTD2=document.createElement('TD')
    expenseTD2.appendChild(downIcon)
    createExpenseRow.appendChild(expenseTD2)
    bodyElements.appendChild(createExpenseRow)
    clearExpenseFields()
}
function clearExpenseFields()
{
    document.getElementById('date2-tag').value=''
    document.getElementById('select2-tag').value=''
    document.getElementById('amount2-tag').value=''
    document.getElementById('desc2-tag').value=''

}