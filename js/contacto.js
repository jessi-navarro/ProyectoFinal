//Guardar info del form.
let infoContacto = [];

let formularioContacto = document.getElementById ("formularioContacto");

formularioContacto.addEventListener ("submit", (e) => { 
    guardarInfo (e);

    JSON.parse (localStorage.getItem("infoContacto"));

    localStorage.setItem ("infoContacto", JSON.stringify (infoContacto));

    });


let guardarInfo = (e) => {
    e.preventDefault ();

    infoContacto.push ({
        contacto: e.target[0].value, 
        mail: e.target[1].value, 
        celular: e.target[2].value, 
        mensaje: e.target[3].value
    });

    formularioContacto.reset ();
    }



//Solicitud de mail
let campoMail = document.getElementById ("campoMail");
let avisoMail = document.getElementById ("avisoMail");


campoMail.addEventListener ("change", () =>{
    let aviso = document.createElement ("div");

    if(!campoMail.value.includes ("@")){
        aviso.innerHTML = "<b>Correo incorrecto</b>";
    }else{
        aviso.innerHTML = "<b>Correo válido</b>";
    }
    
    
    avisoMail.append (aviso);


    setTimeout (() => {
    avisoMail.innerHTML = ""}, 2000)
    });


