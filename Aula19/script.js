function AdicionaTarefa() {
    const Tarefas = document.getElementById("listaTarefa");
    const input = document.getElementById("TarefaAdd");
    const Valor_Tarefa = input.value;


    if (Valor_Tarefa.trim() === "") {
        alert("Digite uma atividade válida");
        return;
    }

    const TarefaNova = document.createElement('li');
    TarefaNova.textContent = Valor_Tarefa;
    Tarefas.appendChild(TarefaNova);
    input.value = "";
}