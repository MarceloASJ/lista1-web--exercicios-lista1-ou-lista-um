import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Tarefa {
  descricao: string;
  concluida: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  novaTarefaDescricao = '';
  tarefas: Tarefa[] = [];

  adicionarTarefa() {
    if (this.novaTarefaDescricao.trim() !== '') {
      this.tarefas.push({
        descricao: this.novaTarefaDescricao,
        concluida: false
      });
      this.novaTarefaDescricao = '';
    }
  }

  alternarTarefa(index: number) {
    this.tarefas[index].concluida = !this.tarefas[index].concluida;
  }

  removerTarefa(index: number) {
    this.tarefas.splice(index, 1);
  }
}