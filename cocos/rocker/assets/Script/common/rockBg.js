var Common = require('conf');
cc.Class({
    extends: cc.Component,
    ctor: function() {
        this._stickPos = {
            x: 0,
            y: 0
        };
        this._speed = 0;
        this._angle = 0;
    },
    properties: {
        dot: {
            default: null,
            type: cc.Node,
            displayName: '摇杆节点',
        },
        player: {
            default: null,
            type: cc.Node,
            displayName: '操作用户',
        },

    },
    onLoad: function() {
        this._initTouchEvent();
    },
    update: function(dt){
        this._aimMove();
    },
    _aimMove: function(){
        this.player.x += Math.cos(this._angle * (Math.PI/180)) * this._speed;
        this.player.y += Math.sin(this._angle * (Math.PI/180)) * this._speed;
    },
    _initTouchEvent: function() {
        var _this = this;
        // 触摸开始
        _this.node.on(cc.Node.EventType.TOUCH_START, this._touchStartEvent, _this);
        // 触摸移动
        _this.node.on(cc.Node.EventType.TOUCH_MOVE, this._touchMoveEvent, _this);
        // 摇杆归位
        _this.node.on(cc.Node.EventType.TOUCH_END, this._touchEndEvent, _this);
        _this.node.on(cc.Node.EventType.TOUCH_CANCEL, this._touchEndEvent, _this);
    },
    _touchStartEvent: function(event) {
        // 设置速度为1
        this._speed = 1;
        // 获取触摸点绝对坐标
        let touchPos = this.node.convertToNodeSpaceAR(event.getLocation());
        // console.log(touchPos);
        // 获取与圆圈中点距离
        let distance = this._getDistance(touchPos, cc.p(0, 0));
        // console.log(distance);
        // 圆圈半径
        let radius = this.node.width / 2;
        // 记录摇杆位置
        this._stickPos = touchPos;
        //相对位置
        let posX = this.node.getPosition().x + touchPos.x,
            posY = this.node.getPosition().y + touchPos.y;
        //小于半径改变圆点儿位置
        if (radius > distance) {
            this.dot.setPosition(cc.p(posX, posY));
        }
    },
    _touchMoveEvent: function(event) {
        // 获取触摸点绝对坐标
        let touchPos = this.node.convertToNodeSpaceAR(event.getLocation()),
            distance = this._getDistance(touchPos, cc.p(0, 0)),
            radius = this.node.width / 2,
            posX = this.node.getPosition().x + touchPos.x,
            posY = this.node.getPosition().y + touchPos.y;

        if(radius > distance){
            this.dot.setPosition(cc.p(posX, posY));
        }else{
            //控杆永远保持在圈内，并在圈内跟随触摸更新角度
            let x = this.node.getPosition().x + Math.cos(this._getRadian(cc.p(posX,posY))) * radius;
            let y = this.node.getPosition().y + Math.sin(this._getRadian(cc.p(posX,posY))) * radius;
            this.dot.setPosition(cc.p(x, y));
        }
    },
    _touchEndEvent: function(event) {
        this._speed = 0;
        this.dot.setPosition(this.node.getPosition());
    },
    /**
     * [计算两点之间距离]
     */
    _getDistance: function(pos1, pos2) {
        //勾股定理了解一下
        return Math.sqrt(Math.pow(pos1.x - pos2.x, 2) + Math.pow(pos1.y - pos2.y, 2));
    },
    /**
     * 角度/弧度转换
     * 角度 = 弧度 * 180 / Math.PI
     * 弧度 = 角度 * Math.PI / 180
     */
    /**
     * [计算弧度]
     */
    _getRadian: function(point){
        let radian = Math.PI / 180 * this._getAngle(point);
        return radian;
    },
    /**
     * [计算角度]
     */
    _getAngle: function(point){
        let pos = this.node.getPosition();
        this._angle = Math.atan2(point.y - pos.y, point.x - pos.x) * (180/Math.PI);
        return this._angle;
    },

})
