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
function showInfo(us="Un", ag="Un", rt=0, show="yes",  ...sk){
   document.write(`<div>`);
   document.write(`<h2>welcom ${us}</h2>`);
   document.write(`<p>age ${ag}</p>`);
   document.write(`<p>hour rate :${rt}</p>`);
   if (show ==="yes"){
      if(sk.length > 0){
 document.write(`<p> skills: ${sk.join(" | ")}</p>`);
   }else{
 document.write(`<p> skills: no skills</p>`);  
 }
}else{
   document.write(`<p> skills is hidden</p>`);  }
   document.write(`</div>`);}

showInfo("mad" ,30 ,20,"no","html","css","javascript",);
