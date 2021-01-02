# URL Generator
採用 Node.js 和 Express 打造的短網址產生器

## 專案畫面
![短網址產生器首頁](https://i.imgur.com/nxXdQqm.png)

![短網址產生器結果1](https://i.imgur.com/naZQb9v.png)

![短網址產生器結果2](https://i.imgur.com/BC6arsy.png)

## 功能描述 (features)
- 首頁畫面上有一個表單，使用者可以在表單輸入原始網址，送出表單之後，畫面會回傳格式化後的短網址
- 在伺服器啟動期間，使用者可以在瀏覽器的網址列，輸入提供的短網址，或是點擊連結，瀏覽器就會導向原本的網站
- 當表單輸入原始網址已產生過短網址時，會顯示出原本的短網址
- 按左上角的"URL Generator"可以回首頁

## 環境建置(prerequisites)
- Node.js v10.15.0
- Express v4.17.1
- Express-handlebars v5.2.0
- mongoose v5.11.8
- body-parser v1.19.0

## 安裝與執行步驟 (installation and execution)
- 提醒: 以下動作需使用 terminal 或 Git Bash 指令
1. 將專案cline到本地環境
   ```
   git clone https://github.com/jefflin-git/URL-generator.git
   ```
2. 進入專案資料夾
   ```
   cd URL-generator
   ```
3. 至 package.json 檔案裝查看需安裝的npm套件，並搭配以下指令安裝
   ```
   npm install
   ```
4. 安裝 nodemon 套件
   - 提醒: 若先前在本地開發環境中以`npm install -g nodemon` 指令安裝過可跳至下步驟
5. 啟動伺服器，執行 app.js 檔案
   - 使用 `nodemon app.js` 或 `npm run dev` 執行
   - 看到回應 `Express is listening on localhost:3000  at Time: (當地時間)` 代表成功執行
6. 開啟任一瀏覽器瀏覽器輸入 http://localhost:3000 開始使用

## 專案開發人員 (contributor)
> [Jeff Lin](https://github.com/jefflin-git)