const fileInput = document.getElementById('evidence');
const fileInputText = document.getElementById('fileInputText');

const form = document.querySelector('.registration-form-container');
const cancelBtn = document.getElementById('cancelButton');

const toast = document.getElementById("toast");

// Atualizar nome do arquivo
fileInput.addEventListener('change', function () {
    if (this.files && this.files[0]) {
        fileInputText.textContent = this.files[0].name;
    }
});

// FUNÇÃO TOAST
function showToast(message, type = "") {
    toast.textContent = message;
    toast.className = "toast show " + type;

    setTimeout(() => {
        toast.className = "toast";
    }, 3000);
}

// CANCELAR
cancelBtn.addEventListener('click', function () {
    form.reset();
    fileInputText.textContent = 'Insira um arquivo que comprove a participação';

    showToast("Ação cancelada", "cancel");
});

// SALVAR (usa o submit do form)
form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (form.checkValidity()) {
        showToast("Arquivo salvo com sucesso", "success");

        form.reset();
        fileInputText.textContent = 'Insira um arquivo que comprove a participação';
    } else {
        showToast("Preencha os campos obrigatórios", "error");
    }
});