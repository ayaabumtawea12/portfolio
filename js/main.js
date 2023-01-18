let navbar=document.getElementById('navbar')

window.addEventListener("scroll",function(){ 
if(window.scrollY>50)
{
    navbar.classList.add('nav-bg-color')
    navbar.style.transition='.5s'
}

else{
    navbar.classList.remove('nav-bg-color')
    navbar.style.transition='1s'
}

})

let links= document.querySelectorAll('nav a')
links.forEach(function(link){
link.addEventListener('click',function(e){
    //e.preventDefault()
let curentId=e.target.attributes.href.value
let sectionpos=document.querySelector(curentId).offsetTop
window.scroll({
top:sectionpos,
behavior:"smooth"
})
console.log(sectionpos)
})
})


document.querySelector('.top').style.opacity='0';
window.addEventListener('scroll',function(){
let aboutpos=this.document.getElementById('about').offsetTop;
if(window.scrollY>aboutpos){
    document.querySelector('.top').style.opacity='1';
    document.querySelector('.top').style.transition='0.7s';

}else{

    document.querySelector('.top').style.opacity='0';
    document.querySelector('.top').style.transition='0.7s';


}
})

let topbtn=document.querySelector('.top button')
topbtn.addEventListener('click',function(){
window.scroll({
top:0,
behavior:'smooth'

})

})

//loading
var loading=document.getElementById('loading')

let body=document.body
body.style.overflow='hidden'//مشان اشيل ال scroll

document.querySelector('.loading').style.opacity='1'
document.querySelector('.loading').style.visability='visible'
 

window.addEventListener('load',function(){
setTimeout(function(){
    document.querySelector('.loading').style.opacity='0'
    document.querySelector('.loading').style.visability='hidden'
    

    body.style.overflow='auto'
   loading.style.width='0%'

}, 2000)
 
})





