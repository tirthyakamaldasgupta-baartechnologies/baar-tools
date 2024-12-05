import { Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { StringEditorComponent } from './pages/string-editor/string-editor.component';

export const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    title: 'Home - BaarTools',
  },
  {
    path: 'string-editor',
    component: StringEditorComponent,
    title: 'String Editor - BaarTools',
  },
];
