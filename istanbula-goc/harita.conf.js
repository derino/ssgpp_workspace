window.conf_harita = {
 'baslik': 'İstanbul\'da hangi ilden kaç kişi yaşıyor?',
 'altbaslik': 'yuzdelik oran = 100 x (ilden istanbul\'a göç sayısı/il nüfusu)',
 'auto_dereceler': true,
 'dereceler': [0, 100, 250, 500, 1000, 4000, 8000],
 'yerel': false,
 'csvDosyasi': 'http://derino.github.io/ssgpp_workspace/istanbula-goc/goc_sayisi.csv',
// yakinlastirma derecesi: [1, 8] araliginda bir tam sayi. 
// ulkeler icin
//'yakinlik': 2,
// Turkiye icin
'yakinlik': 6,
// haritanin orta noktasinin koordinatlari: [merkez_parallel_derecesi, merkez_boylam_derecesi]
// ulkeler icin
//'merkez': [20, 10]
// Turkiye icin
'merkez': [39, 36.8]
};
