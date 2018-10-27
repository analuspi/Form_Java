function Enviar() {
 
    let mulher = document.getElementById("mulherid");
 
    if (mulher.value.toLowerCase() === "sim") {
           alert('Ok, vá para a questão dois')}
    else  {
        alert('Obrigada pela participação, mas você foi eliminado')
    }
 return false
}

function Enviar2() {
 
    let feminista = document.getElementById("feministaid");
 
    if (feminista.value.toLowerCase()=== "sim") {
           alert('Ok, vá para a questão três');
    }
    else  {
        alert('Obrigada pela participação, mas você foi eliminada');
  }
 return false
}

function Enviar3(){
 
    let bozo = document.getElementById("bozoid");
 
    if (bozo.value.toLowerCase() === "sim") {
           alert('Procure um psquiatra');
    }
    else {
        alert('Obrigada pela participação, você é muito esperta!');
    }
 return false
 }
