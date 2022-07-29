class Persona {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Filterable {
    items;
    filters = [];
    constructor(items) {
        this.items = items;
    }

    addFilter(filter) {
        this.filters = [...this.filters, filter];
    }

    *[Symbol.iterator]() {
        for (let item of this.items) {
            let matches = true;
            for (let filter of this.filters) {
                if (!filter(item)) {
                    matches = false;
                    break;
                }
                if (matches) {
                    yield item;
                }
            }
        }
    }
}

let personas = ([new Persona("Jhon", 20), new Persona("Jane", 21)]);
let filtered = new Filterable(personas);

filtered.addFilter((persona => persona.age > 20));
filtered.addFilter((persona => persona.name === 'Sara'));

console.log([...filtered]);


class Rebanador {
    source;
    constructor(source) {
        this.source = source;
    }

    *[Symbol.iterator]() {
        let rebanada = [];
        for (let item of this.source) {
            rebanada.push(item);
            if (rebanada.length === 10) {
                yield rebanada;
                rebanada = [];
            }
        }
        yield rebanada;
    }
}

let ar0 = [1, 2, 3, 4, 5, 6, 7];
let ar1 = [...ar0, ...ar0, ...ar0];

let reba = new Rebanador(ar1);

for (let rebanada of reba) {
    console.log(rebanada);
}

let rebareba = new Rebanador(reba);
for (let rebanada of rebareba) {
    console.log(rebanada);
}

let rebarebabaneraba = new Rebanador(reba);
for (let rebanada of rebarebabaneraba) {
    console.log(rebanada);
}
