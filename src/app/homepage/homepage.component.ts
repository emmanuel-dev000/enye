import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  copyToClipboard(text: string) : void {
    navigator.clipboard.writeText(text)
      .then(() => {alert("Copied to clipboard.")})
      .catch((err) => {alert(err)});
  }
}
