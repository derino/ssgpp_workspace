[31 mart 2015 elektrik kesintisi](http://derino.github.io/ssgpp_workspace/31-mart-2015-elektrik-kesintisi/sehirler/) incelemesi icin kullanilan komutlar:

* basligi indir
```
ssg++ -l yürüt başlıkknk [başlık=31 mart 2015 elektrik kesintisi] ! başlıkgirdileri ! dosyabtk [dosya=31_mart_2015_elektrik_kesintisi.xml]
```

* sehirler icin csv dosyasini olustur.
```
ssg++ yürüt dosyaknk [dosya=31_mart_2015_elektrik_kesintisi.xml] ! genelflt [alan=girdi, dosyadandeğer=turkiye_sehirler.tema, benzerlik=sonuekli] ! histogram [kategori=etiket] ! dosyabtk [dosya=kesinti_sehirler_sonuekli.csv]* şehirler
```

kategori,adet
"adana","5"
"adıyaman","1"
"afyonkarahisar","2"
"aksaray","4"
"ankara","18"
"antalya","7"
"artvin","1"
"aydın","2"
"balıkesir","3"
"bartın","1"
"batman","1"
"bayburt","2"
"bilecik","2"
"bitlis","2"
"bolu","3"
"bursa","11"
"denizli","3"
"diyarbakır","5"
"edirne","5"
"elazığ","3"
"erzurum","3"
"eskişehir","5"
"gaziantep","2"
"giresun","3"
"hatay","2"
"istanbul","44"
"izmir","12"
"kars","3"
"kayseri","5"
"kocaeli","6"
"konya","4"
"kütahya","2"
"mersin","1"
"muğla","3"
"ordu","2"
"rize","2"
"sakarya","4"
"samsun","7"
"sinop","1"
"sivas","1"
"tekirdağ","4"
"tokat","1"
"trabzon","4"
"tunceli","1"
"van","5"
"yozgat","3"
"zonguldak","1"
"çanakkale","2"
"şırnak","1"



