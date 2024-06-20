# Materi Dasar React
Ikhtisar KMReact - Dasar-dasar React
Berikut adalah poin-poin utama yang bisa diambil dari pengantar React:

## 1. Pengantar JSX
JSX, kependekan dari JavaScript XML, merupakan ekstensi JavaScript yang mempermudah pembuatan tampilan UI dalam aplikasi React. JSX memungkinkan penggunaan sintaks yang menyerupai XML/HTML untuk membangun struktur UI di dalam JavaScript. Dalam JSX, nama elemen React harus diawali dengan huruf kapital untuk komponen buatan sendiri, dan huruf kecil untuk komponen standar.

### Contoh:

``` jsx
<!-- Komponen React Buatan Sendiri -->
<MyButton>Klik Saya</MyButton>

<!-- Komponen Standar -->
<h1>Hello World!</h1>
```
Untuk memasukkan ekspresi JavaScript yang valid di dalam JSX, kita bisa menggunakan tanda kurung kurawal.

Contoh:

``` jsx
const name = 'Ahmad Miftahul Azisz';
const element = <h1>Nama saya adalah {name}</h1>;
```

## 2. Komponen React dan Props
Komponen React adalah unit kode yang bisa digunakan kembali untuk menentukan tampilan, perilaku, dan state dari bagian UI. Dalam konteks komponen, terdapat konsep Props yang sangat penting:

Props:

- Props adalah singkatan dari properties, yang memungkinkan pengiriman argumen atau data ke komponen.
- Props membuat komponen lebih dinamis dengan memungkinkan pengaturan nilai dari luar.
- Props diterapkan ke komponen mirip dengan atribut pada tag HTML.
- Props bersifat read-only dan tidak dapat diubah di dalam komponen.
## 3. Siklus Hidup Komponen (Lifecycle)
Beberapa metode siklus hidup komponen yang umum digunakan:

a. render()

Metode yang paling sering digunakan dalam React.
Wajib ada pada komponen berbasis kelas.
Berupa Pure Function, yang berarti tidak boleh memanggil setState() di dalamnya.


b. componentDidMount()

Dipanggil setelah komponen pertama kali dirender.
Tempat yang tepat untuk melakukan pemanggilan API atau tindakan lain yang diperlukan setelah komponen dipasang.
Boleh memanggil setState().


c. componentDidUpdate()

Dipanggil setelah terjadi perubahan (baik perubahan props maupun state) yang menyebabkan perubahan tampilan komponen.


d. componentWillUnmount()

Dipanggil sebelum komponen dihapus dari DOM.
Biasanya digunakan untuk membersihkan atau melakukan tindakan terakhir sebelum komponen dihapus.