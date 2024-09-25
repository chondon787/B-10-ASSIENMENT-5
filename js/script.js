
function history(id, donaitonId){
    
    let hide=document.getElementById('hide-content');  
    hide.classList.add('hidden');

    document.getElementById(id).style.backgroundColor='#B4F461';
    document.getElementById(id).style.border='none';
    document.getElementById(donaitonId).style.backgroundColor='transparent';
    document.getElementById(donaitonId).style.border='2px solid #111111'; 

    
    
    let donationContainer=document.getElementById('donation-container');
    donationContainer.classList.remove('hidden');
    


}

function dontaion(id, donaitonId){
    
    document.getElementById(donaitonId).style.backgroundColor='#B4F461'
    document.getElementById(donaitonId).style.border='none';

    document.getElementById(id).style.backgroundColor='transparent';
    document.getElementById(id).style.border='2px solid #111111';

    let donationContainer=document.getElementById('donation-container');
    donationContainer.classList.add('hidden'); 

    let hide=document.getElementById('hide-content');
   hide.classList.remove('hidden')
 
    
}



let getDonateButtton=document.querySelectorAll('#donate-now');
let Adddonations=document.getElementById('donation-container');
 for(let donateButton of getDonateButtton){
    donateButton.addEventListener('click',function(e){
        const currentTime = new Date().toString();
        console.log(currentTime);
        
        let donate=e.target.parentNode.children[3].value;
        let donateTitle=e.target.parentNode.children[1].innerText;
        
        let currentDonate=parseFloat(donate);
    
        let reducMoney=document.getElementById('reduc-money');
        let pars=parseFloat(reducMoney.innerText);
        if( !isNaN(currentDonate) && currentDonate<pars && currentDonate > 0 ){
            my_modal_2.show()
            let div=document.createElement('div');
            div.classList='border-2 mb-5 p-5 rounded-2xl list-none';
            let li=document.createElement('li');
            let li2=document.createElement('li');
            li.innerHTML=`${donate} ${donateTitle}`;
            li.classList='text-[18px] font-semibold';
            li2.innerHTML=`Date: ${currentTime}`;
            
            li.classList='text-[18px] font-semibold';
            div.appendChild(li);
            div.appendChild(li2);
            Adddonations.appendChild(div);
        }else{
            my_modal_3.show();
        }
        // console.log(currentDonate, strToNum);



        
        let curretnBDT=e.target.parentNode.children['0'].children['1'].children['0']; 
        let strToNum=parseFloat(curretnBDT.innerText);  
        // let reducMoney=document.getElementById('reduc-money');
        // let pars=parseFloat(reducMoney.innerText);
        if(!isNaN(currentDonate) && currentDonate<pars && currentDonate > 0){
            
        reducMoney.innerText=pars-currentDonate;
        
        let sum=currentDonate+strToNum;  
         curretnBDT.innerText=sum;
        }
 

        
    })
    
 }


 document.getElementById('btn-blog').addEventListener('click',function(){
    document.getElementById('hide-btns').classList.add('hidden')
    document.getElementById('question-container').classList.remove('hidden');
    let hiddenContainer=document.getElementById('main-content');
    hiddenContainer.classList.add('hidden'); 
document.getElementById('donation-container').classList.add('hidden')

    document.getElementById('btn-blog').classList.add('hidden'); 
    document.getElementById('btn-home').classList.remove('hidden');

    document.getElementById('btn-home').addEventListener('click',function(){  
        document.getElementById('donation-container').classList.remove('hidden')
        document.getElementById('hide-btns').classList.remove('hidden')
        document.getElementById('btn-blog').classList.remove('hidden'); 
        document.getElementById('question-container').classList.add('hidden');
        let hiddenContainer=document.getElementById('main-content');
        hiddenContainer.classList.remove('hidden');  

        document.getElementById('btn-home').classList.add('hidden');


    })

 });