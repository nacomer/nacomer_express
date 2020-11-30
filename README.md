# :two_men_holding_hands: nacomer_express 

This was created during my time as a student at [Code Chrysalis](https://codechrysalis.io/)

このモジュールは [nacomer](https://github.com/nacomer) のバックエンドを提供します。

[nacomer](https://github.com/nacomer) を利用するためには、 [nacomer_react](https://github.com/nacomer/nacomer_react) と合わせてご利用ください。


# :memo: Requirement
## "nacomer_express" の動作確認 Nodejs のバージョン
- v12.13
- v14.15

## "nacomer_express"を動かすために必要なライブラリ
 
* cookie-parser ~1.4.4
* cors  ^2.8.5
* debug ~2.6.9
* dotenv ^8.2.0
* express ~4.16.1
* http-errors ~1.6.3
* jsonwebtoken ^8.5.1
* log4js ^6.3.0
* morgan ~1.9.1
* node-fetch ^2.6.1,
* pg ^8.5.1
* pug 2.0.0-beta11
* sequelize ^6.3.5
* sequelize-cli ^6.2.0

# :book: Features
## API lists
本リポジトリはNacomer向けのAPIです。<br/>
API仕様は以下をご確認ください。<br/>
https://nacomer.github.io/nacomer_express/dist


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
```

- モジュールインストール（依存パッケージのインストール）
```
$ yarn
```

- DB作成
```
$ yarn createdb
```

- TBL作成、レコード投入
```
$ yarn setup
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
