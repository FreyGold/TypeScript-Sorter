import { Sorter } from "./Sorter";

export class StringCollection extends Sorter{
    data: string[]
    constructor(data: string){
        super();
        this.data = data.split('');
    }

    get length():number{
        return this.data.length
    }

    

    compare(i:number, j: number):boolean{
        return this.data[i].toLowerCase() > this.data[j].toLowerCase();
    }

    swap(i: number, j:number):void{
        let temp = this.data[j];
        this.data[j] = this.data[i];
        this.data[i] = temp;
    }
    get sorted():string{
        return this.data.join("")
    }
}

