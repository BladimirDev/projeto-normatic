const validar = () =>{
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const mensagem = document.querySelector('h1');

    if (email == "Admin" && password == "1234"){
      window.location.href = "adm/registro.html";
    }

    else{
      window.location.href = "funcionario/choice.html";
    }
}
