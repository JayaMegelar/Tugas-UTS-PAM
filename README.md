## Tugas UTS PAM

## Identitas Mahasiswa
   - Nama  : Jaya Megelar Cakrawarty
   - NIM : 119140227
   - Pengembangan Aplikasi Mobile RA

  ### Petunjuk Instalasi
  Untuk menjalankan aplikasi ini digunakan perintah:
  1. pindahka folder screens dan file App.js pada template file expo
  2. Lakukan instalasi module yang diperlukan
  3. Jika module telah terinstal keseluruhan, selanjutnya gunakan "expo start" untuk menjalankan aplikasi
  
### Penjelasan 
Setiap halaman pada aplikasi ini diakses melalui App.js dimana di dalam App.js terdapat pula naviggasi yang jika ditekan dapat memindah tampilan halaman sesuai dengan tombol yang dipilih
 ![image](https://user-images.githubusercontent.com/83412861/160267417-54e24a66-fb12-40da-9985-880650a826e2.png)

Pada tampilan home terdapat 3 layar utama yang menjadi satu dengan bantuan stack.js, dalam stack.js terdapat 3 file halaman yang dikelola dalam 1 file, setiap tombol pada tampilan ini memiliki fungsional yang dapat diakses user
   
![image](https://user-images.githubusercontent.com/83412861/160267428-fd1c2ad4-79ff-42f6-8183-961ba61dc231.png)
![image](https://user-images.githubusercontent.com/83412861/160267440-ac80ffb2-3db2-4063-884a-4e5dce5bccf9.png)
![image](https://user-images.githubusercontent.com/83412861/160267441-cfd110b2-495f-45ac-adb2-7bffc46f2d1f.png)

Pada halaman home.js ditampilkan beberapa pilihan menu Picker yang dapat dipilih. Pada buat-tiket.js merupakan tampilan dari hasil input, tombol lanjut akan membawa user ke tampilan selanjutnya dan Kembali akan Kembali ke halaman sebelumnya. Pada halaman konfirmasi-tiket.js merupakan konfirmasi pesanan dengan memasukkan identitas yang diminta, selanjutanya jika sudah selesai data dapat diinput

Selanjutnya terdapat 3 menu pada navigasi yaitu daftar pesanan, daftar pembatalan dan lainnya. Pada daftar pemesanan merupakan tampilan dari file pesanan-saya.js yang telah dikonfigurasi dalam navigasi file App.js sehingga halaman dan tombol dapat terhubungg, halaman ini menampilkan pesanan pengguna setelah melakukan pemesanan pada home, dan menampilkan Riwayat pesanan. Halaman pembatalan pembatalan.js dilakukan konfigurasi yang sama seperti halaman lainnya pada App.js, halaman ini menampilkan pembatalan pesan yang dilakukan. Halaman lainnya file lainnya.js dilakukan konfigurasi serupa pada App.js untuk dapat tersinkronisasi dengan navigasi bar, halaman ini menampilkan berbagai menu seperti pada tampilan dibawah

 ![image](https://user-images.githubusercontent.com/83412861/160267460-75a11dd4-565b-40ff-a64b-c6abaace3d0d.png)
 ![image](https://user-images.githubusercontent.com/83412861/160267468-8a1ba022-374c-478c-9e1a-233736924c00.png)
![image](https://user-images.githubusercontent.com/83412861/160267475-62c41277-e737-485f-ae43-45bc780571f1.png)

