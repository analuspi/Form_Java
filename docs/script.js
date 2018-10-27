function Enviar() {
 
    let mulher = document.getElementById("mulherid").value.toLowerCase();
 
    if (mulher.value === "SIM") {
           alert('Ok, vá para a questão dois')}
    else  {
        alert('Obrigada pela participação, mas você foi eliminado')
    }
 return false
}

function Enviar2() {
 
    let feminista = document.getElementById("feministaid").value.toLowerCase();
 
    if (feminista.value === "SIM") {
           alert('Ok, vá para a questão três');
    }
    else  {
        alert('Obrigada pela participação, mas você foi eliminada');
  }
 return false
}

function Enviar3(){
 
    let bozo = document.getElementById("bozoid").value.toLowerCase;
 
    if (bozo.value === "SIM") {
           alert('Procure um psquiatra');
    }
    else {
        alert('Obrigada pela participação, você é muito esperta!');
    }
 return false
 }
