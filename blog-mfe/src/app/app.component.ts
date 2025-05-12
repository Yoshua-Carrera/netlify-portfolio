import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root-mfe',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet],
  standalone: true
})
export class AppComponent implements OnInit {
  title = 'blog-mfe';

  ngOnInit(): void {
    console.log("[%cBlog-MFE%c] - %cLoaded", "color: purple", "", "color: green");
  }
}
