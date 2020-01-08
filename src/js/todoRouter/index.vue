<template lang="html">
  <div>
    <div class="page-description">
      <p>Todo with Routing of vue-router</p>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
};
</script>
<!--
・ルートファイルのindex.jsについて
  importについてはVewRouterを呼び出していてroutesの部分はルーティングを定義している。中には全て、完了、未完了のルーティングが指定してある。また、MyAppではコンポーネントが指定されている。Vue（）の部分はVueインスタンスの生成を行う部分である。elはマウントをする要素の指定、routerはルーティングのインスタンスを渡している。renderではmyAppをブラウザに表示している。hはhype Scriptの略である。
・Vue Routerとは
  SPA（シングルページアプリケーション）のサイトを作る際に公式で用意されているパッケージがVueRouterである。SPAはブラウザの再読み込みを行わずにURLの切り替えを行うことができる。Vue.use()はルーティング用のインスタンスを生成している。また、インスタンス生成時の引数にはルートの設定が書かれている配列とモードが渡されている。hashがデフォルトで指定されているがこれではurlが変わった時にページのリロードが発生しないのでhistoryモードにする。
・Vue.js用に作られたプラグインの使い方
  Vue.use()でプラグインを使うことができる。これはVueインスタンスを生成する前に定義する必要がある。
・mode,routerの指定
  modeはデフォルトではhashとなっていてURLに＃が含まれているがhistryにすることでそれを取り除き、リロードをしなくてもページの切り替えを行うことができる。routerの指定はroutes.jsでされている。importではそれぞれ表示したいファイルを指定している。pathにはどのパスでcompornentを表示したいかを指定している。
・router-view,router-linkについて
  router-viewについて
    指定したルーティングを表示するために使うタグ。これより下に表示されるので上に書かれている部分は表示し続ける。
  router-linkについて
    ページを遷移させるタグ。aタグに変換されるがデフォルトの挙動を制御できる。to属性では遷移先のパスを指定する。
・sync
  親でdataを管理していてv-modelを使った双方向バインディングができないので、その代わりにsyncを使う。syncは省略したもので、
 -->
<style lang="scss" scoped>
.page-description {
  padding: 10px 20px;
  text-align: right;
  p {
    display: inline-block;
    color: #333;
    font-size: 18px;
  }
}
</style>
