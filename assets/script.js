(()=>{"use strict";
  const menu=document.querySelector(".menu"),nav=document.getElementById("site-nav");
  if(menu&&nav){
    const close=()=>{nav.classList.remove("open");menu.setAttribute("aria-expanded","false");menu.setAttribute("aria-label","Open navigation menu");menu.textContent="☰";};
    menu.addEventListener("click",()=>{const open=menu.getAttribute("aria-expanded")!=="true";nav.classList.toggle("open",open);menu.setAttribute("aria-expanded",String(open));menu.setAttribute("aria-label",open?"Close navigation menu":"Open navigation menu");menu.textContent=open?"✕":"☰";});
    nav.querySelectorAll("a").forEach(link=>link.addEventListener("click",close));
    document.addEventListener("keydown",event=>{if(event.key==="Escape"&&nav.classList.contains("open")){close();menu.focus();}});
    const desktop=window.matchMedia("(min-width: 651px)");desktop.addEventListener?.("change",event=>{if(event.matches)close();});
  }
  const form=document.getElementById("contact-form");
  if(form)form.addEventListener("submit",event=>{
    event.preventDefault();if(!form.reportValidity())return;
    const data=new FormData(form),message=["Hi LoRiK Craft, I would like to discuss a project.","","Name: "+String(data.get("name")||"").trim(),"Email: "+String(data.get("email")||"").trim(),"Service: "+String(data.get("service")||"").trim(),"Project details: "+String(data.get("message")||"").trim()].join("\n");
    const status=document.getElementById("status");if(status)status.textContent="Opening WhatsApp with your prepared message. Review it there before sending.";
    const opened=window.open("https://wa.me/19406010924?text="+encodeURIComponent(message),"_blank","noopener,noreferrer");
    if(!opened&&status)status.textContent="Pop-up blocked. Open WhatsApp using the contact link above, or allow pop-ups for this site.";
  });
  document.querySelectorAll("a[target='_blank']").forEach(link=>{link.rel="noopener noreferrer";});
})();