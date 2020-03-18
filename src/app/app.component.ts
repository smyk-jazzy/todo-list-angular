import { Component } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  cleanLabelStr = 'Wyczyść wszystkie';
  config: { [key: string]: string | Date } = null;
  tasks: Task[] = [
    {
      name: 'Spacer z kotem Sylwestrem',
      deadline: '2020-03-20',
      done: false,
    },
    {
      name: 'Siłownia',
      deadline: '2020-01-02',
      done: false,
    },
    {
      name: 'Nauka Angulara',
      deadline: '2020-01-06',
      done: false,
    },
    {
      name: 'Sprzątanie kuwety',
      deadline: '2020-01-04',
      done: false,
    },
  ];
  constructor() {
    // symulacja ładowania danych z opóźnieniem
    setTimeout(() => this.initConfig(), 2000);
    console.log(this.tasks);
  }

  initConfig() {
    this.config = {
      title: 'Lista zadań Smyka',
      footer:
        '© Lista zadań, All rights reserved (4300: todo-list-udemy-master 2).',
      date: new Date(),
    };
  }

  //getter - typescript
  get cleanLabel(): string {
    return this.cleanLabelStr;
  }
}
