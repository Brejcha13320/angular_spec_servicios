import { Component } from '@angular/core';
import { Calculator } from './calculador';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'curso-angular-unit-testing-servicios';

  ngOnInit() {
    const calculator = new Calculator();
    const rta = calculator.multiply(3, 3);
    console.log(rta === 9);
    const rta2 = calculator.divide(3, 0);
    console.log(rta2 === null);
  }
}
