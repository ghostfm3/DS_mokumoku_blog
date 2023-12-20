---
title: 【技術紹介】3D Gaussian Splatting
date: "2023-12-20T20:30:32.169Z"
tags: ["技術紹介","機械学習","画像処理"]
description: SNSより技術紹介記事です。
---
# 3D Gaussian Splattingについて
## 紹介記事&Githubリンク
- [3D Gaussian Splattingの使い方 (Windows環境構築)](https://lilea.net/lab/how-to-setup-3d-gaussian-splatting/?source=post_page-----273ce61200a8--------------------------------)
- [gaussian-splatting (Github リポジトリ)](https://github.com/graphdeco-inria/gaussian-splatting)

## 3D Gaussian Splattingとは?
まずは下記をご覧ください。
<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">34台のGoProを使って3D Gaussian Splatting !<br><br>浮いているものを止めたりなど、時空間を自由に移動できます⏰<a href="https://twitter.com/hashtag/GoPro?src=hash&amp;ref_src=twsrc%5Etfw">#GoPro</a> <a href="https://t.co/f4LWSjG2yV">pic.twitter.com/f4LWSjG2yV</a></p>&mdash; Arata Fukoe (@Arata_Fukoe) <a href="https://twitter.com/Arata_Fukoe/status/1714587603994079558?ref_src=twsrc%5Etfw">October 18, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

こちらのアウトプットは`3D Gaussian Splatting`という技術を用いて作成された3D写真です。

2020年にカルフォルニア大学が`NeRF(Neural Radiance Fields)`というニューラルネットワークを使用し、複数の写真を合成し3次元形状を復元し、3Dモデルを作成する技術を開発しました。([☞参考](https://1planet.co.jp/tech-blog/i8mzzliy))

このNeRFですが、レンダリングに時間が掛かり、その問題点を解消し高速なレンダリングを実現したのがこの`3D Gaussian Splatting`です。

3D Gaussian Splattingは主にPythonで実装されており、PytorchやCUDAといった機械学習モデル構築やGPGPUライブラリーが使用されているようです。

NeRFはレンダリング時にも機械学習を使用しているのに対し、3D Gaussian Splattingは3D空間をガウシアン([☞ガウス関数](https://www.eng.kagawa-u.ac.jp/~tishii/Lab/Etc/gauss.html))の集合として定義し、レンダリング時にはあらかじめ機械学習で学習された各パラメータを使用することで高速なレンダリングを実現しています。

詳細なNeRFとの違い、理論の概要は下記URLサイトに記載されておりますので参考にご覧ください。

- [3D Gaussian Splatting : 複数視点の画像から3D空間を再現する最新手法](https://medium.com/axinc/3d-gaussian-splatting-%E8%A4%87%E6%95%B0%E8%A6%96%E7%82%B9%E3%81%AE%E7%94%BB%E5%83%8F%E3%81%8B%E3%82%893d%E7%A9%BA%E9%96%93%E3%82%92%E5%86%8D%E7%8F%BE%E3%81%99%E3%82%8B%E6%9C%80%E6%96%B0%E6%89%8B%E6%B3%95-273ce61200a8)

## 考察
用途としては下記のような例が挙げられます。

- [京都VR ～清水寺参道編～](https://lilea.net/lab/kyoto-vr/)

上記プロジェクトはlileaさんが手がける京都の清水寺周辺の街並みを当技術を用いてVRデジタルアーカイブとして保存するものとなります。

また来年にはAppleより[Apple Vision Pro](https://www.apple.com/jp/newsroom/2023/06/introducing-apple-vision-pro/)が発売されることにより、`空間コンピューティング`の時代が到来しようとしています。

上記で作成した3DモデルをUnity, もしくはUnreal Engineに取込み、Apple Vision ProのMRアプリケーションとしてリリースすることにより、「思い出をオブジェクトとして部屋に配置する」ということも可能になります。

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">Apple VisionProで3Dスキャンしたデータを表示しつつ同時に録音した音声を波形付きで再生してみた〜。思い出を空間保存して本棚に飾りたい。<br>あと100万ポリゴンは流石に表示できなかったのでどこかで上限があるわ<a href="https://twitter.com/hashtag/VisionPro?src=hash&amp;ref_src=twsrc%5Etfw">#VisionPro</a> <a href="https://twitter.com/hashtag/PolySpatial?src=hash&amp;ref_src=twsrc%5Etfw">#PolySpatial</a> <a href="https://twitter.com/hashtag/Unity?src=hash&amp;ref_src=twsrc%5Etfw">#Unity</a> <a href="https://twitter.com/hashtag/LumaAI?src=hash&amp;ref_src=twsrc%5Etfw">#LumaAI</a> <a href="https://t.co/Ihl09vPOtL">pic.twitter.com/Ihl09vPOtL</a></p>&mdash; YORIMIYA (@jav6868) <a href="https://twitter.com/jav6868/status/1728275655350256075?ref_src=twsrc%5Etfw">November 25, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


難点としては「動作環境が重い」、「費用が掛かる」ところでしょうか。

現時点でVRAMの要求が24GBを求められており、自分が調べた限りですと「RTX4090」といった現時点(2023 12月時点)でハイエンドのGPUが該当します。

快適に本ライブラリーを使用するためには上記のようなRAM, VRAM共にハイエンド環境が必要であり、また写真撮影のための機材も必要と所で金銭面でかなりの費用が掛かるという面で気軽に使える技術ではないと思われます。

# おわりに
今回は画像処理分野に関する技術紹介をさせて頂きました。

『データサイエンス』と聞くと一般的には「ExcelやDBに保存された数値データ等を処理する」というイメージが強いかもしれません。

しかしデータサイエンスで扱うデータはそういったものに関わらず、自分がこれから講義しようと思っている「自然言語で記載されたデータ」や「画像データ」といった現実のあらゆるものが対象となってきます。

今回のような技術, そしてApple Vision Proといったデバイスが普及すれば、今日の写真共有というあり方もまた激変してくるのではないでしょうか。

今後も最新技術を発信して参りますので、お時間があればお付き合いください。