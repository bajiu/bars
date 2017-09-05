window.conf = {
  clockBtn : ['cbtn0','cbtn1','cbtn2'],
  shipArr : ['s0','s1','s2','s3','s4'],
  person : ['p0','p1','p2'],
  canClick : [0,1,2],
  inShipPerson : [],
  ship : 0,
  //不能点击的小人(待优化)
  rightPerson : [0,1,2],
  leftPerson : [],
  //0为右边1为左边
  dir : false,
  toLeftPos : -220,
  toRightPos : 100
}
let fn = {
  init(){
    exportRoot.main.board.gotoAndStop(0)
    exportRoot.main.clock.gotoAndStop(0)
    exportRoot.main.ship.gotoAndStop(0)
    exportRoot.main.help.gotoAndStop(0)
    //绑定选时钟事件
    window.conf.clockBtn.forEach((el,index) =>{
      index == 0 && (exportRoot.main[el].timer = 2)
      index == 1 && (exportRoot.main[el].timer = 5)
      index == 2 && (exportRoot.main[el].timer = 3)
      exportRoot.main['p' + (index + 3)].visible = false;
      exportRoot.main[el].num = index;
      exportRoot.main[el].gotoAndStop(0);
      exportRoot.main[el].on('click',fn.cooseClick)
    })
    window.conf.person.forEach((el,index) => {
      exportRoot.main[el].num = index;
      exportRoot.main['p' + (index+3)].num = index + 3;
      exportRoot.main[el].on('click',fn.choosePerson)
      exportRoot.main['p' + (index+3)].on('click',fn.choosePerson)
    })
    //绑定按钮事件
    fn.bindBtn()
  },
  cooseClick(){
    this.num == 0 && (exportRoot.main['board'].x = -383.6)
    this.num == 1 && (exportRoot.main['board'].x = -278.6)
    this.num == 2 && (exportRoot.main['board'].x = -173.6)
    exportRoot.main['board'].gotoAndStop(this.num)
  },
  choosePerson(){
    if(window.conf.inShipPerson.length >= 2){
      return false;
    }
    if(!window.conf.dir){
      for(let i = 0 ; i <  window.conf.rightPerson.length ; i++){
        if(this.num == window.conf.rightPerson[i]){
          window.conf.inShipPerson.push(this.num)
          if(!window.conf.dir){
            exportRoot.main[window.conf.person[this.num]].visible = false;
          }else{
            exportRoot.main['p' + [this.num + 3]].visible = false;
          }
          if(window.conf.inShipPerson.length == 1){
            exportRoot.main.ship.gotoAndStop(this.num + 2)
            window.conf.ship = this.num + 2
            exportRoot.main.ship[window.conf.shipArr[this.num + 2]].p.visible = false;
            //暂停划船动画
            exportRoot.main.ship[window.conf.shipArr[this.num + 2]].stop()
          }else{
            exportRoot.main.ship[window.conf.shipArr[window.conf.ship]].p.visible = true;
            exportRoot.main.ship[window.conf.shipArr[window.conf.ship]].p.gotoAndStop(this.num);
          }
        }
      }
    }else{
      for(let i = 0 ; i <  window.conf.leftPerson.length ; i++){
        // //console.log(this.num);
        // //console.log(window.conf.leftPerson[i]);
        if(this.num == window.conf.leftPerson[i]){
          window.conf.inShipPerson.push(this.num)
          if(!window.conf.dir){
            exportRoot.main[window.conf.person[this.num]].visible = false;
          }else{

            exportRoot.main['p' + this.num ].visible = false;

          }
          if(window.conf.inShipPerson.length == 1){
            exportRoot.main.ship.gotoAndStop(this.num - 1)
            window.conf.ship = this.num - 3 + 2
            exportRoot.main.ship[window.conf.shipArr[this.num - 1]].p.visible = false;
            //暂停划船动画
            exportRoot.main.ship[window.conf.shipArr[this.num + 2 - 3]].stop()
          }else{
            exportRoot.main.ship[window.conf.shipArr[window.conf.ship]].p.visible = true;
            exportRoot.main.ship[window.conf.shipArr[window.conf.ship]].p.gotoAndStop(this.num - 3);
          }
        }
      }
    }
  },
  bindBtn(){
    //过河
    exportRoot.main.Go_btn.on('click', fn.runRiver)
    //重置
    exportRoot.main.Cls_btn.on('click', fn.resetChoose)
    //help
    exportRoot.main.help.on('click', fn.help)
  },
  help(){
    exportRoot.main.help.gotoAndPlay(0)
    setTimeout(() => {
      exportRoot.main.help.gotoAndStop(0)
    },4000)
  },
  resetChoose(){
    window.conf.inShipPerson = [];
    exportRoot.main.ship.gotoAndStop(0)
    window.conf.clockBtn.forEach((el,index) =>{
      exportRoot.main[el].gotoAndStop(0);
    })
    window.conf.person.forEach((el,index) => {
      // !window.conf.dir ? exportRoot.main['p' + index].visible = true : exportRoot.main['p' + (index + 3)].visible = true;
      for(let i = 0 ; i < 6 ; i++){
        exportRoot.main['p' + index].visible = false;
      }
      window.conf.leftPerson.forEach((el,index) =>{
        exportRoot.main['p' + el].visible = true
      })
      window.conf.rightPerson.forEach((el,index) =>{
        exportRoot.main['p' + el].visible = true
      })
    })
  },
  runRiver(){
    let timer = 0;
    if(window.conf.inShipPerson.length > 0){
      exportRoot.main.help.visible = false;
      window.conf.inShipPerson[0] == 0 && (timer = 2000);
      window.conf.inShipPerson[0] == 1 && (timer = 5000);
      window.conf.inShipPerson[0] == 2 && (timer = 3000);
      window.conf.inShipPerson[0] == 3 && (timer = 2000);
      window.conf.inShipPerson[0] == 4 && (timer = 5000);
      window.conf.inShipPerson[0] == 5 && (timer = 3000);
      exportRoot.main.clock.gotoAndPlay(0)
      exportRoot.main.text.text = parseInt(exportRoot.main.text.text) + (timer/1000);

      if(!window.conf.dir){
        //to left
        createjs.Tween.get(exportRoot.main.ship).to({x: window.conf.toLeftPos}, timer).call(fn.changePersonPos);

      }else{
        //to right
        createjs.Tween.get(exportRoot.main.ship).to({x: window.conf.toRightPos}, timer).call(fn.changePersonPos);

      }
      document.getElementById('Sound').play()
      exportRoot.main.ship[window.conf.shipArr[window.conf.ship]].gotoAndStop(1)
    }
  },
  changePersonPos(){
    document.getElementById('Sound').pause()
    exportRoot.main.clock.gotoAndStop(0)
    window.conf.dir ? exportRoot.main.ship.scaleX = 1:exportRoot.main.ship.scaleX = -1
    window.conf.inShipPerson.forEach((el,index) => {
      !window.conf.dir ? exportRoot.main['p' + (window.conf.inShipPerson[index] + 3)].visible = true : exportRoot.main['p' + (window.conf.inShipPerson[index] - 3)].visible = true;
      if(index ==  window.conf.inShipPerson.length - 1){
        fn.resetShip()
      }
    })
  },
  resetShip(){
    // exportRoot.main.text.text = 0
    if(!window.conf.dir){
      //左划

      for(let i in window.conf.inShipPerson){
        window.conf.leftPerson.push(window.conf.inShipPerson[i] + 3)
      }
      for(let n = 0 ; n < window.conf.rightPerson.length; n++){
        for(let m = 0 ; m < window.conf.inShipPerson.length ; m ++ ){
          if(window.conf.rightPerson[n] == window.conf.inShipPerson[m]){
            window.conf.rightPerson.splice(n, 1);
          }
        }
      }
    }else{
      for(let i in window.conf.inShipPerson){
        window.conf.rightPerson.push(window.conf.inShipPerson[i] - 3)
      }
      for(let n = 0 ; n < window.conf.leftPerson.length; n++){
        for(let m = 0 ; m < window.conf.inShipPerson.length ; m ++ ){
          if(window.conf.leftPerson[n] == window.conf.inShipPerson[m]){
            window.conf.leftPerson.splice(n, 1);
          }
        }
      }
    }
    exportRoot.main.ship.gotoAndStop(0)
    window.conf.clockBtn.forEach((el,index) =>{
      exportRoot.main[el].gotoAndStop(0);;
    })
    //console.log(window.conf.leftPerson);
    //console.log(window.conf.rightPerson);
    window.conf.inShipPerson = []
    setTimeout(() => {
      window.conf.dir = !window.conf.dir
    },0)
  }
}
window.begin = function(){
  exportRoot.asd.sp.gotoAndStop(0)
    fn.init(exportRoot)
    exportRoot.gotoAndStop(1);

}
