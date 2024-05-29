Berikut adalah ringkasan sederhana untuk kompleksitas kode isBalanced:

Kompleksitas Waktu
Iterasi melalui input: Fungsi mengiterasi setiap karakter dalam input satu kali. Jadi, kompleksitas waktu adalah O(n), di mana n adalah panjang input.

Iterasi melalui input: Fungsi isBalanced mengiterasi setiap karakter dalam string input satu kali. Ini berarti bahwa waktu yang diperlukan untuk iterasi adalah proporsional dengan panjang input, yang kita sebut n. Jadi, bagian ini memiliki kompleksitas waktu O(n).

Operasi Stack: Dalam iterasi tersebut, setiap operasi push dan pop pada stack masing-masing memerlukan waktu O(1). Karena setiap karakter diproses satu kali dan setiap operasi pada stack dilakukan sekali per karakter (baik push atau pop), maka kompleksitas waktu total untuk operasi stack juga O(n).

Menggabungkan kedua langkah di atas, kompleksitas waktu keseluruhan dari fungsi ini adalah O(n).

Kompleksitas Ruang
Penggunaan stack: Dalam kasus terburuk, kita mungkin menyimpan semua karakter input dalam stack. Jadi, kompleksitas ruang adalah O(n).

Ringkasan
Kompleksitas Waktu: O(n)
Kompleksitas Ruang: O(n)
