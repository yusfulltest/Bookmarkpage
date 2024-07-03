

function OpenTab(){
    
    let Tabs = document.getElementsByClassName("tablink");
    let Content = document.getElementsByClassName('tabindicator1')


   
    for(link of Tabs){
        link.classList.remove("active")
    }

    event.currentTarget.classList.add("active")


   
    

}


function loadcontent1(){
let content1 = document.getElementById('current');
let content2 = document.getElementById('cont2')
let content3 = document.getElementById('cont3')

if(content1.style.display == 'none'){
    content1.style.display = 'flex'
  content2.style.display = 'none'
  content3.style.display = 'none'
}




}


function loadcontent2(){

let content1 = document.getElementById('current')
let content2 = document.getElementById('cont2')
let content3 = document.getElementById('cont3')

    if(content2.style.display == 'flex'){
       content2.style.display = 'flex'
       content1.style.display = 'none'
       content3.style.display = 'none'
    }
    
    else{
        content2.style.display='flex'
        content1.style.display = 'none'
        content3.style.display = 'none'
 }

}

function loadcontent3(){

    let content1 = document.getElementById('current')
    let content2 = document.getElementById('cont2')
    let content3 = document.getElementById('cont3')

    if(content3.style.display == 'flex'){
        content3.style.display = 'flex'
        content1.style.display = 'none'
        content2.style.display = 'none'
     }

     else{
        content3.style.display = 'flex'
        content2.style.display ='none'
        content1.style.display ='none'
     }

}










  

function OpenAnswer(){
    let Question = document.getElementById('ques')
    let Answer = document.getElementById('answ1');
    let Dropdown = document.getElementById('icon');
let round = document.querySelector('.dropdown')
  
  


    if(Answer.style.display == 'block'){
        Answer.style.display = 'none'
       Dropdown.style.stroke ='#5267DF'
     round.style.transform= 'rotate(0deg)'
      
    

    }

    else{
        Answer.style.display = 'block';
        Dropdown.style.stroke ='#ff0000'
        round.style.transform= 'rotate(180deg)'
       
    }

    document.addEventListener('click', e =>{
        if(!Question.contains(e.target) && !Answer.contains(e.target)){
            
            Answer.style.display ='none'
            round.style.transform= 'rotate(0deg)'
            Dropdown.style.stroke ='#5267DF'
        }

       
    })
   
}


function OpenAnswer2(){
    let Question = document.getElementById('ques2')
    let Answer = document.getElementById('answ2');
    let Dropdown = document.getElementById('icon2');
let round = document.querySelector('.dropdown2')
  
  


    if(Answer.style.display == 'block'){
        Answer.style.display = 'none'
       Dropdown.style.stroke ='#5267DF'
     round.style.transform= 'rotate(0deg)'
      
    

    }

    else{
        Answer.style.display = 'block';
        Dropdown.style.stroke ='#ff0000'
        round.style.transform= 'rotate(180deg)'
       
    }


    document.addEventListener('click', e =>{
        if(!Question.contains(e.target) && !Answer.contains(e.target)){
            
            Answer.style.display ='none'
            round.style.transform= 'rotate(0deg)'
            Dropdown.style.stroke ='#5267DF'
        }

       
    })
   
}




function OpenAnswer3(){
    let Question = document.getElementById('ques3')
    let Answer = document.getElementById('answ3');
    let Dropdown = document.getElementById('icon3');
let round = document.querySelector('.dropdown3')
  
  


    if(Answer.style.display == 'block'){
        Answer.style.display = 'none'
       Dropdown.style.stroke ='#5267DF'
     round.style.transform= 'rotate(0deg)'
      
    

    }

    else{
        Answer.style.display = 'block';
        Dropdown.style.stroke ='#ff0000'
        round.style.transform= 'rotate(180deg)'
       
    }


    document.addEventListener('click', e =>{
        if(!Question.contains(e.target) && !Answer.contains(e.target)){
            
            Answer.style.display ='none'
            round.style.transform= 'rotate(0deg)'
            Dropdown.style.stroke ='#5267DF'
        }

       
    })
   
}




function OpenAnswer4(){
    let Question = document.getElementById('ques4')
    let Answer = document.getElementById('answ4');
    let Dropdown = document.getElementById('icon4');
let round = document.querySelector('.dropdown4')
  
  


    if(Answer.style.display == 'block'){
        Answer.style.display = 'none'
       Dropdown.style.stroke ='#5267DF'
     round.style.transform= 'rotate(0deg)'
      
    

    }

    else{
        Answer.style.display = 'block';
        Dropdown.style.stroke ='#ff0000'
        round.style.transform= 'rotate(180deg)'
       
    }


    document.addEventListener('click', e =>{
        if(!Question.contains(e.target) && !Answer.contains(e.target)){
            
            Answer.style.display ='none'
            round.style.transform= 'rotate(0deg)'
            Dropdown.style.stroke ='#5267DF'
        }

       
    })
   
}






    