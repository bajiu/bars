let TouchConf = require('./common/conf')
let rockBg = require('./common/rockBg')
cc.Class({
    extends: cc.Component,

    properties: {
        dot: {
            default: null,
            type: cc.Node,
            displayName: '摇杆节点',
        },
        ring: {
            default: null,
            type: rockBg,
            displayName: '摇杆背景节点',
        },
        stickX: {
            default: 0,
            displayName: '摇杆X位置',
        },

        stickY: {
            default: 0,
            displayName: '摇杆Y位置',
        },
        touchType: {
            default: TouchConf.TouchType.DEFAULT,
            type: TouchConf.TouchType,
            displayName: '触摸类型',
        },
        sprite: {
            default: null,
            type: cc.Node,
            displayName: '目标节点',
        },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this._createStickSprite();



    },

    _createStickSprite:function(){

        //调整摇杆位置
        console.log(this.rocker);


    },

    // update (dt) {},
});
