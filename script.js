 
var inputField = document.getElementById('field');
var budget     = document.getElementById('budget');
var balance    = document.getElementById('balance');
var button     = document.getElementById('btn');


 
var item         = document.getElementById('item');
var totalExpenseAmount = document.getElementById('Eamn');
var expenseTitle = document.getElementById('expensetitle');
var expensehm = document.getElementById('expenseValue');
var add          = document.getElementById('add');
var expenses  = document.getElementById('expenses');
var cancel     = document.getElementById('delete');

var totalBalance = 0;
var totalExpense = 0;
  
button.addEventListener('click',(event)=>{
 
event.preventDefault();



     
    var totalcost = inputField.value; 
    var budget1 = Number(totalcost);
    totalBalance = Number(totalcost);
    budget.innerHTML = `$ ${budget1}`;
    balance.innerHTML = `$ ${totalBalance}`;


 
})
    
  add.addEventListener('click',()=>{


   var expenses1  = Number(totalExpenseAmount.value);
   expenses.innerHTML = `$ ${totalExpense + expenses1}`;
    totalExpense = totalExpense + expenses1;
   balance.innerHTML = `$ ${totalBalance - expenses1}`;
    totalBalance = totalBalance - expenses1;
    
   
    var newRow  = document.createElement('tr');
   var newItem = document.createElement('th');

  newItem.innerHTML = item.value;
  booklist.appendChild(newItem);
     var newexpenshm = document.createElement('th');
  newexpenshm.innerHTML = `$ ${totalExpenseAmount.value}`;
    
  booklist.appendChild(newexpenshm);
           var newCancel  = document.createElement('th');
     newCancel.innerHTML = '<button>Delete</button>';
     booklist.appendChild(newCancel);
       booklist.appendChild(newRow);
          newCancel.addEventListener('click',()=>{
 
         booklist.removeChild(newItem);
         booklist.removeChild(newexpenshm);
         booklist.removeChild(newCancel);
        
          
      })
 
   
   })