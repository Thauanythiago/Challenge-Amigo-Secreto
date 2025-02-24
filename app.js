let amigos = [];
let amigosSorteados = [];

document.getElementById("amigo").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();  
        adicionarAmigo();  
    }
});

// Função para adicionar amigos na lista
function adicionarAmigo() {
    let amigoSecreto = document.querySelector('input').value;

    if (amigoSecreto == '') {
        alert('Por favor, insira um nome válido!');
        return;
    }
    if (amigos.includes(amigoSecreto)) {
        alert('Esse nome já foi adicionado!');
        return;
    }    
     
    amigos.push(amigoSecreto);
    console.log(amigos);
    exibirListaAmigos();
    limparCampoAdicionar();
}

// Limpa o campo de input 
function limparCampoAdicionar() {
    document.querySelector('input').value = '';  
}

// Exibe a lista de amigos na tela
function exibirListaAmigos() {
    let listaAmigos = document.querySelector('ul');  
    listaAmigos.innerHTML = '';  

    amigos.forEach(function(amigo) {
        let li = document.createElement('li');  
        li.textContent = amigo;  
        listaAmigos.appendChild(li);  
    });
}

// Sorteia um amigo aleatório
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Por favor, insira pelo menos um amigo para sortear!');
        return;
    }

    if (amigosSorteados.length === amigos.length) {
        alert('Todos os amigos foram sorteados! Clique no botão para novo sorteio.');
        return;
    }

    let amigoSorteado;
    do {
        let indiceSorteado = Math.floor(Math.random() * amigos.length);  
        amigoSorteado = amigos[indiceSorteado];  
    } while (amigosSorteados.includes(amigoSorteado));

    amigosSorteados.push(amigoSorteado); 

    let resultadoSorteio = document.getElementById('resultado');
    resultadoSorteio.innerHTML = '';  

    let li = document.createElement('li');
    li.textContent = `Seu amigo secreto é: ${amigoSorteado}`;  
    resultadoSorteio.appendChild(li);  
}

// Reseta tudo para realizar um novo sorteio
function novoSorteio() {
    amigos = [];  
    amigosSorteados = []; 
    exibirListaAmigos();  
    document.getElementById('resultado').innerHTML = ''; 
    alert('Novo sorteio iniciado. Adicione amigos e clique em Sortear Amigo.');
}