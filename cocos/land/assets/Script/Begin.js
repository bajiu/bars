cc.Class({
  extends: cc.Component,

  properties: {
  },


  onLoad() {
    cc.director.preloadScene("Game");


  },

  start() {

  },
  begin() {
    cc.director.loadScene("Game");
  }
  // update (dt) {},
});
