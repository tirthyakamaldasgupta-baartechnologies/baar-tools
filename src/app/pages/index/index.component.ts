import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { Tool } from '../../interfaces/tool';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CardModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css',
})
export class IndexComponent {
  tools: Tool[] = [
    {
      name: 'String Editor',
      url: '/string-editor',
    },
  ];

  constructor(private _router: Router) {}

  navigateToToolPage(index: number) {
    this._router.navigate([this.tools[index].url]);
  }
}
