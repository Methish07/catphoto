function myfetch(){
    let catdiv=document.querySelector(".catphoto");
    catdiv.innerHTML="";
fetch("https://api.thecatapi.com/v1/images/search")
.then(response=>
     response.json()
     .then((data)=>{
         let caturl=data[0].url;
         let catimg=document.createElement("img");
         catimg.setAttribute("src",`${caturl}`);
         catdiv.appendChild(catimg);
     })
    
)
.catch((err)=>{
    console.log(err.message);
})
}