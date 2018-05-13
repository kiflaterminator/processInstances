import { Component, OnInit } from '@angular/core';
import { ProcessService } from './../../app/process.service';
import { Process } from '../models/process';


@Component({
  selector: 'app-process-creation',
  templateUrl: './process-creation.component.html',
  styleUrls: ['./process-creation.component.css']
})
export class ProcessCreationComponent implements OnInit {
	private newProcess:Process;
  constructor(private processService: ProcessService) { }

  ngOnInit() {
  	this.newProcess = new Process({
  		title: "", url: "", timestamp: "", errors: ""
  	});
  }
  createProcessInstance(formValues: any): void {
    this.newProcess = <Process>formValues;
    alert("Submit button doesn't submit. I didn't create mock api for POST. "
    	+ JSON.stringify(this.newProcess));
    
    this.processService.createProcessInstance(this.newProcess)
      .subscribe(
        (data: Process) => console.log(data),
        (err: any) => console.log(err)
      );
  }

}
