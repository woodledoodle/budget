// import React, {Component} from "react";

// class Budget extends Component {

//     render() {
//         return ('budget')
//     }
// }

// export default Budget;




// //total amount 
// let checkingAccount=document.querySelector('#checking')
// console.log(checkingAccount);
// let checkingDeposit=checkingAccount.querySelector('.input');
// console.log(checkingDeposit);
// let amountTotal=checkingAccount.querySelector('.balance');
// let buttonClick=checkingAccount.querySelector('.deposit');
// let total=0



// //income additions
// function addMoney(){
//     total+=parseInt(checkingDeposit.value);
//      amountTotal.innerText='$'+total;
//        if (total > 0){
//          amountTotal.className = "balance";
//        }
//    }
// buttonClick.addEventListener('click',addMoney)
// //income deductions
// let checkingWithdraw = checkingAccount.querySelector('.input');
// console.log(checkingWithdraw);
// let buttonClick2 = checkingAccount.querySelector('.withdraw');
// function withdrawMoney() {
//   if (total <= 0) {
//     alert("no money.")
//   } else if (parseInt(checkingWithdraw.value) > total) {
//       alert("no money.")
//   } else {
//       total -= parseInt(checkingWithdraw.value);
//       amountTotal.innerText = '$'+total;
//   }
//   if (total === 0){
//     console.log(amountTotal.className)
//       amountTotal.className = amountTotal.className + " zero";
//       console.log(amountTotal.className)
//   }
// }
// buttonClick2.addEventListener('click', withdrawMoney)

