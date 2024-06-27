# Materi React Form

## 1. Pengertian Form

Form merupakan komponen esensial dalam pengembangan aplikasi web yang berfungsi untuk menangani input dari pengguna.

## 2. Controlled Component & Uncontrolled Component

### Controlled Component

Elemen input form di mana nilai-nilainya dikelola oleh React melalui penyimpanan dan pembaruan state. Nilai input ini dikontrol oleh state React.

### Uncontrolled Component

Alternatif dari controlled component di mana data form ditangani oleh DOM secara langsung. Dalam uncontrolled component, kita menggunakan ref untuk mengambil nilai form dari DOM, daripada menulis event handler untuk setiap pembaruan state.

## 3. Pentingnya Validasi Form

### Validasi form penting karena beberapa alasan berikut:

- Memastikan bahwa data yang dimasukkan sesuai dengan format yang diinginkan.
- Melindungi akun pengguna, seperti memastikan pengguna memasukkan data password yang aman.
- Melindungi sistem atau aplikasi dari upaya peretasan oleh pengguna.
- Dengan validasi form yang kuat, risiko dari tindakan pengguna yang tidak diinginkan dapat dikurangi.
