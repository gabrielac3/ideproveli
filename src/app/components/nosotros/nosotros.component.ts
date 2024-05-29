import { Component } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.scss']
})
export class NosotrosComponent {

  flipCard(event: MouseEvent): void {
    const card = event.currentTarget as HTMLElement;
    card.classList.toggle('flipped');
  }


}
