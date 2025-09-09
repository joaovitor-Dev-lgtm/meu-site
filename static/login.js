document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.loginn-form');
    if (form) {
        form.addEventListener('submit', function (e) {
            const usuario = form.usuario.value.trim();
            const senha = form.senha.value.trim();
            if (!usuario || !senha) {
                e.preventDefault();
                alert('Preencha todos os campos!');
            }
        });
    }
});