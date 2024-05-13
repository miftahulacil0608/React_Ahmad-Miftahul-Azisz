# Javascript Data Structure

## Array

Array adalah struktur data yang digunakan untuk menyimpan sejumlah nilai dalam urutan tertentu. Setiap nilai dalam array memiliki indeks numerik yang dimulai dari 0. Array dalam JavaScript dapat menampung nilai dari berbagai tipe data, seperti string, number, boolean, object, dan bahkan array lainnya.

### Deskripsi:

Array: Kumpulan nilai yang disusun secara terurut.
Penggunaan: Digunakan untuk menyimpan dan mengakses kumpulan nilai dengan cara yang terorganisir.

### Contoh Kode:

```Javascript

// Membuat sebuah array kosong
let myArray = [];

// Menginisialisasi array dengan nilai
let numbers = [1, 2, 3, 4, 5];
let fruits = ['Apple', 'Banana', 'Orange'];

// Mengakses nilai dalam array
console.log(numbers[0]); // Output: 1
console.log(fruits[1]); // Output: Banana

// Menambahkan nilai ke dalam array
fruits.push('Mango');
console.log(fruits); // Output: ['Apple', 'Banana', 'Orange', 'Mango']

// Menghapus nilai dari array
numbers.splice(2, 1); // Menghapus nilai pada indeks 2
console.log(numbers); // Output: [1, 2, 4, 5]
```
### Implementasi:

Array digunakan secara luas dalam pengembangan web untuk menyimpan dan memanipulasi data, seperti menampilkan daftar item, mengelola input pengguna, dan banyak lagi. Contohnya, kita bisa menggunakan array untuk menyimpan daftar nama pengguna yang login, menyimpan nilai-nilai dari formulir, atau menyimpan data dalam aplikasi web.

## Set

Set adalah struktur data yang digunakan untuk menyimpan himpunan nilai unik. Dalam Set, setiap nilai hanya dapat muncul sekali, sehingga tidak ada duplikasi. Set juga tidak mempertahankan urutan penyimpanan nilai seperti yang terjadi pada array.

### Deskripsi:

### Set: Kumpulan nilai unik tanpa urutan tertentu.

### Penggunaan: Digunakan ketika Anda perlu menyimpan kumpulan nilai unik dan tidak peduli dengan urutan atau duplikasi.

### Contoh Kode:
```Javascript
// Membuat sebuah set kosong
let mySet = new Set();

// Menginisialisasi set dengan nilai
let uniqueNumbers = new Set([1, 2, 3, 4, 5, 5]);

// Menambahkan nilai ke dalam set
uniqueNumbers.add(6);
uniqueNumbers.add(2); // Tidak akan ditambahkan karena nilai 2 sudah ada
console.log(uniqueNumbers); // Output: Set { 1, 2, 3, 4, 5, 6 }

// Menghapus nilai dari set
uniqueNumbers.delete(3);
console.log(uniqueNumbers); // Output: Set { 1, 2, 4, 5, 6 }
```

### Implementasi:
Set berguna ketika Anda perlu memastikan bahwa setiap nilai dalam kumpulan adalah unik, seperti menyimpan daftar kata-kata unik dalam penghitungan kata, atau menyimpan kumpulan ID pengguna yang unik dalam aplikasi. Set juga dapat digunakan untuk membandingkan dua kumpulan nilai dan menemukan persimpangan atau perbedaan di antara mereka.

