let app=document.querySelectorAll(".parent div");
console.log(app);

let img=document.querySelectorAll(".images-content img");
let imgarr=Array.from(img);
console.log(imgarr)

app.forEach((ele)=>{
    ele.addEventListener("click",function(e){
        app.forEach((ele)=>{
            ele.classList.remove("activate")
        })
        e.currentTarget.classList.add("activate");
        imgarr.forEach((div)=>{
            div.style.display="none";
        })
        document.querySelectorAll(e.currentTarget.dataset.act).forEach((ele)=>{

            ele.style.display='block'
        })
    })
    
})

