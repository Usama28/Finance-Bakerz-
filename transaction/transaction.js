
getTransaction()
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
    var getDate=document.getElementById('date-tag').value
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
            getTransaction()
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

function getTransaction()
{
    // firebase.firestore().collection('transaction').doc(id).get().then(function(snapshot) {snapshot.data()} ye km tb krngy jb hamy sir aik data/element chaye ho
    firebase.firestore().collection('transaction').get().then(function(snapshot)
    {                                                               //transaction k andr 3,4 item h is lye loop lgana lazmi ha
        snapshot.forEach(function(docs)
        {
            console.log(docs.data())
            const data=docs.data()    

            const bodyTable=document.getElementById('body-table')
            // bodyTable.innerHTML=''

            const row =document.createElement('TR')
            const type =document.createElement('TD')
            const date =document.createElement('TD')
            const category =document.createElement('TD')
            const amount =document.createElement('TD')

            type.innerHTML=data.type
            date.innerHTML=data.Date      //data . k bad wo name likhy gye hai jis name se firebas eme save kraye hi value
            category.innerHTML=data.Category
            amount.innerHTML=data.Amount

            row.appendChild(type)
            row.appendChild(date)
            row.appendChild(category)
            row.appendChild(amount)
            bodyTable.appendChild(row)

        })
    })
}
    
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