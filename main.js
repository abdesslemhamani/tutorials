let products =[ "keyboard" , "Mouse" , "Pen","Pad","Monitor","iphone" ];
let colors = ["red","green","bleu"];
let showCount =6;

document.write(`<h1>show ${showCount} products</h1>`)
for(let i=0;i<showCount ;i++){

document.write(`<div>`);
document.write(`<h3>${i+1}${"-"}${products[i]}</h3>`)

for(let j = 0 ; j<colors.length;j++){
    // document.write(`<p>${colors[j]}</p>`);
}
document.write(`<p>${colors.join(" | ")}</p>`);
document.write(`</div>`);
}
