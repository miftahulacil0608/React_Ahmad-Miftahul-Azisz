# Materi React Routing

## 1. Definisi Router

Router adalah modul dalam React yang mengatur navigasi pada aplikasi Single Page Application (SPA).

## 2. Perbedaan antara Multi Page Application (MPA) dan Single Page Application (SPA)

Multi Page Application (MPA):
MPA adalah jenis aplikasi web di mana setiap permintaan baru memuat ulang seluruh halaman web. Keunggulan MPA meliputi kemudahan optimasi SEO, fleksibilitas dalam mengubah halaman tertentu, dan integrasi dengan alat analisis seperti Google Analytics yang lebih mudah. Namun, MPA memiliki kelemahan seperti waktu unduh yang lebih lama, kebutuhan integrasi antara front-end dan back-end, serta memerlukan perawatan dan pembaruan yang lebih sering.

### Single Page Application (SPA):

SPA adalah jenis aplikasi web di mana semua aktivitas dilakukan dalam satu halaman. Keunggulan SPA meliputi waktu loading yang cepat, tidak ada permintaan server tambahan, responsif, dan meningkatkan pengalaman pengguna. Namun, SPA memiliki kekurangan seperti optimasi SEO yang kurang baik, waktu unduh awal yang berat, keamanan yang lebih rendah dibandingkan dengan situs web biasa, dan masalah kompatibilitas browser.

## 3. Hook Routing

Terdapat empat hook routing yang berguna dalam React:

- useHistory: Memberikan akses ke riwayat yang dapat digunakan untuk navigasi.
- useLocation: Mengembalikan objek lokasi yang mewakili URL saat ini.
- useParams: Mengembalikan objek pasangan kunci/nilai parameter URL untuk akses ke match.params dari <Route> saat ini.
- useRouteMatch: Digunakan untuk mencocokkan URL saat ini seperti <Route>, berguna untuk mendapatkan akses ke data kecocokan tanpa merender <Route>.
