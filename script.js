const data=[
["Notebook Gamer","Eletrônicos","💻",3499.90,4299.90,19],["Smartphone 5G","Celulares","📱",1299.90,1699.90,24],
["Headset Gamer","Acessórios","🎧",179.90,249.90,28],["Placa de Vídeo","Games","🎮",1899.90,2299.90,17],
["Monitor 144Hz","Eletrônicos","🖥️",899.90,1099.90,18],["Teclado Mecânico","Acessórios","⌨️",219.90,299.90,27],
["Caixa de Som","Acessórios","🔊",399.90,499.90,20],["Console Gamer","Games","🎮",2499.90,2999.90,17],
["Smart TV 50","Eletrônicos","📺",2199.90,2699.90,19],["Celular Pro","Celulares","📱",2799.90,3299.90,15],
["Air Fryer","Casa","🍟",349.90,449.90,22],["Robô Aspirador","Casa","🤖",899.90,1199.90,25]];
const money=n=>n.toLocaleString("pt-BR",{style:"currency",currency:"BRL"});let active="Todos";
function render(){let q=document.querySelector("#q").value.toLowerCase().trim();let list=data.filter(p=>(active==="Todos"||p[1]===active)&&(!q||p[0].toLowerCase().includes(q)||p[1].toLowerCase().includes(q)));document.querySelector("#products").innerHTML=list.map(p=>`<article class="product"><div class="pic"><span class="discount">-${p[5]}%</span>${p[2]}</div><div class="body"><div class="catname">${p[1]}</div><h3>${p[0]}</h3><div class="old">${money(p[4])}</div><div class="price">${money(p[3])}</div><a class="offer" href="#" onclick="return false">Ver oferta →</a></div></article>`).join("");document.querySelector("#count").textContent=list.length+" oferta"+(list.length===1?"":"s");document.querySelector("#empty").hidden=list.length>0}
document.querySelector("#q").addEventListener("input",render);document.querySelector("#buscar").addEventListener("click",render);
document.querySelectorAll(".cat").forEach(b=>b.onclick=()=>{active=b.dataset.cat;document.querySelectorAll(".cat").forEach(x=>x.classList.remove("on"));b.classList.add("on");render()});
document.querySelectorAll("[data-q]").forEach(b=>b.onclick=()=>{document.querySelector("#q").value=b.dataset.q;render();document.querySelector("#ofertas").scrollIntoView({behavior:"smooth"})});
document.querySelector("#total").textContent=data.length;render();