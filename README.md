# アプリ名称未定

Twitter 画像ビューワ的な。  
Twitter 公式が公式クライアントの代わりに使えるようなサードパーティクライアントを規約で禁止したらしいけど、  
これはいわゆる「サードパーティクライアント」じゃなくて Twitter の画像を効率的に集めたり  
探したりするツールであって完全なクライアントにはしない予定なので規約には反しないはず。

## Setup

npm パッケージマネージャは yarn を使う。

```
$ yarn start:dev
```

これで起動しなかったら以下の手順をやる。

Rust の toolchain は最新にしておく。  
`rustup update` で rustup も rustc も cargo もアップデートされる。

基本的には [Tauri 公式のセットアップ](https://tauri.app/v1/guides/getting-started/prerequisites/) を見る。  
pkg-config がどうのとか言われたら OS 標準のパッケージマネージャやらで入れる。

### Ubuntu

```commandline
$ sudo apt update
$ sudo apt install pkg-config
$ sudo apt install libwebkit2gtk-4.0-dev \
    build-essential \
    curl \
    wget \
    libssl-dev \
    libgtk-3-dev \
    libayatana-appindicator3-dev \
    librsvg2-dev
```

インストール出来たらもう一回 `yarn start:dev`  
もし起動しないパターンが見つかったら Issue に上げる。
