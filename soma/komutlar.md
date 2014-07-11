* soma basliklarinin indirilmesi
** soma basliklari (mayis ayi icin):
ssg++ -l yürüt hayvanknk [şey=soma\*, tarih=05.2014] ! dosyabtk [dosya=soma_star_basliklari_052014.xml]

somali ulkesi ile ilgili basliklarin ayiklanmasi icin asagidaki ek islemler gerekiyor.

** soma basliklarindan icinde somali (ulke olan, sonu i ile biten kelime) gecenler:
ssg++ yürüt dosyaknk [dosya=soma_star_basliklari_052014.xml] ! genelflt [alan=baslik, değer=somali, benzerlik=sonuekli, eleme=uymayan] ! dosyabtk [dosya=soma_star_somalili_basliklar_052014.xml]

+ 27 mayıs 2014 thy somali saldırısı (13)
+ emine erdoğan'ın somalili çocuklardan tiksinmesi (7)
+ kemal kılıçdaroğlunun yanlışlıkla somaliye gitmesi
+ kılıçdaroğlu'nun yanlışlıkla somali'ye gitmesi (44)
+ müslümanların somali'de thy çalışanını öldürmesi (11)
+ rte'nin somali cumhurbaşkanlığı'na aday olması
+ soma'ya üzülüp somali'ye üzülmeyen gezici (20)
+ soma ile somali'yi ayırt edememek (4)
+ somalı vs somalili (2)
+ somali'ye giden emine erdoğan'ın soma'ya gitmemesi (21)
+ somali'ye yakın somalı'ya uzak
+ somali'yi bırak soma'ya bak
+ somali (2)
+ somali maden faciası
+ somali vs soma
+ somalili su içmez kan veya deve sütü
+ somaliye yol somalıya el kol
+ türk ordusu somali'ye girsin

** soma basliklarindan somali gecenlerin cikarilmasi:
ssg++ yürüt dosyaknk [dosya=soma_star_basliklari_052014.xml] ! genelflt [alan=baslik, değer=somali, benzerlik=sonuekli, eleme=uyan] ! dosyabtk [dosya=soma_star_somalisiz_basliklari_052014.xml]

** hem soma hem de somali gecen basliklarin bulunmasi
ssg++ yürüt dosyaknk [dosya=soma_star_somalili_basliklar_052014.xml] ! fork ! genelflt [alan=baslik, değer=soma, benzerlik=ayrık, eleme=uymayan] \& genelflt [alan=baslik, değer=somalı, benzerlik=sonuekli, eleme=uymayan] ! merge ! dosyabtk [dosya=soma_star_somalili_somalI_basliklar_052014.xml]

+ soma'ya üzülüp somali'ye üzülmeyen gezici (20)
+ soma ile somali'yi ayırt edememek (4)
+ somalı vs somalili (2)
+ somali'ye giden emine erdoğan'ın soma'ya gitmemesi (21)
+ somali'ye yakın somalı'ya uzak
+ somali'yi bırak soma'ya bak
+ somali vs soma
+ somaliye yol somalıya el kol

** somali ve soma gecen basliklarin soma basliklarina eklenmesi (nihayi sonuc: soma_star_basliklar_052014.xml)

wc -l soma_star_somalisiz_basliklari_052014.xml
4633 soma_star_somalisiz_basliklari_052014.xml
head -n 4632 soma_star_somalisiz_basliklari_052014.xml > soma_star_basliklar_052014.xml
wc -l soma_star_somalili_somalI_basliklar_052014.xml
43 soma_star_somalili_somalI_basliklar_052014.xml
tail -n 41 soma_star_somalili_somalI_basliklar_052014.xml >> soma_star_basliklar_052014.xml

