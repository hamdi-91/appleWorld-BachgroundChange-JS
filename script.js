const nextBtn=document.querySelector('.next') ;
const prevBtn=document.querySelector('.prev') ;
const container=document.querySelector('.image');

let counter=0;
nextBtn.addEventListener('click',nextSlide);
prevBtn.addEventListener('click',prevSlide);

function nextSlide (){
    container.animate([{opacity:'0.1'},{opacity:'1.0'}],{duration:1000,fill:'forwards'})
    if (counter===8){
        return counter=-1;
    }
counter++ ;
container.style.backgroundImage = `url(app-${counter}.jpg)`
}
function prevSlide (){
    container.animate([{opacity:'0.1'},{opacity:'1.0'}],{duration:1000,fill:'forwards'})

    if (counter===0){
        return counter=9;
    }
    counter-- ;
    container.style.backgroundImage = `url(app-${counter}.jpg)`
    }