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
// //  } 


// let sentence = "I Love Foood Code Too Playing Much";
// let smallWords =sentence.split(" ").filter(function(ele){
// return ele.length<=4;
// })
// .join(" ");
// console.log(smallWords)
// let mix ="A13BS2ZX";
// let justnum = mix.split("").filter(function(ele){
//     return !isNaN(parseInt(ele))
// }).map(function(ele){
//     return ele*ele;
// })
// .join(" ");
// console.log(justnum);

// let theBiggest = ["Bla","propagandi","other","aaa","battery","test-doubble-tets"];
// let longest = theBiggest.reduce(function(acc,current){
//     return acc.length>current.length ? acc : current;
// })
// console.log(longest);
// let removeChars=["s","@","@","a","L","@","@","A","M","@","O"];
// let letter = removeChars.filter(function(ele){
//     return ! ele.startsWith("@")
// })

// .reduce(function(acc,current){
//     return `${acc}${current}`;
// })
// console.log(letter)
let user = {
    age : 38,
    ageIndays: function(){
        return this.age * 365;
    },
} ;
console.log(user.age)
console.log(user.ageIndays());
