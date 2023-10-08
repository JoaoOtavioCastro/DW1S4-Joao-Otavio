    var aulas = ["Aula03", "Aula04", "Sabado", "Aula05", "Aula06", "Aula07", "Aula08", "Aula09"];     
    const titulo = document.getElementById("enderec");
    const endereco = document.getElementById("endereco");
    const lis = document.getElementById("lis")
    var currentIndex = 0;

    function nextAula() {
        currentIndex++;
        if (currentIndex >= aulas.length) {
            currentIndex = 0;
        }
        updateIframe();
    }

    function previousAula() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = aulas.length - 1;
        }
        updateIframe();
    }

    function updateIframe() {
        var iframe = document.getElementById("iframe");
        var aulaName = aulas[currentIndex];
        iframe.src = "./" + aulaName + "/index.html";
        titulo.textContent = aulas[currentIndex];
        endereco.setAttribute("href", "./"+aulaName+"/index.html");
    }

    document.getElementById("leftButton").addEventListener("click", previousAula);
    document.getElementById("rightButton").addEventListener("click", nextAula);

    let acumulador ="";
aulas.forEach(element => {
    acumulador += '<li><a href="./'+element+'/index.html" target="_blank">'+element+'</a></li>'
});
lis.innerHTML = acumulador;

    updateIframe();