import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'calculator';
  public displayValue = '';
  public valeurUne = '0';
  public valeurDeux = '0';
  public operation = '';

  public setDisplayValue(value: string): void {
    this.displayValue = value;
  }
  public getDisplayValue(): string {
    return this.displayValue;
  }

  public appendToDisplay(value: string): void {
    this.displayValue = this.displayValue+value;
  }

  public setOperation(value: string): void {
    // Placeholder for operation logic
  }
  public clearDisplay(): void {
    this.displayValue = '';
    this.valeurUne = '0';
    this.valeurDeux = '0';
    this.operation = '';
  }

  public calculateResult(): void {
    let chaine = this.getDisplayValue();
    if (chaine === '') {
      this.displayValue = '0';
      return;
    }
    if (chaine.includes('+')) {
      const valeurs = chaine.split('+');
      this.valeurUne = valeurs[0];
      this.valeurDeux = valeurs[1];
      this.operation = '+';
      this.displayValue = (parseFloat(this.valeurUne) + parseFloat(this.valeurDeux)).toString();
    }
    else if (chaine.includes('-')) {
      const valeurs = chaine.split('-');
      this.valeurUne = valeurs[0];
      this.valeurDeux = valeurs[1];
      this.operation = '-';
      this.displayValue = (parseFloat(this.valeurUne) - parseFloat(this.valeurDeux)).toString();
    }
    else if (chaine.includes('*')) {
      const valeurs = chaine.split('*');
      this.valeurUne = valeurs[0];
      this.valeurDeux = valeurs[1];
      this.operation = '*';
      this.displayValue = (parseFloat(this.valeurUne) * parseFloat(this.valeurDeux)).toString();
    }
    else if (chaine.includes('/')) {
      const valeurs = chaine.split('/');
      this.valeurUne = valeurs[0];
      this.valeurDeux = valeurs[1];
      this.operation = '/';
      if (parseFloat(this.valeurDeux) === 0) {
        this.displayValue = 'Division par zéro non permise';
      } else {
        this.displayValue = (parseFloat(this.valeurUne) / parseFloat(this.valeurDeux)).toString();
      }
    }
    else {
      this.displayValue = 'Opération non reconnue';
    }
    this.valeurUne = this.displayValue;
    this.valeurDeux = '0';
    this.operation = '';
  }
}
