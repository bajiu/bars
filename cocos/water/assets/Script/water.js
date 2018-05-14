import WaterWave from 'WaterWaveFrag';
cc.Class({
    extends: cc.Component,
    ctor: function() {
        this.resolution = {
            x: 0,
            y: 0
        };
    },
    properties: {
        // program: {
        //     type: cc.GLProgram,
        //     default: null
        // },
        startTime: {
            type: Number,
            default: 0
        },
        startTime: Date.now(),
        time: 0,
    },
    statics: {
        resolution: {
            x: 0,
            y: 0
        }
    },
    onLoad() {
        console.log(this);
        console.log(cc.GLProgram);
        console.log(cc.sys);
        this.resolution.x = (this.node.getContentSize().width);
        this.resolution.y = (this.node.getContentSize().height);

        this.userWater();
    },
    userWater() {
        this.program = new cc.GLProgram();
        this.program.initWithVertexShaderByteArray(WaterWave.waterwave_vert, WaterWave.waterwave_frag);
        this.program.addAttribute(cc.macro.ATTRIBUTE_NAME_POSITION, cc.macro.VERTEX_ATTRIB_POSITION);
        this.program.addAttribute(cc.macro.ATTRIBUTE_NAME_COLOR, cc.macro.VERTEX_ATTRIB_COLOR);
        this.program.addAttribute(cc.macro.ATTRIBUTE_NAME_TEX_COORD, cc.macro.VERTEX_ATTRIB_TEX_COORDS);
        this.program.link();
        this.program.updateUniforms();
        this.program.use();
        let res = this.program.getUniformLocationForName("resolution");
        let ba = this.program.getUniformLocationForName("time");
        this.program.setUniformLocationWith2f(res, this.resolution.x, this.resolution.y);
        this.program.setUniformLocationWith1f(ba, this.time);
        this.setProgram(this.node.getComponent(cc.Sprite)._sgNode, this.program);

    },
    setProgram(node, program) {
        node.setShaderProgram(program);
    },
    start() {

    },

    update(dt) {
        this.time = (Date.now() - this.startTime) / 1000;
        if (this.program) {
            this.program.use();
            let ct = this.program.getUniformLocationForName("time");
            this.program.setUniformLocationWith1f(ct, this.time);

        }
    },
});
