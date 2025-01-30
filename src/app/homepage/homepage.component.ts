import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  showCopiedTextInCapitalEnye : boolean = false;
  showCopiedTextInSmallEnye : boolean = false;
  
  capitalEnyeButtonState !: string;
  capitalEnyePressed(text: string) : void {
    this.capitalEnyeButtonState = "pressed";
    this.copyToClipboard(text);
    setTimeout(() => {
      this.capitalEnyeButtonState = "normal";
      this.showCopiedTextInCapitalEnye = false;
    }, 2500);
  }

  smallEnyeButtonState !: string;
  smallEnyePressed(text: string) : void {
    this.smallEnyeButtonState = "pressed";
    this.copyToClipboard(text);
    setTimeout(() => {
      this.smallEnyeButtonState = "normal";
      this.showCopiedTextInSmallEnye = false;
    }, 2500);
  }

  copyToClipboard(text: string) : void {
    navigator.clipboard.writeText(text)
      .then(() => {
        if (text === 'Ñ') {
          this.showCopiedTextInCapitalEnye = true;
        }
        
        if (text === 'ñ') {
          this.showCopiedTextInSmallEnye = true;
        }

        setTimeout(() => {
          this.showCopiedTextInSmallEnye = false;
        }, 2500);
      })
      .catch((err) => {alert(err)});
  }
}
