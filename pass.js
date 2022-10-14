
let countEl = document.getElementById("count-el")

let count = 0

function increment(){
    count += 1
   countEl.innerText = count
    console.log("count")
};
increment()


let saveEl= document.getElementById("save-el")

function save(){
    let CountStr = count + " - "

    saveEl.textContent += CountStr

    console.log("count")

    countEl.textContent = 0
    count = 0
};
save()