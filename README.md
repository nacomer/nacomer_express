# :two_men_holding_hands: nacomer_express 
[![CircleCI](https://circleci.com/gh/nacomer/nacomer_express.png?circle-token=401a2a1929c5d7f585ff8e4847b2e6c8cbeff748)](https://circleci.com/gh/nacomer/nacomer_express.png?circle-token=401a2a1929c5d7f585ff8e4847b2e6c8cbeff748)

This was created during my time as a student at [Code Chrysalis](https://codechrysalis.io/)

このモジュールは [nacomer](https://github.com/nacomer) のバックエンドを提供します。


[nacomer](https://github.com/nacomer) を利用するためには、 [nacomer_react](https://github.com/nacomer/nacomer_react) と合わせてご利用ください。


# :memo: Requirement
## "nacomer_express" の動作確認 Nodejs のバージョン
- v12.19
- v14.15

## "nacomer_express"を動かすために必要なライブラリ
 
* cookie-parser ~1.4.4
* cors  ^2.8.5
* debug ~2.6.9
* dotenv ^8.2.0
* express ~4.16.1
* http-errors ~1.6.3
* jsonwebtoken ^8.5.1
* morgan ~1.9.1
* pg ^8.5.1
* pug 2.0.0-beta11
* sequelize ^6.3.5
* sequelize-cli ^6.2.0

# :book: Features
## API lists
|メソッド|エンドポイント|概要|
|:----|:----|:-----|
|POST|/api/user/login|ログインする|
|GET|/api/hobby/|登録されている趣味一覧を取得する|
|GET|/api/hobby/`:id`|`:id`の趣味の詳細を取得する|
|GET|/api/hobby/`:id`/comment|`:id`の趣味のコメント一覧を取得する|
|POST|/api/hobby/`:id`/comment|`:id`の趣味にコメントを登録する|
|PUT|/api/comment/`:id`|`:id`のコメントを修正する|
|DELETE|/api/comment/`:id`|`:id`のコメントを削除する|


## 💬 Usage
<!-- ## POST /api/user/register
- ユーザー登録する
- request body
    - name … ユーザー名を指定
    - password … パスワードを設定
```
{
    name: "nacomer",
    password: "password",
}
```
- response
    - id … 登録されたユーザーID
```
{
    id: 1
}
``` -->

## POST /api/user/login
- ログインする（認証トークンの取得）
- request body
    - googleId … GoogleのユーザーIdを指定
    - userName … Googleのユーザーネームを設定
    - picture … Googleのユーザー写真を設定
```
{
  "googleId": "testtesttest@gmail.com",
  "userName": "John Doe",
  "picture": "https://xxx.googleusercontent.com/-xxxx/xxx/xxx/xxx/xxx/photo.jpg"
}
```
- response
    - status(200) … 既にユーザが存在した場合はHTTPステータスコード200を返します。
    - status(201) … 	
新規でユーザを作成した場合はHTTPステータスコード201を返します。
```
{
    status: 200/201,
}
```

<!-- ## GET /api/user/login
- ログインする（認証トークンを用いてログインする）
- request header
    - Authorization: Bearer `token` … POST /api/user/login で取得したtokenを設定 
```
Authorization: Bearer xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```
- response
    - userId … ユーザーID
    - name … ユーザー名
```
{
    userId: 1,
    name: "nacomer"
}
``` -->
## GET /api/hobby/
- 登録されている趣味一覧を取得する
- response
    - 以下の配列
        - id … 趣味のID
        - name … 趣味名
        - mainPicture … メイン画像のパス
        - period … 1回あたりの所要時間
        - cost … 1回あたりの費用
        - Categories … 趣味のカテゴリの配列
            - name … 趣味のカテゴリ名
```
{
  "id": 1,
  "name": "ゴルフ",
  "mainPicture": "./image/golf.jpg",
  "period": "2",
  "cost": 10000,
  "Categories": [
    {
      "name": "アウトドア"
    },
    {
      "name": "スポーツ"
    },
    {
      "name": "老若男女"
    },
    {
      "name": "2人以上"
    }
  ]
}
```

## GET /api/hobby/`:id`
- `:id`の趣味の詳細を取得する
- response
    - id … 趣味ID
    - name … 趣味名
    - mainPicture … 趣味のメイン画像のパス
    - description … 趣味の説明
    - cost … 1回あたりの費用
    - period … 1回あたりの所要時間
    - Comments … 趣味に対してのコメントの配列
        - content … コメント本文
    - Goods … 趣味に関連するグッズの配列
        - goodsName … グッズ名
        - goodsPicture … グッズの画像
    - SubPictures … 趣味に関するサブ画像の配列
        - subPicture … サブ画像のパス
        - description … サブ画像の説明文
    - Videos … 趣味に関する動画の配列
        - videoURL … ビデオのURL
        - description … ビデオの説明文
    - createAt … 趣味の作成日
    - updateAt … 趣味の更新日
```
  {
    "id": 1,
    "name": "ゴルフ",
    "mainPicture": "./image/golf.jpg",
    "description": "日々の雑踏から離れ 緑と青空の下 四季折々の美しいゴルフ場を歩き回って 白球を追い 汗をかく。ゴルフ場までの小旅行や そこで食事を楽しんだりすることなど 他の多くの趣味やスポーツでは 味わうことの出来ない魅力がある",
    "cost": 10000,
    "period": "2",
    "createdAt": "2020-11-25T02:36:21.867Z",
    "updatedAt": "2020-11-25T02:36:21.867Z",
    "Comments": [
      {
        "content": "これは楽しい趣味"
      },
      {
        "content": "今すぐまたやりたい"
      },
      {
        "content": "やらないと人生損してる"
      },
      {
        "content": "上司と交流できる"
      },
      {
        "content": "人口が多くて、友達増えやすい"
      }
    ],
    "Goods": [
      {
        "goodsName": "driver",
        "goodsPicture": "./image/driver.png"
      },
      {
        "goodsName": "golfWear",
        "goodsPicture": "./image/golfWear.png"
      }
    ],
    "SubPictures": [
      {
        "subPicture": "./image/sub_golf.png",
        "description": "ゴルフのサブイメージ"
      }
    ],
    "Videos": [
      {
        "videoURL": "https://www.youtube.com/embed/7norsLxN8ko",
        "description": "Top 100 Golf Shots of the Year | Best of 2019"
      }
    ]
  }
```

## GET /api/hobby/`:id`/comment
- `:id`の趣味のコメント一覧を取得する
- response
    - 以下の配列
        - id … コメントのID
        - content … コメント本文
        - NacomerUser … コメントのユーザー情報
            - id … ユーザーID
            - name … ユーザー名
            - picture … ユーザーの写真
        - createAt … コメントの作成日
        - updateAt … コメントの更新日
```
{
  "id": 1,
  "content": "これは楽しい趣味",
  "createdAt": "2020-11-25T02:36:21.873Z",
  "updatedAt": "2020-11-25T02:36:21.873Z",
  "NacomerUser": {
    "id": 1,
    "googleId": "AAA"
    "name": "AAA"
    "picture": "https://xxx.googleusercontent.com/-xxxx/xxx/xxx/xxx/xxx/photo.jpg"
  }
},
{
  "id": 2,
  "content": "いますぐ始めよう",
  "createdAt": "2020-11-25T02:36:21.873Z",
  "updatedAt": "2020-11-25T02:36:21.873Z",
  "NacomerUser": {
    "id": 2,
    "googleId": "BBB"
    "name": "netaro3"
    "picture": "https://xxx.googleusercontent.com/-xxxx/xxx/xxx/xxx/xxx/photo.jpg"
  }
}
```

## POST /api/hobby/`:id`/comment
- `:id`の趣味にコメントを登録する
- request header
    - x-googleid: ユーザーのGoogleId情報を指定
- request body
    - hobbyId: コメントを投稿する趣味IDを指定
    - content: コメント本文を指定
```
{
    hobbyId: 1,
    content: "楽しい趣味です",
}
```
- response
    - id … コメントID
    - content … 登録内容
```
{
    id: 1
    content: "楽しい趣味です"
}
```

## PUT /api/comment/`:id`
- `:id`のコメントを更新する。
- request body
    - id: コメントのIDを指定
    - userId: コメントを投稿するユーザIDを修正
    - content: コメント本文を記入
```
{
    id: 1,
    userId: 1,
    content: "楽しい趣味です"
}
```
- response
    - content: 登録内容
```
{
    content: "楽しい趣味です"
}
```
## DELETE /api/comment/`:id`
- `:id`のコメントを削除する


# :minidisc: Install
## モジュールの取得
```
$ git clone https://github.com/nacomer/nacomer_express.git
```

## 初期設定
- `.env` の作成
    - `.env` をリポジトリルートに作成する。
```
PORT= ※各環境に合わせて記入
DB_NAME=nacomer
DB_USER=　※各環境に合わせて記入
DB_PASSWORD=　※各環境に合わせて記入
DB_HOST=　※各環境に合わせて記入
JWT_KEY=　※以下コマンドで生成したSECRETキーを設定
```

- `JWT_KEY` の生成コマンド（例）
```
 $ node 
 > require("crypto").randomBytes(64).toString("hex")
```

- モジュールインストール（依存パッケージのインストール）
```
$ yarn
```

- DB作成
```
$ yarn createdb
```

- TBL作成
```
$ yarn migrate
```

- レコード投入
```
$ yarn seed
```

- <font color="Red">データのロールバック（TBLの削除）</font>
```
$ yarn rollback
```

## API起動
```
$ yarn start
```

 
# :envelope: Contribution
1. Fork it (https://github.com/nacomer/nacomer_express)
2. Create your feature branch (git checkout -b my-new-feature)
3. Commit your changes (git commit -am 'Add some feature')
4. Push to the branch (git push origin my-new-feature)
5. Create new Pull Request

# :free: License
under the MIT license

# :man: Author
 
[nacomer](https://github.com/nacomer)

# :warning: Note

* `.env` ファイルは各環境に合わせて作成してください。
* 現在β版のため仕様が変更される場合があります。