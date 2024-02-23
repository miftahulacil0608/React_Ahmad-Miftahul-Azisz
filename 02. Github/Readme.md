**Tentang GIT dan bagaimana cara kerjanya**
  Git adalah sistem kontrol versi yang dikembangkan oleh Linus Torvalds pada tahun 2005. Ini adalah alat yang digunakan oleh para pengembang perangkat lunak untuk mengelola perubahan dalam kode sumber mereka. Berikut adalah beberapa poin singkat tentang Git. Git dikembangkan oleh Linus Torvalds untuk mengatasi beberapa masalah yang dimiliki sistem kontrol versi sebelumnya, seperti Subversion. Tujuan utama Git adalah memberikan sistem yang cepat, efisien, dan mendukung pengembangan yang terdistribusi. 
  Cara Kerja:
  *Repository (Repo): Git menyimpan data dalam format yang disebut "repository". Repository ini dapat berada di mesin lokal atau dapat dihosting di platform seperti GitHub, GitLab, atau Bitbucket.
  *Commit: Ketika Anda membuat perubahan pada kode sumber, Anda melakukan commit untuk menyimpan perubahan tersebut ke dalam repository.
  *Branching dan Merging: Git memungkinkan pengembang untuk membuat cabang (branch) dari kode sumber utama untuk mengembangkan fitur atau memperbaiki bug. Setelah selesai, cabang tersebut dapat digabungkan (merge) kembali ke kode sumber utama.
  *Distribusi: Git mendukung pengembangan yang terdistribusi, yang berarti setiap pengembang memiliki salinan penuh dari repositori dan dapat bekerja secara independen tanpa koneksi internet.

 ** Cara instal/setting up Github**
   Alterra Academy menggunakan platform Github sebagai Repository online. Berikut cara mengatur Github ke dalam windows 11.
   1. Instal Git:Unduh dan instal Git untuk Windows dari situs resmi Git.
   2. Buka Git Bash: Setelah instalasi selesai, buka Git Bash. Ini akan menjadi antarmuka baris perintah Git.
   3. Konfigurasi Nama dan Email: Ketik perintah berikut untuk mengonfigurasi nama pengguna: git config --global user.name "Nama Anda"Copy code, git config --global user.email "email@example.com"

  **Cara penggunaan Github**
  Penjelasan ini mengambil contoh penggunaan GitHub dalam pengembangan proyek landing page:
  1. Buat Repository di GitHub:
       *Buka akun GitHub Anda dan buat repository baru untuk proyek landing page.
       *Setelah membuat repository, salin URL HTTPS atau SSH dari repository tersebut.
  2. Clone Repository ke Komputer Lokal:
       *Buka terminal atau Git Bash di komputer lokal.
       *Gunakan perintah git clone untuk mengkloning repository ke komputer lokal. Contoh: git clone https://github.com/username/nama-repository.git
  3. Struktur Proyek:
       *Pastikan proyek landing page memiliki struktur direktori yang terorganisir dengan baik, misalnya, folder untuk gambar, CSS, JavaScript, dan file HTML utama.
  4. Bekerja pada Fitur atau Perubahan:
       *Buat branch baru untuk setiap fitur atau perubahan yang akan Anda kerjakan. Contoh: git checkout -b nama-branch
  5. Buat dan Edit File:
       *Buat atau edit file HTML, CSS, atau JavaScript sesuai kebutuhan proyek Anda.
  6. Commit Perubahan:
       *Gunakan perintah git add untuk menambahkan perubahan ke "staging area".
       *Gunakan perintah git commit -m "pesan commit" untuk melakukan commit perubahan.
       *Ulangi proses ini setiap kali Anda menyelesaikan bagian tertentu dari proyek.
  7. Push Perubahan ke Repository:
       *Gunakan perintah git push untuk mengirim perubahan ke repository di GitHub. Contoh: git push origin nama-branch
  8. Buat Pull Request:
       *Buka repository di GitHub dan buat "pull request" dari branch yang telah Anda kerjakan.
       *Berikan deskripsi yang jelas tentang perubahan yang Anda lakukan.
  9. Review dan Merge:
       *Tim atau kontributor lain dapat melakukan review pada pull request Anda.
       *Setelah direview, pull request dapat di-"merge" ke branch utama proyek.
  10. Sinkronisasi dengan Branch Utama:
       *Setelah merge, pastikan untuk mengupdate branch utama lokal dengan perintah git pull origin nama-branch.	









