function entrar(){
    let datos = document.forms["loginForm"];
    let user = datos["user"].value;
    let pass = datos["pass"].value;

    if (user === "Nico_Robin" && pass === "12345"){
       window.location.href = "/templates/index.html"; 
    }
}