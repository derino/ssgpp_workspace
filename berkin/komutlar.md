[Berkin](http://ssgpp.wordpress.com/2014/03/15/berkin/) incelemesi icin kullanilan komutlar:

* berkin* başlıklarındaki girdilerin indirilmesi
```
ssg++ -l yürüt hayvanknk [şey=berkin\*] ! başlıkgirdileri ! tarihflt [baş=01.06.2013] ! dosyabtk [dosya=berkin_star_01062013ten_beri.xml]
```

* girdi sayisi
```
cat berkin_star_01062013ten_beri.xml | grep '<girdi>' | wc -l
```

* baslik sayisi
```
ssg++ yürüt dosyaknk [dosya=berkin_star_01062013ten_beri.xml] ! histogram [kategori=başlık] ! dosyabtk [dosya=berkin_star_01062013ten_beri_basliklar.txt]
cat berkin_star_01062013ten_beri_basliklar.txt | wc -l
```

* ölümü öncesi günlük zamansal eğilim
```
ssg++ yürüt dosyaknk [dosya=berkin_star_01062013ten_beri.xml] ! tarihflt [son=11.03.2014] ! histogram [eksen=zaman, çözünürlük=gün] ! grafikbtk
```

* bkzları
```
ssg++ dosyadananket berkin_star_01062013ten_beri.xml
```

* wordle için
```
ssg++ yürüt dosyaknk [dosya=berkin_star_01062013ten_beri.xml] ! girdibkzları ! histogram [kategori=başlık] ! dosyabtk [dosya=berkin_star_01062013ten_beri_bkzlar.txt]
```

* şehirler
```
ssg++ yürüt dosyaknk [dosya=berkin_star_01062013ten_beri.xml] ! genelflt [alan=baslik, dosyadandeğer=turkiye_sehirler.tema, benzerlik=ayrık] ! histogram [kategori=etiket] ! dosyabtk [dosya=berkin.csv]
```
ankara: 245
izmir: 130
tunceli: 42
hatay: 24
istanbul: 200
bursa: 20
eskişehir: 18
kocaeli: 11
samsun: 11
antalya: 9
trabzon: 9
adana: 8
denizli: 8
mersin: 5
edirne: 3
diyarbakır: 2
kayseri: 2
uşak: 2
afyon: 1
gaziantep: 1
konya: 1
ısparta: 1




