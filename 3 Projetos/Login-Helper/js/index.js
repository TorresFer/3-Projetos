function showPassword() {
    const eye = document.getElementById("eye");  // Criadno o efeito de visualizar ou não através do JS, e pegando os id colocados no HTML
    const eyeSlash = document.getElementById("eye-slash");
    const fieldPassword = document.getElementById("field-password");

    if(eye.style.display === 'none') {  //Se o estilo do olho for igual a none, eu quero que mude para blockeado, logo, se um aprece o outro não. Então, muda-se o tipo de * para Text
        eye.style.display = 'block';
        eyeSlash.style.display = 'none';
        fieldPassword.type = 'text';
    } else {                            // Se não, só inverte! E volta a ser password/esconder a senha
        eye.style.display = 'none';
        eyeSlash.style.display = 'block';
        fieldPassword.type = 'password';
    }
}

document.getElementById('btn-login').addEventListener('click', function(e) {
    e.preventDefault();
    alert('Logado');
})