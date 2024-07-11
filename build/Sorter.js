"use strict";
// interface Sortable { // no use anymore
//     length: number;
//     compare(i: number, j:number): boolean;
//     swap(i: number, j:number): void;  
// }
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
class Sorter {
    sort() {
        for (let i = 0; i < this.length; i++) {
            for (let j = i + 1; j < this.length; j++) {
                if (this.compare(i, j)) {
                    this.swap(i, j);
                }
            }
        }
    }
}
exports.Sorter = Sorter;
