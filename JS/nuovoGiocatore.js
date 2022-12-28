/**
 * chiave: nome dell'impput che cerco
 * [0]: Prima indicazione per la compilazione dell'input
 * [1]: Espressione regolare da controllare
 * [2]: Hint nel caso in cui l'input fornito non sia valido
 */

var dettagli_Form = {
    "nome": ["Nome e Cognome", /^[a-zA-Z\ \']{2,}$/, "Inserire un nome di lunghezza almeno 2, non sono ammessi numeri"],
    //"altezza": ["Altezza in cm", /\d{3}/, "Inserire un'altezza in cm senza unità di misura"],
    "squadra": ["Squadra in cui gioca durante il campionato", /^\w{2,}$/, "Inserire un testo di lunghezza almeno 2"],
    //"maglia": [" ", /\d{2}/, "Inserire il numero di maglia"],
    "ruolo": [" ", /^\w{2,}$/, "Inserire un ruolo"],
    //"magliaNazionale": [" ", /\d{2}/, "Inserire un numero di maglia"],
    "riconoscimenti": ["Riconoscimenti ottenuti dal giocatore", /.{10,}/, "La descrizione dei riconoscimenti deve essere lunga almeno 10 caratteri"],
    "note": ["Note sulla carriera del giocatore", /.{0,}/, "Nessun controllo"],
};

function caricamento() {
    for (var key in dettagli_Form) {
        var input = document.getElementById(key);
        campoDefault(input);
        input.onfocus = function () { campoPerInput(this); };
        input.onblur = function () { validazioneCampo(this); };
    }
}

function campoDefault(input) {
    input.className = "default-text";
    input.value = dettagli_Form[input.id][0];
}

function campoPerInput(input) {
    if (input.value == dettagli_Form[input.id][0]) {
        input.value = "";
        input.className = "";
    }
}

function validazioneCampo(input) {
    var p = input.parentNode;
    if (p.children.length == 2) {
        p.removeChild(p.children[1]);
    }
    var regex = dettagli_Form[input.id][1];
    var text = input.value;
    if ((text == dettagli_Form[input.id][0]) || (regex.search(regex) != 0)) {
        mostraErrore(input);
        input.focus();
        input.select();
        return false;
    }
    return true;
}

function validazioneForm() {
    for (var key in dettagli_Form) {
        var input = document.getElementById(key);
        if (!validazioneCampo(input)) {
            return false;
        }
    }
    return true;
}

function mostraErrore(input) {
    var p = input.parentNode;
    var e = document.createElement("strong");
    e.className = "errorSuggestion";
    e.appendChild(document.createTextNode(dettagli_Form[input.id][2]));
    p.appendChild(e);
}