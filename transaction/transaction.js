// userdata()
// function userdata()
// {
//     const userId=localStorage.getItem('userId')
//     console.log(userId)
//     firebase.firestore().collection('users').doc(userId).get()
//     .then(function(snapshot)
//     {
//         const userobj=snapshot.data()
//         document.getElementById('name').innerHTML=userobj.Username
//         document.getElementById('mail').innerHTML=userobj.Email
//     })
// }
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

    var headMail=localStorage.getItem('storageMail')
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
            clearincome()
            getTransaction()
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
            getTransaction()
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

//display data from database
function getTransaction()
{
    //const userId=localStorage.getItem('userId')
    const bodyTable=document.getElementsByTagName('tbody')[0]
    bodyTable.innerHTML=''
    const userId =localStorage.getItem('userId')
    // firebase.firestore().collection('transaction').doc(id).get().then(function(snapshot) {snapshot.data()} ye km tb krngy jb hamy sir aik data/element chaye ho
    firebase.firestore().collection('transaction')
    //.where('userId','==',userId)     //where phly aaiga order ki query se wrna error ayegaa
    .orderBy('Date','desc')
    .get()
    .then(function(snapshot)
    {                                                               //transaction k andr 3,4 item h is lye loop lgana lazmi ha
        snapshot.forEach(function(docs)
        {
            
            console.log(docs.data())
            const data=docs.data()  

            if(data.type=='income')
            {
                let rightIcon=document.createElement('I')
                rightIcon.className="fa fa-arrow-right"
                let upwardIcon=document.createElement('I')
                upwardIcon.className="fa fa-arrow-up"             
                rightIcon.id='income-icon'
                upwardIcon.id='income-icon'

                const row =document.createElement('TR')
                const right =document.createElement('TD')
                const type =document.createElement('TD')
                const date =document.createElement('TD')
                const category =document.createElement('TD')
                const amount =document.createElement('TD')
                const upward =document.createElement('TD')

                right.appendChild(rightIcon)
                type.innerHTML=data.type
                date.innerHTML=data.Date      //data . k bad wo name likhy gye hai jis name se firebase eme save kraye hi value
                category.innerHTML=data.Category
                amount.innerHTML=data.Amount
                upward.appendChild(upwardIcon)

                row.appendChild(right)
                row.appendChild(type)
                row.appendChild(date)
                row.appendChild(category)
                row.appendChild(amount)
                row.appendChild(upward)
                bodyTable.appendChild(row)
            }
            else
            {
                let leftIcon=document.createElement('I')
                leftIcon.className="fa fa-arrow-left"
                let downIcon=document.createElement('I')
                downIcon.className="fa fa-arrow-down" 
                leftIcon.id='expense-icon'
                downIcon.id='expense-icon'

                const row =document.createElement('TR')
                const left =document.createElement('TD')
                const type =document.createElement('TD')
                const date =document.createElement('TD')
                const category =document.createElement('TD')
                const amount =document.createElement('TD')
                const down =document.createElement('TD')

                left.appendChild(leftIcon)
                type.innerHTML=data.type
                date.innerHTML=data.Date      //data . k bad wo name likhy gye hai jis name se firebase eme save kraye hi value
                category.innerHTML=data.Category
                amount.innerHTML=data.Amount
                down.appendChild(downIcon)

                row.appendChild(left)
                row.appendChild(type)
                row.appendChild(date)
                row.appendChild(category)
                row.appendChild(amount)
                row.appendChild(down)
                bodyTable.appendChild(row)
            }

        })
    })
}

//filter function
function filter()
{
       // const userId=localStorage.getItem('userId')
        const typeFilter=document.getElementById('filter-id').value
        console.log(typeFilter)
       if(typeFilter=='all')
       {
           return getTransaction()
       }

        //copying gettransaction()
        const bodyTable=document.getElementsByTagName('tbody')[0]
        bodyTable.innerHTML=''
        
        firebase.firestore().collection('transaction')
        .where('type','==',typeFilter)               
        //.where(userId,'==','userId')       //just like if condition (multiple where use kr skty hain
        .orderBy('Date','desc')  
        .get()
        .then(function(snapshot)
        {                                                            
            snapshot.forEach(function(docs)
            {
                console.log(docs.data())
                const data=docs.data()   

                if(data.type=='income')
                {
                    let rightIcon=document.createElement('I')
                    rightIcon.className="fa fa-arrow-right"
                    let upwardIcon=document.createElement('I')
                    upwardIcon.className="fa fa-arrow-up"             
                    rightIcon.id='income-icon'
                    upwardIcon.id='income-icon'
    
                    const row =document.createElement('TR')
                    const right =document.createElement('TD')
                    const type =document.createElement('TD')
                    const date =document.createElement('TD')
                    const category =document.createElement('TD')
                    const amount =document.createElement('TD')
                    const upward =document.createElement('TD')
    
                    right.appendChild(rightIcon)
                    type.innerHTML=data.type
                    date.innerHTML=data.Date      //data . k bad wo name likhy gye hai jis name se firebase eme save kraye hi value
                    category.innerHTML=data.Category
                    amount.innerHTML=data.Amount
                    upward.appendChild(upwardIcon)
    
                    row.appendChild(right)
                    row.appendChild(type)
                    row.appendChild(date)
                    row.appendChild(category)
                    row.appendChild(amount)
                    row.appendChild(upward)
                    bodyTable.appendChild(row)
                }
                else
                {
                    let leftIcon=document.createElement('I')
                    leftIcon.className="fa fa-arrow-left"
                    let downIcon=document.createElement('I')
                    downIcon.className="fa fa-arrow-down" 
                    leftIcon.id='expense-icon'
                    downIcon.id='expense-icon'
    
                    const row =document.createElement('TR')
                    const left =document.createElement('TD')
                    const type =document.createElement('TD')
                    const date =document.createElement('TD')
                    const category =document.createElement('TD')
                    const amount =document.createElement('TD')
                    const down =document.createElement('TD')
    
                    left.appendChild(leftIcon)
                    type.innerHTML=data.type
                    date.innerHTML=data.Date      //data . k bad wo name likhy gye hai jis name se firebase eme save kraye hi value
                    category.innerHTML=data.Category
                    amount.innerHTML=data.Amount
                    down.appendChild(downIcon)
    
                    row.appendChild(left)
                    row.appendChild(type)
                    row.appendChild(date)
                    row.appendChild(category)
                    row.appendChild(amount)
                    row.appendChild(down)
                    bodyTable.appendChild(row)
                }
    
            })
        })
    

}

// // function expenseToList()
// // {
// //     let leftIcon=document.createElement('I')
// //     leftIcon.className="fa fa-arrow-left"
    
// //     let downIcon=document.createElement('I')
// //     downIcon.className="fa fa-arrow-down" 

// //     leftIcon.id='expense-icon'
// //     downIcon.id='expense-icon'
    
// // }
// // function incomeToList()
// // {
    
// //     let rightIcon=document.createElement('I')
// //     rightIcon.className="fa fa-arrow-right"
    
// //     let upwardIcon=document.createElement('I')
// //     upwardIcon.className="fa fa-arrow-up" 

// //     rightIcon.id='income-icon'
// //     upwardIcon.id='income-icon'

// // }