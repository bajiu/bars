var GameJs = require("Game");
cc.Class({
    extends: cc.Component,

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        let _this = this,
            listener = {
                event: cc.EventListener.TOUCH_ONE_BY_ONE,
                onTouchBegan: function(touches, event) {
                    var move = cc.moveBy(0.2, cc.p(0, 140));
                    _this.node.runAction(move);
                    //如果位置超过头部，则销毁节点
                    if(cc.find('Canvas').convertToNodeSpace(_this.node).y >= 400){
                        _this.node.destroy();
                    }

                }
            }
        cc.eventManager.addListener(listener, this.node);
    },

    start() {
        // 获取player对象
        // let player = cc.find('Canvas/person');
        // console.log(player);
    },

    update (dt) {

        let player = cc.find('Canvas/person');
        //碰撞检测
        if(cc.rectIntersectsRect(player.getBoundingBoxToWorld(),this.node.getBoundingBoxToWorld())){

            //生硬的回到首页
            cc.director.loadScene('Begin');
            cc.log('碰撞');
        }



    },
});
