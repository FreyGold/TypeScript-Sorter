"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringCollection = void 0;
const Sorter_1 = require("./Sorter");
class StringCollection extends Sorter_1.Sorter {
    constructor(data) {
        super();
        this.data = data.split('');
    }
    get length() {
        return this.data.length;
    }
    compare(i, j) {
        return this.data[i].toLowerCase() > this.data[j].toLowerCase();
    }
    swap(i, j) {
        let temp = this.data[j];
        this.data[j] = this.data[i];
        this.data[i] = temp;
    }
    get sorted() {
        return this.data.join("");
    }
}
exports.StringCollection = StringCollection;
