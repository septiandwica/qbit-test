type IFruit = {
  fruitId: number;
  fruitName: string;
  fruitType: "IMPORT" | "LOCAL";
  stock: number;
};

const fruits: IFruit[] = [
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
function getFruitNames(fruits: IFruit[]): string[] {
  // mengembalikan array dari nama buah, tanpa memeriksa duplikasi atau case sensitivity
  return fruits.map((fruit) => fruit.fruitName);
}
console.log(getFruitNames(fruits));

// q1 challenge = perbaikan dengan memerika duplikasi dan case sensitivity
function GetUniqueFruitNames(fruits: IFruit[]): string[] {
  const namesChecked: { [key: string]: boolean } = {}; // menyimpan nama buah yang sudah diperiksa (dalam huruf kecil semua)
  const namesResult: string[] = []; // menyimpan hasil nama buah tanpa duplikat

  // looping setiap buah dalam array
  for (let i = 0; i < fruits.length; i++) {
    const originalName = fruits[i].fruitName; // nama asli buah
    const lowerCaseName = originalName.toLowerCase(); // mengubah nama buah jadi huruf kecil

    // melakukan pengecek apakah nama (dalam lowercase) sudah pernah dimasukkan sebelumnya
    if (!namesChecked[lowerCaseName]) {
      namesChecked[lowerCaseName] = true; // menandai bahwa nama ini sudah diperiksa
      namesResult.push(originalName); // memasukkan nama asli ke hasil
    }
  }

  return namesResult; // mengembalikan array nama buah yang unik dimana memperhatikan duplikasi dan case sensitivity
}

console.log(GetUniqueFruitNames(fruits));

// q2
function separateByType(fruits: IFruit[]): { [key: string]: string[] } {
  // membuat objek kosong sebagai hasil, dengan dua kategori: IMPORT dan LOCAL
  const result: { [key: string]: string[] } = { IMPORT: [], LOCAL: [] };


  // looping setiap buah dalam array fruits
  fruits.forEach((fruit) => {
    const type = fruit.fruitType; // mengambil jenis buah: "IMPORT" atau "LOCAL"
    result[type].push(fruit.fruitName); //mengambil namabuah kemudian dimasukan ke dalam kategori yang sesuai di objek result
  });

  return result; // mengembalikan objek yang berisi nama buah terpisah berdasarkan kategorinya
}
console.log(separateByType(fruits));

// q3
function totalStockByType(fruits: IFruit[]): { [key: string]: number } {
    // membuat objek kosong untuk menyimpan total stok per jenis buah
  const result: { [key: string]: number } = { IMPORT: 0, LOCAL: 0 };
    // looping setiap buah dalam array fruits
  fruits.forEach((fruit) => {
    result[fruit.fruitType] += fruit.stock; // menambahkan stok buah ke total stok berdasarkan jenisnya
  });

  return result; // mengembalikan objek yang berisi total stok per jenis buah
}
console.log(totalStockByType(fruits));
