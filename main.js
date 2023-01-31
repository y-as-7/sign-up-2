
let password =document.getElementById("password")
//array of elements
let spans=document.querySelectorAll(".progress span");


let symbols=["!","@","#","$","%","&","(",")","^"]


function passwordStrenght(){
    // if(password.value.length>0 &&password.value.length<7){
        
    // }
    
    let x = password.value.split("");
    
    s=x.forEach(e => {
        symbols.includes(e)
    });
    
    console.log(s);
}


