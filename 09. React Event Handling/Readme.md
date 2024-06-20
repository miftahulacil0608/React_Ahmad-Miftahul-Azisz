# Materi Mengelola Event
Rangkuman Materi KMReact - Mengelola Event
Berikut adalah poin-poin penting yang dapat dipelajari dari materi Mengelola Event:

## 1. Pengenalan State
State merupakan data pribadi sebuah komponen dalam React. Data ini hanya tersedia untuk komponen tersebut dan tidak dapat diakses dari komponen lain.

- State dapat diubah menggunakan metode setState().
- Setiap kali state berubah, komponen akan dirender ulang.
- Perubahan state bersifat asynchronous.
- State digunakan pada komponen kelas (class components).

### Perbedaan antara Props dan State:

- Props hanya dapat dibaca (read-only), sedangkan State dapat diubah secara asynchronous.
- Props tidak dapat dimodifikasi, sedangkan State dapat dimodifikasi menggunakan this.setState().
## 2. Komponen Berdasarkan State
Komponen dalam React dapat dibagi menjadi dua jenis berdasarkan penggunaan state:

- Stateful (Komponen Berkeadaan): Komponen ini memiliki state dan umumnya dibuat menggunakan class. - Kelebihannya adalah memiliki siklus hidup (lifecycle).
- Stateless (Komponen Tanpa Keadaan): Komponen ini tidak memiliki state, hanya menerima props, dan - -umumnya dibuat menggunakan function karena lebih ringkas.

Komponen stateful dan stateless memiliki beberapa nama alternatif seperti:

- Stateful: Smart Component & Dump Component, Container Component & Presentational Component.
- Stateless: Functional Component.

Perbedaan antara Komponen Berkeadaan dan Komponen Tanpa Keadaan:

- Komponen Berkeadaan memiliki pemahaman tentang aplikasi dan dapat mengambil data, sedangkan Komponen Tanpa Keadaan tidak.
- Komponen Berkeadaan berinteraksi langsung dengan aplikasi, sedangkan Komponen Tanpa Keadaan hanya bertujuan untuk visualisasi.
- Komponen Berkeadaan umumnya tidak dapat digunakan kembali, sementara Komponen Tanpa Keadaan dapat digunakan kembali.
- Komponen Berkeadaan dapat meneruskan status dan data ke komponen anak, sedangkan Komponen Tanpa Keadaan hanya berkomunikasi dengan komponen induk.
## 3. Penanganan Event
Penanganan Event adalah cara untuk menanggapi aksi atau event yang dilakukan pengguna pada suatu komponen. Beberapa contoh event yang umum digunakan meliputi:

- Clipboard Events (seperti onCopy, onCut, onPaste)
- Form Events (seperti onChange, onSubmit)
- Mouse Events (seperti onClick, onDoubleClick, onMouseOver)
- Generic Events (seperti onError, onLoad)