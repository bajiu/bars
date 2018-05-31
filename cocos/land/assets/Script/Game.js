cc.Class({
    extends: cc.Component,
    ctor: function() {
        this.score = 0;
        this.landerCount = 0;
        this.land_duration = 140;
        this.playTime = 60;
    },
    properties: {
        player: {
            default: null,
            type: cc.Node
        },
        lander: {
            default: null,
            type: cc.Prefab
        },
        timeLabel: {
            default: null,
            type: cc.Label
        },
        scoreLabel: {
            default: null,
            type: cc.Label
        },
        jumpAudio: {
            default: null,
            url: cc.AudioClip
        },
    },

    onLoad() {
        //设置小人儿初始位置
        this.player.setPosition(-this.node.width / 2 + 60, this.node.height / 2 - 170);
        for (let i = 0; i < 8; i++) {
            this._makelander();
        }
        this._setInputControl();
        this._makeTimer();
    },

    start() {

    },

    // update (dt) {},

    _makeTimer: function() {
        let callback = function () {
            if (this.playTime === 0) {
                // 游戏时间结束时取消计时器
                this.unschedule(callback);
            }
            // 改变方框内文字
            this.timeLabel.string = this.playTime;
            this.playTime--;
        }
        this.schedule(callback, 1);
    },
    /**
     * [创建地刺]
     */
    _makelander: function() {
        // 添加地刺数量
        this.landerCount += 1;
        //创建lander对象
        let newLander = cc.instantiate(this.lander);


        // 获得0-1之间随机整数
        var randD = cc.random0To1();
        randD >= 0.5 ? newLander.rotationY = 0 : newLander.rotationY = 180;
        //获得lander位置
        newLander.setPosition(this._landerPosi(randD));

        this.node.addChild(newLander);
    },

    /**
     * [设置地刺位置]
     */
    _landerPosi: function(randD) {
        let randX = 0,
            randY = 0;
        //大于0.5在右边，小于0.5在左边出现
        randD >= 0.5 ? (randX = this.node.width / 2 - 50) : (randX = -this.node.width / 2 + 50);
        if (this.landerCount <= 8) {
            randY = (this.node.height / 2 - 170) - (this.land_duration * this.landerCount) - this.land_duration * 1;
        } else {
            randY = (this.node.height / 2 - 170) - (this.land_duration * 8) - this.land_duration * 1;
        }
        return cc.p(randX, randY);
    },
    /**
     * [玩家操作]
     */
    _setInputControl: function() {
        console.log('run this');
        let _this = this,
            listener = {
                event: cc.EventListener.TOUCH_ONE_BY_ONE,
                onTouchBegan: function(touches, event) {
                    // console.log(touches);
                    // console.log(event);
                    // 听个响儿
                    cc.audioEngine.playEffect(_this.jumpAudio, false);
                    //获取事件所绑定的target
                    let target = event.getCurrentTarget();
                    // console.log(target);
                    //将局部坐标转换为世界坐标
                    let locationInNode = target.convertToNodeSpace(touches.getLocation());
                    // console.log(locationInNode);
                    if (locationInNode.x > _this.node.width / 2) {
                        _this._playerMoveRight(); //player向右移动
                    } else {
                        _this._playerMoveLeft(); //player向左移动
                    }
                    _this._makelander();

                }
            }

        cc.eventManager.addListener(listener, _this.node);




    },
    /**
     * [小人左滑]
     */
    _playerMoveLeft: function() {
        console.log('run left');
        let goLeft = cc.moveTo(0.2, cc.p(-this.node.width / 2 + 60, this.player.getPositionY())),
            //跳起动作
            jump = cc.moveTo(0.1, cc.p(-this.node.width / 2 + 60 + 30, this.player.getPositionY())),
            //落下动作
            down = cc.moveTo(0.1, cc.p(-this.node.width / 2 + 60, this.player.getPositionY())),
            //定义动作顺序
            act = cc.sequence(jump, down);
        //判断翻转
        if (this.player.rotationY == 0) {
            this.player.rotationY = 0;
            this.player.runAction(act);
        } else {
            this.player.rotationY = 0;
            this.player.runAction(goLeft);
        }

    },
    /**
     * [小人右滑]
     */
    _playerMoveRight: function() {
        console.log('run right');
        let goRight = cc.moveTo(0.2, cc.p(this.node.width / 2 - 60, this.player.getPositionY())),
            //跳起动作
            jump = cc.moveTo(0.1, cc.p(this.node.width / 2 - 60 - 30, this.player.getPositionY())),
            //落下动作
            down = cc.moveTo(0.1, cc.p(this.node.width / 2 - 60, this.player.getPositionY())),
            //定义动作顺序
            act = cc.sequence(jump, down);
        //判断翻转
        if (this.player.rotationY == 180) {
            this.player.rotationY = 180;
            this.player.runAction(act);
        } else {
            this.player.rotationY = 180;
            this.player.runAction(goRight);
        }

    },


});
