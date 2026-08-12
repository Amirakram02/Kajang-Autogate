document.querySelector('.menu').addEventListener('click',()=>document.querySelector('.nav').classList.toggle('open'));
document.querySelectorAll('.nav nav a').forEach(a=>a.addEventListener('click',()=>document.querySelector('.nav').classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();

document.getElementById('quoteForm').addEventListener('submit',function(e){
e.preventDefault();
const d=new FormData(this);
const message=`Hi Kajang Autogate, I would like to get a quotation.%0A%0AName: ${d.get('name')}%0APhone: ${d.get('phone')}%0AService: ${d.get('service')}%0ALocation: ${d.get('location')}%0AMessage: ${d.get('message')}`;
window.open('https://wa.me/60123456789?text='+message,'_blank');
});