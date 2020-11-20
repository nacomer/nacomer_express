# nacomer_express

This was created during my time as a student at [Code Chrysalis](https://codechrysalis.io/)

# ローカル環境 Setup

.envの修正
```
PORT=5000
DB_NAME=nacomer
DB_USER=　※各ローカル環境に合わせて修正
DB_PASSWORD=　※各ローカル環境に合わせて修正
DB_HOST=　※各ローカル環境に合わせて修正
```

DBの初期設定
```
初期化
$ yarn

TBL作成
$ yarn migrate

レコード投入
$ yarn seed
```

