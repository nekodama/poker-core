/**
 * ポーカー
 * @namespace
 */
var poker = {};

/**
 * ポーカー・ハンド
 * @enum {number}
 */
poker.handCategory = {
  HIGH_CARD       :   0,
  ONE_PAIR        : 100,
  TWO_PAIR        : 200,
  THREE_OF_A_KIND : 300,
  STRAIGHT        : 400,
  FLUSH           : 500,
  FULL_HOUSE      : 600,
  FOUR_OF_A_KIND  : 700,
  STRAIGHT_FLUSH  : 800,
  ROYAL_FLUSH     : 900
};


/**
 * コアライブラリ
 * @namespace
 */
poker.core = {};


/**
 * 役判定する。
 *
 * @param {{rank:number, suit:string}[]} cards 手札。
 * @returns poker.handCategory のどれか。
 */
poker.core.getHandCategory = function(cards) {
  // TODO: ここに処理を実装します。
  // 手札をRankでソート
  cards = cards.sort(function(a,b){return a.rank - b.rank;});
    if(isFLUSH(cards)){
        return poker.handCategory.FLUSH;
    }

  // どの組み合わせにも当てはまらないならば、ハイカードを返す。
  return poker.handCategory.HIGH_CARD;
}

// フラッシュチェック
function isFLUSH(cards){
  var i = 0;
  for(i = 0; i < cards.length - 1; i++){
    // 絵柄が違うかチェック
    if (cards[i].suit !== cards[i + 1].suit){
      // 一つでも違う絵柄があれば、false
      return false;
    }
  }
  // すべて同じ絵柄なのでtrue
  return true;
}

/**
 * ロイヤルストレートか（1 10 11 12 13 で構成されている）？
 */
function is1_10_11_12_13(cards){
  var royalStraight = [1, 10, 11, 12, 13];
  var i = 0;
  // cards.rankとroyalStraightを値で比較
  for(i = 0 ; i < cards.length ; i++){
    if(cards[i].rank !== royalStraight[i]){return false;}
  }
}












