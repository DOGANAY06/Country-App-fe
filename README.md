Country App Projesinin Frontent  kısmıdır.

Bu bölümde projemiz 3 ana componentten 1 detail componentinden oluşmaktadır. 
Anasayfada bulunan componentler.
1- Header 
2- Alt_header
3- Body
![ulkefoto1](https://github.com/DOGANAY06/Country-App-fe/assets/46906505/5990d4d9-5857-4849-bd04-375e8de6fdc4)


Projede verilerimiz MySql veritabanından backend uygulamamıza atılan sorgu üzerinden çekilmektedir. Burada sorgu yaparken axios modülü kullanılmıştır.
Sorgu işlemlerimiz services klasörü altında services.js de bulunmaktadır.
1-Header kısmında bulunan search bar sayesinde ülke koduna (countryCode) ve ülke adına (name) göre arama yapmaktadır.
![ulkefoto3](https://github.com/DOGANAY06/Country-App-fe/assets/46906505/1f1d5c0c-9d1a-4d70-8fb5-9b0d65e0f3f2)


2-Alt_header da bulunan iconlarımız sırasıyla 
2a-> Grid ve list görünümüne geçmesini sağlar sayfanın 
![ulkegorunum](https://github.com/DOGANAY06/Country-App-fe/assets/46906505/2ef1328f-ea8b-4d5b-9aad-1d372599a179)


2b-> Sort iconu alfabetik olarak azalan artan sıralama yapar ülke telefon numarası (phone) göre 
![ulkesiralama](https://github.com/DOGANAY06/Country-App-fe/assets/46906505/cfc3953d-96fd-4dc3-8a73-8b705c35350d)


2c-> Ülkeleri filter özelliğine basınca bir dropdown list açılır burada seçilen continent, currency, phone verisine göre filtreleme yapar.
![filtrelemeislemi](https://github.com/DOGANAY06/Country-App-fe/assets/46906505/e0fe85b0-2512-4c2e-b568-08cb0c5342cc)


Body sayfasında ülkelerin üzerine tıklandığında countrydetail componentine gider ve orada ülkenin bilgileri yer alır. Kullanıcı isterse burada ülkeyi silebilir.
Silinen ülke aynı zamanda MySql veritabanından da silinir arka planda çalışan deletemapping işlemi ile.
![ulkedetail](https://github.com/DOGANAY06/Country-App-fe/assets/46906505/535bda33-760b-468e-ab12-818f6ccd201e)


Projemizin içinde bulunan .dockerignore , dockerfile, docker-compose.yml gibi dosyalar react js uygulamamızın dockerda container oluşturup orada saklanması için.
Burada docker container oluşturmak için terminale şu komutu girmeniz yeterlidir.
docker-compose up --build 
