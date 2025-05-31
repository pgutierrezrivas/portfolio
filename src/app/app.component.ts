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

  ngAfterViewInit(): void {
    document.addEventListener('mousemove', (e) => {
      const cursor = this.cursorRef.nativeElement;
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    });

    document.addEventListener('click', () => {
      const cursor = this.cursorRef.nativeElement;
      cursor.classList.add('clicked');
      setTimeout(() => {
        cursor.classList.remove('clicked');
      }, 150); // duración del efecto
    });
  }
}
