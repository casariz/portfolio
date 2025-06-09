import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private _isDarkMode = new BehaviorSubject<boolean>(false);
  isDarkMode$ = this._isDarkMode.asObservable();


  constructor() {
    this.loadTheme();
  }

  toggleTheme() {
    this._isDarkMode.next(!this._isDarkMode.value);
    this.saveTheme();
  }

  private saveTheme() {
    localStorage.setItem('theme', this._isDarkMode.value ? 'dark' : 'light');
    this.updateTheme();
  }

  private loadTheme() {
    const storedTheme = localStorage.getItem('theme');
    this._isDarkMode.next(storedTheme === 'dark');
    this.updateTheme();
  }

  private updateTheme() {
    const body = document.body;
    if (this._isDarkMode.value) {
      body.classList.add('dark');
    } else {
      body.classList.remove('dark');
    }
  }
}
