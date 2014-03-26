
* top 25 troll girdileri
ssg++ -l yürüt yazarlistesiknk [dosyadanyazar=sumeyyenin_trolleri_top25.txt] ! başlıkgirdileri ! dosyabtk [dosya=sumeyyenin_trolleri_girdileri_top25.xml]

* incelenen girdi sayisi
cat sumeyyenin_trolleri_girdileri_top25.xml | grep '<girdi>' | wc -l

* gun gun troll girdi sayilari
ssg++ dosyadanzamansaleğilim sumeyyenin_trolleri_girdileri_top25.xml, gün

* 1 Mayis 2013'ten beri troll girdileri
ssg++ yürüt dosyaknk [dosya=sumeyyenin_trolleri_girdileri_top25.xml] ! tarihflt [baş=01.05.2013] ! dosyabtk [dosya=sumeyyenin_trolleri_girdileri_top25_mayis2013ten_beri.xml]

* incelenen girdi sayisi
cat sumeyyenin_trolleri_girdileri_top25_mayis2013ten_beri.xml | grep '<girdi>' | wc -l

* kacinci siradaki girdileri girmisler
ssg++ yürüt dosyaknk [dosya=sumeyyenin_trolleri_girdileri_top25_mayis2013ten_beri.xml] ! histogram [eksen=kategori, kategori=girdisırası] ! grafikbtk
ilk 5'te olanlar ~20000/~50000 = %40. gundem belirleme odaklilik/trolluk.
1. sırada olanlar 7853/37380 = %21.

* girdi saatleri
ssg++ dosyadanzamansaleğilim sumeyyenin_trolleri_girdileri_top25_mayis2013ten_beri.xml, saat

* en cok yazdiklari basliklar
ssg++ yürüt dosyaknk [dosya=sumeyyenin_trolleri_girdileri_top25_mayis2013ten_beri.xml] ! histogram [kategori=başlık] ! grafikbtk

* en cok verdikleri bkz'lar
ssg++ dosyadananket sumeyyenin_trolleri_girdileri_top25_mayis2013ten_beri.xml




Kullanilmayanlar:

* yazarlar ve toplam girdi sayilari
ssg++ yürüt dosyaknk [dosya=sumeyyenin_trolleri_girdileri_top25_mayis2013ten_beri.xml] ! histogram [eksen=kategori, kategori=yazar] ! grafikbtk

* zaman araliklarina gore cozumleme
** 1 mayis 2013 oncesi
*** basliklar
ssg++ yürüt dosyaknk [dosya=sumeyyenin_trolleri_girdileri_top25.xml] ! tarihflt [son=01.05.2013] ! histogram [kategori=başlık] ! grafikbtk
cok politik degil.
*** bkz'lar
ssg++ yürüt dosyaknk [dosya=sumeyyenin_trolleri_girdileri_top25.xml] ! tarihflt [son=01.05.2013] ! girdibkzları ! histogram [kategori=başlık] ! grafikbtk
bkzlar cogunlukla sozluk yazarlarina.

** mayis 2013'teki hareketlilik (1 mayis, reyhanli patlamasi, alkol duzenlemesi)
*** basliklar
ssg++ yürüt dosyaknk [dosya=sumeyyenin_trolleri_girdileri_top25.xml] ! tarihflt [baş=01.05.2013, son=31.05.2013] ! histogram [kategori=başlık] ! grafikbtk
*** bkz'lar (GEREK YOK)
ssg++ yürüt dosyaknk [dosya=sumeyyenin_trolleri_girdileri_top25.xml] ! tarihflt [baş=01.05.2013, son=31.05.2013] ! girdibkzları ! histogram [kategori=başlık] ! grafikbtk

** 31 mayis gezi'den 17 aralik'a
*** basliklar
ssg++ yürüt dosyaknk [dosya=sumeyyenin_trolleri_girdileri_top25.xml] ! tarihflt [baş=31.05.2013, son=17.12.2013] ! histogram [kategori=başlık] ! grafikbtk
*** bkz'lar
ssg++ yürüt dosyaknk [dosya=sumeyyenin_trolleri_girdileri_top25.xml] ! tarihflt [baş=31.05.2013, son=17.12.2013] ! girdibkzları ! histogram [kategori=başlık] ! grafikbtk

** 17 aralik yolsuzluk ve rusvet operasyonundan sonra
*** basliklar
ssg++ yürüt dosyaknk [dosya=sumeyyenin_trolleri_girdileri_top25.xml] ! tarihflt [baş=17.12.2013] ! histogram [kategori=başlık] ! grafikbtk
*** bkz'lar
ssg++ yürüt dosyaknk [dosya=sumeyyenin_trolleri_girdileri_top25.xml] ! tarihflt [baş=17.12.2013] ! girdibkzları ! histogram [kategori=başlık] ! grafikbtk

* samatya'nin ayiklanmasi
ssg++ yürüt dosyaknk [dosya=sumeyyenin_trolleri_girdileri_top25.xml] ! genelflt [alan=yazar, değer=samatya, eleme=uyan] ! dosyabtk [dosya=sumeyyenin_trolleri_girdileri_top24.xml]