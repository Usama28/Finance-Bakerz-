
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

    console.log(firebase.firestore)

}

//logout function
function logOut()
{
    window.location.replace("../sign up login/login.html")
}


// function for icnome modal
function incomeResult()
{
    
    var getAmount=document.getElementById('amount-tag').value
    var getDate=document.getElementById('date-tag').valueAsDate
    var getSelect=document.getElementById('select-tag').value
    var getDescription=document.getElementById('desc-tag').value

    if(getAmount=='' || getDate=="" || getSelect=="" || getDescription=="")
    {
        var showIncomeError=document.getElementById('error-ID1')
        var getError=document.createElement('P')
       
        getError.id='income-error'
        getError.innerHTML='Fill All Fields'
        getError.style.backgroundColor='red'
        getError.style.color='white'
        getError.style.padding='2%'
        showIncomeError.appendChild(getError)
        setTimeout(()=>getError.remove(),2000)
        return false
    }
    else
    {
         //firebase code
     firebase.firestore().collection('transaction').add(
        {
           Amount: getAmount,
           Date: getDate,
           Category: getSelect,
           Description: getDescription,
           type : 'income'
        }
        ).then(function()
        {
            // alert('income successful')
            clearincome()
            $('#incomeModal').modal('hide')        
        })
     
     function clearincome()
        {
            var getAmount=document.getElementById('amount-tag').value=''
            var getDate=document.getElementById('date-tag').value=''
            var getSelect=document.getElementById('select-tag').value=''
            var getDescription=document.getElementById('desc-tag').value=''
            
        }
        // incomeToList()
    }
}

//function to clear all field 

//display income modal
function incomeToList()
{
    
    let rightIcon=document.createElement('I')
    rightIcon.className="fa fa-arrow-right"
    
    let upwardIcon=document.createElement('I')
    upwardIcon.className="fa fa-arrow-up" 

    rightIcon.id='income-icon'
    upwardIcon.id='income-icon'

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
        let showExpenseError=document.getElementById('error-ID2')
        let getError=document.createElement('P')
       
        getError.id='income-error'
        getError.innerHTML='Fill All Fields'
        getError.style.backgroundColor='red'
        getError.style.color='white'
        getError.style.padding='2%'
        showExpenseError.appendChild(getError)
        setTimeout(()=>getError.remove(),2000)
        return false
    }
   else
   {
       //firebase code
    firebase.firestore().collection('transaction').add(
        {
           Amount: getAmount,
           Date: getDate,
           Category: getSelect,
           Description: getDescription,
           type : 'Expense'
        }
    )
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

    document.getElementById('expense-btn').setAttribute('data-dismiss','modal')

}