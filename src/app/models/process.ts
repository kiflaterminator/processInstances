export class Process {
	title: string;
    url: string;
    timestamp: string;
    errors: string;

    constructor(values: Object = {}){
    	Object.assign(this, values);
    }
}