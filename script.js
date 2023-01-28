document.querySelectorAll("button").forEach((element) => {
  element.addEventListener("click", (ev) => {
    const eventValue = ev.target.innerHTML;
    const displayResult = document.getElementById("displayNumeri").innerHTML;
    if (!isNaN(eventValue)) {
      handleNumers(eventValue, displayResult);
    } else handleOperators(eventValue, displayResult);
    console.log(
      operatorePremuto ? "operatore true" : "numero",
      "risultato: ",
      risultato
    );
  });
});

let displayValue = parseInt(document.getElementById("displayNumeri").innerHTML); //salvataggio dato prima di premere altro operatore
let numeroPrecedente = 0;
let numeroSuccessivo = 0;
let risultato = 0;
let operatorePremuto = false;
let ultimaFunzionePremuta = "";

function stampaRisultato(x) {
  document.getElementById("displayNumeri").innerHTML = x;
}

function handleNumers(x) {
  displayValue = document.getElementById("displayNumeri").innerHTML.trim(); //copia innerHTML
  //se c'è lo zero iniziale, assegna input a display.
  if (
    (displayValue === "0" && displayValue !== numeroPrecedente) ||
    operatorePremuto
  ) {
    operatorePremuto = false;
    document.getElementById("displayNumeri").innerHTML = x;
    //se è un numero, concatena
  } else {
    document.getElementById("displayNumeri").innerHTML += x;
  }
}

function handleOperators(operator) {
  displayValue = document.getElementById("displayNumeri").innerHTML;
  /*   if (operator !== "◄" || operator !== "CE") {
    document.getElementById("displayNumeri").innerHTML = "0";
    //evita di cancellare "0" iniziale.
  } */
  switch (operator) {
    case "◄":
      if (isNaN(displayValue) || displayValue === "0") break; //se c'è testo, jumpa.
      displayValue = displayValue.slice(0, -1);
      console.log(displayValue);
      if (displayValue === "")
        document.getElementById("displayNumeri").innerHTML = "0";
      break;
    case "CE":
      displayValue = "";
      document.getElementById("displayNumeri").innerHTML = 0;
      displayResult = 0;
      numeroPrecedente = 0;
      operatorePremuto = false;
      numeroSuccessivo = 0;
      risultato = 0;
      break;
    case "+":
      console.log("numero precedente fuori IF: ", numeroPrecedente);
      numeroPrecedente = parseInt(displayValue);
      risultato += numeroPrecedente;
      operatorePremuto = true;
      console.log(risultato);
      numeroPrecedente = parseInt(displayValue);
      console.log("numero precedente: ", numeroPrecedente);
      break;
    case "=":
      document.getElementById("displayNumeri").innerHTML = risultato;
      break;
  }
  //clear del displayValue una volta uscito dal case-switch
}

/*         /*         if (numeroPrecedente !== 0) risultato = displayValue + numeroPrecedente;
        /* document.getElementById("displayNumeri").innerHTML= risultato; 
        return;
      }
      if (displayValue === 0) {
        break;
      }
      if (operatorePremuto == true) {
        document.getElementById("displayNumeri").innerHTML = "0";
        numeroSuccessivo = parseInt(displayValue);
        risultato = numeroPrecedente + numeroSuccessivo;
        console.log("la somma è di: ", risultato);
        operatorePremuto = false;
        ultimaFunzionePremuta = "+";
        document.getElementById("displayNumeri").innerHTML += risultato;
      } else {
        numeroPrecedente = parseInt(displayValue);
        console.log("valore dV in case +: ", displayValue);
        operatorePremuto = true;
      }
      break; */

