import { Component, OnInit } from '@angular/core';
import { ProcessService } from './../../app/process.service';
import { Process } from '../models/process';

@Component({
  selector: 'app-processes-datagrid',
  templateUrl: './processes-datagrid.component.html',
  styleUrls: ['./processes-datagrid.component.css']
})
export class ProcessesDatagridComponent implements OnInit {
	processInstances: Process[];
  totalErrors = 0;

  constructor(private processService: ProcessService) { }

  ngOnInit() {
  	this.processService.getProcesses().subscribe(
      (data: Process[]) => {this.processInstances = data;
        for(let k=0; k<data.length; k++){
          data[k].errors ? this.totalErrors +=
          parseInt(data[k].errors) : this.totalErrors;
        }
      },
      (err: any) => console.log(err)
    );
  }
}
