//Primeiro programa em JavaScript
//CONST não muda durante o codigo
//LER variavel pode mudar durante o docidog
//DEFININDO VARIAVEL


document.addEventListener("DOMContentLoaded", () => {
    // Captura o formulário
    const formulario = document.getElementById("formulario");
    const limparBtn = document.getElementById("limpar");
    const listaHistorico = document.getElementById("listaHistorico");
    const toggleHistoricoBtn = document.getElementById("toggleHistorico");
    const historicoDiv = document.getElementById("historico");

      // Modal e botão de fechar
      const modal = document.getElementById("modalResultado");
      const closeBtn = document.querySelector(".close-btn");

    // Adiciona um evento de envio ao formulário
    formulario.addEventListener("submit", (event) => {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Obtém os valores dos campos
        const nome = document.getElementById("nome").value;
        const disciplina = document.getElementById("disciplina").value;
        const n1 = parseFloat(document.getElementById("nota1").value);
        const n2 = parseFloat(document.getElementById("nota2").value);
        const n3 = parseFloat(document.getElementById("nota3").value);
        const n4 = parseFloat(document.getElementById("nota4").value);


        // Calcula a média
        const media = (n1 + n2 + n3 + n4) / 4;

        // Obtém o elemento onde o resultado será exibido
        const calculoDiv = document.getElementById("calculo");

        
        // Exibe o resultado no modal
const modalCalculoDiv = document.getElementById("calculoModal");
modalCalculoDiv.innerHTML = ` 
    <p><strong>Nome do Aluno:</strong> ${nome}</p>
    <p><strong>Disciplina:</strong> ${disciplina}</p>
    <p><strong>Nota 1:</strong> ${n1.toFixed(1)}</p>
    <p><strong>Nota 2:</strong> ${n2.toFixed(1)}</p>
    <p><strong>Nota 3:</strong> ${n3.toFixed(1)}</p>
    <p><strong>Nota 4:</strong> ${n4.toFixed(1)}</p>
    <p><strong>Média Final:</strong> ${media.toFixed(2)}</p>
    <p><strong>Resultado:</strong> ${
        media >= 6 
            ? `<span style="color: green;">Aprovado</span>` 
            : `<span style="color: red;">Reprovado</span>`
    }</p>
`;

// Exibe o modal
modal.style.display = "flex";


        // Adiciona o cálculo ao histórico
        const itemHistorico = document.createElement("li");
        itemHistorico.innerHTML = `
            <strong>${nome}</strong> - ${disciplina} - Média: ${media.toFixed(2)} - ${
            media >= 6 ? "Aprovado" : "Reprovado"
        }
        `;
        listaHistorico.appendChild(itemHistorico);

        // Limpa os campos do formulário
        formulario.reset();
    });

    // Evento para limpar os campos do formulário e o cálculo atual
    limparBtn.addEventListener("click", () => {
        formulario.reset();
        document.getElementById("calculo").innerHTML = "";
    });

// Função para alternar a visibilidade do histórico
toggleHistoricoBtn.addEventListener("click", () => {
    if (historicoDiv.style.display === "none") {
        historicoDiv.style.display = "block";
        toggleHistoricoBtn.textContent = "Ocultar Histórico";
    } else {
        historicoDiv.style.display = "none";
        toggleHistoricoBtn.textContent = "Mostrar Histórico";
    }
});

 // Fechar o modal quando clicar no botão "X"
 closeBtn.addEventListener("click", () => {
    modal.style.display = "none"; // Esconde o modal
});

// Fechar o modal quando clicar fora do conteúdo do modal
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
});



