window.conf_harita = {
 'baslik': 'Renksel-sayılı harita',
 'altbaslik': 'Verilen csv dosyasındaki değerlere göre haritayı renklendirerek gösterir.',
// lejant otomatik mi hesabedilsin? (esit sayida sehir iceren kumelere ayirir.)
 'auto_dereceler': true,
// dereceler auto degilse, nasil?
 'dereceler': [0, 100, 250, 500, 1000, 4000, 8000],
// kullanici kendi csv dosyasini kullansin
 'yerel': true,
// csv dosyasi yerel degilse, nerde?
 'csvDosyasi': 'http://derino.github.io/ssgpp_workspace/libviz/sehir_girdi_sayilari.csv',
// yakinlastirma derecesi: [1, 8] araliginda bir tam sayi. 
// ulkeler icin
'yakinlik': 2,
// Turkiye icin
//'yakinlik': 6,
// haritanin orta noktasinin koordinatlari: [merkez_parallel_derecesi, merkez_boylam_derecesi]
// ulkeler icin
'merkez': [20, 10]
// Turkiye icin
//'merkez': [39, 36.8]
};
