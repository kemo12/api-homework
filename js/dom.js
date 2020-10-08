const btn=document.querySelector('.search');
const input=document.querySelector('.input');
const result_div=document.querySelector('.row');
btn.addEventListener('click',function(){
    if (!input.value){
        let empty_input=document.createElement('p');
        empty_input.textContent="please enter thing to search for !";
        empty_input.style.marginLeft = "50px";
        empty_input.style.color='red';
        result_div.textContent="";
        result_div.appendChild(empty_input); 

    }
    else{
    let clintId='YN3YlYJkdJ1wS-lfILZa8GXftqYSifI2THx8MTekBdI';
    let query=input.value;
    let url='https://api.unsplash.com/search/photos/?client_id='+clintId+'&query='+query;

    //make a request to api
    fetch(url,{
        method:'GET',
        credentials:'same-origin',
    })
    .then(res=>res.json())
    .then(res=>{
        result_div.textContent="";

        console.log(res);
        if(res.results.length==0){
        let empty_input=document.createElement('p');
        empty_input.textContent="there is no results founded :(";
        empty_input.style.marginLeft = "50px";
        empty_input.style.color='red';
        result_div.textContent="";
        result_div.appendChild(empty_input); 
        }
else{
    res.results.forEach(photo => {
         let url=photo.urls.regular;
        let alr=photo.alt_description;
        let col=document.createElement('div');
        col.classList.add('col');
        let card=document.createElement('div');
        card.classList.add('card');
        col.appendChild(card);
        let img=document.createElement('img');
        img.classList.add('card-img-top');
        img.src=url;
        card.appendChild(img);
        let card_body=document.createElement('div');
        card_body.classList.add('card-body');
        card.appendChild(card_body);
        let card_text=document.createElement('p');
        card_text.classList.add('card-text');
        card_text.textContent=alr;
        card_body.appendChild(card_text);
        result_div.appendChild(col);        
        
        }); 
    }
    })
    
    .catch(err=>{
        const error=document.createElement('p');
        error.textContent="something wrong";
        result_div.appendChild(error);
    });

    

}
});