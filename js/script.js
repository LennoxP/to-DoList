// Seleciona os elementos 
const input = document.getElementById('input');
const button = document.querySelector('.button');
const list = document.querySelector('.list');

// Adiciona um evento de clique ao botão 
button.addEventListener('click', function() {
    const task = input.value;

    if (task) {
        const listItem = document.createElement('li'); // Verifica se o campo de texto não está vazio
        listItem.textContent = '✅' + ' ' + task; // Define o texto do <li> como o valor da tarefa
        list.appendChild(listItem); // Adiciona o <li> à lista
        input.value = ''; // Limpa o campo de texto após adicionar a tarefa
    } else {
        alert('Plase, add a task.')
    }
});