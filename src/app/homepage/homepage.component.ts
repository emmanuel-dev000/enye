import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  showCopiedTextInCapitalEnye : boolean = false;
  showCopiedTextInSmallEnye : boolean = false;
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
          this.showCopiedTextInCapitalEnye = false;
          this.showCopiedTextInSmallEnye = false;
        }, 2000);
      })
      .catch((err) => {alert(err)});
  }
}
