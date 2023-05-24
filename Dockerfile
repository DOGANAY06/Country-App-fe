# İlk aşamada, proje bağımlılıklarını yüklemek için bir builder imaj kullanacağız
FROM node:14.21.2 AS builder

# Çalışma dizinini oluşturun
WORKDIR /app

# package.json ve package-lock.json dosyalarını kopyalayın
COPY package*.json ./

# Bağımlılıkları yükleyin
RUN npm install

# Uygulama kodunu kopyalayın
COPY . .

# Üretimi yapılandırın
RUN npm run build

# Prodüksiyon aşamasında, sadece gerekli dosyaları çalıştırın
FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
