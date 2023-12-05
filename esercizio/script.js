
const mostraNomeDiv = document.getElementById("mostraNome");
const nomeInput = document.getElementById("name");

function salvaNome() {
    const nome = nomeInput.value.trim();
    if (nome !== "") {
        localStorage.setItem("utente_nome", nome);
        mostraNomeSalvato();
    } else {
        alert("Inserisci un nome valido");
    }
}

function rimuoviNome() {
    localStorage.removeItem("utente_nome");
    mostraNomeDiv.textContent = ""
    mostraNomeSalvato();
}

function mostraNomeSalvato() {
    const nomeSalvato = localStorage.getItem("utente_nome");
    if (nomeSalvato) {
         mostraNomeDiv.textContent = "Nome precedentemente salvato: " + nomeSalvato;
         nomeInput.value = nomeSalvato;
    } else {
        nomeInput.value = "";
        mostraNomeDiv.textContent = "";
    }

    
}

mostraNomeSalvato();

//TIMER//


function tempo(){
    const nometempo = document.getElementById('timerSec')
    nometempo.textContent++
    sessionStorage.setItem('timer',nometempo.textContent)
}
window.setInterval(tempo,1000)