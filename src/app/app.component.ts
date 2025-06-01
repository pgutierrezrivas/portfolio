import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';

@ViewChild('cursor', { static: false }) cursorRef!: ElementRef;
@ViewChild('tooltip', { static: false }) tooltipRef!: ElementRef;

ngAfterViewInit(): void {
  if (window.matchMedia('(pointer: coarse)').matches) return;

  const cursor = this.cursorRef.nativeElement;
  const tooltip = this.tooltipRef.nativeElement;

  document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    cursor.style.left = `${x}px`;
    cursor.style.top = `${y}px`;

    tooltip.style.left = `${x + 20}px`;
    tooltip.style.top = `${y + 10}px`;

    const el = document.elementFromPoint(x, y);
    const tooltipText = el?.getAttribute('data-tooltip');

    if (tooltipText) {
      tooltip.textContent = tooltipText;
      tooltip.classList.add('visible');
    } else {
      tooltip.classList.remove('visible');
    }
  });

  document.addEventListener('click', () => {
    cursor.classList.add('clicked');
    setTimeout(() => cursor.classList.remove('clicked'), 150);
  });
}
}
