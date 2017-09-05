let conf = {
  hint: ["h1", "h2", "h3", "h4"],
  person: ['person1', 'person2', 'person3', 'person4']
}
let fn = {
  stage: null,
  el: null,
  conf: null,
  base: {
    canClick : true,
    store: 0,
    choosed: [],
    //to left is false else is true
    dir: false,
    runTime: 0,
    coord: {
      toBirdge: {
        x: 530,
        y: 280
      },
      bank: [{
          leftX: 100,
          leftY: 279,
          rightX: 610,
          rightY: 279
        },
        {
          leftX: 75,
          leftY: 282,
          rightX: 645,
          rightY: 282
        },
        {
          leftX: 50,
          leftY: 303,
          rightX: 681,
          rightY: 303
        },
        {
          leftX: 25,
          leftY: 323,
          rightX: 703,
          rightY: 323
        }
      ]
    },
    leftPerson: [],
    die : false

  },
  init(stage, el, conf) {
    if (typeof(el) != 'object' || typeof(conf) != 'object') {
      console.log('类型不对');
      return false;
    }
    this.stage = stage;
    this.el = el;
    this.conf = conf;
    el.gotoAndStop(1)
    el.main.Time_mc.gotoAndStop(0);
    this.clearMovie()
    this.bindEvt()
  },
  clearMovie() {
    //hint head
    conf.hint.forEach((i, index) => {
      this.el.main[i].num = index;
      this.el.main[i].gotoAndStop(0)
    })
    this.el.main.minute_txt.text = this.base.store
    //board
    this.el.main.input_baiban.gotoAndStop(0);
    //hero
    conf.person.forEach((i, index) => {
      this.el.main[i].num = index;
      this.el.main[i].gotoAndStop(0)
    })
    //help
    this.el.help.help1.gotoAndStop(0);
    //bridge
    this.el.main.go_mc_main.gotoAndStop(0);
  },
  bindEvt() {
    conf.person.forEach((i, index) => {
      index == 0 && (this.el.main[i].timer = 1000);
      index == 1 && (this.el.main[i].timer = 4000);
      index == 2 && (this.el.main[i].timer = 5000);
      index == 3 && (this.el.main[i].timer = 6000);
      this.el.main[i].on('click', this.choosePeople);
    })
    this.el.main.go_mc_btn.on('click', this.beginBridge, this)
    this.el.main.cls_mc_btn.on('click',this.clear,this)
    this.el.help.help1.on('click',function(){
      this.gotoAndPlay(0)
    })
    this.el.demo.on('click',()=>{
      this.el.gotoAndStop(1);
    })
  },
  choosePeople() {
    //this指向有问题
    //judge dir

    if (fn.base.dir) {
      let canChoose = false;
      for (let i in fn.base.leftPerson) {
        if (this.num == fn.base.leftPerson[i]) {
          canChoose = true
        }
      }
      if (!canChoose) {
        return false
      }
    }else{
      let canChoose = true;
      for (let i in fn.base.leftPerson) {
        if (this.num == fn.base.leftPerson[i]) {
          canChoose = false
        }
      }
      if (!canChoose) {
        return false
      }
    }
    if (fn.base.choosed.length == 0) {
      fn.base.runTime = this.timer;
      fn.showBoard(this.num)
    }else if(fn.base.choosed.length == 1){
      if(fn.base.choosed[0] == this.num ){
        return false;
      }
      if(this.num > fn.base.choosed[0]){
        fn.base.runTime = this.timer;
        fn.showBoard(this.num)
      }
    }
    if (fn.base.choosed.length >= 2) {
      return false;
    }
    fn.el.main[fn.conf.hint[this.num]].gotoAndStop(1)
    fn.base.choosed.push(this.num)
  },
  showBoard(num) {
    this.el.main.input_baiban.visible = true;
    this.el.main.input_baiban.gotoAndStop(num);
    num == 0 && (this.el.main.input_baiban.x = 31);
    num == 1 && (this.el.main.input_baiban.x = 135);
    num == 2 && (this.el.main.input_baiban.x = 240);
    num == 3 && (this.el.main.input_baiban.x = 340);
  },
  clearHint() {
    conf.hint.forEach((i, index) => {
      this.el.main[i].gotoAndStop(0)
    })
  },
  beginBridge() {
    if(!this.base.canClick || this.base.choosed.length == 0){
      return false;
    }
    this.el.help.help1.visible = false;
    this.base.canClick = false;
    let el0, el1;
    el0 = this.el.main[this.conf.person[this.base.choosed[0]]]
    if(this.base.store >= 15){
      this.base.die = true;
    }
    if (this.base.choosed.length == 1) {
      this.runOne(el0)
    } else if (this.base.choosed.length == 2) {
      el1 = this.el.main[this.conf.person[this.base.choosed[1]]]
      if(el1.num > el0.num){
        this.runTwo(el1, el0)
      }else{
        this.runTwo(el0, el1)
      }
    }
    if(el1 == undefined){
      this.base.store = this.base.store + (el0.timer/1000);
    }else{
      (el1.num > el0.num) ? this.base.store = this.base.store + (el1.timer/1000):this.base.store = this.base.store + (el0.timer/1000);
    }
    this.el.main.minute_txt.text = this.base.store

  },
  runOne(el) {
    let _this = this;
    //visible shirt
    this.toogleShirt();
    el.gotoAndStop(5)
    this.base.dir ? this.oneRight(el) : this.oneLeft(el);
  },
  oneLeft(el) {
    //move people
    createjs.Tween.get(el).to({
        x: this.base.coord.toBirdge.x,
        y: this.base.coord.toBirdge.y
      }, 1000)
      .call(() => {
        let setX = el.x - (this.el.main.go_mc_main.nominalBounds.width * 2 / 3)
        createjs.Tween.get(el).to({
            x: el.x - (this.el.main.go_mc_main.nominalBounds.width * 2 / 6)
          }, this.base.runTime/2)
          .call(()=>{
            if(this.base.die){
              this.runOver(el)
              return false;
            }
            createjs.Tween.get(el).to({
                x: setX
              }, this.base.runTime/2)
              .call(() => {

                el.gotoAndStop(1)
                createjs.Tween.get(el).to({
                  x: this.base.coord.bank[el.num].leftX,
                  y: this.base.coord.bank[el.num].rightY
                }, 1000).call(() => {
                  this.toogleShirt();
                  el.gotoAndStop(0)
                  el.scaleX = -el.scaleX
                  this.base.dir = !this.base.dir
                  this.moveOver([el])
                })
              })
          })

      })
  },
  oneRight(el) {
    //move people
    createjs.Tween.get(el).to({
        x: this.base.coord.toBirdge.x - (this.el.main.go_mc_main.nominalBounds.width * 3 / 4),
        y: this.base.coord.toBirdge.y
      }, 1000)
      .call(() => {
        createjs.Tween.get(el).to({
            x: this.base.coord.toBirdge.x - (this.el.main.go_mc_main.nominalBounds.width * 3 / 8)
          }, this.base.runTime/2)
          .call(()=>{
            if(this.base.die){
              this.runOver(el)
              return false;
            }
            createjs.Tween.get(el).to({
                x: this.base.coord.toBirdge.x
              }, this.base.runTime/2)
              .call(() => {

                el.gotoAndStop(1)
                createjs.Tween.get(el).to({
                  x: this.base.coord.bank[el.num].rightX,
                  y: this.base.coord.bank[el.num].rightY
                }, 1000).call(() => {
                  this.toogleShirt();
                  el.gotoAndStop(0)
                  el.scaleX = -el.scaleX
                  this.base.dir = !this.base.dir
                  this.moveOver([el])
                })
              })

          })


      })
  },
  runTwo(el0, el1) {
    let _this = this;
    this.toogleShirt();
    el0.gotoAndStop(2)
    setTimeout(() => {
      el1.gotoAndStop(1)
    }, 300)
    //改变层级
    this.el.main.setChildIndex(el0,this.el.main.children.length - 1)
    this.base.dir ? this.twoRight(el0, el1) : this.twoLeft(el0, el1);
  },
  twoRight(el0, el1) {
    createjs.Tween.get(el0).to({
        x: this.base.coord.toBirdge.x - (this.el.main.go_mc_main.nominalBounds.width * 3 / 4),
        y: this.base.coord.toBirdge.y
      }, 500)
      .call(() => {
        createjs.Tween.get(el1).to({
          x: this.base.coord.toBirdge.x - (this.el.main.go_mc_main.nominalBounds.width * 3 / 4) - 20,
          y: this.base.coord.toBirdge.y
        }, 500).call(() => {
          createjs.Tween.get(el0).to({
            x: el0.x + (this.el.main.go_mc_main.nominalBounds.width * 3 / 8)
          }, this.base.runTime/2)
          createjs.Tween.get(el1).to({
              x: el1.x - 20 +(this.el.main.go_mc_main.nominalBounds.width * 3 / 8)
            }, this.base.runTime/2)
            .call(()=>{

              if(this.base.die){
                this.runOver(el0,el1)
                return false;
              }
              createjs.Tween.get(el0).to({
                x: this.base.coord.toBirdge.x
              }, this.base.runTime/2)
              createjs.Tween.get(el1).to({
                  x: this.base.coord.toBirdge.x - 40
                }, this.base.runTime/2)
                .call(() => {
                  el0.gotoAndStop(1)
                  el1.gotoAndStop(1)
                  createjs.Tween.get(el0).to({
                    x: this.base.coord.bank[el0.num].rightX,
                    y: this.base.coord.bank[el0.num].rightY
                  }, 1000).call(() => {
                    el0.gotoAndStop(0)
                    el0.scaleX = -el0.scaleX
                  })
                  createjs.Tween.get(el1).to({
                    x: this.base.coord.bank[el1.num].rightX,
                    y: this.base.coord.bank[el1.num].rightY
                  }, 1000).call(() => {
                    el1.gotoAndStop(0)
                    el1.scaleX = -el1.scaleX
                  })
                  this.base.dir = !this.base.dir;
                  this.moveOver([el0, el1])
                })
            })
        })
      })
  },
  twoLeft(el0, el1) {
    createjs.Tween.get(el0).to({
        x: this.base.coord.toBirdge.x,
        y: this.base.coord.toBirdge.y
      }, 500)
      .call(() => {
        createjs.Tween.get(el1).to({
          x: this.base.coord.toBirdge.x + 20,
          y: this.base.coord.toBirdge.y
        }, 500).call(() => {
          let setX = el1.x;
          createjs.Tween.get(el1).to({
              x: el1.x - (this.el.main.go_mc_main.nominalBounds.width * 3 / 8) + 20
            }, this.base.runTime/2)
          createjs.Tween.get(el0).to({
            x: el0.x - (this.el.main.go_mc_main.nominalBounds.width * 3 / 8)
          }, this.base.runTime/2)
            .call(()=>{
              if(this.base.die){
                this.runOver(el0,el1)
                return false;
              }
              createjs.Tween.get(el1).to({
                  x: setX - (this.el.main.go_mc_main.nominalBounds.width * 3 / 4) + 40
                }, this.base.runTime/2)
              createjs.Tween.get(el0).to({
                x: setX - (this.el.main.go_mc_main.nominalBounds.width * 3 / 4)
              }, this.base.runTime/2)
              .call(() => {
                el0.gotoAndStop(1)
                el1.gotoAndStop(1)
                createjs.Tween.get(el0).to({
                  x: this.base.coord.bank[el0.num].leftX,
                  y: this.base.coord.bank[el0.num].leftY
                }, 1000).call(() => {
                  el0.gotoAndStop(0)
                  el0.scaleX = -el0.scaleX
                })
                createjs.Tween.get(el1).to({
                  x: this.base.coord.bank[el1.num].leftX,
                  y: this.base.coord.bank[el1.num].leftY
                }, 1000).call(() => {
                  el1.gotoAndStop(0)
                  el1.scaleX = -el1.scaleX
                })
                this.base.dir = !this.base.dir;
                this.moveOver([el0, el1])
              })
            })
        })
      })
  },
  toogleShirt() {
    if(!this.base.canClick){
      this.el.main.Time_mc.gotoAndPlay(0)
    }else{
      this.el.main.Time_mc.gotoAndStop(0)
    }
    if (this.el.main.glim_mc.alpha == 1) {
      createjs.Tween.get(this.el.main.glim_mc).to({
        alpha: 0
      }, 1000).call(() => {
        this.base.dir ? (this.el.main.glim_mc.x = 547) : (this.el.main.glim_mc.x = 200);
        this.base.dir ? (this.el.main.glim_mc.scaleX = 1) : (this.el.main.glim_mc.scaleX = -1);
      })
    } else {
      createjs.Tween.get(this.el.main.glim_mc).to({
        alpha: 1
      }, 1000)
    }
  },
  moveOver(arr) {
    let _this = this;
    this.clearHint()
    this.base.canClick = true;
    this.toogleShirt()
    this.base.choosed = []

    //改变层级
    this.conf.person.forEach((i,index)=>{
      this.el.main.setChildIndex(this.el.main[i],this.el.main.children.length - 1)
    })
    if (this.base.dir) {
      arr.forEach((i, index) => {
        this.base.leftPerson.push(i.num);
      })
    } else {
      arr.forEach((i, index) => {
        for(let j in this.base.leftPerson){
          if(this.base.leftPerson[j] == i.num){
            this.base.leftPerson.splice(j,1)
          }
        }
      })
    }
    this.el.main.input_baiban.visible = false;
    // console.log(fn.base.leftPerson);
  },
  clear() {
    this.base.runTime = 0;
    this.base.choosed = [];
    this.clearHint();




  },
  gameOver(){
    console.log('gameover');
  },
  runOver(el0,el1){
    el0.gotoAndStop(4)
    if(typeof(el1) == 'object'){
      el1.gotoAndStop(4)
    }
    this.el.main.go_mc_main.gotoAndStop(1);
    this.el.main.Time_mc.gotoAndStop(0)
    this.el.main.fire.visible = false;
    this.gameOver()
  }

}
window.begin = function() {
  fn.init(stage, exportRoot, conf);
}
