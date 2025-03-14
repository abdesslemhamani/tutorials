// // let products =[ "keyboard" , "Mouse" , "Pen","Pad","Monitor","iphone" ];
// // let colors = ["red","green","bleu"];
// // let showCount =6;

// // document.write(`<h1>show ${showCount} products</h1>`)
// // for(let i=0;i<showCount ;i++){

// // document.write(`<div>`);
// // document.write(`<h3>${i+1}${"-"}${products[i]}</h3>`)

// // for(let j = 0 ; j<colors.length;j++){
// //     // document.write(`<p>${colors[j]}</p>`);
// // }
// // document.write(`<p>${colors.join(" | ")}</p>`);
// // document.write(`</div>`);
// // }


// let myAdmins =[ "ahmad" , "osama" , "hosni","stop","samera" ];
//  let myEmployees = ["amgad","samah","ameer","omar","othman","amany","samya","anwar"];
//  for (i=0;i<myAdmins.length;i++);{
//     if myAdmins[i]="stop";
//     break;
//  document.write(`<div> we have x admins</div>`)
//  document.write(`<div> we have ${myAdmins.slice(0,4)} admins</div>`)
//  document.write(`<div>`);
//  //document.write(`<p>the admin for team ${}</p>`)
//  } 


let sentence = "I Love Foood Code Too Playing Much";
let smallWords =sentence.split(" ").filter(function(ele){
return ele.length<=4;
})
.join(" ");
console.log(smallWords)