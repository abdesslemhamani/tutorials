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
// // console.log(letter)
// let user = {
//     age : 38,
//     ageIndays: function(){
//         return this.age * 365;
//     },
// } ;
// console.log(user.age)
// console.log(user.ageIndays());


//tuturial

// let myIdelement = document.getElementById("my-div");
// let mytagelements = document.getElementsByTagName("p");
// let myclasselement = document.getElementsByClassName("my-span");
// let myQueryelement = document.querySelectorAll(".my-span")
// console.log(myIdelement)
// console.log(mytagelements[1])
// console.log(myclasselement[1])
// console.log(myQueryelement[1])

//tuturial 2
// let myElement = document.querySelector(".js");
// console.log(myElement.innerHTML);
// console.log(myElement.textContent);


// myElement.innerHTML = "text form <span> main.js</span> file"
// myElement.textContent = "text form <span> main.js</span> file"



// document.images[0].src= "https://google.com";
// document.images[0].alt="alternate";
// document.images[0].title="picture";
// document.images[0].id="pic";
// document.images[0].className="img";

// let myLink = document.querySelector(".link");
// console.log(myLink.getAttribute("class"));
// console.log(myLink.getAttribute("href"));

// console.log(document.getElementsByTagName("p")[0].attributes);
// let myp= document.getElementsByTagName("p")[0];
// if (myp.hasAttribute("data-src")){
// if(myp.getAttribute("data-src")=== ""){
//     myp.removeAttribute("data-src")
// } else{
//     myp.setAttribute("data-src","da3douchi")
// }
   
// } else{
//     console.log("not found");
// }

// if (myp.hasAttributes()){
// console.log("has atributes");
// }
// if (document.getElementsByTagName("div")[0].hasAttribute("")){
//     console.log ("has atributes")
// }else{
//     console.log("div has no attribute")
// }


//toturial 3
//creat element
// let myElement=document.createElement("div");
// let myattr=document.createAttribute("data-custom");
// let myText=document.createTextNode("product one");

// myElement.className="product";
// myElement.setAttributeNode(myattr);
// myElement.setAttribute("data-test","testing");

// myElement.appendChild(myText);

// document.body.appendChild(myElement)



// let myElement = document.createElement("div");
// let par = document.createElement("p");
// let hiding=document.createElement("h2");
// let mytext=document.createTextNode("paragraph is here");
// let hidding=document.createTextNode("here hidding");

// hiding.appendChild(hidding);

// myElement.appendChild(hiding)

// par.appendChild(mytext);

// myElement.appendChild(par);

// myElement.className="product";

// document.body.appendChild(myElement);



let myElement=document.querySelector("div");

console.log(myElement);
console.log(myElement.children);
console.log(myElement.childNodes);






