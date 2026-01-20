
// getElementById تتعامل مع عنصر واحد فقط حتي لو عندي اكثر من عنصر واخد اي دي 
// getElementsByClassName تتعامل مع عناصر متعددة حتي لو عندي اكثر من عنصر واخد اسم الكلاس ولكن لازم تنادي
// getElementsByName تتعامل مع عنصر واحد فقط حتي لو عندي اكثر من عنصر واخد اسم الاسم ولكن لازم تنادي 

// document.querySelector



// document.querySelector("#red").addEventListener("click",function(){
//     document.querySelector("#text").style.color = "red"
// })
// document.querySelector("#green").addEventListener("click",function(){
//     document.querySelector("#text").style.color = "green"
// })
// document.querySelector("#yellow").addEventListener("click",function(){
//     document.querySelector("#text").style.color = "yellow"
// })
document.querySelectorAll("button").forEach(function(item){
    item.addEventListener("click",function(){
        document.querySelector("#text").style.color = item.id
    })
})