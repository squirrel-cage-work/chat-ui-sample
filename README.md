
```
npm create vite@latest front
cd front 
npm install
```

Amplify 
https://ui.docs.amplify.aws/react/getting-started/installation
```
npm install @aws-amplify/ui-react aws-amplify
```

tailwindcss
https://tailwindcss.com/docs/installation/using-vite
```
npm install tailwindcss @tailwindcss/vite
```

ReactRouter
https://reactrouter.com/home
```
npm install react-router-dom@latest
```

icon 
```
npm i --save @fortawesome/fontawesome-svg-core
npm install --save @fortawesome/free-solid-svg-icons
npm install --save @fortawesome/react-fontawesome
```

## Cognito (途中)

Amazon Cognito を作成してプール ID とクライアント ID を以下の .env に保存します。

```
VITE_USER_POOL_ID=
VITE_USER_POOL_CLIENT_ID
```

カスタム属性としては以下の通り定義しており、それぞれに応じてアプリケーションロジックを変更していく。

| 属性 | 説明 | 
|-----|-----|
| custom:Company | 会社名 |
| custom:Department | 部署名 | 
| custom:Role | 属性 |

## API / DB (途中)

### ユーザのセッション 作成/更新/取得

ユーザ名とセッションの作成/取得は以下の通りで Authorization ヘッダーに JWT トークンによる認証が必要になります。

🔗 Endpoint
```
GET /users/me/sessions
```

🔐 認証

📥 リクエスト例

📤 正常レスポンス 200 OK
```
[{"sessionId":"123"},{"sessionId":"567"}]
```

❌ エラーレスポンス

🔗 Endpoint
```
POST /user/me/sessions
```

🔐 認証

📥 リクエスト例

```
{"sessionId":"789"}
```

📤 正常レスポンス 201 OK

```
{"message": "the session creation successful"}
```

📂 テーブル設計

| PK | SK | 
|----|----| 
|USER#\<sub> | SESSION#\<uuid.uuid4()> |  