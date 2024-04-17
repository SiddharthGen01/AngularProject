import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'App';
  @ViewChild('toggleButton', {static: false}) toggleButton: ElementRef | undefined;
  @ViewChild('childBody', {static: false}) childBody: ElementRef | undefined;

  ngAfterViewInit() {

    if (this.toggleButton) {
      this.toggleButton.nativeElement.addEventListener('click', () => {
        const body = document.body;
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
          this.toggleButton!.nativeElement.textContent = 'Light Mode';
          this.toggleButton!.nativeElement.classList.remove('btn-dark');
          this.toggleButton!.nativeElement.classList.add('btn-light');
          this.childBody!.nativeElement.classList.remove('dark-mode');
          this.childBody!.nativeElement.classList.add('light-mode');
        } else {
          this.toggleButton!.nativeElement.textContent = 'Dark Mode';
          this.toggleButton!.nativeElement.classList.remove('btn-light');
          this.toggleButton!.nativeElement.classList.add('btn-dark');
          this.childBody!.nativeElement.classList.remove('light-mode');
          this.childBody!.nativeElement.classList.add('dark-mode');
        }
      });
    }
  }
}

