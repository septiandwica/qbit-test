var fruits = [
    {
        fruitId: 1,
        fruitName: "Apel",
        fruitType: "IMPORT",
        stock: 10,
    },
    {
        fruitId: 2,
        fruitName: "Kurma",
        fruitType: "IMPORT",
        stock: 20,
    },
    {
        fruitId: 3,
        fruitName: "apel",
        fruitType: "IMPORT",
        stock: 50,
    },
    {
        fruitId: 4,
        fruitName: "Manggis",
        fruitType: "LOCAL",
        stock: 100,
    },
    {
        fruitId: 5,
        fruitName: "Jeruk Bali",
        fruitType: "LOCAL",
        stock: 10,
    },
    {
        fruitId: 5,
        fruitName: "KURMA",
        fruitType: "IMPORT",
        stock: 20,
    },
    {
        fruitId: 5,
        fruitName: "Salak",
        fruitType: "LOCAL",
        stock: 150,
    },
];
// q1
function getFruitNames(fruits) {
    return fruits.map(function (fruit) { return fruit.fruitName; });
}
console.log(getFruitNames(fruits));
function getUniqueFruitNames(fruits) {
    var seen = {};
    var result = [];
    for (var i = 0; i < fruits.length; i++) {
        var nameLower = fruits[i].fruitName.toLowerCase();
        if (!seen[nameLower]) {
            seen[nameLower] = true;
            result.push(fruits[i].fruitName);
        }
    }
    return result;
}
console.log(getUniqueFruitNames(fruits));
// q2
function separateByType(fruits) {
    var result = { IMPORT: [], LOCAL: [] };
    fruits.forEach(function (fruit) {
        var type = fruit.fruitType;
        result[type].push(fruit.fruitName);
    });
    return result;
}
console.log(separateByType(fruits));
// q3
function totalStockByType(fruits) {
    var result = { IMPORT: 0, LOCAL: 0 };
    fruits.forEach(function (fruit) {
        result[fruit.fruitType] += fruit.stock;
    });
    return result;
}
console.log(totalStockByType(fruits));
// live code
