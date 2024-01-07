# 112-1-Final-Project

## 專案說明

下課後的課餘時間、周末沒有特別安排，想做點什麼又懶得自己找人、想踏出家門卻不知道去哪裡
找樂子？心裡想嘗試辦活動，卻害怕成立社團流程繁複？如果你有這些想法，歡迎來「Join us」尋找、
舉辦適合你的活動，為生活增添樂趣！

大學是個自由開放的環境，學校內每天有數十場活動進行著，然而這些活動的資訊透過不同媒介
散播，有時不免覺得資訊過於分散，而難以有效率找到自己想參加的活動，比如社團活動多公告在 FB
粉專、校內活動有時以郵件通知，有時放在布告欄，有時則出現在台大活動報名系統。我們希望透過設
計一套名為「Join us」的活動整理系統，彙整資訊的來源，讓使用者可以透過分類器快速篩選，尋找自
己想參與的活動並進行報名。

## 簡易示例

主要示例請參考 demo 影片

- 註冊登入帳號 / OAuth 登入
- 可以瀏覽 / 追隨 / 參加 / 新增 / 評論活動
- 活動主持人可以踢人 / 結束活動
- 查看 / 更新個人資料
- 活動聊天室

## 開啟方式

1. git clone

2. 安裝套件

需要有 node.js 和 npm，版本依照 `.nvmrc`

```bash
npm install

cd frontend && npm install

cd ../backend && npm install
```

3. 建立 .env 檔案

需要依據 `backend/.env.example` 的欄位寫到 `.env` 中，需要額外連接 [google](https://console.cloud.google.com/) 和 [facebook](https://developers.facebook.com/?locale=zh_TW) 的 api，另外我有使用 [mongoDB](https://www.mongodb.com/zh-cn) 來存 session，所以也需要去申請一個 mongoDB 的帳號。並依照 docker-compose.yml進行postgresql的設定 (或是你也可以使用其他的postgre sql).   

另外 google 和 facebook 的 api 需要設定 callback url，分別是 `http://localhost:8080/api/user/google/callback` 和 `http://localhost:8080/api/user/facebook/callback`。
```
PGHOST=localhost
PGUSER=postgres
PGDATABASE=postgres
PGPASSWORD=123
PGPORT=5432

SECRET_KEY=<RANDOM STRING>
MONGO_URI=<YOUR MONGO DB URI>

GOOGLE_CLIENT_ID=<YOUR GOOGLE CLIENT ID>
GOOGLE_CLIENT_SECRET=<YOUR GOOGLE CLIENT SECRET>

FACEBOOK_APP_ID=<YOUR FACEBOOK APP ID>
FACEBOOK_APP_SECRET=<YOUR FACEBOOK APP SECRET>
```

4. 開啟檔案

需要開啟兩個 terminal 分別執行 backend 和 frontend
    
```bash
cd backend
docker-compose up -d //if needed
npm run dev
```

```bash
cd frontend
npm run dev
```

5. 打開 `localhost:3000`，開始使用

## 使用技術
前端: 使用next.js   
後端: 使用Express.js(Node.js)   
資料庫: posgres sql、mongo db   
第三方套件:   
husky.js、      
前端:    
```
"@radix-ui/react-dropdown-menu": "^2.0.6",
"@radix-ui/react-label": "^2.0.2",
"@radix-ui/react-menubar": "^1.0.4",
"@radix-ui/react-navigation-menu": "^1.1.4",
"@radix-ui/react-separator": "^1.0.3",
"@radix-ui/react-slot": "^1.0.2",
"axios": "^1.5.1",
"class-variance-authority": "^0.7.0",
"clsx": "^2.0.0",
"lucide-react": "^0.284.0",
"next": "13.5.4",
"react": "^18",
"react-dom": "^18",
"react-hook-form": "^7.47.0",
"react-hot-toast": "^2.4.1",
"react-icons": "^4.11.0",
"socket.io-client": "^4.7.2",
"tailwind-merge": "^1.14.0",
"tailwindcss-animate": "^1.0.7",
"zod": "^3.22.4",
"zustand": "^4.4.7"
"@types/node": "^20",
"@types/react": "^18",
"@types/react-dom": "^18",
"@typescript-eslint/eslint-plugin": "^6.7.4",
"autoprefixer": "^10",
"eslint": "^8",
"eslint-config-next": "13.5.4",
"eslint-config-prettier": "^9.0.0",
"eslint-plugin-prettier": "^5.0.0",
"postcss": "^8",
"prettier": "^3.0.3",
"prettier-plugin-tailwindcss": "^0.5.5",
"tailwindcss": "^3",
"typescript": "^5"
```
後端:   
```
"@types/bcrypt": "^5.0.2",
"@types/compression": "^1.7.3",
"@types/cors": "^2.8.14",
"@types/express": "^4.17.18",
"@types/express-session": "^1.17.8",
"@types/passport": "^1.0.13",
"@types/passport-facebook": "^3.0.1",
"@types/passport-google-oauth20": "^2.0.12",
"@types/passport-local": "^1.0.36",
"@types/pg": "^8.10.3",
"@types/uuid": "^9.0.7",
"@typescript-eslint/eslint-plugin": "^6.7.4",
"@typescript-eslint/parser": "^6.7.4",
"eslint": "^8.51.0",
"eslint-config-prettier": "^9.0.0",
"eslint-plugin-prettier": "^5.0.0",
"nodemon": "^3.0.1",
"prettier": "^3.0.3",
"ts-node": "^10.9.1",
"tsconfig-paths": "^4.2.0",
"typescript": "^5.2.2"
"bcrypt": "^5.1.1",
"compression": "^1.7.4",
"connect-mongo": "^5.1.0",
"cors": "^2.8.5",
"dotenv": "^16.3.1",
"express": "^4.18.2",
"express-session": "^1.17.3",
"passport": "^0.6.0",
"passport-facebook": "^3.0.0",
"passport-google-oauth20": "^2.0.0",
"passport-local": "^1.0.0",
"pg": "^8.11.3",
"socket.io": "^4.7.2",
"uuid": "^9.0.1",
"zod": "^3.22.4"
```

## 各組員負責項目
有找外掛，因為我們組員中的兩位彭鈞道、蔡銪宸這學期有修另外一門也要做資料庫專案的課，並且找的這位外掛在另一門課跟他們是同組的，所以就一起做專案。  
彭鈞道: 後端Schema api設計，deploy   
蔡銪宸: 前端admin功能、聊天室還有，deploy   
陳彥廷(外掛): 前端activity設計   
楊中: 前端會員中心、活動主持追蹤參加、主頁header bar、後端activity api設計   

## 附註
1. 聊天室只有參加者能使用，host不行