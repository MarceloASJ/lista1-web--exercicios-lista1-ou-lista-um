import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  nome = 'Marcelo Alexandrino de Souza Junior';
  curso = 'Ciência da Computação - Universidade FUMEC';
  email = 'marceloalexandrinojr@email.com';
  descricao = 'Estudante de Ciência da Computação focado em desenvolvimento, tecnologias modernas e engenharia de software.';
  habilidades: string[] = ['TypeScript', 'JavaScript', 'Angular', 'HTML5', 'CSS3', 'Git / GitHub'];
}