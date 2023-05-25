Country App Projesinin Frontent  kısmıdır.

Bu bölümde projemiz 3 ana componentten 1 detail componentinden oluşmaktadır. 
Anasayfada bulunan componentler.
1- Header 
2- Alt_header
3- Body
![ulkefoto1](https://github.com/DOGANAY06/Country-App-fe/assets/46906505/6e0a80c2-9f1e-43d3-8b98-7d4e8df7cef5)

Projede verilerimiz MySql veritabanından backend uygulamamıza atılan sorgu üzerinden çekilmektedir. Burada sorgu yaparken axios modülü kullanılmıştır.
Sorgu işlemlerimiz services klasörü altında services.js de bulunmaktadır.
1-Header kısmında bulunan search bar sayesinde ülke koduna (countryCode) ve ülke adına (name) göre arama yapmaktadır.
![ulkefoto2](https://github.com/DOGANAY06/Country-App-fe/assets/46906505/37e1ddef-013f-4a91-8bce-7c8238d6b583)

2-Alt_header da bulunan iconlarımız sırasıyla 
2a-> Grid ve list görünümüne geçmesini sağlar sayfanın 
![ulkegorunum](https://github.com/DOGANAY06/Country-App-fe/assets/46906505/f438b469-545c-4dac-8151-cdfb6a5e636e)

2b-> Sort iconu alfabetik olarak azalan artan sıralama yapar ülke telefon numarası (phone) göre 
![ulkesiralama](https://github.com/DOGANAY06/Country-App-fe/assets/46906505/5eb33959-7ed0-4bf6-97cb-c4e587d210f5)

2c-> Ülkeleri filter özelliğine basınca bir dropdown list açılır burada seçilen continent, currency, phone verisine göre filtreleme yapar.
![filtrelemeislemi](https://github.com/DOGANAY06/Country-App-fe/assets/46906505/15218850-5ee5-4235-a67f-d09d549bdc09)

Body sayfasında ülkelerin üzerine tıklandığında countrydetail componentine gider ve orada ülkenin bilgileri yer alır. Kullanıcı isterse burada ülkeyi silebilir.
Silinen ülke aynı zamanda MySql veritabanından da silinir arka planda çalışan deletemapping işlemi ile.
![ulkedetail](https://github.com/DOGANAY06/Country-App-fe/assets/46906505/43dc133d-6f50-4a4a-a5dc-5dc7936ce9f7)

Projemizin içinde bulunan .dockerignore , dockerfile, docker-compose.yml gibi dosyalar react js uygulamamızın dockerda container oluşturup orada saklanması için.
Burada docker container oluşturmak için terminale şu komutu girmeniz yeterlidir.
docker-compose up --build 