** haziran ve temmuz ayi icin de ayni islem tekrarlanip sonuclar soma_star_basliklar_052014ten_beri.xml dosyasina kaydedildi.
ssg++ yürüt dosyaknk [dosya=soma_star_basliklar_052014.xml] \& dosyaknk [dosya=soma_star_basliklar_062014.xml] \& dosyaknk [dosya=soma_star_basliklar_072014.xml] ! merge3x1 !  alanseçici [alan=baslik] ! kümeflt ! dosyabtk [dosya=soma_star_basliklar_052014ten_beri.xml]

* soma basliklarindaki girdilerin indirilmesi
ssg++ -l yürüt dosyaknk [dosya=soma_star_basliklar_052014ten_beri.xml] ! başlıkgirdileri ! tarihflt [baş=13.05.2014] ! dosyabtk [dosya=soma_star_girdileri_13052014ten_beri.xml]

* baslik ve girdi sayisi
cat soma_star_basliklar_052014ten_beri.xml | grep '<baslik>' | wc -l
996
cat soma_star_girdileri_13052014ten_beri.xml | grep '<girdi>' | wc -l
16676

* gunlere gore girdi sayisi
ssg++ dosyadanzamansaleğilim soma_star_girdileri_13052014ten_beri.xml, gün

* bkzlari
ssg++ dosyadananket soma_star_girdileri_13052014ten_beri.xml

* basliklar
ssg++ yürüt dosyaknk [dosya=soma_star_girdileri_13052014ten_beri.xml] ! histogram [kategori=başlık] ! grafikbtk

* maden ocagi facialari basliklari
ssg++ -l ara maden ocağı

+ 11 temmuz 2007 hatay maden ocağı baskını
+ 10 şubat 2009 zonguldak maden ocağı göçüğü (6)
+ 10 aralık 2009 bursa maden ocağı göçüğü (71)
+ 17 mayıs 2010 zonguldak maden ocağı patlaması
+ 15 eylül 2010 zonguldak maden ocağı patlaması
+ 6 şubat 2011 elbistan maden ocağı göçüğü (8)
+ 10 şubat 2011 elbistan maden ocağı göçüğü (25)
+ 30 kasım 2011 zonguldak maden ocağı göçüğü (4)
+ 14 temmuz 2012 yozgat sorgun maden ocağı göçüğü (9)
+ 11 kasım 2013 maden ocağı eylemine silahlı saldırı (2)
+ 13 mayıs 2014 soma maden ocağı patlaması (5358)
+ 14 mayıs 2014 zonguldak maden ocağı göcüğü
+ 11 haziran 2014 şırnak'ta maden ocağı göçüğü (30)

* kisiler
ssg++ yürüt dosyaknk [dosya=soma_star_girdileri_13052014ten_beri.xml] ! girdibkzları ! histogram [kategori=başlık] ! dosyabtk [dosya=bkzlar.txt]
bkzlar.txt icinden kisileri bul.
ssg++ yürüt dosyaknk [dosya=soma_star_girdileri_13052014ten_beri.xml] ! genelflt [alan=girdi, dosyadandeğer=kisiler.txt] ! histogram [kategori=etiket] ! grafikbtk

* trollerin ilgisi
ssg++ yürüt dosyaknk [dosya=soma_star_girdileri_13052014ten_beri.xml] ! genelflt [alan=yazar, dosyadandeğer=sumeyyenin_trolleri_TAM.txt] ! histogram [kategori=yazar] ! dosyabtk [dosya=soma_star_girdileri_trolllerden_13052014ten_beri.xml]

ssg++ dosyadanzamansaleğilim soma_star_girdileri_trolllerden_13052014ten_beri.xml, gün
ssg++ dosyadanlafebeleri soma_star_girdileri_trolllerden_13052014ten_beri.xml
ssg++ dosyadananket soma_star_girdileri_trolllerden_13052014ten_beri.xml
ssg++ yürüt dosyaknk [dosya=soma_star_girdileri_trolllerden_13052014ten_beri.xml] ! histogram [kategori=başlık] ! grafikbtk

cat soma_star_girdileri_trolllerden_13052014ten_beri.xml | grep '<girdi>' | wc -l
266
