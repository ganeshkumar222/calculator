let output = document.getElementById("result")
let button = document.getElementsByClassName("btn")
for(let i=0;i<button.length;i++){
    button[i].addEventListener("click",(e)=>{
        output.value +=e.target.innerHTML

    })
}

let evaluate = document.getElementById("equal")

evaluate.addEventListener("click",()=>{
    try{
        output.value = eval(output.value)
    }
    catch(err){
        alert("Invalid input")
    }
})

let clear = document.getElementById("clear")
clear.addEventListener("click",clearscreen = ()=>{
    output.value =""
})
let del = document.getElementById("delete")
del.addEventListener("click",()=> {
    output.value = output.value.slice(0,-1)
})
valid =["1","2","3","4","5","6","7","8","9","0",".","+","-","*","%","/"]
output.addEventListener("keypress",(e)=>{
    console.log(String.fromCharCode(e.keyCode))
    if(valid.includes(String.fromCharCode(e.keyCode))){
        output.value +=e.target.innerHTML

    }
    else{
        let a = alert("Invalid input")
        output.addEventListener("focus",(e)=>{
            output.value=""
        })
        
    }

})