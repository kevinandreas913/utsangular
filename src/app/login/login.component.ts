import { Component, Renderer2 } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email = "kevinandreas@gmail.com";

  constructor(private renderer: Renderer2) {
    this.renderer.addClass(document.body, "login-page");
    
    // untuk hapus bagian tidak digunakan dalam tag body yang masih ada di inspeksi login
    this.renderer.removeClass(document.body, "sidebar-mini");
    this.renderer.removeClass(document.body, "layout-fixed");

    // untuk mengatur ukuran body secara dinamis
    this.renderer.setAttribute(document.body, "style", "min-height: 464px");
  }

  ngOnInit(): void {
    
  }
}
