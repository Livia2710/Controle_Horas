const fileInput = document.getElementById('evidence');
const fileInputText = document.getElementById('fileInputText');

const registrationForm = document.querySelector('.registration-form-container');
const cancelButton = document.getElementById('cancelButton');
const saveButton = document.getElementById('saveButton');

// Atualizar o texto do arquivo selecionado
fileInput.addEventListener('change', function () {
    if (this.files && this.files[0]) {
        fileInputText.textContent = this.files[0].name;
    }
});

// Adicionar evento de clique ao botão de cancelar
cancelButton.addEventListener('click', function () {
    // Limpar o formulário
    registrationForm.reset();

    // Resetar o texto do arquivo selecionado
    fileInputText.textContent = 'Insira um arquivo que comprove a participação';
});

// Adicionar evento de clique ao botão de salvar
saveButton.addEventListener('click', function (event) {
    event.preventDefault(); // Evitar o envio do formulário

    if (registrationForm.checkValidity()) {
        // Aqui pode adicionar a lógica para processar os dados do formulário
        // Por exemplo, enviar os dados para um servidor
        alert('Dados salvos com sucesso!');

        // Limpar o formulário após salvar
        registrationForm.reset();
        // Resetar o texto do arquivo selecionado
        fileInputText.textContent = 'Insira um arquivo que comprove a participação';
    } else {
        // Se o formulário não for válido, exibir uma mensagem de erro
        alert('Por favor, preencha todos os campos obrigatórios.');
    }
});
