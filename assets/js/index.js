const divCard = document.querySelector(".results");
let ip;
const submit = document.getElementById('submit');
let results = document.querySelector('.results');
submit.addEventListener('click', ()=>{
    ip = document.getElementById('search').value;
    ipsearch(ip);
    results.classList.add("active")
});
results.addEventListener('click', ()=> results.style.display = 'flex')
async function ipsearch(ip) {
  try {
    const URL = await fetch(`https://iplocate.io/api/lookup/${ip}`);
    if (!URL.ok) {
      throw new Error("Erro !");
    }
    const data = await URL.json();
    ipresults(data);
  } catch {
    alert(`O IP ${ip} não encontrado !`);
    console.error("IP não encontrado");
  }
}

function ipresults(data) {
  const ipn = data.ip;
  const pais = data.country;
  const cidade = data.city;
  const continente = data.continent;
  divCard.innerHTML = `

    <h2>O seu endereço de IP é : <span>${ipn}</span></h2>
    <h2>O pais onde você está é : <span>${pais}</span></h2>
    <h2>A cidade onde você está é : <span>${cidade}</span></h2>
    <h2>O continente onde você está é : <span>${continente}</span></h2>

    `;
}

