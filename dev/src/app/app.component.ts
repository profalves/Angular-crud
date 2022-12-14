import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  name: string = 'Rodrigo';

  dataAtual: any = () => { return new Date().toLocaleDateString() };

  data: string = this.dataAtual();
}
