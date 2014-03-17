window.conf_harita = {
 'baslik': 'Türkiye illeri renksel-sayılı haritası',
 'altbaslik': 'Verilen csv dosyasının ikinci sütunundaki değerleri büyüklüklerine göre şehirleri renklendirerek gösterir.',
// lejant otomatik mi hesabedilsin? (esit sayida sehir iceren kumelere ayirir.)
 'auto_dereceler': true,
// dereceler auto degilse, nasil?
 'dereceler': [0, 100, 250, 500, 1000, 4000, 8000],
// kullanici kendi csv dosyasini kullansin
 'yerel': false,
// csv dosyasi yerel degilse, nerde?
 'csvDosyasi': 'http://derino.github.io/ssgpp_workspace/libviz/sehir_girdi_sayilari.csv'
};
