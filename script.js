const menu=document.querySelector(".menu"),nav=document.querySelector(".header nav");
menu?.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll(".header nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");observer.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
document.getElementById("year").textContent=new Date().getFullYear();
