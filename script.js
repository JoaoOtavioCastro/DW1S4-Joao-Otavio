
    // Array com os nomes das aulas
    var aulas = ["Aula03", "Aula04", "Aula05", "Aula06", "Aula07", "Aula08", "Sabado"]; // Adicione quantas aulas você tiver
    const titulo = document.getElementById("enderec");
    const endereco = document.getElementById("endereco");
    // Inicializa o índice da aula atual
    var currentIndex = 0;

    // Função para navegar para a próxima aula
    function nextAula() {
        currentIndex++;
        if (currentIndex >= aulas.length) {
            currentIndex = 0; // Volta para a primeira aula se atingir o final
        }
        updateIframe();
    }

    // Função para navegar para a aula anterior
    function previousAula() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = aulas.length - 1; // Volta para a última aula se estiver na primeira
        }
        updateIframe();
    }

    // Atualiza o src do iframe com o caminho da aula atual
    function updateIframe() {
        var iframe = document.getElementById("iframe");
        var aulaName = aulas[currentIndex];
        iframe.src = "./" + aulaName + "/index.html";
        titulo.textContent = aulas[currentIndex];
    }

    // Adiciona eventos de clique aos botões
    document.getElementById("leftButton").addEventListener("click", previousAula);
    document.getElementById("rightButton").addEventListener("click", nextAula);



//    aulas.forEach(element => {
  //  document.write("")
//});


    // Inicializa o iframe com a primeira aula
    updateIframe();