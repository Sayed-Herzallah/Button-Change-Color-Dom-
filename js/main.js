
document.querySelectorAll("button").forEach(function(item){
    item.addEventListener("click",function(){
        document.querySelector("#text").style.color = item.id
    })

})
