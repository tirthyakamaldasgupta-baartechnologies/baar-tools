import { Routes } from '@angular/router';
import { DataConverterComponent } from './pages/data-converter/data-converter.component';
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
  {
    path: 'data-converter',
    component: DataConverterComponent,
    title: 'Data Converter - BaarTools',
  },
];
