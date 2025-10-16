document.addEventListener('DOMContentLoaded',()=>{
// Smooth scroll for in-page links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
a.addEventListener('click',e=>{
const id=a.getAttribute('href');
const el=document.querySelector(id);
if(el){e.preventDefault();el.scrollIntoView({behavior:'smooth'});}
});
});
// Contact button: open in new tab (URLを差し替え可能)
const contactBtn=document.getElementById('contact-btn');
if(contactBtn){
}
});
