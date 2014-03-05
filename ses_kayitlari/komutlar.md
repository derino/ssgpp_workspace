[ses kayıtlarının ekşi sözlük’teki yankıları](http://ssgpp.wordpress.com/2014/03/05/ses-kayitlarinin-eksi-sozlukteki-yankilari/) incelemesi icin kullanilan komutlar:

* ses kaydi girdilerinin alinmasi
```
ssg++ -l yürüt hayvanknk [şey=ses kaydı, tarih=2014, sıralama=gudik] ! başlıkgirdileri ! dosyabtk [dosya=2014te_ses_kaydi_20140305_0233.xml]
```

* girdi sayisi
```
cat 2014te_ses_kaydi_20140305_0233.xml | grep '<girdi>' | wc -l
```

* baslik sayisi
```
ssg++ yürüt dosyaknk [dosya=2014te_ses_kaydi_20140305_0233.xml] ! histogram [kategori=başlık] ! dosyabtk [dosya=2014te_ses_kaydi_20140305_0233_baslıklar.txt]
cat 2014te_ses_kaydi_20140305_0233_baslıklar.txt | wc -l
```

* basliklar
```
ssg++ yürüt dosyaknk [dosya=2014te_ses_kaydi_20140305_0233.xml] ! histogram [kategori=başlık] ! grafikbtk
```

* bkzlar
```
ssg++ dosyadananket 2014te_ses_kaydi_20140305_0233.xml
```

* bkzlar wordle icin
```
ssg++ yürüt dosyaknk [dosya=2014te_ses_kaydi_20140305_0233.xml] ! girdibkzları ! histogram [kategori=başlık] ! dosyabtk [dosya=2014te_ses_kaydi_20140305_0233_bkzlar.txt]
```

* kisiler
```
ssg++ yürüt dosyaknk [dosya=2014te_ses_kaydi_20140305_0233.xml] ! genelflt [alan=girdi, dosyadandeğer=kisiler.txt] ! histogram [kategori=etiket] ! grafikbtk
```

* zamansal egilim, gun
```
ssg++ dosyadanzamansaleğilim 2014te_ses_kaydi_20140305_0233.xml, gün
```

* zamansal egilim: saat
```
ssg++ dosyadanzamansaleğilim 2014te_ses_kaydi_20140305_0233.xml, saat
```
