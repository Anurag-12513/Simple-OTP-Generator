
function otp(){
    let value="";
for(let i=0; i<6; i++){
    value+= (Math.floor(Math.random()*10))
}
return value;
  
}

              //Linking otp value to click btn

let place = document.querySelector('.Display')

document.querySelector('#btn').addEventListener('click',()=>{
    place.innerHTML=otp();   
})




