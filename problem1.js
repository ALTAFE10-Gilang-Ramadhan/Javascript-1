function segitiga3(panjang) {
  let hasil = '';
  for (let i = panjang; i > 0; i--) {
    for (let j = 1; j <= panjang; j++) {
      if (j >= i) {
        hasil += '* ';
      } else {
        hasil += ' ';
      }
    }
    hasil += '\n';
  }
  return hasil;
}
console.log(segitiga3(5));
