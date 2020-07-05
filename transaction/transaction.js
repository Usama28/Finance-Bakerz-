
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


// function to put income data to database
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
     
    //function to clear all field 
     function clearincome()
        {
            var getAmount=document.getElementById('amount-tag').value=''
            var getDate=document.getElementById('date-tag').value=''
            var getSelect=document.getElementById('select-tag').value=''
            var getDescription=document.getElementById('desc-tag').value=''
            
        }
    }
}
//display income modal
    
//function to put expense data to database
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
        ).then(function()
        {
            clearExpense()
            $('#expenseModal').modal('hide')
        })
       
        function clearExpense()
        {
            document.getElementById('date2-tag').value=''
            document.getElementById('select2-tag').value=''
            document.getElementById('amount2-tag').value=''
            document.getElementById('desc2-tag').value=''
        }
   }    
}
getTransaction()
function getTransaction()
{
    firebase.firestore().collection('transaction').get().then(function(snapshot)
    {
        snapshot.forEach(function(docs)
        {
            console.log(docs.data())
        })
    })
}

// function expenseToList()
// {
//     let leftIcon=document.createElement('I')
//     leftIcon.className="fa fa-arrow-left"
    
//     let downIcon=document.createElement('I')
//     downIcon.className="fa fa-arrow-down" 

//     leftIcon.id='expense-icon'
//     downIcon.id='expense-icon'
    
// }
// function incomeToList()
// {
    
//     let rightIcon=document.createElement('I')
//     rightIcon.className="fa fa-arrow-right"
    
//     let upwardIcon=document.createElement('I')
//     upwardIcon.className="fa fa-arrow-up" 

//     rightIcon.id='income-icon'
//     upwardIcon.id='income-icon'

// }