let arr = document.querySelectorAll('.inp');
let btnBrex=document.getElementById('btn-brex');
let btnStripe=document.getElementById('btn-stripe');
let btnAmex=document.getElementById('btn-amex'); 
let table =document.getElementById('table');
let unlimitedRewardsInp=document.getElementById('unlimitedRewardsInp');
let liftTimeRewardsInp=document.getElementById('liftTimeRewardsInp');
btnBrex.addEventListener('click',()=>{
    calculateBrex();
    table.classList.remove('d-none')

})
btnStripe.addEventListener('click',()=>{
    calculateStripe();
    table.classList.remove('d-none');
})
btnAmex.addEventListener('click',()=>{
    calculateAmex();
    table.classList.remove('d-none');
})  
function calculateBrex(){ 
let sum = 0;
for (let i = 0; i < arr.length; i++) {
sum += parseInt(arr[i].value);
} 
let Brex = sum * 0.3;
let unlimitedRewards = sum * 1.1;
let lifetimeRewards = sum *1.2;
let businessCardNumber=document.getElementById('businessCardNumber').innerHTML="$"+Brex;
document.getElementById('businessCardName').innerHTML='brex business card';
document.getElementById('unlimitedNumber').innerHTML="$"+unlimitedRewards;
document.getElementById('liftTimeNumber').innerHTML="$"+lifetimeRewards;
}
function calculateStripe()
{
let sum = 0;
for (let i = 0; i < arr.length; i++) {
sum += parseInt(arr[i].value);
}  
let Stripe = sum *2.9;
let unlimitedRewards = sum * 1.1;
let lifetimeRewards = sum *1.2;
let businessCardNumber=document.getElementById('businessCardNumber').innerHTML="$"+Stripe;
document.getElementById('businessCardName').innerHTML='stripe business card';
document.getElementById('unlimitedNumber').innerHTML="$"+unlimitedRewards;
document.getElementById('liftTimeNumber').innerHTML="$"+lifetimeRewards;

}

function calculateAmex()
{
let sum = 0;
for (let i = 0; i < arr.length; i++) {
sum += parseInt(arr[i].value);
}
let Amex = sum * 1.3;
let unlimitedRewards = sum * 1.1;
let lifetimeRewards = sum *1.2;
let businessCardNumber=document.getElementById('businessCardNumber').innerHTML="$"+Amex;
document.getElementById('businessCardName').innerHTML='amex business card';
document.getElementById('unlimitedNumber').innerHTML="$"+unlimitedRewards;
document.getElementById('liftTimeNumber').innerHTML="$"+lifetimeRewards;
}


for (let i = 0; i < arr.length; i++) {
    arr[i].addEventListener('keyup',function(){
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
        sum += parseInt(arr[i].value);
        }  
        let unlimitedRewards = sum * 1.1;
        let lifetimeRewards = sum *1.2;
        unlimitedRewardsInp.value=unlimitedRewards;
        liftTimeRewardsInp.value=lifetimeRewards; 
    })
    
}
