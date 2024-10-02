let editIndex = -1;

function cadastrarProfessor() {
    const professor = {
        nome: document.getElementById('nome').value,
        cpf: document.getElementById('cpf').value,
        salario: document.getElementById('salario').value,
        cargo: document.getElementById('cargo').value,
        cep: document.getElementById('cep').value,
        rua: document.getElementById('rua').value,
        numero: document.getElementById('numero').value,
        bairro: document.getElementById('bairro').value,
        cidade: document.getElementById('cidade').value,
        estado: document.getElementById('estado').value,
        celular: document.getElementById('celular').value,
        emergencia: document.getElementById('emergencia').value,
        horas: document.getElementById('horas').value,
        matricula: document.getElementById('matricula').value,
        nacionalidade: document.getElementById('nacionalidade').value,
        email: document.getElementById('email').value,
        departamento: document.getElementById('departamento').value
    };

    let professores = JSON.parse(localStorage.getItem('professores')) || [];
    professores.push(professor);
    localStorage.setItem('professores', JSON.stringify(professores));
    listarProfessores();
    document.getElementById('formProfessor').reset();
}

function listarProfessores() {
    const lista = document.getElementById('listaProfessores');
    lista.innerHTML = '';
    const professores = JSON.parse(localStorage.getItem('professores')) || [];
    professores.forEach((professor, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${professor.nome} - ${professor.cargo}
            <button onclick="editarProfessor(${index})">Editar</button>
            <button onclick="excluirProfessor(${index})">Excluir</button>
        `;
        lista.appendChild(li);
    });
}

function editarProfessor(index) {
    const professores = JSON.parse(localStorage.getItem('professores')) || [];
    const professor = professores[index];
    document.getElementById('nome').value = professor.nome;
    document.getElementById('cpf').value = professor.cpf;
    document.getElementById('salario').value = professor.salario;
    document.getElementById('cargo').value = professor.cargo;
    document.getElementById('cep').value = professor.cep;
    document.getElementById('rua').value = professor.rua;
    document.getElementById('numero').value = professor.numero;
    document.getElementById('bairro').value = professor.bairro;
    document.getElementById('cidade').value = professor.cidade;
    document.getElementById('estado').value = professor.estado;
    document.getElementById('celular').value = professor.celular;
    document.getElementById('emergencia').value = professor.emergencia;
    document.getElementById('horas').value = professor.horas;
    document.getElementById('matricula').value = professor.matricula;
    document.getElementById('nacionalidade').value = professor.nacionalidade;
    document.getElementById('email').value = professor.email;
    document.getElementById('departamento').value = professor.departamento;

    document.getElementById('btnCadastrar').style.display = 'none';
    document.getElementById('btnAtualizar').style.display = 'inline';
    editIndex = index;
}

function atualizarProfessor() {
    const professores = JSON.parse(localStorage.getItem('professores')) || [];
    const professor = {
        nome: document.getElementById('nome').value,
        idade: document.getElementById('idade').value,
        cpf: document.getElementById('cpf').value,
        telefone: document.getElementById('telefone').value,
        endereço: document.getElementById('endereço').value,
        ultima_experiecia: document.getElementById('ultima experiência').value,
        Objetivos de carreira: document.getElementById('Objetivos de carreira').value,
        Habilidades: document.getElementById('Habilidades').value,
        Principais qualidades: document.getElementById('Principais qualidades').value,
        como você se definiria em uma palavra: document.getElementById('como você se definiria em uma palavra?').value,
        
    };

    professores[editIndex] = professor;
    localStorage.setItem('professores', JSON.stringify(professores));
    listarProfessores();
    document.getElementById('formProfessor').reset();
    document.getElementById('btnCadastrar').style.display = 'inline';
    document.getElementById('btnAtualizar').style.display = 'none';
    editIndex = -1;
}

function excluirProfessor(index) {
    let professores = JSON.parse(localStorage.getItem('professores')) || [];
    professores.splice(index, 1);
    localStorage.setItem('professores', JSON.stringify(professores));
    listarProfessores();
}

document.addEventListener('DOMContentLoaded', listarProfessores);


function mascaraTelefone(telefone) {
    telefone.value = telefone.value
        .replace(/\D/g, '') // Remove todos os caracteres não numéricos
        .replace(/(\d{2})(\d)/, '($1) $2') // Coloca parênteses em volta dos dois primeiros dígitos
        .replace(/(\d{5})(\d)/, '$1-$2') // Coloca hífen entre o quinto e sexto dígito
        .replace(/(-\d{4})\d+?$/, '$1'); // Limita a quantidade de números após o hífen
}

function mascaraCPF(cpf) {
    cpf.value = cpf.value
        .replace(/\D/g, '') // Remove todos os caracteres não numéricos
        .replace(/(\d{3})(\d)/, '$1.$2') // Coloca ponto após os três primeiros dígitos
        .replace(/(\d{3})(\d)/, '$1.$2') // Coloca ponto após os três seguintes dígitos
        .replace(/(\d{3})(\d{1,2})$/, '$1-$2'); // Coloca hífen entre o nono e o décimo dígito
}