import { Component, OnInit } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { SplitterModule } from 'primeng/splitter';
import { DataSource } from '../../interfaces/data_source';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-converter',
  standalone: true,
  imports: [DropdownModule, FormsModule, SplitterModule],
  templateUrl: './data-converter.component.html',
  styleUrl: './data-converter.component.css',
})
export class DataConverterComponent implements OnInit {
  dataSources: DataSource[] | undefined;

  selectedDataSource: DataSource | undefined;

  ngOnInit() {
    this.dataSources = [{ name: 'Excel' }];
  }
}
