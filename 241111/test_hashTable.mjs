import { HashTable } from "./hashgTable.mjs";

let hashgTable = new HashTable();

HashTable.set(1,"김준영");
HashTable.set(4,"박태환");
HashTable.set(20,"박제한");
HashTable.set(6,"김도경");
HashTable.set(22,"지성준");
HashTable.set(21,"전진우");
HashTable.set(5,"백준혁");
HashTable.set(10,"염동훈");
HashTable.set(9,"변해오름");
HashTable.set(8,"박세진");
HashTable.set(14,"박리아");

console.log(`1: ${hashgTable.get(1)}`);
hashgTable.remove(1);
console.log(`1: ${hashgTable.get(1)}`);