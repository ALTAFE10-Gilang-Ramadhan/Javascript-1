function ubahHuruf(sentence) {
  let kalimat = sentence;
  let arr = kalimat.split('');
  let abjad = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  let key = 10;
  let cipher = '';
  loop1: for (let i = 0; i < arr.length; i++) {
    //  cari nomor dari tiap huruf variable kata
    let index_plain = -1;
    for (let j = 0; j < abjad.length; j++) {
      index_plain = arr[i] === abjad[j] ? j : -1;
      if (index_plain != -1) {
        // Rumus Enkripsi --> C = (nomor_karakter_plain + key) mod 26
        cipher += abjad[(index_plain + key) % 26];
        continue loop1;
      }
    }
    //  Jika plain text tidak mengandung huruf maka, langsung dimasukkan ke variable cipher
    //  Misal, spasi atau angka
    cipher += arr[i];
  }
  return cipher;
}
console.log(ubahHuruf('SEPULSA OKE')); // COZEVCK YUO
console.log(ubahHuruf('ALTERRA ACADEMY')); // KVDOBBK KMKNOWI
console.log(ubahHuruf('INDONESIA')); // SXNYXOCSK
console.log(ubahHuruf('GOLANG')); // QYVKXQ
console.log(ubahHuruf('PROGRAMMER')); // ZBYQBKWWOB
