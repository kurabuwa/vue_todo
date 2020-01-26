import Vue from 'vue';
import VueRouter from 'vue-router';

// import routes from 'TodoRouterDir/routes';
import routes from 'TodoVuexDir/routes';
import store from 'TodoVuexDir/store';
// import routes from 'VuexSample/routes';
// import store from 'VuexSample/store';

import '../scss/global.scss';

// import myApp from './first';
// import myApp from 'TodoDir';
// import myApp from 'TodoRouterDir';
import myApp from 'TodoVuexDir';
// import myApp from 'VuexSample';

Vue.use(VueRouter);
const router = new VueRouter({
  routes,
  mode: 'history',
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(myApp),
  // render: h => h(myApp), は↓の書き方を短くしたもの
  // render: function (createElement) {
  //   return createElement(myApp)
  // }
});
/*
・ルートファイルのindex.jsについて
  ルーティングのファイルを変更してVuexを使うためstoreをimportした。また、コンポーネントのファイルもVuex用のファイルに変更した。Vueインスタンスの部分でstoreを使えるようにした。

・課題の説明
  ・Naviの追加について
    todoRouterのところからファイルをコピーして一番親のコンポーネントのcontainersの中のファイルにインポートしてwarpperの下の行にNaviコンポーネントを配置した。

  ・エラーなどの修正
    まずエラーのカスタムタグにv-ifを使ってエラーがない時兵頭しないようにした。この時storeのファイルのstateに定義されていたエラーと空のメッセージを消した。空のリストの方はlistコンポーネントが表示されない時に表示されるようにv-elseを使った。また、空のメッセージの方はmutationでそれぞれに応じたメッセージを入れるためletによって新しく定義されていたemptyMessageをstateに定義していたemptyMessageの値が変わるように修正した。

  ・削除の追加
    まずlistItemでボタンを押した時発火するようにしてactionを発火させるdispacthを使い、引数にtodo.idを渡した。その後actionにあるdeletTodoで通信が成功した時の動作をmutattionに定義した、そのmutationにはdeleteして帰ってきたdataをtodosに置き換えている。

    そのほかaxiosで通信をする際成功した時エラーメッセージを初期化するようにした。
*/
