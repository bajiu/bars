(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 910,
	height: 640,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/Bitmap1.png", id:"Bitmap1"}
	]
};



// symbols:



(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,643,183);


(lib.元件1 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFCC").s().p("Ag5BGIgMABIgIAAQgLAAgLgCIgKAWIgcgJIALgYQgOgKAAgSQAAgWAQgZIgFABIgJgZQAAAJgHAIIgMAMQgEAFAAACQAAAFAXAIIgLAWQgUgCgSgRQgGgJAAgHQAAgJAJgJIALgLQADgEAAgCQAAgDgFgDIgRgHIALgVQAJABAUALQAIAEAEAGIgDgOIAZgIIABAHIAZgGIgDgGIAZgLIAHAOQAJgCAJABQAOAAAKAGQAJAGAAAKQAAAOgFARIgbgGQAGgIAAgJQAAgGgSAAQgWAAgUAGQAbAAAbAFIgCAUIgPgBIgBAEIAJAAQAPADALAIQAOAIAAAVIAAAHQAAASgPALQAJAIAHAIIgUASQgLgKgOgLgAhlAsQAKAEAOgBIAHAAQAMAAAHgGQAHgHAAgIIAAgEQAAgMgGgDQgGgDgJgCIgBAMIAPACIgCAUIgOgBIAAAJIgbgDIAAgJIgPAAQABAHAHAFgAhpAJIgBACIANABIABgIIgNAFgAhogYIgUAGIALAEQANgDALgCIABgHIgRAAIABACgAhvgrIAFANIACgQIgHADgABaAPIg7AFIgDgfQBKgGBVAAIADAeIg/ABIAKBEIgkAEQgHgkgEgjgAAcA/QAPgVAPgOIAaARQgPASgMAVgAjCA1QAXgFAUgIIAJAcQgUAJgYAFgACMBBIAKghQAWALAXABIgIAgQgbAAgUgLgAAiguIAGghQBLADBIAFIgGAiIiTgJg");
	this.shape.setTransform(0,-3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#425124").ss(4,1,1).p("AC7hHIgGAiQhJgFhKgEIAGgiQBLAEBIAFgACJBSIgkAEQgHgjgEgjQgeABgdADIgDgfQBKgGBVAAIADAeQggAAgfABQAFAgAFAkgAC7BNQgbgBgUgLIAKggQAWALAXAAgAAcA/QAPgVAPgOIAaARQgPASgMAVgAhqgdIACgRQgEABgDACQACAHADAHgAi1hKQAJAAAUALQAIAFAEAGQgCgHgBgHIAZgIQAAAEABADQANgEAMgCQgCgDgBgEIAZgKQADAHAEAHQAJgCAJAAQAOAAAKAHQAJAGAAAKQAAANgFASIgbgFQAGgKAAgIQAAgGgSAAQgWAAgUAGQAbAAAbAEIgCAVQgIgBgHgBQgBADAAACQAFAAAEAAQAPACALAIQAOAJAAAWIAAAGQAAASgPAMQAJAHAHAIIgUASQgLgKgOgLQgFABgHAAIgIAAQgLAAgLgCQgFALgFALIgcgJQAGgNAFgLQgOgKAAgSQAAgXAQgZIgFACQgFgNgEgNQAAAKgHAIQgJAIgDAFQgEADAAADQAAAFAXAIIgLAWQgUgBgSgRQgGgKAAgHQAAgJAJgKQAEgEAHgHQADgDAAgCQAAgDgFgDQgHgDgKgEgAhYgaQgIAAgJAAQABABAAABIgUAGIALAEQANgEALgBQABgDAAgEgAhqAMQAHAAAGAAQABgFAAgDQgHACgGADQgBABAAACgAhBACQgBAHAAAGQAIAAAHABIgCAUQgHAAgHgBQAAAFAAAEIgbgDQAAgEAAgEQgIgBgHAAQABAIAHAEQAKAEAOAAIAHAAQAMAAAHgHQAHgGAAgJIAAgDQAAgMgGgEQgGgDgJgCgAiOBEQgUAKgYAEIgIgdQAXgFAUgIg");
	this.shape_1.setTransform(0,-3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFCC").s().p("Ag5BGIgMABIgIAAQgLAAgLgCIgKAWIgcgJIALgYQgOgKAAgSQAAgWAQgZIgFABIgJgZQAAAJgHAIIgMAMQgEAFAAACQAAAFAXAIIgLAWQgUgCgSgRQgGgJAAgHQAAgJAJgJIALgLQADgEAAgCQAAgDgFgDIgRgHIALgVQAJABAUALQAIAEAEAGIgDgOIAZgIIABAHIAZgGIgDgGIAZgLIAHAOQAJgCAJABQAOAAAKAGQAJAGAAAKQAAAOgFARIgbgGQAGgIAAgJQAAgGgSAAQgWAAgUAGQAbAAAbAFIgCAUIgPgBIgBAEIAJAAQAPADALAIQAOAIAAAVIAAAHQAAASgPALQAJAIAHAIIgUASQgLgKgOgLgAhlAsQAKAEAOgBIAHAAQAMAAAHgGQAHgHAAgIIAAgEQAAgMgGgDQgGgDgJgCIgBAMIAPACIgCAUIgOgBIAAAJIgbgDIAAgJIgPAAQABAHAHAFgAhpAJIgBACIANABIABgIIgNAFgAhogYIgUAGIALAEQANgDALgCIABgHIgRAAIABACgAhvgrIAFANIACgQIgHADgABaAPIg7AFIgDgfQBKgGBVAAIADAeIg/ABIAKBEIgkAEQgHgkgEgjgAAcA/QAPgVAPgOIAaARQgPASgMAVgAjCA1QAXgFAUgIIAJAcQgUAJgYAFgACMBBIAKghQAWALAXABIgIAgQgbAAgUgLgAAiguIAGghQBLADBIAFIgGAiIiTgJg");
	this.shape_2.setTransform(0,-3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.149)").s().p("AgIAAIAGAAIALAAg");
	this.shape_3.setTransform(25,18);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#508A07").s().p("Aj+A/QhlAAgBheIAAgfQACAnAUAWQAZAaA3AAIH9AAQBAAAAXgkQANgUACgfIAAAfQgBBehlAAg");
	this.shape_4.setTransform(0,5.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#638C2E").s().p("AlkA3IAAhLQABheBlAAIH9AAQBlAAABBeIAABLQgCAegNAUQACgKAAgMIAAhkQAAhUhUAAIoBAAQhVAAAABUIAABkQAAASAEAOQgUgVgCgng");
	this.shape_5.setTransform(0,-6.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#84C537").s().p("AkBB6Qg3AAgZgcQgEgOAAgSIAAhkQAAhUBVAAIIBAAQBVAAAABUIAABkQAAAMgCAKQgYAmhAAAgAk7hgQgDAIAAATIACAVQAGAPASAEQALAGAOAAIIbAAQAUABAOgNQAOgMAAgTQAAgRgOgNQgOgNgUAAIobAAIgFABIgNgCQgWAAgIAOg");
	this.shape_6.setTransform(0.3,-4.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAQAcIgCgKQAAgSAXAAQAWAAAAAVQAAAHgEAGQgGAHgKAAQgTAAgEgNgAggAnQgSgEgGgPIgCgUQAAgTAEgHQAJgSAhAFIAFABQAQALAEALIABATQAAAmgcAAQgKAAgIgCg");
	this.shape_7.setTransform(-25.7,-11.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#BDED0B").s().p("AkYArQgOAAgMgHQAIACALAAQAdAAAAgmIgBgSQgEgLgSgMIgFAAIAGgBIIaAAQAUAAAOANQAPANAAAQQAAASgPAMQgOANgUAAgAkCAQIACAKQAFAMASAAQAKAAAGgGQAEgGAAgIQAAgTgWAAQgXAAAAARg");
	this.shape_8.setTransform(1.6,-11);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#3C4900").ss(4,1,1).p("AD/iUIn9AAQhmAAAABgIAABpQAABgBmAAIH9AAQBmAAAAhgIAAhpQAAhghmAAg");
	this.shape_9.setTransform(0,-3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#508A07").s().p("Aj+CVQhlAAgBhgIAAhqQABheBlAAIH9AAQBlAAABBeIAABqQgBBghlAAg");
	this.shape_10.setTransform(0,-3);

	this.addChild(this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-37.7,-19.9,75.4,38);


(lib.xespeiyou_com__1_252_98545 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(6,1,1).p("AA2jdQgIgDgGgBQgVgGgTAAIgBAAQgiAAgbALIgDABQgFACgFADIAAgBQghARgSAbQgUAdgBAiQAAATAIARIAAgBQAFALAKAGQAVAPAaABIABAAQAWgBAOgQQAAgBABgBQAJgOAAgSQAAgGgBgHIAAgBQgBgIAEgJQAEgHAGgEIgBAAQAPgJASAAQAEAAAEABQACABACACIAAAAQALALAAARIAAAAQgBARgJANQgBABAAAAQgOASgOASQgVAVgQAYQgBABAAABQgLATgEAZQgCAMAAAOIAAAIQAAAHADAFQAEAHAIAHQAHAFAIAGQAQAIAWAAQALAAAKgFQAPgJACgWIAAgCQABgcALgRIAAAAQANgVARgQQAWgTAQgZQASgbABgqIAAgBQgBgigSgaQgBgBAAgBQgTgagegPQAAgBgZgKgAgKCCQgUABgOAMIAAAAQgKAIgDAMQgCAGgBAGQAAAAAAABQABASANAMQABABAAABQABAAAAAAQAHAHALAHQAQAKAQAAIAAAAQAVAAAOgNIAAAAQAOgMABgUQAAAAAAgBQgBgUgPgMQgJgJgUgKIAAAAQgIgDgHgBQgDgBgCAAQgBAAAAAAg");
	this.shape.setTransform(14.8,23.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8A0235").s().p("AAGDoQgQAAgQgKQgLgHgHgHIgBAAIgBgCQgNgMgBgSIAAgBQABgGACgGQADgMAKgIIAAAAQAOgMAUgBIABAAIAFABQAHABAIADIAAAAQAUAKAJAJQAPAMABAUIAAABQgBAUgOAMIAAAAQgOANgVAAgAgbB3IgPgLQgIgHgEgHQgDgFAAgHIAAgIQAAgOACgMQAEgZALgTIABgCQAQgYAVgVQAOgSAOgSIABgBQAJgNABgRIAAAAQAAgRgLgLIAAAAIgEgDIgIgBQgSAAgPAJIABAAQgGAEgEAHQgEAJABAIIAAABIABANQAAASgJAOIgBACQgOAQgWABIgBAAQgagBgVgPQgKgGgFgLIAAABQgIgRAAgTQABgiAUgdQASgbAhgRIAAABIAKgFIADgBQAbgLAiAAIABAAQATAAAVAGIAOAEIAZALQAeAPATAaIABACQASAaABAiIAAABQgBAqgSAbQgQAZgWATQgRAQgNAVIAAAAQgLARgBAcIAAACQgCAWgPAJQgKAFgLAAQgWAAgQgIg");
	this.shape_1.setTransform(14.8,23.3);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3,-3,35.7,52.6);


(lib.xespeiyou_com__1_250_20590 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ABigXQAFgYAQgDQAKgCAQAIQAmAUAGAuQAHA2gNAfQgCAGgDAEQgIAOgNAIIAKAmIASAmIACAEQAJALgeALQgSAHgWACQgPACgRgBIgnhFIhlAHQg1AEgkAfQgLADgNgCQgYgEgGgaQgGgaAXgVIADgCQAGgGADgBQAGgBAHgDQAOgGAkgCQATgBAPABQAagGACgYQADgagYguQgOgcgfgyQgmg7gJgQQgthTAsggIAAAAQAegQAVARQAQANAQAoQAJAXAUA4QATAzAcBCQgKggAJgVQACgEAEgEQAEgFAGgCQAGgDAJgBQAWAAASAQQAMALAGAPQAFAKABAM");
	this.shape.setTransform(182.3,-323.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DBDBDB").s().p("AB/D4IgnhGIhlAIQg1AEgkAfQgLADgNgCQgYgEgGgaQgGgaAXgWIADgCQgDALADALQAGAaAUADQAKACAJgEIAqgQQAlgPARgCIBngHIAzBgIgYABIgIAAgAgXAVQgOgcgfgxQgmg7gJgRQgthTAsggIAAAAQgJAhAeA3QAJAQAmA7QAfAyAOAeQAoBRgnAQQACgZgXgvg");
	this.shape_1.setTransform(179,-323.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABBCbIhlAIQgTABglAPIgqARQgJADgKgBQgUgDgGgaQgDgMADgKQAGgGADgBIANgEQAOgGAkgCIAiAAQAagGACgYQApgRgqhRQgOgegfgxQgmg7gJgRQgeg3AJggQAegQAVARQAQANAQAoIAdBPQATAzAcBCQgKggAKgVIAFgIQAEgFAGgCQAGgDAJgBQAWAAASAPQAMAMAGAPQAFgYAQgDQAKgCAQAIQAmAUAGAuQAHA2gNAfIgFAKQgIAOgNAIIAKAmIASAmIACAEQAJALgeALQgSAHgWACgABeAAQgBgMgFgKQAFAKABAMg");
	this.shape_2.setTransform(183.3,-324);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(162.1,-350.1,40.4,52.4);


(lib.xespeiyou_com__1_91_80648 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.3,1,1).p("AAbAYQgHgtgHgPQgGgMgMABQgRAAgDAUIAAAMQgBAPABANQAAAKABAIQAJASARgBQAUAAAFgYg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgYAfIgBgSIAAgcIAAgMQADgUARAAQAMgBAGAMQAHAPAHAtQgFAYgUAAIgBAAQgQAAgJgRg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3.7,-5.8,7.5,11.7);


(lib.xespeiyou_com__1_90_96304 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAeABIgEABQgdADgagH");
	this.shape.setTransform(3.8,0.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.3,1,1).p("AAagHQgEAHgEAFQgHAHgJAAQgSAAgQgXQAPAGARAAQAHAAAHgBQAGAAAGgBQAEgBADgB");
	this.shape_1.setTransform(4.1,1.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9C3D3D").s().p("AgEgEIAJgBQgDAGgCAFg");
	this.shape_2.setTransform(6.1,1.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E86464").s().p("AgYgLQAOAGARAAIAOAAIAEAKQgGAHgJAAQgSAAgQgXg");
	this.shape_3.setTransform(3.3,1.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(0.3,1,1).p("AgigRQgCgCgBgBAgigRQAEACAFACQAIADAMABQAXACANgFQAEgBADgCQgEADgEAHQgBABAAAAQgEAFgBAEQgGAHgCACQgOAMgOgJQgPgJgEgNQgCgGgBgGg");
	this.shape_4.setTransform(4,1.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#9C3D3D").s().p("AgHgEQAHgBAIgDIgFAIIgGAJQACgJgGgEg");
	this.shape_5.setTransform(6.1,2.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgBAJQgSgBgOgGQgCgDAAgHIAJAFQAHADANAAQAWABANgDIAHgEQgDADgFAGIgBABQgHADgJABIgKABIgCAAg");
	this.shape_6.setTransform(4.1,0.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E86464").s().p("AgEAKQgPgKgEgNQANAGAQABIAOgBQAFAGgBAHQgIAIgJAAQgGAAgFgEg");
	this.shape_7.setTransform(3.2,2.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(0.3,1,1).p("AAYALIAAgBQABgBAAgBQAEgLADgIQAEgHADgDQgGADgRABQgQACgmgIQAAAFACAEQADAOAJAKQAKAOAOgBQABAAACAAQAPgBAGgLg");
	this.shape_8.setTransform(3.9,1.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#9C3D3D").s().p("AAAALQAAgLgJgIIASgCQgDAIgEALIgBACg");
	this.shape_9.setTransform(6.2,1.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E86464").s().p("AgRAGQgJgJgEgPQAZAHAYgCQAKAJAAAKIACAAQgGALgQACIgCAAIgCAAQgNAAgJgNg");
	this.shape_10.setTransform(3.2,2.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgkABIgCgHQAmAGAQAAQARgCAGgCQgDADgEAFIgUACIgLABQgSAAgTgGg");
	this.shape_11.setTransform(3.9,0.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(0.3,1,1).p("AAWAHQAAgBABgBQADgGADgFQADgFADgCQgFACgQABQgOABgigFQAAADACADQADAIAIAHQAJAIAMAAQABAAABAAQAOgBAGgHg");
	this.shape_12.setTransform(4.2,2.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#9C3D3D").s().p("AAAAHQAAgHgIgEIAQgCIgGALIgBACg");
	this.shape_13.setTransform(6.3,2.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AggABIgCgEQAiADAOAAQAQAAAFgCIgGAEIgSACIgJAAQgRAAgRgDg");
	this.shape_14.setTransform(4.2,1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E86464").s().p("AgPAEQgIgFgDgKQAVAEAWgBQAJAGAAAFIACABQgGAHgOABIgCAAIgCAAQgLAAgIgIg");
	this.shape_15.setTransform(3.6,2.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(0.3,1,1).p("AAbgGIAHgBAAbgGQgBAHgFAEQgFADgIAAQgQgBgMgGQgNgEABgEQAOADAigBg");
	this.shape_16.setTransform(4.3,2.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#9C3D3D").s().p("AgEgEIAJgBQAAAHgFAEQAAgGgEgEg");
	this.shape_17.setTransform(6.5,2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E86464").s().p("AAOAIQgQgBgMgGQgMgEAAgEQAOADAigBQAFAFAAAFQgEADgHAAIgCAAg");
	this.shape_18.setTransform(3.6,2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},3).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},3).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},3).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},3).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},3).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.2,-0.4,8.1,2.7);


(lib.xespeiyou_com__1_89_50491 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.3,1,1).p("AgLAFIgBADIADALIAAAAIAJABIALgMIACgLIgCgLIgGgFIgFAAIgBABIgFAIIgEAKIgBABIAAAD");
	this.shape.setTransform(-4.6,-8.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B67903").s().p("AAAACIAFgKIAEAIIgJAIIAAgGIAAAGIgIABg");
	this.shape_1.setTransform(-4.6,-7.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D48C00").s().p("AgDAEIAAgMIAEAAIADAIIgDAJg");
	this.shape_2.setTransform(-3.7,-8.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFE051").s().p("AgKARIAJgBIgBgGIACAGIAHgKIgEgGIAFADIADgIIgCAKIgJANgAAIgOIgGAAIABgBIAGgBIACALg");
	this.shape_3.setTransform(-4.4,-7.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F3DB2C").s().p("AgEASIgDgLIABgDIAJADIgBACIgFAGIgDgGIACAJgAgGAAIABgBIALACIgBADgAADgRIAEADIABACIgJABg");
	this.shape_4.setTransform(-5.1,-8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F7C10D").s().p("AAAACIgFgEIABAAIgBAAIAFAAIAGADIgGABIAAABg");
	this.shape_5.setTransform(-4,-9.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgHALIADAFIAFgFIABgDIgJgDIAAgBIAAgCIALADIABgCIgLgDIAEgKIADgIIACAAIABAAIgBAAIAFAGIAAABIAAALIgHAMIgGAHgAgCgKIAJgBIgBgCIgEgDg");
	this.shape_6.setTransform(-5,-8.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D48C00").s().p("AgIATIgBAAIgDgLIABgDIAAgBIABgDIAEgLIAGgIIAAgBIAGAAIAFAFIACALIgCALIgLAMg");
	this.shape_7.setTransform(-4.5,-8,1,1,0,0,0,0.1,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(0.3,1,1).p("AgNgWQACgCADgDQAFABAFAEQACABADACQAMAHABAEQADAIgIAMQgJANgHACQgFACgEgGQgCgDgDgIQgBgEgBgCQgBgFgBgBIAAAAQgBgDAAgIQAAgEAEgF");
	this.shape_8.setTransform(-1.9,-5.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#5F3A9A").s().p("AgMAUIgEgKIgCgHQAFAMAIAAQAIgCADgKQACgHgCgJIgBgEIgEgHIAEACQAMAHABAFQAEAJgJALQgIAMgIADIgCAAQgEAAgDgFg");
	this.shape_9.setTransform(-1.7,-5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#432377").s().p("AAAANQgBgBgDgMIgEgKIACgCIACgBIAGAHQAFAGABADIAAABIAAAAQgDACgEgDIgBgCIAAADIABAJg");
	this.shape_10.setTransform(-2.7,-6.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#7E56BD").s().p("AgLALIgCgFIAAgBIgBgLQAAgEAEgEIADAMQADAJABACIADAAIgBgJIAAgCIABACQACACADgCIABAAIAAAAQgBgEgFgGIgHgHIAFgEQADABAHAEIAFAGIABAFQABAHgCAJQgDAKgJABIgBAAQgFAAgGgLg");
	this.shape_11.setTransform(-2.5,-5.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#5F3A9A").s().p("AgKAXIgFgKIgCgHIgCgGIAAAAIgBgLQAAgEAEgEIABgCIACgBIAFgFQAFABAFAFIAFACQAMAHABAEQADAIgIANQgJALgHADIgDABQgDAAgDgFg");
	this.shape_12.setTransform(-1.9,-5.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(0.5,1,1).p("AgvABQARgBAMgBQATgDATgIQABgBAXgNQAAABABAAIADAZQgJAGgJAGQgGACgEADQgPAIgOAFQgCAAgCABQgNADgNACQAAgIAAgGQAAgCAAgCQAAgCgBgBQAAgBAAgBQgBgGgDgEQgCgBgBgBgAAsgaQgwgVgrAbIAAAV");
	this.shape_13.setTransform(0.6,-10.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FBC2B5").s().p("AgtgCQArgbAwAVIgYALQgTAIgTADIgdAEg");
	this.shape_14.setTransform(0.4,-12.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgnASIAAgFIgBgDIAAgCQgBgGgDgCIgDgCIAdgEQATgDATgIIAYgOIABABIADAaQgJAFgJAGIgKAFQgPAIgOAFIgEABQgNADgNACIAAgNg");
	this.shape_15.setTransform(0.6,-9.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(0.3,1,1).p("AA0h4IAVBIQABAEABAEQADAJABAJQABABAAACQACAGABAHQAAAAAAABQACAIACAJQABAIACAIQABAJABAHQABALABAHQAAABAAAAQAAAIgGAGQAAACgBABIgBAAIgBAOQgEAJgHAHQgGAHgHAEAhVBcQACACAEACQAGADAHADQAWAIApABQAoABAagIQAJgDAKgFIADgCAhVBcQgBgDAAgEQAAgBAAAAIAAgBQgBgCAAAAIAAgBQgCgCgBgCQgCgFgBgGIAAgBQAAgHACgKQABgJADgKQAAgCABgDQABgFACgGQACgJACgGQADgGACgHQADgKAEgLQAAgDABgDIADgHQAEgNAHgUQACgFADgEQADgKAFgLAg5B2QgSgJgIgNQgBgCgBgC");
	this.shape_16.setTransform(0,0.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#7E56BD").s().p("AgCAPQgpgCgWgIQgHgCgGgDIgGgCIgBgHIAAgCIAAAAIgBgDQAOAIAXAEQAbADAeAAQAtgBAigOIgBANIgEABIgSAHQgZAIgmAAIgDAAg");
	this.shape_17.setTransform(-0.1,10.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#321970").s().p("AADASQgZgBgigLQgTgHgIgNIgBgDIAFADQAGAEAIACQAWAIAoAAQAoAAAagGIATgIIADgCQgEAKgHAGQgGAFgHAEQgYAJgaAAIgIAAg");
	this.shape_18.setTransform(0,12.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgyBoQgXgEgOgIIAAAAIgCgEQgDgFAAgHIAAgBIABgRIAEgSIABgFIADgMIAEgRIAFgKIAHgWIACgGIACgHIALggIAFgKIAJgVIBagGIAUBHIADAIIAEATIABACIACALIABABIAEATIADARIACAQIABARIAAACQABAHgGAHIgBADIgBAAQghAPgtACIgGAAQgbAAgZgFg");
	this.shape_19.setTransform(0,-0.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AADB9QgagBghgLQgTgJgIgNIgCgDIgBgHIAAgCIAAAAIgBgDIAAAAIgCgEQgDgFAAgHIAAgBIABgRIAEgSIABgFIADgMIAEgPIAFgMIAHgWIACgGIACgHIALggIAFgKIAJgVIBagGIAUBHIADAIIAEATIABACIACANIABABIAEARIADARIACAQIABARIAAACQABAHgGAHIgBADIgBAAIgBANQgEAKgIAHQgFAGgHAEQgYAJgaAAIgIAAg");
	this.shape_20.setTransform(0,1.4);

	this.addChild(this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10.4,-14.9,20.8,29);


(lib.xespeiyou_com__1_88_26421 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFE469").s().p("AgDAHIADgOQAAAAAAABQAAAAAAAAQABAAAAAAQAAABABAAQACADAAACQAAADgCACQgCACgDAAg");
	this.shape.setTransform(-8.9,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF8510").s().p("AgNAYQgCgGABgHQgCAMgCADIADgTIAAAAQAEAAACgCQADgCAAgDQAAgCgDgDQAAgBAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAIABgIIAEgIQAFgJAEABQAHAAAAAIQABAIgOAJIAHgEQAFgCADAAQAIAAAAAHQAAAFgGAAIgJAAIgGAAIAMAEQAHADAAAIQAAADgDACQgDABgDgBIgGgEIgFgHIADAPQABAFgBACQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgHAAgCgIg");
	this.shape_1.setTransform(-7.7,-0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(0.5,1,1).p("AAmgXQACACACABIADACQgEAPgUAKQgXAQgbABQgNAAgCgLQATgBAZgLQAZgJANgPg");
	this.shape_2.setTransform(-1.8,-12.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgsANQATgBAZgLQAYgJANgPIAFADIADACQgEAPgVAKQgWAQgbABIgBAAQgMAAgCgLg");
	this.shape_3.setTransform(-1.8,-12.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(0.5,1,1).p("AhFACQgIAcgDAaQgDAUABAKQAAANAhACQAWADAbgDQAWgBANgCQASgDANgFQAJgEADgCQAFgFAAgIQABgKgIgvQgIgxgCgMQgDgSgKgRQgJgPgJgEQgEAEgEAEQAPAVAJAcQAJAcAAAUQABAUgNANQgNAMgWABQgrABgBgkQgBgbAKg4QgHACgFABQgGABgFAAQgPAigJAggAgihBQgIAqgFALQgHAMgPACAAbhdQgMAKgRAIQgLAEgJAD");
	this.shape_4.setTransform(-1.3,-4.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgaAlQgBgdAKg2IASgHQATgIAMgKQAPAVAJAcQAJAaAAAWQABAUgNANQgNAMgWABIgEAAQgnAAgBgjgAgogqIALgBQgIAqgFAJQgHAOgPACQAJggAPgig");
	this.shape_5.setTransform(-1.8,-6.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFC943").s().p("AgxBlQghgCAAgNQgBgKADgUQADgaAIgcQAPgCAHgMQAFgLAIgqIAMgDQgKA4ABAbQABAkArgBQAWgBANgMQANgNgBgUQAAgUgJgcQgJgcgPgVIAIgIQAJAEAJAPQAKARADASIAKA9QAIAvgBAKQAAAIgFAFIgMAGQgNAFgSADQgNACgWABIgaABIgXgBg");
	this.shape_6.setTransform(-1.3,-4.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFC943").s().p("AgxBlQghgCAAgNQgBgKADgUQADgaAIgcQAJggAPgiIALgBIAMgDIAUgHQARgIAMgKIAIgIQAJAEAJAPQAKARADASIAKA9QAIAvgBAKQAAAIgFAFIgMAGQgNAFgSADQgNACgWABIgaABIgXgBg");
	this.shape_7.setTransform(-1.3,-4.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(0.5,1,1).p("ABOgKQACgCABgCQgBgEgBgDIgBAAQgGgPgDgMQgCgEgBgEQhNAahOgWQgCAIgBAIQgEASgBASQAAACAAAFQACABACACQABAAAAAAQAFABAFABQAMACAJgDQAEgBAFgCQADACAHACQAIACAGAAQAJAAAIgEQAFgCACgDQADACAEABQAGACAFAAQAJgBAIgDQAIgEACgEQAEACAFAAQAHAAAFgBQAIgCAGgFQABgBABgBgAhdAKQAAAIAAAMQABAPACAKIAAAAQAGABAGAAQAPAAAIgBQAFgCAFgDQAEADAIACQAHACAIgBQAJAAAIgEQADgCADgCQADACAFABQAGABAGAAQAKAAAHgEQAJgDADgHQADACAHAAQAGAAAFgCQAKgCAHgGQAEgDACgEQgLgNgJgU");
	this.shape_8.setTransform(0,9.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FA7B00").s().p("AgjAgQgIgCgEgDIgKAFQgIABgPAAIgMgBIAAAAQgCgKgBgPIAAgSIABAAIAKACQAMACAJgDIAJgDQADACAHACIAOACQAJAAAIgEQAFgCACgDQADACAEABQAFACAFAAQAKgBAHgDQAIgEADgGIAJACQAGAAAFgBQAIgCAGgFIACgCQAKAWALALQgCAEgFADQgHAGgJACQgGACgGAAQgGAAgEgCQgDAHgIADQgIAEgJAAIgMgBIgJgDIgFAEQgIAEgJAAIgEABIgLgCg");
	this.shape_9.setTransform(0.2,11.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFC943").s().p("AghAZQgHgCgDgDIgJAEQgJACgMgBIgKgDIgBAAIgDgCQABgRAEgRQASAIAzAAQAXAAAUgDQAagFAWgLIAKAZIgCABIgCABQgGAFgIADIgLABQgGAAgEgCQgCAGgIAEQgHADgJAAQgGABgFgCQgGgBgDgDQgCADgEACQgHAEgJAAIgDAAQgFAAgGgBg");
	this.shape_10.setTransform(-1,7.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFE469").s().p("AghAQQgHgBgDgDIgJADQgKADgMgCIgJgCIgBAAIgEgDIAAgJIADACIABAAIAKACQAMACAIgDIAKgDQADACAHACQAHACAHAAQAIAAAIgEQAEgCACgCQADABAGACQAFABAGAAQAJAAAHgDQAIgDACgFQAEACAFAAIAMgBQAIgDAGgFIACgBIABgCIABAAIADAHIgEAFIgCABQgGAEgIABQgFABgHABIgJgCQgCAFgIAFQgIADgJAAQgFABgFgCQgGgCgDgCQgDADgDACQgHAEgJAAIgOgCg");
	this.shape_11.setTransform(-0.8,9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E9AA0A").s().p("AhQAFIAEgOQBMAUBOgXIADAIQgXAJgaAFQgTADgYAAQgyAAgTgIg");
	this.shape_12.setTransform(-1.2,5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FA7B00").s().p("AghA3QgIgCgDgDIgKAFQgJABgPAAIgLgBIgBAAQgCgKAAgPIAAgUIgFgDIAAgHQABgSAEgSIADgQQBOAWBMgaIAEAIIAJAbIABAAIACAHIgDAEQAJAUALANQgCAEgFADQgGAGgKACQgGACgGAAQgGAAgDgCQgDAHgJADQgHAEgKAAIgMgBIgIgDIgFAEQgJAEgJAAIgEABIgLgCg");
	this.shape_13.setTransform(0,9.4);

	this.addChild(this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10.8,-16.1,21.7,32.2);


(lib.xespeiyou_com__1_87_51262 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.3,1,1).p("AAygmIgHAwQgDABgIABQgFAAgGAAQgHAAgHABQgHAAgGgBQgFAAgFAAIgJgBIgYg0AAUAWIAAAEIAAAMQgBAEgJAAQgIAAgCgEIgDgNIgBgEIgCgJAAVAMIgBAKAgEAVIAYAB");
	this.shape.setTransform(0,1.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgKABIgBgCIAXABIAAACg");
	this.shape_1.setTransform(0.8,3.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FCB5A0").s().p("AgKADIgDgGIANAAIAOAAIgBAHg");
	this.shape_2.setTransform(0.7,2.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#321970").s().p("AAAAxIgCgOIAWABIAAAMQgBAEgJAAIgCABQgHAAgBgEgAgGAXIgKgBIgJgBIgYg0QASgWAfABQAhACARAXIgHAwIgLACIgMAAIgNAAIgNAAg");

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6,-5.3,12,11.6);


(lib.xespeiyou_com__1_85_40753 = function() {
	this.initialize();

	// 图层 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AmvCaQBIgFBKgEIAAgGIh1AEIgGgwQA9gBA9gDIAAgKQg6gDgkgIQg0gRAAglQAAgmAbg0IghADIgDg3QBBgGBFgDIgCgJQguADguAHIgEg2QCegSCdAAIAGA1QhOAAhIADIABALQBZgDBcAAIAHA2QhbAAhbAEIAAAJQA/AAAYAFQAqAHAVAQQAWAOABAkIAAAJQAAAagaARQgeAZhoABIABAHIBugGIAHAvIhzAHIABAHQBNgDBRAAIAEA7Qi7AAi+AMgAjaAgQAbAAAUgCQAUgBAMgIQAKgFAAgPQAAgTgYgGQgPgDg3AAIAAABQAAAHACAGIAhACIgDAkIgcgCIABAJgAlPAYQANAGAfACIgBgKIg2gBIALADgAllgVIAAAEIA/ACIgBgKQggABgeADgAmEhLIAaAGIA9gDIgBgIQgrACgrADgAC0DLQg9AAgrgZQguggAAg6QAAg2AUhCIBQATQgUAuAAAnQAAAgAUAPQAUARAsAAQAPAAAQgCIg4gMQAIgtAPgrIgaABIgGhDQA5gBA4gDIAFg3IgpgBQgIAZgEAbIhGgPQAOhKAchCIBEAPQgFAJgCAMIAdAAQAEgaAGgZIBGAHIgJAyQAhADAfAEIgHBEQghgEgggDIgFAsIBXgHIAHBDQgiADggABQgIAUgBARQAAANAOABQAKAAAsgLIAKA7QguALgdAAIgIAAQgaAAgUgRQgQgOAAgXQAAgZAGgZIgkACQgSAxgLA0QAggDAjgKIAOBGQg9AOg6AAgAArhNIAXhJQA0AJAkASIgXBJQgsgTgsgIg");
	this.shape.setTransform(42.6,-0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0D6DA6").ss(4,1,1).p("AjpiMQBZgDBcAAIAHA3QhbAAhbAEQAAAEAAAGQA/AAAYAFQArAGAUAQQAXAPAAAkIAAAIQAAAagaARQgeAZhoABQABAEAAADQA3gCA4gEIAGAvQg5AEg5ADQAAADABADQBMgCBRAAIAEA7Qi7AAi+AMIgGg5QBIgGBKgDQAAgEAAgCQg7ACg7ABIgFgvQA9gBA8gDQAAgFAAgFQg5gCgkgKQg1gPAAgmQAAgmAcgzQgQABgRABIgEg3QBCgGBFgEQgBgGgBgDQguADgtAHIgFg2QCfgRCcAAIAGA1QhOAAhIACQABAGAAAFgAkthIQAAgGgBgDQgrACgrAFIAaAFQAggCAdgBgAlmgRQAhABAeABQAAgGAAgEQggABgeADQgBADAAABgAjfgaQAAAHACAGQARABAQABIgDAkQgPgBgMgBQAAAGAAAEQAbgBAUgCQAUgBANgIQAJgFABgNQAAgUgZgHQgPgDg3AAgADFjDIBEAPQgFAJgCALQAOAAAPABQAEgaAGgZIBGAHQgEAYgFAaQAiACAeAFIgHBDQghgEgggCQgDAWgCAWQAtgDAqgEIAHBDQghADghABQgHAVgBAQQAAANANAAQAKAAAsgJIALA6QgvALgdAAIgIAAQgaAAgUgQQgQgPAAgXQAAgZAGgaQgSACgSABQgSAxgKA0QAfgDAjgJIAPBEQg+APg5AAIgVAAQg9AAgrgZQguggAAg6QAAg2AVhBIBQASQgVAuAAAmQAAAhAVAQQATAQAsAAQAPAAAQgCIg4gMQAIgtAPgsQgNAAgMABIgHhBQA5gBA5gEQACgcACgaQgVgCgUAAQgIAZgEAbIhGgPQAOhKAchCgACah8IgWBLQgsgTgtgIIAXhLQA0AJAkASgAlOAYQAMAGAgACQgCgGAAgEQgbgBgbAAQAEACAIABg");
	this.shape_1.setTransform(42.6,0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#620202").s().p("AmvCZQBIgFBKgDIAAgGIh1ADIgGgvQA9gBA9gEIAAgKQg6gCgkgJQg0gQAAgmQAAglAbg0IghACIgDg2QBBgGBFgEIgCgJQguAEguAGIgEg2QCegRCdAAIAGA1QhOAAhIACIABAMQBZgEBcAAIAHA3QhbAAhbAEIAAAKQA/AAAYAEQAqAHAVAQQAWAPABAkIAAAIQAAAagaARQgeAZhoAAIABAHQA3gBA3gFIAHAwQg5AEg6ADIABAGQBNgCBRAAIAEA6Qi7AAi+ANgAjaAhIAvgDQAUgBAMgIQAKgFAAgNQAAgUgYgIQgPgDg3AAIAAABQAAAIACAGIAhACIgDAkIgcgCIABAKgAlPAYQANAGAfACIgBgKIg2gBQAEACAHABgAllgVIAAAEIA/ACIgBgLQggACgeADgAmEhKIAaAEIA9gDIgBgIQgrACgrAFgAC0DLQg9gBgrgYQguggAAg7QAAg1AUhBIBQASQgUAuAAAmQAAAhAUAQQAUAQAsAAQAPAAAQgCIg4gMQAIgtAPgsIgaABIgGhBQA5gCA4gEIAFg1QgVgCgUAAQgIAYgEAcIhGgPQAOhKAchCIBEAOQgFAKgCALIAdABQAEgaAGgZIBGAHIgJAyQAhADAfAEIgHBDQghgEgggCIgFAsIBXgHIAHBDQgiADggABQgIAUgBARQAAANAOAAQAKAAAsgJIAKA6QguALgdAAIgIAAQgaAAgUgRQgQgOAAgYQAAgZAGgZIgkADQgSAxgLA0QAggEAjgIIAOBEQg9APg6AAgAArhMIAXhLQA0AKAkARIgXBLQgsgUgsgHg");
	this.shape_2.setTransform(42.6,0.3);

	// 图层 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#007BB1").s().p("ApKCQQjoAAAAjZIAAhGQACBZAuAxQA6A/B+AAISVAAQCSAAA3hWQAcguAEhFIAABGQgBDZjoAAg");
	this.shape_3.setTransform(40.8,17.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#006DBB").s().p("AsyB/IAAiuQAAjaDoAAISVAAQDoAAABDaIAACuQgEBGgcAtQAFgXAAgcIAAjmQAAjCjEAAIydAAQjDAAAADCIAADmQAAApAJAiQgugygChZg");
	this.shape_4.setTransform(40.8,-9.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00BAE7").s().p("ApQEaQh/AAg5hAQgJgiAAgpIAAjmQAAjCDDAAISdAAQDDAAAADCIAADmQAAAcgEAXQg4BYiRAAgAp1j7IALABIABAAIABgCIgNABg");
	this.shape_5.setTransform(41.4,-4.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3DDDF7").s().p("AAEAAIgJAAIALAAIgCABIAAgBg");
	this.shape_6.setTransform(-21,-30.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#004E79").ss(4,1,1).p("AJLlVIyWAAQjoAAAADaIAAD1QAADcDoAAISWAAQDpAAAAjcIAAj1QAAjajpAAg");
	this.shape_7.setTransform(41.2,-1.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#508A07").s().p("ApLFWQjoAAAAjcIAAj1QAAjaDoAAISWAAQDpAAAADaIAAD1QAADcjpAAg");
	this.shape_8.setTransform(41.2,-1.7);

	this.addChild(this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-42.8,-37.9,168.1,72.5);


(lib.xespeiyou_com__1_84_20702 = function() {
	this.initialize();

	// 图层 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFCC").s().p("ADSDKQAIhGAQg+IgngNIgIAeIgggKIAIBfIhLAHIgIhhIggAbIglg8QAfgfAfgWIgCgaIgoAIIgHhKQAUgGAWgCIgFg3IBLgHIAFA3IAogBIAJBKIgrABIACAkQAbAFAUAIIANgdIgNACIgGhFQAagEAZgCIAWgtIgyAHIgHhCQBogRBhgCIAHBDQgiAAggACIgVAwQA3gGA3AAIAIBHIgXAAQATAYARAXIgyAoIgJgQIAXCjIhDAIQgRhlgLhkIAugFIgdgjIgyAEQgMAagLAZIArAJQgYBUgNBjgAkvDTQg+AAgsgaQgwghAAg7QAAg3AYhEIBTATQgZAwAAAnQAAAhAVARQAUAQAuAAQAyAABDgSIAOBGQhBARg7AAgAixhPQhEAEhDAKIgIhNQBBgKBGgFIgGgzIBQgIIAFA4IA6gBIAIBNIg5ABIAVDPIhPAIIgWjTgAk4AFIAxgwQArAbAdApIgyAzQgegigpglgAnAhHIAXhLQA1AHAlANIgXBOQgtgQgtgHg");
	this.shape.setTransform(41.9,-2.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#425124").ss(4,1,1).p("AlmgwQgtgQgtgHIAXhLQA1AHAlANgAk4AHIAxgxQArAbAdAoIgyAzQgeghgpgkgAi/jQIBQgIQADAcACAcQAdgBAdAAIAIBOQgeAAgbABQAKBhALBuIhPAIQgNh0gJhgQhEAEhDALIgIhOQBBgKBGgEQgDgbgDgZgAGYA4QgFgIgEgHQAKBNANBWIhDAIQgRhkgLhnIAugEQgPgSgOgQQgaACgYABQgMAagLAZIArAJQgYBUgNBjIhDgPQAIhEAQg/IgngNIgIAeQgRgFgPgFQAEAuAEAwIhLAIQgFgzgDguQgQANgQAPIglg+QAfgfAfgXQgBgMgBgMQgUADgUAEIgHhLQAUgFAWgCQgDgcgCgbIBLgHQADAbACAcQAUgBAUAAIAJBLQgWAAgVABQABASABARQAbAFAUAHQAHgMAGgPQgGABgHABIgGhFQAagFAZgCQALgYALgVQgZAEgZADIgHhDQBogQBhgDIAHBEQgiAAggADQgLAXgKAXQA3gFA3AAIAIBHIgXAAQATAXARAYgAl3BMQAAAjAVAPQAUAQAuAAQAyAABDgRIAOBGQhBARg7AAIgWAAQg+AAgsgaQgwghAAg8QAAg3AYhDIBTASQgZAwAAAng");
	this.shape_1.setTransform(41.9,-1.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFCC").s().p("ADSDJQAIhEAQg+IgngOIgIAfIgggKIAIBeIhLAHIgIhhIggAcIglg9QAfgeAfgYIgCgXIgoAGIgHhLQAUgFAWgCIgFg3IBLgHIAFA3IAogBIAJBLIgrABIACAjQAbAFAUAHQAHgMAGgPIgNACIgGhFQAagFAZgCIAWgtIgyAIIgHhEQBogRBhgCIAHBFQgiAAggACIgVAuQA3gEA3AAIAIBGIgXAAQATAXARAZIgyAmIgJgOIAXCjIhDAIQgRhkgLhnIAugEQgPgRgOgQIgyACQgMAagLAZIArAKQgYBTgNBigAkvDUQg+AAgsgaQgwghAAg8QAAg2AYhDIBTASQgZAuAAAoQAAAjAVAPQAUAQAuAAQAyAABDgRIAOBGQhBARg7AAgAixhPQhEAEhDALIgIhOQBBgKBGgEIgGg0IBQgHIAFA3IA6gBIAIBOIg5ABIAVDPIhPAIIgWjUgAk4AHIAxgxQArAbAdAoIgyAzQgeghgpgkgAnAhHIAXhKQA1AGAlAOIgXBOQgtgRgtgHg");
	this.shape_2.setTransform(41.9,-1.3);

	// 图层 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#508A07").s().p("ApECPQjmAAAAjXIAAhGQAEBZAsAxQA6A9B8AAISIAAQCRAAA3hVQAbgtAEhFIAABGQAADXjnAAg");
	this.shape_3.setTransform(40.2,17.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.149)").s().p("AgVABIAOgBIAcABg");
	this.shape_4.setTransform(97,46);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#84C537").s().p("ApKEXQh8AAg6g/QgJghAAgqIAAjjQAAjADBAAISRAAQDBAAAADAIAADjQAAAegEAWQg2BWiRAAg");
	this.shape_5.setTransform(40.8,-4.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#638C2E").s().p("AsqB9IAAirQAAjYDmAAISIAAQDnAAAADYIAACrQgEBGgbAtQADgWAAgeIAAjjQAAjAjBAAIyQAAQjBAAAADAIAADjQAAAqAJAhQgsgxgEhZg");
	this.shape_6.setTransform(40.2,-9.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#3C4900").ss(4,1,1).p("AJElRIyIAAQjmAAAADYIAADxQAADaDmAAISIAAQDnAAAAjaIAAjxQAAjYjnAAg");
	this.shape_7.setTransform(40.2,-1.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#508A07").s().p("ApEFSQjmAAAAjZIAAjyQAAjYDmABISIAAQDngBAADYIAADyQAADZjnAAg");
	this.shape_8.setTransform(40.2,-1.8);

	this.addChild(this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-42.9,-37.6,166.3,83.7);


(lib.xespeiyou_com__1_83_55688 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.3,1,1).p("ABFgQQgfgegkgLQgigLgkALIAOBXQAQAVAdAJQAbAIAWgJg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#321970").s().p("AgJA8QgdgJgQgVIgOhXQAkgLAiALQAkALAfAeIgdBLQgLAFgOAAQgMAAgMgEg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8,-7.4,16,14.9);


(lib.xespeiyou_com__1_80_89975 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.3,1,1).p("AAZgwQAAAkgIAHQgBAAAAABIgBAEIgBAEQgBAFgCACIgBABQgBABgBAAQgFACgDAAQgFAAgEgBQgDAAgBgBQgBAAAAgBQgCgBgBgEIAAgFQAAgDAAgCQAJAFALgCQAIgBAFgDAAKAMQAAADgBACQgCAMgCAJQgEANgDgCQgGgCgCgQQgBgCgBgJQAAgEgBgDAgRgDQAAAAgBAAQgFgEgBgNQAAgIABgU");
	this.shape.setTransform(0,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCB5A0").s().p("AAAASQgGgCgCgQIgDgJIAAgHIAEABIAIABQAEAAAFgCIACgBIgCAFIgDATQgDALgEAAIAAAAg");
	this.shape_1.setTransform(-0.2,3.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFA146").s().p("AgMAEIgEgCIAAgDIAEABQAFABAHgBQAHAAAGgCIADgDIgBAFIgCACQgGADgHABQgGgBgGgBg");
	this.shape_2.setTransform(-0.1,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgJAkIgEgBIgBgBIgDgFIAEACQAFABAIABQAGgBAFgDIADgDQgBAFgCADIgBAAIgCABQgFACgDAAIgJgBgAgOAZIgDgBIAAgHIAAABIABAAQAGAEAIAAIAAAAIAAAAIAFAAQAIgDAFgCIgBADIgDADQgGADgGAAIgHABIgHgCgAgCAWQgIAAgGgEIgBAAIAAgBIgBAAQgFgEgBgNIABgaQAHgLAQABQAQAAAJAKQAAAigIAHIgBACQgFACgIADIgFAAIAAAAIAAAAgAAQARg");
	this.shape_3.setTransform(0,-1.7);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3.5,-5.5,7.1,12);


(lib.xespeiyou_com__1_79_78692 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.298)").s().p("AjrAmQhigPgBgXQABgWBigPQBhgQCKgBQCLABBiAQQBhAPAAAWQAAAXhhAPQhiARiLgBQiKABhhgRg");
	this.shape.setTransform(33.5,5.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,67,11);


(lib.xespeiyou_com__1_78_88887 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AhVBvQA4ArBOgCQBOgBAugoIAQjTQhkgzhfAAQhlgBhRA4g");
	this.shape.setTransform(18.9,15.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#522B10").s().p("AhVBvIhnjPQBRg4BkABQBgAABjAzIgPDTQgvAohNABIgFAAQhLAAg2gpg");
	this.shape_1.setTransform(18.9,15.3);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,39.8,32.6);


(lib.xespeiyou_com__1_76_67490 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAahkQgBACAAACQgWA9gDBFQgDA1ADASQABAEgMADQgOACAAgDQAAg8ADgaQAGg8AThEQABgCABgCQAAgCABgC");
	this.shape.setTransform(4.9,28.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgZBvQAAg8ACgaQAHg8AThEIABgEIACgEIAKAFQAKAEAAABIAAABIgCAEQgVA9gDBFQgDA1ADASQABAEgNADIgJAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAg");
	this.shape_1.setTransform(4.9,28.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AiOhIQgRAQgMAOQgNAPgDADQgIAKgEALQgCADgCARQgCAOAAADQAAAQAFAIQADAEAEADQABAAABABQAGADASAAQAkAAAugXQAugXAlAAQA+AAAnAyQAKANAOAWQAKAPAJAAQAAAAABABQAUABAWgcQASgWACggQABgcgMgdQgLgdgQgPQgOgOgTgKQgcgOgmgGABFhFQAEAAADABQAQABAMAEQAPAFALAJQARAOALASQADAHAHAKABDh7QAAABABAUQAAADAAAEQAAAPABALAiOgPIAAAAQARgKANgGQAogUAngHQAlgHAfgDQAUgBAOAAAiOhIQABAHABAKQABAJABAFQAAADAAADQAAAHgDAJQAAACgBACAiQhOQAAACACAEAitADQAHgDAFgDQAMgIAHgE");
	this.shape_2.setTransform(20.6,13.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FCB5A0").s().p("AhnA3QADgIAAgIIAAgFIgCgPIgCgQIgCgFQBahTB5AnIABAVIAAAHIABAYQgOgBgTACQggACgnAIQglAHgoATQgNAGgRAKIAAABIABgFg");
	this.shape_3.setTransform(16.8,6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ACPBxIgBAAQgJAAgKgQQgOgWgKgMQgngyg+AAQglAAguAXQguAXgkAAQgSAAgGgDIgCgCIgHgGQgFgJAAgPIACgSQACgOACgFQAEgLAIgLIAQgSQAMgNARgQIACAQIACAPIAAAFQAAAIgDAIIgBAFIgTAMIgMAHIAMgHIATgMIAAgBQARgKANgGQAogTAngHQAlgIAfgCQAUgCAOABIAHAAQAQACAMADQAPAFALAKQARAOALASIAKASIgKgSQgLgSgRgOQgLgKgPgFQgMgDgQgCIgHAAIgBgaIAAgHQAmAFAcAOQATALAOAOQAQAPALAcQAMAdgBAdQgCAggSAWQgVAagTAAIgCAAg");
	this.shape_4.setTransform(20.6,14.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("rgba(0,0,0,0.502)").ss(1,1,1).p("AiHAnIAcACQBIAABJgdQBAgWAigf");
	this.shape_5.setTransform(18.3,7.6);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,0,43.2,40.5);


(lib.xespeiyou_com__1_74_15533 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ABGA/QgPh3gUgoQgPgfglACQgqABgIAyIgBAhQgCAoACAjQACAaACAWQAXAtAvgBQA1AAALg/g");
	this.shape.setTransform(7,12.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhABSIgEgwQgCgjACgoIABghQAIgyAqgBQAlgCAPAfQAUAoAPB3QgLA/g1AAIgCAAQguAAgWgsg");
	this.shape_1.setTransform(7,12.7);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,16.1,27.4);


(lib.xespeiyou_com__1_73_81444 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AglgIQgBgBgCgBQgOgJgHgjQgFgUgDgiAgSAlQgEgBgBgCQgEgDgEgKIgDgOIAAgBQgDgJAAgFQAcALAfgKQAVgIAMgLIAAAMIAAAOQAAAOgEAGQgBABgDACQgCACgEACQgMAIgNABQgPADgKgBQgGgBgDAAgAAvAXQAAAIgBAHQAAAggDAZQgFAmgQgEQgPgDgMgqQgCgEgHgbQgCgIgCgIABCiAQALBNgUAWQgBACgBAB");
	this.shape.setTransform(7,17);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCB5A0").s().p("AAIA0QgNgDgOgpIgJgdIgEgRIAJABQAMACANgDQANgCAMgHQAEgCACgDQAAAJgBAHQAAAfgDAXQgFAjgNAAIgDgBg");
	this.shape_1.setTransform(8.4,24.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFA146").s().p("AgfAUIgKgEIgDgOIAAAAIAJACQAQAEATgGQAWgDAPgLIAIgHIAAAQIgIAHQgNAJgVAFQgMACgMAAIgKAAg");
	this.shape_2.setTransform(8,17.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgJBnIgJgBQgEgBgBgBQgEgEgEgJIAKADQAPACATgEQAVgEANgKIAIgIQAAANgEAGIgEADQgCADgEACQgMAHgNACQgKACgHAAIgIgBgAgZBLIgJgDIAAAAIAAAAQgDgMAAgFIgDgCQgOgIgHgjQgFgSgDgjQANg1AugGQAsgGAgAuQALBKgUAWIgCAEQgMAKgVAJIgDABQgOAEgLAAIAAAAIgBAAQgOAAgNgFIgBgBIAAAAIgBAAIgBgBIABABIABAAIAAAAIABABQANAFAOAAIABAAIAAAAQALAAAOgEIADgBQAVgJAMgKIAAALIgIAIQgPALgWAEQgLAEgMAAIgMgBg");
	this.shape_3.setTransform(7,10.4);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,0,16.1,31);


(lib.xespeiyou_com__1_72_79091 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("A+VnOQABgYABgYQAFhTAMhNQAGglAIglQBRl4EQjrQBAg4BJguQB5hLCRgxQBfgfBagRQAVgDAUgDQAOgBANgCICVgRQCOgGCMAcQCKAdCFAkQADAAADABQBaAaBKgKQCBgpCFgWQCFgUCIARQCPANCHAtQFTB3EdFEQA1A8ArBDIABABQABABAAABQABACABACQACADABABQATAkATAjQAfA+AfBAQAAADACACQB2EABMEaQB/HSAKIeQAEDggQDsQgHBqgLBuQgKBXgLBYQi1ARjQgMQiegIlwguQlBgqiwAAQlRAAmkBAQj+AmgqAGQicATh0AAQiWAAhWgOQgmgHgkgJQgMgFgLgGQgCgRgBgQQgCgbAAgXQAAg6AGhJQAAgBABgBQAEguAHgzQAEgeAFghQADgUAEgUQAOhVAMg1QgKAGgOAHQgVAKgNAAQgBAAgBAAQgdgOAAg7QAAgtANghQAEgIADgHIAAgBQAEAAAEgBQAwgKAtgNQCmgzBuhnQBPhJAnhZQBDoslxkDQmikImaCvQhTAzgNA0QgYhVAHia");
	this.shape.setTransform(210,159.7,1.082,1.11,0,0,-2.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFC22C").s().p("AwsBiQhogmhMhFQAEgeAFggQA4AWBSAVQC+AtCzgPQCLgIC5gbQBrgODdgjQGqg9GKgCQBtgBFGAsIBKAJQjbBPkFALQgRAArDBKQq2BLhBAAQjZAAiJgwg");
	this.shape_1.setTransform(218.8,305.1,1.082,1.11,0,0,-2.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF7F1C").s().p("A1JFcQgcgSAAg7QAAhLAlhcQAohfBDhRQCjjHDYgbIBfACQAbgCAeAAQA0AAA2ASQAcAJAcAOQBzA4AABjQAABnhpBHQgcAUgmAQQhTAnh/AcQhtAwhsAtQjWBZg2AAQgpAAgRgJgAI4CEQgagYgKgeQgGgTgBgXQAAhLAvhMQAng/BFg/QAvgqA1giQALgFALgEQBKgeBuAAQB9AAB8A9IANAGQAmAUAdAYQAWASAPAVQAWAhAGAjQACAMAAAMIgBARQgJB3iJBVQgTAMgVAKQh5A7ikAJIg0ABQjVAAhNhCg");
	this.shape_2.setTransform(174.7,32,1.082,1.11,0,0,-2.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F0AF0F").s().p("A1wBnQhBgOhXgcIgKgDIABgCQAFgvAGgxQBMBFBoAlQCJAxDZAAQBBAAK4hLQLBhKARAAQEFgLDbhPQEQAiCdgCQAlABBsgSIAagDQgIBqgLBsQhFAChQAAQi2AAj3giIhFgLQkjgsjWgBQjdAAoYA3QobA4inAAQi/AAh6gWg");
	this.shape_3.setTransform(250.6,307.2,1.082,1.11,0,0,-2.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF661C").s().p("AwMV4QhSgUg4gXIAHgoQAPhVALg1QgKAGgOAHQgVAKgMAAIgDAAQgcgOgBg7QABgtANghIAGgPIAAgBIAIgBQAwgKAugNQAogKAxgKQCGgjBUhDQCHhrA5hdQBAhqAAiLQAAi3hFilQhCich5h4Qh4h5ibhCQidhDisAAQgMAAiTAKIh7AIIglACQhcAAgxgqQgngigNg/QgHghAAgpQBRl4EPjrQBBg4BIguQCWg8AkgLQBNgZCFAAQAxAAAvADQDxAMDFBIIA7AYQAcAMAbANIAoAVQCCBeB0B8QAqAtAtAaQAPAJAOAHQBVAmBdgeQAKAeAaAYQBNBBDVAAIA0gBQCkgIB5g7QAVgKATgMQCJhVAJh5QDSBpFFFiIAVAZQB2EABNEaQB+HSALIeIgmAvQjtEalRB4IhKgKQlGgrhtABQmKABmqA9QjdAjhrAPQi5AaiLALQgrAEgsAAQiKAAiQglgA4sxeQhDBTgoBfQglBbAABMQAAA6AcATQARAJApAAQA2AADWhaQBsgsBtgwQB/gcBTgnQAmgRAcgTQBphHAAhpQAAhkhzg3QgcgOgcgJQg2gSg0AAQgeAAgbABIhfgBQjYAbijDHg");
	this.shape_4.setTransform(211.8,146.6,1.082,1.11,0,0,-2.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F74C0D").s().p("Aw6ZrQgmgHgkgJIgXgLIgDghQgCgbAAgXQAAg6AGhJIAKAEQBWAcBCANQB6AXC+AAQCoAAIZg4QIag3DdAAQDWAAEiAtIBGALQD3AiC2AAQBQAABFgDIgVCvQi1ARjQgMQiegIlwguQlBgqiwAAQlRAAmkBAIkoAsQicATh0AAQiWAAhWgOgAUyTDQFSh4DskaIAmgvQAEDggQDsIgaAEQhrARglAAIgNAAQicAAkFgggAswLkQBPhJAnhZQBDoslxkDQmikImaCvQhTAzgNA0QgYhVAHiaIAAAAIACgwQAFhTAMhNQAGglAIglQAAApAIAhQANA/AnAiQAwAqBdAAIAlgCIB6gIQCTgKAMAAQCsAACeBDQCbBCB4B5QB5B4BCCeQBFCjAAC3QAACLhABqQg5BdiIBrQhTBDiGAjQgxAKgpAKQCmgzBuhngAY2shQlFlijShpIABgRQAAgMgCgMQgGgjgWghQgPgVgWgSQgdgYgmgVIgNgGQh8g8h9AAQhuAAhLAeQgKADgLAGQg1AigvAqQhGA/gmA/QgvBMAABNQAAAWAHAUQheAehUgmQgQgHgOgJQgsgagqgtQh0h8iDheIgngVQgbgNgcgMIg7gYQjFhIjxgMQgvgDgxAAQiFAAhNAZQgkALiWA8QB5hLCRgxQBfgfBagRIApgGIAbgDICVgRIiVARIgbADIgpAGIApgIIAbgFICVgNQCOgGCMAcQCKAdCFAkIAGABQBaAaBKgKQCBgpCFgWQCFgUCIARQCPANCHAtQFTB3EdFEQA1A8ArBDIABABIABACIACAEIADAEIAmBHQAfA+AfBAIACAFIgVgZg");
	this.shape_5.setTransform(210,159.7,1.082,1.11,0,0,-2.4);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.2,-23.6,422.4,372.3);


(lib.xespeiyou_com__1_71_46454 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AqAzWQhBAng6AvQj2DHhIFAQgdB6gCCNIAAAAQARALANAAQAOAAAvAAQAzAABcgPQBcgPBqAAQE8AADWDwQBcBoAzB/QAiBbAKBYQAEAiAAAhQAACviKB6QhjBXiWArQgoALgsAJQgDAAgDABIAAAAQgEAGgDAHQgMAcAAAmQAAAxAaANQABAAABAAQALAAATgIQANgGAJgGQgLAugMBIQgEARgCARQgFAbgDAaQgHArgDAnQgBABAAABQgGA9AAAyQAAATACAXQABAOACAOQAKAFALAFQAgAIAiAFQBNAMCHAAQBqAACKgRQARgCA3gHQAKgCAKgBQAlgFAxgHQACAAACgBQBNgGBGgMQAMgCAMgCQB7gWBpgkQgOg5gSg6QgDgIgDgIQgTg3gXg3QgKgYgKgXQLknYlGybQiksKtwAmQlCAPkgCSg");
	this.shape.setTransform(111.4,140.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFC22C").s().p("Al3A4QhegfhEg6QADgaAFgbQAzASBJASQCrAoCigMQBBgFBKgIQA/gHBGgJQCQgbCXgSQAYA3ATA1QiVAqipAWIAAgBIgGAAIh/AMIgUACQhlAIgWABQjDAAh8gqg");
	this.shape_1.setTransform(123.8,254);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F0AF0F").s().p("AmPAzQg8gLhNgYIgJgDIABgCQADglAHgrQBEA8BeAeQB7ApDEAAQAVAABlgJIAUgCICAgLIAGgBIAAABQCpgVCUgpIAGAQQidAjimAVIgGABIiAAKIgUABQh7AIhAAAQisAAhtgTg");
	this.shape_2.setTransform(123.6,257.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF7F1C").s().p("AmREOQgbgQAAgxQAAhAAjhOQAjhOA+hHQCRioDBgXIBWAAIA0AAQBHAABLAiQBmAvAABVQAABZhdA6QhUA1imAjIjBBOQjABMgyAAQgmAAgNgIg");
	this.shape_3.setTransform(64.1,43.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F74C0D").s().p("Ag2O0QCKh6gBivQABghgEghQgKhZgkhbQgxiAhchoQjWjuk8AAQhqAAhdAPQhbAPgzAAIg9AAQgNgBgRgKIgBAAQADiNAch7QABBlA1AsQAsAkBTAAICQgJICPgJQCbAACPA6QCLA3BtBkQBqBnA8CFQA9CHACCUIAAANQAAB2g7BaQg0BOh3BbQhLA5h5AdIhRARQCWgrBjhXgAN6l1Qh4iihVhcQgYgagYgXQhOhLhVg4QhAgqhEggQj4hzlPAAQh3AAhGAUQggAKiHA0QEgiSE/gPQNzgnCjMLQAJAlAFAnQhdgJhXhpg");
	this.shape_4.setTransform(107.1,107.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF661C").s().p("AlhVFQghgFghgIIgUgKIgDgbQgCgXAAgUQAAgxAGg+IAJADQBNAZA7AKQBuAUCsAAQA+AAB9gJIAUgBIB/gKIAGAAQCmgWCdglQATA6ANA5QhoAkh7AXIgYAEQhHALhMAGIgEABIhWAMIgUADIhIAKQiLAQhpAAQiHAAhOgMgAkoQUQhJgSgzgSIAGghQANhJALgtQgJAGgNAFQgTAJgLAAIgCAAQgagNAAgxQAAgnAMgcIAGgNIAAAAIAHgBQArgIApgMIBRgRQB4geBMg5QB3haA0hPQA7hZAAh3IAAgMQgDiUg8iFQg8iGhrhmQhshmiLg3QiPg6ibAAIiPAIIiQAJQhTAAgsgkQg1gsgBhkQBJlAD2jHQA5gvBCgnQCHgzAggKQBGgUB3AAQFPAAD4BzQBEAgA/AqQBWA3BNBMQAZAXAYAaQBVBcB4ChQBWBqBeAJQgGgngIgmQFHSbrlHYIAUAvQiXASiQAbQhGAJg/AHQhMAJhBAEQglADgnAAQh9AAiCgfgAsRxDQg+BHgjBQQgiBNAABBQAAAxAaAQQAOAIAlAAQAyAADAhNIDDhOQCmgiBUg1QBeg8AAhZQAAhVhngvQhLgjhHABIg0AAIhVAAQjDAWiSCpg");
	this.shape_5.setTransform(112.9,144.3);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,224.8,282.5);


(lib.xespeiyou_com__1_70_28357 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.298)").s().p("AjrAuQhigTAAgbQAAgaBigUQBigTCJAAQCKAABiATQBiAUAAAaQAAAbhiATQhiAUiKAAQiJAAhigUg");
	this.shape.setTransform(33.5,6.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,67,13.3);


(lib.xespeiyou_com__1_69_6699 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.3,1,1).p("AADAfIgBADIgCAMQgCAEgJgCQgIgDgBgEIAAgOIAAgEIAAgJQgFgCgFgBIgJgDIgIg4AAwgTIgUAsQgDAAgIgBQgFgBgGgBIgDAJAAGAWQgGgCgGgCQgIgBgGgDAgUAXIAXAI");
	this.shape.setTransform(0,0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgLAAIABgEIAWAGIgCADg");
	this.shape_1.setTransform(-0.9,3.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FCB5A0").s().p("AgMAAIAAgHQAGADAGABIANADIgCAIg");
	this.shape_2.setTransform(-0.8,2.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#321970").s().p("AgKA2QgJgDgBgEIAAgOIAVAHIgBAMQgBACgEAAIgFAAgAARAeIgLgCIgMgEQgHgBgHgDIgKgDIgIgDIgIg4QAVgSAfAKQAfALAKAaIgTAsIgLgBg");

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5.8,-5.5,11.6,12);


(lib.xespeiyou_com__1_68_68399 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E0E0E0").s().p("AhBD2QA9htAYhlQAdh0gVhdIAAhIIAHgCQATApAGA9QAGArAABBQAABJgcBJQgiBYg8Ayg");
	this.shape.setTransform(9,86,0.419,0.419,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E0E0E0").s().p("AAgDQIAAgaQAAiPgJgnQgLgwhNiwQBBA2AiBfQAhBTAABXQgBAagFAlQgIA1gNAPQgHgHgBgLg");
	this.shape_1.setTransform(5.6,71.7,0.419,0.419,0,0,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#646464").s().p("AnQEKIgEgxQAAhEA5hUQA/hcBig2QBIgnBMgYQBhggB+gSQCHgRBUgmQAwgUBHgqIAGAJQAEAGAAAIQAAAthLAfQg0AWiBAbQiyAkgwANQiFAjhRAtQh7BCgtBlQgRAkgLA0IgQBXIAAACQAAACgIAAQgMAAgFgug");
	this.shape_2.setTransform(29.7,51.4,0.426,0.419,0,0,180,0.4,1.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#646464").s().p("AjLCYQg4hFghhQQgghKAAg8QABhXAjgpQATgVAjgSIAGgCQASgQAVgDIAMgBIAkgBQCdAACZCCQCcCEAACKQAABwgZAuQguBViQAAQixAAiIiqg");
	this.shape_3.setTransform(30.6,14.8,0.523,0.357,0,0,176.8,-0.2,-0.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgEALQgSgPgJgOQAVgUAVARQAVAPAAASIgBANIgCADQgCACgHAAQgIAAgQgTg");
	this.shape_4.setTransform(11,49,0.419,0.419,0,0,180);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCDA8").s().p("AgiAoQgogeABgoQgBgdAPgEQALgDAlADQATAAARADQAcAEAKAQQALAJAAAfQAAAkgKAOQgKAPgbAAQgbAAgigZg");
	this.shape_5.setTransform(13.1,49.9,0.419,0.419,0,0,180);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(0,0,0,0.502)").ss(0.1,1,1).p("AgqhaQAJgCAcAAQAdgBAOADQAtAKAVAjQAVAlgPAqQgNAngnAOQgjAMgogMQgUgFgZgPQgcgQgZgW");
	this.shape_6.setTransform(13.7,50.8,0.451,0.469,0,0,177.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFBF8E").s().p("AgRBXQgUgFgZgPQgcgQgZgWIBJh3QAJgCAcAAQAdgBAOADQAtAKAVAjQAVAlgPAqQgNAngnAOQgSAGgTAAQgUAAgSgGg");
	this.shape_7.setTransform(13.7,50.8,0.451,0.469,0,0,177.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A19E9E").s().p("AhUARQAXgzAOgJIgLAAIh6ASIgNAAQAggYAsgPQAxgRAyAAIAKAAQAvgMA5AhQAyAdAxA2IgCAAQhjgfgMgDIAAAOQADADADAKQACAIAAAFIgCAAQgFgChDgqQgBAAg1AtQg8AxgKAGQACgTAWgxg");
	this.shape_8.setTransform(16.2,57.2,0.419,0.419,0,0,180);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C2C0C0").s().p("AhLGvIACgRQAGguAAggIgChEQgDhAgDgaIgEAAQgBApgQBDQgJAogMAcQgjg2g6hEQhZhpgfg7Qg1hkAAiBQAAgeAKgyQALgyAIgIIghAdQgcAagDAEIgBgkQgEiDBhhxQBviAC4gTQDqgZByDWQArBPAeCIQAgCOgDB1QgEDKhWCaQhUCXitB1IhfAzQgFiGgvhqg");
	this.shape_9.setTransform(18.1,82.5,0.419,0.419,0,0,180);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("rgba(0,0,0,0.502)").ss(0.1,1,1).p("AmvkVQACgEABgEQgBABgCACQgVASgJAIQgJAJgMANQgIgyAGg/QAKhXAvhHQAWgiAcgdQA1g6BKgpQBhg0B0gQQDvgfCQDCQCVDJgIFzQgECqhQCwQg5B8hVBZQh5B/ixA2QAHgUAAgVQAAhCg2hOQgTgahkh3QhRhfglhJQg3hnAAhsQAAgKAAgIQABg0AAgOQADgiAIgcQgHAMgLAVQgBACgBACQgDAHgEAGQgJASgDAGQgBABAAAAQgrhBgChCQgCgzAUg3g");
	this.shape_10.setTransform(20.4,83.6,0.419,0.419,0,0,180);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#777777").s().p("AA+HUQAAhCg2hOQgQgahkh3QhShfglhJQg2hlAAhsIAAgSQALA+AbA3QAqBXBKBjQAvBAAyA7IAsA2QBIBvANBCIAagCQAhgFAjgMQBYgdBLhBQh5B/izA2QAGgUAAgVgAljmSQgCgzAVg3QACAngDAuQAAA3AJAmQAFAYAOAiIgBABQgqhBgDhCg");
	this.shape_11.setTransform(24.4,93.3,0.419,0.419,0,0,180);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#A19E9E").s().p("AhPIRIgug2Qgyg7gvhAQhJhlgrhXQgag3gMg+IABhCQADgiAIgcIgSAhIgCAEIgHANIgMAYQgOgigGgYQgJgmAAg3QAEgugDgnIADgIIgDADIgeAaIgVAWQgIgyAGg/QAKhXAvhHQAWgiAcgdQA1g6BKgpQBhg0B0gQQDvgfCQDCQCVDJgIFyQgECrhQCwQg5B8hVBZQhKBBhYAdQgkAMghAFIgaACQgKhChJhvg");
	this.shape_12.setTransform(20.4,82.2,0.419,0.419,0,0,180);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("rgba(0,0,0,0.502)").ss(0.1,1,1).p("AEuMaQhJgCg8gGQgQgCgPgCQhFgRgnghQgwgqAAhBQAAgFAAgFQAGiHCbhoQCWhjD7gzQAmgHBLgNQA/gKASgFQALgCAJgDQCyg1AViQQAbi8iFjdQhUiLhphdQgKgJgLgJQgDgDgEgDQhUhJhcgmQgMgFgLgEQgVgIgWgGQiCgmioAEQj7AHjWB9Qi+BwiODBQiACuhFDSQhADCAECsQAJE9F3B0QEuBfIlgjQADAAACAAgALkDLQAIBDAeBLQAhBRAFAQQARA2gBAuQgEB1h/BBQh2A+jWAIQgJAAgKAAQgKAAgKAAQgOAAgOAA");
	this.shape_13.setTransform(47.2,35.4,0.419,0.419,0,0,180);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F3AC76").s().p("AAaD9QhHgCg8gGQgbgTgSgYQgbgkgCg0QgKi3Dnh8QA6geBQgeQhiAug5A4QhaBdAACLQAABSAzAzQAbAcAoAMIgbgBg");
	this.shape_14.setTransform(35.6,58,0.419,0.419,0,0,180);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#95755C").s().p("AjcElQhFgRgnghQgzgqAAhBIABgKQAFiFCehoQCWhjD5gzIBxgUQA/gKASgFIACAMQimAoh2ArQhQAdg4AfQjpB7AKC4QACA0AbAkQASAXAbAUIgfgEg");
	this.shape_15.setTransform(32.1,55.9,0.419,0.419,0,0,180);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#414040").s().p("AkkMIQl3h0gIk9QgFisBAjCQBFjSCAiuQCOjBC+hwQDUh9D+gHQCogECBAmQgPgEgRgBQgPgBhVAAQAAgTkdA2QhmAchiA2QhxA+hGBMQi2DGhECpQg8CTAADHQAADXCCCCQCRCREPAAQBEAABVgbIgBAKQAABBAyAqQAoAhBFARIAfAEQA7AGBKACIgWAqIgFAAQiUAJiCAAQlgAAjehFg");
	this.shape_16.setTransform(59.1,35.4,0.419,0.419,0,0,180);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#515151").s().p("ArFJLQiCiCAAjXQAAjJA8iRQBEipC2jGQBFhMBzg+QBig2BngcQEbg2AAATQBUAAAPABQARABAQADQAWAHAVAIIAXAJQBcAmBUBJIAHAGIAVASQBpBdBUCLQCFDdgbC6QgVCSiyA1IgUAFQgSAFg/AKIhxAUQj7AziWBjQibBogGCGQhVAchEAAQkQAAiRiRg");
	this.shape_17.setTransform(42.1,31.6,0.419,0.419,0,0,180);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFBF8E").s().p("Ai+EnQgogMgdgcQgzgzAAhSQAAiLBchcQA5g5BiguQB0gqClgoQAJBDAeBLQAgBRAFAQQASA2gCAsQgEB1h+BBQh2A9jUAIIgTABIgVAAg");
	this.shape_18.setTransform(25.4,56.3,0.419,0.419,0,0,180);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("rgba(0,0,0,0.502)").ss(0.1,1,1).p("AmAqgQh2E4g3EoQgnDPgJDUQgDA7AAA7AJYFHQAEAvADAsQABAUABAUQAAADAAACAJhHPQgCBYgCAwQhvAniNARQh8AQi1ACQjiADi+giQiSgbhcgrQgCglAAgzQAAgFAAgE");
	this.shape_19.setTransform(46.8,100.5,0.419,0.419,0,0,180);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#A1A1A1").s().p("AgvB2QgRgWgbgcIgRgRQgYgZgWgOIAAAAIgBAAIABAAQgMAYgeAwIgGAJQgmgLgigOIgGgDIgBgBQgTgegLgTIA6ABQAwAAAygEIgBgBQBJgGBIgKIAkgHIgBgBQA+gMAxgMIAsgLIAAAAQBkgcBbgpIAHBbIgTARIgOgUQgUgigWgXQgRAkgrBvQgGgLgXgsQgRgggRgWIAAAAIgDABIADgBIgeBDQgXA3gHAWQg0hOgogeQgaAxgrBRIgFAAgAAZgMIACAAIAAgBIgCABgAl4ALIAXACIAqACIgPAUIgEAFQgYgNgWgQgAiaAMg");
	this.shape_20.setTransform(37.2,119.1,0.419,0.419,0,0,180);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#8A8A8A").s().p("AgdBJIgMgSIgJgPIAGADQAiAOAkALIgFAHIgXAoIgbgqgAizBTIgYgnQgXgngPgWQgTAUghAfIgfAeIgSASIgKgZIgWgtIgghCQBSAUBPALIAHABQAuAHAuAEQAWANAYAOIgwBEIgQAXIgPgYgAntAIIgHgeQgKgpgHgUIACgBIgCgBIAAACQgRAIgRARIgeAeIgaAcIgBACQAAg5ADg7IBYAdIAAAAQAtAOAzANIAPAEQgiAqgZAgIgTAaIgJgmgAJLgiIAUgRIACAoIAAAFIgWgcgAoFhTIAAAAg");
	this.shape_21.setTransform(46.8,120.2,0.419,0.419,0,0,180);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFCD4F").s().p("AhFBnIgygBQAthRAZgxQAoAeAzBOIgEABQg2ANg0AJIgBAAgAkXBMIAFgJQAegvAMgWQAWAMAZAZIARARQAbAcAQAVQhSgEhIgVgABIADIAdhDQASAWARAiQAWAqAHALQArhvARgkQAWAXATAiIAOAUQgtAmguAbIgXAGQgsAOgyAMIgeAIQAHgWAXg3g");
	this.shape_22.setTransform(34,119.8,0.419,0.419,0,0,180);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F0B111").s().p("AimBeQh1gMh6gfQgpgLgmgLIATgaQAaggAhgqIAgBEIAXArIAKAZIASgSIAegeQAigdASgWQAQAYAWAlIAYAnIAQAYIAPgXIAwhDIAEgFIAQgUQAKATATAcIABABIAJAPIANASIAaAqIAYgoIAEgHQBIAUBTAFIADAEIACgEIAyABIABAAIgxAIIgHABQhhAPhUABIgFAAIgDAAIgJAAQhJAAhMgIgApggMIAAAAIAAgBIABgEIAagcIAegeQARgSARgIQAHAVAKApIAHAgIAJAkQhDgVg5gUgAJMgzIAVAcIAAAAQg3AUg6ARQAugZAugog");
	this.shape_23.setTransform(46.8,120.9,0.419,0.419,0,0,180);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#414040").s().p("AlwKtQiSgbhcgrQgCgkAAgzIAAgKQA5AWBDAVQAlALApAKQB7AfB1AMQBQAJBOgBIADAAIAFAAQBUgBBhgOIAGgBIAygIQBogBBMgaQAogOAngXQA6gSA3gUIgECHQhvAniNASQh8APi1ACIglAAQjNAAiugfgAC1JfIAFAAIgCAFIgDgFgAiSH1QgugEgugGIgHgBQhPgMhSgUIgPgDQgzgNgtgPIAAABIhYgdQAJjVAnjOQA3kpB2k4IAEgKIATgwIBNgDQgsBggUB3QgUB0gCCqQgCEIBRDAQA+CTBqBYIgXgBgAoFGsIACAAIgCABIAAgBgAIFDYIhuhjQhFg+glgzQglgxg1i4Qg3i9AAhYQAAgnABgKQABgOAEgIIAJgIIAAgFQgFAEgEAJIgYAOQgYANgNAGIAAgzIARgwQAEgNACgxIEWgKQBECyA+F6QArELAUDTQgbg0gzgzg");
	this.shape_24.setTransform(46.8,98.6,0.419,0.419,0,0,180);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#515151").s().p("ADmJ7IAFgBIAegHQAxgMAtgOIAWgHQgnAXgnAOQhMAahpABQA1gKA3gNgAjDIpIgrgCQhqhYg+iTQhQjAACkJQABipAUh1QAUh2AthgIGYgPQgCAwgFAOIgPAwIAAAzQAMgGAYgOIAYgNQgEAIgCANQgBALAAAnQAABXA3C+QA2C2AkAzQAmAzBEA+IBvBjQAzAzAbA0IAEAzQhbAqhkAbIAAAAIgsALQgxAMg9AMIABABIgmAHQhIAMhHAHIABAAQgzAEgwAAIg5gBgAgnImIAAAAIAAAAgACNIMIACgBIgBACIgBgBgAEjHpIADgBIAAAAIgCABIgBAAgAA4odIAAAFIgIAIQADgJAFgEg");
	this.shape_25.setTransform(42,96.6,0.419,0.419,0,0,180);

	this.addChild(this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,89.5,130.7);


(lib.xespeiyou_com__1_67_19046 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.3,1,1).p("AAVgJQABgBAAAAQAHgJgEgdAgGAOQABADABADQADAKAAACQAEAQAFABQAGABACgOQACgJAAgMQAAgDAAgEQgBABgBABQgFADgFABQgGABgCgBQgDAAgBAAQgBAAgBgBQgBgCgCgDIgBgGIAAAAQgBgCAAgCQALADAKgDQAIgDAFgEIAAAJQAAAFgCACQAAABgBAAAgZgpQABANACAIQACAOAGADQABAAAAAB");
	this.shape.setTransform(0,0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCB5A0").s().p("AADAUQgEgBgFgQIgEgKIgBgGIADAAIAIAAQAGgBAEgDIACgCIAAAHQAAAMgBAHQgCANgFAAIgBAAg");
	this.shape_1.setTransform(0.5,3.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7E56BD").s().p("AgGAMIgDAAIgCgBIgDgFIgCgGIAAAAIgBgEQALAEALgEQAIgDAFgEIAAALQgBADgBACIgCABIgCACQgEADgGABIgFAAIgDAAg");
	this.shape_2.setTransform(0.3,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgNAdIgBgBQgGgDgCgOQgCgIgBgLQAFgUARgDQAQgCAMASQAEAbgHAJIgBABQgFAEgIADQgGADgEAAQgGAAgFgDg");
	this.shape_3.setTransform(0,-2.5);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3.7,-5.7,7.4,12.5);


(lib.xespeiyou_com__1_66_45056 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.498)").ss(1,1,1).p("ABqgiIjTBF");
	this.shape.setTransform(35.4,29.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#462104").ss(0.5,1,1).p("AOdBmIgXhSIgHguIgDgPIAAgDQgBg9h6gyQgtgRg8gRQgFgBgFAAQhAgFhDgEQhOgGhRgEQgdgCgegCQgSgBgSgBQmLgZndgHApbD5QCsgCCkgDQFOgGEpgLQCbgFCRgGQALgCALgCQDugnAEg5AtRD7QB7gBB7AAApbj6QihAAijAA");
	this.shape_1.setTransform(125.9,25.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AgjBcQgRgFAAgJQAAgIARgGQASgGAXAAQAZAAARAGQASAGAAAIQAAAJgSAFQgRAGgZAAQgXAAgSgGgApxAeIAAgKQAdAAAugGQAsgGAfgIIgKAAQgSgGgugLIgjgIIGBgQIAIgCIl2gCIBbgYQBIgSAbgBQAAgFgEgEQHEgBIdAQQhAAdiPAMQAdAHAAAJQAAALgiAHQgiAHgvAAQgwAAgigHQgfgHgCgJIgjACQAPAHAAAJQAAAJgTAHQgTAHgbAAQgbAAgTgHQgTgHAAgJQAAgFAEgEIhFAFQgIAGgTADQgiAIgvAAQgrAAgfgHImkAeIgOgBgAIUgEQgQgFAAgGQAAgGAQgEQAQgFAXAAQAXAAAQAFQAQAEAAAGQAAAGgQAFQgQAEgXAAQgXAAgQgEg");
	this.shape_2.setTransform(90.2,16.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("ArmCdQB1ADAbAFQAnAGjnACgApkCSQFQgzgngHQhDgMgZAAQgNAAhtAKIAZgJQgFAAgDgFIgBgFQgcgNhJgSQg5gOgdgDIGkgcQAfAHArAAQAvAAAigJQATgFAIgGIBHgEQgEAEAAAFQAAAKATAHQARAGAbAAQAbAAATgGQATgHAAgKQAAgKgPgGIAjgDQACAKAgAGQAhAIAwAAQAwAAAhgIQAigHAAgKQAAgKgcgHQCOgLBAgdQobgRnFABIgBgBQgFgFgBgFQhhgZhRgYIgHgCIFEAAIAAADQHbAHGNAZIAkACIA7AEICfAKIgQAKQgiAVg2ATQg6AUgXAJIAyAeQg0BCifAhIh1gFQi0gGg0AKQg1AKDMAaQC2AYtGAAIjLAAgAh8AzQgRAGAAAJQAAAIARAGQASAGAZAAQAZAAASgGQARgGAAgIQAAgJgRgGQgSgFgZAAQgZAAgSAFgAG7gmQgQAFAAAGQAAAGAQAEQAQAFAXAAQAXAAAQgFQAQgEAAgGQAAgGgQgFQgQgEgXAAQgXAAgQAEgAq1gpQAJAAABgKIAdgHIF2ADIgIABImBARQgOgEgGAAg");
	this.shape_3.setTransform(99.1,17.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E99900").s().p("AAAgGQABAFAAAHIAAABg");
	this.shape_4.setTransform(218.6,36.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#170E13").s().p("ApeDCQgGAAgDgFIgBgFQhQAAgegKQA2gSBhgYQBugcAdAAQiWgKl8AAIBJgZQDngBgngHQgbgEh1gDIDWhGIjWBGQhegDiZgBQALgLAMgIQAzgkArgHQAggGA+AFQBUAIAqgBQANAABugKIABAAQBtgJAMgBQAZABBDAMQAnAGlQAyQQmACjLgaQjJgYA0gLQAzgJCzAGIB1AEQCfggA0hFIgygdQAXgJA6gUQA2gTAjgWIAPgKICDAJIAKABQA8ARAtASQB6AyABA8IAAAEIADAPIAHAwIAXBQIADAOQgEA5juAnIgWADQiRAHibAFQkpALlOAGQikADisABIAAACIj2AAQA7gZATgGg");
	this.shape_5.setTransform(109.4,27.7);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-1,219.8,52.3);


(lib.xespeiyou_com__1_65_15163 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E58134").s().p("AAJEyQAAgwBdhvQBehvAAgzQAAgMgJgiQgNgwgUgpQhCh9h0AAQhYAAgyBFQgiAwAAApQAAAeAUAkQAUAmAeASQAwgDAJgDQAQgKAGgCIAMADIABACQABABAAAGQAAAEgPAPQgTASgPAAQhDAAgqgzQgkguAAg5QAAgxAlg6QA3hWBnAAQCUAABKCPQAnBIAHBOQAABDhPBmQgNAQiACPIgCACQgBAAAAgGg");
	this.shape.setTransform(11.6,14.3,0.419,0.419);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#834719").s().p("AgoOVQg0joAApEIABifQACiLAKhJQAIg/AXg1QALgaAmhIIA2hcQA1hcAAgUQg0i7hHAAQg8AAgWAjQgLARAAAYQAAAYAIAEQAQgEAOgTQAOgTAQgDIARAEIACADQABACAAAIQAAANgZAeQgbAggVAAQgwAAgJgmIAAgmQAAhFAxggQAugdA8APQBAARApA4QAuBBgGBfQgCAog1BaQg7BegNAbQhBCIgSBvIANMFQgBBLAMBtQAMBpABAZQAAAHgCADg");
	this.shape_1.setTransform(12.1,39.1,0.385,0.379,0,-0.3,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(0,0,0,0.502)").ss(0.1,1,1).p("AAko6QgNALgRAJQg/AlhCgBQguAAg6hPQg6hPABg/QABh2CQhMQAggUAcgLQAtgSAvAAQBeAABdB/QBWB3gBBfQgBBWgwBMQgSAeiHCmQg+BOgOA6QgJAwgCClQgBBkALDUQAFBoAWHXQgSAagSgEQgUgFgNgLQgbgYgQnvQgOmDACiYQABh5AiiHQAliZA3hCQApgfAAgmQAAgMgHgUQgIgVgIgHQgCgCgBgB");
	this.shape_2.setTransform(11.1,37.1,0.385,0.379,0,-0.3,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B4682E").s().p("AgDPTQgUgFgNgLQgbgYgQnvQgOmDACiYQABh5AiiHQAliZA3hCQApgfAAgmQAAgMgHgUQgIgVgIgHIgDgDIADADQAIAHAIAVQAHAUAAAMQAAAmgpAfQgNALgRAJQg/AlhCgBQguAAg6hPQg6hPABg/QABh2CQhMQAggUAcgLQAtgSAvAAQBeAABdB/QBWB3gBBfQgBBWgwBMQgSAeiHCmQg+BOgOA6QgJAwgCClQgBBkALDUIAbI/QgQAWgQAAIgEAAg");
	this.shape_3.setTransform(11.1,37.1,0.385,0.379,0,-0.3,0);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,24,76.2);


(lib.xespeiyou_com__1_64_2684 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.502)").ss(0.1,1,1).p("AjcjfQAFACBjA8QBlA9AXAGQAaAGAhgOQAVgIAxgZIBFgfIBJgiQBLAsAZA0QAWAtADAzQADA6gZA5QgXAJgWAIQgnAPgnAOQgvAWg7ASQg7ASgoAGQgnAHgeAAQgogCiGhJQiRhQhFhF");
	this.shape.setTransform(23.9,10.9,0.419,0.419,0,-10.4,169.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFC32C").s().p("AAVCbQAEgqgLgyQgQhQgZgqQgcgrgsgaIBFgfQApAbAgAuQAuBCAJBQQAEAhgDAmIhPAdIABgFg");
	this.shape_1.setTransform(14,12.4,0.419,0.419,0,-10.4,169.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#515151").s().p("AgPDgQgogCiGhJQiRhQhFhFIC3jfQAFACBjA8QBlA9AXAGQAaAGAhgOQAVgIAxgZQAsAaAcArQAZAqATBQQALAygFAqIAAAFQgvAWg7ASQg7ASgoAGQgkAHgdAAIgEAAgAFRA1QgJhQgvhCQgfgugsgbIBJgiQBLAsAZA0QAWAtADAzQADA6gZA5IgtARQADgmgDghg");
	this.shape_2.setTransform(23.9,10.9,0.419,0.419,0,-10.4,169.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(0,0,0,0.502)").ss(0.1,1,1).p("AAWiGQAiAAAgAUQAlAYAAAiQAAA9hNBDQhGA/gxAAQgUAAgIhRQgHhSgSgYQAkggAbgSQAwggAjAAg");
	this.shape_3.setTransform(5.7,10.1,0.419,0.419,0,-10.4,169.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFBF8E").s().p("AhjA2QgHhSgSgYQAkggAbgSQAwgfAjgBQAiAAAgAVQAlAXAAAiQAAA9hNBDQhGA/gxgBQgUAAgIhQg");
	this.shape_4.setTransform(5.7,10.1,0.419,0.419,0,-10.4,169.6);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,42.5,22.4);


(lib.xespeiyou_com__1_63_20877 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ArO3EQQPhjJFD/QBJAgBBAmQAfASAeATQDPCHB/DEQABADACACIABABQAAABABABQABACABACQABACABABQASAgASAgQAfA4AdA6QAAACACACQBxDmBJD+QB5GkAKHoQAEDJgQDVQgHBggKBiQgKBOgKBPQitAQjIgKQiWgIlhgqQkzglipAAQlCAAmSA5QjzAigoAGQiVARhwAAQiPAAhTgMQgkgGgigJQgLgFgLgFQgCgPgBgOQgCgZAAgUQAAg1AGhBQAAgBABgBQAEgpAHgvQADgbAFgdQADgSADgSQAOhNALgwQgJAGgOAHQgUAJgMAAQgBAAgBAAQgbgOAAg0QAAgpAMgeQAEgHADgGIAAgBQADAAAEgBQAugJArgMQCfguBphcQCViBAAi6QAAiAg1iGQg2iGhihuQjjj/lPAAQhxAAhiAQQhhAQg2AAQgzAAgOAAQgPgBgRgLIgBAAQADiVAeiDQBOlTEEjTQA+gzBFgpQB0hECLgrQBbgdBWgPQBpgOBmgJg");
	this.shape.setTransform(185.9,131.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF7F1C").s().p("A0OE5QgcgQAAg1QAAhEAkhTQAmhVBBhIQCbi0DPgZIBbACQAagBAdgBQBLAABQAlQBtAzAABaQAABchkBAQhZA4iwAlQhoArhnAoQjMBRg1AAQgnAAgPgJgAIgB2QgZgUgKgcQgGgSAAgTQAAhEAshFQAlg4BDg4QAtgnAygfIAVgIQBIgbBpAAQB4ABB2A2IAMAGQAlASAbAVQAVASAPASQAVAdAGAgQACALAAALIgBAPQgJBriDBMQgTALgTAJQh0A2ieAHIgwABQjNAAhJg8g");
	this.shape_1.setTransform(154.7,27.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F0AF0F").s().p("A00BcQg/gMhSgZIgJgDIAAgDQAEgoAHgtQBIA+BkAiQCCArDRAAQA9AAKbhDQKjhDAPAAQD7gKDRhHQEEAfCWgBQAkAABngQIAYgDQgGBfgLBhQhCADhMAAQivAAjsgfIhCgJQkXgqjMAAQjUAAoBAzQoEAyiggBQi3AAh0gUg");
	this.shape_2.setTransform(221.9,253.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F74C0D").s().p("AwMXVQgkgGgigJIgWgKIgDgdQgCgZAAgUQAAg1AGhBIAKADQBSAaA/ALQB0AVC3AAQCgAAICgyQIDgyDTAAQDNAAEWApIBDAJQDsAfCvAAQBMAABCgDIgUCdQitAQjIgKQiWgIlhgqQkzglipAAQlCAAmSA5IkbAoQiVARhwAAQiPAAhTgMgAT5RXQFEhtDij9IAkgqQAEDJgQDVIgYADQhnAQgkAAIgJAAQiVAAj9gdgAsNKoQCViBAAi6QAAiAg1iGQg2iGhihuQjjj/lPAAQhxAAhiAQQhhAQg2AAIhBAAQgPgBgRgLIgBAAQADiVAeiDQABBrA4AvQAvAmBYAAICZgJICYgKQClAACXA9QCUA8BzBsQBzBsBACPQBCCSAAClQAAB9g+BgQg2BTiCBgQhQA9iAAfIhWASQCfguBphcgAXyrEQk3k+jJhfIABgPQAAgLgCgLQgGgggVgdQgPgSgVgRQgbgVglgTIgMgGQh2g2h4AAQhpAAhIAbIgVAIQgyAfgtAmQhDA4glA5QgsBEAABGQAAAUAGARQhZAchRgiQg5gYg2g3Qhvhwh9hUIglgTQkIh6llAAQh/AAhKAWQgjAKiPA2QB0hECLgrQBbgdBWgPQBpgOBmgJQQPhjJFD/QBJAgBBAmQAfASAeATQDPCHB/DEIADAFIABABIABACIACAEIACADIAkBAQAfA4AdA6IACAEIgUgXgAs/28QA6gHA3gBQhmAJhpAOQAwgKAugFg");
	this.shape_3.setTransform(185.9,131.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFC22C").s().p("Av+BYQhkgihIg+QADgbAGgdQA1AUBOATQC2AoCrgNQCGgHCwgYQBngODTgfQGYg3F5gBQBpgBE3AnIBHAJQjRBGj7AKQgPABqlBCQqZBEg9AAQjQAAiDgsg");
	this.shape_4.setTransform(193.7,250.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF661C").s().p("AvfTtQhOgTg2gUIAGgkQAOhNALgwIgXANQgUAJgMAAIgCAAQgbgOAAg0QAAgpAMgeIAHgNIAAgBIAHgBQAugJArgMIBWgSQCAgfBQg9QCChgA2hTQA+hgAAh9QAAilhCiUQhAiNhzhsQhzhsiUg8QiXg9ilAAIiYAKIiZAJQhYAAgvgmQg4gvgBhrQBOlTEEjTQA+gzBFgpQCPg2AjgKQBKgWB/AAQFlAAEIB6IAlATQB9BUBvBwQA2A3A5AYQBRAiBZgcQAKAcAZAVQBJA7DNAAIAwgBQCegHB0g2QATgJATgLQCDhMAJhtQDJBfE3E+IAUAXQBxDmBJD+QB5GkAKHoIgkAqQjiD9lEBtIhGgJQk4gnhoABQl5ABmYA3QjUAfhmAOQixAYiFAJQgoADgpAAQiFAAiLgggA3nvuQhBBLgmBVQgkBSAABEQAAA1AcAQQAPAJAnAAQA1AADMhRQBngoBogrQCwglBZg4QBkg/AAhfQAAhahtgyQhQglhLAAQgdAAgaABIhbgBQjPAYibC0g");
	this.shape_5.setTransform(187.5,122.1);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.1,-20.2,374,303.1);


(lib.xespeiyou_com__1_62_95338 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.502)").ss(1,1,1).p("AMCu/QAJARAJARQAJASAIASQBGCTApCbQA/DygKEIQgQHTmuBtQBXDyAkDuQAKBBAGBCQABAGAAAGQAFA5ACA4Qh0ALh+ASQjWAegjAFQiDAPhgAAQh+AAhJgLQgfgFgegHQgKgFgKgEQgBgOgBgMQgCgWAAgSQAAguAFg5QAAgBABgBQADgkAGgpQADgYAFgZQACgQADgQQAMhDAKgrQgIAGgMAFQgSAIgKAAQgBAAgBAAQgYgMAAguQAAgjALgbQADgGADgFIAAgBQADAAADgBQApgIAlgKQCMgpBchQQCBhyAAikQAAhwgvh1Qgvh2hUhhQjIjgkmAAQhjAAhWAOQhWAOgvAAQgtAAgMAAQgNAAgPgKIgBAAQADiDAahzQBEkqDli6QA2gsA9gkQBmg8B6gmQDYhDCzAJQCCAHBpAaQAWAGAUAGQAeAJAiAOQApAQAlAXQAkAVAhAZQAXAQAWASQAaAVAWAWQA9A6AmA9QAWAjANAj");
	this.shape.setTransform(97.1,131);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFC22C").s().p("AlRAzQhZgeg/g2IAIgxQAuARBFARQCgAlCWgLQB0gJCagVIEEgkQAKBCAGA/QnkAwguAAQi3AAhygmg");
	this.shape_1.setTransform(114.4,237.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF7F1C").s().p("Al2D8QgZgOAAgvQABg8AfhIQAhhJA6hBQCIieCzgVIBQAAIAxAAQBCAABGAgQBfAsAABPQABBThYA2QhOAxiaAhIi0BJQi0BGgvABQgiAAgNgIg");
	this.shape_2.setTransform(59.8,41.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F0AF0F").s().p("AlmAwQg4gLhIgWIgJgDIABgCQADgiAHgpQA/A4BYAcQByAnC3AAQAvAAHkgxIABANQnFAriLABQihgBhlgRg");
	this.shape_3.setTransform(113.9,240.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F74C0D").s().p("AjbUTQgggFgegHIgTgJIgDgaQgCgWAAgSQAAguAGg5IAIADQBIAWA4AKQBmASCeAAQCNAAHFgsQAFA5ACA4Qh1ALh+ASIj5AjQiDAPhgAAQh+AAhIgLgAADJKQCChyAAikQAAhwguh1Qgwh2hUhhQjHjgknAAQhjAAhWAOQhVAOgwAAIg5AAQgMAAgQgKIAAAAQACiDAbhzQAABeAyApQApAhBNAAICGgIICGgIQCRAACFA2QCCA0BjBfQBlBfA4B9QA6CBAACQQAABug2BUQgwBKhyBUQhEA1hxAcIhLAQQCLgpBbhQgAN1qHQhviXhQhWIgogpQh/h9iYhGIgWgKQjghikqAAQhvAAhBATQgfAJh9AwQBmg8B5gmQDYhDCzAJQCCAHBqAaIAqAMQAdAJAjAOQApAQAkAXQAlAVAhAZQAXAQAVASQAaAVAXAWQA8A6AmA9IASAiIASAkQBGCTAoCbQgcgYgegkg");
	this.shape_4.setTransform(94.4,131);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF661C").s().p("AjQRTQhFgQgvgSIAGgfQAMhEAKgqQgJAFgMAGQgRAIgLAAIgCAAQgYgMAAguQAAgkALgaIAGgMIAAAAIAGgBQApgIAmgLIBLgQQBxgbBGg1QBwhVAwhJQA2hUAAhuQAAiRg6iCQg4h7hjhgQhlhfiCg0QiFg1iRAAIiGAIIiGAIQhNAAgpgiQgygpAAhdQBEkqDli6QA2gsA9gkQB9gwAfgJQBBgTBvAAQEqAADgBhIAWAKQCYBHB/B9IAoApQBQBWBvCWQAeAlAcAYQA/DygJEGQgRHVmtBsQBWDzAlDtIkEAlQibAVh1AIQgjADgkAAQhzAAh6gdgAqZt0Qg5BCghBKQggBJAAA8QAAAuAZAOQANAIAiAAQAvAACzhHIC2hJQCbggBOgyQBVg3AAhTQAAhQhdgsQhGgghDAAIgwABIhQgBQi2AViICeg");
	this.shape_5.setTransform(98.6,121.8);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,196.2,264.1);


(lib.xespeiyou_com__1_61_78390 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("Az0x8QBNgoBQgeIEZhHQBjgnAugSQAtgSANgJIJziHQD4glD5AZQEtAbEBCfQEGClBlEoQA5CnAwCsQAZD0BBDvQBPEhAeEpQANCLACCLIgKGFIgRC1IgSCTQjyAGjwgaQkHgfkGgiQj5gij5ALQkNAMkNAlQkWAnkXgZQhLgFhHgdIABi1IALhTIAIg1IAdiWIg0ATQgCgCgBgBQgpgzAZhAQAFgMAFgLIBagSQFGhFAslDQAUiag+iOQh7kVkbhwQkWhskrAxQg1AHg0gMIAekFQBFkeDcjCQBFg+BQgwg");
	this.shape.setTransform(183.6,123.4,1.056,1.056,0,0,-1.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFC22C").s().p("AwigEQgegRgcgWIAIg0QD7BfEMgVQEEgUECgfQETghEYgEQEVgEEQAxIBUALQkJBIkUANQkMAGkMATQkMAVkPAaIhWADIg8ADQjbgHjChrg");
	this.shape_1.setTransform(191.4,253.3,1.056,1.056,0,0,-1.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF7F1C").s().p("Ay1EFQhKi7CnieQAsg0A4glQBdg9BdgVIAugHQDwgiCNDGQAAAggXAmQhEBviCArQkbBckeAyIgEAAQgJAAgDgHgAHVBVQgEgeAKgcQBkkqFNAHQECAGA/DZQgNBhhVA2Qh1BKiHAYQg0AIgwAAQi6ABh8iEg");
	this.shape_2.setTransform(153.5,31.3,1.056,1.056,0,0,-1.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F0AF0F").s().p("AM7A5QkSg1kWABQkTAAkSAUQjzATj1ALQEPgaEOgVQEKgREMgGQEUgNEJhKQAsAGArAJQDgApDhgfIgRCzIg2ABQj4AAj0gugA1tgIIAKhUQAcAWAeARQDCBrDbAHIgiAAQjlAAjahFg");
	this.shape_3.setTransform(219.1,257.7,1.056,1.056,0,0,-1.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF661C").s().p("AwZRyIAdiWIg0ATIgDgDQgpgzAZhAIAKgXIBagSQC7gSCSh4QD0jKhdk6QhYkikEieQkIigk2AyQkFAtgfjrQBFkeDcjCQBFg+BQgwQBOgeBPgRQFshMFRCdQBxA0BcBTIAbAaQBoBjB8A0QBCAcBEgUQCbCmD/grQCHgYB1hKQBVg1ANhkQDnCGC3DDQAkAnAuAUQAnAQArgQQAaD0BBDvQBPEhAdEpQAOCLACCLQgjAngjAlQjJDOkUBSIhTgMQkQgwkWAEQkXAEkUAgQkCAgkDATQg0AFgyAAQjWAAjLhPgAw4xzIguAIQhdAVhdA9Qg4AlgsAzQinCgBKC8QADAIANgCQEegxEbhcQCCgrBEhxQAXgmAAghQh4iojCAAQggAAgjAEg");
	this.shape_4.setTransform(185.2,123,1.056,1.056,0,0,-1.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F74C0D").s().p("AS6XmQkHgfkGgiQj5gij4ALQkOAMkNAlQkVAnkXgZQhMgFhGgdIABi1QDqBND3gGIA8gCIBVgEQD1gKDygTQESgUEVgBQEVAAESA1QEPAyEUgFIgSCTIhhABQjBAAjAgVgAT+SoQgsgJgsgGQEUhSDJjOQAjglAjgnIgKGFQhhANhgAAQiAAAiAgXgApeHEQAUiag9iOQh7kVkchwQkWhskrAxQg1AHg0gMIAekFQAgDrEFgtQE1gyEICgQEECeBYEiQBdE6j0DKQiSB4i7ASQFHhFArlDgAWgoWQgtgUgkgnQi4jDjniGQg/jZkCgFQlMgIhlEtQgJAcADAdQhEAUhBgcQh9g0hohjIgbgaQhchThxg0QlRidlsBMQhPARhNAeQBMgoBQgeIEahHICQg5QAtgSANgJIJziHQD4glD5AZQEuAbD/CfQEHClBlEoQA6CnAuCsQgVAIgVAAQgUAAgUgIg");
	this.shape_5.setTransform(183.6,123.4,1.056,1.056,0,0,-1.6);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.8,-40.3,368.9,324.8);


(lib.xespeiyou_com__1_60_89152 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.502)").ss(1,1,1).p("AqZ0/QhHAqg/AzQkKDYhPFbQgfCFgDCZIABAAQASALAOAAQAPAAA0AAQA3AABjgQQBkgQBzAAQFXAADoEEQBkBxA1CJQA2CIAACDQAAC+iWCEQhrBeijAvQgrAMgwAKQgDAAgEABIAAAAQgDAHgEAHQgNAfAAApQAAA1AcAOQABAAACAAQAMAAAUgJQAOgGAKgHQgMAygOBOQgDATgDASQgFAdgEAcQgHAvgEAqQAAABAAABQgHBDAAA2QAAAVADAZQABAOACAQQALAFALAFQAjAJAlAGQBUANCSAAQBwAACZgSQASgCA8gJQBDgJB3gRQAAAAABAAQgChFgHhHQgBgGgBgGQgHhFgNhHQgKg0gMg1Qgch1gph7QAAAAAAAAQA/gRA6gSQCWgxB5g+QIOkOgsoTQAEkagkjnQiTuhvoAsQldAQk4Ceg");
	this.shape.setTransform(117.9,152.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFC22C").s().p("AjvA4QhmgjhKg/QAEgcAFgdQA2AUBQATQC5AsCugOQBGgFBTgJQBJgIBSgLQANBFAIBFIiwAQQhwAJgXAAQjSAAiGgsg");
	this.shape_1.setTransform(117.6,276.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F0AF0F").s().p("AkHA3QhBgLhTgbIgKgDIAAgCQAEgoAHgvQBKBBBmAgQCGAtDSAAQAXAABwgKICwgQIABAMIixAOQiIAJhFAAQi5AAh2gVg");
	this.shape_2.setTransform(117,279.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF7F1C").s().p("AmzElQgcgRgBg1QAAhGAlhVQAnhUBDhNQCdi3DSgZIBdABIA4gBQBNAABRAmQBvAzAABcQAABhhlA+QhbA6i0AlIjRBVQjQBTg3AAQgoAAgPgJg");
	this.shape_3.setTransform(69.5,48);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F74C0D").s().p("Ak/XjQglgGgjgJIgWgKIgDgeQgDgZAAgVQAAg2AHhDIAKAEQBTAaBBAMQB2AVC5AAQBFAACIgJICygOQAHBHACBFIgBAAIi6AaIhOALQiZAShwAAQiSAAhUgNgAg7KlQCWiEAAi+QAAiDg2iIQg1iJhkhxQjokElXAAQhzAAhkAQQhjAQg3AAIhDAAQgOAAgSgLIgBAAQADiZAfiFQAABtA6AvQAwAnBaAAICcgJICbgJQCoAACbA+QCXA8B1BvQB0BvBBCRQBECWAACoQAACAg/BhQg4BWiCBiQhSA+iDAfIhYATQCjgvBrhegAPFr0QiCivhchkQgagcgbgaQhUhRhcg9QhFgthJgiQkOh9lrAAQiBAAhMAWQgjAKiSA4QE4ieFbgQQPqgsCTOhQhmgKhehyg");
	this.shape_4.setTransform(116.1,152.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF661C").s().p("AkkUIQhQgUg2gUIAGgkQAOhPALgxQgJAGgOAGQgVAKgMAAIgCAAQgcgOAAg2QAAgpANgfIAHgNIAAgBIAHgBQAvgJAsgMIBYgTQCCggBSg+QCChiA4hVQBAhiAAiAQAAiohEiYQhBiPh0hvQh1huiYg9Qiag+ioAAIicAJIicAKQhaAAgvgnQg6gwgBhtQBPlaELjYQA+gzBHgqQCSg4AkgLQBLgWCCAAQFrAAENB9QBJAiBFAtQBdA+BUBRQAaAZAaAcQBdBkCCCvQBdBzBmAKQAlDmgEEbQAsISoPEPQh5A+iWAwQg6ASg/ARIAAAAQApB7AcB1QAMA1AKA1QhTALhJAIQhSAIhGAGQgqADgoAAQiIAAiNghgAs3wEQhCBNgnBWQglBVAABGQAAA1AdARQAPAJAoAAQA2AADRhTIDThVQC0glBbg6QBlhAAAhhQAAhchvgzQhRgmhNAAIg4ABIhdgBQjUAZieC3g");
	this.shape_5.setTransform(119.6,141.5);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-0.4,237.9,306.1);


(lib.xespeiyou_com__1_59_6341 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("A3r2xQCChUCbg5QBlglBggXQB2gVBygQQSIimKIEKQBSAiBJApQAjASAgAVQDoCRCNDeQACACACACIAAABQABABABACQABACABACQABACABACQAVAkAUAkQAiA/AhBCQAAACACADQB+EEBREiQCIHgAKIzQAFDpgRD3QgIBugMBzQgKBagNBcQjAAcjfgDQipAAmJgfQlXgci8AIQloAQnABWQkQA0gtAIQimAbh9AGQigAHhcgKQgogEgmgJQgNgFgMgGQgCgRgBgRQgDgcAAgYQAAg9AHhLQAAgCABgBQAEgvAIg2QAEggAFgiQADgUAEgVQAPhaAOg4QgLAHgQAIQgWAMgNABQgCAAgBAAQgegPAAg8QAAgvANgkQAFgIADgHIAAgBQAEgBAEAAQA0gNAwgRQCxg8B2hvQClieAAjXQAAiUg7iYQg8iZhth6Qj+kbl2AQQh+AGhtAXQhtAXg8ADQg5ADgQAAQgPAAgUgLIgBAAQADitAiiZQBWmMEjkCQBFg9BNgzg");
	this.shape.setTransform(213.8,143.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF7F1C").s().p("A2lGjQgfgRAAg9QAAhPAphhQAqhkBIhYQCtjXDngnIBmgDQAdgDAggBQBVgEBYAnQB6A0AABpQAABrhvBPQhjBFjFAzQh0A3hzAzQjkBog7ADIgMAAQgjAAgOgIgAJfBnQgcgYgLgeQgHgVAAgXQAAhOAyhSQAqhDBKhEQAzgvA3gmIAXgKQBQgjB1gFQCGgGCFA5IAOAGQApAUAeAXQAXASAQAVQAYAgAGAlQADANAAANIgBARQgJB/iTBcQgWAOgVALQiCBEivAQQgbADgcABIg6ACQi1AAhHg5g");
	this.shape_1.setTransform(179,24.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F0AF0F").s().p("A3PCxQhHgLhbgZIgLgDIABgDQAEgwAIg1QBQBGBwAhQCSAtDogLQBEgDLphuQLyhwARgBQEXgYDqhcQEjAXCogJQAngCBzgXIAcgGQgIBvgMBwQhKAIhVAEQjDAJkHgZIhKgIQk3gfjlAIQjsAKo8BUQpABTizAJQhEACg8AAQh3AAhXgLg");
	this.shape_2.setTransform(254,280.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F74C0D").s().p("AyEbaQgogEgmgJIgZgLIgDgiQgDgcAAgYQAAg9AHhLIALADQBbAaBHAKQCCASDMgJQCzgII+hUQI+hUDsgKQDlgKE3AhIBKAIQEHAZDDgJQBVgEBKgHQgKBagNBcQjAAcjfgDQipAAmJgfQlXgci8AIQloAQnABWIk9A8QimAbh9AGQhCADg2AAQhOAAg2gGgAWOStQFpiND8kxIAogyQAFDpgRD3IgcAFQhzAXgnACQguACg4AAQiSAAjTgQgAtnMjQClieAAjXQAAiUg7iYQg8iZhth6Qj+kbl2AQQh+AGhtAXQhtAXg8ADIhJADQgPAAgUgLIgBAAQADitAiiZQABB7A+AzQA0AqBjgEQANgBCdgRQCegSANgBQC3gICpA/QClA9CBB4QCBB3BGChQBKCnAAC+QAACRhFByQg9BjiQB2QhZBKiPAqIhgAZQCxg8B2hvgAajuWQlblhjghjIABgRQAAgNgDgNQgGglgYggQgQgVgXgSQgegXgpgUIgOgGQiFg5iGAGQh1AFhQAjIgXAKQg3AmgzAvQhKBEgqBDQgyBSAABQQAAAXAHAVQhjAjhbgjQg/gYg9g9Qh8h8iLhbIgqgUQkmiAmPARQiOAHhSAdQgnAOigBFQCChUCbg5QBlglBggXQA2gOA0gIQBBgLA9gEQhyAQh2AVQB2gVBygQQSIimKIEKQBSAiBJApQAjASAgAVQDoCRCNDeIAEAEIAAABIACADIACAEIACAEQAVAkAUAkQAiA/AhBCIACAFIgXgag");
	this.shape_3.setTransform(213.8,143.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFC22C").s().p("Ax1CYQhwghhQhHIAJg/QA8ASBXASQDLAoDAgXQCUgSDFgiQBzgVDsguQHIhUGlgWQB0gFFcAeIBPAGQjqBckXAYQgRABr0BwQrnBuhEADQgtACgpAAQiuAAh2gkg");
	this.shape_4.setTransform(222.6,279.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF661C").s().p("AxTW5QhXgSg8gUIAHgqQAPhaANg4QgLAIgPAHQgWAMgOABIgCAAQgfgOAAg9QAAgvAOgkIAIgOIAAgBIAIgCQA0gNAwgQIBfgZQCPgqBahKQCQh2A9hkQBFhyAAiQQAAi+hKipQhGifiCh4QiAh3ilg9Qipg/i3AIQgNAAieATQieARgMAAQhjAFg0gqQg+gzgBh7QBWmMEjkCQBEg9BOgzQCghGAmgOQBTgdCOgGQGPgSEmCBIAqATQCLBcB8B7QA9A9A/AZQBaAjBkgkQALAfAcAXQBRBCDlgKQAbgCAcgDQCvgPCChEQAVgMAWgNQCShfAKh+QDgBjFaFgIAYAbQB+EEBREhQCHHgALIzIgoAzQj8EwlpCOIhPgGQlcgeh1AFQmkAWnIBUQjsAuhzAVQjFAkiVASQhGAIhHAAQh8AAiBgZgAxg1wQggACgdADIhmADQjoAmisDXQhJBagqBkQgoBiAABOQAAA9AfASQARAJAsgCQA6gDDlhnQByg0B0g3QDGgyBihGQBwhOAAhtQAAhph6g0QhRgkhOAAIgOAAg");
	this.shape_5.setTransform(215.6,135);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(5.2,-33.1,417.3,354.1);


(lib.xespeiyou_com__1_58_7865 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#462104").ss(0.5,1,1).p("AqsD7QCOAACQAAQC7AAC7AAQA9AAA/AAQCAAAB+AAQCgAACfAAQA7AAA6AAALIj5QkvgBk1AAQg5AAg2AAQjDAAjAAAQhZAAhZABQhbAAhbAAQgQAAgPAA");
	this.shape.setTransform(111,25.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#170E13").s().p("ALEBOIk+AAIj+AAIh+AAIl0AAIkeAAQBtgdCQghQgPAAhXgFIhigFQmTAKhKAAQArgCDkgpQDrgtAVAAIglgEIDcAAIGBAAIG+AAICUAAIhKAYQF8AACWAKQgdAAhtAbQhiAXg2ASQAeAKBQAAIACAFQACAFAGAAQgSAGg7AaIh2AAg");
	this.shape_1.setTransform(107.4,42.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AmOBuQgOgEAAgHQAAgFAOgFQAPgFAVABQAUgBAPAFQAPAFAAAFQAAAHgPAEQgPAEgUABQgVgBgPgEgAgUBkQgWgEAAgHQAAgFAWgFQAUgFAfABQAfgBAWAFQAWAFAAAFQAAAHgWAEQgWAEgfABQgfgBgUgEgAoxBQQgLgFAAgFQAAgGALgFQAMgFARAAQAQAAAMAFQAMAFAAAGQAAAFgMAFQgMAFgQAAQgRAAgMgFgAq9BTQgLgCAAgCQAAgCALgBQAMgBARAAQAQAAAMABQAMABAAACQAAACgMACQgMACgQAAQgRAAgMgCgAnKAUIPCgnIAjAJQAuAKASAGIAKAAQgfAIgsAGQguAGgdAAIAAAKIAOABIlGAYQAfgMAXgPQg9gBiEANQidAQg4ACIgyACQiSAAg9gugAoKgIQgUgFAAgGQAAgFAUgFQAVgFAdAAQAdAAAUAFQAVAFAAAFQAAAGgVAFQgUAFgdAAQgdAAgVgFgAnlgtQC2gQDTgLQFlgSG8gBQAEAFAAAEQgbAChIARIhbAYgAoUhQQgKgFAAgIQAAgJAKgGQAKgGAPAAQAOAAAKAGQALAGAAAJQAAAIgLAFQgKAHgOAAQgPAAgKgHg");
	this.shape_2.setTransform(130.4,15.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("ABHCtImBAAIjcAAQiZgQhjAAQAJAAAAgKQAZAHBagbQBggeAJAAIAAgKQgIgDgVgDIBOgFQgDAAgCgDIgBgCQg3gDhhgBQAUgKAoAAIAAgKQgUgFg9gKIgrgHIA6gDIEYgMQgDgKgEgFIgFgHQgNgPg9gCIhDAAIAJgCIgKgKQgXAAhRgFIhbgFIh1AFQhrAFgVAAQAMgEDnhtIAmgSIAfAAIC3AAICxAAIGBAAIBxAAIJkAAIAHACQBQAYBjAZQAAAFAEAFIABABQm8ABlnATQjQAKi3AQIPwAGIgeAHQABAKgKAAQAGAAAOAEIvCAmQBHA1C4gIQA5gDCfgQQCEgNA8ACQgXAOgfAMIFGgXQAcADA6AOQBJASAbANIACAFQADAFAFAAIgZAJIgBAAQhuAKgMAAQgqAAhUgIQg+gFghAGQgqAHgzAmQgMAIgMALQCaABBeADIgwAQIiUAAIm+AAgAh4BGQgOAFAAAGQAAAGAOAEQAQAFAUAAQAVAAAOgFQAPgEAAgGQAAgGgPgFQgOgEgVAAQgUAAgQAEgAEAA8QgWAFAAAGQAAAGAWAEQAWAFAfAAQAfAAAWgFQAWgEAAgGQAAgGgWgFQgWgEgfAAQgfAAgWAEgAkaAoQgMAFAAAGQAAAGAMAEQALAFARAAQARAAALgFQAMgEAAgGQAAgGgMgFQgLgEgRAAQgRAAgLAEgAmnA5QgLACAAACQAAACALABQANACAQAAQAQAAAMgCQAMgBAAgCQAAgCgMgCQgMgBgQAAQgQAAgNABgAj0gwQgUAFAAAGQAAAGAUAEQAVAFAdAAQAdAAAUgFQAVgEAAgGQAAgGgVgFQgUgEgdAAQgdAAgVAEgAj+h/QgKAGAAAJQAAAIAKAGQAKAGAPAAQAOAAALgGQAKgGAAgIQAAgJgKgGQgLgFgOAAQgPAAgKAFg");
	this.shape_3.setTransform(102.6,17.4);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-1,214.8,52.3);


(lib.xespeiyou_com__1_57_45981 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#462104").ss(0.5,1,1).p("AL2D7QglAAglAAQgWAAgWAAQkugCkSgEQgZgBgYAAQjDgEi3gFQhfgDhagEQglgHghgJQiJgngCg5IAAgBQAAgHACgGIABgFIANhNIAFg4QgBgEAAgBQAAhKBkg7QAFgDAGgDQAKgEANgGQAagNAdgJQABAAAAAAQBagGBegFQG5gWIYgEQAIgBAIAAQAFAAAFAAQAGAAAHAA");
	this.shape.setTransform(75.9,25.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(0,0,0,0.498)").ss(1,1,1).p("AB4gxIgBAAQgCAAgDAAIgFAAQAPAFAtAFQASACANACADwiUQgYAEhMAQQhhAVgYAIQALADAaAEAjvCVIADAA");
	this.shape_1.setTransform(133.1,29.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AALDfQgigHgigJQiIgngCg5IAAgBQAAgIACgGIABgEIANhNIAFg4IgBgGQAAhJBkg7IALgHIAWgKQAbgMAagKIACAAIC3gKIAACkQgPAEAPgBIAAEiIi5gGg");
	this.shape_2.setTransform(19.7,25.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AHKCtIgtAAIkRgBQgYgOglgLQhGgUg2gBIAAgGICAAAQAoAEA+gMQA9gMCYgJICUgKQAUADAJADIAAAKQgJAAhhAeQhZAbgZgHQAAAJgJABQBiAACaAQIiMAAgAFsBjQgQACAAAFQAAADAQADQAQAEAXAAQAXAAAQgEQAQgDAAgDQAAgFgQgCQgQgDgXgBQgXABgQADgAEOAfICEgGIArAHQA9AKATAFIAAAKQgnAAgUAKIgBAAIgFAAIg7gBIiMgBQj9ABguABImfATQCUgaI/gdgApOASQAkgLDKgmQI9hzCFgUIAygGIAJAAIAOAAIgmASQjoBtgMAEQAWAABqgFIB1gFIBcAFQBRAFAWAAIAKAKIgJABIgbAAIgPABIgVACQiPAHmBAKQkCAGBsgsQmABAgzAEIgFABQgHAAAMgDg");
	this.shape_3.setTransform(98.5,17.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("AiRCpIgJAAIgWAAQAogSAUABQpXgeDLgjIGfgTQAwgCD7AAICMABIA7ABIgFAAQAPAFAtAFIAfAEIgfgEQgtgFgPgFIAFAAIAFAAIABAAQBhABA3ACIABADQABACADAAIhNAGIiUAJQiYAKg9AMQg+AMgogEIiAAAIAAAFQA4ACBEAUQAlALAYANIjigDgAExBxQgQgDAAgEQAAgEAQgDQAQgDAXAAQAXAAAQADQAQADAAAEQAAAEgQADQgQADgXAAQgXAAgQgDgAkmgHQAOgSBCgWQhsAsECgGQGBgKCPgIImHAiQioAQhdAAQiEAAAagegAFIirIARAAIgyAGIAhgGg");
	this.shape_4.setTransform(104.4,17.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#170E13").s().p("AFoD6IgsAAQktgBkRgEIgxgBQjFgEi3gFIAAkjQAzgEF/hCQhBAXgOARQgsA3GagmIGIgkIAVgCIAPgBIAbAAIBEAAQA9ACANAPIAFAHQADAHAEALIkZALIg5AEQgagFgLgDQAYgHBggVQBNgRAYgEQgYAEhNARQhgAVgYAHQALADAaAFIiEAGQo/AdiUAYQjLAjJXAeQgVAAgnARIAWABIAJAAIDiADIERABIAsAAICNAAIAlAEQgVAAjrAtQjkArgsACQBLAAGTgKIBiAFQBWAFAQAAQiQAhhtAcIhLAAgAAKC9IgCAAgAqvjfQG7gXIWgDIghAFQiFAUo9BzQjKAogkALg");
	this.shape_5.setTransform(108.2,25.2);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,178.1,52.3);


(lib.xespeiyou_com__1_53_44476 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AEgQDQhSgLhRgDQg3gCg3ACQguACgvAFIgiADIgPgFQhjgjh7ARQh8ASiTiDQiTiDCNgvQCNgwhQgcQhQgdgehXQgfhYgajCQAaCkAGgZIAAgCQABhSAagVQBjhgAZk6QA7EqC+hQQANACBBhIQBAhFArhTQArhSAighIAUgVQA4g+AshQQAhg9AXg/QAihfAOhlQAHg8ABg9IAAimQANBhAmBXQAPAjAUAhQAhA5AtA0QA6BEAvBIQBVCAAyCPIAKAdQAWBDgIBFQgCARgDAQQghCVAtCHQAJAbAPAXQAbAoAwAcQAGhuB9iUQAfglAzgNQhjCVgXCrQgGApgBApQgBAfADAbQADAdAHAZQAdBiBkAcQg9DcjVAcIhRAKIgJABIhIAGQAfAOAfALIANAEIgWAMQhHAjhMALQgVADgWACIgZAAQghAAgigEgAthhPQiggaCHisQCGisAdgfQAdgggmlpQA3FrAfA2QADAFALCyIglB2QgZBRhqAAQgcAAghgFg");
	this.shape.setTransform(-709.1,-223.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9900").s().p("EgIhAlsQhwgMhphRQgTgOgSgQQgUgRgSgSQh1h2g/itIgRg0QA8gxgIhgQgCghgMgnQgGgYgKgaQgSAJgZAHQgUAGhtAOQgVgngQgqQgWg4gHg8QgRiSAYiRQAWiHAsiDQBBjFBZi8QA4h3AAiGQAAgdgGgaQAPiKhYiRQiBjYAjhNQAqiEAyh+IAghNIALASIASAcQBaCOBPCNIArBOIAFAKQAlBLACBXQBhCLAahRQATg/AGhJQADgpAGgqQAkAuAMBDQANBIgPBdIgCARQgJBRAaA1QAYA0A5AbQAsAVArgEQAqgEAogdQARgNARgRQBIhIA3hRQBuifAtjCIAGgaQAWhwgJhwQgFg8gOg9QgmioB4gVIABgIQAxAIArAPIABABQBfAiBFBGQA1A1AmBJIATAqQBTDDhtB6Qg8CTAKB+QAIBmA2BaQAlA9AlAkQA3AzA4gDQBEgEBHhSQCDiXBtiuQAig3A3gmQgpCHA8CCIADAIQARAjAYAjIAKAOQBdCLBYCwQAkBIAiBPIgEADQgqgag0gIQgnADgaAdQgUAVgKAbQgHAMgDAPQgIAjgFAiQgRBsAJBuQAKCFAaCCQAJAtAaAjQAUAbAaAEQAMgeAPgcQA/hxBJhpQAXggAbgcIAggjIACgBQgBAZgKAXIgIAWQghBXACBeQABAtgCAsQgIA5gEA6QgCAXgDAWIgDAQIgFAaIgCAGQgmCAhbBlQgiAmgrAaQguAdgyAWQgPAHgPAEQgWAjgUAnQhsDSjcAkQgqAHgtABQhsAChiggIgDgjIAJgBIBRgKQDVgcA9jcQhjgcgehiQgHgZgDgdQgDgbABgfQACgpAFgpQAXirBjiVQgzANgfAlQh9CUgGBuQgwgcgbgoQgPgXgJgbQgtiHAhiXQADgQACgRQAIhFgWhDIgKgdQgyiPhViAQgvhIg6hEQgtg0ghg5QgUghgPgjQgmhXgNhhIAACmQgBA+gHA7QgNBlgjBfQgXA/ghA9QgqBQg6A+IgUAVQgiAhgrBSQgqBThBBHQhBBIgNgCQi+BQg7ksQgZE8hjBgQgaAVgBBSIAAACQgGAZgaikQAbDCAeBYQAeBXBQAdQBQAciNAwQiNAvCTCDQCTCDB8gSQB8gRBiAjIgLAIQg8AuhCAeQhdAshaAAQgUAAgTgCgAsSMSQgdAgiGCrQiGCsCfAaQCgAbAghnIAlh2QgLiygDgFQgfg2g3lrQAmFpgdAggA4AWKQiXkeCxjqQCwjnBzg4QhWCShFCaQhzD/AfEUQAIBBAMBBQgxg9gxhdgAVBLGIABAAIgBAAgAUrCDQgWgnAHhzQgHgUgFgUIgFgZIAAgDIgEgaQgRiYBZiVQgKAsAuB2IAQAmQAPAjATAnQBUCtiEBlQgaAUgSAAQgTAAgLgTgAG73QQAIhogHhbQgGhLAChLQAEhMAMhNQAmjjCmiSIAPgNQA9gzBFANQAtAJAiATQCABFgNDOQgJCJAFCJQACAuADAuQgPgzgcgpQgfgtgvgfQinhthuCHQgSAWgQAcQgSAegPAlQg4CGgfCKIgIApIADgjg");
	this.shape_1.setTransform(-703.2,-350.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("ADnPDIAAg7QAAgLgMgMIgjgYIgNAJIgEADQhCAphOgMQgdgFghgNQgXgJgZgOIgDgCQg1gegdgtQklgniFkQQgyj8CziGQBmiNAfikIAHAbQAHAXAIATQBFCjCGjRQA0hRAGhoQADgyASgqIAKgTIAGAEQC1iOAejuQAGgugFgtQASA/ApBCQARAcAWAdQAXAgAdAhQBIBSBDBUQBEBWBABXQATAbAPAcQAjBGgCBLQgDA7gZA9QguBrAIBaQABAQADAPQAIAlARAhQAHANAIANIAJANQAPAUATATQCwiJCEifQgxB6gxDRIgEASQgIAlgBAgQgHCSB7AYQBIgxASgSQAHAhAEAeQATC9iuBPQgTAJgWAIIgGgBQgmgGgogLQhRgWhNgjIgIgLQhFA0hPAkIgQAHIgQAGQh9AziCAAIgHAAgAj/JEQgOgWgSgSQgIgKAhAyIADAAIAEAAgAoCGmIADgDIgJggQACASAEARgAwkniQgCBGAPBJQAbCJAPB1QjEidCNjwg");
	this.shape_2.setTransform(-714,-218.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9900").s().p("EgI9AmMQhWAAhEgiQgTgJgRgLQg3glgpg+Qg8hZgahjIgGgbIAEgCIAMACQAXABA1gDQgVgrgagkQgRgWgTgTQgMgMgOgKQgvgmg7gUQgSgPgOgTQhah4gxiPQgsiBgMiIQgPicABicQAqi4BIiyQBAhiAdh1IAOADQg5C9CqBsIARAKIgKgUQgchCAbhHQBGi6CwhmQAegSAhgPIAFgDQC3hRBEi2QAUg2ANg3QAmidgVigIADgEQDEBuARD4IADAeQAKBKAgAWQAuAfBahPQBihXAkhxQAZhPgGhbQgEg3gKg2QgRhYghhWQhDirBxgVIALABQBFAHBAAUIAgALQBpAnBeBLIAiAcQBQBHAqBYQAuBigCB1QAAAegEAcQgFAlgKAkIAFAGQgJAHgKACQgJADgMgGIgIgEQhsgvhHDCQgjBfAEBdQAGB+BPB3QATAdATAVQAyA5A0AKQBgAUBniJQBShtBCh+QAihAAmhCQgWCWBGCDIABACQApBMBJBGQAhAgAdAhQAKAxASAwQAnBqANBvQAOB4gLB6QgIBcg2BLQgLAPAIARQASAlAdgeQA0g1AchFIA6iJQAHCdgbB/QgUBggnBOQhgDAgmCuQAlAEA2BOQgSANgmA3QjUE3jjgMIgegDQAVgIATgJQCuhPgTi9QgDgegIghQgSAShIAxQh7gYAHiSQABggAIglIAEgSQAxjRAxh6QiECfiwCJQgTgTgPgUIgJgNQgIgNgHgNQgRghgHglQgDgPgCgQQgIhaAuhtQAag9ACg7QADhKgkhHQgOgcgUgbQhAhXhEhWQhDhUhIhSQgcgggYghQgWgcgRgdQgphCgSg/QAFAtgGAuQgeDui1COIgGgEIgJATQgSAqgEAyQgGBog0BRQiGDThFilQgIgTgHgXIgHgbQgfClhmCOQizCGAyD8QCGEQEkAnQAdAtA1AeQhMA+hVAlQgyAWg1AOQhcAZhlAAIgCAAgAwFU+QgPh1gbiJQgPhJAChGQiNDwDECdgAkefZQghgyAJAKQARASAOAWIgHAAgAogcYIAJAgIgDADQgEgRgCgSgA2+ZJQhKiNgDiVQgChQAThTQAfiGBFhsQgEAtgDAtQgvDFAFDMQACB2AXByIgQgcgAXMNpQgJhTgVhQQA8BuAVB5QgbAxgUA1QAFhWgJhUgAsSgaIAEgfQAGgrgGgjQgRhrh7gVQg0gJgqACQhlAFgwBBIgBgFQgFgjAPggQBXitAWi4QAslqBuEmIAVgHIAGARQAJAZANAYQAcBVAmBSQAuBjAGBuQACAegCAgQgDA8gOA6QgaBohABgQAhhHAOhJgAWjgpIgMggQgYhFgbhpQAEhpA7hRQAOgUASgTQgGAXgEAXQgaCLAeCaIAKAsIAKAnQAMAogbAiQgPgYgQgpgAHq69QAIh2AphvQA0jtCZikQAdgfAbgUQAMgJAMgHQBSgxA5BBQAZAcAUAxQANAhALApQArCdAJCnQgZiuiagFQgigBggAJQgnAKgkAZQhYA7g8BLQhKBdggBzQgOAzgGA3QgDg2ADg0g");
	this.shape_3.setTransform(-711.6,-361.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFF00").s().p("AgvPqIgCAAIhNgUQhNgehFgpQhGgqg/g1QgigdgfghQhDhEhPgmQhOgmhbgLQgUgCgRgEQiigigMiiIgBgcQgBjkDEiYQDNihAwjuIADgNIADAIQATAuANAvIAKAvIAHAlIAAADIAFAnQAGBCAfAwQAiA0AiAEQAfADAfgmQAbgjAchEIABgDQASguAQgvQAUg9APg9QAahsALhvQAWjdBgjDIAFACQgRCHAmCrQAIAlAJAmIACAGQAwCnB/BJQApAYAxAOIAFACQAjAKAoAFQA8AHAkAbQArAgAJA9QAGAtgLA8QgqDYgfDDIgDAQIAKAFIAIAEQCBA8BLhUQBnhyB5hYQhVBngZB6IgBACIgGAnQgIBAAIBFQAXDHCxiSIADADQBJBigfBxQgKAogYApQgSAfgKAmQhgA2h1gNQgVgCgVgEQiNgciJAjQgcAHgaAJQgsAPguAJIghAFQgvAGgyAAQhQAAhXgQg");
	this.shape_4.setTransform(-690.5,-224.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF9900").s().p("EgL0AmVQgYgPgWgTIgPgOQhxhvhOhaQgcgfgXgeQgfgngXgiQAxgPAigZQhQgUhLgiIgEAKQg+gVg0ggQgfgUgbgYQg3gwgohBQgbgtgVg1Qg0iDAFiHQAEhTAYhUQAZhWA+g+QCjihA3i+QgrCqBZBlQApAvBEAgIARAHQBSAcA2hVQA1hVgehJQgJgWgRgVQgzhBgRhDQgkiKBqiVQBfiGBVgnIAKATQADAZAEAWQAcCPBSgjQA1gXBMhgQB3iYAei0IAIACQARhTAFhTIACgVIABg4QAAhtgUhtQgKg4AEg6IABgRIAGAIQBqCdBMCxQAjBPAwBGIAKAPIAPAUQBNBlAxiAIAJgXQAkhtgGh2IAXhUIAQhMIAKgqQApilBBicIAGgPQAshaBJALQAmAGAuAgIAaAUQBHA4AyBGQAiAxAYA3QAXA4AOA+IABAGQAdCOAHCSQAEBMgDBNQgDBYgkBMQhFhig9ACQg8ADg0BmQgqBVgSBVQgqDFBTDHIASAnQAdA7AgAZQBDA1BSheQBVhfA5h1QAzhoBNhEQABB1AwBrIADAHQAvBnBaBcQA9A/AyBLIASAdQB6DHgJDXIgBATQANBTgGBOQgKCFhAB7QgPAegcAfQBCg0BTgYQBBgTAjAYQhnBmgHCTQgCBFgaA5QgLAcgRAYQhdCCioBHIgogBQAKglASggQAYgpAKgnQAfhyhKhiIgCgDQiyCSgXjHQgHhFAIhAIAGgnIAAgBQAah7BVhnQh6BYhmByQhLBUiBg8IgIgEIgKgFIACgQQAgjCApjbQAMg8gHgtQgJg8gqghQgkgbg8gHQgogFgkgKIgFgBQgxgPgpgYQh+hJgwinIgCgGQgLgmgIglQgmirARiHIgFgCQhgDDgUDdQgLBvgaBsQgPA+gUA8QgQAvgSAuIgCADQgbBEgcAjQgeAmgggDQghgEgjg0QgfgwgGhCIgEgnIgBgDIgGglIgLguQgMgwgTguIgEgIIgCANQgwDujOChQjECaABDkIABAcQANCiCiAiQARAEATACQBcALBNAmQBQAnBCBDQAgAhAiAdQA/A1BGAqQBFApBLAeIgBADIgCgBIiKATQiaAUihATIh3ANQgWADgUAAQhdAAhMgwgAsVipQgZg4AJhgQAQiqh3hJIgBgBQgRgKgVgJQg8gZgCBNQgECOhjgLQgPjpBNjZQA4ieBrh/QgGB7BDCwQBdDxATD+IADAkQAFBngbBiQglgVgTgrgAVIldIgCgFIACgKQAQhrA/hWQgEAwgBA3QgCAyABA4QABA7ACBBQgxgMgbhxgEAKZgkfIAQgaQBjiWBLAMQAnAGAgAwIAEAFQATAeANAdQALAXAIAXQAFAQADARQAJAngDAlQgUgSgVgNQhvhEhvBtIguAuQh6B6g3BHQA1jCBnikg");
	this.shape_5.setTransform(-706.3,-368.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFF00").s().p("AgjPHIgHgWQgahFgwguQgOgNgPgMQgagSgggNQgRgHgSgGQgegIgegGQgygLg0gFQhCgFhEAEIhwALQgnAFglgCIgdgDQhcgKhTgyIgGgEQgVgNgRgUQhihwAYiQIACgOQAhiZBzhmQAPgNALgHQApgZAmgRQAYgKAVgIIAhgLQAZgGAWgKQA7gXAvgrQAvgrAJg+IAJg4QA7BAgVBIIgHARQASAAANgFQAVgJAJgZQAHgWAOgSQAagoAQgrIAFgOQAEgNADgPIAAgEQATh4gRh4QgFgoAIgkIABgFIADgQIAIgnIAHgiQAfh/BPhiQAcgiAmgcQg4BngRBxQgFAkgCAkQgCBZAMBVQAFAhAHAhIADALQAHAYAKAVQAnBSBKAzQAQALAWAHIANAEQBEARA8gXQANgFANgHIABgBQASgKARgOQAPgMATgCQBHgHAyAtQAKAJAJAMIAgAnIALAPIACAEQAIAMAGAOQAnBaADBeQABAxgIA0QgFAggQAfQgdA6gkA6IgXAkIgPAVQgOAUAAAZQAAATAJAUQASAqAtABIAoADIAEABQAuAEAogYIAlgVQArgaAfgjIASgUQAegkAZgmQAVgeASggQAIgOACgOQABgHAEgJQAOBxgwBmQgaA4gMAzQgEAOAHAPQANAhAXAZQAJAKAQAEQAiAIAXgXIAugqQAPgPASgFQAcgHAhATQALAFAGAOQAbBCgrA7QgSAYAcASQAsAdAugYQgjAtgoAnQhLBKhfA0g");
	this.shape_6.setTransform(-682.4,-227);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF9900").s().p("EgPAAnBIgrg4QgOgSgVgRQgTgPgZgPQgcgOgfgTIgcgRQgTgMgVgIQgYgKgagEQhagRguhSQAZAPAgAHIA3AMQAuAJAigbQgHAAgIgCQgdgKgYgRIgYgUQhKg7gvhNQgVghgQglQgNgfgKgiQgLgkgFglIgJhCQgMhagIhbQgCgaACgeQACgyANgwQARhGAmhAIAwgGIABALQABARAEARIAOA6QANA0AfAtIAGAIQAVAcAmAHIAfAFQAoAFAhgRIANgJQAfgUAPgfQAWgtgLgsQgFgUgMgUQgegzgZg0QgVgtgRgtQgIgXgEgaQgEgdgCgfIAAgDQgEheANhaQAViKAqiGQAJgbAMgbQBVjEC/hYIBGAhQgrBagSBfIgCAMQgLBGAQBFIAKAqQAKAlAZAbIAOANIALAIQBSA5BcgZIApgKQAOgEANgGIARgJQAKgHAKgIQAPgOANgOQA2g8A0hLQALgQAIgRIADgIQAthvAWh3QAEgWABgaIAAgJQAAhAgIg+IgEgTQgLhEgXhAIgMgoQgOg6gWg1Qg+iVAticQAZhTBIgkIAJAPQgdAdAMAmQAJAcAHAfQAFAZAPAYQApA/BEAjIAoAXQAsAZBKgyIAWgNIApgbQAVgMATgHQATghASgiIAFgeIAQhZQAGgiALgfQAXhJAug8QAUgZAXgYQA0gzBDgUQARgHAQgDQArgIArAWQAdAPAWAWQANAPAYAVIAJAIQAaAYAXAbQAuA3AdBCQAMAcAJAfQAeBhAOCgQAEA4ADA/QAFBzgoBsQgOAjgKAlQgOAvgkAgQgJgOgEgWIgPgMIgNgNQgZgZgcgVQhUgMg/AhQg5AdgnBBQglA+gQBIIgDASIgiCnQgEAvgBBAQgBBRAEA4QAEA7AKAeQALAjARAjIARAcQAKAOAMALQApAkBDgLQBBgKA8gaQAVgJAQgNQAQgNAPgOQAogoAZg0QAVhAARhBQAMgtACgwIAEgDIAEgDIAGgCIAAAAIABAAIACgVQACACACAYIAEADIAEAEIgCAPIACACIgDAfQAHBaAMAmQADALADAHIACADQAbAnAdAhQAOAPAQAKQAfAWAeAYQBFA5A3BHIAWAdQAXAgATAiIAHAMQAKAUAHAUQAkBigBBmIgDABIADAJQAoClhbCkQAagTAdgNQBPglBogDQA2gDAqgrQhrCMgvDvQgyD3jHCoIgegdQAognAjguQguAZgsgdQgcgTASgXQArg8gbhCQgGgNgLgGQghgSgcAHQgSAEgPAPIguArQgXAWgigIQgQgDgJgKQgXgagNghQgHgPAEgOQAMgyAag5QAwhlgOhyQgEAJgBAIQgCAOgIANQgSAggVAfQgZAmgeAjIgSAVQgfAjgrAZIglAWQgoAXgugDIgEgBIgogDQgtgCgSgpQgJgVAAgTQAAgYAOgUIAPgWIAXgkQAkg5Adg6QAQggAFggQAIgzgBgyQgDhfgnhbQgGgNgIgNIgCgEIgLgPIgggmQgJgMgKgJQgzgthGAHQgTACgPAMQgRAOgSAKIgBAAQgNAHgNAFQg8AYhEgRIgPgFQgWgHgQgLQhIgzgnhRQgKgWgHgXIgDgMQgHghgFghQgNhVADhYQACglAFgjQARhxA4hnQgmAcgcAiQhPBigfB/IgHAhIgIAoIgDAPIgBAGQgIAkAFAnQARB4gTB4IAAAFQgDAOgEAOIgFAOQgQArgaAnQgOATgHAWQgJAZgVAJQgNAFgSgBIAHgRQAVhHg7hBIgJA5QgJA+gvAqQgvAsg7AZQgWAJgZAHIghALQgVAIgYAKQgmAQgpAZQgLAHgPAOQhzBmghCZIgCANQgZCQBjBxQARAUAVANIAGAEQBTAxBcALIAdACQAlACAngEIBwgLQBEgFBCAGQA0AEAyALQAeAGAeAJQASAFARAHQAgANAaATQAPALAOAOQAuAtAaBFIAAAXgAUelgQgdgRgHgwQgDgaACgZIADgZQAEgWAJgUQA4AvgRBuIgHAgIgLgGgAuSr9QgxiqiDgbQgIjLC6ixQAYACgVCmQghEFBbD0QAYBBg9AsQAHhogdhlgEAHUgiuQgCiGBVhlQCZhOBLBNQA0A1APB+Qg2hVg/gRQhbgahsB2QgdAggYAjIgJAOIAAgOg");
	this.shape_7.setTransform(-693.9,-380);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFF00").s().p("AFmQdQg6gCg0gUQgRgHgRgIQgngVglgfIgBgGQhWAPhSAQIgNACQhcAThQgUIgCAAIgcgIQg2gTgwgkQgtghgoghQhwhehQhkIgFgGIAJAAQBOgFBOAAQgpgugygeQg8gjhJgMQgwgIgogNQiLgugphsQgnhmAyifQAVhAA5gbIDMhdQAugVAigYIACgCQBahAAJhXQAEAPAFAOIACADQAZA9A4AgQAnAWAgAKQAVAHATACQBkAIAUiPQAFgmgBgyIAAgHQAAguACgtQAFh+Abh5IAKgrIAAgBQAoipA2iZIAPAFQgtClAiCwIACAKQAJAnAKAoIAJAdQAzCVBvA+QArAYAzALIAKACQAgAGAkABQBCADAtATQAvAUAZAmQAtBFggCAQgsC0giCiIgHAhQEegFBPjVQAIBCAABFIAAAEQAAB2gXB/QghC7CPgvIAHgDQA/CEgWBYIgCAIIgEAMIAAABIgWgJQhlAwhnArQhnArhpAlQhSAehKAAIgPgBg");
	this.shape_8.setTransform(-692.8,-222.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF9900").s().p("EgKKAoiIihgdQhhgSh5hLQBSA5hUgoQhUgpg2g1Qg3g2AFgbQCIAugGgdQgHgch7hmQh8hnhNhPQhOhQAMiWQFhBAianLQjonKDRkgQDQkhCkiJQgdBjgQCZIAUABQBhAAA/haQgPArAKA2IAAALIgMAWIAAAyIABAAIAJABQgBAVAEASQAMA6A5AhQAzAeAuAIQASADASABQBJAAA9g6QAxgtAohRIABgCQAzhmAahsQAbhuABh1IAAgvQgBgtgCgsQgIiYgciWQgojZApjVIAbAFQBBDmCoClQBwBxAyg+QAdgmAHhjQAEgyAGgyQAWioA3ikQBDjICjg3QAxgQA4gEQBdgFA6A2IAQAQIAGAJQAcAkASA1QASA3APA5IAMAxQAgCRAHCZIAAAeQgCCLhOBxIgFAHQg8BUgLiQQgCgYgHgQQgWgxhLAUQjLA4iLCVQgQASgQATQiOCtA6DyQAHAcAJAcIAMAkIAIAWQAzCEBbBsQARAUASATQAfAhAiALQAvAPAzgdQBZgwAkhtQA6irBdiOQAFCWA6CLIAKAYIACAFQBWDCCMCsIAUAYQCLCkgLDYQgICRgqCMIgPAwQArhzByg7QBGglBMAWQilA3g5CiQgIAYgGAZQhEEkiiD5QgZAogqAdIgVgFQAVhYg/iDIgGACQiPAvAhi6QAXiAAAh2IAAgEQAAhFgIhCQhPDWkfAFIAHgiQAjiiAsi2QAfiAgthFQgYgmgwgTQgtgThCgDQgjgCgggGIgKgCQg0gLgqgYQhwg+gwiUIgKgeQgMgngIgoIgCgKQgjiwAuikIgPgFQg3CYgoCpIAAACIgKAqQgaB5gGB+QgCAuABAuIAAAGQAAAygFAnQgUCOhkgIQgSgBgWgHQgggKgngXQg4gggZg8IgBgEQgFgNgEgQQgJBXhaBBIgCACQgjAYguAVIjLBeQg6AbgUBAQgyCfAnBnQApBrCLAuQAoANAwAIQBJANA7AjQAzAeApAuQhOAAhOAEIgJABIAEAFQBQBkBxBeQAoAiAsAhQAxAkA2ASIAcAIIgXAQQiDBZiSAAQgwAAgxgJgAwOzBQgKgnhQAvQARibB0hzQAdCAAOCSIACAPQAEAwADAxQAEA/AABFQg7hhgoifgEALagnoQhiggijBDQB8i4CJCVg");
	this.shape_9.setTransform(-689.2,-373);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFF00").s().p("AkbOGQgtgqgahCIgDgIQhBimhShUQgfgggigUQCPgThJhEQgmgjhfgwIgJgFIgogVQhGglhCgpIg4gjQh3hPALh5QAJhcBQhzQAaADAXABQDmAJgdjOQBgA2BNBjIAEAGIANARIAWAhIAPAYQB8gbBcg3QApgZAjgfQAVgTATgVQApguAeg5QAmhMAXhPQAWhNAGhRQAEg/gGhBIgGg0IASAwQANAgAPAfQAQAhARAfQA/BuBZBfIAfAfQAiAgAnAbIABABQAwAhA2AaQAbAMAUAQQArAiAQA0QAMArgFA2QgKBiggBbIAFADQgtCCA2AzQAXAWApAHQBPANA1hPQAyhLAlhTQgCBKgNBeQgIA+gMBHIgLA5IgCAJQgvDxC9hBQAMAtACApQAFCciPBWQgjAUgrARIgMAFQgaAIgaACIgmACIgGAAIgJAAQhSAChQAJIgcADIhmAOIgsAGIitAXIgvAHIhKAJQhHAJhIAFIghACQhMgRgzgwg");
	this.shape_10.setTransform(-702.5,-212);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF9900").s().p("Aoyf/IhXgFQh0gJhag/QgWgPAMgDQANgCgug3Qgvg2h2gvQh3gvhHAJQBXhAC9ggQhohdjKhqQjLhqgRkJQgRkJDNjPQBvhvAwiGQA5idAJkSQAVAiAoBlQAjBZAPAMQATAPBIAAQBMAAASgVQARAMAlgHQAIgBBAgRQBcgYAQAvQALAeAOgGQAPgGAEAMQA3AAAqgdQAXgRAUgaQA1hTA0hSIAIgNQAegyAXg0QAYg3ARg6QAbhgAFhmQADhEgChDIgBgcQgHiPgiiMQg3joA6jeIARgFQA6DMCiCbIAMALQCLCIAmCtQAHAeADAgIAFAnIAAABQAVC2AbC1IAEAdQAhDWCBgLQAxgEBAgkQBog/A9hxQBAh4BPhvQgIAkAAApQADCEBnCwIAAABIAJAOQBwC3BpC4IAtBOQCqErhuEcQgbBGgsBGIAFACQBOh5CjgFQjrCMglEbQggD2i4ChQh3BoiIgBQgggBgggFIANgFQArgRAigUQCQhWgGicQgCgpgLgtQi9BBAvjxIABgJIALg5QANhHAIg+QAMheAChMQglBVgxBLQg1BPhQgNQgpgHgXgWQg1gzAtiEIgFgDQAghbAJhiQAGg2gNgrQgQg0gqgiQgVgQgagMQg3gagwghIgBgBQgmgbgjggIgegfQhahfg+huQgSgfgPghQgPgfgNggIgSgwQgNhhghhUQARBdAdBYIAGA0QAFBBgEA/QgGBRgUBNQgXBPgnBMQgeA5gqAuQgTAVgVATQgjAfgpAZQhcA3h7AbIgQgYIgWghIgNgRIgEgGQhNhjhgg2QAdDOjlgJQgYgBgagDQhQBzgIBcQgMB7B4BPIA3AjQBCApBGAlIApAVIAJAFQBeAwAmAjQBJBEiOATQAhAUAfAgQBSBUBCCmIADAIQAaBCAtAqIhHBHQhMAAhMgEgAGUtUQgIgdgMgdQgehLgQhJQhJlQD0kMQAZghAegbQA/g5BageQBmgjBHAfIAOAHQAXANAUAWQAlAoAYBEIAWBGQASA9AOA9IAMA3IAEAUQAPBQAIBQQAEAngBAlQgBAhgEAhQgPBng0BaQgEgWgGgWQgQg4gigxIgTgYQhxiJicBuIgJAGQhlBKg5BjQg7BogKCDQgEAzgcArQAYiGgkh9gAvj9oQgKgIgKghQAXg7Aeg2QBLB2gBCZQgqg7hBg6g");
	this.shape_11.setTransform(-696.9,-319.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFF00").s().p("AgCQGQgYAAgagGIgHgBQh5gbhcg9QhzhLhHiAQghg7gYhFQA+gLAPgsQASg0gvhfQgRgjgXgdQgWgdgdgWQghgbgqgTIgBAAQg8gbgxglQhCgxgthEQgdgqgVgvQBbhIAcgeQArgvAGhKQAFgygJg3IAHgPIABAAQAiARAcASQA2AiAtAqQASARA7AhQAoAWATAsQAPAiAZAQIABABQAHAFAJADQARAIAWAAQAqAAA4gYQBagnBLg4QAcgUAZgWQAVgTASgUQApgqAkgvQBLhlAeh0QAThJABhOQABgjgEgjQgKhwABhwQARBpAwBbIACADQARAhAWAeQAuBDBAA5QA0AuApA1QBSBsAhCHIAKAqQAQBRAEBRQAEBhgOBfQgPBvAjBlQARAxAcAuQADiXBohtQAogqArgpQgvBNAEDPQAABFADBGIACA5QAGB6AMB6QAMCBh4AsQgkANgkAKIgagDIACAJQgrALgrAGQg/AJg+gCIgTgBQiOgJiFhCIgSAmIgJAHQhCA0hQAAIgFAAg");
	this.shape_12.setTransform(-711.4,-226.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF9900").s().p("EgIgAheQiJgUh+hcQgZgTgZgVIghgeQh7h1gfh7QgOg4AFg4QADglALgmQACgEAHhlQAHhkirALQjHA9hxlLQg3igAziXQAviKCnjVQBjhaC6lQIBIBdQBMBFAeh3QBHANAXAWQBYBRA9BsQA3BjCEAPIABgBIAMgEQAFgCAJgsQAKgsAEgDQDMhgAkjnIAAAAIAEgYIAGgsIAKhUQARiVAEiXIABgnIAAgEQAAhbgNhWQgmj4CQikQAfB+A/BuQAoBGA0A/QA/BLAkBUQA0B4gCCKQgBBjAWBaQAfCBBNBuQAPAWAQAOQA7AyBRgpIAVgNQCWheA8i3QAKgfAMgfQBEimCCiFQgfAwgPAxQgsCRBqCVIASAZIAFAHQCFC9BlDOQAbA4AZA4QBuD7g7EDIgKAnQgHAbgKAaQgsAMgnAdQhDAzg1BAQg+BKgkBYQgPAlgFAmQgCAPAAAQQAFBWBWAFIAYAAQgWA5gQBEQhBEVkkBBIgZAGQhOAOhPAAIAAgbQB4gsgMiBQgLh6gGh6IgDg5QgChGgBhFQgDjPAuhNQgqApgpAqQhoBtgDCXQgcgugRgxQgihlAPhvQANhhgEhgQgDhSgRhRIgJgqQghiHhThsQgog1g1guQhAg5guhCQgWgfgRggIgCgEQgwhbgRhnQAABuAKBwQADAkAAAjQgCBOgSBIQgeB0hKBlQgkAwgoApQgVAUgVATQgZAWgbAUQhMA4haAnQg4AYgpAAQgWAAgSgHQgIgEgHgEIgCgBQgZgRgPgiQgTgsgogWQg7ghgRgRQgtgqg2giQgdgSgigRIgBAAIgHAPQAJA3gFAyQgGBKgrAvQgbAehbBIQAUAxAdArQAuBDBCAxQAwAlA8AbIABAAQAqATAiAbQAcAXAXAcQAXAdARAjQAuBggRAzQgPAsg/ALQAYBGAhA6QBICAByBMQBdA8B4AbIAHABQAaAGAZABQgZAOgZANQgYALgYAKQiFA4h7AAQgmAAglgFgAn2F3QAoAEAsgMQheAGAKACgAT6VqIgtgBQgDgDgEgCIAFgQIATgQIAHgBQAHgVAdgLQAdgMAbgSQArgcAZgtQAfhWBMg1IAOgCIABAAQgCAFABAFIgBAEIgKANIAAABIACADQgDAOgMAKIgmB5QghBlhmAiQgUAGgVABIgDAAQgMAAgHgDgAU4TnIABABIgEACIADgDgAtuklQAJAMAGALIgBAAQgTAAAFgXgAGCvhQgPi1gVi1IgCgPQgLhmAKhjIAEghQAFgxALgvQAKgpAMgpQA4i1CQhlQAvghA4gZQCahDBUB9IAJAOQAjA7AYA9IADAKQALAbAIAdQAXBPAGBUQAEAvgCAxQACBMgIAmIgCAIIgBgDQg9hphEghQgQgIgQgEIgCAAQhngXh4CDQioC4hDDlQgRA4gKA7IgGAjIgCgcgAu5/EQACgaAIgaQA+A1gMBpQgWgzgmg3g");
	this.shape_13.setTransform(-700.1,-327.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFF00").s().p("ACAPqQhgAAhegQQghgGgggHQhfgVhRgpIgGgDQg3gdgxgnIAMgPQgsgigkgxIgRgYQhZiDAaiEQAOhEArhEQARgbANgaQAphWgGhSQgEg1gXgyQgIgRgKgRQg+hOhegDQhCgCg8gJQg7gJg3gRQgQgEgMgIQgcgTAEgmQACgTAKgXQAzh8AVh1QAHgqADgpQAFhBgFg9QAPArAQArIAcBDIAeBDIADAFQAVAcAWAaQAqAxAhCFQAhCEA3gFIAOgBQAKgIAtgTQBSglATgFQATgFAPgCIAWgEIANgDQCWgnBphlQARgPAQgSIAFgEQA8gsAzg5QBWhgA1iBIADgJQAjhbADhhIAAgXQAAgggDggQAJAXAPAcIAGALIAgA7QBPCJBlB8QAiArAmAqQAgAjAKA2QAKA1AFA1QAJBjgLBgQgJBWgaBSIASAFQgSBbAjBgQBHh6CIhhQAkgbAqgZQh5C6AYDXQAGA2gCAxQgBArgIAoQgcCThzBeQhDA4hiAkIgLAEIASAuQgeAPggANIgDABIgUAIQgZAIgZAIQhIAVhMAHQg8AGg6AAIgCAAg");
	this.shape_14.setTransform(-710.8,-220.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF9900").s().p("EgHMAkYIgkgCQiegLhZhXIgTgKQgXgMgVgQQgrgfgjgqQhihyAIiJQABgYAFgZQAqAAALg+QACgNgMgHIgQgJQAQgqALgqIAFgQQAeh2gChzQgChchKAjIgTALQg4AhggA8QgnBKgpAWQhBhmgTiFQgokPAbkTQADglAWgbQBHhZhjgpQgtAKgaAvQgzBfgEBuQgJEWAzEMQAFAfAJAeIgIgHIgugtQhhhghUhvIgbglQg4hLgbhRQgwiLAjibQAzjhDHhxIASgKQCthaCOiHQCriggQj6IAHgQIAKAFQAlATAaAbQATATAOAYQAgA0AIBJQAMBrAeBlQAdBhAuBZIADAHIAPAaQBJB2BsgIQASgCAUgFQA1gOA+grQAagSAYgUQAggaAcgeQBJhMAxhgQASglAPgpIAEgJIAAgBQAJgWAHgWIAEgQIAIglQAIguAAgxQABiBAthyQAghPA2hIQAahLAFhQQAFhJgMhMQAeAaAbAcQCECNAgDQQAHAzACA2QAGCyA2CkQAeBZAtBWQAfA8AvAYQAwAZBBgOIAdgHQDkhAAbjsQAEgmALgjQARg2AhgvQAPACALgCQAagFALgcIADgLQATgbAQgcQAXgmATgpIgBAaQgEC0A3ChIAGAPQAbBKAoBHIAUAjIABABIAXAjQA1BPBFBJIARATQDWDtgiDsQgRB0hMB0QgJg9gLg7QgOhNhLgIQg/AOgpA1QghArgZAvQgNAOgHAUIgNAhIgEALIgDAHIgBAEIgKAZQghBSgbBUQgPAwgIAzQgOBQAYBNIgFAGIAFgEIAGARQAFANAKAIQA8AwBDgrQAhgUAggYIgCADQh2CxiYCOQhUBOhgA7QhnBAh1ApQglAOgmALIACAFQg+AVhAAUQg0AQg1AOIgmAKIgiAJIgUAFIghAIQiEAfiIASIhUAJIgcACQiNANiMABIgkABIhGgBgAtzKBQgEAqgHAqQgUB1g0B8QgKAXgCATQgDAmAcATQALAIARAEQA2ARA7AJQA9AJBCACQBeADA9BOQAKARAIARQAYAzADA1QAGBTgpBWQgMAagRAbQgsBEgNBEQgaCEBYCDIASAYQAkAxArAiIgMAPQAyAnA3AcIAGADQBRAqBeAVQAhAHAhAGQBfAQBfAAQA7AAA8gGQBNgHBIgVIAkgEIAagCIAMgCIgFgQIAEgBQAfgNAfgPIgSguIAKgEQBiglBEg3QByheAdiUQAHgnACgrQACgxgGg2QgZjXB5i8QgpAZgkAbQiIBjhIB6QgihgARhcIgRgEQAZhUAKhWQALhhgJhjQgFg0gKg1QgLg2gggjQglgqgjgrQhkh8hQiKIggg6IgGgLQgOgcgKgXQgFgqgKgsQgIAcAXA6QAEAgAAAgIAAAXQgDBhgkBbIgDAIQg1CChWBgQgyA4g9AtIgFAEQgPARgRAQQhpBliWAnIgOADIgWAEQgOABgTAGQgTAFhTAkQgsAUgLAHIgNACQg3AFghiEQgiiFgpgxQgXgagUgcIgEgFIgehDIgbhDQgRgrgOgsQAFA+gFBAgAXvT9QAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQABgsAugTQAegNAegFQAuASgfAiQgIAJgLADQgqANgqAFIgCACIgBABQgHAAgHgCgAZyRxQgCgPAJgNIAEgDIADgCIAGgCIAKAGIACADQACAJgCAJIgCAGQgHALgIAAQgHAAgIgJgAXVQ0IABAJIgDABIACgKgAVwB9QgKgRgJgRQgyhjAPhyQBnCtgaBqQgMgQgLgQgAG/yJQgFgegEgqIgDgZQgGg9gFg+IgEg9IgDgoIAJg4QAaiyADi0IAAgNQADjTCdh3QAkgcAsgWQA+gfBFgGIANgBQDdgMgPEVQgEBUAKBSQAIA8AQA6IABADQAIAeAKAeIAOAmIgWgaIgegiIgFgGIgGgHQggghghgUQhTgzhhAbIgKADIgDABQgaAJgcAOQg+AhgjBAIgKATQgWAvgSAuQhTDTgaDeg");
	this.shape_15.setTransform(-706.3,-344.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-863.9,-592.1,321.4,482.9);


(lib.xespeiyou_com__1_52_91684 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.3,1,1).p("AA/AsIAJhQQglgUgkgCQgngBgfAUIAkBPQAVASAdAAQAeABASgPg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#321970").s().p("AAPA6QgdAAgVgSIgkhPQAfgUAnABQAkACAlAUIgJBQQgRAPgbAAIgEgBg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8.2,-6.9,16.5,13.8);


(lib.xespeiyou_com__1_1_24731 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C2DBFF").s().p("ABhLPQgdgYgcgjIgDAEQhICDiUAAQikAAhMh2QgWgggMgkQgnAgguAbQi8Bvj6AAQkfAAilhuQiRhggYijIgdALQhoAjiDAAQkvAAjRilQhihMg1hiQg2hlgBhpQAAiSBFhlQAvhFBAgfQgGgXgBgZQgGh3B3hXQCAhdDrgTQg6AegvBBQhOBvAACJQgBB5BIBXQB5CWEwAAQARAAAygEQAKAcAOAeQApBNBJBAQCyCeEbAAQB+AAB8hGQBJgqA/g9QAVAsAdAlQCjDSGGAAQD/AACIgwQCTg0CDiAQAkAhAnAaQCsByEPAAQDlAAC4hrQBkg6AzhJQB8gIBUhFQBehLAAh1QAAiThuhWQgTgNgWgNQAfAEAaAHQCiAnAFBxQABAXgWAgIgHAJQAbgDAXAAQClAABvB8IAXAaQBmCCAACfQAAAegOAxIgCAFQgWBLgwA+QiZDFlZAAQiYAAh5gzIgCACQiOBdisAHQilAHjuhMQhZgdhLghQhEgegUgRIgJAOQgREelAAAQjQAAhohUg");
	this.shape.setTransform(258.4,132.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E7F1FC").s().p("An3J+QgdgkgVgsQg/A9hJAqQh8BFh+AAQkbAAiyieQhJhAgphPQgOgegKgcQgyAEgRAAQkwAAh5iVQhIhYABh5QAAiHBOhuQAvhCA6gdIA0gDQA8gDA1AMQAjAIAPAIIAKAAQgbgJgVgTQgUgSgCgQQgGimDbhHQB0gmCngIQCKgFCDAZQA/AMAsAOIAAAJQAAAEAHAGQAGAHAWAUIgBghIgigNQAFgUAUgeQAegrAzgmQCOhoDpgKQEygNDsA9QBmAaA+AiQA8AhAJAgIAAALQANg3BAgfQA3gcBMgDQE4gOCxC1QBJBMArBoQB1AGBkAnQB0AtBSBTQBHBIAdBTQAcBMgVAtQCVgIBnAQQAWAMATAOQBuBWAACSQAAB2heBNQhUBEh8AIQgzBJhkA7Qi4BqjlAAQkPAAishyQgngZgkghQiDB/iTA0QiIAwj/AAQmGAAijjSgAVnCJQhTAzAABJQAABKBTAzQBVA0B3AAQB3AABUg0QBUgzAAhKQAAhJhUgzQhUg0h3AAQh3AAhVA0gAgWAYQCrBrD0AAQD1AACuhrQCshnABiXQgBiWishqQiuhqj1AAQhXAAhPANQgZgVghgUQihhjjiAAQjlAAihBjQiiBkAACMQAACNCiBjQChBjDlAAQA1AAAygFQAlAmA4AggAt7pYIAAAAg");
	this.shape_1.setTransform(256.8,84.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ANAIPQhUgzAAhKQAAhJBUgzQBUg0B3AAQB4AABUA0QBTAzAABJQAABKhTAzQhUA0h4AAQh3AAhUg0gAo+ClQg3gigmgmQgyAFg1AAQjkAAiihiQihhigBiNQABiMChhkQCihjDkAAQDkAACiBjQAgAUAaAVQBOgNBYAAQDzAACtBqQCtBqAACWQAACVitBpQitBrjzAAQj0AAiuhrg");
	this.shape_2.setTransform(312,70.8);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,516.8,213.1);


(lib.xespeiyou_com__1_50_40116 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6600").s().p("AgRBWQgGgHAAgKQAAgMAGgGQAIgIAJAAQAKAAAHAIQAHAHAAALQAAALgHAHQgHAHgKAAQgJAAgIgIgAgRgyQgGgHAAgKQAAgLAGgIQAIgHAJAAQAKAAAHAIQAHAGAAAMQAAAKgIAIQgGAGgKAAQgJABgIgIg");
	this.shape.setTransform(97.9,35.4);

	this.text = new cjs.Text("分", "38px 'Microsoft YaHei'", "#FF6600");
	this.text.textAlign = "center";
	this.text.lineHeight = 40;
	this.text.setTransform(128.4,13.6,0.704,0.704);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#643600").ss(2,1,1).p("AvEk4IAAgRIBQhZIDbAAIAAAAAOkF6QAfldAHlbIgBgBIg3hTIgBgBIgugUIrYAAIgGABIAAgBIr3AAIgPAOIgWgOIjgAAIhRBcIgBABIAAATIAFAOIgFAGIAMG1IAAAAIAEDlIAJASIABABIA/AeApvmiIKkAAIAAABIAJAAACTmhILPgBIADABIApASIA3BSAOfF4IAAABIhTAvI68gEIg8gdIgIgQAvCjvIgBgz");
	this.shape_1.setTransform(105.3,32.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D0842A").s().p("ACFCZIgZg2IAIAAIAPABQANAZALAcgAiaiHIAAgQQAbAKAaALIABATQgagNgcgLg");
	this.shape_2.setTransform(25.4,57.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EFDAC5").s().p("AgLAAIAJgHIAOAFIgMAKg");
	this.shape_3.setTransform(30.9,8.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#814218").s().p("As7AUIg9gbIgIgQIBAAbIAtAAIA3gMIAAAMIAZAAIBfAAIAXAAILGACIAhAAIAaAAILJABIADARg");
	this.shape_4.setTransform(100.1,72.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FAE5CE").s().p("AsoDjIgCgtIgkAZIgNkIQKlgjQMieIAGBTIg1BEIAoAzIgBABIgLD6IhaArIgRgoIgWAAIgaAoIhCgLIu2gBIhlgQIgRAQIi7ABIgBgXIgMgDIgcAqg");
	this.shape_5.setTransform(103.5,39.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FAF1EB").s().p("AtACRIgQg2IAZg5IgPg1IAagfIg2hBIAcgjIBGAyIAVgRIgagvIE+AIIADACIAFgCIQ9AFICMAEIgBASIAfAAIAEgJIA3AQIgcAWIgBAbIASAGIADApQwMCcqlAjgArchYIAMAKIAOgMIgRgFg");
	this.shape_6.setTransform(103,17.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#93560D").s().p("AASGHIACghIAAgIIhiAAIAVgLIBOgBIAJieIg4AAIABgRIA4gCIAbmtIhEgCIgTgXIBYAAIhKhnIAnASIA3BSIgmK1IAAAAg");
	this.shape_7.setTransform(193.9,30.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FCD5AD").s().p("AtaE2IgSlqIAYhCIAAgCIgdgyIgFhjIBChGIE+ABIArAbIk+gIIAaAvIgVARIhGgyIgcAjIA2BBIgaAfIAPA3IgZA5IAQA2IgWASIANEKIAkgZIACAtIB+AYIAcgqIAMADIABAXIC7gBIARgQIBlAQIO2ABIBCALIAagoIAWAAIARAoIBagrIALj8IABgBIgogxIA1hEIgGhTIgDgpIgSgGIABgbIAcgWIg3gQIgEAJIgfAAIABgSIiMgEIw9gFIBFgbITGACIAvA4IgIC8IgvA8IABAEIAnAjIgNEgIg8AhIjtACIhPAAIjWAAIxAAKg");
	this.shape_8.setTransform(103.4,32.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#95541C").s().p("ANcGUIA/gkIAXAGIhTAvgABYGTIAhgQIgEAJIAEAHgAuiFdIABgCIBjABIABABIACABIhnABgAujErIAAgKIAaAKgAuskqIgFgRIA+ARgAqGmkIAaAPIAHAYgAB0mfIgjgFIAbAAIAdAEIAEAUg");
	this.shape_9.setTransform(103.4,32.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FEE89C").s().p("ACDGcIgEgHIAEgJIAZAQgArzGbIAAgPIANAMIAMADgAuZE0IAaAAIgVAJIAGAIIgGAIIgDAYIgBABgAM4FWIALgGIBkAAIAAAIgAuljoIAtAAIAAACIgtAMgAumkbIAEgGIA5AAIgUAGgApimMIAQgQIgJAogACTmXIAVgDIAIAAIgQAFIAAAGIgJAMg");
	this.shape_10.setTransform(102.4,31.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#967552").s().p("AqHFaIgPAAIgHAAIgWAAIiBgCIgCgBIgqgfIgBgCIgSlsIAZhCIgegzIgFhlIABgCIBEhIIADgBICsAAIAAAAICUABIAvAbIBHgcITJACIACABIAxA6IABADIgJC+IAAABIgsA7IAlAiIABACIgMEkIgDADIg/AiIgCAAIhxAEQnVAMnPAAQjJAAjIgCgAt1kPIAEBjIAeAyIAAACIgYBCIASFqIAmAeIRAgKIDWAAIBPAAIDtgCIA9ghIAMkgIgngjIAAgEIAug8IAIi8Igvg4IzGgCIhFAbIgEACIgEgCIgrgbIk+gBg");
	this.shape_11.setTransform(103.4,33);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F6C38E").s().p("As8FdIgCgBIgogfIgBgCIgJizIAAgTIgJipIAYhCIgdgyIgEhIIAAgBIgCgfIABgDIBEhJIADgBIFJABIAtAcIBJgcITNADIADABIAYAcIATAWIAGAIIABACIgJDCIAAACIguA6IAnAiIAAADIgGCEIgBARIgHCTIgYAMIgVALIgMAHIgHAEIh5ABIBygEIACAAIA+giIADgDIAMkjIgBgDIglgiIAsg6IAAgCIAJi+IgBgDIgwg5IgDgBIzJgDIhHAdIgvgcIiTgBIAAAAIitAAIgDABIhEBIIAAADIAEBkIAeAzIgYBCIASFsIABADIApAeIACABICBACIhCABIhFABg");
	this.shape_12.setTransform(103.3,32.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F5A84C").s().p("ACJGcIgZgQIghAQIrHgBQgLgcgNgZQKWAHKegSIB6gBIAHgEIBvABIgCAiIg/AkgArtGbIgMgEIgNgLIg3APIgtAAIhAgeIAAgCIgBgTIBngBIBFgBIBDgBIAVAAIAZA2gAuqFkIADgXIAGgJIgGgIIAVgJIgagKIgDiwQAcALAaANIAJCzIABACIAoAfgANdE4IAHiTIA6AAIgJCfIhQAAgANsAQIgBgDIgngiIAug6IABgCIAIjCIAAgCIgHgIIBGACIgbGtIg6ACgAuvBpIgJlEIAtgMIADBIIAeAyIgYBCIAICpQgagLgbgKgAu4joIgBg0IApAAIAUgFIg+gRIAAgRIBQhZIDbAAIAAAAIAhAnIAJgnIKkAAIAAABIAJAAIAjAFIAZATIAJgNIAAgFIAQgGILPgBIADABIBMBoIhaAAIgXgcIgDgBIzOgDIhIAcIgtgcIlJgBIgDABIhEBJIgBADIACAfg");
	this.shape_13.setTransform(104.3,31.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#93560D").s().p("AtwGkIg8gdIgMgOIgBgCIgEjlIAAAAIgMm1IAFgGIgFgOIAAgTIABgBIBRhcIDgAAIAWAOIAPgOIL3AAIAAABIAGgBILYAAIAuAUIABABIA3BTIABABIgCBDQgIE5gcE7IgFAAIhTAvg");
	this.shape_14.setTransform(104.3,33.3);

	this.addChild(this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.text,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(7.3,-10.9,196.1,86.9);


(lib.xespeiyou_com__1_45_55255 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF8C1C").s().p("AIuD6QAmhvgFiLQgDh/hthpQh/h8jyg3Qg5gKhNAFQhDAEhAANQiwAjiwCHQgvAkg1AxQgkAhAAgEQAAgVAmgtQAogtA9gxQCah5CbgpQBagYBMgCQA7gCBfAMQEPAkCKCzQBuCNAACvQAAANgNA3QgSBIgXA+Qg/CihQAXQBRh+AehZg");
	this.shape.setTransform(9.5,13,0.202,0.202,0,0,0,0.2,2.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF7F1C").s().p("AhgBRQgMgSAAgwQAAg2A0gfQAXgOAvgPQAgABAZAKQAmAPAAAcQAAAmgyAyQg2A5gzAAQgkAAgOgTg");
	this.shape_1.setTransform(16.6,25.3,0.202,0.202);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF7F1C").s().p("AlXCOQAAh1CzhsQBIgsBSgeQBNgdA6gFQBsgJA8AcQA4AagFAwQgHBJhBAxQhGA3h8ASQg7AIhhAkQhqAng0AJQgZAFgSAAQhAAAAAg0g");
	this.shape_2.setTransform(6.4,0.2,0.202,0.202,0,0,0,0.4,0.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FC4C0B").s().p("Ag8BKQgLgQgLg9QgMg/A2gMQA0gNAaADIAVADQAaAIAAAVQAAAcgZAwQgiBFgxAAIAAAAQgaAAgLgPg");
	this.shape_3.setTransform(-1.4,27.1,0.202,0.202);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E54106").s().p("AAqBjQhdhbgOgKQgegWh0gxQhogsAAgHQAAgvC7AAIAzABIAiACIAcACIATABQBNAGA4AIQCzAdAABDQAAAzg5BSQg/Bdg7AAQgUAAhLhIg");
	this.shape_4.setTransform(56.3,45.8,0.202,0.202);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,1,1).p("AlCACQgbgSgPgaQgRgdAAghQAAgbANgdQALgdAVgZQAVgaAagRQAbgSAcgEQAmgFAmAKQAkAKAdAWQAeAVAQAeQAOAZADAbQABAHACALQADASACAIQAHAfAQAOQARANAWAHQALAEAJABQAHgBAJgBQAegFAZgCQAkgBAqAEQAJABAJABQAhAGAgANQATAHAOAHQADADADAEQAMAQAKAVQAXAuAEAwQABAEAAADQABAHAAAHQAAAGAAAGQAAADgBADQgBAOgCALQgBACgBADQgXgOgUgJQgGAYgJARQgTAkgdAQQgKgigxgTQgwgThQgCQgPAAgMABQgOAEgHACQgkAKgnADQgaACgogFQgXgDgPgFQAEgKADgNQgJAAgMAAQghAAgYgFQgNgCgSgGQgTgGgQgDQgKgCgLgBQgTgBgSABQgTABgUAFQAFgMANgOQARgSAIgJQAPgRAIgPQAIgSABgTQgHACgLACQgTADgFAAQgEgBgFgTQgEgUABgEQAAgCANgDQANgEAJgEg");
	this.shape_5.setTransform(31.7,23.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E23D00").s().p("AhaCWIAagbQAOgQAIgPQAJgSAAgUIgSAEQgTADgEAAQgFgBgEgTQgFgUABgEQABgBANgEQAMgDAJgFIAGgCQgPgRgMgYQgNgXgCgQQgDgmATgbQAKgLARgHQAagOAagBQAuAAAaAqQAcAsABBXQgQADgBACQgBADACATQACAVADABIAJAAQgGAngQAfQghA4g9ACIgVgDQgUgCgSABQgSABgVAFQAFgMANgOg");
	this.shape_6.setTransform(4.7,23.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CB3600").s().p("ADYC7QgwgThQgBIgbAAIApgNQAlgMAagFQAlgIAoABQAsABAeAJQALADALAFQgHAXgJASQgTAkgdAQQgJgjgxgTgAiZCZQghgBgYgEQgNgDgSgGQgTgFgQgDQBAgCAgg4QARgeAFgoIARAAIADAAQAFANACAMQAFAbAAAkIAAAUIgCAUIgBAJIgBAAIgCANIgVAAgAi4ixQgagpgvAAQgbAAgbAOQgQAIgKAKQAHgMAMgJQAegZAtgHQASgCAYADQAYAEAWAKQA1AYAFAtQADAdgMAjQgHAUgJASIgXAGIgKACQgBhXgcgtg");
	this.shape_7.setTransform(31.2,27.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F0AF0F").s().p("Aj0AoIgNgFIABgIIAaAGQAhAHARAAIAkgBQgfAGgYAAQgZAAgUgFgAECAeQgfgWgWgIQgsgSgzACQAVgKAOgKIAKgIQAcAEAZALQAUAJAdATIABAFIAAAOIAAAMg");
	this.shape_8.setTransform(44,38.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFC22C").s().p("AizAlIgagGIACgUIAIADQAUAFAZAAQAeAAAogJQAagGAxgMQAzgPAZgGQAsgLAjgCQAegCAaAEIgKAIQgOAKgVAKIgMAAQgjADgsAJQgYAFgzAPQgwAPgaAFIgOADIgkABQgRAAghgHg");
	this.shape_9.setTransform(38.9,37.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F74C0D").s().p("AjgB9QgXgDgPgFQAEgKADgNIACgMIABgBIANAFQAUAFAZAAQAYAAAfgGQAtgCAqgIQAcgGBUgXQAggJAXgJQAzgCAsATQAWAJAfAWIAAAAIAAAGQgBAOgDALIgBAFQgXgOgUgJQgLgFgLgDQgegJgsgBQgoAAglAHQgaAFgjAMIgpAOIgWAGQglAKgnADIgQABQgWAAgcgEgADVAPQgZgLgcgEQAVgSAAgcQAAgpghgXQgSgMgVgGQAhAGAgANQATAHAOAJIAGAHQAMAQAKAVQAXAuAEAuQgdgTgUgJg");
	this.shape_10.setTransform(43.5,33.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF661C").s().p("AAhDmQAZgGAxgOQA0gQAZgFQArgLAjgCIAMgBQgXAKggAIQhWAYgcAFQgpAIgtADIAOgDgAhRDLIgJgDIABgUQAAgkgGgbQgCgMgEgNIgDAAIgRAAIgIAAQgDgBgDgUQgCgUABgDQABgCARgEIAJgCIAXgGQAKgSAGgSQAMgjgDgdQgFgtg1gYQgVgKgZgEQgXgDgTACQgsAHgfAZQgLAJgIAMQgTAbADAmQACAQANAWQANAXAOATIgGADQgagVgPgZQgRgcAAghQAAgaAMgeQAMgdAUgZQAWgaAZgRQAcgRAcgEQAmgGAmAKQAkAKAdAWQAdAWARAeQAMAZACAbIAEASIAEAaQAIAfASANQARALAWAIQAKADAJACIAQgDQAfgFAYgBQAlgCApAEIATADQAVAFARANQAhAXAAApQAAAbgUAUQgbgEgdACQgjADgtAKQgYAGg1AQQgxAOgaAGQgmAIgfAAQgZAAgTgFg");
	this.shape_11.setTransform(27.6,18.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F74C0D").s().p("ADUDkQgxgThQgCIgaABIgXAGQgjAKgmADQgbACgogFQgWgDgQgFQAFgKADgNIgWAAQghAAgYgFQgNgCgSgGQgTgGgPgDIgVgDQgUgBgSABQgSABgVAFQAFgMANgOIAagbQAOgRAIgPQAJgSAAgTIgSAEQgTADgEAAQgFgBgEgTQgFgUABgEQABgCANgDQAMgEAJgEQgagSgPgaQgSgdABghQAAgbAMgdQAMgdAUgZQAWgaAZgRQAbgSAcgEQAngFAmAKQAjAKAeAWQAdAVARAeQAOAZACAbIADASIAFAaQAIAfAPAOQASANAWAHQAKAEAJABIAQgCQAfgFAYgCQAlgBApAEIATACQAgAGAgANQATAHAOAHIAGAHQAMAQALAVQAWAuAFAwIAAAHIABAOIAAAMIgBAGQgBAOgDALIgBAFQgXgOgUgJQgHAYgIARQgUAkgdAQQgIgigxgTg");
	this.shape_12.setTransform(31.7,23.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.5,-5.4,78.4,58.4);


(lib.xespeiyou_com__1_44_33284 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// 图层 1
	this.txt = new cjs.Text("我带路,需要1分钟", "28px 'Microsoft YaHei'");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 24;
	this.txt.lineWidth = 248;
	this.txt.setTransform(15.9,-28.4,1,1,0,180,0);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1).to({text:"我带路,需要4分钟"},0).wait(1).to({text:"我带路,需要5分钟"},0).wait(1).to({text:"我带路,需要6分钟"},0).wait(1));

	// 图层 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAD98C").s().p("AD6DRQlBjUiEjNIBxAAQAdDXGSDKgAidDRQghiOiWhDIAAiYIABgLQADgUAMgLQBxDCFFDRg");
	this.shape.setTransform(-78,-49.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FAD98C").s().p("AlyDQQDagtCLhyQB1hgA/iTQAEgJAEgCQBfgFAuAHQAuACAJAeQkfCrg5DQg");
	this.shape_1.setTransform(108.8,-49.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(210,127,0,0.957)").ss(2,1,1).p("AipBjIV7AAQBBAAAAhBIAAkwQAAhBhBAAMgmjAAAQhBAAAABBIAAEwQAABBBBAAIPsAAIAABYIh1AAICUCVICViVIh4AAg");
	this.shape_2.setTransform(17.1,-37.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFC748").s().p("AlaC7IB1AAIAAhYIvsAAQhBAAAAhBIAAkwQAAhBBBAAMAmjAAAQBBAAAABBIAAEwQAABBhBAAI17AAIAABYIB4AAIiVCVg");
	this.shape_3.setTransform(17.1,-37.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-113.9,-72,262,69.3);


(lib.xespeiyou_com__1_43_87315 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.498)").ss(1,1,1).p("AAVmaICBA/IiEBJIAlNAQg2g6g2AoIAjsuIiDhHICGhBIAUiTg");
	this.shape.setTransform(10.6,20.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(255,102,51,0.498)").ss(1,1,1).p("AAAArIhWgrIBYgqIBVAqg");
	this.shape_1.setTransform(10.7,-14);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#791F00").s().p("Ag1IcIAjsuIiDhHICGhBIAViTIAPCTICBA/IiEBJIAkNAQg1g6g2AogAhUlZIBVAsIhVgsIBXgrIBVArIhXAsIBXgsIhVgrIhXArg");
	this.shape_2.setTransform(10.6,20.6);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5.5,-36.3,32.1,113.8);


(lib.xespeiyou_com__1_32_97388 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgWASQgZgOAAgOQAAgmAgAXQARAOAuAlIgBAFQgCADgGAAQgjAAgagQg");
	this.shape.setTransform(-15.8,-98.1,1.049,1.049);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#646464").s().p("AvBCxIgCgQQAAgfBGg2QBOg9B+g1QFOiQGygJIAxAAQA9ACA2AHQDbAbDxBRQDoBLAcAyQAEAHgJALQgKAOgRAAQgQAAhEgdQhhgphCgUQkThblBAAQolAAkBCPQg/AkhHBBQgyAugbAAQgZAAgHgPg");
	this.shape_1.setTransform(-5.1,-116.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#626262").s().p("Aq3GEQgogjABhOQAAhtBKh3QBHhxB+hmQCAhnCfhHQBnguBngcIAEAAQAdgDBJABQBJgBBhAcQBsAfBaA1QDnCLAADTQAACEiSAwQhrAklaAYQiqAMkABBQjvA7gyAAQhOAAgmgfg");
	this.shape_2.setTransform(-26,-181.8,0.947,0.917,0,0,-3.3,1.6,1.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(2,1,1).p("AiFh1QgMAQgPAUQguBEgBAWQgEA3A5AdQAuAXBDACQBlACBBgWQBRgcACg8QABgkgaghQgGgHghgg");
	this.shape_3.setTransform(-5.5,-101.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCDA8").s().p("AgaBXQgqAAgdgQQgigSAAghQAAgOANgXIAHgKQATgUAZgPQArgZAoABQA0AAAaAMQAmASAAAsQAAAhgzAiQgyAgg1AAIgEAAg");
	this.shape_4.setTransform(-9.4,-103.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFBF8E").s().p("AgpB2QhDgCgugXQg5gdAEg3QABgWAuhEIAbgkIDXAAIA+ATQAhAgAGAHQAaAhgBAkQgCA8hRAcQg8AUhZAAIgRAAgAhqhOQgaAPgTAUIgGALQgNAZAAAMQAAAgAhASQAdAQArABQA5ABAygiQAyghAAghQAAgsgmgSQgZgMgygBIgDAAQgpAAgpAYg");
	this.shape_5.setTransform(-5.5,-101.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A19E9E").s().p("AhrBoIgEgBIAAiWIhuArQhFAYgsAKIgBABIgIAAIAJgBQALgVBdgrQA4gbAogOIgBAFIBIAAQASgHBWgRQBYgRAKAAQAgAABOAtQAgATA/ApQiogggUgBQgOABgEAFQgCADAAAHIAwAiQAeAWABAOQgigLhOggIhIgbQgNABg2A7IhCBKQAAgEgFgDg");
	this.shape_6.setTransform(-9.3,-86.7,1.049,0.927);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(2,1,1).p("AIaBaQAAAAAAgBQAFAEAEAEQARAQAIAQQCChbADjNQABgqgHg0QgBgGgHgvQABABADABQAmAQAVAWQgZjvjNheQgLgGgMgEQiyhIlFADQkjADi/BIQjvBZgeC4QAWgMAlgJQAbgHAYgEQgfAogSAzQgZBEgBBMQgBAhAGAfQACAPAFAUQADgEAJgTQALgYArglQgCAWgBAfQgCBzAaBXQAMAnARAgQAuBVBqBIQBDAuCpBVQB3BIA0BXIABABQAJAQAIARQAMgHAIgJQAigbAVgqQAYgyAIhGQAAgGABgHQAAABABAAQARAGARAOQAQANAQAVQAfAmAKAcQCxhKBViZQArhLAShYQAJgwADg0QAAAAAAgB");
	this.shape_7.setTransform(-3.4,-35);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#777777").s().p("AhhJmIgBAAQg0hYh3hHQiphWhDgtQhqhJguhUQgRgggMgnQAhBMA8A0QBDA9CTA5QCfA+AyAlQBOA4AaBbIAAACIACgCQAjgeAVggQAXglAMgvQgIBGgWAyQgVAqghAcQgLAIgMAIQgIgSgJgQgABfHkQgQgUgQgNQAfAHAcASQATANAKAMQAoAAA8gyQA5gvA3hKQBHhfAZhLQgSBZgrBLQhVCZixBJQgJgbgggngAHhA6QBDgaAchPQAYhCAAh2QAAhNgCgTQgIg2gcglIAEAAQALAJAOAGIAiAOIAAgDQgHhdhAhPQgpgxg4giQDNBeAZDwQgVgXgmgQIgEgBIAIA0QAIA0gCAqQgDDPiCBaQgIgRgQgPg");
	this.shape_8.setTransform(3.3,-31);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E0E0E0").s().p("AEDFOIAfhdQAghfAAhLQAAgogNg8IgWhpQApAgARBDQALArAABDQAABUgOA2QgWBSg7AsIgBACQgBAAAAgHgAGUACQgOhxgYg5QgphiiBhKQDlA5AADKQAAAQgHAbQgIAcAAAMgAmgg8QgIgSAAgkQAAiVCgguIAEAEQhAApghAzQggAyAAA3QAAAcAGAVQAGATAUAnQgugegNgdg");
	this.shape_9.setTransform(-3.6,-46.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C2C0C0").s().p("AhzHGQgngkgvggIg7geQglgUgNgLQgygsgdhdQgWhEgPhuIgFAAQAAARgFAWQgGAWAAAWQAABAAOAuQAJAgASAjQhIgtgigvQg1hIAAhxQAAhOAXhaQAehzAzgaIgEAAQgOAIhEA0IhEAzQAEgzBFheQAbgkAdgbQA8g8BGgQQAcgNAZgKQBeghCaAAQDZAACqA+QDRBLBBCYQgFgLgWgPQgTgNgTgIQAPAmAKA5QAKA5AAAqQAABKgCAQQgEAqgYAqIgFAAQgBgWgWg4IgahAQgNEYiUClQhLBUhIAaQhAhjglgwQgOA0glBCQgpBLgdAWQgjgxgvgrgAE5hMQANA+AAAmQAABLgfBfIggBdQAAAMADgHQA6gsAWhSQAOg2AAhUQAAhBgLgtQgQhDgqggIAWBpgAFyjXQAYA5APBzIAFAAQABgOAIgcQAHgbAAgQQAAjKjmg5QCCBKAoBigAmkihQAAAkAJASQANAdAtAeQgTgngGgTQgGgVAAgcQAAg3AggyQAhgzBAgpIgEgEQihAuAACVg");
	this.shape_10.setTransform(-4,-41.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#A19E9E").s().p("AAeKRQgahbhMg5Qgygkifg+QiTg6hDg8Qg8g1ghhMQgahXAChzIADg1QgqAlgMAYQgJATgDAEIgHgjQgGgfABghQABhMAZhEQASgzAfgoQgXAEgcAHQglAJgVAMQAdi4DvhZQC/hIEhgDQFIgDCxBIIAXAKQA4AiApAxQBABOAHBdIAAAEIgigPQgOgFgLgKIgEAAQAcAlAIA2QACATAABNQAAB3gYA/QgcBRhDAaIgJgIIAAABIgBAJIAAABQgDA0gJAwQgZBKhHBgQg3BJg5AwQg8AygoAAQgKgMgTgNQgcgSgfgIQgRgOgRgGIgBgBIgBANQgMAugZAmQgVAfgjAeIgCACIAAgBgAmQgYQAPBtAVBDQAeBeAxAsQANALAlATIA8AfQAuAfAnAkQAvArAjAyQAbgWArhLQAlhCAPg1QAlAwA/BkQBIgbBLhTQCVimAMkYIAaBBQAWA4ACAWIAEAAQAYgpAEgsQACgPAAhLQAAgpgJg5QgLg5gOgmQATAIATANQAVAPAFALQhAiYjShMQiqg+jZAAQiaAAheAiQgZAJgbANQhHAQg8A8QgcAbgcAlQhFBdgEA0IBFg0QBEg0ANgHIAEAAQgzAageBzQgXBZAABPQAABwA2BJQAhAuBIAuQgSgjgJggQgNgvAAhAQgBgVAGgXQAFgUAAgRg");
	this.shape_11.setTransform(-6.5,-37.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#A19E9E").s().p("AgeKOIgBgBQg0hXh3hIQiphVhDguQhqhIguhVQgRgggMgnQgahXAChzIADg1QgrAlgLAYQgJATgDAEIgHgjQgGgfABghQABhMAZhEQASgzAfgoQgYAEgbAHQglAJgWAMQAei4DvhZQC/hIEjgDQFFgDCyBIIAXAKQDNBeAZDvQgVgWgmgQIgEgCIAIA1QAHA0gBAqQgDDNiCBbQgIgQgRgQIgDgEIgGAHQgDA0gJAwQgSBYgrBLQhVCZixBKQgKgcgfgmQgQgVgQgNQgRgOgRgGIgBgBIgBANQgIBGgYAyQgVAqgiAbQgIAJgMAHQgIgRgJgQg");
	this.shape_12.setTransform(-3.4,-35);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(2,1,1).p("AFEstQg8gdgygNQhNgVhPAAQirABipA8Qg5AUg5AbQjZBmivC0QivC1hhDhQAAABgBACQgNAegLAfQhNDOACDXQACCeBWB7QCDC7EdACAEKs+QAbAFAfAMQBcAhByBXQCZB0CLCqQCWC1BYC9QBjDRACC0QABB3g9BzQhvDSkNAjIAlgBALNEoQApAQAoATQAZAMAZANQAtAXAqAaArkE2QBLgeBggZQCIgjCUgSQCLgRCUgCQC1gDCfAVQBWALBPATQA1AMAzAQQArANApAPQALAFALAEAKHKcQA3gFAfg5QALgVAHgWQAGgZAAgcQAAgJAAgKQgCgcgFghQgGgfgKgmQgEgOgEgQQgFgSgEgRAKHKcIAgAAArkE2QgEACgFABQg7AYgvAbQgDACgDACQghATgaAWQgGAEgGAGQgNALgMAMArkE2QgDAKgDALQgKAigGAeQgIAkgEAdQgDAbAAAXQAAACAAADQABAwAXArQALAUANANQAXAXAgAFIUpABAraNtIBKgCIVhgs");
	this.shape_13.setTransform(-1.8,-142.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#383636").s().p("AiYC7Qg/guAAhlQAAgoAGgnQAIg5AUg4QAHgUAIgSIAMgKQAbgWAhgTQgUAsgMApQgQA3gCA1QgCAoAGAkQALBJBEAoQA8AlBMgBICNAAIgHA3IgtAFQgwAFgRAAQixAAhKg3g");
	this.shape_14.setTransform(-78.5,-81.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2C2B2B").s().p("AohD1IiOgBQhNACg8glQhEgogMhJQgGgmACgoQADgzAQg4QAMgoATgsIAGgEQAvgbA7gYIAJgDIgGAVQgKAigGAeQgIAjgEAeQgDAbAAAXIAAAFQABAuAXArQALATANAOQAXAXAgAEIUpACIAgAAIggAAQA3gFAfg5QALgVAHgWQAGgXAAgcIAAgUQgCgbgFghQgGgggKglIgIgeIgJgjQApAQAoATIAyAYQAZA1AOAwQANAsAEApIACAVQACAogGAmQgLBJhFApQgsAag2AIg");
	this.shape_15.setTransform(-2.1,-88);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#95755C").s().p("AruBJQAHgeAJgiIAGgTQBMgeBggZQCHgjCUgSQCLgRCUgCQC2gDCeAVQBWALBQATQA0AMAzAQQArANAqAPIAVAJIAJAhIAJAeQAJAmAGAfQgYgQgZgOQh0hCiXgnQjTg5j0AAQi2AAjjBAQi7AxhyBOQgXAPgTAQQADgdAIgkg");
	this.shape_16.setTransform(-3.1,-110.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFBF8E").s().p("AqyCuQgNgTAAgRQAAiqELhdQDRhJEJAAQC6AADVBGQD9BUAOByQAEAigcAaI0/BFQgQgIgLgRg");
	this.shape_17.setTransform(-3.5,-98.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F3AC76").s().p("AqYDWQgfgEgXgYQgOgNgKgTQgYgsgBgvIAAgGQAAgWAEgbQATgPAXgPQByhOC7gzQDjg/C2AAQD0AADTA4QCXApB0BDQAZAOAYAPQAGAgABAbIABATQAAAcgHAZQgGAXgMAVQgfA4g2AGgAm6iMQkLBdAACqQAAARANATQALARAQAIIU/hFQAcgagEgiQgOhyj9hUQjVhGi6AAQkJAAjRBJg");
	this.shape_18.setTransform(-2.9,-97);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#515151").s().p("AvKJkQgRg0AAhlQAAhcAUh1QANhXAUhBQALgfANgeIABgDQBhjfCvi1QCvi0DZhmQA5gbA4gUQBIgEB0AAQC1AACxBOQCjBICGB9QCAB4BKCNQBLCOAAB9QgBBxguA+Qg3BJh8AbQgzgQg1gMQhQgThWgLQiegVi2ADQiWACiJARQiUASiHAjQhgAZhLAeIgJADQg7AYgvAbIgGAEQghATgaAWIgNAKQgNALgLAMQALgMANgLQgIASgGAUQgVA4gIA5IgJAHQgNALgJAAQhUAAgehcg");
	this.shape_19.setTransform(-16.9,-153.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#414040").s().p("AwwKvQhWh7gCieQgCjXBNjOQgUA/gNBXQgTB1AABcQAABlARA0QAdBcBUAAQAKAAANgLIAIgHQgGAoAAApQAABlA/AuQBKA3C0AAQAQAAAxgFIAtgFIAHg3IT4ACQA2gHAsgbQBFgpALhIQAGgngCgoIgCgVQgEgrgNgsQgOgwgZg0QAtAXAqAaQgqgagtgXIgygZQgogTgpgQIgWgJQgpgPgrgNQB8gbA3hJQAvg+AAhvQAAh/hLiOQhKiNiAh4QiGh9ijhIQiwhOi0AAQh2AAhHAEQCpg8CrgBQBPAABNAVQAyANA8AdQgfgMgbgFQAbAFAfAMQBcAhByBXQCZB0CLCqQCWC1BYC9QBjDRACC0QABB3g9BzQhvDSkNAjI1hAsQkdgCiDi7g");
	this.shape_20.setTransform(-1.8,-142.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#414040").s().p("AwwKvQhWh7gCieQgCjXBNjOQALgfANgeIABgDQBhjhCvi1QCvi0DZhmQA5gbA5gUQCpg8CrgBQBPAABNAVQAyANA8AdQBcAhByBXQCZB0CLCqQCWC1BYC9QBjDRACC0QABB3g9BzQhnDDjxAsIgkAGI1hAsQkdgCiDi7g");
	this.shape_21.setTransform(-1.8,-142.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").ss(10,1,1).p("AIJLZQgCAzgKAwQgRBYgrBLQhVCZiyBKQgKgbgegmQgRgWgPgMQgTgPgPgHIgBAAQAAAHAAAHQgJBFgZAyQgWAqgeAbQgKAIgNAHQgHgRgKgPQg0hZh4hHQiohVhFguQhohIgvhUQgRgigMgmQgahWADh2QACgeABgXQgqAmgLAYQgLASgBAEQgHgVgCgPQgFgeAAgiQAAgcAFgdQjkgXhxiiQhWh6gDicQgCjYBOjOIAbhAQBfjiCvizQCvi2DZhnQA5gbA5gSQCqg9CpgBQBQAABNAWQAxALA+AfQBbAgByBXQCZB0CLCqQCWC0BXC+QBkDSABC1QACB0g+B0QhnDDjuAsQgVADgSACIgiACQACAjAAAcQgDDPiCBdQgIgRgRgPQgDgFgHgEIAAAC");
	this.shape_22.setTransform(-2.2,-99.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FFFFFF").ss(0.1,1,1).p("ADEtRQAcADAgAOAKIETQArARAoATQAZALAYAOQAtAXAqAaAArEhQAhAgAFAIQAOAPAHATQDAANB5AxQALAHAMAFQBdAqA3BGQAbAkAUAqQATgQANgZQAKgWAHgUQAGgbAAgcQAAgJAAgIQgBgdgFghQgHgggIglQgFgOgEgQQgGgTgEgRAkqFxQARgBAUAAQBRgJBcgBQAqAAAoABQA4AAA0AEAspEhQBLgfBggXQCIgjCUgRQCMgTCWgBQCxgEChAWQBVAKBPATQA2ANAzAPQArAOApAPQAKAFALADAJqMsQgDgOgCgPQAAgDgBgKQgCgOgFgbQABAAAEACQAlAPAVAYQgIhRgbg+AtiE8QAXgMAZgKQAEgCAFgDQgEALgBALQgKAhgHAgQgHAigFAeQgDAbAAAWQAAADAAADQAAAxAZAqQAHAOAIAKQAKgRAOgRQBBhZCSg3QB2gsCbgTAjqEQQgKARgRASQgZAngMAXAsfNSQACgIABgKQAHgiAKgeQAAgCAAgCQAUg0AegoQgXAFgdAHQgjAKgWAKQAJgyAXgs");
	this.shape_23.setTransform(4.7,-140.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#414040").s().p("AgvUCQg0hZh4hHQiohVhFguQhohIgvhUQgRgigMgmQgahWADh2IADg1QgqAmgLAYIgMAWQgHgVgCgPQgFgeAAgiQAAgcAFgdQjkgXhxiiQhWh6gDicQgCjYBOjOIAbhAQBfjiCvizQCvi2DZhnQA5gbA5gSQCqg9CpgBQBQAABNAWQAxALA+AfQBbAgByBXQCZB0CLCqQCWC0BXC+QBkDSABC1QACB0g+B0QhnDDjuAsQgVADgSACIgiACIACA/QgDDPiCBdQgIgRgRgPQgDgFgHgEIAAACIAAAKQgCAzgKAwQgRBYgrBLQhVCZiyBKQgKgbgegmQgRgWgPgMQgTgPgPgHIgBAAIAAAOQgJBFgZAyQgWAqgeAbQgKAIgNAHQgHgRgKgPgArFFbIAAAEQgLAegGAiIgEASIAEgSQAGgiALgeIAAgEQAUg0AegoIg0AMQgjAKgWAKQAIgyAYgsQgYAsgIAyQAWgKAjgKIA0gMQgeAogUA0gAKpFhIABANQACAPADAOQgDgOgCgPIgBgNIgHgpIAFACQAlAPAWAYQgJhRgbg+QAbA+AJBRQgWgYglgPIgFgCIAHApgACrg0QDAANB5AvQAMAHALAFQBdAqA3BGQAbAkAUAqQgUgqgbgkQg3hGhdgqQgLgFgMgHQh5gvjAgNQgHgTgNgPQgFgIgiggQAiAgAFAIQANAPAHATQg0gEg5AAQgogBgpAAQhcABhRAJQgUAAgRABQAMgXAZgnQARgSAKgRQgKARgRASQgZAngMAXQARgBAUAAQBRgJBcgBQApAAAoABQA5AAA0AEIAAAAgAL2BIQAAAcgHAbQgHAUgKAWQgNAZgTAQQATgQANgZQAKgWAHgUQAHgbAAgcIAAgRQgCgdgFgfIgPhFQgFgOgDgQQgHgTgDgRQAqARAoATQAZALAYAOQAtAXAqAaQgqgagtgXQgYgOgZgLQgogTgqgRQgMgDgKgFQgpgPgrgOQgzgPg2gNQhPgThVgKIgKgBIgUgDIgDAAQh7gPiGAAIgBAAIAAAAIgxABQiUABiLATQiUARiIAjQhgAXhMAfQBMgfBggXQCIgjCUgRQCLgTCUgBIAxgBIAAAAIABAAQCGAAB7APIADAAIAUADIAKABQBVAKBPATQA2ANAzAPQArAOApAPQAKAFAMADQADARAHATQADAQAFAOIAPBFQAFAfACAdIAAARgAsJBOQAAAxAZAqQAHAOAJAKQAKgRANgRQBChZCSg3QB2gqCagTQiaATh2AqQiSA3hCBZQgNARgKARQgJgKgHgOQgZgqAAgxIAAgGQAAgWAEgbIALg+QAHggAKghQACgLADgLIgIAFQgZAKgYAMQAYgMAZgKIAIgFQgDALgCALQgKAhgHAgIgLA+QgEAbAAAWIAAAGIAAAAgAFGzhQgggOgdgDQAdADAgAOgAjlguIAAAAg");
	this.shape_24.setTransform(-2.2,-99.1);

	this.addChild(this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-123.4,-235.5,242.4,273);


(lib.xespeiyou_com__1_27_72946 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Aj8D9QhphqAAiTQAAiTBphpQBphpCTAAQCUAABpBpQBpBpAACTQAACThpBqQhpBpiUAAQiTAAhphpgAjwjuQhkBkAACKQAACMBkBkQBjBjCNAAQCKAABjhjQBjhkAAiMQAAiKhjhkQhjhkiKAAQiNAAhjBkg");
	this.shape.setTransform(-0.1,-35.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D27F00").s().p("AjuDvQhjhjgBiMQABiLBjhjQBjhkCLAAQCMAABkBkQBiBjABCLQgBCMhiBjQhkBkiMAAQiLAAhjhkgAjXjWQhZBYAAB9QAAB9BZBYQBYBZB+AAQB8AABZhZQBZhYAAh9QAAh9hZhYQhZhah8ABQh+gBhYBag");
	this.shape_1.setTransform(-0.3,-35.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F5B32A").s().p("AixCRQgsg1AVhSQAUhPBKg8QBKg9BQgEQBVgFAsA2QAtA2gVBSQgVBOhJA9QhLA9hRAEIgLABQhMAAgpgzg");
	this.shape_2.setTransform(7.2,-26.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFC748").s().p("AjVDWQhZhZAAh9QAAh8BZhZQBZhZB8AAQB9AABZBZQBZBZAAB8QAAB9hZBZQhZBZh9AAQh8AAhZhZgAB+hiQhSAEhIA9QhKA6gUBRQgVBSAsA1QAsA2BSgEQBTgEBLg9QBJg9AVhQQAVhSgtg0QgpgyhLAAIgNABgAhokIQhaAhgsBKQgYAogHAhQgJAnATAQQAiAdBCgcQA4gYBBg8QA5g0AigzQAigzgUgGQgkgMgjAAQgwAAg0AUg");
	this.shape_3.setTransform(-0.6,-36);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FAD98C").s().p("AifB3QgTgQAIgnQAIghAXgmQAthKBaghQBYgiBTAaQATAGgiAzQgiAzg6AyQhAA8g3AYQghAPgZAAQgZAAgRgQg");
	this.shape_4.setTransform(-10.5,-51);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D27F00").s().p("Aj8D9QhphqAAiTQAAiTBphpQBphpCTAAQCUAABpBpQBpBpAACTQAACThpBqQhpBpiUAAQiTAAhphpg");
	this.shape_5.setTransform(-0.1,-35.9);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-36,-71.7,71.8,71.8);


(lib.xespeiyou_com__1_15_43155 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_32 = function() {
		this.stop()/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(32).call(this.frame_32).wait(1));

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.502)").ss(0.1,1,1).p("AjcjfQAFACBjA8QBlA9AXAGQAaAGAhgOQAVgIAxgZIBFgfIBJgiQBLAsAZA0QAWAtADAzQADA6gZA5QgXAJgWAIQgnAPgnAOQgvAWg7ASQg7ASgoAGQgnAHgeAAQgogCiGhJQiRhQhFhF");
	this.shape.setTransform(-0.8,-43.4,0.419,0.419,0,-10.4,169.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFC32C").s().p("AAVCbQAEgqgLgyQgQhQgZgqQgcgrgsgaIBFgfQApAbAgAuQAuBCAJBQQAEAhgDAmIhPAdIABgFg");
	this.shape_1.setTransform(-10.6,-41.9,0.419,0.419,0,-10.4,169.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#515151").s().p("AgPDgQgogCiGhJQiRhQhFhFIC3jfQAFACBjA8QBlA9AXAGQAaAGAhgOQAVgIAxgZQAsAaAcArQAZAqATBQQALAygFAqIAAAFQgvAWg7ASQg7ASgoAGQgkAHgdAAIgEAAgAFRA1QgJhQgvhCQgfgugsgbIBJgiQBLAsAZA0QAWAtADAzQADA6gZA5IgtARQADgmgDghg");
	this.shape_2.setTransform(-0.8,-43.4,0.419,0.419,0,-10.4,169.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(0,0,0,0.502)").ss(0.1,1,1).p("AAWiGQAiAAAgAUQAlAYAAAiQAAA9hNBDQhGA/gxAAQgUAAgIhRQgHhSgSgYQAkggAbgSQAwggAjAAg");
	this.shape_3.setTransform(-19,-44.3,0.419,0.419,0,-10.4,169.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFBF8E").s().p("AhjA2QgHhSgSgYQAkggAbgSQAwgfAjgBQAiAAAgAVQAlAXAAAiQAAA9hNBDQhGA/gxgBQgUAAgIhQg");
	this.shape_4.setTransform(-19,-44.3,0.419,0.419,0,-10.4,169.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E58134").s().p("AAJEyQAAgwBdhvQBehvAAgzQAAgMgJgiQgNgwgUgpQhCh9h0AAQhYAAgyBFQgiAwAAApQAAAeAUAkQAUAmAeASQAwgDAJgDQAQgKAGgCIAMADIABACQABABAAAGQAAAEgPAPQgTASgPAAQhDAAgqgzQgkguAAg5QAAgxAlg6QA3hWBnAAQCUAABKCPQAnBIAHBOQAABDhPBmQgNAQiACPIgCACQgBAAAAgGg");
	this.shape_5.setTransform(-18.8,-59,0.419,0.419);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#834719").s().p("AgoOVQg0joAApEIABifQACiLAKhJQAIg/AXg1QALgaAmhIIA2hcQA1hcAAgUQg0i7hHAAQg8AAgWAjQgLARAAAYQAAAYAIAEQAQgEAOgTQAOgTAQgDIARAEIACADQABACAAAIQAAANgZAeQgbAggVAAQgwAAgJgmIAAgmQAAhFAxggQAugdA8APQBAARApA4QAuBBgGBfQgCAog1BaQg7BegNAbQhBCIgSBvIANMFQgBBLAMBtQAMBpABAZQAAAHgCADg");
	this.shape_6.setTransform(-18.3,-34.2,0.385,0.379,0,-0.3,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("rgba(0,0,0,0.502)").ss(0.1,1,1).p("AAko6QgNALgRAJQg/AlhCgBQguAAg6hPQg6hPABg/QABh2CQhMQAggUAcgLQAtgSAvAAQBeAABdB/QBWB3gBBfQgBBWgwBMQgSAeiHCmQg+BOgOA6QgJAwgCClQgBBkALDUQAFBoAWHXQgSAagSgEQgUgFgNgLQgbgYgQnvQgOmDACiYQABh5AiiHQAliZA3hCQApgfAAgmQAAgMgHgUQgIgVgIgHQgCgCgBgB");
	this.shape_7.setTransform(-19.3,-36.2,0.385,0.379,0,-0.3,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B4682E").s().p("AgDPTQgUgFgNgLQgbgYgQnvQgOmDACiYQABh5AiiHQAliZA3hCQApgfAAgmQAAgMgHgUQgIgVgIgHIgDgDIADADQAIAHAIAVQAHAUAAAMQAAAmgpAfQgNALgRAJQg/AlhCgBQguAAg6hPQg6hPABg/QABh2CQhMQAggUAcgLQAtgSAvAAQBeAABdB/QBWB3gBBfQgBBWgwBMQgSAeiHCmQg+BOgOA6QgJAwgCClQgBBkALDUIAbI/QgQAWgQAAIgEAAg");
	this.shape_8.setTransform(-19.3,-36.2,0.385,0.379,0,-0.3,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E0E0E0").s().p("AhBD2QA9htAYhlQAdh0gVhdIAAhIIAHgCQATApAGA9QAGArAABBQAABJgcBJQgiBYg8Ayg");
	this.shape_9.setTransform(-30.5,-41.9,0.419,0.419,0,0,180);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E0E0E0").s().p("AAgDQIAAgaQAAiPgJgnQgLgwhNiwQBBA2AiBfQAhBTAABXQgBAagFAlQgIA1gNAPQgHgHgBgLg");
	this.shape_10.setTransform(-33.9,-56.1,0.419,0.419,0,0,180);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#646464").s().p("AnQEKIgEgxQAAhEA5hUQA/hcBig2QBIgnBMgYQBhggB+gSQCHgRBUgmQAwgUBHgqIAGAJQAEAGAAAIQAAAthLAfQg0AWiBAbQiyAkgwANQiFAjhRAtQh7BCgtBlQgRAkgLA0IgQBXIAAACQAAACgIAAQgMAAgFgug");
	this.shape_11.setTransform(-9.7,-76.4,0.426,0.419,0,0,180,0.4,1.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#646464").s().p("AjLCYQg4hFghhQQgghKAAg8QABhXAjgpQATgVAjgSIAGgCQASgQAVgDIAMgBIAkgBQCdAACZCCQCcCEAACKQAABwgZAuQguBViQAAQixAAiIiqg");
	this.shape_12.setTransform(-8.8,-113,0.523,0.357,0,0,176.8,-0.2,-0.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgEALQgSgPgJgOQAVgUAVARQAVAPAAASIgBANIgCADQgCACgHAAQgIAAgQgTg");
	this.shape_13.setTransform(-28.5,-78.9,0.419,0.419,0,0,180);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFCDA8").s().p("AgiAoQgogeABgoQgBgdAPgEQALgDAlADQATAAARADQAcAEAKAQQALAJAAAfQAAAkgKAOQgKAPgbAAQgbAAgigZg");
	this.shape_14.setTransform(-26.4,-77.9,0.419,0.419,0,0,180);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("rgba(0,0,0,0.502)").ss(0.1,1,1).p("AgqhaQAJgCAcAAQAdgBAOADQAtAKAVAjQAVAlgPAqQgNAngnAOQgjAMgogMQgUgFgZgPQgcgQgZgW");
	this.shape_15.setTransform(-25.8,-77,0.451,0.469,0,0,177.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFBF8E").s().p("AgRBXQgUgFgZgPQgcgQgZgWIBJh3QAJgCAcAAQAdgBAOADQAtAKAVAjQAVAlgPAqQgNAngnAOQgSAGgTAAQgUAAgSgGg");
	this.shape_16.setTransform(-25.8,-77,0.451,0.469,0,0,177.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#A19E9E").s().p("AhUARQAXgzAOgJIgLAAIh6ASIgNAAQAggYAsgPQAxgRAyAAIAKAAQAvgMA5AhQAyAdAxA2IgCAAQhjgfgMgDIAAAOQADADADAKQACAIAAAFIgCAAQgFgChDgqQgBAAg1AtQg8AxgKAGQACgTAWgxg");
	this.shape_17.setTransform(-23.2,-70.7,0.419,0.419,0,0,180);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#C2C0C0").s().p("AhLGvIACgRQAGguAAggIgChEQgDhAgDgaIgEAAQgBApgQBDQgJAogMAcQgjg2g6hEQhZhpgfg7Qg1hkAAiBQAAgeAKgyQALgyAIgIIghAdQgcAagDAEIgBgkQgEiDBhhxQBviAC4gTQDqgZByDWQArBPAeCIQAgCOgDB1QgEDKhWCaQhUCXitB1IhfAzQgFiGgvhqg");
	this.shape_18.setTransform(-21.4,-45.3,0.419,0.419,0,0,180);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("rgba(0,0,0,0.502)").ss(0.1,1,1).p("AmvkVQACgEABgEQgBABgCACQgVASgJAIQgJAJgMANQgIgyAGg/QAKhXAvhHQAWgiAcgdQA1g6BKgpQBhg0B0gQQDvgfCQDCQCVDJgIFzQgECqhQCwQg5B8hVBZQh5B/ixA2QAHgUAAgVQAAhCg2hOQgTgahkh3QhRhfglhJQg3hnAAhsQAAgKAAgIQABg0AAgOQADgiAIgcQgHAMgLAVQgBACgBACQgDAHgEAGQgJASgDAGQgBABAAAAQgrhBgChCQgCgzAUg3g");
	this.shape_19.setTransform(-19.1,-44.3,0.419,0.419,0,0,180);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#777777").s().p("AA+HUQAAhCg2hOQgQgahkh3QhShfglhJQg2hlAAhsIAAgSQALA+AbA3QAqBXBKBjQAvBAAyA7IAsA2QBIBvANBCIAagCQAhgFAjgMQBYgdBLhBQh5B/izA2QAGgUAAgVgAljmSQgCgzAVg3QACAngDAuQAAA3AJAmQAFAYAOAiIgBABQgqhBgDhCg");
	this.shape_20.setTransform(-15.1,-34.6,0.419,0.419,0,0,180);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#A19E9E").s().p("AhPIRIgug2Qgyg7gvhAQhJhlgrhXQgag3gMg+IABhCQADgiAIgcIgSAhIgCAEIgHANIgMAYQgOgigGgYQgJgmAAg3QAEgugDgnIADgIIgDADIgeAaIgVAWQgIgyAGg/QAKhXAvhHQAWgiAcgdQA1g6BKgpQBhg0B0gQQDvgfCQDCQCVDJgIFyQgECrhQCwQg5B8hVBZQhKBBhYAdQgkAMghAFIgaACQgKhChJhvg");
	this.shape_21.setTransform(-19.1,-45.7,0.419,0.419,0,0,180);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("rgba(0,0,0,0.502)").ss(0.1,1,1).p("AEuMaQhJgCg8gGQgQgCgPgCQhFgRgnghQgwgqAAhBQAAgFAAgFQAGiHCbhoQCWhjD7gzQAmgHBLgNQA/gKASgFQALgCAJgDQCyg1AViQQAbi8iFjdQhUiLhphdQgKgJgLgJQgDgDgEgDQhUhJhcgmQgMgFgLgEQgVgIgWgGQiCgmioAEQj7AHjWB9Qi+BwiODBQiACuhFDSQhADCAECsQAJE9F3B0QEuBfIlgjQADAAACAAgALkDLQAIBDAeBLQAhBRAFAQQARA2gBAuQgEB1h/BBQh2A+jWAIQgJAAgKAAQgKAAgKAAQgOAAgOAA");
	this.shape_22.setTransform(7.7,-92.5,0.419,0.419,0,0,180);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F3AC76").s().p("AAaD9QhHgCg8gGQgbgTgSgYQgbgkgCg0QgKi3Dnh8QA6geBQgeQhiAug5A4QhaBdAACLQAABSAzAzQAbAcAoAMIgbgBg");
	this.shape_23.setTransform(-3.8,-69.8,0.419,0.419,0,0,180);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#95755C").s().p("AjcElQhFgRgnghQgzgqAAhBIABgKQAFiFCehoQCWhjD5gzIBxgUQA/gKASgFIACAMQimAoh2ArQhQAdg4AfQjpB7AKC4QACA0AbAkQASAXAbAUIgfgEg");
	this.shape_24.setTransform(-7.3,-72,0.419,0.419,0,0,180);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#414040").s().p("AkkMIQl3h0gIk9QgFisBAjCQBFjSCAiuQCOjBC+hwQDUh9D+gHQCogECBAmQgPgEgRgBQgPgBhVAAQAAgTkdA2QhmAchiA2QhxA+hGBMQi2DGhECpQg8CTAADHQAADXCCCCQCRCREPAAQBEAABVgbIgBAKQAABBAyAqQAoAhBFARIAfAEQA7AGBKACIgWAqIgFAAQiUAJiCAAQlgAAjehFg");
	this.shape_25.setTransform(19.7,-92.5,0.419,0.419,0,0,180);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#515151").s().p("ArFJLQiCiCAAjXQAAjJA8iRQBEipC2jGQBFhMBzg+QBig2BngcQEbg2AAATQBUAAAPABQARABAQADQAWAHAVAIIAXAJQBcAmBUBJIAHAGIAVASQBpBdBUCLQCFDdgbC6QgVCSiyA1IgUAFQgSAFg/AKIhxAUQj7AziWBjQibBogGCGQhVAchEAAQkQAAiRiRg");
	this.shape_26.setTransform(2.7,-96.2,0.419,0.419,0,0,180);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFBF8E").s().p("Ai+EnQgogMgdgcQgzgzAAhSQAAiLBchcQA5g5BiguQB0gqClgoQAJBDAeBLQAgBRAFAQQASA2gCAsQgEB1h+BBQh2A9jUAIIgTABIgVAAg");
	this.shape_27.setTransform(-14.1,-71.5,0.419,0.419,0,0,180);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("rgba(0,0,0,0.502)").ss(0.1,1,1).p("AmAqgQh2E4g3EoQgnDPgJDUQgDA7AAA7AJYFHQAEAvADAsQABAUABAUQAAADAAACAJhHPQgCBYgCAwQhvAniNARQh8AQi1ACQjiADi+giQiSgbhcgrQgCglAAgzQAAgFAAgE");
	this.shape_28.setTransform(7.4,-27.4,0.419,0.419,0,0,180);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#A1A1A1").s().p("AgvB2QgRgWgbgcIgRgRQgYgZgWgOIAAAAIgBAAIABAAQgMAYgeAwIgGAJQgmgLgigOIgGgDIgBgBQgTgegLgTIA6ABQAwAAAygEIgBgBQBJgGBIgKIAkgHIACAAIAAgBIgCABIgBgBQA+gMAxgMIAsgLIAAAAQBkgcBbgpIAHBbIgTARIgOgUQgUgigWgXQgRAkgrBvQgGgLgXgsQgRgggRgWIAAAAIgDABIADgBIgeBDQgXA3gHAWQg0hOgogeQgaAxgrBRIgFAAgAl4ALIAXACIAqACIgPAUIgEAFQgYgNgWgQgAiaAMg");
	this.shape_29.setTransform(-2.3,-8.7,0.419,0.419,0,0,180);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#8A8A8A").s().p("AgdBJIgMgSIgJgPIAGADQAiAOAkALIgFAHIgXAoIgbgqgAizBTIgYgnQgXgngPgWQgTAUghAfIgfAeIgSASIgKgZIgWgtIgghCQBSAUBPALIAHABQAuAHAuAEQAWANAYAOIgwBEIgQAXIgPgYgAntAIIgHgeQgKgpgHgUIACgBIgCgBIAAACQgRAIgRARIgeAeIgaAcIgBACQAAg5ADg7IBYAdIAAAAQAtAOAzANIAPAEQgiAqgZAgIgTAaIgJgmgAJLgiIAUgRIACAoIAAAFIgWgcgAoFhTIAAAAg");
	this.shape_30.setTransform(7.4,-7.7,0.419,0.419,0,0,180);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFCD4F").s().p("AhFBnIgygBQAthRAZgxQAoAeAzBOIgEABQg2ANg0AJIgBAAgAkXBMIAFgJQAegvAMgWQAWAMAZAZIARARQAbAcAQAVQhSgEhIgVgAAqBQIAAAAgABIADIAdhDQASAWARAiQAWAqAHALQArhvARgkQAWAXATAiIAOAUQgtAmguAbIgXAGQgsAOgyAMIgeAIQAHgWAXg3g");
	this.shape_31.setTransform(-5.5,-8,0.419,0.419,0,0,180);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F0B111").s().p("AimBeQh1gMh6gfQgpgLgmgLIATgaQAaggAhgqIAgBEIAXArIAKAZIASgSIAegeQAigdASgWQAQAYAWAlIAYAnIAQAYIAPgXIAwhDIAEgFIAQgUQAKATATAcIABABIAJAPIANASIAaAqIAYgoIAEgHQBIAUBTAFIADAEIACgEIAyABIABAAIgxAIIgHABQhhAPhUABIgFAAIgDAAIgJAAQhJAAhMgIgApggMIAAAAIAAgBIABgEIAagcIAegeQARgSARgIQAHAVAKApIAHAgIAJAkQhDgVg5gUgAJMgzIAVAcIAAAAQg3AUg6ARQAugZAugog");
	this.shape_32.setTransform(7.4,-6.9,0.419,0.419,0,0,180);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#414040").s().p("AlwKtQiSgbhcgrQgCgkAAgzIAAgKQA5AWBDAVQAlALApAKQB7AfB1AMQBQAJBOgBIADAAIAFAAQBUgBBhgOIAGgBIAygIQBogBBMgaQAogOAngXQA6gSA3gUIgECHQhvAniNASQh8APi1ACIglAAQjNAAiugfgAC1JfIAFAAIgCAFIgDgFgAiSH1QgugEgugGIgHgBQhPgMhSgUIgPgDQgzgNgtgPIAAABIhYgdQAJjVAnjOQA3kpB2k4IAEgKIATgwIBNgDQgsBggUB3QgUB0gCCqQgCEIBRDAQA+CTBqBYIgXgBgAoFGsIACAAIgCABIAAgBgAIFDYIhuhjQhFg+glgzQglgxg1i4Qg3i9AAhYQAAgnABgKQABgOAEgIIAJgIIAAgFQgFAEgEAJIgYAOQgYANgNAGIAAgzIARgwQAEgNACgxIEWgKQBECyA+F6QArELAUDTQgbg0gzgzg");
	this.shape_33.setTransform(7.4,-29.2,0.419,0.419,0,0,180);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#515151").s().p("ADmJ7IAFgBIAegHQAxgMAtgOIAWgHQgnAXgnAOQhMAahpABQA1gKA3gNgAjDIpIgrgCQhqhYg+iTQhQjAACkJQABipAUh1QAUh2AthgIGYgPQgCAwgFAOIgPAwIAAAzQAMgGAYgOIAYgNQADgJAFgEIAAAFIgIAIQgEAIgCANQgBALAAAnQAABXA3C+QA2C2AkAzQAmAzBEA+IBvBjQAzAzAbA0IAEAzQhbAqhkAbIAAAAIgsALQgxAMg9AMIABABIACgBIgBACIgBgBIgmAHQhIAMhHAHIABAAQgzAEgwAAIg5gBgAgnImIAAAAIAAAAgAEjHpIADgBIAAAAIgCABIgBAAg");
	this.shape_34.setTransform(2.6,-31.2,0.419,0.419,0,0,180);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(0,0,0,0.298)").s().p("AjrAuQhigTAAgbQAAgaBigUQBigTCJAAQCKAABiATQBiAUAAAaQAAAbhiATQhiAUiKAAQiJAAhigUg");
	this.shape_35.setTransform(6.8,0);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("rgba(0,0,0,0.502)").ss(0.1,1,1).p("AEuMaQhJgCg8gGQgQgCgPgCQhFgRgnghQgwgqAAhBQAAgFAAgFQAGiHCbhoQCWhjD7gzQAmgHBLgNQA/gKASgFQALgCAJgDQCyg1AViQQAbi8iFjdQhUiLhphdQgKgJgLgJQgDgDgEgDQhUhJhcgmQgMgFgLgEQgVgIgWgGQiCgmioAEQj7AHjWB9Qi+BwiODBQiACuhFDSQhADCAECsQAJE9F3B0QEuBfIlgjQADAAACAAIAWgqQAOAAAOAAQAKAAAKAAQAKAAAJAAQDWgIB2g+QB/hBAEh1QABgugRg2QgFgQghhRQgehLgIhD");
	this.shape_36.setTransform(-7.1,196.5,0.418,0.418,0,-173.3,6.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#A1A1A1").s().p("AgvB2QgRgWgbgcIgRgRQgYgZgWgOIAAAAIgBAAIABAAQgMAYgeAwIgGAJQgmgLgigOIgGgDIgBgBQgTgegLgTIA6ABQAwAAAygEIgBgBQBJgGBIgKIAkgHIACAAIAAgBIgCABIgBgBQA+gMAxgMIAsgLIAAAAIgDABIADgBIAAAAQBkgcBbgpIAHBbIgTARIgOgUQgUgigWgXQgRAkgrBvQgGgLgXgsQgRgggRgWIgeBDQgXA3gHAWQg0hOgogeQgaAxgrBRIgFAAgAl4ALIAXACIAqACIgPAUIgEAFQgYgNgWgQgAiaAMg");
	this.shape_37.setTransform(12.6,114.6,0.418,0.418,0,-173.3,6.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFCD4F").s().p("AhFBnIgygBQAthRAZgxQAoAeAzBOIgEABQg2ANg0AJIgBAAgAkXBMIAFgJQAegvAMgWQAWAMAZAZIARARQAbAcAQAVQhSgEhIgVgABIADIAdhDQASAWARAiQAWAqAHALQArhvARgkQAWAXATAiIAOAUQgtAmguAbIgXAGQgsAOgyAMIgeAIQAHgWAXg3g");
	this.shape_38.setTransform(15.8,114.3,0.418,0.418,0,-173.3,6.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34,p:{skewX:0,skewY:180,x:2.6,y:-31.2,scaleX:0.419,scaleY:0.419}},{t:this.shape_33,p:{skewX:0,skewY:180,x:7.4,y:-29.2,scaleX:0.419,scaleY:0.419}},{t:this.shape_32,p:{skewX:0,skewY:180,x:7.4,y:-6.9,scaleX:0.419,scaleY:0.419}},{t:this.shape_31,p:{skewX:0,skewY:180,x:-5.5,scaleX:0.419,scaleY:0.419,y:-8}},{t:this.shape_30,p:{skewX:0,skewY:180,x:7.4,y:-7.7,scaleX:0.419,scaleY:0.419}},{t:this.shape_29,p:{skewX:0,skewY:180,x:-2.3,y:-8.7,scaleX:0.419,scaleY:0.419}},{t:this.shape_28,p:{skewX:0,skewY:180,x:7.4,y:-27.4,scaleX:0.419,scaleY:0.419}},{t:this.shape_27,p:{skewX:0,skewY:180,x:-14.1,y:-71.5,scaleX:0.419,scaleY:0.419}},{t:this.shape_26,p:{skewX:0,skewY:180,x:2.7,y:-96.2,scaleX:0.419,scaleY:0.419}},{t:this.shape_25,p:{skewX:0,skewY:180,x:19.7,y:-92.5,scaleX:0.419,scaleY:0.419}},{t:this.shape_24,p:{skewX:0,skewY:180,x:-7.3,y:-72,scaleX:0.419,scaleY:0.419}},{t:this.shape_23,p:{skewX:0,skewY:180,x:-3.8,y:-69.8,scaleX:0.419,scaleY:0.419}},{t:this.shape_22,p:{skewX:0,skewY:180,x:7.7,y:-92.5,scaleX:0.419,scaleY:0.419}},{t:this.shape_21,p:{skewX:0,skewY:180,x:-19.1,y:-45.7,scaleX:0.419,scaleY:0.419}},{t:this.shape_20,p:{skewX:0,skewY:180,x:-15.1,y:-34.6,scaleX:0.419,scaleY:0.419}},{t:this.shape_19,p:{skewX:0,skewY:180,x:-19.1,y:-44.3,scaleX:0.419,scaleY:0.419}},{t:this.shape_18,p:{skewX:0,skewY:180,x:-21.4,y:-45.3,scaleX:0.419,scaleY:0.419}},{t:this.shape_17,p:{skewX:0,skewY:180,x:-23.2,y:-70.7,scaleX:0.419,scaleY:0.419}},{t:this.shape_16,p:{scaleX:0.451,skewX:0,skewY:177.9,x:-25.8,y:-77}},{t:this.shape_15,p:{scaleX:0.451,skewX:0,skewY:177.9,x:-25.8,y:-77}},{t:this.shape_14,p:{skewX:0,skewY:180,x:-26.4,y:-77.9,scaleX:0.419,scaleY:0.419}},{t:this.shape_13,p:{skewX:0,skewY:180,x:-28.5,y:-78.9,scaleX:0.419,scaleY:0.419}},{t:this.shape_12,p:{regX:-0.2,regY:-0.7,skewX:0,skewY:176.8,x:-8.8,y:-113,scaleX:0.523}},{t:this.shape_11,p:{regX:0.4,regY:1.4,scaleX:0.426,skewX:0,skewY:180,x:-9.7,y:-76.4,scaleY:0.419}},{t:this.shape_10,p:{skewX:0,skewY:180,x:-33.9,y:-56.1,scaleX:0.419,scaleY:0.419}},{t:this.shape_9,p:{skewX:0,skewY:180,x:-30.5,y:-41.9,scaleX:0.419,scaleY:0.419}},{t:this.shape_8,p:{scaleY:0.379,skewX:-0.3,skewY:0,x:-19.3,y:-36.2,scaleX:0.385}},{t:this.shape_7,p:{scaleY:0.379,skewX:-0.3,skewY:0,x:-19.3,y:-36.2,scaleX:0.385}},{t:this.shape_6,p:{scaleY:0.379,skewX:-0.3,skewY:0,x:-18.3,y:-34.2,scaleX:0.385}},{t:this.shape_5,p:{rotation:0,x:-18.8,y:-59,scaleX:0.419,scaleY:0.419}},{t:this.shape_4,p:{skewX:-10.4,skewY:169.6,x:-19,y:-44.3,scaleX:0.419,scaleY:0.419}},{t:this.shape_3,p:{skewX:-10.4,skewY:169.6,x:-19,y:-44.3,scaleX:0.419,scaleY:0.419}},{t:this.shape_2,p:{skewX:-10.4,skewY:169.6,x:-0.8,y:-43.4,scaleX:0.419,scaleY:0.419}},{t:this.shape_1,p:{skewX:-10.4,skewY:169.6,x:-10.6,y:-41.9,scaleX:0.419,scaleY:0.419}},{t:this.shape,p:{skewX:-10.4,skewY:169.6,x:-0.8,y:-43.4,scaleX:0.419,scaleY:0.419}}]}).to({state:[{t:this.shape_35},{t:this.shape_34,p:{skewX:5.5,skewY:-174.5,x:5.4,y:-30.3,scaleX:0.419,scaleY:0.419}},{t:this.shape_33,p:{skewX:5.5,skewY:-174.5,x:10,y:-27.8,scaleX:0.419,scaleY:0.419}},{t:this.shape_32,p:{skewX:5.5,skewY:-174.5,x:7.9,y:-5.7,scaleX:0.419,scaleY:0.419}},{t:this.shape_31,p:{skewX:5.5,skewY:-174.5,x:-4.9,scaleX:0.419,scaleY:0.419,y:-8}},{t:this.shape_30,p:{skewX:5.5,skewY:-174.5,x:7.9,y:-6.4,scaleX:0.419,scaleY:0.419}},{t:this.shape_29,p:{skewX:5.5,skewY:-174.5,x:-1.6,y:-8.3,scaleX:0.419,scaleY:0.419}},{t:this.shape_28,p:{skewX:5.5,skewY:-174.5,x:9.8,y:-26,scaleX:0.419,scaleY:0.419}},{t:this.shape_27,p:{skewX:5.5,skewY:-174.5,x:-7.4,y:-72,scaleX:0.419,scaleY:0.419}},{t:this.shape_26,p:{skewX:5.5,skewY:-174.5,x:11.7,y:-95,scaleX:0.419,scaleY:0.419}},{t:this.shape_25,p:{skewX:5.5,skewY:-174.5,x:28.2,y:-89.6,scaleX:0.419,scaleY:0.419}},{t:this.shape_24,p:{skewX:5.5,skewY:-174.5,x:-0.6,y:-71.8,scaleX:0.419,scaleY:0.419}},{t:this.shape_23,p:{skewX:5.5,skewY:-174.5,x:2.7,y:-69.3,scaleX:0.419,scaleY:0.419}},{t:this.shape_22,p:{skewX:5.5,skewY:-174.5,x:16.4,y:-90.7,scaleX:0.419,scaleY:0.419}},{t:this.shape_21,p:{skewX:5.5,skewY:-174.5,x:-14.8,y:-46.7,scaleX:0.419,scaleY:0.419}},{t:this.shape_20,p:{skewX:5.5,skewY:-174.5,x:-11.9,y:-35.3,scaleX:0.419,scaleY:0.419}},{t:this.shape_19,p:{skewX:5.5,skewY:-174.5,x:-14.9,y:-45.3,scaleX:0.419,scaleY:0.419}},{t:this.shape_18,p:{skewX:5.5,skewY:-174.5,x:-17.1,y:-46.6,scaleX:0.419,scaleY:0.419}},{t:this.shape_17,p:{skewX:5.5,skewY:-174.5,x:-16.5,y:-72,scaleX:0.419,scaleY:0.419}},{t:this.shape_16,p:{scaleX:0.45,skewX:5.5,skewY:-176.6,x:-19,y:-79.3}},{t:this.shape_15,p:{scaleX:0.45,skewX:5.5,skewY:-176.6,x:-19,y:-79.3}},{t:this.shape_14,p:{skewX:5.5,skewY:-174.5,x:-19,y:-79.5,scaleX:0.419,scaleY:0.419}},{t:this.shape_13,p:{skewX:5.5,skewY:-174.5,x:-21,y:-80.6,scaleX:0.419,scaleY:0.419}},{t:this.shape_12,p:{regX:-0.3,regY:-1,skewX:5.5,skewY:-177.7,x:1.5,y:-113.3,scaleX:0.523}},{t:this.shape_11,p:{regX:1,regY:2.6,scaleX:0.425,skewX:5.5,skewY:-174.6,x:-3.7,y:-76.6,scaleY:0.419}},{t:this.shape_10,p:{skewX:5.5,skewY:-174.5,x:-28.5,y:-58.5,scaleX:0.419,scaleY:0.419}},{t:this.shape_9,p:{skewX:5.5,skewY:-174.5,x:-26.5,y:-44.1,scaleX:0.419,scaleY:0.419}},{t:this.shape_8,p:{scaleY:0.378,skewX:42.8,skewY:43.2,x:-17.2,y:-56.7,scaleX:0.385}},{t:this.shape_7,p:{scaleY:0.378,skewX:42.8,skewY:43.2,x:-17.2,y:-56.7,scaleX:0.385}},{t:this.shape_6,p:{scaleY:0.378,skewX:42.8,skewY:43.2,x:-17.9,y:-54.6,scaleX:0.385}},{t:this.shape_5,p:{rotation:43.2,x:-2.2,y:-72.9,scaleX:0.419,scaleY:0.419}},{t:this.shape_4,p:{skewX:32.8,skewY:-147.2,x:-11.8,y:-63.7,scaleX:0.419,scaleY:0.419}},{t:this.shape_3,p:{skewX:32.8,skewY:-147.2,x:-11.8,y:-63.7,scaleX:0.419,scaleY:0.419}},{t:this.shape_2,p:{skewX:32.8,skewY:-147.2,x:0.5,y:-48.8,scaleX:0.419,scaleY:0.419}},{t:this.shape_1,p:{skewX:32.8,skewY:-147.2,x:-7.7,y:-54.4,scaleX:0.419,scaleY:0.419}},{t:this.shape,p:{skewX:32.8,skewY:-147.2,x:0.5,y:-48.8,scaleX:0.419,scaleY:0.419}}]},3).to({state:[{t:this.shape_34,p:{skewX:90.7,skewY:-89.3,x:-15.7,y:21.4,scaleX:0.418,scaleY:0.418}},{t:this.shape_33,p:{skewX:90.7,skewY:-89.3,x:-17.8,y:26.1,scaleX:0.418,scaleY:0.418}},{t:this.shape_32,p:{skewX:90.7,skewY:-89.3,x:-40,y:25.9,scaleX:0.418,scaleY:0.418}},{t:this.shape_31,p:{skewX:90.7,skewY:-89.3,x:-38.8,scaleX:0.418,scaleY:0.418,y:13.1}},{t:this.shape_30,p:{skewX:90.7,skewY:-89.3,x:-39.3,y:25.9,scaleX:0.418,scaleY:0.418}},{t:this.shape_29,p:{skewX:90.7,skewY:-89.3,x:-38.2,y:16.3,scaleX:0.418,scaleY:0.418}},{t:this.shape_28,p:{skewX:90.7,skewY:-89.3,x:-19.6,y:26.1,scaleX:0.418,scaleY:0.418}},{t:this.shape_27,p:{skewX:90.7,skewY:-89.3,x:24.7,y:5.2,scaleX:0.418,scaleY:0.418}},{t:this.shape_26,p:{skewX:90.7,skewY:-89.3,x:49.2,y:22.2,scaleX:0.418,scaleY:0.418}},{t:this.shape_25,p:{skewX:90.7,skewY:-89.3,x:45.2,y:39.2,scaleX:0.418,scaleY:0.418}},{t:this.shape_24,p:{skewX:90.7,skewY:-89.3,x:25.1,y:11.9,scaleX:0.418,scaleY:0.418}},{t:this.shape_23,p:{skewX:90.7,skewY:-89.3,x:22.9,y:15.4,scaleX:0.418,scaleY:0.418}},{t:this.shape_22,p:{skewX:90.7,skewY:-89.3,x:45.4,y:27.2,scaleX:0.418,scaleY:0.418}},{t:this.shape_21,p:{skewX:90.7,skewY:-89.3,x:-1,y:0,scaleX:0.418,scaleY:0.418}},{t:this.shape_20,p:{skewX:90.7,skewY:-89.3,x:-12.2,y:3.8,scaleX:0.418,scaleY:0.418}},{t:this.shape_19,p:{skewX:90.7,skewY:-89.3,x:-2.5,y:-0.1,scaleX:0.418,scaleY:0.418}},{t:this.shape_18,p:{skewX:90.7,skewY:-89.3,x:-1.4,y:-2.4,scaleX:0.418,scaleY:0.418}},{t:this.shape_17,p:{skewX:90.7,skewY:-89.3,x:24,y:-3.9,scaleX:0.418,scaleY:0.418}},{t:this.shape_16,p:{scaleX:0.45,skewX:90.7,skewY:-91.4,x:30.6,y:-7.4}},{t:this.shape_15,p:{scaleX:0.45,skewX:90.7,skewY:-91.4,x:30.6,y:-7.4}},{t:this.shape_14,p:{skewX:90.7,skewY:-89.3,x:31.3,y:-7,scaleX:0.418,scaleY:0.418}},{t:this.shape_13,p:{skewX:90.7,skewY:-89.3,x:32.2,y:-9.1,scaleX:0.418,scaleY:0.418}},{t:this.shape_12,p:{regX:-1,regY:-3.1,skewX:90.7,skewY:-92.5,x:66.2,y:10.2,scaleX:0.522}},{t:this.shape_11,p:{regX:2.1,regY:3.6,scaleX:0.425,skewX:90.7,skewY:-89.3,x:28.8,y:7.9,scaleY:0.418}},{t:this.shape_10,p:{skewX:90.7,skewY:-89.3,x:9.6,y:-14.7,scaleX:0.418,scaleY:0.418}},{t:this.shape_9,p:{skewX:90.7,skewY:-89.3,x:-4.7,y:-11.5,scaleX:0.418,scaleY:0.418}},{t:this.shape_8,p:{scaleY:0.378,skewX:128.1,skewY:128.4,x:8.9,y:-3.8,scaleX:0.385}},{t:this.shape_7,p:{scaleY:0.378,skewX:128.1,skewY:128.4,x:8.9,y:-3.8,scaleX:0.385}},{t:this.shape_6,p:{scaleY:0.378,skewX:128.1,skewY:128.4,x:6.8,y:-4.3,scaleX:0.385}},{t:this.shape_5,p:{rotation:128.4,x:25.9,y:9.7,scaleX:0.418,scaleY:0.418}},{t:this.shape_4,p:{skewX:118,skewY:-62,x:14.6,y:1,scaleX:0.418,scaleY:0.418}},{t:this.shape_3,p:{skewX:118,skewY:-62,x:14.6,y:1,scaleX:0.418,scaleY:0.418}},{t:this.shape_2,p:{skewX:118,skewY:-62,x:1.8,y:14.4,scaleX:0.418,scaleY:0.418}},{t:this.shape_1,p:{skewX:118,skewY:-62,x:6.8,y:5.8,scaleX:0.418,scaleY:0.418}},{t:this.shape,p:{skewX:118,skewY:-62,x:1.8,y:14.4,scaleX:0.418,scaleY:0.418}}]},3).to({state:[{t:this.shape_34,p:{skewX:-173.3,skewY:6.7,x:5.1,y:136.4,scaleX:0.418,scaleY:0.418}},{t:this.shape_33,p:{skewX:-173.3,skewY:6.7,x:0.6,y:133.8,scaleX:0.418,scaleY:0.418}},{t:this.shape_32,p:{skewX:-173.3,skewY:6.7,x:3.2,y:111.8,scaleX:0.418,scaleY:0.418}},{t:this.shape_38},{t:this.shape_30,p:{skewX:-173.3,skewY:6.7,x:3.1,y:112.5,scaleX:0.418,scaleY:0.418}},{t:this.shape_37},{t:this.shape_28,p:{skewX:-173.3,skewY:6.7,x:0.8,y:132,scaleX:0.418,scaleY:0.418}},{t:this.shape_27,p:{skewX:-173.3,skewY:6.7,x:16.9,y:178.3,scaleX:0.418,scaleY:0.418}},{t:this.shape_26,p:{skewX:-173.3,skewY:6.7,x:-2.6,y:200.8,scaleX:0.418,scaleY:0.418}},{t:this.shape_25,p:{skewX:-173.3,skewY:6.7,x:-19,y:195.1,scaleX:0.418,scaleY:0.418}},{t:this.shape_24,p:{skewX:-173.3,skewY:6.7,x:10.2,y:178,scaleX:0.418,scaleY:0.418}},{t:this.shape_23,p:{skewX:-173.3,skewY:6.7,x:7,y:175.4,scaleX:0.418,scaleY:0.418}},{t:this.shape_36},{t:this.shape_21,p:{skewX:-173.3,skewY:6.7,x:24.9,y:153.3,scaleX:0.418,scaleY:0.418}},{t:this.shape_20,p:{skewX:-173.3,skewY:6.7,x:22.3,y:141.8,scaleX:0.418,scaleY:0.418}},{t:this.shape_19,p:{skewX:-173.3,skewY:6.7,x:25.1,y:151.9,scaleX:0.418,scaleY:0.418}},{t:this.shape_18,p:{skewX:-173.3,skewY:6.7,x:27.2,y:153.2,scaleX:0.418,scaleY:0.418}},{t:this.shape_17,p:{skewX:-173.3,skewY:6.7,x:26.1,y:178.6,scaleX:0.418,scaleY:0.418}},{t:this.shape_16,p:{scaleX:0.45,skewX:-173.3,skewY:4.7,x:29.4,y:185.8}},{t:this.shape_15,p:{scaleX:0.45,skewX:-173.3,skewY:4.7,x:29.4,y:185.8}},{t:this.shape_14,p:{skewX:-173.3,skewY:6.7,x:28.4,y:186.1,scaleX:0.418,scaleY:0.418}},{t:this.shape_13,p:{skewX:-173.3,skewY:6.7,x:30.4,y:187.3,scaleX:0.418,scaleY:0.418}},{t:this.shape_12,p:{regX:-1.1,regY:-3.6,skewX:-173.3,skewY:3.6,x:8,y:219.1,scaleX:0.522}},{t:this.shape_11,p:{regX:0.5,regY:4.4,scaleX:0.425,skewX:-173.3,skewY:6.8,x:13.8,y:181.6,scaleY:0.418}},{t:this.shape_10,p:{skewX:-173.3,skewY:6.7,x:38.4,y:165.4,scaleX:0.418,scaleY:0.418}},{t:this.shape_9,p:{skewX:-173.3,skewY:6.7,x:36.7,y:150.8,scaleX:0.418,scaleY:0.418}},{t:this.shape_8,p:{scaleY:0.378,skewX:-135.9,skewY:-135.6,x:27.9,y:163.7,scaleX:0.384}},{t:this.shape_7,p:{scaleY:0.378,skewX:-135.9,skewY:-135.6,x:27.9,y:163.7,scaleX:0.384}},{t:this.shape_6,p:{scaleY:0.378,skewX:-135.9,skewY:-135.6,x:28.6,y:161.6,scaleX:0.384}},{t:this.shape_5,p:{rotation:-135.5,x:12.8,y:178.4,scaleX:0.418,scaleY:0.418}},{t:this.shape_4,p:{skewX:-146,skewY:34,x:22.4,y:168.8,scaleX:0.418,scaleY:0.418}},{t:this.shape_3,p:{skewX:-146,skewY:34,x:22.4,y:168.8,scaleX:0.418,scaleY:0.418}},{t:this.shape_2,p:{skewX:-146,skewY:34,x:11,y:154.7,scaleX:0.418,scaleY:0.418}},{t:this.shape_1,p:{skewX:-146,skewY:34,x:19.1,y:160.5,scaleX:0.418,scaleY:0.418}},{t:this.shape,p:{skewX:-146,skewY:34,x:11,y:154.7,scaleX:0.418,scaleY:0.418}}]},3).to({state:[{t:this.shape_34,p:{skewX:-173.3,skewY:6.7,x:0.4,y:340.5,scaleX:0.418,scaleY:0.418}},{t:this.shape_33,p:{skewX:-173.3,skewY:6.7,x:-4.1,y:337.9,scaleX:0.418,scaleY:0.418}},{t:this.shape_32,p:{skewX:-173.3,skewY:6.7,x:-1.6,y:315.9,scaleX:0.418,scaleY:0.418}},{t:this.shape_31,p:{skewX:-173.3,skewY:6.7,x:11.1,scaleX:0.418,scaleY:0.418,y:318.4}},{t:this.shape_30,p:{skewX:-173.3,skewY:6.7,x:-1.6,y:316.6,scaleX:0.418,scaleY:0.418}},{t:this.shape_29,p:{skewX:-173.3,skewY:6.7,x:7.8,y:318.7,scaleX:0.418,scaleY:0.418}},{t:this.shape_28,p:{skewX:-173.3,skewY:6.7,x:-3.9,y:336.1,scaleX:0.418,scaleY:0.418}},{t:this.shape_27,p:{skewX:-173.3,skewY:6.7,x:12.2,y:382.4,scaleX:0.418,scaleY:0.418}},{t:this.shape_26,p:{skewX:-173.3,skewY:6.7,x:-7.3,y:404.9,scaleX:0.418,scaleY:0.418}},{t:this.shape_25,p:{skewX:-173.3,skewY:6.7,x:-23.7,y:399.2,scaleX:0.418,scaleY:0.418}},{t:this.shape_24,p:{skewX:-173.3,skewY:6.7,x:5.5,y:382.1,scaleX:0.418,scaleY:0.418}},{t:this.shape_23,p:{skewX:-173.3,skewY:6.7,x:2.2,y:379.5,scaleX:0.418,scaleY:0.418}},{t:this.shape_22,p:{skewX:-173.3,skewY:6.7,x:-11.9,y:400.6,scaleX:0.418,scaleY:0.418}},{t:this.shape_21,p:{skewX:-173.3,skewY:6.7,x:20.1,y:357.4,scaleX:0.418,scaleY:0.418}},{t:this.shape_20,p:{skewX:-173.3,skewY:6.7,x:17.5,y:345.9,scaleX:0.418,scaleY:0.418}},{t:this.shape_19,p:{skewX:-173.3,skewY:6.7,x:20.3,y:356,scaleX:0.418,scaleY:0.418}},{t:this.shape_18,p:{skewX:-173.3,skewY:6.7,x:22.5,y:357.3,scaleX:0.418,scaleY:0.418}},{t:this.shape_17,p:{skewX:-173.3,skewY:6.7,x:21.4,y:382.7,scaleX:0.418,scaleY:0.418}},{t:this.shape_16,p:{scaleX:0.45,skewX:-173.3,skewY:4.7,x:24.7,y:389.9}},{t:this.shape_15,p:{scaleX:0.45,skewX:-173.3,skewY:4.7,x:24.7,y:389.9}},{t:this.shape_14,p:{skewX:-173.3,skewY:6.7,x:23.7,y:390.2,scaleX:0.418,scaleY:0.418}},{t:this.shape_13,p:{skewX:-173.3,skewY:6.7,x:25.6,y:391.4,scaleX:0.418,scaleY:0.418}},{t:this.shape_12,p:{regX:-1.1,regY:-3.6,skewX:-173.3,skewY:3.6,x:3.2,y:423.2,scaleX:0.522}},{t:this.shape_11,p:{regX:0.5,regY:4.4,scaleX:0.425,skewX:-173.3,skewY:6.8,x:9.1,y:385.7,scaleY:0.418}},{t:this.shape_10,p:{skewX:-173.3,skewY:6.7,x:33.6,y:369.5,scaleX:0.418,scaleY:0.418}},{t:this.shape_9,p:{skewX:-173.3,skewY:6.7,x:31.9,y:354.9,scaleX:0.418,scaleY:0.418}},{t:this.shape_8,p:{scaleY:0.378,skewX:-135.9,skewY:-135.6,x:23.1,y:367.8,scaleX:0.384}},{t:this.shape_7,p:{scaleY:0.378,skewX:-135.9,skewY:-135.6,x:23.1,y:367.8,scaleX:0.384}},{t:this.shape_6,p:{scaleY:0.378,skewX:-135.9,skewY:-135.6,x:23.8,y:365.7,scaleX:0.384}},{t:this.shape_5,p:{rotation:-135.5,x:8,y:382.5,scaleX:0.418,scaleY:0.418}},{t:this.shape_4,p:{skewX:-146,skewY:34,x:17.6,y:372.9,scaleX:0.418,scaleY:0.418}},{t:this.shape_3,p:{skewX:-146,skewY:34,x:17.6,y:372.9,scaleX:0.418,scaleY:0.418}},{t:this.shape_2,p:{skewX:-146,skewY:34,x:6.2,y:358.8,scaleX:0.418,scaleY:0.418}},{t:this.shape_1,p:{skewX:-146,skewY:34,x:14.3,y:364.6,scaleX:0.418,scaleY:0.418}},{t:this.shape,p:{skewX:-146,skewY:34,x:6.2,y:358.8,scaleX:0.418,scaleY:0.418}}]},3).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.4,-128.8,89.5,135.5);


(lib.xespeiyou_com__1_13_28026 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.5,1,1).p("ABKhkQgBABgkAgQglAhgIAEQgKAFgPgDQgKgCgVgHIgfgHIghgJQgcAYgGAXQgGATADAVQAEAYAOAWQAKACAKACQARADASADQAUAFAaADQAaADAQAAQAPAAANgDQARgEAxgoQA2gsAXgg");
	this.shape.setTransform(0.1,-42.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFC32C").s().p("AgbA+QgFgQgBgOQgCggAOgfQAKgVAOgPIAfAIQgRAOgIAUQgHATgBAhQgBAWAFAQIABACIghgFg");
	this.shape_1.setTransform(-9.9,-39.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#515151").s().p("AguBiQgagDgUgFIgBgCQgFgRABgWQABgjAHgRQAIgUARgOIAfAJQAPADAKgFQAIgEAlghIAlghIBdBOQgXAgg2AsQgxAogRAEQgNADgPAAQgQAAgagDgAiTBQQgOgWgEgYQgDgVAGgTQAGgXAcgYIAhAJQgQAOgKAVQgOAdACAjQABANAFAQIgUgEg");
	this.shape_2.setTransform(0.1,-42.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(0.5,1,1).p("AgNgyQgOACgMALQgOANADAOQAEAYAmAVQAgAVAUgEQAIgCgCgiQgEghAGgLQgRgKgNgGQgWgJgNADg");
	this.shape_3.setTransform(-18.4,-42.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFBF8E").s().p("AgIAjQgmgVgEgYQgDgOAOgNQAMgLAOgCQANgDAWAJQANAGARAKQgGALAEAhQACAigIACIgHAAQgTAAgagRg");
	this.shape_4.setTransform(-18.4,-42.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#515151").s().p("AgsBgQgagDgVgGIgjgGIgTgDQgPgWgDgZQgDgVAFgSQAHgXAcgYIA/AQIAfAIQAPADAKgEQAIgFAlggIAhgdIBeBOQgXAfgyApQgyAogQADQgOADgOABQgRAAgZgDg");
	this.shape_5.setTransform(0,-41.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E58134").s().p("AAJEyQAAgwBdhvQBehvAAgzQAAgMgJgiQgNgwgUgpQhCh9h0AAQhYAAgyBFQgiAwAAApQAAAeAUAkQAUAmAeASQAwgDAJgDQAQgKAGgCIAMADIABACQABABAAAGQAAAEgPAPQgTASgPAAQhDAAgqgzQgkguAAg5QAAgxAlg6QA3hWBnAAQCUAABKCPQAnBIAHBOQAABDhPBmQgNAQiACPIgCACQgBAAAAgGg");
	this.shape_6.setTransform(-17.8,-57,0.419,0.419);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#834719").s().p("AgoOVQg0joAApEIABifQACiLAKhJQAIg/AXg1QALgaAmhIIA2hcQA1hcAAgUQg0i7hHAAQg8AAgWAjQgLARAAAYQAAAYAIAEQAQgEAOgTQAOgTAQgDIARAEIACADQABACAAAIQAAANgZAeQgbAggVAAQgwAAgJgmIAAgmQAAhFAxggQAugdA8APQBAARApA4QAuBBgGBfQgCAog1BaQg7BegNAbQhBCIgSBvIANMFQgBBLAMBtQAMBpABAZQAAAHgCADg");
	this.shape_7.setTransform(-17.3,-32.2,0.385,0.379,0,-0.3,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(0.5,1,1).p("AAOjWQgFADgGAEQgXAOgaAAQgRgBgXgdQgXgeABgYQAAgtA3gcQAMgIALgEQARgHARAAQAlAAAkAwQAhAtgBAkQABAhgTAcQgHAMgzA/QgYAdgFAWQgEASAAA9QAAAmAFBRQACAnAJCyQgGAKgIgCQgGgBgFgFQgLgJgHi7QgGiSABg5QAAguAMgzQAOg6AUgYQAQgNgBgOQAAgEgCgIQgDgIgDgD");
	this.shape_8.setTransform(-18.4,-34.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B4682E").s().p("AACFyQgGgBgFgFQgLgJgHi7QgGiSABg5QAAguAMgzQAOg6AUgYQAPgNAAgNIAAgBQAAgEgCgIQgDgIgDgDQADADADAIQACAIAAAEIAAABQAAANgPANIgLAHQgXAOgaAAQgRgBgXgdQgXgeABgYQAAgtA3gcQAMgIALgEQARgHARAAQAlAAAkAwQAhAtgBAkQABAhgTAcQgHAMgzA/QgYAdgFAWQgEASAAA9QAAAmAFBRIALDZQgFAIgHAAIgCAAg");
	this.shape_9.setTransform(-18.4,-34.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E0E0E0").s().p("AhBD2QA9htAYhlQAdh0gVhdIAAhIIAHgCQATApAGA9QAGArAABBQAABJgcBJQgiBYg8Ayg");
	this.shape_10.setTransform(-29.5,-39.8,0.419,0.419,0,0,180);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E0E0E0").s().p("AAgDQIAAgaQAAiPgJgnQgLgwhNiwQBBA2AiBfQAhBTAABXQgBAagFAlQgIA1gNAPQgHgHgBgLg");
	this.shape_11.setTransform(-32.9,-54.1,0.419,0.419,0,0,180);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#646464").s().p("AnQEKIgEgxQAAhEA5hUQA/hcBig2QBIgnBMgYQBhggB+gSQCHgRBUgmQAwgUBHgqIAGAJQAEAGAAAIQAAAthLAfQg0AWiBAbQiyAkgwANQiFAjhRAtQh7BCgtBlQgRAkgLA0IgQBXIAAACQAAACgIAAQgMAAgFgug");
	this.shape_12.setTransform(-8.7,-74.3,0.426,0.419,0,0,180,0.4,1.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#646464").s().p("AjLCYQg4hFghhQQgghKAAg8QABhXAjgpQATgVAjgSIAGgCQASgQAVgDIAMgBIAkgBQCdAACZCCQCcCEAACKQAABwgZAuQguBViQAAQixAAiIiqg");
	this.shape_13.setTransform(-7.8,-111,0.523,0.357,0,0,176.8,-0.2,-0.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgEALQgSgPgJgOQAVgUAVARQAVAPAAASIgBANIgCADQgCACgHAAQgIAAgQgTg");
	this.shape_14.setTransform(-27.5,-76.8,0.419,0.419,0,0,180);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFCDA8").s().p("AgiAoQgogeABgoQgBgdAPgEQALgDAlADQATAAARADQAcAEAKAQQALAJAAAfQAAAkgKAOQgKAPgbAAQgbAAgigZg");
	this.shape_15.setTransform(-25.4,-75.9,0.419,0.419,0,0,180);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(0.5,1,1).p("AAVgqQgGgBgMAAQgMABgHABQgUAGgJARQgKARAHATQAGASARAFQAQAGARgGQAJgDALgIQANgIALgL");
	this.shape_16.setTransform(-24.8,-75);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFBF8E").s().p("AgZApQgRgFgGgSQgHgTAKgRQAJgRAUgGQAHgBAMgBIASABIAfA1QgLALgNAIQgLAIgJADQgIADgJAAQgIAAgIgDg");
	this.shape_17.setTransform(-24.8,-75);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#A19E9E").s().p("AhUARQAXgzAOgJIgLAAIh6ASIgNAAQAggYAsgPQAxgRAyAAIAKAAQAvgMA5AhQAyAdAxA2IgCAAQhjgfgMgDIAAAOQADADADAKQACAIAAAFIgCAAQgFgChDgqQgBAAg1AtQg8AxgKAGQACgTAWgxg");
	this.shape_18.setTransform(-22.2,-68.6,0.419,0.419,0,0,180);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#C2C0C0").s().p("AgdEDQhIgxgjg/QglhBgBhTQgBgxANg7QANg5ASghQAvhaBhAKQBNAJAvA1QAoAvgBA3IgBAPIgNgMIgOgMQAEADAFAVQAEAVAAAMQAAA2gWApQgNAZgmAsQgYAcgPAXQgFgMgEgRQgGgcgBgRIgBAAIgDAmIgBAcQAAAOADATIABAHQgUAsgCA5g");
	this.shape_19.setTransform(-20.4,-43.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(0.5,1,1).p("AC0hzQAAgCgBgBQABAAAAABQAJAIAEADQAEAEAFAFQADgVgDgaQgEglgTgeQgJgOgMgMQgXgYgegRQgpgWgxgHQhjgNg8BRQg+BUADCbQACBHAhBKQAYA0AkAlQAyA1BJAXQgDgJAAgJQAAgbAXghQAIgLAqgxQAigoAPgfQAXgrAAgtQAAgEAAgEQAAgUAAgGQgBgOgEgMQADAFAFAJQAAAAABABQABADABADQAEAHACADQAAAAAAAAQASgbABgcQABgVgJgXg");
	this.shape_20.setTransform(-18,-42.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#777777").s().p("AiUCKQAfAbAlALQAPAFAOADIALABQAFgcAeguIASgXIAog0QAfgoASgkQALgYAFgaIAAAIQAAAtgXAqQgQAegiAoQgqAygFAKQgXAiAAAaQAAAKADAIQhLgWgzg1gACBhxQAGgPACgJQAEgQAAgXQgBgTABgRQAIAYgBAVQgBAbgRAcIgBgBg");
	this.shape_21.setTransform(-14.1,-32.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#A19E9E").s().p("AgMEmQgOgCgOgFQglgMgfgbQgkglgYg0QghhKgChIQgDiaA+hUQA8hRBjANQAxAHApAWQAeARAXAYQAMAMAJAOQATAeAEAlQADAagDAVIgJgJIgNgLIgBgBIABADQgBAQACAUQAAAWgEARQgCAJgGAPIgGgKIgCgGIgBgBIgIgOQAEAMABAOIAAAaQgEAagMAXQgSAlgeAqIgpA0IgTAWQgfAvgDAbg");
	this.shape_22.setTransform(-18,-43.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#A19E9E").s().p("AhsDqQgkglgYg0QghhKgChHQgDibA+hUQA8hRBjANQAxAHApAWQAeARAXAYQAMAMAJAOQATAeAEAlQADAagDAVIgJgJIgNgLIgBgBIABADQAJAXgBAVQgBAcgSAbIAAAAIgGgKIgCgGIgBgBIgIgOQAEAMABAOIAAAaIAAAIQAAAtgXArQgPAfgiAoQgqAxgIALQgXAhAAAbQAAAJADAJQhJgXgyg1g");
	this.shape_23.setTransform(-18,-42.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(0.5,1,1).p("Ah9FMQAfgBAZgCQAGgBAHgBQAcgHARgOQATgSAAgbQAAgCAAgCQgDg5hAgrQg+gqhpgVQgQgDgggFQgagFgIgBQgEgCgEgBQhKgWgJg7QgMhPA4hcQABgDACgCQAig3AqglQAEgEAFgEQABgBACgBQAjgfAngQQAFgCAEgCQAJgDAJgDQA3gQBGACQBoADBaA1QBKArA5BKQAEAFAEAFQA1BJAdBYQAbBQgCBIQgDCFidAxQh/AnjlgOQgBgBgBAAIgJgRQgGAAgGAAQgEAAgEAAQgEAAgEAAQhagEgxgZQg1gcgCgxQAAgTAHgXQACgGAOgiQAMgfAEgc");
	this.shape_24.setTransform(8.7,-90.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFBF8E").s().p("ABHB7IgIAAQhYgEgxgZQg1gcgCgxQAAgRAHgXIAQgoQAMgfAEgcQBFAQAvASQApATAYAYQAnAnAAA5QAAAigWAVQgMAMgRAFIgIAAg");
	this.shape_25.setTransform(-13.1,-69.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#95755C").s().p("ABiBqQAMgPABgWQADhMhhgzQgWgNgigMQgxgShFgRIAAgFIAiAGIAwAIQBmAVA/AqQBCArACA3IAAAFQABAbgVARQgRAOgcAHIgOACQAMgJAHgJg");
	this.shape_26.setTransform(-6.3,-69.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F3AC76").s().p("AAGBZQAVgVAAgjQAAg4gkgoQgYgXgpgTQAhAMAZANQBfAzgEBNQgBAVgLAQQgHAJgMAJQgZACgdAAIgLABQARgFAKgMg");
	this.shape_27.setTransform(-2.8,-67.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#515151").s().p("AA6EnQgCg5hAgrQg/gqhpgVIgvgIIgigGIgIgDQhLgWgJg9QgLhNA3hcIADgFQAjg3AqglIAIgIIADgCQAkgfAmgQIAKgEIASgGIAOgCIApAAQAAgIB2AWQArAMApAXQAwAaAdAgQAZAbAUAbQApA0ATAvQAZA8AABUQAABag3A3Qg9A8hyAAQgcAAgkgLg");
	this.shape_28.setTransform(3.7,-94.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#414040").s().p("AjpFeIgDgBIgJgRQAfgBAZgCIANgCQAdgHARgOQAUgSAAgbIAAgEQAkALAcAAQBwAAA9g8QA3g3AAhaQAAhSgZg+QgTgvgog0QgVgagZgcQgdgggugaQgpgXgrgMQh4gWAAAIIgpAAIgOACQA2gQBHACQBqADBXA1QBLArA4BKIAIAKQA2BJAdBYQAbBQgCBIQgECFidAxQhcAdiTAAQg2AAg+gEg");
	this.shape_29.setTransform(20.7,-90.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#414040").s().p("AhyFeIgCgBIgJgRIgMAAIgIAAIgIAAQhagEgxgZQg1gcgCgxQAAgTAHgXIAQgoQAMgfAEgcIAAgFIgIgDQhKgWgJg7QgMhPA4hcIADgFQAig3AqglIAJgIIADgCQAjgfAngQIAJgEIASgGQA3gQBGACQBoADBaA1QBKArA5BKIAIAKQA1BJAdBYQAbBQgCBIQgDCFidAxQhdAdiUAAQg1AAg+gEg");
	this.shape_30.setTransform(8.7,-90.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(0.5,1,1).p("ACWkkQAFAPAEAKQABADABACQAxCCAXB9QARBVADBZQACAYAAAZAD/DZQAAACAAACQAAAVgBAQQgnASg9ALQhPAOhegBQhMgBg0gGQg7gIgugQQgBgUgBglQAAgBAAgBQABgIAAgJQABgSACgUQABgLABgLQAIhYAThuQAZifAdhLIB0AF");
	this.shape_31.setTransform(8.4,-27.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#8A8A8A").s().p("AgIAfIgCgDQAOgEAPgGIACgBIgEAGIgFAIIgLARIgJgRgAA+AjIgUgdIATgKQAUgBATgDIADgBQAhgEAigJIgNAbIgKATIgEAKIgHgHIgNgNQgOgNgIgHIgQAYIgKARIgGAKIgHgKgADDAIIgZgeIAGgBIApgMIgBABIAlgNQACAZAAAXIgBgBIgLgLIgMgMQgHgHgIgEIgGAaIgEALIgDAQIgIgLgAj+gDIABgRIAIAHIgJAMIAAgCg");
	this.shape_32.setTransform(8.4,-5.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#A1A1A1").s().p("AARAxIgbg1IABgBIAOAEQAdADAeADIAAAAQgIAGgLAKIgHAHQgMALgGAKIgDAAgAg+AHIgLgaIAAAAIASAEIAuAKIAAAAIgBAAIAAABQgRAMgWAgQgCgKgLgXgABSAiQgMgTgGgKIABAAIApACIAYgBIASgBIAKAAIgUALIgCgCIgGgIIgMAUIgBABIgCABQgPAGgPAEIgDgEgAh+gjQgJAJgIAPIgGAJIgHgIIADgmQAmARAqAMQgIAJgHAMIgMAXQgTgtgHgPgAgKgEIAAAAgAhJgTIAAAAg");
	this.shape_33.setTransform(-1.2,-6.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFCD4F").s().p("AgPAiIgCgBQAVggAQgMIAeA1IgVABQgWgEgWgFgABHAVIAHgHQAKgKAJgEQAFAIANAUIACAEQgeAIgiACQAGgJAMgMgAgdAeIgogLIgJgDQgTgLgTgOIAGgJQAIgOAJgKQAHAPASAtIANgUQAGgPAIgJIAMAbQAKAXACAJIgMgDg");
	this.shape_34.setTransform(-4.5,-6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F0B111").s().p("AACAqIgCAAQgiAAgogGIgDgBIgVgDIAVgBIABACIACgCQAigCAegIIACADIAJAQIALgRIAFgHIAEgHIABAAIAMgTIAGAIIACACIAUAbIAHAKIAGgKIAKgQIAQgZQAIAKAOALIANAMIAHAIIAEgLIAKgRIANgcIAZAeIAIALIADgOIAEgOIAGgZQAIADAHAHIAMANIALAMIABABIAAABIg0AQIghAJQgzANgxAFQgiADggAAIgCAAgAj+gJIAJgLQATAQAUAJIgwgOg");
	this.shape_35.setTransform(8.4,-4.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#414040").s().p("AgTEsQhMgBg0gGQg7gIgugQIgCg5IAwAQQAQAKAQAGQAgALAsAAIAVADIADABQAoAGAiAAIACAAIACAAQAgAAAigDQAxgFAzgNIAhgJIA0gSIAAAEIgBAlQgnASg9ALQhIANhTAAIgSAAgAhND+IADAAIgCACIgBgCgAB6BwQAihRgBhtQgBhHgIgxQgIgxgTgpIAfgEIAJAZIACAFQAxCCAXB9QARBVADBZIglAMIABAAIgpALIgGACQgiAIghAFIgDAAQgTADgUACIgJAAQAsglAag9gAjdhBQAZifAdhLIB0AFQABAUACAGIAHAUIAAAVIgQgIIgKgGQgBgDgCgCIAAACIADADIADAJIAAAVQAAAlgXBPQgWBNgQATQgPAWgdAaIguApQgWAWgLAVQAIhYAThug");
	this.shape_36.setTransform(8.4,-27.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#515151").s().p("Ah+EIQgQgGgQgKIAJAEIAnALIANACIACABQAXAFAWAEQgsAAgggLgAARDmIgBAAIAAAAQgcgDgegFIgQgDIABAAIgvgKIgSgFIAAAAQgqgMgmgRIACgVQALgWAWgVIAugqQAdgZAPgXQAQgVAWhLQAXhPAAglIAAgUIgDgJIAKAGIAOAHIAAgVIgFgUQgCgFgBgVICqAHQATAoAIAxQAIAxABBHQABBugiBQQgaA9gsAlIgSABIgYABIgpgCgAg7DbIABAAIAAAAIgBAAgAgWjfIAAgDQACACABAEIgDgDg");
	this.shape_37.setTransform(3.6,-29.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#414040").s().p("AgTEqQhMgBg0gGQg7gIgugQIgCg5IAAgCIABgRIADgmIACgWQAIhYAThuQAZibAbhLIE9AIQA/CgAWB4QARBVADBZQACAYAAAZIAAAFIgBAlQgnASg9ALQhIANhTAAIgSAAg");
	this.shape_38.setTransform(8.4,-27);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(0,0,0,0.298)").s().p("AjrAuQhigTAAgbQAAgaBigUQBigTCJAAQCKAABiATQBiAUAAAaQAAAbhiATQhiAUiKAAQiJAAhigUg");
	this.shape_39.setTransform(7.8,2);

	this.addChild(this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39.4,-126.8,89.5,135.5);


(lib.xespeiyou_com__1_274_26281 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEF8E9").s().p("AiXFXQiRheAHm2IAxAAQBLi6CaAKQAdACARAEQCSAsBYDGIAVA2QgFA7gMAyQgrDIh+BcQhFAchBAAQg9AAg8gXg");
	this.shape.setTransform(29.1,36.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,58.2,73.4);


(lib.xespeiyou_com__1_273_6285 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1C1313").s().p("AhCBwQgdguAAhCQAAhBAdgvQAcguAmAAQAnAAAdAuQAcAvAABBQAABCgcAuQgdAvgnAAQgmAAgcgvg");
	this.shape.setTransform(16.1,34.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3665D1").s().p("AhhCiQgohDAAhfQAAheAohDQAphEA4AAQA5AAAoBEQApBDAABeQAABfgpBDQgoBEg5AAQg4AAgphEgAhPhwQgdAwAABAQAABCAdAvQAcAuAoABQAmgBAcguQAcgvAAhCQAAhAgcgwQgcgugmAAQgoAAgcAug");
	this.shape_1.setTransform(17.3,34.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7192DF").s().p("AiQDxQg8hkgBiNQABiMA8hkQA9hkBTAAQBUAAA9BkQA8BkABCMQgBCNg8BkQg9BkhUAAQhTAAg9hkgAiCihQgoBEAABdQAABfAoBEQApBDA5AAQA4AAAohDQAqhEAAhfQAAhdgqhEQgohDg4AAQg5AAgpBDg");
	this.shape_2.setTransform(20.6,34.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7192DF").s().p("AiQDxQg8hkgBiNQABiMA8hkQA9hkBTAAQBUAAA9BkQA8BkABCMQgBCNg8BkQg9BkhUAAQhTAAg9hkg");
	this.shape_3.setTransform(20.6,34.2);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,41.2,68.3);


(lib.xespeiyou_com__1_272_81129 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEF8E9").s().p("Ag5BsQgFgDgFgFQgPgPAAgfQAAgpAZgrIAEgHQAXgnAegWQAhgVAaANQARAIAEAYQACAKAAALQgBAdgLAfIgMAZQgZAtghAVQgUAOgSAAQgKAAgJgEg");
	this.shape.setTransform(8.3,11.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,16.6,22.6);


(lib.xespeiyou_com__1_271_51953 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AEJhuQgghBglgxQhiiDiEgbQj0gohsEaIBJAAQBLi5CaAKQAfACARAEQCQAsBYDGQALAZAKAcQgFA6gMA0QgrDIh+BcQA3gaAsglQARgPARgQQBKhPAgh3QAOgyAGg3QACgBABgBQA+gdAVg3QALgfgBgnQgFAHgFAGQgjAngwAEQgNABgPgCg");
	this.shape.setTransform(38.7,52);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCCFB8").s().p("AEABZQhhiAiGgbQjygphsEZQBImEEIAMQEPAPAsGHQgghBgmgyg");
	this.shape_1.setTransform(32.7,20.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231054").s().p("ADIBgQAMg0AFg6IgVg1QhYjGiQgsQgRgEgfgCQiagKhLC5IhJAAQBskaD0AoQCEAbBiCDQAlAxAgBBQAPACANgBQAwgEAjgnIAKgNQABAngLAfQgVA3g+AdIgDACQgGA3gOAyQggB3hKBPIgiAfQgsAlg3AaQB+hcArjIg");
	this.shape_2.setTransform(38.7,52);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,0,79.4,91.8);


(lib.xespeiyou_com__1_269_51374 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AAOAkQghgPAEggQAEgfAbAI");
	this.shape.setTransform(1.7,3.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCCFB8").s().p("AgWgLQAFgfAbAIQAcAigeAkQghgPADggg");
	this.shape_1.setTransform(2.4,3.7);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,5.8,9.4);


(lib.xespeiyou_com__1_268_44323 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF8E94").s().p("AAAArQg2AAgngMQgmgMAAgTQAAgRAmgNQAngMA2AAIAUABQAqABAfAKQAnANAAARQAAATgnAMQgfAKgqACIgUAAg");
	this.shape.setTransform(60.4,170.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2,1,1).p("AqgHpQAmgWgQiSQgOhcgRkLQgQjzArqFAKvL5Qh+BKkYA9QgbAGgVACQiNAVicACQg1AAg5gDQg2gDg3gGQg3gGhHgPQhJgOg+geQiShFAQjc");
	this.shape_1.setTransform(68.9,106.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FCCFB8").s().p("AjqPgQg2gDg3gGQg3gGhHgPQhJgOg+geQiShFAQjcQgcguAegaQAmgWgQiSQgOhcgRkNQgQjxArqFQKXkQKmEQQDzNcjzM7Qh+BKkYA9QgbAGgVACQiNAVicACQg1AAg5gDg");
	this.shape_2.setTransform(74.9,99.6);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.7,0,150.6,200.2);


(lib.xespeiyou_com__1_267_16106 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AkxsPQCsKhhGMwQAAAAAAABQgCAMAAAMQgBAHgBAHQAAAAAAABQgBALgCAKQAAAAAAABQgFAzgFA0QgCARgCAQQAAABAAABQgDAWgDAYQAPgUAOgUQAAgBABAAQALgQAKgPQAAAAAAgBQALgPAKgOIAAgBQAxhKAvhLIAAAAQAJgOAHgPQAAgBABAAIAAgBQAshMAkhPQAjhHAfhIQECpjhDrH");
	this.shape.setTransform(30.6,114);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#09B5A8").s().p("AibPnIAAgBIAEghIAKhnIAAgCIADgUIAAgCIACgOQAAgMACgLIAAgCQBGswisqhQBbmOFJAxQDHTQogNUIAGgug");
	this.shape_1.setTransform(23.7,104.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#27D3C7").s().p("ABOwSQBoAsBJCKQBDLHkCJjQgfBIghBHQgmBPgsBMIAAABIgBABQgHAPgJAOIAAAAQgvBLgxBKIAAABIgVAdIAAABIgVAfIgBABIgdAoQIgtVjHzQg");
	this.shape_2.setTransform(34.3,104.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#27D3C7").s().p("AAMgUIACACIAAACIgbAlIAZgpg");
	this.shape_3.setTransform(9,207.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#09B5A8").s().p("AjgPnIAAgBIAEghIAKhnIAAgCIADgUIAAgCIACgOQAAgMACgLIAAgCQBGswisqhQBbmOFJAxQBoAsBJCKQBDLGkCJkQgfBIgjBGQgkBPgsBNIAAAAIgBACQgHAPgJANIAAABQgvBLgxBKIAAAAIgVAeIAAABIgVAeIgDgCIgbArIAGgug");
	this.shape_4.setTransform(30.6,104.6);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,0,63.3,210.2);


(lib.xespeiyou_com__1_266_70781 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(57,213,201,0.498)").s().p("ACdFAIidgyQjOg9iIAAQgmAAgsAdQguAagfAAQgnAAg9gWQg8gUgKADQgLADg9AyQg/AxhYg6QhjhBgggSQgzgegbAAQg7AAgxAmIgqAoQgpgBgZgtQgagrgMhSQBXjyCmizQgYCPAAA9QAABJAJAYQAaAAArgdQAogbAmgHQANAkBMBoQBLBogWAEQA9gEAvg5QA2g8APgHQAABGBcA2QBTAIBWAAQAaAADUgPQBQgBCgBSQADAAA2guQA6gyAkgoQAfAKCdA8QCVA3AcAAQAbAAAdgKQBZhFhZhVQB4AFAkAPQAoAPArgmQAvgoADgKQAJgnABgwQACgwgDgDQgDgCAEhEIgXhBIDtBTQB1C1BGDwQhLg1gSgKQhPglgIAAIgOAAQAOARAABBQABAfgFAOIAAAKQgpgkiVgPQiNgKgDACQgFgCgLATQgRAWgLAMQg2A2hiAAQgnAAjIgrQg5gIgGABQgzBpABAUQgvgLhYgcg");
	this.shape.setTransform(145.8,78.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2,1,1).p("AWrLhQhBr4l5lrQhthoiFhIQj0h2j5grQiggcigAEQh6ADh6AVQjaAkjdBdQrWFvAFPPQBLgNBRgIQABgBABAAQFfgqHpAR");
	this.shape_1.setTransform(145.1,74.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#09B5A8").s().p("AmcGtQnpgRlfAqIgCAAQhRAJhLANQgFvQLWluQDdhdDaglQB6gUB6gDQB3ADB3AUQD5ArDzB3QC8BkCJCkQETFJBIJJQAHA6AGA8IAAAgIACA7Qi2DAi0BxQkDCij9AAQnkAAnRpPg");
	this.shape_2.setTransform(141.1,102.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#27D3C7").s().p("AKbLYIAAggQgGg8gHg6QhIpJkTlJQiJiki6hkQjzh3j5grQh3gUh5gDQCigEChAbQD4ArDyB3QCGBHBsBoQF6FsBAL3QgoAugoArIgCg7g");
	this.shape_3.setTransform(215.3,78.7);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,292.3,205.2);


(lib.xespeiyou_com__1_264_42580 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AgjBzIgEgLIg3iqABZhyIAFDaIABAL");
	this.shape.setTransform(9.5,15.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#696969").s().p("Ag/gcIgDgLICFAAIAAALQgUBEghAAQgfAAguhEg");
	this.shape_1.setTransform(12.3,30.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FCCFB8").s().p("AgnCDIg3iqQAsiaCLBqIAGDag");
	this.shape_2.setTransform(9.5,13.2);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,0,21.1,34.4);


(lib.xespeiyou_com__1_263_5829 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AMMz0QAKB2ADB/QAAASAAARQABCjgICVQgLDEgdCtQgZCQglCBQgWA8gVA5QgxB4g4BeQgBACgBACQgcAtgeAmQiVDBjJAdAsY1EIAASxQAFBTAGA8QAGA5AGAjQACAPADAPQAAABAAABQABAKACAJQAGAcAHAaQAmCOBSBiQAzA+BEAsQAIAFAGAFQAeARAhAPQAxAWA5ARQAkAKArAIQAAgBABAAQACgDAAABQAAgBABAAQAHgIgIAMQAMgPACAAQADgCAAAAIADgDQAIgCAJgEQAOgGANgEQACgBADAAQAHgDAGgCQAYgHAYgEQAigGAfABQAYgCAZABIAEABQALAAANACQAIACAIABQAOACANADQADAAABABQAYAHAbAIQAcAjgJAkQgFAXgVAVQAFAHAFAGQAtBBBBBDQARARAUASQBKBEBhBIQgxB2hUBJQhAA1hSAdQgwASg2AJQgSADgQACIgLg8IggjCIgWEBQgcAAgagDQgtgCgrgJQgVgFgTgFQgUgEgRgFIgHgDQgkgMgfgQQg+gfgsgwQgTgVgPgYQgFgHgFgIQABAAABgBQARgPAPgTQAFgHAFgHQA8hVAuhHQANgVAMgTQAYgoASgjQAbgvAMgmQAXgHAWgEQAOgCANgDQAGgBAFgBQAGAAAFgBQAGgBAGgBQAXgFAWgBQALgBAOgBQAPgCAQABQABAAAFABQALgBAQAAQAWABAUACIABAAQAaABAeAGAj3J+IAAAAAjcLlQgXgUgJgXQgCgNACgMQAAgRAIgSQABgDgBAAQgCACgBABAj0J+QgCAAgBAA");
	this.shape.setTransform(79.4,178);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1E9F96").s().p("AAAABIABgBIAAABIgBAAgAAAABIAAgBIABAAIgBABgAABAAIAAAAg");
	this.shape_1.setTransform(54.7,241.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFBC15").s().p("Ag9AdQgCgNACgMQAAgPAIgSQAMgPACAAIADgCIADgDQAIgCAJgEIAZgKIAFgBIANgFQgeBSBCAqIgLABIgLACIgbAFQgUAEgXAHQgXgUgJgXg");
	this.shape_2.setTransform(60.3,244.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FAC84B").s().p("Ahug0QAYgIAYgEQAigGAdABQAYgCAaABIAFABQALAAANADIAQADQAnA/gVA/IgqgDQgQAAgNACIgGgCQgQAAgPACIgXACQgWABgXAFIgMABQhEgqAghRg");
	this.shape_3.setTransform(74.2,243.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFDC87").s().p("AgfA8IgBAAQAVg+gnhAIAbAEIAEABIAxAQQAcAjgJAiQgFAWgVAVQgcgFgagCg");
	this.shape_4.setTransform(89,243.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#27D3C7").s().p("AmBUdQDNgHCAjCIACgDIACgDIACgDIACgDIABgCIABgBIACgEQjBiUhvjMIABAAQAaACAeAFIAKAOQAtBBBBBDIAlAiQBKBFBfBIQgvB1hUBJQhAA1hSAeQgwARg2AKIgiAEgAlLJmIgEgBIgbgEQDEghCSi8QAcgnAcgtIACgEQA4heAxh3IArh2QAliAAZiRQAditALjEQAHiCAAiNIAAgoIAAgKIAAgZIgFjDIAAggQgGg9gHg5IAAgEIADAEIAHAIQAXAcAXAfIAnA1QAKB1ADCAIAAAjQABCjgICUQgLDEgdCtQgZCRglCAIgrB2QgxB3g4BeIgCAEQgcAtgeAnQiTDAjJAeIgzgQg");
	this.shape_5.setTransform(120.2,175.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#09B5A8").s().p("AgqYZQgtgCgrgIIgogKIglgKIgHgCQgkgNgfgPQg+gfgsgxQgTgVgPgXIgKgPIACgBQARgQAPgTIAKgOQA8hVAuhHIAZgoQAYgoASgiQAbgvAMgnQAXgHAWgDIAbgFIALgCIALgCIAMgBQAXgFAWgBIAYgCQAOgCAQAAIAGACQANgCAQAAIAqADQBvDMDBCUIgCAEIgBABIgBACIgCADIgCADIgCADIgCADQiADCjNAHIgijBIgWEAIgHAAQgWAAgXgDgAjGNSIgBAAIgCACIgBABQgrgIgkgKQg5gQgxgWQghgPgegSIgOgKQhEgsgzg9QhShigmiPQgHgagGgbIgDgTIAAgDIgFgdQgGgkgGg7QgGg8gFhSIAAyvQMttIKYMcIAAAEQAHA5AGA9IAAAgIAFDDIAAAZIAAAKIAAAoQAACNgHCCQgLDEgdCtQgZCPglCAIgrB4QgxB3g4BeIgCAEQgcAtgeAnQiSC8jEAhIgQgDQgNgDgLAAIgFgBQgagBgWACQgfgBgiAGQgYAEgYAIIgNAEIgFACIgbAJQgJAFgIABIgDADIgDACQgCABgMAPQAIgMgHAIg");
	this.shape_6.setTransform(74.9,156.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1E9F96").s().p("AAAABIAAAAIAAgBIABAAIAAABIgBAAg");
	this.shape_7.setTransform(54.7,241.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFBC15").s().p("AjGAmQgDgNACgMQAAgPAIgSQANgPABAAIAEgCIADgDQAIgCAJgEIAagKIAGgBIANgFQAXgHAZgEQAhgGAeABQAYgCAaABIAFABQAKAAANACIARADIAaAFIAEABIAzAPQAdAjgKAiQgFAXgUAVQgegGgagBIgBAAIgrgDQgPAAgOABIgGgBQgPgBgQACIgXACQgVABgXAFIgMACIgLABIgMACIgaAFQgWAEgXAHQgYgUgIgXg");
	this.shape_8.setTransform(74,244);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#09B5A8").s().p("AhXYZQgtgCgrgIIgogKIglgKIgHgCQgkgNgfgPQg+gfgsgxQgTgVgPgXIgKgPIACgBQARgQAPgTIAKgOQA8hVAuhHIAZgoQAYgoASgiQAbgvAMgnQAXgHAWgDIAbgFIALgCIALgCIAMgBQAXgFAWgBIAZgCQAPgCAQAAIAGACQALgCAQAAIAqADIABAAQAaACAeAFIAKAOQAtBBBBBDIAlAiQBKBFBhBIQgRAogVAjQgoBDg3AwQhAA1hSAeQgwARg2AKIgiAEIgrj9IgWEAIgHAAQgYAAgXgDgAjzNSIgBAAIgCACIgBABQgrgIgkgKQg5gQgxgWQghgPgegSIgOgKQhEgsgzg9QhShigmiPQgHgagGgbIgDgTIAAgDIgFgdQgGgkgGg7QgGg8gFhSIAAyvQMttIKYMcIADAEIAHAIQAXAcAXAfIAnA1QAKB1ADCAIAAAjQABCjgICUQgLDEgdCtQgZCPglCAIgrB4QgxB3g4BeIgCAEQgcAtgeAnQiVDAjJAeIgzgQIgEgBIgbgEIgQgDQgNgDgLAAIgEgBQgZgBgYACQgfgBgiAGQgYAEgYAIIgNAEIgFACIgbAJQgJAFgIABIgDADIgDACQgCABgMAPQAIgMgHAIg");
	this.shape_9.setTransform(79.4,156.5);

	this.addChild(this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,0,160.8,314);


(lib.xespeiyou_com__1_262_53160 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("ABgCGQgDgTgCgVQgGgygBgJQgOhRgLghQgCgGgCgFQgYg4g0ABQgRAAgUAOQgZASgHAbQgDAPgCAWQgBAPABASQAAATADAdQADAdAAARQAAAUgEAx");
	this.shape.setTransform(5.5,-10.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhdByQAEgxAAgTQAAgRgDgdQgDgcAAgUIAAgiQACgVADgPQAHgcAZgSQAUgOARAAQA0gBAYA5IAEALQALAhAOBRIAHA7IAFAnQgnBOgzAAQgsAAg3hBg");
	this.shape_1.setTransform(5.5,-7.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(2,1,1).p("ABKBHQgdAQgjACQgjAEgbgFQACAMAAAJQADAHAgACQAbABAdgGQAhgHABgMQABgEgCgTQAFgDAFgDQAlgYAAgiQgBgOgRgnQgUgtAAgCQgDgLgCgNAhvhpQgBARgCAVQgHBHACAaQADAkAkAOQANAGAPAC");
	this.shape_2.setTransform(7.3,14.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgPCZQgggCgDgHIgCgVIACAAIACAAIAAAAQAOADARAAIABAAIAAAAIAXgBIADgBQAjgDAdgPQACATgBAEQgBAMghAHQgYAFgVAAIgLAAgAgRB+QgRAAgOgDIAAAAIgCAAIgCAAQgPgDgNgFQgkgOgDgkQgCgaAHhHIADgmQBJieB0CSIAFAYIAUAvQARAlABAQQAAAiglAYIgKAGQgdAPgjADIgDABIgXABIAAAAIgBAAg");
	this.shape_3.setTransform(7.3,11.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(2,1,1).p("AAnDFQAVADAGhQQABh7gHh+QhPiLgvCSQARBsAaBaQAEAQAFAPQACAGAMAnQAKAnAdAGg");
	this.shape_4.setTransform(6.7,19.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FCCFB8").s().p("AAnDFQgdgGgKgnIgOgtIgJgfQgahagRhsQAviSBPCLQAHB+gBB7QgFBNgUAAIgCAAg");
	this.shape_5.setTransform(6.7,19.8);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5.8,-26.1,26.3,66.7);


(lib.xespeiyou_com__1_261_54999 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AA/h7IAFDmQgDAQgeABQgfACgHgOIhAjr");
	this.shape.setTransform(6.9,19.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#696969").s().p("AgDCUIhAjsQAsiPBWCPIAFDmQgDAQgfACIgFAAQgaAAgGgMg");
	this.shape_1.setTransform(6.9,16.1);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,0,15.7,33.1);


(lib.xespeiyou_com__1_260_14612 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("ACLA4QhxhliTgKQgbAcAQAtQBYgRC3A3g");
	this.shape.setTransform(13.9,5.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#09B5A8").s().p("AiEARQgQgrAbgdQCTAKBxBkQi3g3hYARg");
	this.shape_1.setTransform(13.9,5.6);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,29.9,13.2);


(lib.xespeiyou_com__1_259_15601 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AhImpQFtBZFVDrQBZA+BXBGQA/AzA+A6QADACAEADQgECVhFBkQgkA0g2AnQg5gwg6grQlMj3mFhkQgmgLgngIAhImpQAGEsgeBmQgPAugXAFQgdgHgdgGQgEAAjGgaQjGgdk8A2QhBjhBBj7QFBgvFnA1QBOAMBOATg");
	this.shape.setTransform(94.2,48.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C12017").s().p("ABfB5IgogHQAahUAAjZIgChjQFwBZFVDpQggEGgvAxQlaixkMgxgArzlDQFCgvFnA1QBMAMBNATIACBjQAADZgaBUIglgGIg4gIIjLgNQjFgOk9BQQhBjhBBj7g");
	this.shape_1.setTransform(78.9,34.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#63100C").s().p("AKIDKQlNj0mEhlQgmgLgngIQAXgFAPgvQgPAvgXAFQgdgHgdgGIjKgcQjGgdk8A4QE8hQDGAOIDKANIA6AIIAmAHIAnAHQELAwFaCvQAvguAfkHQBZA/BXBHQA/AzA+A6IAGAGQgDCThFBjQglA1g1AmQg5gvg6gsg");
	this.shape_2.setTransform(95.8,67.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(0,0,0,0.498)").ss(0.1,1,1).p("AhImpQFtBZFVDrQBZA+BXBGQA/AzA+A6QADACAEADQgECVhFBkQgkA0g2AnQg5gwg6grQlMj3mFhkQgmgLgngIQgdgHgdgGQgEAAjGgaQjGgdk8A2QhBjhBBj7QFBgvFnA1QBOAMBOATg");
	this.shape_3.setTransform(94.2,48.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C12017").s().p("AKZGKQlNj3mFhkQgmgLgmgIQgdgHgegGIjKgaQjGgdk8A2QhBjhBBj7QFCgvFmA1QBOAMBOATQFtBZFVDrQBZA+BXBGQA/AzA+A6IAGAFQgDCVhFBkQgkA0g2AnQg5gwg5grg");
	this.shape_4.setTransform(94.2,48.6);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,190.4,99.2);


(lib.xespeiyou_com__1_258_83500 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgED6Qg/gGgtgYQg0gbgegxQgTgfgKgmQgHgagDgdIAKggIABgEQAKgcAKgYIAEgIQAEgKAFgJIADgGQAgg7AqgiQARgPAYgOIANgGQAdgMAegFQAbgFAfACQA9AGAlAhQAmAhAnBgQgiESiGA4QgSACgVAAIgfgBg");
	this.shape.setTransform(23.5,25.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,46.9,50.3);


(lib.xespeiyou_com__1_257_53239 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1C1313").s().p("AgpBEQgQgcAAgoQAAgnAQgdQASgcAXAAQAYAAARAcQASAdAAAnQAAAogSAcQgRAdgYAAQgXAAgSgdg");
	this.shape.setTransform(13.2,24);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7E330A").s().p("AhDBzQgcgvAAhEQAAhDAcgvQAdgwAmAAQAoAAAbAwQAdAvAABDQAABEgdAvQgbAwgoAAQgmAAgdgwgAgrhDQgRAcAAAnQAAApARAcQASAdAYAAQAXAAAQgdQASgcAAgpQAAgngSgcQgQgcgXAAQgYAAgSAcg");
	this.shape_1.setTransform(13.4,23.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC5311").s().p("AhkCpQgphGAAhjQAAhiAphFQArhGA5gBQA7ABApBGQAqBFAABiQAABjgqBGQgpBFg7AAQg5AAgrhFgAhLhyQgcAwAABCQAABEAcAvQAcAxAoAAQAnAAAbgxQAdgvAAhEQAAhCgdgwQgbgwgnAAQgoAAgcAwg");
	this.shape_2.setTransform(14.2,23.9);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,28.5,47.8);


(lib.xespeiyou_com__1_256_55848 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag5BkQgPgJAGgjQAHgkAYgoQAYgqAagXQAcgXAPAJQAPAJgGAjQgGAjgZApQgYApgaAYQgUARgNAAQgGAAgEgDg");
	this.shape.setTransform(6.9,10.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,13.8,20.7);


(lib.xespeiyou_com__1_255_14560 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AEHg8Qg/iJg6grQg4gqhEADQg3AEgsASQgiANgaAUQgGAEgFAEQhBA2gbBjQgDAIgBAJQgCAKgDAJQAAADgBADQgGAigCAnQAEgSAFgQQABgDABgBQAJgaALgYQACgFACgDQAEgKAFgJQABgDACgDQAfg7ArgiQARgPAYgOQAGgDAHgDQAcgMAhgFQAagFAfACQA9AGAlAhQAlAhAnBgQgiESiFA4QC1ghAsk0g");
	this.shape.setTransform(26.5,39.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCB5A0").s().p("AAhjdQDWANARE8QhAiIg5grQg4gqhFADQg2AEgsATQgiANgaAUIgLAIQhBAzgbBjIgEARIgFATIgBAHQgGAjgCAoQgYnHE+AMg");
	this.shape_1.setTransform(26.4,22.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#351504").s().p("ADNgxQgnhgglghQgmghg8gGQgfgCgaAFQghAFgbAMIgOAGQgYAOgRAPQgrAigfA7IgDAGQgFAJgEAKIgEAIQgKAYgKAaIgCAEIgJAiQADgnAFgiIABgGIAFgTIAEgRQAbhjBBg2IALgIQAagUAigNQAsgSA2gEQBFgDA4AqQA6ArA/CJQgsE0i1AhQCFg4AikSg");
	this.shape_2.setTransform(26.5,39.2);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.8,0,54.7,68.4);


(lib.xespeiyou_com__1_253_30871 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AAKAiQgfgaADgaQAJgTAcAF");
	this.shape.setTransform(2,3.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCB5A0").s().p("AgbgSQAJgTAcAFQApAogyAaQgfgaADgag");
	this.shape_1.setTransform(2.9,3.4);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,6.8,8.9);


(lib.xespeiyou_com__1_252_59726 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DC8589").s().p("AhFAXQgdgKAAgNQAAgMAdgKQAegKAnABQApgBAdAKQAdAKAAAMQAAANgdAKQgdAKgpgBQgnABgegKg");
	this.shape.setTransform(55.7,156.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2,1,1).p("ANtmOQgBEyhaEvQgWAngYApQgKARgLASQgIAMgIANQg0BUg0AzQgKAKgKAJQgYAVgbAUQiCBgi0ApQgiAHgjAGQgEAAgFACQgMABgMACQgGAAgGACQgEAAgEAAQhKAJhSADQm6AUj0hJQidgxAgi7AteFmQAUgtgBhCQgBhDgQheQgPhQAHhqQAAgHABgHIAApcAIQIiQiKgOhZhaQgdgdgYglAAgCIQABjfhTiK");
	this.shape_1.setTransform(87.8,104.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#772E07").s().p("AE+KmQgbj9i9ANQABjghViLIsvnqQOrq3J9MHQBvPVoHBiQgdgdgYglg");
	this.shape_2.setTransform(80.8,74.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4F2006").s().p("Ak3HRQHLhtgnvTQCpA4AiD3QgBEyhaEvIguBQIgVAjIgQAZQg0BUg0AzIgUATQgWAVgbAUQiXgFh9iag");
	this.shape_3.setTransform(144.3,96.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FCB5A0").s().p("Ao7KWQidgxAgi7QgNgqAVgaQAVgtgBhCQgBhDgRheQgPhQAIhqIAAgOIAApcIMwHtQBUCKgBDfQC+gOAbD+QAXAlAdAdQBaBaCKAOQiCBgi1ApQgiAHgiAGIgKACQgMABgLACQgHAAgGACIgHAAQhKAJhUADQhfAEhUAAQk6AAi/g5g");
	this.shape_4.setTransform(70.3,104.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4F2006").s().p("ArqM6QidgxAgi7QgNgqAWgaQAUgtgBhCQgBhDgQheQgPhQAHhsIABgOIAApaQOSqkJ0LMIgBgXQCpA4AiD3QgBEShJETIgRA8IguBQIgVAjIgQAZQgaAqgaAiQgaAigaAZIgSAQQAHABAEADIgVARQgrAcABgGIgBABQhOA5hgAmQgdALgeAKQgmAMgnAJQgiAHgjAGIgJACQgMABgMACQgGAAgGACIgIAAQhKAJhSADQhfAEhWAAQk6AAi/g5gAFzKVIAMAHIgCgCIgOgJgAEtJeIACACIAEAEIALAJIgQgQIgBABg");
	this.shape_5.setTransform(87.8,88.3);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,0,177.6,177.7);


(lib.xespeiyou_com__1_251_46803 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(204,138,119,0.498)").s().p("AGZI/QgDgBgHgJQgIgJAEgIQAphIBJhEQA5g2AagKQgYAPgyA/Qg3BHgjBEQgJALgEACIgGABIAAAAgAEaDuQACgbAIgcQAUhIA1hTIAIgNIBIhRIAmgrIAMgOQAfgiAXgRQgPATgbAsIgYAlIgGAIQgcAngpAuQg5BZgSBLQgHAegBAdQgSARgFAAQgPgKgFgLgAoimIIAQgSIAegmQAWgbBZggIA6gTQCLgsBMgEQgmAahJAaQhJAZg8AfQg8AfhBApIhqBBQAggwANgPg");
	this.shape.setTransform(122.7,68.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(0,0,0,0.498)").ss(0.1,1,1).p("AAAgBIAAADQAAAAAAAAQAAgCAAgBg");
	this.shape_1.setTransform(177,158.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(2,1,1).p("AvrGTIAAl4IAAgxQAunAG8j1QBAgjBIgfQhBBWAMAyQEJi1JSguQBOgHBSgDQhaDXAOC/QA7gDA6AFQA/AFBBAOQAIACAHACQA7ANA6AVQAhANAjAOQgGAHgFAGQicC6ghBsQgHAXgDAUQAFAAAFABQBVAJBpBBQABABACABQAaAQAbAVQhYBzglBeQgVA3gDAwQAvAJAogUQAUgKATgRQhxE2iODh");
	this.shape_2.setTransform(100.5,88.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4F2006").s().p("AAyMWIAYhTQAviDBqhxQAUgJATgSQhiDSh3CVIABgFgABiGkQBBitB+hVQhZBzgkBeQgVA3gDAxIiCDUQA8hnAcikgADykuIgLAOQicC5ghBqQgHAXgCAUQg7AzgSAyQAskDDyi+gAjnoiQAHigBkhYQhaDXAOC/QA6gDA7AFQiaAcgzBLQAxhbAIisg");
	this.shape_3.setTransform(172,79.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B5460B").s().p("ANyIHQAuAIAogUQhqBxgvCDgAMHBaIAJABQBWAJBpBEIACABQihhSh4BoQASgyA9gzgAvRBsQAum+G9j1QBAgjBIgfQnaD4hyGKIgnCngAmToAQEJi2JSguQBNgGBTgEQqnA2ojIeQCUjjFUjVQpEDqjgGDQCWlIF1jTgAHEjvQAyhLCbgcQA/AFBAAOIAQAEQA6AOA7AUQmNhOh4DoQAKgvAqg9g");
	this.shape_4.setTransform(97.8,75.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#772E07").s().p("AKKM/Qg4gmg4giQrZnBssBdIAAl4IAnimQBxmKHaj4QhBBWAMAyQl0DUiXFKQDgmFJEjrQlUDWiUDiQIjodKog2QhlBYgHCgQgHCsgyBbQgqA9gJAvQB4joGMBOQAhANAjAOQj0C9gsEEQB4hnChBRQAaAQAbAVQh+BVhACsQgdClg7BnICBjVIhCDpIgYBTIgBAFIAAAAQB3iVBijSQhyE2iNDhIhMg0g");
	this.shape_5.setTransform(100.5,88.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4F2006").s().p("AvPIPQgqhtAQmoQAunAG9j1QBAgkBIgfQhBBXALAyQEKi1JSgvQBNgGBTgEQhaDXANC/QA7gDA6AFQBAAFBAAOIAQAEQA6AOA6AVQAiAMAiAPIgLANQicC6ghBsQgHAWgCAUIAJABQBVAKBqBBIACABQAaARAbAUQhYBzgkBfQgVA3gEAwQAvAJAogUQAUgKATgRQhgEFiJDzQuRn2ssChg");
	this.shape_6.setTransform(100.2,86.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#772E07").s().p("AvrFsIAAmJQAunAG8j1QBBgjBHgfQhBBWAMAyQEJi1JTguQBNgHBTgDQhaDXANC/QA6gDA7AFQBAAFA/AOIAQAEQA6ANA7AVQAhANAjAOIgMANQibC6giBsQgHAXgCAUIAJABQBWAJBqBBIACACQAaAQAbAVQhYBzgkBeQgWA3gDAwQAuAJApgUQAUgKATgRQhxE1iXDwQsaouueAgg");
	this.shape_7.setTransform(100.5,89.1);

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,202.9,179.2);


(lib.xespeiyou_com__1_250_57027 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(204,138,119,0.498)").s().p("AjIBlQAsiGBChUIgFAxQAFACALAfQALAbA2AdIAKAFQAFAFAJADQAZALAnAAQATAAAagGQAZgFAMgGIgCAJQgBAKABADQgMAdg6AIQgKADgOADQgdAHgYAAQgNAAgdgDQgcgBgXgGQgbgMgNgXQgMgXgBAAQgHAAgaAdQgRAUgMAZIgEAMIAFgRgACkA9IAAgQIABgVIAAgDQAPAEACAMQACALgEANgAC/AxQACgFgBgHQgBgJABgFIAFgDQAKgCgBALIAAAWQgEACgJAAIgCgEg");
	this.shape.setTransform(22,43.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2,1,1).p("AmBDlQiWiOBQjJQBbjoEWiLQAEgCAEgCQARgJATgKQACgBABAAQAGgDAGgDQCoAwCTB4QBBA0AvBFQArA/AcBNQAYB8gTBaQgNA7gcA6QgvBghXBdQgKAJgJAJQgCgYgEgXQgPhUgnhJQgjhAg0g4QgcgeghgcQgFAcAAAeQAEBtBPCMQAIAOAIAOQALATANAUQAEAGAEAGQAEAFAEAGQAQAYARAYQgaABgZAAQhFABg+gGQgrgEglgIQgigIgfgKQgSgGgSgGQgfgMgigSQgdgQgegVQgIgGgNgMQg6g3gghKQgPgMgNgOgAmaDGQAMAQANAP");
	this.shape_1.setTransform(48.4,51.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B5460B").s().p("AC1HwQgrgEgogIQghgIgfgKIgjgMQgfgMghgSQgdgQgegVQgJgGgMgMQg6g3ghhKQgjhOgEhcQAjgHARguQgNE7DtBVIgGg2QCqBzDGAWIg0ABIgLAAQg/AAg4gFgAlNiBQBbjoETiLQhvBHhVBoQg/BNgtBZIgrBdQgeBFAAA1QAAAuApA+IAOATIAaAfQiXiOBRjJg");
	this.shape_2.setTransform(36.3,53.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#772E07").s().p("AhqF7IAIA2QjvhVANk7QgRAugjAHQgBgUAAgTQgQA3gCAqQgCAfAHAYIgOgUQgpg9AAgvQAAg1AehEIArheQAthZA/hMQBVhoBxhIIAIgDIAlgTIADgBIALgHQILD2hQFCQglg2gzgkQB9EBiRCtQgZjXjziRQg2EBEADiQjGgWiqhzg");
	this.shape_3.setTransform(46.4,51.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4F2006").s().p("AAGAhQDzCRAZDXQCRith9kBQAzAkAlA2QBQlCoLj2QCoAxCTB4QBBA0AvBEQAsBAAbBNQAYB8gTBaQgMA7gcA6QgvBfhYBeIgSASIgGgwQgPhTgohJQgjhAg0g4QgcgfghgbQgFAbABAfQADBtBPCLIARAcQAKAUAOAUIAHALIAJAMIAhAwQj+jiA0kBgAmiDmIgagfQgHgYACgfQACgqAQg3QAAATABAUQAEBcAjBOQgOgNgNgNg");
	this.shape_4.setTransform(51.8,51.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("rgba(0,0,0,0.498)").ss(0.1,1,1).p("AmBDlQiWiOBQjJQBbjoEWiLQAEgCAEgCQARgJATgKQACgBABAAQAGgDAGgDQCoAwCTB4QBBA0AvBFQArA/AcBNQAYB8gTBaQgNA7gcA6QgvBghXBdQgKAJgJAJQgCgYgEgXQgPhUgnhJQgjhAg0g4QgcgeghgcQgFAcAAAeQAEBtBPCMQAIAOAIAOQALATANAUQAEAGAEAGQAEAFAEAGQAQAYARAYQgaABgZAAQhFABg+gGQgrgEglgIQgigIgfgKQgSgGgSgGQgfgMgigSQgdgQgegVQgIgGgNgMQg6g3gghKQgPgMgNgOgAmaDGQAMAQANAP");
	this.shape_5.setTransform(48.4,51.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4F2006").s().p("AA7H/QgrgEglgIQgigIgfgKIgkgMQgfgMgigSQgdgQgegVQgIgGgNgMQg6g3gghKQgPgMgNgOIgZgfIAZAfQiWiOBQjJQBbjoEWiLIAIgEIAkgTIADgBIAMgGQCoAwCTB4QBBA0AvBFQArA/AcBNQAYB8gTBaQgNA7gcA6QgvBghXBdIgTASIgGgvQgPhUgnhJQgjhAg0g4QgcgeghgcQgFAcAAAeQAEBtBPCMIAQAcQALATANAUIAIAMIAIALIAhAwIgzABIgLAAQg/AAg5gFg");
	this.shape_6.setTransform(48.4,51.7);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,98.9,105.4);


(lib.xespeiyou_com__1_249_53563 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("Ah5ClQAyAJApgBQAsgDAigSQAKgFAJgGQABgBACgBQAZgXASgZQATgcAJgfQABgDABgCQARhXgjg1QgOgVgWgQQg8gohjAiQgwAQgeAr");
	this.shape.setTransform(16.7,17.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCB5A0").s().p("AhwClQhJh2AuiQQAegrAwgQQBjgiA8AoQAWAQAOAVQAjA1gRBXIgCAFQgJAfgTAcQgSAZgZAXIgDACIgTALQgiASgsADIgLAAQgkAAgsgIg");
	this.shape_1.setTransform(15.8,17.3);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-1,32.6,36.7);


(lib.xespeiyou_com__1_248_3295 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("Ag3h+QgKAKgNAJQgCABgCACQgEABgEACQgaAAACgWQASghAhgKQAVACgCAZQgFAHgGAGgAhShoQAyCyCUBdQhKjVhhhQ");
	this.shape.setTransform(11.6,16.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#772E07").s().p("AhiiHQBqBRBcC+QiUhdgyiyg");
	this.shape_1.setTransform(13.2,19.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C12017").s().p("AgiAKQATgfAfgKQAUACgBAZIgLALQgKAKgNAJIgDADIgHADQgbAAACgWg");
	this.shape_2.setTransform(3.5,3.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B5460B").s().p("Ahih8IAEgDQANgJAKgKQBgBQBLDVQhci+hqhRg");
	this.shape_3.setTransform(13.2,18.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(2,1,1).p("AhShoQAyCyCUBdQhKjVhhhQAhShoQgEABgEACQgaAAACgWQASghAhgKQAVACgCAZQgFAHgGAGQgKAKgNAJQgCABgCACg");
	this.shape_4.setTransform(11.6,16.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#772E07").s().p("AhShoIAEgDQANgJAKgKQgKAKgNAJIgEADIgIADQgaAAACgWQASghAhgKQAVACgCAZIgLANQBhBQBKDVQiUhdgyiyg");
	this.shape_5.setTransform(11.6,16.8);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,25.2,35.6);


(lib.xespeiyou_com__1_247_8372 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AjGBbQB/iSCFhcQBZASAwBeQi2AsimCLQgogbgJgeg");
	this.shape.setTransform(20,14.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4F2006").s().p("AjGBbQB/iSCFhcQBZASAwBeQi2AsimCLQgogbgJgeg");
	this.shape_1.setTransform(20,14.9);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,42,31.8);


(lib.xespeiyou_com__1_246_8328 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhFBiQgZgSADgpQACgnAdgpQAdgoAlgRQAmgRAaATQAZARgDAqQgDApgdAoQgdApglAPQgSAHgPAAQgRAAgNgJg");
	this.shape.setTransform(9.3,10.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,18.7,21.5);


(lib.xespeiyou_com__1_245_83833 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("Akwg9QCNkmEHBrQBFAbAtA/QBDBZAZCIQhijXiYgxQjFg+hxDcQgODiCzBbQjmhEAPkPg");
	this.shape.setTransform(30.7,34.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#351504").s().p("Akwg9QCNkmEHBrQBFAbAtA/QBDBZAZCIQhijXiYgxQjFg+hxDcQgODiCzBbQjmhEAPkPg");
	this.shape_1.setTransform(30.7,34.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FCB5A0").s().p("ADWgTQgug/hFgbQkGhriOEkQAXhGAdgzQBGhMBFg+QBIghBbAQQD2ArAKFrQgYiKhDhXg");
	this.shape_2.setTransform(30.7,20.6);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,0,63.3,63.4);


(lib.xespeiyou_com__1_244_50786 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1C1313").s().p("Ag6BIQgYgdAAgrQAAgpAYgeQAZgeAhAAQAiAAAYAeQAZAeAAApQAAArgZAdQgYAegiAAQghAAgZgeg");
	this.shape.setTransform(19.8,24.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7E330A").s().p("AhgB3QgpgyAAhFQAAhFApgyQAogxA4AAQA4AAAoAxQAqAyAABFQAABFgqAyQgoAyg4AAQg4AAgogygAg5hHQgZAeAAApQAAAqAZAeQAYAeAhAAQAiAAAYgeQAageAAgqQAAgpgageQgYgfgiAAQghAAgYAfg");
	this.shape_1.setTransform(19.8,24.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC5311").s().p("AiKCqQg6hGAAhkQAAhjA6hHQA6hHBQAAQBRAAA5BHQA7BHAABjQAABkg7BGQg5BIhRAAQhQAAg6hIgAhgh2QgpAyAABFQAABFApAyQAoAyA4AAQA4AAAogyQAqgyAAhFQAAhFgqgyQgogxg4AAQg4AAgoAxg");
	this.shape_2.setTransform(19.8,24.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CC5311").s().p("AiKCqQg6hGAAhkQAAhjA6hHQA6hHBQAAQBRAAA5BHQA7BHAABjQAABkg7BGQg5BIhRAAQhQAAg6hIg");
	this.shape_3.setTransform(19.8,24.3);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,39.5,48.5);


(lib.xespeiyou_com__1_243_72756 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhyDvQizhbAOjiQBxjcDFA+QCYAxBiDXQgwDfjnAAQg0AAhAgMg");
	this.shape.setTransform(28.1,25.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,56.3,50.2);


(lib.xespeiyou_com__1_242_7474 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhFBiQgZgSADgpQADgnAdgpQAdgoAlgRQAmgRAZATQAZARgDAqQgCApgdAoQgdApglAPQgSAHgPAAQgRAAgOgJg");
	this.shape.setTransform(9.3,10.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,18.6,21.5);


(lib.xespeiyou_com__1_241_33301 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AkwBBIAAgBQAYiGBDhYQAug/BEgbQEHhrCNEmQAPEPjnBEQC0hbgOjiQhxjcjFA+QiYAxhhDWAkwBBIAAABQAAABAAAAQAAgBAAgBg");
	this.shape.setTransform(30.6,34.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#351504").s().p("AD+gnQhxjcjFA+QiXAxhhDWIAAgBIAAgBQAYiGBChYQAug/BFgbQEHhrCMEmQAQEPjnBEQCzhbgOjig");
	this.shape_1.setTransform(30.6,34.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FCB5A0").s().p("AgvjGQBWgPBGAdQBIA+BIBOQAeAzAWBHQiNklkHBsQhEAbguA/QhDBWgYCHQALlnD2grg");
	this.shape_2.setTransform(30.6,20.5);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,0,63.2,63.4);


(lib.xespeiyou_com__1_240_74732 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1C1313").s().p("Ag6BIQgYgdAAgrQAAgpAYgeQAZgeAhAAQAiAAAYAeQAZAeAAApQAAArgZAdQgYAegiAAQghAAgZgeg");
	this.shape.setTransform(19.8,24.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7E330A").s().p("AhgB3QgpgyAAhFQAAhFApgyQAogxA4AAQA4AAAoAxQAqAyAABFQAABFgqAyQgoAyg4AAQg4AAgogygAg5hHQgZAeAAApQAAAqAZAeQAYAeAhAAQAiAAAYgeQAageAAgqQAAgpgageQgYgfgiAAQghAAgYAfg");
	this.shape_1.setTransform(19.8,24.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC5311").s().p("AiJCqQg7hGAAhkQAAhjA7hHQA6hHBPAAQBRAAA6BHQA6BHAABjQAABkg6BGQg6BIhRAAQhPAAg6hIgAhgh2QgpAyAABFQAABFApAyQAoAyA4AAQA4AAApgyQApgyAAhFQAAhFgpgyQgpgxg4AAQg4AAgoAxg");
	this.shape_2.setTransform(19.7,24.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CC5311").s().p("AiJCqQg7hGAAhkQAAhjA7hHQA6hHBPAAQBRAAA6BHQA6BHAABjQAABkg6BGQg6BIhRAAQhPAAg6hIg");
	this.shape_3.setTransform(19.7,24.3);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,39.5,48.5);


(lib.xespeiyou_com__1_239_77492 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkYAcQBhjXCYgxQDFg+BxDcQAODiizBbQhAAMgzAAQjnAAgwjfg");
	this.shape.setTransform(28.1,25.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,56.2,50.2);


(lib.xespeiyou_com__1_238_74063 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AEDBnQiTicilhlQh7ALhSBaQDuA6DKCWQA8gYARgcg");
	this.shape.setTransform(26,15.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4F2006").s().p("AkCg1QBShaB7gLQClBlCTCcQgRAcg8AYQjKiWjug6g");
	this.shape_1.setTransform(26,15.6);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,54,33.2);


(lib.xespeiyou_com__1_237_13021 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AA2iaQB7ALBSBaQjuA6jKCWQg8gYgRgcQCTicClhlg");
	this.shape.setTransform(26,15.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4F2006").s().p("AkCBnQCTicClhlQB7ALBSBaQjuA6jKCWQg8gYgRgcg");
	this.shape_1.setTransform(26,15.6);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,54,33.2);


(lib.xespeiyou_com__1_233_52821 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AAkAMQgfgogeAdQgFAEgFAH");
	this.shape.setTransform(3.6,1.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCB5A0").s().p("AgjACQAFgFAFgEQAegfAeAoQgSATgRAAQgQAAgTgTg");
	this.shape_1.setTransform(3.6,2.1);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,9.2,5.3);


(lib.xespeiyou_com__1_232_31187 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("ACNgSQAZAlgygBQhNgIgpABQgsAChKAGQgugBAegg");
	this.shape.setTransform(15,2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,32,6);


(lib.xespeiyou_com__1_231_11490 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(204,138,119,0.498)").s().p("AjMh/IAKA7QAHADAdAfQAaAbBYAdIAPAFQANAFAMADQAmALA3AAQAbgBAigFQAigFAPgGIAAAJQACAKACACQgFAdhPAIQgMAEgTADQglAGghABQgWgBgogCQgogBgjgGIAAgdQgFAOgIALQgegIgbgXQgagXgCgBQgJAAgYAeQgZAbgCAnQAEiZBFhmgADfA+IgGgQIgIgWIAAgCQAWAEAHAMQAHALAAANgAEAAyQAAgGgCgGQgGgJAAgFIAGgDQALgDAFALIAIAWQgFADgNAAQgDgCgBgCg");
	this.shape.setTransform(36.2,40.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2,1,1).p("Al3BeQAeBzBOBVQBOBUB/A3QACABACABQAfAOAhALQABABAAAAQA7ATB7AWQghgIA9ANIABAAQAIACAJABQAEAAAQADQACAAACAAQABAAAIADQAHACAMACQABAAABAAQACABADAAQgBgCAAgBQgOgegNgeQhOi3gUi6QCpCvAfB9QAEAPACAPQAFgHAFgGIAEgDQABgCACgCQAcggAWgfQAAgBACgBQA/hZAbhXQAHgXAEgXQAXh5g1h5Qgfg4g3g2Qg8g5hXg2QgQgKgRgKQgXgMgXgNQgIgFgHgDQhPgphggmQgPgIgSgGQgHgDgIgDQgDgBgEgBQgIgDgJgDQgGgCgGgDQgFgCgHgCQggAKgcANQgJAEgJAEQhrAyg2BbQgFAGgDAHQgeACgZAHQgzAMghAcQhCBmgLBjQgHA1AJA0QAOBYA6BWQAVAfAcAfQARAWAWAUQgLhTAShuQABgGACgGIAAABQAAgEABgF");
	this.shape_1.setTransform(55.2,52.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B5460B").s().p("AGYIGIgJgCIgEAAIgUgEIgRgDIgBAAQg9gNAhAJQh7gWg7gUIgBAAQgjgMgfgNIgEgCQh9g4hOhUQhOhVgehyIABgJQAuglAXgzIAAAGQgJCEBfByQBMBaBnAsIAAgmQCkBxBRAeQBMAbgLAAIgCAAgAlNDFQg6hXgOhYQgJgzAHg1QALhjBChnQAhgcAzgLQAZgHAegDIAIgMQA2hbBrgzIASgIQAagMAggKIAMAEQgSAEgbALIgIADQhCAgg1BFQg4BKgHAIQghAjgYAxIgTAsIgIg7QhvCmA9EKQAIAiALAkQgcgfgVgfg");
	this.shape_2.setTransform(41.2,51.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#772E07").s().p("AEeIGIgCAAIgTgEQASAChRgeQhRgdiihxIAAAmQhpgshMhbQhfhyAJiDIAAgGQgXAyguAlQAHgiANgfIABgBQg5A0gNBbQgGAoAFA2QgLgjgIgjQg9kJBvinIAIA8IATgsQAYgxAhgkQAHgIA4hJQA1hGBEgfIAIgEQAbgLASgEIAMAFIARAGIAHACIAPAGIAhAOQBgAmBPApIAPAIQAVAOBGA6QBFA5A3BUIApBCIAIAZQAJAegGAQQgQgZgcgdQgagdgPgKQAUAgASA0IAIAVQAWBHAABGQAAA7hDDXQhCjOiThbIgugbQADDeArBeQAsBfBOA1IgFgBg");
	this.shape_3.setTransform(55.5,52.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4F2006").s().p("ABuE3QgrhegDjcIAuAZQCTBcBCDNQBDjXAAg7QAAhDgWhKIgIgVQgSgzgUghQAPALAaAcQAcAdAQAZQAGgQgJgdIgIgZIgphDQg3hUhFg5QhGg6gVgOIAuAZIAhAUQBXA2A8A5QA3A2AfA4QA1B5gXB5QgEAXgHAXQgbBYg/BYIgCACQgWAfgcAgIgDAFIgEACIgKANQgCgPgEgPQgfh9ipivQAUC6BOC4IAbA7IABADQhOg1gshfgAnmDCQgFg2AGgnQANhcA5gyIgBABQgNAggHAfIgBAJIAAgBQgCAGgBAGQgSBuALBTQgWgUgRgWg");
	this.shape_4.setTransform(61.4,58.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4F2006").s().p("AEhIIIgCAAIgTgEIgJgDIgEAAIgUgDIgRgDIgBAAIgagGQgagFAYAGQh7gWg7gTIgBgBQghgLgfgOIgEgCQh/g3hOhUQhOhVgehzIAAgBQgCAGgBAGQgSBuALBTQgWgUgRgWQgcgfgVgfQg6hWgOhYQgJg0AHg1QALhjBChmQAhgcAzgMQAZgHAegCIAIgNQA2hbBrgyIASgIQAcgNAggKIAMAEIAMAFIARAGIAHACIAPAGIAhAOQBgAmBPApIAPAIIAuAZIAhAUQBXA2A8A5QA3A2AfA4QA1B5gXB5QgEAXgHAXQgbBXg/BZIgCACQgWAfgcAgIgDAEIgEADIgKANQgCgPgEgPQgfh9ipivQAUC6BOC3IAbA8IABADIgFgBg");
	this.shape_5.setTransform(55.2,52.1);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,112.4,106.3);


(lib.xespeiyou_com__1_229_43461 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AHTCNQCiB0CoDEQAcgJAZgFQA8iQgbjlQgehWgvhAQh9ieikhQQA4EEhACiQgUAtgWgEQjEiBkbgBQkJgFjACAQikB1ioDKQgfgJgZgFQg2ilAijcQCCkcDbhdQgmFKBhB/AIFlCQjhh/kpgDQktAEjeB8QAAAAAAAB");
	this.shape.setTransform(89.2,45.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C12017").s().p("As0G3Qg1ikAhjdQCCkcDchdQgLBeAABNQAADDBGBbQikB1ioDKQgggKgZgEgAIiBjQk3iTkIAdQkJAViJCEQhGhbAAjDQAAhNALheIAAgBQDdh8ErgEQEsADDhCAQAaB4AABkQAABxgjBXQAjhXAAhxQAAhkgah4QCkBQB9CdIAGA0IACAiQAHCYgqCrQh7iMiUhWgAnqlDIAAAAg");
	this.shape_1.setTransform(85.4,45.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#63100C").s().p("AEAgqIAEABIAAAAIABAAQATgBARgmIABgDIgBADQgRAmgTABIgBAAIAAAAIgEgBQjEiAkbgBQkJgFjAB/QCJiDEJgXQEKgdE2CVQCTBUB7CMQAripgHiYIgDgkIgGg0QAvBAAeBYQAbDjg8CPQgZAFgcAKQiojEiihzg");
	this.shape_2.setTransform(110.3,63.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#63100C").s().p("AHTCNQjEiBkbgBQkJgFjACAQikB1ioDKQgfgKgZgEQg2ikAijdQCCkcDbhdIAAgBQDeh8EtgEQEpADDhCAQCkBQB9CdQAvBAAeBWQAbDlg8CQIg1AOQiojEiih0g");
	this.shape_3.setTransform(89.2,45.4);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,180.4,92.7);


(lib.xespeiyou_com__1_228_66328 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DC8589").s().p("AHnAYQgcgLAAgNQAAgNAcgJQAegJApAAQApAAAdAJQAdAJAAANQAAANgdALQgdAJgpgBQgpABgegJgApzAYQgdgLAAgNQAAgNAdgJQAdgJApAAQApAAAdAJQAeAJAAANQAAANgeALQgdAJgpgBQgpABgdgJg");
	this.shape.setTransform(79.7,128.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2,1,1).p("AMfneIAAFKQgDA4gCAoQgHB5gBBEQgBARgCAPQgaCOi/BSQigA3j1AXQiXAPiVgMQgFgBgEgBQj+gXimg4Qg5gZgqgeQgCgBgBgBQhhhFgShiQgCgPgBgRQgFhVgCiFQgBgfgCgkIAAlK");
	this.shape_1.setTransform(80,97.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FCB5A0").s().p("AiLLTIgJgCQj+gXimg4Qg5gZgqgeIgCgBQhihGgShiQgCgPgBgRQgFhVgCiHIgDhDIAAlIQBtn2K8ADQJGADDOHwIAAFIIgFBgQgHB7gBBEQgBARgCAPQgaCOi/BSQigA3j1AXQhSAJhRAAQhEAAhFgGg");
	this.shape_2.setTransform(80,72.9);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,0,162,146.8);


(lib.xespeiyou_com__1_227_87340 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(204,138,119,0.498)").s().p("AvBIGQgQhZAEg9QAPiDAFgcQAFgjALgMQAPgOgDBCQgWBhAEBmQAEBlAOBEQAOBCALArQgrhHgShmgAMIIMQgDgBgHgJQgKgJAFgIQAthIBOhEQA+g2AdgKQgbAPg1A/Qg8BHgmBEQgJALgFACIgGABIgBAAgALKB9QAAheA+hyQANgZAPgYQAcgrAfglQAWgaAZgXIAdgaIgdArIgVAgQgZAngYApIgOAZQhMCCAHBqQgPARgFAAQgRgKgGgLgAhTmyIARgWIAhguQAfgpCVhOQCWhOBWAKQgtADiCBCQiYBMhkBoQgsAtgsAjQAjg4AOgSg");
	this.shape.setTransform(101,77.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2,1,1).p("AMSniQA6gGA7AAQAggBAfABQAQAAARABQgiA/gcA9QgSAmgQAnQgMAegMAeQAAAEgCADQgMAhgIAeQgcBXgNBPQA8AFBLAXQAqAOAqATQACABABABQAHADAGADQACABADABQgLAOgKAOQgEAGgFAFQgfApgdAtQgfAwgdAzQgSAegQAfQgHAMgGANQgFALgGAMQAygOA0gUQAAgCABAAQAOgFAPgHQAFgDAHgDQADgBAEgDQAAAFgBAFQgDAdgEAbQgTCHgdBkQgrCYhCBGIAAAAQgNAAgOACQgcADghALQgCABgCAAQACgXACgaQABgHAAgIQgBgIgCgMQgGgvgShDQgFgRgEgTQgKghgMgkQgIgbgLgeQlOjbk2gkQmtgyl+ExQhDDEgGBtQACAdABAaQgfgJgZgFQgLgBgLgCQgBgCgBgBQgBgDgCgDQh7j1AGlAQACitAnjAQALg0AOg1QACgJACgHIAAgDQAMBDA5AxQAHgNAGgMQAfhFAmhAQAxhRA+hKQBUhoBrhYIACgCQABAAABgBQAegZAggXQACgCACgCQABgBABAAQAUgPAWgOQgRBvANBOQAPgLAPgMQARgMARgNQC8iJDEhfQBWgpBZghQBognBqgbQANgDANgDQADAkADAkQABAFAAAGQAWDIBAC0QAPgFAQgEQAUgGAVgFQBYgWBggIg");
	this.shape_1.setTransform(105.7,89.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4F2006").s().p("ALXMrQALhGAAgRQAAgTgFg4QgFhAgGgVQAPAWAhCHIAQBFQA1g4BLi+QAahDARg2QgTCHgcBkQgsCXhBBGIgBAAQgMAAgOACQgcADghALQAGgdAIg3gANvD1ICLimIAFADIgWAcIgJAKQgeAqgeAtQgeAvgeA0QgRAdgQAgIgOAZQghATgrAQQhMAagxAEQCUhZBrh7gAPGnnQgiBAgdA9QgRAlgQAoIgYA8IgCAHQgMAggJAfQgbBWgOBQQgYAMgvBtQBVmxCqi6gAvxhKQgTg+AJgtIABgCQAMBDA5AxQgVAvABAaQgaglgOgrgAocmXQAWg6AMg6QAAgqAGglIAAgWIAFgDIABgBIAqgeQgRBwAOBNQgXAbh/C2IgKARIgGAJQA0hfAdhOgAGMnZQAIgtADgxQgViAAKiAQADgkAFgkIAFBIIACALQAWDJBACzIAfgJIApgKQhAAUg0ArIAAgBQhNBNgjA9QAlhpASh1gAF7tzQgCgBAAgEIAbgHQgQAMgHAAIgCAAg");
	this.shape_2.setTransform(109,89.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#772E07").s().p("ALWNPIABgOIgDgVQgGgvgShDIgJgkIgWhFIgTg4QlPjck1gkQmtgyl+EyQhEBBgZDdQjHlrBloWQAOAqAbAmQgBgaAUgwIANgZQAfhEAmhAQAxhSA+hKQBUhoBrhYQhnBehPBoQg5BNgsBTQgwBcgfBiIgMAnQg0DHAhD9QAglfCCjFIAGgKIhQAhQBKkNEpkTQgHAlAAArQgLA6gWA6QgeBOgzBfIAFgJQg0BZgfBYQDnlyF8jdQidC/g7DWQBojWDAioQB2hnCZhWQA3gfA9gdQAFACATgOQgFAkgDAkQgKCAAWCAQgEAxgHAsQgSB1gmBpQgNAWgIATQAFgDADgEQDgjXDJgxQA6gGA7AAQAggBAfABIAhABQipC5hWGyQAwhuAYgMIgJATIg/BnQBQhvB/ARQAqAOAqATIADACIANAGIiKClQhsB7iTBaQAxgFBLgaQArgPAigTIgLAVIgiBfQBOhZBkg7IAHgDIgBAKIgHA3QgRA3gbBDQhKC+g1A4IgQhGQghiGgPgWQAFAUAFBAQAFA4AAAUQAAAQgKBGQgIA4gHAdIgEABIAEgxg");
	this.shape_3.setTransform(107.7,89.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B5460B").s().p("AtvNvIgWgDIgCgDIgDgGQh7j1AGlAQACitAnjAQALg0AOg1IAEgQQgJAsASA/QhlIWDHFrQAZjdBEhBQhDDDgGBtIADA3QgfgJgZgFgANwGaQAygMA0gWIABgBIAdgLIAMgHQhkA7hOBZgAtqALIAMgnQAfhiAwhcQAshTA5hNQBPhoBnheIACgCIACAAQAegZAggYIAAAVQkpEThKENIBQghIgGAKQiCDFggFfQghj9A0jHgANHAaIAJgTQA8AGBLAWQh/gRhQBvgAomj2IAKgRQCAi2AWgbIAegXIAigZQC8iJDEhfQBWgpBZghQBognBqgbQgBAFADABQg8Adg4AfQiYBWh3BnQi/CohpDWQA7jWCdi/Ql8DdjnFyQAfhYA0hZgAGWj/QAkg9BMhMIABABQA0grA/gUQBYgWBggJQjJAxjgDXQgDAEgFADQAIgTANgWg");
	this.shape_4.setTransform(102.5,90);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4F2006").s().p("ALqNOIABgPIgDgUQgGgwgShDIgJgkIgWhFIgTg4QseoNqRINQhDDDgGBtIhQAdQh7j1AGk/QACiuAnjAQALg0AOg1IAEgQIAAgCQAMBDA5AwIANgZQAfhEAmhAQAxhSA+hKQBUhoBrhYIACgBIACgBQAegZAggYIAEgDIACgCIAqgdQgRBvANBOIAegXIAigZQFtkMGUhoIAbgCQACAoAEAnQAWDJBACzIAfgJIApgKQBYgWBggJQA6gFA7gBQAggBAfABIAhABQgiBAgcA9QgSAlgQAnIgYA9IgCAHQgMAggIAfQgcBWgNBPQA8AGBLAXQAqANAqAUIADABIANAGIAFADIgVAbIgJALQgfAqgdAsQgfAwgdA0QgSAdgQAgIgNAZIgLAWQAygNA0gVIABgBIAdgMIAMgGIAHgEIgBAKIgHA3QgTCIgdBjQgrCYhCBGIAAAAQgNAAgOACQgcADghALIgEABIAEgwg");
	this.shape_5.setTransform(105.7,89.8);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,213.4,181.3);


(lib.xespeiyou_com__1_226_68637 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("Ah8CoQCYAGA9hPQA5hKghhoQgfhYhiAEQgNAAgOACQgdAEgkAM");
	this.shape.setTransform(18.6,16.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCB5A0").s().p("AheCoQiBh/CSi+QAjgMAegEQAMgCANAAQBjgEAfBYQAiBog6BKQg4BJiGAAIgXAAg");
	this.shape_1.setTransform(15.6,16.8);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-1,32.2,35.7);


(lib.xespeiyou_com__1_225_10252 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEF8E9").s().p("Ag6BnQgdgRgCgpQgDgqAZgpQAZgrAlgSQAkgTAcAQQAdARACAqQADApgZApQgZArglATQgSAJgRAAQgQAAgNgHg");
	this.shape.setTransform(9.1,11.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,18.2,22.2);


(lib.xespeiyou_com__1_224_61215 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AnCiKIBJAAQBsjBDRAQQBKAHBAAdQADADADACQB4A5BGCNQgIFQjMB/QB5gpBCheQAlg2AXhKQAUg+AJhMQBKgRAniAQg7A0g5gQQgGgMgGgIQgRgbgSgWQiRi9jXgEQkGgOh0EFg");
	this.shape.setTransform(45.2,54.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231054").s().p("AEShMQhGiNh4g5IgGgFQhAgdhKgHQjRgQhsDBIhJAAQB0kFEGAOQDXAECRC9QASAWARAbQAGAIAGAMQA5AQA7g0QgnCAhKARQgJBMgUA+QgXBKglA2QhCBeh5ApQDMh/AIlQg");
	this.shape_1.setTransform(45.2,54.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FCCFB8").s().p("AF9C8QgRgbgSgWQiQi7jYgEQkFgOh1EDQAbmDEngNQFogOBnGtQgFgMgHgIg");
	this.shape_2.setTransform(39.4,20.9);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,0,92.4,93.9);


(lib.xespeiyou_com__1_223_14132 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1C1313").s().p("AhmB8Qgqg0AAhIQAAhIAqgzQArg0A7AAQA8AAAqA0QAqAzABBIQgBBIgqA0QgqA0g8AAQg7AAgrg0g");
	this.shape.setTransform(29.2,34.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3665D1").s().p("AiPCvQg7hJAAhmQAAhlA7hJQA8hIBTAAQBUAAA7BIQA8BJAABlQAABmg8BJQg7BIhUAAQhTAAg8hIgAhiiBQgqA0AABJQAABHAqA0QArAzA6AAQA8AAArgzQAqg0AAhHQAAhJgqg0Qgrgzg8AAQg6AAgrAzg");
	this.shape_1.setTransform(28.8,35.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7192DF").s().p("AjLD3QhUhmAAiRQAAiQBUhmQBVhnB2AAQB3AABUBnQBUBmAACQQAACRhUBmQhUBnh3AAQh2AAhVhngAiPipQg6BIgBBkQABBoA6BIQA8BJBTAAQBUAAA8hJQA7hIAAhoQAAhkg7hIQg8hJhUAAQhTAAg8BJg");
	this.shape_2.setTransform(28.8,35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7192DF").s().p("AjLD3QhUhmAAiRQAAiQBUhmQBVhnB2AAQB3AABUBnQBUBmAACQQAACRhUBmQhUBnh3AAQh2AAhVhng");
	this.shape_3.setTransform(28.8,35);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,57.6,70);


(lib.xespeiyou_com__1_222_52501 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEF8E9").s().p("AjGFEQiWhJgIm1IA9AAQBtjBDOAQQBMAHBAAdIAHAFQB4A5BGCNQgIFQjMB/QhVAahMAAQhhAAhVgpg");
	this.shape.setTransform(35.7,36.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,71.5,73.2);


(lib.xespeiyou_com__1_221_53379 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEF8E9").s().p("Ag6BnQgdgRgCgpQgDgqAZgpQAZgrAlgSQAkgTAcAQQAdARACAqQADApgZApQgZArglATQgSAJgRAAQgQAAgNgHg");
	this.shape.setTransform(9.1,11.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,18.2,22.2);


(lib.xespeiyou_com__1_220_33942 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AlOh7Qg5AQg7g0QAnCABKARQAJBMAUA+QAXBKAlA2QBCBeB5ApQhKgugwhJQhViCgFjWQAYgxAfgnQA5hJBOglQADgCADgDQBAgdBKgHQDRgQBsDBIBJAAQh0kFkGAOQinADh+B0QgjAgggAqQgSAWgRAbQgGAIgGAMg");
	this.shape.setTransform(45.2,54.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCCFB8").s().p("AgogtQipADh+ByIAAhzQB9ilDgAJQEnAMAbGEQh0kDkEANg");
	this.shape_1.setTransform(56.7,20.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FBBD9B").s().p("AA4iBIAAB1QgiAfgeAqQgTAWgQAaQgHAJgGALQAnieBJhkg");
	this.shape_2.setTransform(17.4,28.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231054").s().p("Aj4D8Qglg2gXhKQgUg+gJhMQhKgRgniAQA7A0A5gQQAGgMAGgIQARgbASgWQAggqAjggQB+h0CngDQEGgOB0EFIhJAAQhsjBjRAQQhKAHhAAdIgGAFQhOAlg5BJQgfAngYAxQAFDWBVCCQAwBJBKAuQh5gphCheg");
	this.shape_3.setTransform(45.2,54.2);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,0,92.4,93.9);


(lib.xespeiyou_com__1_219_91684 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1C1313").s().p("AhmB8Qgqg0AAhIQAAhIAqgzQArg0A7AAQA8AAAqA0QAqAzABBIQgBBIgqA0QgqA0g8AAQg7AAgrg0g");
	this.shape.setTransform(29.2,34.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3665D1").s().p("AiPCvQg7hJAAhmQAAhlA7hJQA8hIBTAAQBUAAA7BIQA8BJAABlQAABmg8BJQg7BIhUAAQhTAAg8hIgAhiiBQgqA0AABJQAABHAqA0QArAzA6AAQA8AAArgzQAqg0AAhHQAAhJgqg0Qgrgzg8AAQg6AAgrAzg");
	this.shape_1.setTransform(28.8,35.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7192DF").s().p("AjLD3QhUhmAAiRQAAiQBUhmQBVhnB2AAQB3AABUBnQBUBmAACQQAACRhUBmQhUBnh3AAQh2AAhVhngAiPipQg6BIgBBkQABBoA6BIQA8BJBTAAQBUAAA8hJQA7hIAAhoQAAhkg7hIQg8hJhUAAQhTAAg8BJg");
	this.shape_2.setTransform(28.8,35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7192DF").s().p("AjLD3QhUhmAAiRQAAiQBUhmQBVhnB2AAQB3AABUBnQBUBmAACQQAACRhUBmQhUBnh3AAQh2AAhVhng");
	this.shape_3.setTransform(28.8,35);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,57.6,70);


(lib.xespeiyou_com__1_218_87834 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEF8E9").s().p("AiQFTQjMh/gIlQQBGiNB4g5IAHgFQBAgdBMgHQDOgQBtDBIA9AAQgIG1iWBJQhVAphhAAQhMAAhVgag");
	this.shape.setTransform(35.7,36.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,71.5,73.2);


(lib.xespeiyou_com__1_217_88769 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(57,213,201,0.498)").s().p("ACqEqIiSgyQjDg9h+AAQgiAAgqAcQgrAagfAAQgjAAg4gVQg5gVgJAEQgLACg6AzQg6AxhSg7QhdhAgegTQgwgegZAAQg4AAguAnIgnAnQgmgBgYgtQgXgrgGhKQBbjbCFikQgQBjAAA7QAABKAIAYQAZAAAngeQAngbAjgGQANAkBHBpQBFBngTADQA4gEAtg5QAxg6APgHQAABEBWA3QBOAIBRAAQAYAADHgQQBLgBCVBSQAEAAAygtQA2gyAigpQAdAKCTA9QCMA2AZAAQAaAAAcgJQBShGhShVQBvAFAjAPQAkAQApglQAsgpADgLQAJgmABgxIABghIgBgHQgDgyADgfIgVhAICdBRQBuClBLDUIgggSQhLglgIAAIgNAAQANARAABCQAAAfgDANIgBAKQgmgkiMgPQiDgJgEACQgDgCgLASQgQAWgLANQgzA1hbAAQglAAi7gqQg2gJgEABQgwBqAAATQgrgLhUgbg");
	this.shape.setTransform(138.5,84.5,1,1,0,0,0,-0.1,4.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2,1,1).p("AVYHLQhsqQlSlXQj5j/l1hUQiIgeiNAAQigAAiIAeQj/A3jFCDQn3FMiLM0AwXOOQALgIAFgDQAAAAABAAQABgBACAAQAkgWAigRQAUgLATgJQCIhJBygvQBVglBXgcQEihiE8gbIBVkoIBREfQFegGHMBZ");
	this.shape_1.setTransform(136.8,91.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#09B5A8").s().p("A1XHLQCLs0H3lMQDFiDD/g3QCIgeCgAAQCNAACIAeQF2BUD5D/QFRFXBsKQQhWCOjEACQnMhZldAGIhRkfIhWEoQk7AbkjBiQhXAchUAlQhzAviIBJIgmAUQgjARgkAWIgDABIgBAAIgQALQgrnBkVgCg");
	this.shape_2.setTransform(136.8,91.1);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,275.6,184.2);


(lib.xespeiyou_com__1_216_54344 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF8E94").s().p("AKhAdQgngMAAgRQAAgPAngNQAmgOA2AAQA4AAAnAOQAeAJAIANQACAEAAACQAAAHgIAFQgJAKgXAHQgnAOg4AAQg2AAgmgOgAr8ArQg4AAgngOQgXgHgJgKQgIgFAAgHQAAgCACgEQAIgNAegJQAXgIAcgDQAVgDAXAAQA2AAAmAOQAnANAAAPQAAARgnAMQghAMgtACIgOAAg");
	this.shape.setTransform(105.3,173.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2,1,1).p("ApaOsQBJARBVAPQABAAABAAQArAHAsAGQBKAKBRAHQC8AUDBgUQBIgHBBgIQDsggCmg3QBrguBCg7QBqheAGiDQABhZAJieQAIifAspcIAAlUQvemtvcFvQhNAchOAiIAAKHQAaEAAECjQAAAIAAAHQAAADAAABQAFChAFBoQAAAKABAKQAMB1BkBYQAFAFAFAFQBAA1BhAqQA4ATBDARQAIACAJACg");
	this.shape_1.setTransform(106.7,101.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AAAgDIAAgEIAAAAIAAAPg");
	this.shape_2.setTransform(3.1,132.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FBBD9B").s().p("ADWN4QhCgRg5gUQhfgqhAg1IgKgJQhjhYgMh2IgCgUQgFhogEihIABAMIAAgQIgBAAIgBgOQgDijgakAIAAqIQBNghBOgdQgVNsAXEeQAIBjAMBJQACAMAEALQANBDAdBCQAFAQBKBpIgFAAIAJANIAVAZIALANQAtAzAwAsIAcAaIgRgEg");
	this.shape_3.setTransform(23.2,106.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FCCFB8").s().p("AkRPqQhRgHhKgKIhXgNIgCAAQhUgPhKgRIgcgaQgwgrgtgzIgLgNIgVgaIgJgMIAFAAQhKhqgHgPQgdhDgNhDQgEgKgCgMQgMhKgIhjQgXkfAVtqQPblvPeGtIAAFUQgrJcgJCfQgJCegBBZQgGCDhpBeQhCA7hrAuQimA3jsAgQhCAIhIAHQhhAKheAAQhgAAhegKg");
	this.shape_4.setTransform(114,101.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FBBD9B").s().p("AjIPqQhRgHhKgKIhXgNIgCAAQhVgPhJgRIgRgEQhDgRg4gTQhhgqhAg1IgKgKQhkhYgMh1IgBgUQgFhogFihIAAgEIAAgPQgEijgakAIAAqHQBOgiBNgcQPclvPeGtIAAFUQgsJcgICfQgJCegBBZQgGCDhqBeQhCA7hrAuQimA3jsAgQhBAIhIAHQhiAKhdAAQhgAAhegKg");
	this.shape_5.setTransform(106.7,101.3);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,215.5,204.5);


(lib.xespeiyou_com__1_215_33942 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AE6NnQgCgCgCgBQgXgTgUgXQgxgygtg8QhDhVg6hnQgfg1gag6QgLgYgMgaQi2mGhlpMABZtqQgxJtCRLDQAJAlAKAlQAoCYA1CSQAHAVALAYQAAACABACQgBgCgBgCAE7NnQgBAAAAAA");
	this.shape.setTransform(31.7,124.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(0,0,0,0.298)").ss(1,1,1).p("AABACQgBgCAAAA");
	this.shape_1.setTransform(62.9,211.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(2,1,1).p("AE7NnQgDgCgCgBQgXgTgUgXQgxgygtg8QhDhVg6hnQgfg1gag6QgLgYgMgaQi2mGhlpMABZtqQgxJtCRLDQAJAlAKAlQAoCYA1CSQAHAVALAYQAAACABACQgBgCgCgB");
	this.shape_2.setTransform(31.7,124.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4BCDC4").s().p("AC8NmQksnghBrHQgHhKgEhNIgCg8QgKh0BEiPQArhdA6AMQgxJtCPLEIATBKQAoCXA1CTQAHAUALAZIgFgEg");
	this.shape_3.setTransform(43.9,124.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#09B5A8").s().p("AEOP2Qgxgygtg8QhDhVg6hnQgfg1gag6IgXgyQi2mIhlpKQAHlLBxktIEuC4QgLBbgHBeQg6gNgpBdQhECPAKB0IACA9QAEBNAHBJQA/LHEuHhQgXgTgUgXg");
	this.shape_4.setTransform(31.4,105.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("rgba(0,0,0,0.298)").ss(1,1,1).p("AABACQgBgCAAAA");
	this.shape_5.setTransform(62.9,211.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(2,1,1).p("AE7NnQgDgCgCgBQgXgTgUgXQgxgygtg8QhDhVg6hnQgfg1gag6QgLgYgMgaQi2mGhlpMABZtqQgxJtCRLDQAJAlAKAlQAoCYA1CSQAHAVALAYQAAACABACQgBgCgCgB");
	this.shape_6.setTransform(31.7,124.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#09B5A8").s().p("AE3QeQgYgTgTgXQgxgygug8QhChUg6hnQgfg2gag5IgYgzQi1mIhmpKQAIlLBxktIEuC4QgLBcgIBdQgwJtCRLEIATBKQAoCXA1CSQAHAVAKAYIgEgDg");
	this.shape_7.setTransform(31.6,105.8);

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,0,65.4,213);


(lib.xespeiyou_com__1_214_98584 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.298)").ss(1,1,1).p("AAAACQAAgCABAA");
	this.shape.setTransform(0.5,211.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2,1,1).p("AhqvHQAGAyAFAzQBBKRiaL0QgJAkgKAmQgoCXg1CSQgHAVgLAYQADgBACgCQAXgTAUgXQAxgyAtg8QBDhVA6hmQAfg2Aag6QALgYAMgaQC2mIBlpKAk6PDQAAADgBACQABgCACgC");
	this.shape_1.setTransform(31.7,115.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4BCDC4").s().p("AEct/QAcCWAECfQhmJKi2GIIgWAyQgbA5gfA2Qg6BnhDBUQgtA9gxAyQgUAXgXASIgEAEQHMozCKzMg");
	this.shape_2.setTransform(31.8,122);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#09B5A8").s().p("AkaP0QA2iSAoiXIAThKQCar0hBqQQgFgzgHgzIEui4QA7CeAfCmQiKTLnNIzQAKgYAHgVg");
	this.shape_3.setTransform(30.2,105.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#09B5A8").s().p("AkoN1QAYhEAWhEQAahQAVhSIAThKQCarzhBqRIAfgeIF7GCQhmJEi0GFIgXAyQgaA6gfA1Qg6BnhDBVQgtA8gxAyQgUAXgXATIgEADIgBAAQALgYAHgVg");
	this.shape_4.setTransform(31.7,118.5);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,0,65.4,213);


(lib.xespeiyou_com__1_213_93701 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("Ahsg1QBmDZBzjZ");
	this.shape.setTransform(11,5.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,23.9,13);


(lib.xespeiyou_com__1_212_93071 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AAkAMQgkgxgjAx");
	this.shape.setTransform(3.7,1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCCFB8").s().p("AgjAFQAjgxAkAxQgUAPgQAAQgSAAgRgPg");
	this.shape_1.setTransform(3.7,2);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,9.3,5);


(lib.xespeiyou_com__1_210_7343 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("ACwA4QiQhli6gKQgiAdAVAsQBugRDpA3g");
	this.shape.setTransform(17.7,5.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1E9F96").s().p("AinARQgVgrAigdQC6AKCQBkQjpg3huARg");
	this.shape_1.setTransform(17.7,5.6);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,37.4,13.2);


(lib.xespeiyou_com__1_209_3681 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AivA4QCQhlC6gKQAiAdgVAsQhugRjpA3g");
	this.shape.setTransform(17.7,5.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1E9F96").s().p("ACbg3QAiAdgVArQhugRjpA3QCQhkC6gKg");
	this.shape_1.setTransform(17.7,5.6);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,37.4,13.2);


(lib.xespeiyou_com__1_208_41286 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhHBqQgbgTADgsQABgrAegrQAegsAngSQAngSAbATQAbASgCAsQgCAqgeAsQgeAtgmARQgTAJgRAAQgRAAgOgJg");
	this.shape.setTransform(9.7,11.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,19.4,23.1);


(lib.xespeiyou_com__1_207_75744 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AGqiHQgDAhgDAfIAAgBQlJjVnAgIQg8HiDWCtQkQicA+o3QAhAAAgABQG/ALFHDWg");
	this.shape.setTransform(42.6,59.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FBC2B5").s().p("AliAGQgggBghAAQCIj+ETAVQFSAZBaGyQlHjWm/gLg");
	this.shape_1.setTransform(43.2,23.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#433D21").s().p("AmdlpQAhAAAgABQG/ALFHDWIgGBAIAAgBQlJjVnAgIQg8HiDWCtQkQicA+o3g");
	this.shape_2.setTransform(42.6,59.9);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,0,87.3,97.2);


(lib.xespeiyou_com__1_206_4367 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhCBaQgbglAAg1QAAgzAbgmQAcglAmAAQAnAAAcAlQAbAmAAAzQAAA1gbAlQgcAlgnAAQgmAAgcglg");
	this.shape.setTransform(29.7,39.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7E713D").s().p("AiBCuQg2hIAAhmQAAhlA2hJQA2hIBLAAQBMAAA2BIQA2BJAABlQAABmg2BIQg2BJhMAAQhLAAg2hJgAhBhZQgcAlAAA0QAAA0AcAlQAbAlAmAAQAnAAAcglQAcglAAg0QAAg0gcglQgcglgnAAQgmAAgbAlg");
	this.shape_1.setTransform(29.6,39.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A39250").s().p("AjREZQhWh1AAikQAAijBWh1QBYh1B5AAQB7AABWB1QBXB1AACjQAACkhXB1QhWB1h7AAQh5AAhYh1gAiBitQg2BIAABlQAABmA2BIQA2BJBLAAQBMAAA2hJQA2hIAAhmQAAhlg2hIQg2hIhMAAQhLAAg2BIg");
	this.shape_2.setTransform(29.7,39.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A39250").s().p("AjREZQhWh1AAikQAAijBWh1QBYh1B5AAQB7AABWB1QBXB1AACjQAACkhXB1QhWB1h7AAQh5AAhYh1g");
	this.shape_3.setTransform(29.7,39.8);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,59.3,79.7);


(lib.xespeiyou_com__1_205_21233 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgtFjQhngKhNgsIgDgBQjVitA7njQHAAJFKDVIgBAFQg4HmlVAAQgVAAgWgCg");
	this.shape.setTransform(39.6,35.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,79.3,71.5);


(lib.xespeiyou_com__1_204_92858 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AmmiKQgCABgBABQACATABASQABAIABAHQAAAGABAFQAIgGAJgFQAMgHAMgIQE8i8GkgIQA8HmjaCsQEViag/o7IAAAAQghgBggABQm9ALlGDVg");
	this.shape.setTransform(42.6,60.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FBC2B5").s().p("AAJjkQEUgVCGD/QghgBggABQm+ALlGDVQBbmwFQgag");
	this.shape_1.setTransform(42.2,23.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#433D21").s().p("AFmknQmkAIk8C8IgYAPIgRALIgBgLIgCgPIgDglIADgCQFGjVG9gLQAggBAhABIAAAAQA/I7kVCaQDaisg8nmg");
	this.shape_2.setTransform(42.6,60.1);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,0,87.3,97.5);


(lib.xespeiyou_com__1_203_26753 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhHBqQgbgTADgsQABgrAegrQAegsAngSQAngSAbATQAbASgCAsQgCAqgeAsQgeAtgmARQgTAJgRAAQgRAAgOgJg");
	this.shape.setTransform(9.7,11.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,19.4,23.1);


(lib.xespeiyou_com__1_202_50532 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhCBaQgbglAAg1QAAgzAbgmQAcglAmAAQAnAAAcAlQAbAmAAAzQAAA1gbAlQgcAlgnAAQgmAAgcglg");
	this.shape.setTransform(29.7,39.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7E713D").s().p("AiBCuQg2hIAAhmQAAhlA2hJQA2hIBLAAQBMAAA2BIQA2BJAABlQAABmg2BIQg2BJhMAAQhLAAg2hJgAhBhZQgcAlAAA0QAAA0AcAlQAbAlAmAAQAnAAAcglQAcglAAg0QAAg0gcglQgcglgnAAQgmAAgbAlg");
	this.shape_1.setTransform(29.6,39.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A39250").s().p("AjREZQhWh1AAikQAAijBWh1QBYh1B5AAQB7AABWB1QBXB1AACjQAACkhXB1QhWB1h7AAQh5AAhYh1gAiBitQg2BIAABlQAABmA2BIQA2BJBLAAQBMAAA2hJQA2hIAAhmQAAhlg2hIQg2hIhMAAQhLAAg2BIg");
	this.shape_2.setTransform(29.7,39.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A39250").s().p("AjREZQhWh1AAikQAAijBWh1QBYh1B5AAQB7AABWB1QBXB1AACjQAACkhXB1QhWB1h7AAQh5AAhYh1g");
	this.shape_3.setTransform(29.7,39.8);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,59.3,79.7);


(lib.xespeiyou_com__1_201_83321 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Al4gTIgIgoQgGgigEgkIgBgFIAAAAIARgLIAZgPQE8i8GkgIQA8HmjbCsQhMArhmAKQgWACgVAAQksAAhPl4g");
	this.shape.setTransform(39.6,35.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,79.3,71.5);


(lib.xespeiyou_com__1_199_83390 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AB9CoQiYAGg8hPQg5hKAhhoQAihfBvAMQAKABAMACQAYAFAfAJ");
	this.shape.setTransform(12.5,16.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCB5A0").s().p("Ah7BfQg5hKAhhoQAihfBxAMIAUADQAYAFAfAJQCjCpiVCUIgXAAQiGAAg3hJg");
	this.shape_1.setTransform(16.1,16.9);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,33.2,35.8);


(lib.xespeiyou_com__1_197_92002 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(253,235,174,0.498)").s().p("ACJGwQgdgQgVAAQgKAAgJAQQgKAOgQAAQgNABglgfQgegWgSgSQhkgjhGBBQiyiCh7isQBZglAqAkQAnAnAhAYQAnAcATAAQAFAAAegUQAfgUAEAAIA2AUQA0AUATAAQAtAABNhVQBOhWBmAFIBHA3QCGBqAQAPQAigeALgJQAbgVAPAAQANAAAZgPQAIgNAMgLQAYgWAQAAQAPABApATQAoAVAJAAQAdAAAuhiQAtheAAgwQAWAAA2ArQAuAlASAVQAigiAYhCQAchKgQgmQA9ATBNBFIAVAUQA4A0ASAiIADAFQAgCDgDCUIAAAGIgFgGQg/hGgmgdQgpghgNAPIgPAAQgJATgeAsQgoA6gQAAQgDAAg+gzIh4B6QhAA8gaAAQgOAAhHgpQhIgngNAAQgZgBgdAuQgdAtggAAQgMAAghgKQgggKgNAAQguAAhQAjQhQAkgdgBQgPAAgegOgAu2EvQgDgfgOgRQgWADgTAaQgKANgJATQgFgQgFgjQgFgjgFgPQgnAHhgAaQgZgXgYgpQgshMgMhVQgLALgKAGQgMAJgQAOQgBgvABgrQAZjqBVi5QAlBYAGA5QAGA4AAAmQAKAAAUgFQAUgFAKAAQAAARAVBUIAaBDQAZBABaASQBJgxAZALQAAAYAHAcQADARAKAdQAYgQAKAHQAJAGBRgZQg1CZhMCCIhpAHIgDg0g");
	this.shape.setTransform(133.8,44.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2,1,1).p("AxaGIQAGgFAFgEQF/krB+ogQFwM5U9Bf");
	this.shape_1.setTransform(127.3,78.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC00").s().p("ApSk7Qh+Igl/ErIgLAIIAAx0MAi1AAAIAAS5Q09hflws5g");
	this.shape_2.setTransform(127.3,63.8);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,267.6,125.4);


(lib.xespeiyou_com__1_196_8832 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AjIAPIE1AAQBRgGALgX");
	this.shape.setTransform(20.2,1.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,42.3,5.1);


(lib.xespeiyou_com__1_195_24345 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AgwAQQAwhBAxBB");
	this.shape.setTransform(5,1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FBC2B5").s().p("AgwAEQAwhBAxBBQgYAYgZAAQgXAAgZgYg");
	this.shape_1.setTransform(5,2.9);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,12,6.7);


(lib.xespeiyou_com__1_194_30449 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("Ah7A3QAEAyA4AIQBEh5B3hoQi9BVg6BSg");
	this.shape.setTransform(12.4,11.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("Ah7A4QA6hSC9hWQh3BohEB4Qg4gHgEgxg");
	this.shape_1.setTransform(12.4,11.3);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,26.9,24.6);


(lib.xespeiyou_com__1_193_42712 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AB8A3QgEAyg4AIQhEh5h3hoQC9BVA6BSg");
	this.shape.setTransform(12.4,11.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("Ah7hwQC9BWA6BSQgEAxg4AHQhEh4h3hog");
	this.shape_1.setTransform(12.4,11.3);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,26.9,24.6);


(lib.xespeiyou_com__1_190_6852 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("ARWnmIgTJVQAAgBABgBQgBAMAAAMQgBAVgDATQgkCykJBoQjeBFlUAeQjRATjRgQQgGgBgGgBQlhgdjmhHQkJhogkiyQgDgTgCgVQgBgSgBgUIgMqS");
	this.shape.setTransform(111,140.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FBC2B5").s().p("AjCPTIgNgCQlggdjlhHQkJhogliyQgDgTgBgVIgDgmIgMqSQF/krB/oiQFvM7U+BfIgTJVIAAAAIAAAAIABgCIgBAYQgBAVgEATQgjCykJBoQjeBFlUAeQhxALhwAAQhhAAhggIg");
	this.shape_1.setTransform(111,98.7);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,0,224,198.4);


(lib.xespeiyou_com__1_189_86244 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AiTECQENgHAWjtQAhk4kyAu");
	this.shape.setTransform(23.6,25.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FBC2B5").s().p("AhVj8QEygughE4QgWDtkNAHQi3jLDJkzg");
	this.shape_1.setTransform(19.2,25.9);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-1,39.4,53.8);


(lib.xespeiyou_com__1_188_18601 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("ACRECQkLgdgTjXQggk4EyAu");
	this.shape.setTransform(14.5,25.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FBC2B5").s().p("AjCAOQggk4EyAuQDmEcjaDiQkLgdgTjXg");
	this.shape_1.setTransform(19.8,25.9);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,40.7,53.8);


(lib.xespeiyou_com__1_187_43090 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("ASDCPQgBABABABQgMEPh7FAQzpQZygwZQhbmsgFl/QgBgvAAgtQBethOPi8QGLhPHbBQQGfBQFeDNQCJBRCABkQieCKhDB8QDLB4CaDHgARii8QAoCcgHCv");
	this.shape.setTransform(151.9,126.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("A2NLgQhbmsgFl/QgBgvAAguQBetgOPi8QGLhPHbBQQGfBQFeDNQCJBRCABjQieCLhDB7QDLB4CaDIIlsE7IABg1QAAiSgiiEQAiCEAACSIgBA1IAAABQgMEQh7FAQp2IMphAAQpiAApQoMg");
	this.shape_1.setTransform(151.9,126.1);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,305.9,254.2);


(lib.xespeiyou_com__1_186_48349 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.5,1,1).p("AAeABIgEABQgdADgagH");
	this.shape.setTransform(3.8,0.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.5,1,1).p("AAagHQgEAHgEAFQgHAHgJAAQgSAAgQgXQAPAGARAAQAHAAAHgBQAGAAAGgBQAEgBADgB");
	this.shape_1.setTransform(4.1,1.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9C3D3D").s().p("AgEgEIAJgBQgDAGgCAFg");
	this.shape_2.setTransform(6.1,1.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E86464").s().p("AgYgLQAOAGARAAIAOAAIAEAKQgGAHgJAAQgSAAgQgXg");
	this.shape_3.setTransform(3.3,1.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(0.5,1,1).p("AgigRQgCgCgBgBAgigRQAEACAFACQAIADAMABQAXACANgFQAEgBADgCQgEADgEAHQgBABAAAAQgEAFgBAEQgGAHgCACQgOAMgOgJQgPgJgEgNQgCgGgBgGg");
	this.shape_4.setTransform(4,1.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#9C3D3D").s().p("AgHgEQAHgBAIgDIgFAIIgGAJQACgJgGgEg");
	this.shape_5.setTransform(6.1,2.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgBAJQgSgBgOgGQgCgDAAgHIAJAFQAHADANAAQAWABANgDIAHgEQgDADgFAGIgBABQgHADgJABIgKABIgCAAg");
	this.shape_6.setTransform(4.1,0.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E86464").s().p("AgEAKQgPgKgEgNQANAGAQABIAOgBQAFAGgBAHQgIAIgJAAQgGAAgFgEg");
	this.shape_7.setTransform(3.2,2.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(0.5,1,1).p("AAYALIAAgBQABgBAAgBQAEgLADgIQAEgHADgDQgGADgRABQgQACgmgIQAAAFACAEQADAOAJAKQAKAOAOgBQABAAACAAQAPgBAGgLg");
	this.shape_8.setTransform(3.9,1.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#9C3D3D").s().p("AAAALQAAgLgJgIIASgCQgDAIgEALIgBACg");
	this.shape_9.setTransform(6.2,1.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E86464").s().p("AgRAGQgJgJgEgPQAZAHAYgCQAKAJAAAKIACAAQgGALgQACIgCAAIgCAAQgNAAgJgNg");
	this.shape_10.setTransform(3.2,2.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgkABIgCgHQAmAGAQAAQARgCAGgCQgDADgEAFIgUACIgLABQgSAAgTgGg");
	this.shape_11.setTransform(3.9,0.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(0.5,1,1).p("AAWAHQAAgBABgBQADgGADgFQADgFADgCQgFACgQABQgOABgigFQAAADACADQADAIAIAHQAJAIAMAAQABAAABAAQAOgBAGgHg");
	this.shape_12.setTransform(4.2,2.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#9C3D3D").s().p("AAAAHQAAgHgIgEIAQgCIgGALIgBACg");
	this.shape_13.setTransform(6.3,2.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AggABIgCgEQAiADAOAAQAQAAAFgCIgGAEIgSACIgJAAQgRAAgRgDg");
	this.shape_14.setTransform(4.2,1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E86464").s().p("AgPAEQgIgFgDgKQAVAEAWgBQAJAGAAAFIACABQgGAHgOABIgCAAIgCAAQgLAAgIgIg");
	this.shape_15.setTransform(3.6,2.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(0.5,1,1).p("AAbgGIAHgBAAbgGQgBAHgFAEQgFADgIAAQgQgBgMgGQgNgEABgEQAOADAigBg");
	this.shape_16.setTransform(4.3,2.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#9C3D3D").s().p("AgEgEIAJgBQAAAHgFAEQAAgGgEgEg");
	this.shape_17.setTransform(6.5,2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E86464").s().p("AAOAIQgQgBgMgGQgMgEAAgEQAOADAigBQAFAFAAAFQgEADgHAAIgCAAg");
	this.shape_18.setTransform(3.6,2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},3).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},3).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},3).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},3).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},3).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.2,-0.4,8.1,2.7);


(lib.xespeiyou_com__1_185_34000 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ADQgPQABADAAADQAEAQAEAQQAAACAAABQAGAaAEAXQAEAXAEAVQADAXADATQADAaAAATQAAACAAACQAAAVgNARQgCADgDADIAAAAIgDAjIgJAFQgbAOgWAHQhDAWhsgBQhpgGg5gUQgUgHgRgJQgHgEgGgEQAAgEgDgOQgBgEgBgDQgBgEAAgCQAAAAgBgBQgDgFgDgGQgHgMgBgRQAAgBAAgCQAAgQAEgdQAEgVAGgbQABgGACgGQAEgPAEgQQAGgVAGgXQAFgQAGgPQAIgbAKgdQACgHADgIIAFgSIABgBQAKghAVgzQAFgMAFgNQALgcAPggQArgIAcgEQA0gIAwgVQADgBA4giQACABACABIAIBCIAAAAIAtCrIADAMQADAKACALIAAAAQAHAYAFAYg");
	this.shape.setTransform(23.2,36.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FB6400").s().p("AgIAoQhqgFg5gUQgTgHgRgIIgOgIIgDgRIgBgHIgCgGQAkAUA/ALQBGALBRgCQB1gCBYgnIgBAAIgDAjIgIAEQgbANgWAGQhBAVhmAAIgIAAg");
	this.shape_1.setTransform(23.1,65.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#522B10").s().p("AAJAwQhFgDhagbQgvgXgUgiIgFgIIANAIQARAJAUAHQA5AUBqAEQBrABBDgUQAXgHAbgOIAIgFQgLAYgUAUQgQAOgRAKQg/AYhHAAIgQAAg");
	this.shape_2.setTransform(23.2,69.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFA146").s().p("AjzCEQAAgQAEgcQA3AZBAAJQA1AIBPgBQBKAABHgSQA5gNAbgQQADAaAAATQgZAPg6AOQhNAThJABIgGAAQiMAAhsgsgAjlAnIADgMIAIgcQA0ATA8AHQAxAHBOgBQBIAABEgPQApgJAZgJIAIAqQgYALgtAJQhHAPhIAAIgQAAQiTAAhZgkgAhjgXQg+gEgtgSIALgiQAqAQA3AFQApAEBNgBQBBgBA9gMQAqgJAVgLIAIAjQgWALgtAJQg/ANhCABIgaAAQg8AAgigEgAhbh3QgxgEglgMIAFgPIAFgRQAjAKAqAEQAnAEBJgBQA/gBA7gMQAagGASgGIADAMQADAKACALQgTAHgdAGQg9ANg/AAIgbABQg4AAgggEg");
	this.shape_3.setTransform(23.2,44);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AiCExQg/gLgjgUIgBgBIgGgLQgHgMgBgRIAAgDQBuAtCQgBQBJgBBNgTQA6gOAZgPIAAAEQAAAVgNARIgFAGQhYAoh1ADIgXABQhFAAg7gMgAjjEYIACAHIADASIgFgZgAh4DcQhAgJg3gZQAEgWAGgbQBeAmCegCQBIAABHgPQAtgJAYgLIAGAqQgbAQg5ANQhHAShKAAIgQAAQhFAAgvgHgAhqB7Qg8gHg0gVIAMgsQAtASA+AEQAqAFBOgBQBCgBA/gNQAtgJAWgLIAAACIAKAxQgZALgpAJQhEAPhIAAIgUAAQhAAAgrgGgAhiAmQg3gFgqgQIASg2QAlAMAxAEQAoAEBLgBQA/AAA9gNQAdgGATgHIAAAAIAMAuIABAGQgVALgqAJQg9AMhBABIgjAAQg0AAgfgDgAhag3QgqgEgjgKIABgCQAKghAVgzIAKgZQALgcAPggIBHgMQA0gIAwgVIA7gjIAEACIAIBCIAAAAIAtCrQgSAGgaAGQg7AMg/ABIgaAAQg3AAgfgDg");
	this.shape_4.setTransform(23.2,34.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgKFQQhpgGg5gUQgUgHgRgJIgNgIIgDgSIgCgHIgBgGIgBgBIgGgLQgHgMgBgRIAAgDQAAgQAEgdQAEgVAGgbIADgMIAIgfIAMgsIALgfIASg4IAFgPIAGgTQAKghAVgzIAKgZQALgcAPggIBHgMQA0gIAwgVIA7gjIAEACIAIBCIAAAAIAwC3QADAKACALIAAAAIAMAwIABAGIAIAgIAAADIAKAxIAIAsIAGAqQADAaAAATIAAAEQAAAVgNARIgFAGIAAAAIgDAjIgJAFQgbAOgWAHQhAAVhlAAIgKAAg");
	this.shape_5.setTransform(23.2,36.1);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.2,1.5,50.9,73);


(lib.xespeiyou_com__1_184_14170 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkkgTIgGgoQgFgigDgkIAAgFIAAAAIANgLIATgPQD1i8FGgIQAvHmiqCsQg7ArhPAKQgSACgQAAQjoAAg+l4g");
	this.shape.setTransform(30.8,35.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,61.6,71.5);


(lib.xespeiyou_com__1_183_8422 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkkgTIgGgoQgFgigDgkIAAgFIAAAAIANgLIATgPQD1i8FGgIQAvHmiqCsQg7ArhPAKQgSACgQAAQjoAAg+l4g");
	this.shape.setTransform(30.8,35.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,61.6,71.5);


(lib.xespeiyou_com__1_182_70362 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AggBlQgQgqgCg7QgBg5AOgrQAOgpAVAAIAEAAQARAFAPAkQAQArABA5QABA7gOAqQgMAkgSAFIgFABQgTAAgQgqg");
	this.shape.setTransform(12.9,39.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7E713D").s().p("AhBDDQgXg+gHhUQgCgYgBgZIAAAAIAAgTIACgsQAEhKATg6QAbhRApAAQAFAAADACQAjAIAbBHQAYA+AHBSQACAXABAZIAAADIAAAAIAAAQQAAAXgBAVQgEBNgUA6QgYBHgiAKIgLABQgmAAgghSgAgvhlQgOArABA6QABA7AQAqQAQApAVAAIAGgBQAPgEANgkQAOgqgCg7QgBg6gQgrQgOgkgQgFIgFAAQgVAAgOApg");
	this.shape_1.setTransform(14,39.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A39250").s().p("AhoEZQgyh1gEikQgEijArh1QAsh1BDAAQBAAAAyB1QAxB1AECjQAFCkgsB1QgsB1hCAAQhAAAgyh1gAhejCQgTA5gEBLIgBAsIAAASIAAAAQAAAaADAYQAGBTAYA/QAfBSApAAIAKgBQAhgKAXhHQAVg6ADhNQACgVAAgXIgBgRIAAAAIAAgCQAAgZgDgXQgHhSgXg+QgbhHghgJQgFgBgGAAQgoAAgcBRg");
	this.shape_2.setTransform(16,39.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A39250").s().p("AhoEZQgyh1gEikQgEijArh1QAsh1BDAAQBAAAAyB1QAxB1AECjQAFCkgsB1QgsB1hCAAQhAAAgyh1g");
	this.shape_3.setTransform(16,39.8);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,32.1,79.7);


(lib.xespeiyou_com__1_181_61528 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AggBlQgQgqgCg7QgBg5AOgrQAOgpAVAAIAEAAQARAFAPAkQAQArABA5QABA7gOAqQgMAkgSAFIgFABQgTAAgQgqg");
	this.shape.setTransform(12.9,39.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7E713D").s().p("AhBDDQgXg+gHhUQgCgYgBgZIAAAAIAAgTIACgsQAEhKATg6QAbhRApAAQAFAAADACQAjAIAbBHQAYA+AHBSQACAXABAZIAAADIAAAAIAAAQQAAAXgBAVQgEBNgUA6QgYBHgiAKIgLABQgmAAgghSgAgvhlQgOArABA6QABA7AQAqQAQApAVAAIAGgBQAPgEANgkQAOgqgCg7QgBg6gQgrQgOgkgQgFIgFAAQgVAAgOApg");
	this.shape_1.setTransform(14,39.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A39250").s().p("AhoEZQgyh1gEikQgEijArh1QAsh1BDAAQBAAAAyB1QAxB1AECjQAFCkgsB1QgsB1hCAAQhAAAgyh1gAhejCQgTA5gEBLIgBAsIAAASIAAAAQAAAaADAYQAGBTAYA/QAfBSApAAIAKgBQAhgKAXhHQAVg6ADhNQACgVAAgXIgBgRIAAAAIAAgCQAAgZgDgXQgHhSgXg+QgbhHghgJQgFgBgGAAQgoAAgcBRg");
	this.shape_2.setTransform(16,39.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A39250").s().p("AhoEZQgyh1gEikQgEijArh1QAsh1BDAAQBAAAAyB1QAxB1AECjQAFCkgsB1QgsB1hCAAQhAAAgyh1g");
	this.shape_3.setTransform(16,39.8);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,32.1,79.7);


(lib.xespeiyou_com__1_180_39804 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag0BqQgMgTAIgsQAHgrAXgrQAWgsAWgSQAYgSALATQAMASgIAsQgHAqgXAsQgWAtgWARQgMAJgIAAQgJAAgGgJg");
	this.shape.setTransform(6.1,11.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,12.2,23.1);


(lib.xespeiyou_com__1_179_2493 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag0BqQgMgTAIgsQAHgrAXgrQAWgsAWgSQAYgSALATQAMASgIAsQgHAqgXAsQgWAtgWARQgMAJgIAAQgJAAgGgJg");
	this.shape.setTransform(6.1,11.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,12.2,23.1);


(lib.xespeiyou_com__1_178_11408 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AFBlqQgZgBgZABQlZALj9DVQgCABAAABQABATABASQAAAIABAHQABAGAAAFQAHgGAGgFQAJgHAKgIQD1i8FGgIQAvHmiqCsQDXiagxo7g");
	this.shape.setTransform(33.1,60.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FBC2B5").s().p("AAHjkQDWgVBoD/QgagBgYABQlaALj9DVQBGmwEFgag");
	this.shape_1.setTransform(32.7,23.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#433D21").s().p("AEWknQlGAIj1C8IgTAPIgNALIgBgLIgBgPIgCglIACgCQD9jVFZgLQAZgBAZABIAAAAQAxI7jXCaQCqisgvnmg");
	this.shape_2.setTransform(33.1,60.1);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,0,68.2,97.5);


(lib.xespeiyou_com__1_177_82630 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AFBlqQgZgBgZABQlZALj9DVQgCABAAABQABATABASQAAAIABAHQABAGAAAFQAHgGAGgFQAJgHAKgIQD1i8FGgIQAvHmiqCsQDXiagxo7g");
	this.shape.setTransform(33.1,60.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FBC2B5").s().p("AAHjkQDWgVBoD/QgagBgYABQlaALj9DVQBGmwEFgag");
	this.shape_1.setTransform(32.7,23.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#433D21").s().p("AEWknQlGAIj1C8IgTAPIgNALIgBgLIgBgPIgCglIACgCQD9jVFZgLQAZgBAZABIAAAAQAxI7jXCaQCqisgvnmg");
	this.shape_2.setTransform(33.1,60.1);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,0,68.2,97.5);


(lib.xespeiyou_com__1_174_79708 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AAZA8QgrgegDgVQgEgTABgGQAAgDABgCQAGgiAlgE");
	this.shape.setTransform(2.6,6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FBC2B5").s().p("AglAJQgDgTAAgFIABgGQAGgiAlgEQBHA7hBA7QgrgdgEgVg");
	this.shape_1.setTransform(4.1,6);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,9.3,14);


(lib.xespeiyou_com__1_173_55484 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AAYA8QgrgegDgUQgEgTABgGQAAgDABgCQAGgiAsgF");
	this.shape.setTransform(2.7,5.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FBC2B5").s().p("AgmAKQgDgTAAgGIABgFQAGgiAtgFQA/A7hBA8QgrgegEgUg");
	this.shape_1.setTransform(4.2,5.9);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1.1,9.5,14.2);


(lib.xespeiyou_com__1_172_92448 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AvvKrQAdgegEhuQgEhtgVi+QgTiyAYljQABgYACgZQD0uQOKBFQEwAmDPCVIAAgbAvqMjQgLBgASA9QABADABADQAjBvB+AqQAIADAJACQFkBdJ5gsQAFgBAFAAQB2gHBpgPQAGgBAFAAQAIgCAKAAQAqgJAGAAQAzgKAzgMQBwgcBhgrQBxgxBshLQj8gOhmjf");
	this.shape.setTransform(102.7,118.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("AjYLQIAA6NQJuHCkOW5Qj6gOhmjgg");
	this.shape_1.setTransform(190.7,115.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FBC2B5").s().p("AspRkIgRgFQh+gqgkhvIgCgGQgRg9ALhgQgthKAnguQAdgegEhuQgEhtgUi+QgTiyAXljIADgxQD1uQOKBFQEwAmDOCVIAAaOQBmDfD8AOQhsBLhwAxQhiArhwAcQgyAMgzAKQgHAAgqAJQgJAAgIACIgLABQhqAPh2AHIgJABQjMAOiwAAQlxAAjwg/g");
	this.shape_2.setTransform(102.1,118.7);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-1,212.5,239.5);


(lib.xespeiyou_com__1_171_94366 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AvvKrQAdgegEhuQgEhtgVi+QgTiyAYljQABgYACgZQD0uQOKBFQEwAmDPCVAvqMNQgLB2ASA9QABADABADQAjBvB+AqQAIADAJACQFkBdJ5gsQAFgBAFAAQB2gHBpgPQAGgBAFAAQAIgCAKAAQAqgJAGAAQAzgKAzgMQBwgcBhgrQBxgxBshLQj8gOhmjf");
	this.shape.setTransform(102.7,118.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(0,0,0,0.498)").ss(1,1,1).p("AAAANIAAgZ");
	this.shape_1.setTransform(168.9,17.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC00").s().p("AjYLQIAA6NQJuHCkOW5Qj6gOhmjgg");
	this.shape_2.setTransform(190.7,115.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FBC2B5").s().p("AstRkIgRgFQh+gqgkhvIgCgGQgRg9ALh2QgdhCAXggQAdgegEhuQgEhtgUi+QgTiyAXljIADgxQD1uQOKBFQEwAmDOCVIAAaOQBmDfD8AOQhsBLhwAxQhiArhwAcQgyAMgzAKQgHAAgqAJQgJAAgIACIgLABQhqAPh2AHIgJABQjMAOiwAAQlxAAjwg/g");
	this.shape_3.setTransform(102.5,118.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(0,0,0,0.498)").ss(1,1,1).p("AAAANIAAgZ");
	this.shape_4.setTransform(168.9,17.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FBC2B5").s().p("AtSRkIgRgFQh+gqgkhvIgCgGQgRg9ALhgQgthKAnguQAdgegEhuQgEhtgUi+QgTiyAXljIADgxQD1uQOKBFQEwAmDOCVQJwHCkOW5QhsBLhwAxQhiArhwAcQgyAMgzAKQgHAAgqAJQgJAAgIACIgLABQhqAPh2AHIgJABQjMAOiwAAQlwAAjxg/g");
	this.shape_5.setTransform(106.2,118.7);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-1,212.5,239.5);


(lib.xespeiyou_com__1_170_37997 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AhkAPICIgBQAvABASgd");
	this.shape.setTransform(10.1,1.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,22.3,5);


(lib.xespeiyou_com__1_169_43262 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AhkAPICIgBQAvABASgd");
	this.shape.setTransform(10.1,1.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,22.3,5);


(lib.xespeiyou_com__1_168_71055 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(253,235,174,0.498)").s().p("AjRF7QgQgCgKgPQgJgRgLAAQgWgCgdANQgfANgQgCQgdgChSgqQhTgpgvgEQgNgBghAHQghAIgOgBQgggDgegwQgegvgagCQgNgBhJAiQhKAjgOgBQgagChChCIh7iDQhAAugEAAQgQgCgpg9QgegsgKgUIgPgBQgOgQgqAdQghAVg1AzIgCgRQADiRAeiCQAUgYAjgdIAWgRQBPg/A/gPQgQAlAcBMQAZBEAjAkQASgTAvghQA4gnAWACQAAAwAuBjQAwBnAeAAQAIABAqgQQAqgQAPABQARABAYAYQANAJAIAOQAaARANABQAPABAcAXQAMAKAiAiQAQgPCKhcIBJgzQBoAEBRBaQBRBcAuAEQAUACA2gRQAzgQACABQADAAAhAWQAeAXAGABQATABAogZQAigVAogkQArghBbAtQAEgCA+ARQA4APALABQATACANgUQAUgfAGgGQBUAfAJgGQAKgFAZASQAKgeADgQQAHgbAAgZQAagJBKA4QBdgLAbg+IAahBQAWhSgBgRQAKAAAVAHQAUAHALABQgBgmAJABQAIAAAggbQANgnAPBQQAPANAlAqQAxA2AkAAIA9gUQBJgYBAgQIBBAAIAAACIgCABQgeATgcAVIgMAJQibByiLCiIgcgJQgMAagPAYQgYAngaAVQhjghgogLQgFAOgFAjQgFAjgFAPQgJgTgLgOQgUgcgWgEQgOAPgDAfIgEA0QgKAAhhgPIgBgBIgBgDQgDgFgHgFQgJgGgJAAIgjAMQglAMgXgCQgXgChWgUQhWgVgZgBQhRgHg+AgQg9AfgygEQgVgEgNACQhGhHhmAbQgTAQgfAUQgmAbgOAAIgBAAg");
	this.shape.setTransform(135.2,84.6,1,1,0,0,0,-16.7,-1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2,1,1).p("AL+CSQhVEYhGBaQAUj6g7iaQuog7kwmKQg9hQgkhe");
	this.shape_1.setTransform(82.5,147.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC00").s().p("ACBJPQupg7kwmMQg9hQgkhbQC2qUG+gsIAhgDIT2j8IHoU2QnAEkm4gHQhUEYhHBaQAUj6g6iag");
	this.shape_2.setTransform(126.9,99.5);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,303.8,200.1);


(lib.xespeiyou_com__1_167_82216 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(253,235,174,0.498)").s().p("AjRF7QgQgCgKgPQgJgRgLAAQgWgCgdANQgfANgQgCQgdgChSgqQhTgpgvgEQgNgBghAHQghAIgOgBQgggDgegwQgegvgagCQgNgBhJAiQhKAjgOgBQgagChChCIh7iDQhAAugEAAQgQgCgpg9QgegsgKgUIgPgBQgOgQgqAdQghAVg1AzIgCgRQADiRAeiCQAUgYAjgdIAWgRQBPg/A/gPQgQAlAcBMQAZBEAjAkQASgTAvghQA4gnAWACQAAAwAuBjQAwBnAeAAQAIABAqgQQAqgQAPABQARABAYAYQANAJAIAOQAaARANABQAPABAcAXQAMAKAiAiQAQgPCKhcIBJgzQBoAEBRBaQBRBcAuAEQAUACA2gRQAzgQACABQADAAAhAWQAeAXAGABQATABAogZQAigVAogkQArghBbAtQAEgCA+ARQA4APALABQATACANgUQAUgfAGgGQBUAfAJgGQAKgFAZASQAKgeADgQQAHgbAAgZQAagJBKA4QBdgLAbg+IAahBQAWhSgBgRQAKAAAVAHQAUAHALABQgBgmAJABQAIAAAggbQANgnAPBQQAPANAlAqQAxA2AkAAIA9gUQBJgYBAgQIBBAAIAAACIgCABQgeATgcAVIgMAJQibByiLCiIgcgJQgMAagPAYQgYAngaAVQhjghgogLQgFAOgFAjQgFAjgFAPQgJgTgLgOQgUgcgWgEQgOAPgDAfIgEA0QgKAAhhgPIgBgBIgBgDQgDgFgHgFQgJgGgJAAIgjAMQglAMgXgCQgXgChWgUQhWgVgZgBQhRgHg+AgQg9AfgygEQgVgEgNACQhGhHhmAbQgTAQgfAUQgmAbgOAAIgBAAg");
	this.shape.setTransform(135.2,84.6,1,1,0,0,0,-16.7,-1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2,1,1).p("AL+CSQhVEYhGBaQAUj6g7iaQuog7kwmKQg9hQgkhe");
	this.shape_1.setTransform(82.5,147.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC00").s().p("ACBJPQupg7kwmMQg9hQgkhbQC2qUG+gsIAhgDIT2j8IHoU2QnAEkm4gHQhUEYhHBaQAUj6g6iag");
	this.shape_2.setTransform(126.9,99.5);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,303.8,200.1);


(lib.xespeiyou_com__1_166_47421 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("A1rHeQgGgKgFgLQhZixgeltQAHkpBwjoQCclEFojFQGwjVIyAAQDJAKCjAhQITBuGMFaQiGBuhnCNQDFCFCbC5QgkAYgiAaQicB1iNChQAQMtnZHMQgTAOgTAO");
	this.shape.setTransform(151.8,134.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("A1rHeIgLgVQhZixgeltQAHkpBwjoQCclEFojFQGwjVIyAAQDJAKCjAhQITBuGMFaQiGBuhnCNQDFCFCbC5QgkAYgiAaQicB1iNChQAQMtnZHMIgmAcQzChms5sBg");
	this.shape_1.setTransform(151.8,134.9);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,305.7,271.9);


(lib.xespeiyou_com__1_165_84643 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("A1rHBQgGgKgFgLQhZixgeltQAHkpBwjoQCclEFojFQGwjVIyAAQDJAKCjAhQITBuGMFaQiGBuhnCNQDFCFCbC5QgkAYgiAaQicB1iNCiQAQMsnLHaQhDA5gqAP");
	this.shape.setTransform(151.8,137.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("A1rHBIgLgUQhZixgeluQAHkpBwjoQCclDFojGQGwjVIyAAQDJAKCjAiQITBtGMFaQiGBuhnCNQDFCFCbC6QgkAXgiAaQicB1iNChQAQMunLHZQhDA5gqAOQyJifs5sBg");
	this.shape_1.setTransform(151.8,137.8);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,305.7,277.6);


(lib.xespeiyou_com__1_164_72706 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AiojxQC/hVB9CFQBxC6iPDLQgaAcggATQhfA2iigk");
	this.shape.setTransform(19.8,27.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FBC2B5").s().p("AjFEFQBNj8gwj6IAAAAQC/hVB9CFQBxC6iPDLQgaAcggATQg7AghPAAQg3AAhAgOg");
	this.shape_1.setTransform(19.8,27.6);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,41.7,57.2);


(lib.xespeiyou_com__1_163_72907 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AiojxQC/hVB9CFQBxC6iPDLQgaAcggATQhfA2iigk");
	this.shape.setTransform(19.8,27.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FBC2B5").s().p("AjFEFQBNj8gwj6IAAAAQC/hVB9CFQBxC6iPDLQgaAcggATQg7AghPAAQg3AAhAgOg");
	this.shape_1.setTransform(19.8,27.6);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,41.7,57.2);


(lib.xespeiyou_com__1_162_43875 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("ABghwQiSBVgtBSQADAyArAIQA1h5Bchog");
	this.shape.setTransform(9.7,11.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("AhfA4QAthSCShWQhcBog0B4QgsgHgDgxg");
	this.shape_1.setTransform(9.7,11.3);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,21.3,24.6);


(lib.xespeiyou_com__1_161_34394 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("ABghwQiSBVgtBSQADAyArAIQA1h5Bchog");
	this.shape.setTransform(9.7,11.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("AhfA4QAthSCShWQhcBog0B4QgsgHgDgxg");
	this.shape_1.setTransform(9.7,11.3);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,21.3,24.6);


(lib.xespeiyou_com__1_160_79378 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.298)").s().p("AjrAmQhigPgBgXQABgWBigPQBhgQCKgBQCLABBiAQQBhAPAAAWQAAAXhhAPQhiARiLgBQiKABhhgRg");
	this.shape.setTransform(33.5,5.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,67,11);


(lib.xespeiyou_com__1_159_4262 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAxCYQBOgBAugoIAQjTQhkgzhfAAQhlgBhRA4IBnDPQA4ArBOgCg");
	this.shape.setTransform(18.9,15.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#321970").s().p("AhVBvIhnjPQBRg4BkABQBgAABjAzIgPDTQgvAohNABIgFAAQhLAAg2gpg");
	this.shape_1.setTransform(18.9,15.3);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,39.8,32.6);


(lib.xespeiyou_com__1_158_19422 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.298)").s().p("AjOAcQhXgMAAgQQAAgPBXgNQBWgMB4AAQB5AABXAMQBVANAAAPQAAAQhVAMQhXANh5AAQh4AAhWgNg");
	this.shape.setTransform(29.4,4.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,58.8,8.3);


(lib.xespeiyou_com__1_157_10854 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AggAMIgBAJIAGAdIACABIAZABIAdgfIAFgfIgFgeIgQgLIgNAAIgFACIgOATIgJAaIgDAIIgBAG");
	this.shape.setTransform(12.6,14.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B67903").s().p("AgYAXIABgBIAVgRIAQgcIALAUIgXAYIgDgQIABAQIgWADg");
	this.shape_1.setTransform(12.3,17.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D48C00").s().p("AgJALIgBgiIANACIAIAVIgIAYg");
	this.shape_2.setTransform(14.9,13.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFE051").s().p("AgdAtIAYgDIgDgQIAFAPIAVgZIgLgTIAPALIAIgYIgFAgIgcAegAAWglIgQgCIABgBIASgFIAFAdg");
	this.shape_3.setTransform(13,15.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F3DB2C").s().p("AgVATIABgIIAdAJIgEAFIgRAOIgGgPIAFAXIgBABgAgSADIADgIIAfAKIgDAGgAAHgvIAKAIIAEAEIgbAEg");
	this.shape_4.setTransform(11.3,14.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F7C10D").s().p("AgCAHIgMgNIACAAIgBgBIANAAIAPAJIgQAGIgBABg");
	this.shape_5.setTransform(14,10.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgUAcIAGAOIARgNIAEgGIgcgJIAAgCIABgGIAfAIIADgFIgfgLIAJgaIAMgUIAGgBIABABIgCAAIAMAPIAAACIABAiIgSAeIgTARgAgIgcIAcgDIgFgFIgJgHg");
	this.shape_6.setTransform(11.5,14.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(1,1,1).p("Aglg7QAGgGAJgHQAMADARAKQAGADAGAEQAfASADALQAJAYgXAiQgVAfgXAGQgPAEgJgOQgEgHgHgVQgEgLgCgHQgEgMAAgCQgBAAAAgBQgDgJgBgXQAAgLALgL");
	this.shape_7.setTransform(17.2,21.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#432377").s().p("AgOAAIgIgdIAEgDIAEgDQAHADAKANQARASACAIIABADIgCACQgIAEgKgJIgDgEIABAKIABAWIgEABQgEgFgIgfg");
	this.shape_8.setTransform(15,18.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#5F3A9A").s().p("AghA3QgFgHgHgVIgFgRQAOAfAUgCQAXgDAIgcQAGgTgEgYIgDgNIgLgRIALAHQAfARAEAMQAIAagWAfQgWAfgWAHIgGAAQgLAAgHgLg");
	this.shape_9.setTransform(17.7,22);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#7E56BD").s().p("AgeAeIgEgOIgBgBQgDgLgBgWQAAgKALgLIAIAeQAIAeAEAEIAGgBIgBgVIgBgIIADAEQAIAGAIgEIACgBIgBgCQgCgKgPgRQgMgNgIgDQAGgGAJgHQAKADATAKIAMARIADANQAEAWgHAVQgHAcgZADIgCAAQgRAAgOgdg");
	this.shape_10.setTransform(15.6,20);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#5F3A9A").s().p("AgdA+QgEgHgHgVIgGgSIgEgOIgBgBQgDgJgBgXQAAgLALgLIAEgDIADgDQAGgGAJgHQAMADARAKIAMAHQAfASADALQAJAYgXAiQgVAfgXAGIgFABQgLAAgIgLg");
	this.shape_11.setTransform(17.5,21.1,1,1,0,0,0,0.3,-0.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D48C00").s().p("AgZAzIgCgBIgGgdIABgJIAEgQIAJgaIAOgTIAFgCIANAAIAQALIAFAeIgFAfIgdAfg");
	this.shape_12.setTransform(12.6,14.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(1,1,1).p("AByhGQACABACABIAIBCIAAAAQgBAAgBABQgWARgZAPQgNAHgMAHQgmAUgpANQgFACgEABQgjAJgjAFQACgUgBgQQAAgGAAgHQgBgDAAgEQgBgCAAgDQgEgQgGgJQgEgDgDgCQAsgGAdgEQA2gIAxgVQAEgBA6gigAh8AEIAAg7QBxhGB9A3");
	this.shape_13.setTransform(26.2,8.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhpAuIAAgMIgBgHIgBgFQgEgRgGgGIgHgGIBJgLQA1gIAygVIA+gjIAEACIAIBBIAAABIgCAAQgWASgZAOIgZAPQgmAUgqANIgIADQgjAIgjAGQACgUgBgRg");
	this.shape_14.setTransform(26.2,10);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FBC2B5").s().p("Ah3gJQBxhHB+A4Ig+AhQgyAUg1AIIhKAMg");
	this.shape_15.setTransform(25.6,4.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(1,1,1).p("ACJk6IA2C6QADALACAKQAHAYAFAYQAAADABAEQAEARAEARQAAABAAABQAFAYAFAYQAEAXAEAUQADAXADATQACAbABASQAAACAAACQAAAVgNARQgCADgDAEIAAAAIAAAAIgDAjAjeDyQAAgEgDgNQAAgBgBgBQAAgCAAgCIgBgCQgBgEAAgBQgBgBAAAAQgDgFgDgGQgHgNgBgQQAAgCAAgCQAAgQAEgcQAEgVAGgbQABgHACgGQADgPAFgPQAFgVAHgVQAFgQAGgSQAIgbAKgdQACgHADgIIAGgTQAKghAVgzQAFgMAFgNQAKgZANgdAiWE2QgvgZgUgiQgDgEgCgFQAGAFAHAEQARAJAUAHQA5AUBpAFQBsABBDgWQAWgGAbgOIAJgFQgLAYgUATQgQAQgRAK");
	this.shape_16.setTransform(24.4,38);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#7E56BD").s().p("AgIAoQhpgGg6gUQgTgHgRgHIgNgIIgEgSIAAgBIgBgEIAAgCIgCgGQAkAUA+ALQBGAMBSgDQB0gBBZgnIgEAiIgIAFQgbAMgWAHQhBAVhmAAIgIAAg");
	this.shape_17.setTransform(24.3,63.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#321970").s().p("AAJAwQhFgDhagbQgvgXgUgiIgFgIIAOAIQAQAJAUAHQA5AUBqAEQBrABBEgUQAVgHAbgOIAJgFQgLAYgTAUQgRAOgRAKQg/AYhHAAIgQAAg");
	this.shape_18.setTransform(24.4,67.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AiCERQg/gLgjgUIgBgBIgGgLQgHgMgBgRIAAgDQAAgQAEgcQAEgWAGgbIADgMIAIgeIAMgsIALggIASg4IAFgPIAGgTQAKghAVgzIAKgZQAKgZANgdIDvgRIA2C6QADAKACALQAHAYAFAYIABAGIAIAhIAAACIAKAxIAIAsIAGAqQACAaABATIAAAEQAAAVgNARIgFAGIAAAAIAAABQhYAnh1ADIgYAAQhEAAg7gLgAjiD+IABABIADASIgEgTg");
	this.shape_19.setTransform(24.4,34.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAJFHQhFgDhagbQgvgZgUgiIgFgIIgEgTIAAgEIgBgCIgBgGIgBgBIgGgLQgHgMgBgRIAAgDQAAgQAEgcQAEgWAGgbIADgMIAIgeIAMgqIALgiIASg4IAFgPIAGgTQAKghAVgzIAKgZQAKgZANgdIDvgRIA2C6QADAKACALQAHAYAFAYIABAGIAIAjIAAACIAKAvIAIAsIAGAqQACAaABATIAAAEQAAAVgNARIgFAGIAAAAIAAABIgDAiQgLAYgUAUQgQAQgRAKQhAAYhGAAIgQAAg");
	this.shape_20.setTransform(24.4,39.2);

	this.addChild(this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1.8,50.9,73.8);


(lib.xespeiyou_com__1_153_35700 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AhDhKIgBAhQgCAoACAjQACAaACAWQAXAtAvgBQA1AAALg/QgPh3gUgoQgPgfglACQgqABgIAyg");
	this.shape.setTransform(7,12.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhABSIgEgwQgCgjACgoIABghQAIgyAqgBQAlgCAPAfQAUAoAPB3QgLA/g1AAIgCAAQguAAgWgsg");
	this.shape_1.setTransform(7,12.7);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,16.1,27.4);


(lib.xespeiyou_com__1_151_67841 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AglgIQgBgBgCgBQgOgJgHgjQgFgUgDgiAgSAlQgEgBgBgCQgEgDgEgKIgDgOIAAgBQgDgJAAgFQAcALAfgKQAVgIAMgLAAvAXQgCACgEACQgMAIgNABQgPADgKgBQgGgBgDAAAAvAXQAAAIgBAHQAAAggDAZQgFAmgQgEQgPgDgMgqQgCgEgHgbQgCgIgCgIABCiAQALBNgUAWQgBACgBABIAAAaQAAAOgEAGQgBABgDAC");
	this.shape.setTransform(7,17);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7E56BD").s().p("AgSAgIgJgBQgDgBgBgCQgEgDgEgJIgEgPIAAgBQgDgJABgFQAbANAfgMQAWgIAMgLIAAAcQgBAMgEAGIgEADQgCADgEABQgLAIgNABQgIADgJgBIgJAAg");
	this.shape_1.setTransform(7.9,17.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FCB5A0").s().p("AAIA0QgNgDgOgpIgJgdIgEgRIAJABQAMACANgDQANgCAMgHQAEgCACgDQAAAJgBAHQAAAfgDAXQgFAjgNAAIgDgBg");
	this.shape_2.setTransform(8.4,24.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AglBMIgDgCQgOgIgHgjQgFgUgDghQANg1AugGQAsgGAgAuQALBKgUAWIgCAEQgMAKgVAJQgQAFgMAAQgQAAgPgHg");
	this.shape_3.setTransform(7,8.3);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,0,16.1,31);


(lib.xespeiyou_com__1_149_71773 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ACBhqIgGBKIAAAEQABgBABAAQABAAACAAQAEgBgDAZQgEAVgCADQgEAEggAEQgOABgPACIABAYIAAAJIABAhQgDAKgXABQgXACgGgKIgJgkIgDgJIgHgWQgNAAgNgBQgegCgGgFQgEgCgFgWQgGgUAEgBIAAAAQAEAAADABQAgADBDgDQBFgDAjgFAA7A2IhCAAAA6AeQgRABgTABQgTABgRgBAhXgVIgqhV");
	this.shape.setTransform(13.1,16.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#321970").s().p("AAFCBIgIgkIA+AAIABAhQgCAKgXABIgHAAQgRAAgGgIgAhPAIIgHgBIAAAAIgrhTQAqg9BXABQBWAAAsA8IgGBKIgBACQgiAFhFADIg6ABQgZAAgQgBg");
	this.shape_1.setTransform(13,13.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FCB5A0").s().p("AgdAMIgHgUIAkgBIAkgCIABAXg");
	this.shape_2.setTransform(15.3,21);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgYAvIgDgKIBCAAIAAAKgAgiAQIgagCQgegBgGgFQgEgDgFgUQgGgVAEgCIAAAAIAHABQAgADBEgDQBEgDAjgFIACAAIADgBQAEAAgDAYQgEAWgCACQgEAEggAEIgdADIgkACIgYABIgMAAg");
	this.shape_3.setTransform(15.1,18.4);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,0,28.2,28.6);


(lib.xespeiyou_com__1_148_26706 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAyArQAEgCADgCQAZgPAAgUQgBgIgLgXQgOgcAAAAQgBgHgCgIAhLg/QAAALgCAMQgEAqABAQQACAWAYAIQAJADAKACQATADAXgCQAYgCATgJAgjA1QABAHABAGQACAEAWABQARABAUgEQAWgEABgHQABgDgCgL");
	this.shape.setTransform(8.2,11.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgJBcQgWgBgCgEIgCgNIABAAQALACAMAAIABAAIAAAAIARgBQAYgCATgJQgTAJgYACIgRABIAAAAIgBAAQgMAAgLgCIgBAAQgKgCgJgCQgYgJgCgWQgBgPAEgrIACgWQAyhgBOBYIADAPIAOAcQALAVABAKQAAAVgZAOIgHAEQACAMgBACQgBAHgWAEQgQADgOAAIgHAAg");
	this.shape_1.setTransform(8.2,9.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AAtBIQAAhJgEhMQg2hUgfBYQALBBASA2QACAJAEAKQABADAIAYQAGAXAUAEQAPACAEgxg");
	this.shape_2.setTransform(7.8,14.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FCCFB8").s().p("AAaB3QgUgEgGgXIgJgbIgGgTQgSg2gLhBQAfhYA2BUQAEBMAABJQgEAvgOAAIgBAAg");
	this.shape_3.setTransform(7.8,14.3);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,0,18.4,27.3);


(lib.xespeiyou_com__1_147_62509 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ACBhqIgGBKIAAAEQABgBABAAQABAAACAAQAEgBgDAZQgEAVgCADQgEAEggAEQgOABgPACQgRABgTABQgTABgRgBQgNAAgNgBQgegCgGgFQgEgCgFgWQgGgUAEgBIAAAAQAEAAADABQAgADBDgDQBFgDAjgFAgHA2IgHgWAA7A2IAAAJIABAhQgDAKgXABQgXACgGgKIgJgkIgDgJAA6AeIABAYIhCAAAhXgVIgqhV");
	this.shape.setTransform(13.1,16.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgdAEIgDgHIBBAAIAAAHg");
	this.shape_1.setTransform(15.6,22.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FCB5A0").s().p("AgdAMIgHgUIAkgBIAkgCIABAXg");
	this.shape_2.setTransform(15.3,21);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#80441B").s().p("AgiAfIgagBQgegCgGgFQgEgCgFgVQgGgVAEgBIAAAAIAHABQAgADBEgDQBEgDAjgFIACgBIADAAQAEgBgDAZQgEAVgCADQgEAEggAEIgdADIgkACIgYAAIgMAAg");
	this.shape_3.setTransform(15.1,16.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#522B10").s().p("AAFCBIgIgkIA+AAIABAhQgCAKgXABIgHAAQgRAAgGgIgAhPAIIgHgBIAAAAIgrhTQAqg9BXABQBWAAAsA8IgGBKIgBACQgiAFhFADIg6ABQgZAAgQgBg");
	this.shape_4.setTransform(13,13.8);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,0,28.2,28.6);


(lib.xespeiyou_com__1_141_96903 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAmhEQgBgEgCgCQgQgjgjABQgMAAgNAIQgRALgEARQgDAJgBANQgBAJABALQAAANACARQACAQAAAKQAAAMgDAeQBMBRA5hNQgEgTgFgYQgEgXgBgGQgJgwgHgUg");
	this.shape.setTransform(6.8,11);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhBBEQADgeAAgMIgCgaIgCgeQgBgLABgJQABgNADgJQAEgRARgLQANgIAMAAQAjgBAQAjIADAGQAHAUAJAwIAFAdIAJArQgcAlggAAQghAAgogpg");
	this.shape_1.setTransform(6.8,11);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,15.6,24);


(lib.xespeiyou_com__1_138_17035 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAyArQAEgCADgCQAZgPAAgUQgBgIgLgXQgOgcAAAAQgBgHgCgIAhLg/QAAALgCAMQgEAqABAQQACAWAYAIQAJADAKACQATADAXgCQAYgCATgJAgjA1QABAHABAGQACAEAWABQARABAUgEQAWgEABgHQABgDgCgL");
	this.shape.setTransform(8.2,11.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgJBcQgWgBgCgEIgCgNIABAAQALACAMAAIABAAIAAAAIARgBQAYgCATgJQgTAJgYACIgRABIAAAAIgBAAQgMAAgLgCIgBAAQgKgCgJgCQgYgJgCgWQgBgPAEgrIACgWQAyhgBOBYIADAPIAOAcQALAVABAKQAAAVgZAOIgHAEQACAMgBACQgBAHgWAEQgQADgOAAIgHAAg");
	this.shape_1.setTransform(8.2,9.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AgJBBQABADAIAYQAGAXAUAEQAPACAEgxQAAhJgEhMQg2hUgfBYQALBBASA2QACAJAEAKg");
	this.shape_2.setTransform(7.8,14.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FCCFB8").s().p("AAaB3QgUgEgGgXIgJgbIgGgTQgSg2gLhBQAfhYA2BUQAEBMAABJQgEAvgOAAIgBAAg");
	this.shape_3.setTransform(7.8,14.3);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,0,18.4,27.3);


(lib.xespeiyou_com__1_137_13148 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAohCQgBgEgBgDQgRgigiAAQgMAAgOAJQgRALgEAQQgDAKAAANQgBAJAAALQABAMACAQQABASAAAKQABAMgDAdQBMBSAzhZQgCgLgBgNQgEgfgBgFQgKgwgHgUg");
	this.shape.setTransform(6.5,10.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag+BFQADgdgBgMIgBgcIgDgcQAAgLABgJQAAgNADgKQAEgQARgLQAOgJAMAAQAiAAARAiIACAHQAHAUAKAwIAFAkIADAYQgbAugiAAQgdAAglgng");
	this.shape_1.setTransform(6.5,10.8);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,15.1,23.7);


(lib.xespeiyou_com__1_131_95881 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("ACxhWQiziDitCDIgBDuQAEgCATgEQAKgCAOgDQBGgQBCgbQAugVAvgaQAMgHAMgGQAFgDAFgDIArgTg");
	this.shape.setTransform(25.4,15.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCCFB8").s().p("AivhWQCtiDCzCDIAABjIgrATIgKAGIgYANQgvAaguAVQhCAbhGAQIgYAFQgTAEgEACg");
	this.shape_1.setTransform(25.4,15.3);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(6.7,-1,37.5,32.6);


(lib.xespeiyou_com__1_130_35263 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEF8E9").s().p("AiXFXQiRheAHm2IAxAAQBLi6CaAKQAdACARAEQCSAsBYDGIAVA2QgFA7gMAyQgrDIh+BcQhFAchBAAQg9AAg8gXg");
	this.shape.setTransform(29.1,36.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,58.2,73.4);


(lib.xespeiyou_com__1_129_62975 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1C1313").s().p("AhCBwQgdguAAhCQAAhBAdgvQAcguAmAAQAnAAAdAuQAcAvAABBQAABCgcAuQgdAvgnAAQgmAAgcgvg");
	this.shape.setTransform(16.1,34.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3665D1").s().p("AhhCiQgohDAAhfQAAheAohDQAphEA4AAQA5AAAoBEQApBDAABeQAABfgpBDQgoBEg5AAQg4AAgphEgAhPhwQgdAwAABAQAABCAdAvQAcAuAoABQAmgBAcguQAcgvAAhCQAAhAgcgwQgcgugmAAQgoAAgcAug");
	this.shape_1.setTransform(17.3,34.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7192DF").s().p("AiQDxQg8hkgBiNQABiMA8hkQA9hkBTAAQBUAAA9BkQA8BkABCMQgBCNg8BkQg9BkhUAAQhTAAg9hkgAiCihQgoBEAABdQAABfAoBEQApBDA5AAQA4AAAohDQAqhEAAhfQAAhdgqhEQgohDg4AAQg5AAgpBDg");
	this.shape_2.setTransform(20.6,34.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7192DF").s().p("AiQDxQg8hkgBiNQABiMA8hkQA9hkBTAAQBUAAA9BkQA8BkABCMQgBCNg8BkQg9BkhUAAQhTAAg9hkg");
	this.shape_3.setTransform(20.6,34.2);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,41.2,68.3);


(lib.xespeiyou_com__1_128_47964 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEF8E9").s().p("Ag5BsQgFgDgFgFQgPgPAAgfQAAgpAZgrIAEgHQAXgnAegWQAhgVAaANQARAIAEAYQACAKAAALQgBAdgLAfIgMAZQgZAtghAVQgUAOgSAAQgKAAgJgEg");
	this.shape.setTransform(8.3,11.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,16.6,22.6);


(lib.xespeiyou_com__1_127_61170 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AEJhuQgghBglgxQhiiDiEgbQj0gohsEaIBJAAQBLi5CaAKQAfACARAEQCQAsBYDGQALAZAKAcQgFA6gMA0QgrDIh+BcQA3gaAsglQARgPARgQQBKhPAgh3QAOgyAGg3QACgBABgBQA+gdAVg3QALgfgBgnQgFAHgFAGQgjAngwAEQgNABgPgCg");
	this.shape.setTransform(38.7,52);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCCFB8").s().p("AEABZQhhiAiGgbQjygphsEZQBImEEIAMQEPAPAsGHQgghBgmgyg");
	this.shape_1.setTransform(32.7,20.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231054").s().p("ADIBgQAMg0AFg6IgVg1QhYjGiQgsQgRgEgfgCQiagKhLC5IhJAAQBskaD0AoQCEAbBiCDQAlAxAgBBQAPACANgBQAwgEAjgnIAKgNQABAngLAfQgVA3g+AdIgDACQgGA3gOAyQggB3hKBPIgiAfQgsAlg3AaQB+hcArjIg");
	this.shape_2.setTransform(38.7,52);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,0,79.4,91.8);


(lib.xespeiyou_com__1_125_9030 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AAOAkQghgPAEggQAEgfAbAI");
	this.shape.setTransform(1.7,3.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCCFB8").s().p("AgWgLQAFgfAbAIQAcAigeAkQghgPADggg");
	this.shape_1.setTransform(2.4,3.7);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,5.8,9.4);


(lib.xespeiyou_com__1_124_18146 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF8E94").s().p("AAAArQg2AAgngMQgmgMAAgTQAAgRAmgNQAngMA2AAIAUABQAqABAfAKQAnANAAARQAAATgnAMQgfAKgqACIgUAAg");
	this.shape.setTransform(60.4,170.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2,1,1).p("AqgHpQAmgWgQiSQgOhcgRkLQgQjzArqFAKvL5Qh+BKkYA9QgbAGgVACQiNAVicACQg1AAg5gDQg2gDg3gGQg3gGhHgPQhJgOg+geQiShFAQjc");
	this.shape_1.setTransform(68.9,106.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FCCFB8").s().p("AjqPgQg2gDg3gGQg3gGhHgPQhJgOg+geQiShFAQjcQgcguAegaQAmgWgQiSQgOhcgRkNQgQjxArqFQKXkQKmEQQDzNcjzM7Qh+BKkYA9QgbAGgVACQiNAVicACQg1AAg5gDg");
	this.shape_2.setTransform(74.9,99.6);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.7,0,150.6,200.2);


(lib.xespeiyou_com__1_123_49502 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AkxsPQCsKhhGMwQAAAAAAABQgCAMAAAMQgBAHgBAHQAAAAAAABQgBALgCAKQAAAAAAABQgFAzgFA0QgCARgCAQQAAABAAABQgDAWgDAYQAPgUAOgUQAAgBABAAQALgQAKgPQAAAAAAgBQALgPAKgOIAAgBQAxhKAvhLIAAAAQAJgOAHgPQAAgBABAAIAAgBQAshMAkhPQAjhHAfhIQECpjhDrH");
	this.shape.setTransform(30.6,114);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#09B5A8").s().p("AibPnIAAgBIAEghIAKhnIAAgCIADgUIAAgCIACgOQAAgMACgLIAAgCQBGswisqhQBbmOFJAxQDHTQogNUIAGgug");
	this.shape_1.setTransform(23.7,104.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#27D3C7").s().p("ABOwSQBoAsBJCKQBDLHkCJjQgfBIghBHQgmBPgsBMIAAABIgBABQgHAPgJAOIAAAAQgvBLgxBKIAAABIgVAdIAAABIgVAfIgBABIgdAoQIgtVjHzQg");
	this.shape_2.setTransform(34.3,104.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#27D3C7").s().p("AAMgUIACACIAAACIgbAlIAZgpg");
	this.shape_3.setTransform(9,207.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#09B5A8").s().p("AjgPnIAAgBIAEghIAKhnIAAgCIADgUIAAgCIACgOIACgWIAAgBIAAgCQBGswisqhQBbmOFJAxQBoAsBJCKQBDLGkCJkQgfBIgjBGQgkBPgsBNIAAAAIgBACQgHAPgJANIAAABQgvBLgxBKIAAAAIgVAeIAAABIgVAeIgDgCIgbArIAGgug");
	this.shape_4.setTransform(30.6,104.6);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,0,63.3,210.2);


(lib.xespeiyou_com__1_122_66169 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("Ag7A2QBZgBAehq");
	this.shape.setTransform(6.1,5.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,14.2,13);


(lib.xespeiyou_com__1_120_51624 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(57,213,201,0.498)").s().p("ACdFAIidgyQjOg9iIAAQgmAAgsAdQguAagfAAQgnAAg9gWQg8gUgKADQgLADg9AyQg/AxhYg6QhjhBgggSQgzgegbAAQg7AAgxAmIgqAoQgpgBgZgtQgagrgMhSQBXjyCmizQgYCPAAA9QAABJAJAYQAaAAArgdQAogbAmgHQANAkBMBoQBLBogWAEQA9gEAvg5QA2g8APgHQAABGBcA2QBTAIBWAAQAaAADUgPQBQgBCgBSQADAAA2guQA6gyAkgoQAfAKCdA8QCVA3AcAAQAbAAAdgKQBZhFhZhVQB4AFAkAPQAoAPArgmQAvgoADgKQAJgnABgwQACgwgDgDQgDgCAEhEIgXhBIDtBTQB1C1BGDwQhLg1gSgKQhPglgIAAIgOAAQAOARAABBQABAfgFAOIAAAKQgpgkiVgPQiNgKgDACQgFgCgLATQgRAWgLAMQg2A2hiAAQgnAAjIgrQg5gIgGABQgzBpABAUQgvgLhYgcg");
	this.shape.setTransform(145.8,78.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2,1,1).p("AWrLhQhBr4l5lrQhthoiFhIQj0h2j5grQiggcigAEQh6ADh6AVQjaAkjdBdQrWFvAFPPQBLgNBRgIQABgBABAAQFfgqHpAR");
	this.shape_1.setTransform(145.1,74.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#09B5A8").s().p("AmcGtQnpgRlfAqIgCAAQhRAJhLANQgFvQLWluQDdhdDaglQB6gUB6gDQB3ADB3AUQD5ArDzB3QC8BkCJCkQETFJBIJJQAHA6AGA8IAAAgIACA7Qi2DAi0BxQkDCij9AAQnkAAnRpPg");
	this.shape_2.setTransform(141.1,102.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#27D3C7").s().p("AKbLYIAAggQgGg8gHg6QhIpJkTlJQiJiki6hkQjzh3j5grQh3gUh5gDQCigEChAbQD4ArDyB3QCGBHBsBoQF6FsBAL3QgoAugoArIgCg7g");
	this.shape_3.setTransform(215.3,78.7);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,292.3,205.2);


(lib.xespeiyou_com__1_119_39659 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ABZhyIAFDaIABALAgjBzIgEgLIg3iq");
	this.shape.setTransform(9.5,15.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#696969").s().p("Ag/gMIgDgLICFAAIAAALQgcAkghAAQgfAAgmgkg");
	this.shape_1.setTransform(12.3,28.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FCCFB8").s().p("AgnCDIg3iqQAsiaCLBqIAGDag");
	this.shape_2.setTransform(9.5,13.2);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,0,21.1,31.1);


(lib.xespeiyou_com__1_118_88527 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AMMz0QAKB2ADB/QAAASAAARQABCjgICVQgLDEgdCtQgZCQglCBQgWA8gVA5QgxB4g4BeQgBACgBACQgcAtgeAmQiVDBjJAdAsY1EIAASxQAFBTAGA8QAGA5AGAjQACAPADAPQAAABAAABQABAKACAJQAGAcAHAaQAmCOBSBiQAzA+BEAsQAIAFAGAFQAeARAhAPQAxAWA5ARQAkAKArAIQAAgBABAAQACgDAAABQAAgBABAAQAHgIgIAMQAMgPACAAQADgCAAAAAjiJsQAKgEAJgEQAOgGANgEQACgBADAAQAHgDAGgCQAYgHAYgEQAigGAfABQAYgCAZABIAEABQALAAANACQAIACAIABQAOACANADQADAAABABQAYAHAbAIQAcAjgJAkQgFAXgVAVQAFAHAFAGQAtBBBBBDQARARAUASQBKBEBhBIQgxB2hUBJQhAA1hSAdQgwASg2AJQgSADgQACIgLg8IggjCIgWEBQgcAAgagDQgtgCgrgJQgVgFgTgFQgUgEgRgFIgHgDQgkgMgfgQQg+gfgsgwQgTgVgPgYQgFgHgFgIQABAAABgBQARgPAPgTQAFgHAFgHQA8hVAuhHQANgVAMgTQAYgoASgjQAbgvAMgmQAXgHAWgEQAOgCANgDQAGgBAFgBQAGAAAFgBQAGgBAGgBQAXgFAWgBQALgBAOgBQAPgCAQABQABAAAFABQALgBAQAAQAWABAUACIABAAQAaABAeAGAjcLlQgXgUgJgXQgCgNACgMQAAgRAIgSQgCAAgBAAIAAAAAj0J7QgCACgBABAj0J+QABgDgBAA");
	this.shape.setTransform(79.4,178);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1E9F96").s().p("AAAABIABgBIAAABIgBAAgAAAABIAAgBIABAAIgBABg");
	this.shape_1.setTransform(54.7,241.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFBC15").s().p("Ag9AdQgCgNACgMQAAgPAIgSQAMgPACAAIADgCIABgBIATgIIAZgKIAFgBIANgFQgeBSBCAqIgLABIgLACIgbAFQgUAEgXAHQgXgUgJgXg");
	this.shape_2.setTransform(60.3,244.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FAC84B").s().p("Ahug0QAYgIAYgEQAigGAdABQAYgCAaABIAFABQALAAANADIAQADQAnA/gVA/IgqgDQgQAAgNACIgGgCQgQAAgPACIgXACQgWABgXAFIgMABQhEgqAghRg");
	this.shape_3.setTransform(74.2,243.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFDC87").s().p("AgfA8IgBAAQAVg+gnhAIAbAEIAEABIAxAQQAcAjgJAiQgFAWgVAVQgcgFgagCg");
	this.shape_4.setTransform(89,243.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#27D3C7").s().p("AmBUdQDNgHCAjCIACgDIACgDIACgDIACgDIABgCIABgBIACgEQjBiUhvjMIABAAQAaACAeAFIAKAOQAtBBBBBDIAlAiQBKBFBfBIQgvB1hUBJQhAA1hSAeQgwARg2AKIgiAEgAlLJmIgEgBIgbgEQDEghCSi8QAcgnAcgtIACgEQA4heAxh3IArh2QAliAAZiRQAditALjEQAHiCAAiNIAAgoIAAgKIAAgZIgFjDIAAggQgGg9gHg5IAAgEIADAEIAHAIQAXAcAXAfIAnA1QAKB1ADCAIAAAjQABCjgICUQgLDEgdCtQgZCRglCAIgrB2QgxB3g4BeIgCAEQgcAtgeAnQiTDAjJAeIgzgQg");
	this.shape_5.setTransform(120.2,175.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#09B5A8").s().p("AgqYZQgtgCgrgIIgogKIglgKIgHgCQgkgNgfgPQg+gfgsgxQgTgVgPgXIgKgPIACgBQARgQAPgTIAKgOQA8hVAuhHIAZgoQAYgoASgiQAbgvAMgnQAXgHAWgDIAbgFIALgCIALgCIAMgBQAXgFAWgBIAYgCQAOgCAQAAIAGACQANgCAQAAIAqADQBvDMDBCUIgCAEIgBABIgBACIgCADIgCADIgCADIgCADQiADCjNAHIgijBIgWEAIgHAAQgWAAgXgDgAjGNSIgBAAIgCACIgBABQgrgIgkgKQg5gQgxgWQghgPgegSIgOgKQhEgsgzg9QhShigmiPQgHgagGgbIgDgTIAAgDIgFgdQgGgkgGg7QgGg8gFhSIAAyvQMttIKYMcIAAAEQAHA5AGA9IAAAgIAFDDIAAAZIAAAKIAAAoQAACNgHCCQgLDEgdCtQgZCPglCAIgrB4QgxB3g4BeIgCAEQgcAtgeAnQiSC8jEAhIgQgDQgNgDgLAAIgFgBQgagBgWACQgfgBgiAGQgYAEgYAIIgNAEIgFACIgbAJIgTAJIgBAAIgDACQgCABgMAPQAIgMgHAIg");
	this.shape_6.setTransform(74.9,156.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1E9F96").s().p("AAAABIAAAAIAAgBIABAAIAAABIgBAAg");
	this.shape_7.setTransform(54.7,241.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFBC15").s().p("AjGAmQgDgNACgMQAAgPAIgSQANgPABAAIAEgCIADgDQAIgCAJgEIAagKIAGgBIANgFQAXgHAZgEQAhgGAeABQAYgCAaABIAFABQAKAAANACIARADIAaAFIAEABIAzAPQAdAjgKAiQgFAXgUAVQgegGgagBIgBAAIgrgDQgPAAgOABIgGgBQgPgBgQACIgXACQgVABgXAFIgMACIgLABIgMACIgaAFQgWAEgXAHQgYgUgIgXg");
	this.shape_8.setTransform(74,244);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#09B5A8").s().p("AhXYZQgtgCgrgIIgogKIglgKIgHgCQgkgNgfgPQg+gfgsgxQgTgVgPgXIgKgPIACgBQARgQAPgTIAKgOQA8hVAuhHIAZgoQAYgoASgiQAbgvAMgnQAXgHAWgDIAbgFIALgCIALgCIAMgBQAXgFAWgBIAZgCQAPgCAQAAIAGACQALgCAQAAIAqADIABAAQAaACAeAFIAKAOQAtBBBBBDIAlAiQBKBFBhBIQgRAogVAjQgoBDg3AwQhAA1hSAeQgwARg2AKIgiAEIgrj9IgWEAIgHAAQgYAAgXgDgAjzNSIgBAAIgCACIgBABQgrgIgkgKQg5gQgxgWQghgPgegSIgOgKQhEgsgzg9Qg0g+gihPQgUgvgOg1QgHgagGgbIgDgTIAAgDIgFgdQgGgkgGg7IgGhEIgFhKIAAyvQMttIKYMcIABABIAAABIABAAIABABIAAABIAGAHIABABQAXAcAXAfIAnA1IACAXQAIBrADBzIAAAjIAAAUQABCYgICLQgLDBgcCqIgBAGQgVB5gfBwIgKAmIgrB4QgwB0g2BdIgDAEIgCAEQgcAtgeAnIgbAhIgDADQiKCfi2AbIgzgQIgEgBIgbgEIgQgDQgNgDgLAAIgEgBQgZgBgYACQgfgBgiAGQgYAEgYAIIgNAEIgFACIgbAJQgJAFgIABIgDADIgDACQgCABgMAPQAIgMgHAIg");
	this.shape_9.setTransform(79.4,156.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1E9F96").s().p("AAAABIAAAAIAAgBIABAAIAAABIgBAAg");
	this.shape_10.setTransform(54.7,241.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFBC15").s().p("AjGAmQgDgNACgMQAAgPAIgSQANgPABAAIAEgCIADgDQAIgCAJgEIAagKIAGgBIANgFQAXgHAZgEQAhgGAeABQAYgCAaABIAFABQAKAAANACIARADIAaAFIAEABIAzAPQAdAjgKAiQgFAXgUAVQgegGgagBIgBAAIgrgDQgPAAgOABIgGgBQgPgBgQACIgXACQgVABgXAFIgMACIgLABIgMACIgaAFQgWAEgXAHQgYgUgIgXg");
	this.shape_11.setTransform(74,244);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#09B5A8").s().p("AhXYZQgtgCgrgIIgogKIglgKIgHgCQgkgNgfgPQg+gfgsgxQgTgVgPgXIgKgPIACgBQARgQAPgTIAKgOQA8hVAuhHIAZgoQAYgoASgiQAbgvAMgnQAXgHAWgDIAbgFIALgCIALgCIAMgBQAXgFAWgBIAZgCQAPgCAQAAIAGACQALgCAQAAIAqADIABAAQAaACAeAFIAKAOQAtBBBBBDIAlAiQBKBFBhBIQgRAogVAjQgoBDg3AwQhAA1hSAeQgwARg2AKIgiAEIgrj9IgWEAIgHAAQgYAAgXgDgAjzNSIgBAAIgCACIgBABQgrgIgkgKQg5gQgxgWQghgPgegSIgOgKQhEgsgzg9QhShigmiPQgHgagGgbIgDgTIAAgDIgFgdQgGgkgGg7QgGg8gFhSIAAyvQMttIKYMcIADAEIAHAIQAXAcAXAfIAnA1QAKB1ADCAIAAAjQABCjgICUQgLDEgdCtQgZCPglCAIgrB4QgxB3g4BeIgCAEQgcAtgeAnQiVDAjJAeIgzgQIgEgBIgbgEIgQgDQgNgDgLAAIgEgBQgZgBgYACQgfgBgiAGQgYAEgYAIIgNAEIgFACIgbAJQgJAFgIABIgDADIgDACQgCABgMAPQAIgMgHAIg");
	this.shape_12.setTransform(79.4,156.5);

	this.addChild(this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,0,160.8,314);


(lib.xespeiyou_com__1_117_61064 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AA/hkIAFDmQgDAQgeABQgfACgHgOIhAjrQBIhdA6Bdg");
	this.shape.setTransform(6.9,17.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#696969").s().p("AgDCHIhAjrQBIhdA6BdIAFDmQgDAQgfABIgFAAQgaAAgGgMg");
	this.shape_1.setTransform(6.9,17.3);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,1.5,15.7,31.6);


(lib.xespeiyou_com__1_116_86816 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("ACLA4QhxhliTgKQgbAcAQAtQBYgRC3A3g");
	this.shape.setTransform(13.9,5.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#09B5A8").s().p("AiEARQgQgrAbgdQCTAKBxBkQi3g3hYARg");
	this.shape_1.setTransform(13.9,5.6);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,29.9,13.2);


(lib.xespeiyou_com__1_115_23951 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("ACxhWQiziDitCDIgBDuQAEgCATgEQAKgCAOgDQBGgQBCgbQAugVAvgaQAMgHAMgGQAFgDAFgDIArgTg");
	this.shape.setTransform(25.4,15.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCCFB8").s().p("AivhWQCtiDCzCDIAABjIgrATIgKAGIgYANQgvAaguAVQhCAbhGAQIgYAFQgTAEgEACg");
	this.shape_1.setTransform(25.4,15.3);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(6.7,-1,37.5,32.6);


(lib.xespeiyou_com__1_251_78989 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAPA8QAIgYABgcQAAgngXgfQgGgNgPgRIgKgHIgLgHQAmAOAUAaQAOARAGAUQAGATgBAZQgBAWgNAeQgRAjgTAFQAPgYAIgXg");
	this.shape.setTransform(6,-10.9,0.638,0.637,0,0,0,-0.2,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgTAHQgHgLAAgOIABgGIAAAAIAFAAIAXAQQAYAPAAAGQAAAIgGACQgFADgMAAQgNgBgKgSg");
	this.shape_1.setTransform(-9.3,-6.8,0.744,0.743);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgCAIQgDAAgCgDQgCgDABgCQACgDAEgDQACgCADAAQAEAAACAEQABADgBACQgBADgEACQgDADgBAAIgCgBg");
	this.shape_2.setTransform(-2.6,12.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FC6384").s().p("AABBEQgZAAgJgUQgGgNAAgPQAAgaAQgYQAQgWAYgOIAAABIAGgCQgOAHgJANQgNARAAAUQAAARAIAMQAIAPASAAQAKAAAEgGIAFgLIAAAKQAAAOgIALIAAACQgLANgTABg");
	this.shape_3.setTransform(-8,-10.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF2560").s().p("AgJCyQgMgBgJgHQgMgKACgPQADgKAIgGIAAAAQAMgKAQgBIABAAIACABQAVAGABAUQAAARgLAJQgIAHgMAAIgCAAgAgVCAQgFACgBAEQgCADACAEQACACAEABQAEAAADgCQAFgCABgEQABgEgCgDQgBgDgEAAQgEAAgDACgAgZBDQgIgHgFgJQAEgUAJgQIAAgCQANgTAQgRIgBAAQAPgPAKgOIABgBQAIgLAAgOIAAAAQAAgOgIgJIgBAAQgJgJgPgBQgOAAgMAIIAAAAQgFADgDAGQgEAHACAGIAAABIAAABIgEALQgFAGgKAAQgSAAgKgPQgIgMAAgTQAAgUAPgRQAKgNANgHIACgCIABAAIADgBQAWgJAaAAIAAAAQAVAAATAHIAEABIAIADIABABIAFADQAIAFAFAIQAMASAAAbQAAAmgOAZIgeAnQgHAHgEANIgIAXQgFAPgGAGQgJALgKAAQgLAAgJgGg");
	this.shape_4.setTransform(-0.6,-1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#DB0E45").s().p("AgkCxQgRAAgMgKQgLgLgBgPIAAgBIACgJQgCAPALAJQAJAHANABQAPABAJgIQAKgIAAgRQgBgUgVgHQAOABAKAJQAKAKABAQIAAABQgBAPgJALQgLAKgSAAgAg+BVQgMgIgBgNIAAgHIACgVQAEAKAJAGQAJAGALAAQAMAAAJgKQAFgHAFgPIAIgWQACgLAHgJIAfgnQANgZAAgmQAAgcgLgRQgGgIgHgFQAUALAOASIABACQAPAVAAAbIAAABQgBAigOAWQgNAUgSARQgOALgLARIAAAAQgHAOgBAXIAAABQgBASgNAHQgIAEgKAAQgTAAgKgHg");
	this.shape_5.setTransform(2.9,0.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#8A0235").s().p("AAAC8QgPAAgNgIQgLgGgGgIQAEgHAAgIIAAgBQABgQAMgKIAAAAQAMgKAQgBIAAAAQAEAAgCgFQARAJAHAHQAMAKABAQIAAABQgBAQgLAKIAAABQgMAKgPAAgAgcBfQgQgJgHgLQAMAEAAgFIAAgIQABghAOgYIAAgBQANgUAPgSIAAAAQAOgPALgOIABgBQAIgLAAgOQAAgOgJgJIAAgBQgKgIgPgBQgOAAgMAIIAAgBQgFAEgDAFQgDAIABAGIAAABIABALQAAAOgIAMIgBACQgLANgSABIgBAAQgYgBgTgRQAIAAgBgCQgHgOAAgPQABgdAQgXQAQgXAbgOIAAABQAZgOAhgBIABAAQALgEAVAIIAUAJQAYAMAQAVIAAACQAQAVAAAcIAAABQgBAigOAWQgOAVgRAPQgOANgKARIgBAAQgJAOgBAXIAAACQgBASgNAHQgIAEgJAAQgRAAgNgHg");
	this.shape_6.setTransform(0.7,0.4,1,1,0,0,0,-0.1,0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#41041B").ss(2,1,1).p("ABpiKQgQgVgYgNQgBAAgTgIQgHgDgGgBQgQgFgQAAIAAAAQgcAAgWAJIgDABQgEACgDACIAAgBQgcAOgQAWQgQAYAAAcQAAAQAHANIAAAAQAEAIAIAGQARAMAUAAIACAAQASgBAMgNQAAAAAAgBQAIgMAAgOQAAgFgBgGIAAgBQgBgHADgHQADgFAFgEIAAABQAMgIAOAAQAEAAAEABQABABABABIABABQAIAJABANIAAABQgBANgIALQAAAAgBABQgKAOgNAPIABAAQgSARgNAUQAAABAAAAQgJAQgEAUQgBAKgBALIAAAHQAAAGACAEQAFAGAGAFQAGAEAGAFQAOAHARAAQAKAAAHgFQANgHABgRIAAgCQABgXAJgOIABAAQAKgRAOgOQARgOAOgVQAPgWAAgiIAAgBQAAgdgQgUQAAgBAAgBgAAJBvQgGgDgGgBQgCAAgCAAIgBAAQgQAAgMAKIgBAAQgIAHgCAJQgBAFgBAFIAAAAQABAPALALQAAAAAAABIAAAAQAHAGAJAFQAOAJAMAAIAAAAQASAAALgLIAAAAQALgKABgQIAAgBQgBgQgMgKQgHgHgRgJg");
	this.shape_7.setTransform(0.1,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#8A0235").s().p("AAFC+QgMAAgOgJQgKgFgFgGIAAAAIgBgBQgLgLAAgPIAAAAIABgKQACgJAJgHIAAAAQAMgKAQAAIAAAAIAFAAQAGABAFADIAAgBQARAJAIAHQAMAKABAQIAAABQgBAQgLAKIAAAAQgLALgSAAgAgVBhIgNgJQgHgFgEgGQgBgEAAgGIAAgHIABgVQAEgUAJgQIAAgBQANgUASgRIgBAAQAMgPALgOIABgBQAHgLACgNIAAgBQgBgNgIgJIgBgBIgDgCIgHgBQgOAAgNAIIABgBQgFAEgDAFQgDAHABAHIAAABIABALQAAAOgIAMIgBABQgLANgSABIgBAAQgVAAgRgMQgIgGgEgIIAAAAQgHgNAAgQQAAgcAQgYQAQgWAbgOIAAABIAIgEIADgBQAWgJAcAAIAAAAQAQAAAQAFIAMAEIAUAIQAZANAQAVIAAACQAQAUAAAdIAAABQgBAigOAWQgOAVgRAOQgOAOgKARIgBAAQgKAOAAAXIAAACQgCARgMAHQgHAFgLAAQgQAAgNgHg");
	this.shape_8.setTransform(0.1,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(6,1,1).p("ABpiKQgPgVgZgNQAAAAgUgIQgHgCgFgCQgRgFgQAAIgBAAQgbAAgWAJIgCACQgEABgFACIAAAAQgbANgPAXQgRAXAAAcQAAAQAGANIAAgBQAFAKAIAFQARAMAVAAQAAAAABAAIAAAAQASAAAMgNQAAgBAAgBQAIgMAAgOQAAgGAAgFIAAgBQgCgHAEgGQACgGAFgEIAAAAQAMgHAOAAQAEAAADABQABABACABIABAAQAIAKABANQgBAOgHALQgBABgBAAQgLAOgMAPIABAAQgRARgOAUQAAABAAAAQgJAQgDAUQgCAKAAALIAAAHQAAAFACAEQAEAHAGAFQAGAEAHAFQANAHARAAQAJAAAIgFQANgHACgRIAAgCQAAgXAKgOIAAgBQAKgQAOgOQARgOAOgUQAPgXAAgiIAAgBQAAgdgPgVQgBAAAAgBgAAuCYQAAgQgNgKQgIgHgQgJQgHgCgFgBQgCAAgCAAIgBAAQgQAAgMAKIAAAAQgIAHgDAJQgBAFAAAFQAAAAAAABQAAAPALAKQAAAAABAAIAAABQAGAGAJAFQAOAJAMAAQASAAALgLQAMgKAAgQQAAAAAAgBg");
	this.shape_9.setTransform(-0.1,0.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#8A0235").s().p("AgVC1QgJgFgGgGIAAgBIgBAAQgLgKAAgPIAAgBQAAgFACgFQACgJAIgHIABAAQAMgKAQAAIAAAAIAEAAQAFABAHACQARAJAIAHQAMAKAAAQIAAABQAAAQgMAKQgLALgRAAQgNAAgOgJgAgVBhIgNgJQgGgFgEgHQgCgEAAgFIAAgHIACgVQAEgUAIgQIAAgBQAOgUARgRIAAAAQAMgPAKgOIABgBQAIgLABgOQAAgNgJgKIgBAAIgDgCIgHgBQgOAAgMAHIAAAAQgEAEgDAGQgEAGACAHIAAABIAAALQAAAOgIAMIAAACQgMANgRAAIgBAAIgBAAQgVAAgRgMQgIgFgFgKIAAABQgGgNAAgQQABgcAQgXQAPgXAbgNIAAAAIAJgDIACgCQAWgJAcAAIAAAAQAQAAARAFIAMAEIAUAIQAYANAQAVIABABQAPAVAAAdIAAABQgBAigOAXQgOAUgRAOQgOAOgKAQIAAABQgLAOAAAXIAAACQgBARgMAHQgJAFgJAAQgRAAgNgHg");
	this.shape_10.setTransform(-0.1,0.2);

	this.instance = new lib.xespeiyou_com__1_252_98545();
	this.instance.setTransform(-0.2,0,0.819,0.818,0,0,0,14.7,23.4);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,5);

	this.addChild(this.instance,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-17.7,-24.6,38,52);


(lib.xespeiyou_com__1_249_62621 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();
		
		helpBtn.addEventListener(MouseEvent.CLICK,thisClick)
		
		
		function thisClick(e:MouseEvent):void
		{
			play();
		}*/
	}
	this.frame_149 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(149).call(this.frame_149).wait(1));

	// 图层 2
	this.instance = new lib.xespeiyou_com__1_250_20590("single",0);
	this.instance.setTransform(-212.5,-75.7);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ABihBQAFgYAQgCQAKgDAQAJQAmAUAGAwQAHAzgNAgQgCAFgDAFQgIAOgNAIIAKAlIASAmIACAFQAJALgeALQgSAHgWACQgFAAgEABIAAAAQgLAAgMAAIgnhGIhlAIQg1AEgkAfQgLADgNgCQgYgEgGgaQgEgRAIgOQAAgBABgBQAEgIAIgHIADgCQAGgFADgBQAGgCAHgDQAOgGAkgBQATgBAPAAQAagFACgZQADgZgYgtQgMgbgkgsQgJgLgWgPQgdgTgFgEQgjgcAggfQABgBABgBQAmghA5AzQAdAaAVAgQAJALAKAcQAOAtACAEQgKgjAJgUQACgFAEgDQAEgFAGgDQAGgDAJAAQAWgBASAQQAMALAGAPQAFALABAM");
	this.shape.setTransform(-168.4,-266.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D2D2D2").s().p("AAvA1QgMgcgjgqQgIgLgWgOIgigXQgjgcAggfQgEAaAMARQAJALAZAOQA+AiAUApQAWAvAEAXQAEAcgTAIQADgZgYgvg");
	this.shape_1.setTransform(-178.9,-273);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DBDBDB").s().p("AB/A0IgnhDIhlAHQg1AEgkAdQgLADgNgCQgYgEgGgYQgEgQAIgPIABgCQAEgHAIgHIADgCQgDAKADAMQAEAUANAGQAEACAFABQAKAAAJgCIAqgRQAlgPARgBIBagHIANgBIAzBeIgJABIAAAAIgLAAIgMAAg");
	this.shape_2.setTransform(-171.7,-250.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABCBxIgNABIhYAHQgTABglAPIgqARQgJADgKgBQgFgBgEgCQgNgGgEgUQgDgMADgKQAGgGADgBIANgEQAOgGAkgCIAiAAQAagGACgYQATgIgEgcQgEgWgWguQgUgrhAgjQgZgOgJgLQgMgQAEgaIACgCQAmghA5AzQAdAZAVAgQAJAMAKAcIAQAwQgKgiAJgVIAGgIQAEgFAGgCQAGgDAJgBQAWAAASAQQAMALAGAPQAFgYAQgDQAKgCAQAIQAmAUAGAwQAHA0gNAfIgFAKQgIAOgNAIIAKAmIASAmIACAEQAJALgeALQgSAHgWACgABfgqQgBgMgFgKQAFAKABAMg");
	this.shape_3.setTransform(-167.5,-266.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("ABihBQgGgPgMgLQgSgQgWABQgJAAgGADQgGADgEAFQgEADgCAFQgJAUAKAjQgCgEgOgtQgKgcgJgLQgVgggdgaQg5gzgmAhQgBABgBABQggAfAjAcQAFAEAdATQAWAPAJALQAkAsAMAbQAYAtgDAZQgCAZgaAFQgPAAgTABQgkABgOAGQgHADgGACQgDABgGAFIgDACQgIAHgEAIQgBABAAABQgIAOAEARQAGAaAYAEQANACALgDQAkgfA1gEIBlgIIAnBGQAMAAALAAIAAAAQAEgBAFAAQAWgCASgHQAegLgJgLIgCgFIgSgmIgKglQANgIAIgOQADgFACgFQANgggHgzQgGgwgmgUQgQgJgKADQgQACgFAYQAFALABAM");
	this.shape_4.setTransform(-144.2,-249);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D2D2D2").s().p("AAvA1QgMgcgjgpQgIgLgWgPIgigYQgjgbAggfQgEAaAMARQAJAKAZAOQA+AkAUAoQAWAvAEAXQAEAcgTAIQADgagYgug");
	this.shape_5.setTransform(-583.4,-19);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},6).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance}]},14).to({state:[{t:this.shape_3,p:{x:-167.5,y:-266.1}},{t:this.shape_2,p:{x:-171.7,y:-250.3}},{t:this.shape_1,p:{x:-178.9,y:-273}},{t:this.shape}]},3).to({state:[{t:this.instance}]},3).to({state:[{t:this.shape_3,p:{x:-167.5,y:-266.1}},{t:this.shape_2,p:{x:-171.7,y:-250.3}},{t:this.shape_1,p:{x:-178.9,y:-273}},{t:this.shape}]},3).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance}]},16).to({state:[{t:this.instance}]},16).to({state:[{t:this.shape_3,p:{x:-143.3,y:-249}},{t:this.shape_1,p:{x:-154.7,y:-255.9}},{t:this.shape_2,p:{x:-147.5,y:-233.2}},{t:this.shape_4,p:{x:-144.2,y:-249}}]},5).to({state:[{t:this.instance}]},3).to({state:[{t:this.shape_3,p:{x:-143.3,y:-249}},{t:this.shape_1,p:{x:-154.7,y:-255.9}},{t:this.shape_2,p:{x:-147.5,y:-233.2}},{t:this.shape_4,p:{x:-144.2,y:-249}}]},3).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance}]},15).to({state:[{t:this.instance}]},20).to({state:[{t:this.shape_5},{t:this.shape_3,p:{x:-572,y:-12.1}},{t:this.shape_2,p:{x:-576.2,y:3.7}},{t:this.shape_4,p:{x:-572.9,y:-12}}]},3).to({state:[{t:this.instance}]},3).to({state:[{t:this.shape_5},{t:this.shape_3,p:{x:-572,y:-12.1}},{t:this.shape_2,p:{x:-576.2,y:3.7}},{t:this.shape_4,p:{x:-572.9,y:-12}}]},3).to({state:[{t:this.instance}]},3).wait(19));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({x:-335.8,y:-91.4,alpha:1},6).wait(5).to({startPosition:0},0).to({x:-350.7,y:53.5},14).to({_off:true},3).wait(3).to({_off:false},0).to({_off:true},3).wait(3).to({_off:false},0).wait(16).to({startPosition:0},0).to({x:-326.3,y:70.5},16).to({_off:true},5).wait(3).to({_off:false},0).to({_off:true},3).wait(3).to({_off:false},0).wait(15).to({startPosition:0},0).to({x:-755.3,y:307.8},20).to({_off:true},3).wait(3).to({_off:false},0).to({_off:true},3).wait(3).to({_off:false},0).wait(19));

	// 图层 1
	this.helpBtn = new lib.xespeiyou_com__1_251_78989();
	this.helpBtn.setTransform(-657.1,-30.5,1,1,0,0,0,-0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.helpBtn).to({_off:true},1).wait(149));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-674.7,-55.2,39,53);


(lib.xespeiyou_com__1_92_77497 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.xespeiyou_com__1_115_23951("synched",0);
	this.instance.setTransform(9.3,16.7,0.661,0.661,0,0,0,21.6,25.2);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,25.5,22.2);


(lib.xespeiyou_com__1_77_81885 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.xespeiyou_com__1_76_67490();
	this.instance.setTransform(28.9,17.3,1,1,0,0,0,20.9,19.5);

	this.instance_1 = new lib.xespeiyou_com__1_185_34000("synched",0);
	this.instance_1.setTransform(24.8,34.5,1,1,0,0,0,23.6,36.9);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-2.2,50.9,74.3);


(lib.xespeiyou_com__1_55_63460 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//
		///* 在此帧处停止
		//Flash 时间轴将在插入此代码的帧处停止/暂停。
		//也可用于停止/暂停影片剪辑的时间轴。
		//*/
		//
		//stop();
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 图层 1
	this.instance = new lib.xespeiyou_com__1_85_40753();
	this.instance.setTransform(48.7,-1.5,0.37,0.37,0,0,0,61.6,0);
	this.instance.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(8,-17.5,70,34);


(lib.xespeiyou_com__1_54_13831 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//
		///* 在此帧处停止
		//Flash 时间轴将在插入此代码的帧处停止/暂停。
		//也可用于停止/暂停影片剪辑的时间轴。
		//*/
		//
		//stop();
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 图层 1
	this.instance = new lib.xespeiyou_com__1_84_20702();
	this.instance.setTransform(48.7,-1.5,0.37,0.37,0,0,0,61.6,0);
	this.instance.shadow = new cjs.Shadow("rgba(204,204,204,1)",0,0,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(8,-17.4,70,38);


(lib.help = function() {
	this.initialize();

	// 图层 1
	this.help1 = new lib.xespeiyou_com__1_249_62621();
	this.help1.setTransform(671.6,31.3,1.022,1.022);

	this.addChild(this.help1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-18,-25.2,39,53);


(lib.xespeiyou_com__1_41_88333 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.498)").ss(1,1,1).p("ABFhBQACAEAEAFQASAYAAAgQAAAlgYAbIgDAFQgcAYgmAAQglAAgagdQgdgbAAglQAAgnAdgaQAJgOANgEQAWgJATAAQAaAAAXALQALAHAJAJgAAYAUQgEAGgFADQgJACgGAAQgJAAgKgLQgJgJAAgLQAAgMAJgLQAFgHAJgCQACAAADAAQAGAAAEAAQAFAFAFAAQACACACACQAJALAAAMQAAALgJAJg");
	this.shape.setTransform(161.3,146.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8ECED9").s().p("AgVAVQgJgJAAgLQAAgMAJgLQAFgHAJgCIAGAAIAJAAQAFAFAEAAIAFAEQAJALAAAMQAAALgJAJQgFAGgEADQgJACgFAAQgLAAgJgLg");
	this.shape_1.setTransform(161.5,146);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#791F00").s().p("Ag/BAQgdgbAAglQAAgnAdgaQAJgOANgEQAWgJATAAQAaAAAWALQAMAHAIAJQADAEAEAFQASAYAAAgQAAAlgZAbIgCAFQgdAYglAAQgkAAgbgdgAgTgXQgIALgBAMQABALAIAJQAKALAJAAQAGAAAJgCQAFgDAEgGQAJgJAAgLQAAgMgJgLIgEgEQgFAAgEgFIgLAAIgFAAQgJACgFAHg");
	this.shape_2.setTransform(161.3,146.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(0,0,0,0.498)").ss(1,1,1).p("ABLg4QASAYAAAgQAAAlgYAbIgDAFQgcAYgmAAQglAAgagdQgdgbAAglQAAgnAdgaQAJgOANgEQAWgJATAAQAaAAAXALQALAHAJAJQACAEAEAFgAAUgbQACACACACQAJALAAAMQAAALgJAJQgEAGgFADQgJACgGAAQgJAAgKgLQgJgJAAgLQAAgMAJgLQAFgHAJgCQACAAADAAQAGAAAEAAQAFAFAFAAg");
	this.shape_3.setTransform(161.3,146.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape_3}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape_3}]},43).wait(1));

	// 图层 4
	this.instance = new lib.xespeiyou_com__1_43_87315("synched",0);
	this.instance.setTransform(166.6,162.3,1,1,0,0,0,14.9,92.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:10.6,regY:76.5,x:162.3,y:146.4},0).to({regX:14.9,regY:92.4,rotation:1440,x:166.6,y:162.3},43).wait(1));

	// 图层 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#152439").s().p("AhPYzIBPjPIBPDPgAKsStICwCKIiMBQgAteU3ICuiKIgjDagASkKwIDfAmIhQCJgA2HLWIDdgmIiMCvgAViAAIDShPIAACcgA4zhPIDOBPIjOBNgAU1tgIBOCKIjaAigA2HrWIBOiKICMCsgALS2HICMBQIivCLgAtg03ICNhQIAcDbgAhP4zICeAAIhPDPg");
	this.shape_4.setTransform(158.2,142.4,1,1,0,0,0,-1.5,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFAE7").s().p("AAAZUQgbAAgbgCQkggJj3hgQgHgCgHAAIgfgSIgtgSQjqhwjJi9IgRgSQgFgFgJgEIgJgNIgjgkQjFjUhmj1QgJgUgLgUIgFgOQgJgWgGgdQhOjWgJjvQgDgoAAgqQAAgpADgkQAJj1BOjUQAGgbAJgaIAFgLIAUgrQBmjzDCjUQAUgSASgWIAJgJIAOgJIARgUQDJi9DqhuQAXgLAWgJQASgJASgGQACgDAHAAQD3hgEggLQAbgCAbAAIAUAAQAoAAAoACQEHASDmBZQAYAHASALIADAAQAYAJAWALQDoBuDLC9IAbAdQAFAFACAEIAoAoQBeBlBJBvQAHALALAJQBDBrAxB0IAUA2QANAaAHAbQBMDUAJD1IAABNIAABSQgJDvhMDWQgJAdgLAWQgJAbgLAbQhrD1jCDUQgSASgWASQgCAGgFAHQgNALgOAQQjLC9joBwQgaAJgUAJQgVANgYAHQjmBZkHAQQgoACgoAAIgUAAg");
	this.shape_5.setTransform(159.7,142.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1A8DCD").s().p("AAAbEQgeABgfgDQkygJkJhpQgGgCgFAAQgSgJgSgEIgxgZQj6h0jYjNQgJgHgJgNIgLgLIgNgMIgmgpQjQjghykJQgLgSgEgYQgHgFAAgGIgWg5QhMjlgLkBQgEgqAAgsQAAgpAEgrQALkCBMjkQALgfALgaQACgKAFgEQAEgXALgYQBwkFDNjfQAYgWATgXIANgJQAGgEADgFQALgKAJgOQDYjLD6h0QAXgLAagLIAmgQQACgCAHgCQEJhnEygJIA9AAIAWAAQAqAAAoACQEbAOD4BgQAWANAWAHIAFAAIAvAWQD6B0DUDLQARASATAPIAGAJQAZAZARAUQBlBuBOBzQAGAOAOALQBFBvA0B7QAPAgALAdQAMAaAGAfQBQDkAMECIAABUIAABWQgMEBhQDlQgJAdgLAcQgJAdgPAeQhuEDjSDgQgTAVgXAUIgGAMQgTARgRAOQjUDNj6B0QgbAMgUANQgbAHgWAIQj4BjkbAPQgoADgqgBIgWAAgAg35SQkfALj3BgQgIAAgBADQgTAGgRAJQgXAJgWALQjqBtjJC+IgRAUIgOAJIgJAJQgSAWgUASQjCDUhmDzIgUAqIgFALQgJAbgHAbQhODUgID1QgDAkAAApQAAApADApQAIDuBODWQAHAeAJAWIAFANQAKAUAKAVQBmD1DEDUIAkAkIAJAMQAJAFAFAEIARATQDJC9DqBvIAtASIAfASQAGABAIACQD3BgEfAIQAbACAcABIAUAAQAogBAogCQEHgQDlhYQAZgHAUgOQAVgIAagKQDohvDLi9QANgQAOgMQAEgGADgGQAWgTASgRQDBjUBsj1QALgcAJgaQALgWAJgeQBMjWAIjuIAAhSIAAhNQgIj1hMjUQgHgbgNgbIgUg1Qgyh0hChrQgLgJgHgLQhJhvhehlIgogoQgDgFgEgEIgbgdQjLi+johtQgWgLgZgJIgCAAQgSgLgZgHQjlhZkHgSQgogCgoAAIgUAAQgcAAgbACg");
	this.shape_6.setTransform(159.7,142.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#16608A").ss(1,1,1).p("ArJ76QAIgCAFAAQEnh0FTgMQAfAAAkAAQANAAALAAQAvAAAtAAQE4ATETBtQAYAIAbAJIACAAQAZALAdAQQEUCBDtDkQARANAQAQQAFAHAIAFQAWAYAXAaQA4A/A1BBQBRBmA+BpQA3BlAtBkQAQAfALAiQANAfAMAfQBVD+ANEeQAAAvAAAuQAAAyAAAxQgNEbhVD6QgOAkgLAdQgLAdgQAhQh6EljmD1QgYAYgXAZQgGACgFAHQgSARgUAQQjoDkkXCBQgaALgZAOQgdALgYAJQkTBpk4AUQgtACgvAAQgLAAgNAAQgkAAgfAAQlTgLknh0QgJAAgGgFQgTgGgRgHQgbgQgdgLQkViBjsjkQgJgJgNgLQgHgEgFgJQgGgHgFgCQgYgZgWgYQjmj1h/klQgHgWgJgbQgCgGgHgHQgLgigLgfQhXj6gLkbQgDgxAAgyQAAguADgvQALkeBXj+QALgfALgfQAHgKACgGQAJgXAHgaQB/kgDmj6QAWgYAYgYQAFgFAGgHQAFgCAEgGQAQgMAJgNQDsjgEViBQAdgQAbgLQAUgGASgJg");
	this.shape_7.setTransform(161.4,143.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#72CCFF").s().p("AABd8IhEAAQlTgLkmhzQgIgBgIgEIgjgNQgbgQgdgLQkUiBjtjkIgWgUQgHgFgFgIQgGgHgFgCIgugyQjmj0h/klIgQgxQgCgGgHgIIgWhAQhXj6gLkbQgDgxABgyQgBgvADguQALkdBXj/IAWg+QAHgJACgHQAJgWAHgbQB/kgDmj5IAugyIALgLQAFgCAEgHQAQgLAJgNQDtjfEUiCQAdgPAbgMQAUgGASgJIANgCQEmh0FTgMIBEAAIAZAAIBbAAQE4ASETBuIAzARIACAAQAZAMAdAPQEUCCDtDjQARANAQAQQAEAHAJAEIAtA0QA4A+A1BBQBRBmA+BpQA3BkAtBlQAQAfALAiQAOAfALAfQBUD/AOEdIAABdIAABjQgOEbhUD6IgZBAQgLAegQAhQh6EljmD0IgvAyQgHACgEAHQgSASgUAPQjoDkkXCBQgbALgYAOIg1AUQkTBok4AVQgtABguAAIgZAAgAor2KQgFACgCADIghANQgUAJgYAIQjZBoi+C0IgSAPQgBAHgIAFQgEACgHAHQgPARgUAVQi1DEhiDjQgJAUgEAUIgHAOIgUAuQhBDJgLDkIAABJIAABNQALDhBBDHIAUAyQACAIAFAEQAEARAJAVQBiDlC3DFIAhAlIALAJQAIADAEAEQAJAOAGAGQC+C1DZBlQAYAKAUAHQAPAJAQAHQAFAAAEACQDqBbEMAHQAdADAZAAIASAAQAkAAAjgDQD6gNDbhVQARgHAUgLQAWgHAVgKQDahlC8i1IAfgbIAFgJQATgRAUgUQC1jFBijjQANgbAIgZIARgyQBIjHAIjhQADgmAAgnQAAgjgDgmQgIjkhIjJQgHgYgIgWQgKgbgNgbQgvhpg8hkIgSgWQhChnhYhdQgRgVgVgRIgGgJQgQgQgPgLQi8i0jYhoIgtgRIgCAAIgjgSQjbhVj6gLQgjgCgkAAIgSAAIg2AAQkMAJjqBZg");
	this.shape_8.setTransform(161.4,143.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1A8DCD").s().p("AABd8IhEAAQlTgLkmhzQgIgBgIgEIgjgNQgbgQgdgLQkUiBjtjkIgWgUQgHgFgFgIQgGgHgFgCIgugyQjmj0h/klIgQgxQgCgGgHgIIgWhAQhXj6gLkbQgDgxABgyQgBgvADguQALkdBXj/IAWg+QAHgJACgHQAJgWAHgbQB/kgDmj5IAugyIALgLQAFgCAEgHQAQgLAJgNQDtjfEUiCQAdgPAbgMQAUgGASgJIANgCQEmh0FTgMIBEAAIAZAAIBbAAQE4ASETBuIAzARIACAAQAZAMAdAPQEUCCDtDjQARANAQAQQAEAHAJAEIAtA0QA4A+A1BBQBRBmA+BpQA3BkAtBlQAQAfALAiQAOAfALAfQBUD/AOEdIAABdIAABjQgOEbhUD6IgZBAQgLAegQAhQh6EljmD0IgvAyQgHACgEAHQgSASgUAPQjoDkkXCBQgbALgYAOIg1AUQkTBok4AVQgtABguAAIgZAAg");
	this.shape_9.setTransform(161.4,143.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#16608A").ss(1,1,1).p("Aq878QEnh0FTgMQAfAAAkAAQANAAALAAQAvAAAtAAQE4ATETBtQAYAIAbAJIACAAQAZALAdAQQEUCBDtDkQARANAQAQQAFAHAIAFQAWAYAXAaQA4A/A1BBQBRBmA+BpQA3BlAtBkQAQAfALAiQANAfAMAfQBVD+ANEeQAAAvAAAuQAAAyAAAxQgNEbhVD6QgOAkgLAdQgLAdgQAhQh6EljmD1QgYAYgXAZQgGACgFAHQgSARgUAQQjoDkkXCBQgaALgZAOQgdALgYAJQkTBpk4AUQgtACgvAAQgLAAgNAAQgkAAgfAAQlTgLknh0QgJAAgGgFQgTgGgRgHQgbgQgdgLQkViBjsjkQgJgJgNgLQgHgEgFgJQgGgHgFgCQgYgZgWgYQjmj1h/klQgHgWgJgbQgCgGgHgHQgLgigLgfQhXj6gLkbQgDgxAAgyQAAguADgvQALkeBXj+QALgfALgfQAHgKACgGQAJgXAHgaQB/kgDmj6QAWgYAYgYQAFgFAGgHQAFgCAEgGQAQgMAJgNQDsjgEViBQAdgQAbgLQAUgGASgJQAIgCAFAAg");
	this.shape_10.setTransform(161.4,143.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).to({state:[{t:this.shape_8},{t:this.shape_10},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).wait(44));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.3,-49.6,385.4,385.4);


(lib.xespeiyou_com__1_39_80948 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_29 = function() {
		//
		///* 在此帧处停止
		//Flash 时间轴将在插入此代码的帧处停止/暂停。
		//也可用于停止/暂停影片剪辑的时间轴。
		//*/
		//
		this.stop();
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(1));

	// 图层 4
	this.instance = new lib.xespeiyou_com__1_66_45056();
	this.instance.setTransform(368.9,17,1,1,0,0,0,109.5,25.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:25,rotation:15,x:342,y:363.1},19).wait(11));

	// 图层 3
	this.instance_1 = new lib.xespeiyou_com__1_58_7865();
	this.instance_1.setTransform(217.7,17.1,1,1,0,0,0,107.4,25.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:210.7,y:398.1},19).wait(11));

	// 图层 2
	this.instance_2 = new lib.xespeiyou_com__1_57_45981();
	this.instance_2.setTransform(89.4,17,1,1,0,0,0,88.4,25.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-23.2,x:68.5,y:355.1},19).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.7,-8.4,477.7,50.8);


(lib.xespeiyou_com__1_31_69521 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//
		///* 在此帧处停止
		//Flash 时间轴将在插入此代码的帧处停止/暂停。
		//也可用于停止/暂停影片剪辑的时间轴。
		//*/
		//
		//stop();
		//
	}
	this.frame_1 = function() {
		//
		///* 在此帧处停止
		//Flash 时间轴将在插入此代码的帧处停止/暂停。
		//也可用于停止/暂停影片剪辑的时间轴。
		//*/
		//
		//stop();
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgTA2QAUgIAJgPQAGgLABgSIgWAAIAAgHIBSAAIgBAoQgCAYgVAAIgWgBIgBgLIAVACQANAAABgPIACggIgnAAQgCAVgHANQgKARgUAKIgIgJgAheArQgJgMAAgWQAAgYALgPQAMgPASAAQAKAAAGADIAAALQgHgEgJAAQgMAAgIALQgIALAAASIAAAAQAHgMAQAAQAMAAAIAHQAIAIAAANQAAAPgJAJQgJAJgOAAQgPAAgIgLgAhUAHQgFAGAAAIQAAAJAFAHQAFAHAJAAQAIAAAFgGQAFgGAAgJQAAgKgFgGQgFgGgJAAQgIAAgFAGgAgWgJQAYgTASggIAJAFQgTAigZAUIgHgIgAAug6IAJgEQAOAiAjARIgJAKQgigVgPgkg");
	this.shape.setTransform(-24.9,-64.8,1,1,0,0,0,-1.3,-1.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhUBVQgkgjAAgyQAAgxAkgjQAjgkAxAAQAyAAAjAkQAkAjAAAxQAAAygkAjQgjAkgyAAQgxAAgjgkg");
	this.shape_1.setTransform(-24.8,-64.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(2));

	// 图层 1
	this.instance = new lib.xespeiyou_com__1_32_97388();
	this.instance.setTransform(0.9,-35.9,0.222,0.222,0,0,0,0,-118.7);

	this.instance_1 = new lib.xespeiyou_com__1_27_72946();
	this.instance_1.setTransform(0,-35.9,1,1,0,0,0,0,-35.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.4)").s().p("Aj8D9QhphqAAiTQAAiTBphpQBphpCTAAQCUAABpBpQBpBpAACTQAACThpBqQhpBpiUAAQiTAAhphpg");
	this.shape_2.setTransform(-0.1,-35.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.9,-76.8,72.7,76.8);


(lib.xespeiyou_com__1_18_62926 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 6
	this.instance = new lib.xespeiyou_com__1_62_95338();
	this.instance.setTransform(63.9,-74.5,0.497,0.497,0,0,0,196,131.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-73.8},6).to({y:-74.5},6).to({y:-72.8},6).to({y:-74.5},5).wait(1));

	// 图层 2
	this.instance_1 = new lib.xespeiyou_com__1_64_2684();
	this.instance_1.setTransform(12.8,-50.2,1,1,0,0,0,36.4,2.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:8.2,x:13.2,y:-50},6).to({rotation:-6.8,x:12.6,y:-50.5},6).to({regY:2,rotation:8.2,x:13,y:-49.9},6).to({regY:2.1,rotation:0,x:12.8,y:-50.2},5).wait(1));

	// 图层 3
	this.instance_2 = new lib.xespeiyou_com__1_65_15163();
	this.instance_2.setTransform(-18.4,-45.5,1,1,0,0,0,11,25.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:8.2,x:-18.3,y:-49.8},6).to({rotation:-6.8,x:-17.8,y:-42.3},6).to({rotation:8.2,x:-18.4,y:-49.7},6).to({rotation:0,y:-45.5},5).wait(1));

	// 图层 4
	this.instance_3 = new lib.xespeiyou_com__1_68_68399();
	this.instance_3.setTransform(5.3,-61.5,1,1,0,0,0,43.7,64.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:-61},6).to({y:-61.5},6).to({scaleY:0.98,y:-59.7},6).to({scaleY:1,y:-61.5},5).wait(1));

	// 图层 5
	this.instance_4 = new lib.xespeiyou_com__1_70_28357();
	this.instance_4.setTransform(7.9,2.1,1,1,0,0,0,33.5,6.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(24));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.5,-140,101.7,148.7);


(lib.xespeiyou_com__1_17_44383 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.xespeiyou_com__1_64_2684();
	this.instance.setTransform(12.8,-50.2,1,1,0,0,0,36.4,2.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:8.2,x:13.2,y:-50},6).to({rotation:-6.8,x:12.6,y:-50.5},6).to({regY:2,rotation:8.2,x:13,y:-49.9},6).to({regY:2.1,rotation:0,x:12.8,y:-50.2},5).wait(1));

	// 图层 3
	this.instance_1 = new lib.xespeiyou_com__1_65_15163();
	this.instance_1.setTransform(-18.4,-45.5,1,1,0,0,0,11,25.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:8.2,x:-18.3,y:-49.8},6).to({rotation:-6.8,x:-17.8,y:-42.3},6).to({rotation:8.2,x:-18.4,y:-49.7},6).to({rotation:0,y:-45.5},5).wait(1));

	// 图层 4
	this.instance_2 = new lib.xespeiyou_com__1_68_68399();
	this.instance_2.setTransform(5.3,-61.5,1,1,0,0,0,43.7,64.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:-61},6).to({y:-61.5},6).to({scaleY:0.98,y:-59.7},6).to({scaleY:1,y:-61.5},5).wait(1));

	// 图层 5
	this.instance_3 = new lib.xespeiyou_com__1_70_28357();
	this.instance_3.setTransform(7.9,2.1,1,1,0,0,0,33.5,6.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(24));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.5,-159.8,187.9,168.5);


(lib.xespeiyou_com__1_16_70906 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 6
	this.instance = new lib.xespeiyou_com__1_61_78390();
	this.instance.setTransform(63.9,-74.5,0.497,0.497,0,0,0,196,131.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24));

	// 图层 2
	this.instance_1 = new lib.xespeiyou_com__1_64_2684();
	this.instance_1.setTransform(12.8,-50.2,1,1,0,0,0,36.4,2.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:8.2,x:13.2,y:-50},6).to({rotation:-6.8,x:12.6,y:-50.5},6).to({regY:2,rotation:8.2,x:13,y:-49.9},6).to({regY:2.1,rotation:0,x:12.8,y:-50.2},5).wait(1));

	// 图层 3
	this.instance_2 = new lib.xespeiyou_com__1_65_15163();
	this.instance_2.setTransform(-18.4,-45.5,1,1,0,0,0,11,25.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:8.2,x:-18.3,y:-49.8},6).to({rotation:-6.8,x:-17.8,y:-42.3},6).to({rotation:8.2,x:-18.4,y:-49.7},6).to({rotation:0,y:-45.5},5).wait(1));

	// 图层 4
	this.instance_3 = new lib.xespeiyou_com__1_68_68399();
	this.instance_3.setTransform(5.3,-61.5,1,1,0,0,0,43.7,64.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:-61},6).to({y:-61.5},6).to({scaleY:0.98,y:-59.7},6).to({scaleY:1,y:-61.5},5).wait(1));

	// 图层 5
	this.instance_4 = new lib.xespeiyou_com__1_70_28357();
	this.instance_4.setTransform(7.9,2.1,1,1,0,0,0,33.5,6.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(24));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.5,-159.8,187.9,168.5);


(lib.xespeiyou_com__1_14_94984 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.xespeiyou_com__1_61_78390();
	this.instance.setTransform(62.5,-73.6,0.497,0.497,0,0,0,196,131.1);

	this.instance_1 = new lib.xespeiyou_com__1_64_2684();
	this.instance_1.setTransform(11.4,-49.3,1,1,0,0,0,36.4,2.1);

	this.instance_2 = new lib.xespeiyou_com__1_65_15163();
	this.instance_2.setTransform(-19.7,-44.6,1,1,0,0,0,11,25.7);

	this.instance_3 = new lib.xespeiyou_com__1_68_68399();
	this.instance_3.setTransform(3.9,-60.6,1,1,0,0,0,43.7,64.3);

	this.instance_4 = new lib.xespeiyou_com__1_70_28357();
	this.instance_4.setTransform(6.5,3,1,1,0,0,0,33.5,6.7);

	this.addChild(this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39.8,-158.9,187.9,168.5);


(lib.xespeiyou_com__1_270_73546 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.xespeiyou_com__1_128_47964("synched",0);
	this.instance.setTransform(18.3,35.4,1,1,0,0,0,8.3,11.2);

	this.instance_1 = new lib.xespeiyou_com__1_127_61170("synched",0);
	this.instance_1.setTransform(38.7,45.4,1,1,0,0,0,38.7,45.4);

	this.instance_2 = new lib.xespeiyou_com__1_129_62975("synched",0);
	this.instance_2.setTransform(23.9,49.9,1,1,0,0,0,20.6,34.1);

	this.instance_3 = new lib.xespeiyou_com__1_130_35263("synched",0);
	this.instance_3.setTransform(31.4,57,1,1,0,0,0,29.1,36.7);

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,0,79.4,93.7);


(lib.xespeiyou_com__1_254_41258 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.xespeiyou_com__1_255_14560("synched",0);
	this.instance.setTransform(26.4,33.6,1,1,0,0,0,26.4,33.6);

	this.instance_1 = new lib.xespeiyou_com__1_256_55848("synched",0);
	this.instance_1.setTransform(10.2,29.1,1,1,0,0,0,6.9,10.3);

	this.instance_2 = new lib.xespeiyou_com__1_257_53239("synched",0);
	this.instance_2.setTransform(15.2,35.7,1,1,0,0,0,14.2,23.9);

	this.instance_3 = new lib.xespeiyou_com__1_258_83500("synched",0);
	this.instance_3.setTransform(23.6,42.4,1,1,0,0,0,23.4,25.1);

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.8,0,54.7,68.4);


(lib.xespeiyou_com__1_236_16928 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.xespeiyou_com__1_246_8328("synched",0);
	this.instance.setTransform(24.8,25,1,1,0,0,0,9.3,10.8);

	this.instance_1 = new lib.xespeiyou_com__1_245_83833("synched",0);
	this.instance_1.setTransform(30.7,31.2,1,1,0,0,0,30.7,31.2);

	this.instance_2 = new lib.xespeiyou_com__1_244_50786("synched",0);
	this.instance_2.setTransform(32.5,32.3,1,1,0,0,0,19.8,24.2);

	this.instance_3 = new lib.xespeiyou_com__1_243_72756("synched",0);
	this.instance_3.setTransform(33.2,38.5,1,1,0,0,0,28.1,25.1);

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,0,63.3,63.6);


(lib.xespeiyou_com__1_235_47028 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.xespeiyou_com__1_242_7474("synched",0);
	this.instance.setTransform(21.3,25,1,1,0,0,0,9.3,10.8);

	this.instance_1 = new lib.xespeiyou_com__1_241_33301("synched",0);
	this.instance_1.setTransform(30.6,31.2,1,1,0,0,0,30.6,31.2);

	this.instance_2 = new lib.xespeiyou_com__1_240_74732("synched",0);
	this.instance_2.setTransform(28.8,32.3,1,1,0,0,0,19.7,24.2);

	this.instance_3 = new lib.xespeiyou_com__1_239_77492("synched",0);
	this.instance_3.setTransform(28.1,38.5,1,1,0,0,0,28.1,25.1);

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,0,63.2,63.6);


(lib.xespeiyou_com__1_234_93379 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.xespeiyou_com__1_236_16928("synched",0);
	this.instance.setTransform(30.7,31.8,1,1,0,0,0,30.7,31.8);

	this.instance_1 = new lib.xespeiyou_com__1_235_47028("synched",0);
	this.instance_1.setTransform(124.4,31.8,1,1,0,0,0,30.6,31.8);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,0,157,63.6);


(lib.xespeiyou_com__1_230_17539 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.xespeiyou_com__1_238_74063("synched",0);
	this.instance.setTransform(37.3,15.6,1,1,0,0,0,25.9,15.6);

	this.instance_1 = new lib.xespeiyou_com__1_237_13021("synched",0);
	this.instance_1.setTransform(117.2,15.6,1,1,0,0,0,25.9,15.6);

	this.instance_2 = new lib.xespeiyou_com__1_232_31187("synched",0);
	this.instance_2.setTransform(78.9,83.6,1,1,0,0,0,15,1.9);

	this.instance_3 = new lib.xespeiyou_com__1_233_52821("synched",0);
	this.instance_3.setTransform(78.5,64.8,1,1,0,0,0,3.6,2.1);

	this.instance_4 = new lib.xespeiyou_com__1_234_93379("synched",0);
	this.instance_4.setTransform(77.5,42.3,1,1,0,0,0,77.5,31.8);

	this.addChild(this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,157,87.7);


(lib.xespeiyou_com__1_211_49657 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.xespeiyou_com__1_225_10252("synched",0);
	this.instance.setTransform(160.1,38.8,1,1,0,0,0,9.1,11.1);

	this.instance_1 = new lib.xespeiyou_com__1_224_61215("synched",0);
	this.instance_1.setTransform(183.4,46.5,1,1,0,0,0,45.1,46.5);

	this.instance_2 = new lib.xespeiyou_com__1_223_14132("synched",0);
	this.instance_2.setTransform(171.7,51.9,1,1,0,0,0,28.8,35);

	this.instance_3 = new lib.xespeiyou_com__1_222_52501("synched",0);
	this.instance_3.setTransform(175.2,59,1,1,0,0,0,35.7,36.6);

	this.instance_4 = new lib.xespeiyou_com__1_221_53379("synched",0);
	this.instance_4.setTransform(45.3,38.8,1,1,0,0,0,9.1,11.1);

	this.instance_5 = new lib.xespeiyou_com__1_220_33942("synched",0);
	this.instance_5.setTransform(45.1,46.5,1,1,0,0,0,45.1,46.5);

	this.instance_6 = new lib.xespeiyou_com__1_219_91684("synched",0);
	this.instance_6.setTransform(56.9,51.9,1,1,0,0,0,28.8,35);

	this.instance_7 = new lib.xespeiyou_com__1_218_87834("synched",0);
	this.instance_7.setTransform(53.4,59,1,1,0,0,0,35.7,36.6);

	this.addChild(this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,0,230.6,95.6);


(lib.xespeiyou_com__1_200_75500 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.xespeiyou_com__1_231_11490("synched",0);
	this.instance.setTransform(108.4,120.2,1,1,0,0,0,55.1,52.1);

	this.instance_1 = new lib.xespeiyou_com__1_230_17539("synched",0);
	this.instance_1.setTransform(103.5,186.9,1,1,0,0,0,77.5,42.8);

	this.instance_2 = new lib.xespeiyou_com__1_229_43461("synched",0);
	this.instance_2.setTransform(103.9,134,1,1,0,0,0,89.2,45.4);

	this.instance_3 = new lib.xespeiyou_com__1_228_66328("synched",0);
	this.instance_3.setTransform(103.7,169.4,1,1,0,0,0,80,72.9);

	this.instance_4 = new lib.xespeiyou_com__1_227_87340("synched",0);
	this.instance_4.setTransform(109.4,89.7,1,1,0,0,0,105.7,89.7);

	this.instance_5 = new lib.xespeiyou_com__1_226_68637("synched",0);
	this.instance_5.setTransform(182.3,197.3,1,1,0,0,0,6.4,19.7);

	this.addChild(this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(2.7,-1,213.4,244.3);


(lib.xespeiyou_com__1_198_3078 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.xespeiyou_com__1_213_93701("synched",0);
	this.instance.setTransform(141.2,282,1,1,0,0,0,11,5.5);

	this.instance_1 = new lib.xespeiyou_com__1_212_93071("synched",0);
	this.instance_1.setTransform(141,256.1,1,1,0,0,0,3.6,2);

	this.instance_2 = new lib.xespeiyou_com__1_211_49657("synched",0);
	this.instance_2.setTransform(140.7,239.4,1,1,0,0,0,115.2,73.2);

	this.instance_3 = new lib.xespeiyou_com__1_210_7343("synched",0);
	this.instance_3.setTransform(207.7,158.3,1,1,0,0,0,17.7,5.6);

	this.instance_4 = new lib.xespeiyou_com__1_209_3681("synched",0);
	this.instance_4.setTransform(74.9,158.3,1,1,0,0,0,17.7,5.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(29));

	// 图层 1
	this.instance_5 = new lib.xespeiyou_com__1_217_88769("synched",0);
	this.instance_5.setTransform(138.8,91,1,1,0,0,0,136.8,91);

	this.instance_6 = new lib.xespeiyou_com__1_216_54344("synched",0);
	this.instance_6.setTransform(140.7,195.5,1,1,0,0,0,106.7,101.2);

	this.instance_7 = new lib.xespeiyou_com__1_215_33942("synched",0);
	this.instance_7.setTransform(16.9,159.7,1,1,0,0,0,16.9,53.5);

	this.instance_8 = new lib.xespeiyou_com__1_214_98584("synched",0);
	this.instance_8.setTransform(253.4,136.6,1,1,0,0,0,38.2,30.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]}).wait(29));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,280.5,320.2);


(lib.xespeiyou_com__1_192_55739 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.xespeiyou_com__1_204_92858("synched",0);
	this.instance.setTransform(42.6,48.2,1,1,0,0,0,42.6,48.2);

	this.instance_1 = new lib.xespeiyou_com__1_203_26753("synched",0);
	this.instance_1.setTransform(25.8,47.5,1,1,0,0,0,9.7,11.6);

	this.instance_2 = new lib.xespeiyou_com__1_202_50532("synched",0);
	this.instance_2.setTransform(38.5,55.3,1,1,0,0,0,29.7,39.8);

	this.instance_3 = new lib.xespeiyou_com__1_201_83321("synched",0);
	this.instance_3.setTransform(40.2,66.3,1,1,0,0,0,39.6,35.8);

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,0,87.3,102);


(lib.xespeiyou_com__1_191_8926 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.xespeiyou_com__1_208_41286("synched",0);
	this.instance.setTransform(34.2,47.5,1,1,0,0,0,9.7,11.6);

	this.instance_1 = new lib.xespeiyou_com__1_207_75744("synched",0);
	this.instance_1.setTransform(42.6,48.1,1,1,0,0,0,42.6,48.1);

	this.instance_2 = new lib.xespeiyou_com__1_206_4367("synched",0);
	this.instance_2.setTransform(46.9,55.3,1,1,0,0,0,29.7,39.8);

	this.instance_3 = new lib.xespeiyou_com__1_205_21233("synched",0);
	this.instance_3.setTransform(45.1,66.3,1,1,0,0,0,39.6,35.8);

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,0,87.3,102);


(lib.xespeiyou_com__1_176_19693 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.xespeiyou_com__1_178_11408("synched",0);
	this.instance.setTransform(33,48.2,1,1,0,0,0,33,48.2);

	this.instance_1 = new lib.xespeiyou_com__1_180_39804("synched",0);
	this.instance_1.setTransform(10.8,48.5,1,1,0,0,0,6,11.6);

	this.instance_2 = new lib.xespeiyou_com__1_182_70362("synched",0);
	this.instance_2.setTransform(18.3,55.3,1,1,0,0,0,16,39.8);

	this.instance_3 = new lib.xespeiyou_com__1_184_14170("synched",0);
	this.instance_3.setTransform(31.2,66.3,1,1,0,0,0,30.8,35.8);

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,0,68.2,102);


(lib.xespeiyou_com__1_175_29703 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.xespeiyou_com__1_177_82630("synched",0);
	this.instance.setTransform(33,48.2,1,1,0,0,0,33,48.2);

	this.instance_1 = new lib.xespeiyou_com__1_179_2493("synched",0);
	this.instance_1.setTransform(10.8,48.5,1,1,0,0,0,6,11.6);

	this.instance_2 = new lib.xespeiyou_com__1_181_61528("synched",0);
	this.instance_2.setTransform(18.3,55.3,1,1,0,0,0,16,39.8);

	this.instance_3 = new lib.xespeiyou_com__1_183_8422("synched",0);
	this.instance_3.setTransform(31.2,66.3,1,1,0,0,0,30.8,35.8);

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,0,68.2,102);


(lib.xespeiyou_com__1_156_50322 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.xespeiyou_com__1_117_61064("synched",0);
	this.instance.setTransform(4,3.6,0.661,0.661,0,0,0,6,5.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,0.7,11.1,21.6);


(lib.xespeiyou_com__1_155_9151 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.xespeiyou_com__1_164_72706("synched",0);
	this.instance.setTransform(129.7,179.2,0.664,0.664,0,0,0,19.8,27.7);

	this.instance_1 = new lib.xespeiyou_com__1_168_71055("synched",0);
	this.instance_1.setTransform(113.6,121.4,0.664,0.664,0,0,0,151.9,99.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(39));

	// 图层 2
	this.instance_2 = new lib.xespeiyou_com__1_170_37997("synched",0);
	this.instance_2.setTransform(34.2,215.1,0.664,0.664,0,0,0,10.1,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(39));

	// 图层 3
	this.instance_3 = new lib.xespeiyou_com__1_162_43875("synched",0);
	this.instance_3.setTransform(31.6,162.9,0.664,0.664,0,0,0,9.7,11.3);

	this.instance_4 = new lib.xespeiyou_com__1_176_19693("synched",0);
	this.instance_4.setTransform(50.3,173.3,0.664,0.664,0,0,0,33,51);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.498)").ss(1,1,1).p("AjNAYQE7AcBghtQhXCNlEghQgBgOABgNg");
	this.shape.setTransform(49.2,191.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#433D21").s().p("AjNAzIAAgbQE7AcBghtQhHBzjjAAQg1AAg8gHg");
	this.shape_1.setTransform(49.2,191.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4,p:{regX:33,regY:51,scaleY:0.664,x:50.3,y:173.3}},{t:this.instance_3,p:{y:162.9}}]}).to({state:[{t:this.instance_4,p:{regX:32.5,regY:103.6,scaleY:0.569,x:50,y:208.2}},{t:this.instance_3,p:{y:165.3}}]},7).to({state:[{t:this.instance_3,p:{y:170.3}},{t:this.shape_1},{t:this.shape}]},2).to({state:[{t:this.instance_4,p:{regX:32.5,regY:103.6,scaleY:0.569,x:50,y:208.2}},{t:this.instance_3,p:{y:165.3}}]},3).to({state:[{t:this.instance_4,p:{regX:33,regY:51,scaleY:0.664,x:50.3,y:173.3}},{t:this.instance_3,p:{y:162.9}}]},2).wait(25));

	// 图层 4
	this.instance_5 = new lib.xespeiyou_com__1_174_79708("synched",0);
	this.instance_5.setTransform(22.3,199.2,0.664,0.664,0,0,0,4,6);

	this.instance_6 = new lib.xespeiyou_com__1_172_92448("synched",0);
	this.instance_6.setTransform(92,149.8,0.664,0.664,0,0,0,106.2,118.8);

	this.instance_7 = new lib.xespeiyou_com__1_166_47421("synched",0);
	this.instance_7.setTransform(113.6,121.4,0.664,0.664,0,0,0,151.8,134.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]}).wait(39));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(11.7,30.8,203.7,198.9);


(lib.xespeiyou_com__1_154_27642 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.xespeiyou_com__1_119_39659("synched",0);
	this.instance.setTransform(5.8,2.1,0.661,0.661,0,0,0,8.7,3.2);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,0,14.6,20.6);


(lib.xespeiyou_com__1_150_24822 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.xespeiyou_com__1_148_26706("synched",0);
	this.instance.setTransform(8.2,13.2,1,1,0,0,0,8.2,13.2);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,0,18.4,27.3);


(lib.xespeiyou_com__1_146_98839 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.xespeiyou_com__1_60_89152();
	this.instance.setTransform(230.5,147.2,0.966,0.966,0,0,0,228,152.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:227.2,y:148.9},5).to({y:147.2},6).to({y:148.9},6).to({x:230.5,y:147.2},6).wait(1));

	// 小腿
	this.instance_1 = new lib.xespeiyou_com__1_149_71773();
	this.instance_1.setTransform(111.8,298.4,1,1,-36.8,0,0,13.2,1.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:13.3,rotation:-35.2,x:101.5,y:299.3},5).to({regX:13.2,rotation:29.5,x:89.5,y:297.1},6).to({rotation:-3.7,x:100.5,y:300.3},6).to({rotation:-36.8,x:111.8,y:298.4},6).wait(1));

	// 小臂
	this.instance_2 = new lib.xespeiyou_com__1_151_67841();
	this.instance_2.setTransform(96.2,249.3,1,1,76,0,0,7.2,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1,scaleY:1,rotation:26.6,x:107.5,y:255.8},5).to({regY:1.6,scaleX:1,scaleY:1,rotation:-31.1,x:120.3,y:247.9},6).to({scaleX:1,scaleY:1,rotation:22.3,x:108.8,y:260.5},6).to({regY:1.5,scaleX:1,scaleY:1,rotation:76,x:96.2,y:249.3},6).wait(1));

	// 上臂
	this.instance_3 = new lib.xespeiyou_com__1_153_35700();
	this.instance_3.setTransform(107.6,239.3,1,1,57,0,0,6,1.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:7.6,x:106.5,y:241.2},5).to({regX:6.1,rotation:-50,x:107.4,y:239.8},6).to({rotation:3.3,y:241.2},6).to({regX:6,rotation:57,x:107.6,y:239.3},6).wait(1));

	// _头 
	this.instance_4 = new lib.xespeiyou_com__1_155_9151();
	this.instance_4.setTransform(101.8,227.2,1,1,0,0,0,101.8,227.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:-1.2,x:99.8,y:228.8},5).to({y:227.1},6).to({rotation:-0.7,x:100.6,y:228.8},6).to({rotation:0,x:101.8,y:227.2},6).wait(1));

	// 身体
	this.instance_5 = new lib.xespeiyou_com__1_157_10854();
	this.instance_5.setTransform(99.6,291.2,1,1,0,0,0,23.4,66);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:-1.2,x:99,y:292.8},5).to({y:291.1},6).to({rotation:-0.7,x:99.2,y:292.7},6).to({rotation:0,x:99.6,y:291.2},6).wait(1));

	// 大腿
	this.instance_6 = new lib.xespeiyou_com__1_159_4262();
	this.instance_6.setTransform(100.4,284.6,1,1,-22,0,0,17.9,3.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleX:1,scaleY:1,rotation:7.3,x:98.6,y:284.5},5).to({scaleX:1,scaleY:1,rotation:44.2,x:97.5,y:280.6},6).to({scaleX:1,scaleY:1,rotation:10.9,x:98.8,y:284.2},6).to({scaleX:1,scaleY:1,rotation:-22,x:100.4,y:284.6},6).wait(1));

	// 小腿
	this.instance_7 = new lib.xespeiyou_com__1_149_71773();
	this.instance_7.setTransform(90.3,295.1,1,1,27.5,0,0,13.1,3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({rotation:-6,x:98.9,y:300.7},5).to({regY:2.9,rotation:-44.7,x:111.3,y:301.2},6).to({scaleX:1,scaleY:1,rotation:-55.5,x:104.3,y:301.7},6).to({regY:3,scaleX:1,scaleY:1,rotation:27.5,x:90.3,y:295.1},6).wait(1));

	// 小臂
	this.instance_8 = new lib.xespeiyou_com__1_151_67841();
	this.instance_8.setTransform(113.9,247.4,1,1,-26.7,0,0,7,1.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regX:6.9,regY:1.8,scaleX:1,scaleY:1,rotation:15.1,x:102.3,y:250.6},5).to({regX:7,regY:1.7,scaleX:1,scaleY:1,rotation:66.8,x:90.3,y:250.9},6).to({regY:1.8,scaleX:1,scaleY:1,rotation:19.9,x:102,y:250.8},6).to({regY:1.7,scaleX:1,scaleY:1,rotation:-26.7,x:113.9,y:247.4},6).wait(1));

	// 上臂
	this.instance_9 = new lib.xespeiyou_com__1_153_35700();
	this.instance_9.setTransform(102.5,237.9,1,1,-42.5,0,0,5.8,2.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({regY:2.1,rotation:-0.7,x:100.7,y:240.5},5).to({regY:2.2,rotation:51.1,x:100.6,y:240},6).to({rotation:4.1,x:101.4,y:240.5},6).to({rotation:-42.5,x:102.5,y:237.9},6).wait(1));

	// 大腿
	this.instance_10 = new lib.xespeiyou_com__1_159_4262();
	this.instance_10.setTransform(99.8,281.7,1,1,44.7,0,0,20.2,4.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({regX:20.1,scaleX:1,scaleY:1,rotation:11.1,x:100,y:284.3},5).to({regX:20.2,scaleX:1,scaleY:1,rotation:-27.5,x:101.4,y:288.1},6).to({scaleX:1,scaleY:1,rotation:8.4,x:100.5,y:287.4},6).to({scaleX:1,scaleY:1,rotation:44.7,x:99.8,y:281.7},6).wait(1));

	// 阴影
	this.instance_11 = new lib.xespeiyou_com__1_160_79378();
	this.instance_11.setTransform(106.5,321.7,1,1,0,0,0,33.5,5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({scaleX:1.12},5).to({scaleX:1},6).to({scaleX:1.12},6).to({scaleX:1},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(9.6,0.1,228.9,327.5);


(lib.xespeiyou_com__1_144_16181 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 小腿
	this.instance = new lib.xespeiyou_com__1_149_71773();
	this.instance.setTransform(111.8,298.4,1,1,-36.8,0,0,13.2,1.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:13.3,rotation:-35.2,x:101.5,y:299.3},5).to({regX:13.2,rotation:29.5,x:89.5,y:297.1},6).to({rotation:-3.7,x:100.5,y:300.3},6).to({rotation:-36.8,x:111.8,y:298.4},6).wait(1));

	// 小臂
	this.instance_1 = new lib.xespeiyou_com__1_151_67841();
	this.instance_1.setTransform(96.2,249.3,1,1,76,0,0,7.2,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,rotation:26.6,x:107.5,y:255.8},5).to({regY:1.6,scaleX:1,scaleY:1,rotation:-31.1,x:120.3,y:247.9},6).to({scaleX:1,scaleY:1,rotation:22.3,x:108.8,y:260.5},6).to({regY:1.5,scaleX:1,scaleY:1,rotation:76,x:96.2,y:249.3},6).wait(1));

	// 上臂
	this.instance_2 = new lib.xespeiyou_com__1_153_35700();
	this.instance_2.setTransform(107.6,239.3,1,1,57,0,0,6,1.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:7.6,x:106.5,y:241.2},5).to({regX:6.1,rotation:-50,x:107.4,y:239.8},6).to({rotation:3.3,y:241.2},6).to({regX:6,rotation:57,x:107.6,y:239.3},6).wait(1));

	// _头 
	this.instance_3 = new lib.xespeiyou_com__1_155_9151();
	this.instance_3.setTransform(101.8,227.2,1,1,0,0,0,101.8,227.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-1.2,x:99.8,y:228.8},5).to({y:227.1},6).to({rotation:-0.7,x:100.6,y:228.8},6).to({rotation:0,x:101.8,y:227.2},6).wait(1));

	// 身体
	this.instance_4 = new lib.xespeiyou_com__1_157_10854();
	this.instance_4.setTransform(99.6,291.2,1,1,0,0,0,23.4,66);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:-1.2,x:99,y:292.8},5).to({y:291.1},6).to({rotation:-0.7,x:99.2,y:292.7},6).to({rotation:0,x:99.6,y:291.2},6).wait(1));

	// 大腿
	this.instance_5 = new lib.xespeiyou_com__1_159_4262();
	this.instance_5.setTransform(100.4,284.6,1,1,-22,0,0,17.9,3.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:1,scaleY:1,rotation:7.3,x:98.6,y:284.5},5).to({scaleX:1,scaleY:1,rotation:44.2,x:97.5,y:280.6},6).to({scaleX:1,scaleY:1,rotation:10.9,x:98.8,y:284.2},6).to({scaleX:1,scaleY:1,rotation:-22,x:100.4,y:284.6},6).wait(1));

	// 小腿
	this.instance_6 = new lib.xespeiyou_com__1_149_71773();
	this.instance_6.setTransform(90.3,295.1,1,1,27.5,0,0,13.1,3);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:-6,x:98.9,y:300.7},5).to({regY:2.9,rotation:-44.7,x:111.3,y:301.2},6).to({scaleX:1,scaleY:1,rotation:-55.5,x:104.3,y:301.7},6).to({regY:3,scaleX:1,scaleY:1,rotation:27.5,x:90.3,y:295.1},6).wait(1));

	// 小臂
	this.instance_7 = new lib.xespeiyou_com__1_151_67841();
	this.instance_7.setTransform(113.9,247.4,1,1,-26.7,0,0,7,1.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regX:6.9,regY:1.8,scaleX:1,scaleY:1,rotation:15.1,x:102.3,y:250.6},5).to({regX:7,regY:1.7,scaleX:1,scaleY:1,rotation:66.8,x:90.3,y:250.9},6).to({regY:1.8,scaleX:1,scaleY:1,rotation:19.9,x:102,y:250.8},6).to({regY:1.7,scaleX:1,scaleY:1,rotation:-26.7,x:113.9,y:247.4},6).wait(1));

	// 上臂
	this.instance_8 = new lib.xespeiyou_com__1_153_35700();
	this.instance_8.setTransform(102.5,237.9,1,1,-42.5,0,0,5.8,2.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regY:2.1,rotation:-0.7,x:100.7,y:240.5},5).to({regY:2.2,rotation:51.1,x:100.6,y:240},6).to({rotation:4.1,x:101.4,y:240.5},6).to({rotation:-42.5,x:102.5,y:237.9},6).wait(1));

	// 大腿
	this.instance_9 = new lib.xespeiyou_com__1_159_4262();
	this.instance_9.setTransform(99.8,281.7,1,1,44.7,0,0,20.2,4.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({regX:20.1,scaleX:1,scaleY:1,rotation:11.1,x:100,y:284.3},5).to({regX:20.2,scaleX:1,scaleY:1,rotation:-27.5,x:101.4,y:288.1},6).to({scaleX:1,scaleY:1,rotation:8.4,x:100.5,y:287.4},6).to({scaleX:1,scaleY:1,rotation:44.7,x:99.8,y:281.7},6).wait(1));

	// 阴影
	this.instance_10 = new lib.xespeiyou_com__1_160_79378();
	this.instance_10.setTransform(106.5,321.7,1,1,0,0,0,33.5,5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({scaleX:1.12},5).to({scaleX:1},6).to({scaleX:1.12},6).to({scaleX:1},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(10.3,-5,373.1,332.7);


(lib.xespeiyou_com__1_142_24406 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.xespeiyou_com__1_72_79091();
	this.instance.setTransform(205.1,130.9,1,1,0,0,0,194.4,165.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:201.8,y:134.2},5).to({y:130.9},6).to({x:203.4},6).to({x:205.1},6).wait(1));

	// 小腿
	this.instance_1 = new lib.xespeiyou_com__1_149_71773();
	this.instance_1.setTransform(111.8,298.4,1,1,-36.8,0,0,13.2,1.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:13.3,rotation:-35.2,x:101.5,y:299.3},5).to({regX:13.2,rotation:29.5,x:89.5,y:297.1},6).to({rotation:-3.7,x:100.5,y:300.3},6).to({rotation:-36.8,x:111.8,y:298.4},6).wait(1));

	// 小臂
	this.instance_2 = new lib.xespeiyou_com__1_151_67841();
	this.instance_2.setTransform(96.2,249.3,1,1,76,0,0,7.2,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1,scaleY:1,rotation:26.6,x:107.5,y:255.8},5).to({regY:1.6,scaleX:1,scaleY:1,rotation:-31.1,x:120.3,y:247.9},6).to({scaleX:1,scaleY:1,rotation:22.3,x:108.8,y:260.5},6).to({regY:1.5,scaleX:1,scaleY:1,rotation:76,x:96.2,y:249.3},6).wait(1));

	// 上臂
	this.instance_3 = new lib.xespeiyou_com__1_153_35700();
	this.instance_3.setTransform(107.6,239.3,1,1,57,0,0,6,1.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:7.6,x:106.5,y:241.2},5).to({regX:6.1,rotation:-50,x:107.4,y:239.8},6).to({rotation:3.3,y:241.2},6).to({regX:6,rotation:57,x:107.6,y:239.3},6).wait(1));

	// _头 
	this.instance_4 = new lib.xespeiyou_com__1_155_9151();
	this.instance_4.setTransform(101.8,227.2,1,1,0,0,0,101.8,227.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:-1.2,x:99.8,y:228.8},5).to({y:227.1},6).to({rotation:-0.7,x:100.6,y:228.8},6).to({rotation:0,x:101.8,y:227.2},6).wait(1));

	// 身体
	this.instance_5 = new lib.xespeiyou_com__1_157_10854();
	this.instance_5.setTransform(99.6,291.2,1,1,0,0,0,23.4,66);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:-1.2,x:99,y:292.8},5).to({y:291.1},6).to({rotation:-0.7,x:99.2,y:292.7},6).to({rotation:0,x:99.6,y:291.2},6).wait(1));

	// 大腿
	this.instance_6 = new lib.xespeiyou_com__1_159_4262();
	this.instance_6.setTransform(100.4,284.6,1,1,-22,0,0,17.9,3.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleX:1,scaleY:1,rotation:7.3,x:98.6,y:284.5},5).to({scaleX:1,scaleY:1,rotation:44.2,x:97.5,y:280.6},6).to({scaleX:1,scaleY:1,rotation:10.9,x:98.8,y:284.2},6).to({scaleX:1,scaleY:1,rotation:-22,x:100.4,y:284.6},6).wait(1));

	// 小腿
	this.instance_7 = new lib.xespeiyou_com__1_149_71773();
	this.instance_7.setTransform(90.3,295.1,1,1,27.5,0,0,13.1,3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({rotation:-6,x:98.9,y:300.7},5).to({regY:2.9,rotation:-44.7,x:111.3,y:301.2},6).to({scaleX:1,scaleY:1,rotation:-55.5,x:104.3,y:301.7},6).to({regY:3,scaleX:1,scaleY:1,rotation:27.5,x:90.3,y:295.1},6).wait(1));

	// 小臂
	this.instance_8 = new lib.xespeiyou_com__1_151_67841();
	this.instance_8.setTransform(113.9,247.4,1,1,-26.7,0,0,7,1.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regX:6.9,regY:1.8,scaleX:1,scaleY:1,rotation:15.1,x:102.3,y:250.6},5).to({regX:7,regY:1.7,scaleX:1,scaleY:1,rotation:66.8,x:90.3,y:250.9},6).to({regY:1.8,scaleX:1,scaleY:1,rotation:19.9,x:102,y:250.8},6).to({regY:1.7,scaleX:1,scaleY:1,rotation:-26.7,x:113.9,y:247.4},6).wait(1));

	// 上臂
	this.instance_9 = new lib.xespeiyou_com__1_153_35700();
	this.instance_9.setTransform(102.5,237.9,1,1,-42.5,0,0,5.8,2.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({regY:2.1,rotation:-0.7,x:100.7,y:240.5},5).to({regY:2.2,rotation:51.1,x:100.6,y:240},6).to({rotation:4.1,x:101.4,y:240.5},6).to({rotation:-42.5,x:102.5,y:237.9},6).wait(1));

	// 大腿
	this.instance_10 = new lib.xespeiyou_com__1_159_4262();
	this.instance_10.setTransform(99.8,281.7,1,1,44.7,0,0,20.2,4.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({regX:20.1,scaleX:1,scaleY:1,rotation:11.1,x:100,y:284.3},5).to({regX:20.2,scaleX:1,scaleY:1,rotation:-27.5,x:101.4,y:288.1},6).to({scaleX:1,scaleY:1,rotation:8.4,x:100.5,y:287.4},6).to({scaleX:1,scaleY:1,rotation:44.7,x:99.8,y:281.7},6).wait(1));

	// 阴影
	this.instance_11 = new lib.xespeiyou_com__1_160_79378();
	this.instance_11.setTransform(106.5,321.7,1,1,0,0,0,33.5,5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({scaleX:1.12},5).to({scaleX:1},6).to({scaleX:1.12},6).to({scaleX:1},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(10,-58,421.4,385.7);


(lib.xespeiyou_com__1_139_47138 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF8510").s().p("AgkA+QgEgQACgSQgFAfgEAHIgBABQACgWAFgaIABAAQAKAAAGgHQAGgFABgHQgBgJgGgHQgEgEgGgBIAFgTQAEgMAGgKQANgWAMABQARACACATQABAVgmAYIAUgLQAPgGAFAAQAVAAAAASQAAANgOADQgFACgSgBIgTgBIAiALQASAIAAAUQAAAHgHAFQgJAEgIgCQgGgCgJgJQgKgOgHgFQAMAfABAIQADAMgGAGQgEAFgIAAQgSAAgFgXg");
	this.shape.setTransform(5.4,37.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFE469").s().p("AgKAUIAHgnQAEABAEADQAGAIAAAHQAAAIgGAGQgFAGgJAAg");
	this.shape_1.setTransform(2.3,37.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("ABkg6QAGAEAEADIAIAIQgLAjg2AdQg+AmhFAAQgiAAgFgeQAxABBEgbQBBgZAigkg");
	this.shape_2.setTransform(21.1,6.3,1.001,1.001,-1.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ah1AdQAxABBEgbQBBgZAigkIABAAIAKAHIAIAIQgLAjg2AdQg+AmhFAAQgiAAgFgeg");
	this.shape_3.setTransform(21.1,6.3,1.001,1.001,-1.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("Ai0AFQgTBIgJBDQgIA0ACAaQABAgBVAHQA4AGBFgGQA7gEAhgFQAxgIAhgMQAWgKAJgHQALgLACgWQABgZgTh4QgXiBgEgfQgJgwgXgqQgYgogZgKQgIAKgMALQgfAYgtAVQgcAMgYAIQgRAFgOACQgQACgNABQglBWgYBWgABFjyQAoA2AWBHQAXBKACA2QACAzgjAgQghAgg4ACQhxAEgDhdQgDhIAaiQAhaiqQgTBrgPAeQgRAhgnAF");
	this.shape_4.setTransform(21.9,26.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhGBhQgChKAaiOIAygUQAvgVAfgZQAoA3AVBHQAYBHABA4QACAzgiAhQgiAfg4ACIgKABQhnAAgDhZgAhqhtIAcgDQgSBrgQAcQgRAjgnAFQAZhXAlhVg");
	this.shape_5.setTransform(20.6,20.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFC943").s().p("AiAEFQhVgHgBggQgCgaAIg0QAJhDAThIQAngFARghQAPgeAThrIAfgHQgaCQADBIQADBdBxgEQA4gCAhggQAjgggCgzQgCg2gXhKQgWhHgog2QAMgLAIgKQAZAKAYAoQAXAqAJAwIAbCgQATB4gBAZQgCAWgLALQgJAHgWAKQghAMgxAIQghAFg7AEQgjADgfAAQgfAAgcgDg");
	this.shape_6.setTransform(21.9,26.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFC943").s().p("AiAEFQhVgHgBggQgCgaAIg0QAJhDAThIQAYhWAlhWIAdgDIAfgHIA0gUQAtgVAfgYQAMgLAIgKQAZAKAYAoQAXAqAJAwIAbCgQATB4gBAZQgCAWgLALQgJAHgWAKQghAMgxAIQghAFg7AEQgjADgfAAQgfAAgcgDg");
	this.shape_7.setTransform(21.9,26.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("AjwAbQACAAABAAQALAEANACQAeADAZgFQAKgDANgGQAIAHARAEQAUAEARgBQAWAAAVgJQAMgGAHgHQAHAFAMAEQAPAFANgBQAXgBAUgIQAVgKAGgOQAKAEAOABQAQAAAMgEQAWgFAQgNQACgCADgCQAFgGAEgGQgEgIgDgJIgBgBQgPglgKgeQgFgMgDgKQjHBDjHg5QgFAUgFAVQgKAwgCAsIAAABQgBAKAAALQAFAEAHAEQgBAWABAdQACAmAFAcIABAAQAQADANAAQAoAAAVgFQALgEAOgHQAJAHAUAFQATAFAUgBQAZgBAVgKQAJgFAGgHQAJAGANADQAQADAOAAQAZgBAVgKQAVgJAHgQQAKAEAQABQAQAAAOgFQAYgHARgOQALgJAHgIQgdghgXg4");
	this.shape_8.setTransform(25.3,62.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E9AA0A").s().p("AjPAPIAJgoQDGA3DJhAIAHAWQg5AahCAMQg0AJg/AAQiCAAgvgUg");
	this.shape_9.setTransform(22.1,51.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FA7B00").s().p("AheBUQgUgFgIgIQgOAIgMAEQgUAEgpAAQgNAAgQgDIgBAAQgEgbgCgmQgCgbACgXIADAAQALAEAMACQAfAEAYgGQALgDAMgFQAIAGARAEQAUAFARgBQAXAAAUgKQANgFAGgIQAIAGALAEQAQAEANgBQAXgBAUgIQAUgKAGgQQAKAEAPABQAQAAAMgEQAWgEAPgOIAFgDQAYA5AcAfQgGAIgLAKQgSANgXAIQgOAEgRAAQgQgBgJgDQgHAQgWAJQgUAKgaAAQgNAAgQgCQgOgEgIgFQgHAGgIAFQgVAKgZABIgIAAQgQAAgQgDg");
	this.shape_10.setTransform(25.8,68.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFC943").s().p("AhYBAQgRgFgIgIQgMAIgMACQgXAHgegEQgMgCgNgEIgCgBIgJgFIAAgBQACgsAKgtQAwAUCBAAQBAAAAzgJQBCgMA6gcQAKAeAPAlIAAAAQgBAAgBAAQAAAAgBAAQAAABAAAAQgBAAAAABIgFAEQgQAMgVAHQgMADgRAAQgOAAgKgEQgGAPgVAJQgSAJgZABQgMABgQgFQgOgEgHgFQgGAGgMAHQgUAKgVAAIgHAAQgOAAgRgEg");
	this.shape_11.setTransform(22.8,56.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFE469").s().p("AhZArQgRgEgIgGQgMAFgLADQgYAGgfgEQgMgCgLgEIgDAAIgMgHIABgYIAIAFIADABQAMAEAMACQAeAEAYgHQALgCANgIQAIAIARAFQAUAFARgBQAWAAAUgKQAMgHAGgFQAHAEAOAEQAPAFANgBQAYgBATgJQAUgHAHgPQAKAEAOAAQAQAAANgDQAUgHARgMIAFgEQAAgBAAAAQAAAAABgBQAAAAABgBQABAAAAAAIAAgBIABABIAHARIgJAMIgFADQgPANgWADQgMAEgQAAQgPgBgKgEQgGAQgUAKQgUAIgXABQgNABgQgEQgNgEgIgGQgGAIgLAFQgUAKgXAAIgGAAQgOAAgRgEg");
	this.shape_12.setTransform(23.1,61.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FA7B00").s().p("AhYCPQgUgFgJgHQgOAHgLAEQgVAFgoAAQgNAAgQgDIgBAAQgFgcgCgmQgBgdABgWIgMgIIABgVIAAgBQACgsAKgwIAKgpQDHA5DHhDIAIAWQAKAeAPAlIABABIAHARIgJAMQAXA4AdAhQgHAIgLAJQgRAOgYAHQgOAFgQAAQgQgBgKgEQgHAQgVAJQgVAKgZABQgOAAgQgDQgNgDgJgGQgGAHgJAFQgVAKgZABIgHAAQgRAAgPgEg");
	this.shape_13.setTransform(25.3,62.5);

	this.instance = new lib.xespeiyou_com__1_92_77497("synched",0);
	this.instance.setTransform(21.6,6.1,0.872,0.872,0,0,0,11.7,10.1);

	this.addChild(this.instance,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-3.7,52.7,81.9);


(lib.xespeiyou_com__1_136_90457 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.xespeiyou_com__1_125_9030("synched",0);
	this.instance.setTransform(2.4,158.9,1,1,0,0,0,2.4,3.7);

	this.instance_1 = new lib.xespeiyou_com__1_124_18146("synched",0);
	this.instance_1.setTransform(76.8,99.5,1,1,0,0,0,74.9,99.5);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,0,152.7,200.2);


(lib.xespeiyou_com__1_126_61211 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.xespeiyou_com__1_272_81129("synched",0);
	this.instance.setTransform(18.3,35.4,1,1,0,0,0,8.3,11.2);

	this.instance_1 = new lib.xespeiyou_com__1_271_51953("synched",0);
	this.instance_1.setTransform(38.7,45.4,1,1,0,0,0,38.7,45.4);

	this.instance_2 = new lib.xespeiyou_com__1_273_6285("synched",0);
	this.instance_2.setTransform(23.9,49.9,1,1,0,0,0,20.6,34.1);

	this.instance_3 = new lib.xespeiyou_com__1_274_26281("synched",0);
	this.instance_3.setTransform(31.4,57,1,1,0,0,0,29.1,36.7);

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,0,79.4,93.7);


(lib.xespeiyou_com__1_121_97668 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 嘴
	this.instance = new lib.xespeiyou_com__1_186_48349("single",0);
	this.instance.setTransform(37.3,282,3.323,3.323,0,0,180,4,1.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(50));

	// 眼睛
	this.instance_1 = new lib.xespeiyou_com__1_270_73546("synched",0);
	this.instance_1.setTransform(62.5,215.9,1,1,0,0,0,38.7,46.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231054").s().p("AlqhkQChDPE+iZQAlgSAngXICpBgIirAEIgBAGQi9BSh7AAQjGAAgqjJg");
	this.shape.setTransform(64.5,227);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{scaleY:1}}]}).to({state:[{t:this.instance_1,p:{scaleY:0.677}}]},4).to({state:[{t:this.shape}]},3).to({state:[{t:this.instance_1,p:{scaleY:0.677}}]},3).to({state:[{t:this.instance_1,p:{scaleY:1}}]},3).wait(37));

	// 眉毛
	this.instance_2 = new lib.xespeiyou_com__1_116_86816("synched",0);
	this.instance_2.setTransform(53.3,158.9,1,1,0,0,0,13.9,5.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({y:170.3},0).wait(3).to({y:193},0).wait(3).to({y:170.3},0).wait(3).to({y:158.9},0).wait(37));

	// 发帘
	this.instance_3 = new lib.xespeiyou_com__1_123_49502("synched",0);
	this.instance_3.setTransform(130.4,123.1,1,1,0,0,0,30.6,13.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(50));

	// 头发
	this.instance_4 = new lib.xespeiyou_com__1_120_51624("synched",0);
	this.instance_4.setTransform(145.2,102.1,1,1,0,0,0.3,145.2,102.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(50));

	// _小辫
	this.instance_5 = new lib.xespeiyou_com__1_118_88527("synched",0);
	this.instance_5.setTransform(210.6,127.5,1,1,0,0,0,77.7,30);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regY:30.1,rotation:1,x:210.7,y:127.6},10).to({regY:30,rotation:0,x:210.6,y:127.5},12).to({regY:30.1,rotation:1,x:210.7,y:127.6},14).to({regY:30,rotation:0,x:210.6,y:127.5},13).wait(1));

	// 脸
	this.instance_6 = new lib.xespeiyou_com__1_136_90457("synched",0);
	this.instance_6.setTransform(87.2,197.5,1,1,0,0,0,75.8,99.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,293.6,412.5);


(lib.xespeiyou_com__1_75_70441 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 小辫 
	this.instance = new lib.xespeiyou_com__1_248_3295("synched",0);
	this.instance.setTransform(159.7,212.3,0.951,0.951,0,0,0,4.4,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-5.7,y:212.4},4).to({rotation:0,y:212.3},4).to({rotation:-5.7,y:212.4},5).to({rotation:0,y:212.3},5).to({rotation:-5.7,y:212.4},5).to({rotation:0,y:212.3},5).to({rotation:-5.7,y:212.4},4).to({rotation:0,y:212.3},6).wait(1));

	// _耳朵
	this.instance_1 = new lib.xespeiyou_com__1_249_53563("synched",0);
	this.instance_1.setTransform(121.7,182.8,0.951,0.951,0,0,0,15.8,17.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(30));

	// 发帘
	this.instance_2 = new lib.xespeiyou_com__1_250_57027("synched",0);
	this.instance_2.setTransform(46.2,112.5,0.951,0.951,0,0,0,48.5,51.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(30));

	// 发带 
	this.instance_3 = new lib.xespeiyou_com__1_259_15601("synched",0);
	this.instance_3.setTransform(105.9,134.4,0.951,0.951,0,0,0,94.2,48.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(30));

	// 鼻子
	this.instance_4 = new lib.xespeiyou_com__1_253_30871("synched",0);
	this.instance_4.setTransform(22.1,197.8,0.951,0.951,0,0,0,2.9,3.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(30));

	// _嘴
	this.instance_5 = new lib.xespeiyou_com__1_90_96304("single",0);
	this.instance_5.setTransform(38.6,215.8,1.898,1.898,0,0,180,3.9,1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(39));

	// _眉毛
	this.instance_6 = new lib.xespeiyou_com__1_247_8372("synched",0);
	this.instance_6.setTransform(50.1,148.6,0.951,0.951,0,0,0,19.9,14.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(2).to({y:153.6},0).wait(3).to({y:163.1},0).wait(2).to({y:153.6},0).wait(2).to({y:148.6},0).wait(30));

	// _眼 
	this.instance_7 = new lib.xespeiyou_com__1_254_41258("synched",0);
	this.instance_7.setTransform(56.2,171.3,0.951,0.951,0,0,0,26.4,33.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#351504").s().p("ACRAfQkzBOhLiwQC8BuDAhPIBfBjIgDAFg");
	this.shape.setTransform(55,183);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7,p:{regY:33.8,scaleY:0.951}}]}).to({state:[{t:this.instance_7,p:{regY:33.7,scaleY:0.565}}]},2).to({state:[{t:this.shape}]},3).to({state:[{t:this.instance_7,p:{regY:33.7,scaleY:0.565}}]},2).to({state:[{t:this.instance_7,p:{regY:33.8,scaleY:0.951}}]},2).wait(30));

	// 头发
	this.instance_8 = new lib.xespeiyou_com__1_251_46803("synched",0);
	this.instance_8.setTransform(115.2,84.1,0.951,0.951,0,0,0,100.5,88.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(2).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(30));

	// _脸
	this.instance_9 = new lib.xespeiyou_com__1_252_59726("synched",0);
	this.instance_9.setTransform(105.2,145,0.951,0.951,0,0,0,87.7,88.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(2).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,212.7,242.4);


(lib.xespeiyou_com__1_42_62259 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//
		///* 在此帧处停止
		//Flash 时间轴将在插入此代码的帧处停止/暂停。
		//也可用于停止/暂停影片剪辑的时间轴。
		//*/
		//
		//stop();
		//
	}
	this.frame_1 = function() {
		//
		///* 在此帧处停止
		//Flash 时间轴将在插入此代码的帧处停止/暂停。
		//也可用于停止/暂停影片剪辑的时间轴。
		//*/
		//
		//stop();
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// 图层 3
	this.instance = new lib.xespeiyou_com__1_53_44476();
	this.instance.setTransform(42.9,31,0.199,0.199,0,0,0,-703.3,-109.3);

	this.instance_1 = new lib.xespeiyou_com__1_53_44476();
	this.instance_1.setTransform(262,31,0.199,0.199,0,0,0,-703.3,-109.3);

	this.instance_2 = new lib.xespeiyou_com__1_53_44476();
	this.instance_2.setTransform(315,31,0.164,0.164,0,0,0,-703.4,-109.3);

	this.instance_3 = new lib.xespeiyou_com__1_53_44476();
	this.instance_3.setTransform(438,31,0.164,0.164,0,0,0,-703.4,-109.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).to({state:[]},1).wait(1));

	// 图层 1
	this.instance_4 = new lib.xespeiyou_com__1_53_44476();
	this.instance_4.setTransform(119,14,0.211,0.211,0,0,0,-703.4,-109.2);

	this.instance_5 = new lib.xespeiyou_com__1_53_44476();
	this.instance_5.setTransform(316,3,0.211,0.211,0,0,0,-703.4,-109.2);

	this.instance_6 = new lib.xespeiyou_com__1_53_44476();
	this.instance_6.setTransform(223,3,0.164,0.164,0,0,0,-703.4,-109.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AgpANQgSgFAAgIQAAgHASgGQARgGAYABQAZgBARAGQARAGAAAHQAAAIgRAFQgRAHgZgBQgYABgRgHg");
	this.shape.setTransform(350.3,17.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AgtARQgTgHAAgKQAAgJATgIQAUgGAZAAQAaAAAUAGQASAIABAJQgBAKgSAHQgUAHgaAAQgZAAgUgHg");
	this.shape_1.setTransform(361.8,8.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AhQAUQghgIgBgMQABgLAhgJQAigJAuAAQAvAAAiAJQAhAJABALQgBAMghAIQgiAKgvgBQguABgigKg");
	this.shape_2.setTransform(337.8,7.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AgbAKQgMgEAAgGQAAgEAMgFQAMgFAPABQAQgBAMAFQAMAFgBAEQABAGgMAEQgMAEgQABQgPgBgMgEg");
	this.shape_3.setTransform(187.3,15.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("AgwAKQgUgEAAgGQAAgEAUgFQAVgFAbABQAcgBAVAFQAVAFgBAEQABAGgVAEQgVAEgcABQgbgBgVgEg");
	this.shape_4.setTransform(193.3,6.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("AgzAKQgXgEAAgGQAAgFAXgEQAVgFAeABQAfgBAVAFQAXAEAAAFQAAAGgXAEQgVAEgfAAQgeAAgVgEg");
	this.shape_5.setTransform(243.8,17.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666666").s().p("AgiAKQgPgEAAgGQAAgFAPgEQAPgEATAAQAUAAAOAEQAQAEgBAFQABAGgQAEQgOAFgUgBQgTABgPgFg");
	this.shape_6.setTransform(204.3,18.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666666").s().p("AgXANQgKgFAAgIQAAgHAKgGQAKgGANABQAOgBAKAGQAKAGAAAHQAAAIgKAFQgKAHgOgBQgNABgKgHg");
	this.shape_7.setTransform(189.8,-0.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#666666").s().p("AgbADQgLgCAAgBQAAAAALgCQAMgCAPABQAQgBALACQANACAAAAQAAABgNACQgLABgQABQgPgBgMgBg");
	this.shape_8.setTransform(173.3,16.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#666666").s().p("AgmAGQgQgCAAgEQAAgCAQgDQARgEAVAAQAXAAAQAEQAQADAAACQAAAEgQACQgQADgXAAQgVAAgRgDg");
	this.shape_9.setTransform(139.8,21.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#666666").s().p("AgmAKQgQgEAAgGQAAgEAQgFQAQgFAWABQAWgBARAFQAQAFAAAEQAAAGgQAEQgRAEgWABQgWgBgQgEg");
	this.shape_10.setTransform(406.8,7.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#666666").s().p("AhQARQghgHgBgKQABgJAhgIQAigGAugBQAvABAiAGQAhAIABAJQgBAKghAHQgiAHgvABQgugBgigHg");
	this.shape_11.setTransform(381.8,6.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#462104").ss(0.5,1,1).p("ANUj5QnLgBnaAAQg5AAg4AAQjDAAjAAAQhZAAhZABQhbAAhbAAQgXAAgWAAQgFAAgEAAQgJAAgIAAQoYAEm7AWQheAFhZAGQgBAAgBAAQgdAJgaANQgMAGgKAEQgGADgGADQhjA8AABJQAAABABAFIgFA4IgOBNIgBAEQgCAGAAAIIAAABQACA5CJAnQAhAJAlAHQBaADBfADQC3AGDFADQAZABAZAAQESAFEtABQAWAAAXAAQCzAAC1AAQC6AAC8AAQA/AAA/AAQB+AAB+AAQCgAACeAAQC3AAC0AAEAlPABnIgYhSIgHguIgCgQIAAgDQgBg8h7gyQgsgSg8gRQgFgBgFAAQhBgFhCgEQhOgFhRgFQgegCgegCQgRgBgSgBQmOgYndgIANUD5QCtgBCjgDQFQgGEqgMQCagECSgHQAKgCALgBQDvgnAEg5");
	this.shape_12.setTransform(239.6,18.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E99900").s().p("AAAgFQABAEAAAGIAAABg");
	this.shape_13.setTransform(478,29.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("Ai5CtImCAAIlpAAIgsAAIkRgBQgYgOglgKQhHgVg3gBIAAgFICCAAQAoADA9gMQA+gMCYgJIDhgPQgDAAgCgDIAAgCQhIgDiRgCIiNAAQj9AAgvABImfATQCUgaJBgdIC9gJIEYgMQgDgKgEgFIgEgHQgNgPg9gCIhfgBIgPABIgVACQiPAHmDAKQkCAGBrgrQl/A/gzAFQgQABAQgEQAkgLDKgmQI/hzCFgTIAxgHIAKAAIAsAAIC3AAICyAAIGCAAIBxAAIOmAAIAAADQHdAHGNAZIAkACIA7AEICfAKIgPAKQgjAVg2ATQg6AUgXAJIAyAeQg0BCifAhIh1gFQizgGg1AKQg0AKDLAaQDLAbwogDQFQgzgngHQhDgMgZAAQgMAAhuAKQhuAKgNAAQgqAAhUgIQg+gFggAGQgrAHgzAmQgMAIgLALQFWADAxAJQAyAImFAAIm9AAgAhIhaQjSAKi2AQIWDAJI1oA4QBGA1C6gIQA5gDCdgQQCEgNA8ACQgXAOgeAMQLVgzEngTQFWgWgngCQChgLBEgfQn5gQmsAAQnhAAl+AUg");
	this.shape_14.setTransform(238.6,10.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#170E13").s().p("AgYD7Ij+AAIh+AAIl2AAIloAAIgtAAQktgCkSgFIgygBQjFgDi3gGIAAkhQAzgGGAhAQhCAVgOASQgsA3GdgnIGHgkIAVgBIAPgBIBfABQA9ACANAPIAFAHQADAGAEALIkZAMIi9AJQpBAdiUAYQjLAjJXAeQgUgBgoASIAWAAIAJAAIDkADIERACIAtAAIFoAAIGDAAIG8AAQGGAAgygIQgygJlWgEQAMgKAMgJQAzglAqgIQAhgFA9AFQBVAHAqABQAMAABugKQBugJANABQAYgBBDAKQAoAIlQAzQQnACjLgaQjLgaA1gKQA0gICzAEIB2AFQCfgfA0hEIgygfQAXgIA6gUQA2gUAigUIAQgKICDAJIAKABQA8ARAsARQB7AyABA9IAAACIACAQIAHAuIAYBSIADAOQgEA5jvAnIgVADQiSAHiaAEQkqAMlQAGQijADitACIAAABIlrABIk8AAgEgiMgDfQG7gXIYgEIghAHQiFATo/BzQjKAogkAKg");
	this.shape_15.setTransform(259.2,18.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#666666").s().p("A1vCpIgKAAIgVAAQAngSAUABQpWgeDLgjIGfgTQAvgCD9AAICNABQCRABBIADIAAADQACACADAAIjhAPQiYAKg+AMQg9AMgogEIiCAAIAAAFQA3ACBHAUQAlALAYANIjkgDgAlfACIVog5I2DgJQC2gQDQgKQLXglQvAhQhEAfihALQAnADlWAWQknASrVA0QAegNAXgOQg8gBiEANQidAQg5ACIgxABQiTAAg8gtgA4EgHQAOgSBBgWQhrAsECgGQGDgKCPgIImIAiQiqAQhcAAQiEAAAagegAuUirIAQAAIgxAGIAhgGg");
	this.shape_16.setTransform(230,10.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AALDfQgigHgigJQiIgngCg5IAAgBQAAgIACgGIABgEIANhNIAFg4IgBgGQAAhJBkg7IALgHIAWgKQAbgMAagKIACAAIC3gKIAACkQgPAEAPgBIAAEiIi5gGg");
	this.shape_17.setTransform(20.6,19);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#462104").ss(0.5,1,1).p("ANUj5QnLgBnaAAQg5AAg4AAQjDAAjAAAQhZAAhZABQhbAAhbAAQgXAAgWAAQgFAAgEAAQgJAAgIAAQoYAEm7AWQheAFhZAGQgBAAgBAAQgdAJgaANQgMAGgKAEQgGADgGADQhjA8AABJQAAABABAFIgFA4IgOBNIgBAEQgCAGAAAIIAAABQACA5CJAnQAhAJAlAHQBaADBfADQC3AGDFADQAZABAZAAQESAFEtABQAWAAAXAAQCzAAC1AAQC6AAC8AAQA/AAA/AAQB+AAB+AAQCgAACeAAQC3AAC0gCQCtgBCjgDQFQgGEqgMQCagECSgHQAKgCALgBQDvgnAEg5EAlPABnIgYhSIgHguIgCgQIAAgDQgBg8h7gyQgsgSg8gRQgFgBgFAAQhBgFhCgEQhOgFhRgFQgQgBgPgBIgSgBQgGAAgFgBQgEAAgFAAIgMgBQgHgBgHAAQmOgYndgI");
	this.shape_18.setTransform(239.6,18.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#170E13").s().p("ACrD7Ij9AAIh9AAIl2AAIloAAIgtAAQkugBkRgFIgygBQjFgDi3gGIi5gGQgkgIgigJQiJgmgBg6IAAgBQAAgHACgGIABgFIAMhMIAGg5IgBgFQAAhKBkg7IAKgGIAXgKQAagMAdgKIACAAIC3gKQG7gXIYgEIARAAIAJAAIAtAAIC2AAICygBIGDAAIBwAAIOmABIAAACQHdAIGOAYIAOABIAMABIAJABIALAAIASABIAeACICgAKICCAJIAKABQA8ARAtARQB7AyABA9IAAADIACAPIAHAvIAXBSIAEANQgFA6juAmIgWAEQiRAGibAFQkpALlQAHQijADitABIlrACIk+AAg");
	this.shape_19.setTransform(239.6,18.4);

	this.instance_7 = new lib.xespeiyou_com__1_39_80948();
	this.instance_7.setTransform(242.8,17.6,1,1,0,0,0,242.8,17.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]}).to({state:[{t:this.instance_7}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-99.1,479.2,143.6);


(lib.xespeiyou_com__1_35_44865 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.xespeiyou_com__1_197_92002("synched",0);
	this.instance.setTransform(-11.3,-131.3,0.76,0.76,0,0,0,132.3,63.4);

	this.instance_1 = new lib.xespeiyou_com__1_196_8832("synched",0);
	this.instance_1.setTransform(-12.9,-19.7,0.76,0.76,0,0,0,20.4,1.4);

	this.instance_2 = new lib.xespeiyou_com__1_195_24345("synched",0);
	this.instance_2.setTransform(-12.8,-35.2,0.76,0.76,0,0,0,4.4,3.1);

	this.instance_3 = new lib.xespeiyou_com__1_194_30449("synched",0);
	this.instance_3.setTransform(5.9,-77.4,0.76,0.76,0,0,0,12.3,13.8);

	this.instance_4 = new lib.xespeiyou_com__1_193_42712("synched",0);
	this.instance_4.setTransform(-36.2,-77.4,0.76,0.76,0,0,0,11.8,13.8);

	this.instance_5 = new lib.xespeiyou_com__1_192_55739("synched",0);
	this.instance_5.setTransform(34.8,-66.7,0.76,0.76,0,0,0,43,51.5);

	this.instance_6 = new lib.xespeiyou_com__1_191_8926("synched",0);
	this.instance_6.setTransform(-62.8,-66.7,0.76,0.76,0,0,0,43.9,51.5);

	this.instance_7 = new lib.xespeiyou_com__1_190_6852("synched",0);
	this.instance_7.setTransform(-15.3,-77.3,0.76,0.76,0,0,0,110.5,101.4);

	this.instance_8 = new lib.xespeiyou_com__1_189_86244("synched",0);
	this.instance_8.setTransform(77.1,-59.2,0.76,0.76,0,0,0,19.9,25.2);

	this.instance_9 = new lib.xespeiyou_com__1_188_18601("synched",0);
	this.instance_9.setTransform(-105.8,-59.2,0.76,0.76,0,0,0,19,25.2);

	this.instance_10 = new lib.xespeiyou_com__1_187_43090("synched",0);
	this.instance_10.setTransform(3.8,-133.1,0.76,0.76,0,0,0,152.1,125.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("AjioVQAXg/ARhHQAAgGABgFQBWDCCdCQQCbCKDiBWQAxATA0AQAHAB3QgNATgLASQgpgFgEgmQAcgnBEgpABrCXQgCAYgCAXQgigVghgTQgzgcg2gWQhXgihegSQg4gOg6gFQg9gGhAgCQgtFwCjCFQjQh4AxmvQAYAAAZACQBMACBJAJQDEAYCfBUQArAVApAcgABNAsQA2AiAYAjQgCAmgrAFQgBgDgCgCACQKnIDtAAQA8gDAJgTADzIBQAlg0AoA0");
	this.shape.setTransform(-41.6,-85.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(10,1,1).p("AwOFzQhCk5gDkYQAAgEAAgCQAAggAAgfQAAgEAAgEQASixBCiMQAAABABACQCul5H4hnQEtg7FoA7QE8A+EJCdQBpA8BhBMQh4BpgyBfQCZBcB2CXIkVDxQgJDHhYDsQBrAhgRClQgRC1jNAFAObiyQABAXAAAYQACAlgCAoAKiFFQgCgVgCgTIAAgBQgYAAgYABQhNAChHAKQjGAaigBWQgrAUgnAaIgCAAQACAPAAAPQAAAGABAGQAAADAAAEQAGgEAHgDQAKgGAJgGQARgLATgJQAlgVApgRQAygWA5gRQAygRA4gJQA2gNA6gGQA6gFA/gCIACAAQALBagBBMIh4FJQgGAEgFADQDKhwgkmRQALAAANACQAEAAAGAAAK6FHIgBBDIgMFoIgCAZQAAAJAAAHQAAARgDANQgaCJjKBOQioA0kEAXQidAPiggMQgEgBgGAAQkLgXivg2QjKhOgaiJQgEgNAAgRQgCgNAAgRQjLgWgPikQgVjRC0ABQAWAAAeAEIAHGGALEF3QBHgLAwARAqTifQggBPgpBFQhhCkiWB0QgBACgEABQgCAAgCACIACBl");
	this.shape_1.setTransform(-0.9,-115.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AGXBFQgVgcAAgmQANgLALgRQAXghACggQALgGANAAQAeAAAUAcQAVAeAAAmQAAApgVAcQgUAcgeAAQgeAAgWgcgAn8BFQgTgagCgoQAPgLALgRQAXghABggQAMgGALAAQAeAAAUAcQAVAeAAAmQAAApgVAcQgUAcgeAAQgeAAgWgcg");
	this.shape_2.setTransform(-14.3,-63.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AC4gOIgHgeIgIg2IAAgEIANgHIATgMQARgLATgJQgEAcAAAgQAAB7BBBZQBDBYBeAAQBdAABChYQBBhZAAh7QAAhngrhPQA6gFA/gCQAMBaAABMIh4FHIgLAHQg6AghOAIIgiABQjkAAg8kdgAn7EOQhOgIg6giIgCAAQiiiEAtluQA/ACA+AFQgtBPAABnQAAB7BBBZQBDBYBeAAQBdAABChYQBBhZAAh7QAAgggEgcQAiASAhAVQAAABAAAAQgBAAAAABQAAAAAAABQAAAAAAABQgrFxkFAAIghgBgAFBg1QgIgCgHgGQgVgNACgiQACghAWgiIAEgEQAygWA5gRQAOANgBAeIAAACQgCAggXAhQgLARgNANQgNALgRAIQgPAHgMAAIgIgBgApSg1IgNgIQgVgNACgiQACghAWgiQAXggAdgNIACgCQAegOAVAOQAUAOgCAhIAAACQgBAggXAhQgLARgPANQgNALgPAIQgPAHgNAAIgJgBg");
	this.shape_3.setTransform(-14.3,-54.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A39250").s().p("AEqCZQhBhZAAh7QAAggAEgcQAlgUApgSIgDAFQgXAhgCAhQgCAjAVANQAHAFAIACQAGA5AhAtQApA4A6AAQA6AAApg4QApg2AAhMQAAhNgpg4QgPgSgPgMQA2gNA6gGQArBPAABnQAAB7hBBZQhCBZhdAAQheAAhDhZgAppCZQhBhZAAh7QAAhnAthPQA6AGA4ANQgPAKgLAPQgeANgXAgQgWAhgCAhQgCAjAVANIANAHQAFA5AiAtQApA4A6AAQA6AAApg4QApg2AAhMQAAg+gagxQA2AXA1AcQADAcAAAgQAAB7hBBZQhBBZheAAQheAAhDhZg");
	this.shape_4.setTransform(-14.3,-57.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7E713D").s().p("AFmB3QghgtgGg7QAPADAVgKQAQgHANgJQAAAjAVAcQAWAdAeAAQAeAAAVgdQAUgcAAgmQAAgogUgeQgVgcgeAAQgNAAgLAGIAAgCQACgegPgNQAygRA4gJQAPALAPASQApA4AABOQAABMgpA2QgpA4g6AAQg6AAgpg4gAotB3QgigtgFg7QARADAUgKQAPgHANgJQACAmATAZQAWAdAeAAQAeAAAVgdQAUgcAAgmQAAgogUgeQgVgcgeAAQgLAAgLAGIAAgCQACgigVgNQgUgOgfAOIgBACQALgPAPgJQBeATBXAhQAaAxAAA+QAABMgpA2QgpA4g6AAQg6AAgpg4g");
	this.shape_5.setTransform(-14.1,-61.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FBC2B5").s().p("AiZLiQgDgCgGAAQkLgWiwg2QjJhPgbiIQgDgNAAgRQgCgNAAgRIgImEIgBhlQAAgBABAAQAAgBABAAQAAAAAAAAQABAAAAAAQAEgCACgCQCVh0BhimQhhCmiVB0QgCACgEACQAAAAgBAAQAAAAAAAAQgBAAAAABQgBAAAAABIABBlQgdgEgXAAQAXAAAdAEIAIGEQjMgWgPilQgUjPCzACQhBk6gEkaIAAgFQANgMAJgFQAIgGAHgHQAKA/AhA6QATAgATARQBJgTAdgGQAEAMAEAaQAEAaADANQAIgPAHgJQANgVARgCQALANACAZQACANACAaIBOgGQAqhFAfhOIANggIANgkQAXg/ARhHQBXC9CfCKQCbCKDgBWQAxATA0AQQBUhqCQgLQDRgRBlDCIgxACQhMAChHAJQjGAaihBUQgrAVgnAaIgCAAQACAPAAAPIACALIAAAIIAAADIAHA2IAIAeQA/E0ECgWQBOgIA6gfQDKhwgjmQQALAAANACIgCBBIALgQQBHgMAxAPQBqAigRCkQgQC1jOAGIgJgLIALlpIgLFpIgCAYIAAARQAAARgEANQgaCIjKBPQioA0kDAWQhaAIhZAAQhFAAhGgEgAByJdQA8gDAJgTQgJATg8ADIjrAAIDrAAgAp+HIIACAAQA5AhBPAIQEjAYAtmKQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAIAEgvIADAFQArgFACgmQgYgjg2ggQATAtALA6QgpgdgrgUQihhSjEgaQhJgJhMgCQgZgCgYAAQgxGvDQB4gAA1G3Qgog0gjA0QATgaARAAQATAAAUAagABwAnQAEAmApAFQALgSANgTQAMgtAPgnQhEAngcAngAMAgrIACAAQALBYgCBNQAAhNgLhYg");
	this.shape_6.setTransform(-14.9,-77.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#433D21").s().p("AKNENIB4lGQABhNgLhaIgCAAQg/ACg6AGQg6AFg2AOQg4AJgyARQg5ARgyAWQgpARglAUQgTAKgRALIgTALIgNAIIAAgIIgBgLQAAgPgCgPIACAAQAngaArgVQCghWDGgaQBHgJBNgCIAwgCIAAACIAEAnQAkGQjKBwIALgIgAskkUQAZAAAYACQBNACBIAJQDFAaCgBUQArAVApAcIAAACIgEAvQghgVgigTQg0gcg2gWQhYgihdgSQg4gOg6gFQg+gGg/gCQgtFuCiCFQjPh4Awmvg");
	this.shape_7.setTransform(-14.3,-59.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(253,235,174,0.498)").s().p("ABpFIQgWgLgRAAQgIAAgHALQgGALgNAAQgJAAgcgWIglggQhLgag2AxQiJhhhbiDQBDgeAgAcQAeAeAYASQAeAVAPAAQAEAAAWgPQAYgPACAAIApAPQAnAPAPAAQAkAAA4hBQA8hABOACQAWATAgAYIByBbIAigdQAUgPALAAQAKAAAUgMQAGgLAJgHQATgRALAAQALAAAgAPQAeARAHAAQAXAAAjhLQAihHAAglQARAAApAhQAjAcANAPQAZgaASgyQAXg2gNgeQAuAPA8A0IAPAPQApAlAPAaIAAACIACAEQAHAcAGAeIAIA9QABAXAAAYIAAAtIAAAGIgDgGQgvg0gegXQgggYgJALIgLAAQgIAPgWAgQgeAtgNAAQgCAAgvgoIhbBeQgxAtgUAAQgKAAg2geQg4gegJAAQgTAAgWAiQgXAhgYAAQgJAAgZgHQgYgIgJAAQgkAAg9AaQg8AcgWAAQgMAAgWgLgArSDnQgCgYgLgNQgRACgNAUQgIAJgHAPQgEgNgEgaQgDgagEgLQgeAFhJATQgSgRgTgfQgig6gJhAQgIAIgHAFQgJAGgNALIAAg9IAAgIQASixBCiMIABADQAbBCADApQAGArAAAcQAHAAAPgEQAPgEAIAAQAAANARBAIASAyQAVAxBDAPQA4gmATAIQAAASAFAVQACANAIAWQASgLAIAEQAHAGA+gTIgNAjIgNAgQggBPgpBFIhPAFQgBgagCgNg");
	this.shape_8.setTransform(-10.1,-143.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFCC00").s().p("AhzLuQAcgnBDgpQgPAngLAvQgNATgLASQgpgFgEgmgAmEMUIAAgCQgLg6gTgvQA2AiAZAjQgCAmgrAFIgEgFgAJhKRQgNgCgLAAIgEgnIAAgCQhkjCjSARQiPALhUBqQgzgQgwgTQjihWibiKQifiQhWjAQgCAFAAAGQgRBFgWA/Qg+ATgHgGQgIgDgSALQgIgWgCgOQgFgUAAgVQgTgHg4AnQhDgPgVgyIgSgxQgRg/AAgNQgIAAgPADQgPAEgHAAQAAgcgGgrQgDgpgbhBQCul5H4hnQEtg8FoA8QE8A9EJCdQBpA8BhBNQh4BogyBfQCZBcB2CVIkVDxIABgnIgBglQAAgZgBgWIgIg+QgGgegHgdIgCgEIAAgCQgPgYgpgmIgPgOQg8g1gugPQANAegXA2QgSAxgZAaQgNgPgjgaQgpgigRAAQAAAkgiBJQgjBKgXAAQgHAAgegRQgggPgLAAQgLAAgTARQgJAIgGALQgUALgKAAQgLAAgUAPIgiAeIhyhcQgggYgUgSQhOgCg8A/Qg6BCgkAAQgPAAgngPIgpgPQgCAAgYAPQgWAPgEAAQgPAAgegVQgYgTgegeQgggchDAeQBbCDCJBhQA2gwBLAaIAlAfQAeAXAJAAQANAAAGgLQAHgMAIAAQARAAAWAMQAWALAMAAQAWAAA6gcQA9gaAkAAQAJAAAYAHQAZAIAJAAQAYAAAXgiQAWgiATAAQAJAAA4AeQA2AeAKAAQAUAAAxgtIBbhdQAvAnACAAQANAAAegtQAWgfAIgPIALAAQAJgMAgAZQAeAWAvA0IADAGIAAgGIAAgsIABAlIgBAnQgJDKhYDrQgwgRhHAMIgLASgAJrKRIgKAAIAKAAgAqrgeQAAgGACgFQBWDACfCQQifiKhYi7g");
	this.shape_9.setTransform(8,-148.8);

	this.addChild(this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-125.9,-233.1,250.2,234.8);


(lib.xespeiyou_com__1_34_56724 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAAGIgUACIAIgEIAJgFIgCgLQgCgJgDgGIAJANIADAJQACACAIgCQAFAAAEgCQgEACgEAEQgFADAAACIACANIACALIgMgWg");
	this.shape.setTransform(-51,-212.5,1,1,0,0,0,-0.7,-0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgCAMQgEgCgfAFIAPgHQAMgIACgDQACgEgFgQIgIgcIANAYQAHAPAGABQAEACALgCQALgBAFgCQgFACgKAJQgJAIAAADIACAWIAGAWQgVglgDgDg");
	this.shape_1.setTransform(-58.5,-214.8,1,1,0,0,0,-1.8,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#800000").ss(2,1,1).p("AgTChQgLgBgLgCQgegFgdgNQgLgEgNgKQgKgFgLgJQgLgJgHgJQgLgLgLgbQgJgXgCgMQgCgIACgIQAAgNACgLQAFgUARgQQAQgTAegNQACAAAFgCQAEgBACgDQAdgFAhAFQARAEAJAEIACAAIASgcQAWgbARgIQAHgEAIgCQAdgJAaADQAWABARALQALAIAJAJQAWAYAIAmQAFAWAAAEQAAANgCANQAAAPgFAJQgEAOgGAMQgMAdgTAYQgHAIgIAJACGBnQgiAhgjATQgoAJgqgD");
	this.shape_2.setTransform(-43.8,-212.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF2E2E").s().p("AgIBPQgqgGgEgCIgBgCQgEgDgWggIgVgdIAlg0IA2gFQAAAAABAAQAAAAABgBQAAAAAAAAQABAAAAgBIAngdIA/AQIAHAsIACAhIAAACIgYAeIgYAbQgJAIgGAHQgHAAgpgFg");
	this.shape_3.setTransform(-43.5,-211.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E10B0B").s().p("AggChQgDgKgPgiIgJgaQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAIgCgGQAEACAqAGQAoAFAIABIgfAgQgcAegCADgAB5BnQgLAAgcgEQghgEgSABQAFgIAJgIIAYgbIAYgdIAAgCIANAlIARAsgAifBJIAwg5Qg1gxgVgWIA5AKQAgAEAUAFIACAAIglA0IAUAdQAWAgAEADIACACQgYAAgsAEIgtAIIARgVgABcgLIgIgsQATABAjAGIAwAFIgvAiIguAfIgBghgABUg3Ig+gRQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAIAggpQAWgdAPgRQgEAegEBMIAAAAg");
	this.shape_4.setTransform(-42.5,-212.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#AB0A0A").s().p("AgSChQACgDAageIAhghQASAAAhAEQAcADALAAQghAigjASQghAIgiAAIgQgBgAh9B+QgJgFgLgJQgLgKgIgJIAtgHQAsgEAYAAQgWAagWAYIgGAHQgLgDgNgKgACsAfQgggGgjgEIAugfIAvghQAAANgCANQAAAPgGAJQgEAOgFALQgEgBgFAAgAiEAMIhBgHQAAgNACgLQAGgUAQgRQAVAWA1AygAgqg/IARgWIACAAQAzALAGACIgnAdQgBABAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAIg1AFQAAgBAUgagABoihQAWACAQALQALAHAKAKQgVAWguA1QAEhLAEgeg");
	this.shape_5.setTransform(-43.7,-212.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C90A0A").s().p("AgpCeQgegFgdgNIAFgIQAWgXAWgaIACAFQAAABAAAAQABABAAAAQAAAAAAABQABAAAAABIAJAaQAPAhAEALIgWgEgAB3A7IgNglQAjAEAfAFQAGAAADACQgMAdgTAYIgPARIgQgsgAi5A5QgJgYgCgLQgCgJACgIIBAAIIAhADIgvA6IgRAUQgLgLgLgagAg/gjQgVgGgfgDIg5gLQAQgTAegNIAHgCIAGgDQAdgGAhAGQARADAJAEIgQAWQgVAaAAACgACWgwQgjgGgSgBQAug2AUgWQAWAYAIAnQAFAWAAAEIgwgGgAgXhVIASgbQAWgcARgHQAHgEAIgCQAdgJAaACQgPAQgWAeIgfAoQgBAAAAAAQAAAAAAABQgBAAAAAAQAAABAAAAQgFgCg0gLg");
	this.shape_6.setTransform(-43.8,-212.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#EB617C").ss(2,1,1).p("AhygLIA+gYIAMgFQgKgcgFgOQAaABA5AJABpA8IAKAX");
	this.shape_7.setTransform(-27.2,-210.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#DD7809").ss(2,1,1).p("AAThaQALACAMACQAnAHAtANIAmAMIg5AzIgHAEIgPAOIAHASIAEAJABpBAIAMAbIhVgSQhXgWgbgSQgagRgdgQQgYgOgCgBIAngP");
	this.shape_8.setTransform(-26.2,-208.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FDBF2F").s().p("AglA/QgjgMgMgRIAEgGQAzARAuAKIAJAXQglgGgagJgAg+gOQAKghgGgeIAXAFQAmAGAsANIAnAMIg6AxQgsgJgugNg");
	this.shape_9.setTransform(-18.3,-209.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F8A305").s().p("AA4BOQhYgWgagSQgagRgegSIgZgNIAngPQA/AZA6AUIgFAGQAMARAjAMQAaAIAoAGIAMAbgAgmgxIAMgEIgQgqQAbAAA5AKQAGAegJAgQgngMgmgOg");
	this.shape_10.setTransform(-28.6,-208.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F5D1DB").s().p("AhFgKIA+gYQAlAOAoAMIgDAIIgFAOIgGALIgEAKQg6gUg/gZg");
	this.shape_11.setTransform(-31.7,-210.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFECF1").s().p("Ag2AIIAFgIIAFgKIAGgPIADgJQArANAvALIgIAGIgPAMIAIATIADAIQgtgKg0gRg");
	this.shape_12.setTransform(-21,-207.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#EB617C").ss(2,1,1).p("Ag+BRIAGAYIAKAcIAQgUQAUgZAQgXQA3hJAFggQACgNAJgWQAKgYAAgBQAGgTAAgLIgmANIg+AXIgMAFQgKgdgGgOQgTASgmAt");
	this.shape_13.setTransform(-53.1,-196.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#DD7809").ss(2,1,1).p("AAchKQgHAJgJAKQgWAegaAlIgVAhIBLACIAKAAIAUABIAHATIADAI");
	this.shape_14.setTransform(-65.4,-195.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F8A305").s().p("Ag4BoQAbgdAOgYQARgggCgTIgFgCQAdg0Afg/IAngNQgBALgGATIgKAZQgIAXgDAMQgFAgg4BJIgjAvIgQAUgAhdhEQAnguATgRIAQApIANgEQgVAlgWAiQgdgSgPgbg");
	this.shape_15.setTransform(-53.1,-196.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FDBF2F").s().p("AAaBAQAcgnAdgsIAHACQACASgTAhQgOAXgaAegAhZAiIAVgiQAaglAYgeIAQgTQAMAbAdASQgZAogaAlg");
	this.shape_16.setTransform(-62.2,-194.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F5D1DB").s().p("AgSA1IgLgFIgOgHIgIgGQAWgiAUgjIA9gWQgeA8geA1IgKgEg");
	this.shape_17.setTransform(-52.9,-202.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFECF1").s().p("AgKAsIgHgTIgUgBIgKAAQAcgkAXgoIAIAFIAPAIIALAFIAKAEQgdAsgaAng");
	this.shape_18.setTransform(-58.7,-193.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#DD7809").ss(2,1,1).p("AikgFQgKApgEAiQgDAlAGAIQALAQCPgNQA3gFAzgIQA1gIATgHQAKgDAHgiQABgCABgBQAHgjgFgHQgKgLgrgZQgngXg0gYQgzgYgogNQgsgPgMAFQgMAEgPAjQgCAGgDAHQgFANgEAQQgCAFgBAGQgBABAAABQAAACgBADQgDAIgCAJIAAAAIAAAB");
	this.shape_19.setTransform(-57.5,-211.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F8A305").s().p("AisA4QgGgIADglQAEggAKgrIAAANQgCARAHAUQAOAkBIgFIBcgKQBfgIA8gDQgHAggKADQgTAHg1AIQgzAIg3AFQhAAGgmAAQguAAgGgJg");
	this.shape_20.setTransform(-57.8,-206);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FDBF2F").s().p("AimBDQgHgUACgRIAAgNQA0gBBOATQAwANBAAXQgDgCA+gYIAGgCIgIAAQgdgahEgWQhRgehmgLIAFgNQAOgjAMgEQANgFAsAPQAoANAyAYQA0AYAoAXQArAXAKANQAEAHgHAjIgBADQg9ADhfAKIhbAKIgQAAQg6AAgMghg");
	this.shape_21.setTransform(-56.8,-214.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFECF1").s().p("AgWAXQhOgTg1ABIAAAAIAAgBIAFgPIABgFIABgCIADgLQAEgQAFgNQBnALBRAeQBDAWAdAaIAIAAIgFACQg/AYAEACQhAgXgwgNg");
	this.shape_22.setTransform(-58.6,-213.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FA89A3").s().p("AgBAHIADgOIgDAPg");
	this.shape_23.setTransform(-73.8,-213.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#DD7809").ss(2,1,1).p("ABShuQAjAbAZAXQAbAaABALQABATh1BPQgwAhgpAbQgvAbgSAHQgKAEgbgVQgCgBgBgBQgdgWAAgIQgCgRARgvQAPgqAZgxQAYg1AXgjQAYgnAMgFQAMgEAgARQAFADAHADQAMAIAPAIQAEAEAFAEQABAAAAAAQADACACACQAHAEAHAFIAAABIABAA");
	this.shape_24.setTransform(-30.4,-221.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F8A305").s().p("AiZB7QAwglBPg2IBMgyQA6gqgOgmQgHgTgMgMIgJgKQAjAaAZAYQAbAaABAKQABAUh1BPQguAhgrAaQgvAcgSAGIgEABQgLAAgWgRg");
	this.shape_25.setTransform(-28.8,-218.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FDBF2F").s().p("AhvCfQgdgXAAgIQgCgQARgvQAPgrAZgxQAYg0AXgjQAYgoAMgFQAKgEAiARIAMAHQhFBKgsBKQgkA+gGAmIgGAFIAFgCQBAgWgBAFQAig7AcgoQAvhAApghIAJAKQAMAMAHATQAOAmg6AoIhOA0QhNA2gwAlIgDgCg");
	this.shape_26.setTransform(-33.3,-222);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFECF1").s().p("AhnB6QAHgmAkg+QArhKBGhKIAbAQIAJAHIABABIAEADIAPAKIABAAIAAABQgpAhgwA+QgbAqgjA7QABgFg/AWIgGACIAGgFg");
	this.shape_27.setTransform(-33.1,-223.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FA89A3").s().p("AgGgDIANAHIAAABIgNgIg");
	this.shape_28.setTransform(-22.9,-232.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(2,1,1).p("AoTDvQgKgnATg2QA5hkBqhXQBCg2BSgtQBEgjA9gWQCUgzCJgEQCMgFB7AuQAbAKAMASQAIALANAWQAIAKABAMQgygTg4gNQhRgRhMABQiqABhsAnQifA6iOBeQitB2gvB3QgDgHgBgHg");
	this.shape_29.setTransform(-31.5,-196.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E7720A").s().p("AoVDRQBojfGJieQBVgeBXgLQA+gJBWAAQB/gBBxAsQAIAJACAMQgygTg5gNQhQgQhMAAQirAChsAnQieA5iOBgQitB0gvB4QgDgHgCgIg");
	this.shape_30.setTransform(-31.3,-193.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FD8D04").s().p("AoFCZQA5hkBqhXQBCg2BSgsQBEgkA9gVQCUg0CJgEQCMgEB7AtQAbALAMARQAIALANAXQhygsh/ABQhVAAg+AJQhXALhWAeQmICchoDhQgKgmATg3g");
	this.shape_31.setTransform(-32,-196.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#800000").s().p("AoTFCQgKgnATg2QA2hfBjhVQg7ABgIgKQgGgIAEgjQAEgiAKgrIgBAAIABgBIgBAAIAFgRIACgFIAAgCIADgLQAEgQAGgNIAFgNQAOgjAMgEQANgFAsAPQAaAIAfAOIALgGIAHgCIAGgDQAdgGAhAGQARADAJAEIACAAIASgbQAWgaAQgIQASgjAQgZQAYgoAMgFQAMgEAgARIAMAHIAbAQIAJAHIABABIAFADIAOAKIAAAAIABAAIAAABQAjAaAZAYQAbAaABAKQABAIgRAQIAmgCQCMgFB7AuQAbAKAMASQAIALANAWQAIAKABAMQgygTg4gNQhRgRhMABIg5ACIg3AxIgIAGIgPAOIAIASIADAHIAKAWIALAbIhUgSQgpgKgcgJIgEAEIgBAAQggAhgjATQgoAJgsgCIgCAAIgVgDQgPAcgfArIgmAwIgQAUIgJgcIgHgXIgDgJIgHgTIgUgBIgKAAIgkAAQiDBkgpBmQgDgHgBgHg");
	this.shape_32.setTransform(-31.5,-204.4);

	this.instance = new lib.xespeiyou_com__1_198_3078("synched",12);
	this.instance.setTransform(-2.3,-27.5,0.748,0.748,0.5,0,0,142.1,289.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(2,1,1).p("AGMrpQB7LOh2HGQgQA5gRAqQgDALgEAJQgfBDgtA1QgqAug2AgQgLAFgJAGQgmgLgkgPQjvhcjHi8QgRgvgjh/QgjiAgWk3QgJhXAGizQAGizAYiR");
	this.shape_33.setTransform(-63.4,-69.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#09B5A8").s().p("AkXHOQgRgvgjh/QgjiAgXk3QgJhXAHizQAGizAYiRILNAIQBMJQhGI5QglCghXBbQgjAmgsAYQjvhcjHi7g");
	this.shape_34.setTransform(-69.7,-70.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#4BCDC4").s().p("Ai0LUQAsgYAjgmQBXhbAjigQBGo5hMpQIBnAAQB8LPh2HFQgRA6gQAqIgIAUQgfBDgsA1QgpAug1AgIgUALQgngMgjgPg");
	this.shape_35.setTransform(-35.6,-68.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#09B5A8").s().p("ABfLYQjvhcjHi7QgRgvgjh/QgjiAgWk3QgJhXAGizQAGizAYiRIM1AIQB7LPh2HFQgQA6gRAqIgHAUQgfBDgtA1QgqAug2AgIgUALQgmgMgkgPg");
	this.shape_36.setTransform(-63.4,-69.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(2,1,1).p("AmJrYQhBJtBbIsQASBDAWAzQAfBMA0A3QAWAaAcAWQEEhaDXjJQAUgTAVgUQAUgUASgUQAEgLACgNQAJgpAJgqQAjjWACkjQAAgJAAgIQAAgsgCguQgBgcgCgbQgCgegCgbQgNiYgYiK");
	this.shape_37.setTransform(60.1,-69.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#4BCDC4").s().p("AA9mOIAAg4IADA4IADA3QADAvAAAsIAAAQQgCEjgjDWIgTBUQgCAMgDALIglApIgpAmQCKlygInjg");
	this.shape_38.setTransform(95.3,-69.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#09B5A8").s().p("AjwK6Qg0g3gfhMQgWgzgShDQhbosBBptIMAgRQAYCKANCYIAAA5QAJHiiMFzQjXDJkEBaQgcgWgWgag");
	this.shape_39.setTransform(59.7,-69.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#09B5A8").s().p("Aj0K6Qg0g3gfhMQgWgzgShDQhbosBBptIMAgRQAYCKANCYIAEA5IADA3QACAuAAAsIAAARQgCEjgjDWIgSBTQgCANgEALIgmAoIgpAnQjXDJkEBaQgcgWgWgag");
	this.shape_40.setTransform(60.1,-69.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#FFFFFF").ss(10,1,1).p("AK6vJQi4jAkYhCQhmgWhpgCQh3AAhmAUQi/AniWBiQglAYghAbQgjgLgJAEQgNAEgPAjQgDAHgDAGQgDAOgGANQgCAEAAAGQjxD8hVHSIgFAAQgaChgGC2QgDBNAABVQAOFgA5DqQAOA0AQAwQDoDXEgBZQAHgGAHgDQA2ggAqguQAsg1AghDQAEgJADgLQANghANgpQAlAEAnAEQCMAQCRgNQA2gFAwgGQAPgCAMgBQATBCAWA0QAfBLA0A3QASAXAXASQEfhkDojmQAagaAagbQAAgCAAgCQAJgpAJgqQAjjWACklQAAgJAAgHQAAgtgCguQgCgbgBgcQgCgdgCgcQgHhVgMhTQgDgogIgnQAAgEgBgDQABgCAAgCQgbixgyiTIABAAQg4iihQh8QgzhNg9hBg");
	this.shape_41.setTransform(-3.1,-118.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#F5B32A").s().p("Au/O0QgQgwgNg0Qg6jqgOlgQAAhVADhNQAGi2AaihIAFAAQBVnSDxj8QAAgGADgEQAFgNAEgOIAFgNQAPgjANgEQAJgEAjALQAhgbAlgYQCWhiC/gnQBmgUB3AAQBpACBmAWQEXBCC5DAQA8BBA0BNQBQB8A5CiIgCAAQAyCTAbCxIgBAEQABADAAAEQAHAnAEAoQAMBTAGBVIAFA5IADA3QACAuAAAtIAAAQQgCElgjDWIgTBTIAAAEIgzA1QjoDmkfBkQgXgSgTgXQgzg3gfhLQgXg0gShCIgbADIhmALQiRANiNgQIhLgIQgMApgOAhIgHAUQggBDgrA1QgrAug2AgQgHADgHAGQkfhZjpjXg");
	this.shape_42.setTransform(-3.1,-118.5);

	this.addChild(this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.instance,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-114.2,-248.7,222.3,260.5);


(lib.xespeiyou_com__1_33_57291 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.xespeiyou_com__1_200_75500("synched",0);
	this.instance.setTransform(-1.5,-119.1,1.035,1.035,0,0,0,107.4,121.2);

	this.instance_1 = new lib.xespeiyou_com__1_199_83390("synched",0);
	this.instance_1.setTransform(-83.5,-44.4,1,1,0,0,0,28.2,16.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(10,1,1).p("AHfyOQAXDQBCC5QAPgEARgGQAUgFAXgGQBbgXBkgHQA6gGA+gCQAgAAAgAAQARACARAAQgiBCgeA+QgRAogRAoQgNAggLAeQgCAGgCABQgLAigKAgQgcBZgNBVQA+AGBNAWQAsAPArATQACACACAAQAGAEAHAEQACAAAEACQgNANgKAPQgEAGgFAFQggAsgfAtQggAzgeA1QgRAcgRAgQgHANgIANQgEAMgHALQA1gNA2gXQAPgGAQgHQAFgCAIgEQACgCADgCQAAAGAAAEQgDAegEAcQgVCMgcBoQgtCchEBIQBlgEAhBbQAjBtg8BOQg+BRifgGQgaCTjGBVQimA5j9AYQibAPicgNQgGAAgEgCQkIgWirg7QjFhVgciTQieAIg/hTQg8hMAkhtQAihkB1ANQAAgCgCgCQgCgEgCgDQh+j9AFlIQACi0AqjJQALg1ANg3QACgJACgIIACgEQALBGA9AzQAFgNAGgNQAghIAohCQAzhTBAhNQBWhsBwhbIACgBQACAAAAgCQAggZAggYQACgCADgCIAAgCQAXgPAXgPQgTBzAPBRQAPgLAPgOQARgLARgPQF7kVGjhsQANgCANgEQACAsAGArg");
	this.shape.setTransform(-1.2,-119.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F5B32A").s().p("Ai3TfQgGAAgEgCQkIgWirg7QjFhVgciTQieAIg/hTQg8hMAkhtQAihkB1ANIgCgEIgEgHQh+j9AFlIQACi0AqjJQALg1ANg3IAEgRIACgEQALBGA9AzIALgaQAghIAohCQAzhTBAhNQBWhsBwhbIACgBQAAAAABAAQAAAAAAgBQAAAAABAAQAAgBAAAAIBAgxIAFgEIAAgCIAugeQgTBzAPBRQAPgLAPgOQARgLARgPQF7kVGjhsQANgCANgEQACAsAGArQAXDQBCC5IAggKIArgLQBbgXBkgHQA6gGA+gCIBAAAQARACARAAQgiBCgeA+IgiBQIgYA+QgCAGgCABIgVBCQgcBZgNBVQA+AGBNAWQAsAPArATIAEACIANAIIAGACQgNANgKAPIgJALQggAsgfAtQggAzgeA1IgiA8IgPAaQgEAMgHALQA1gNA2gXIAfgNQAFgCAIgEIAFgEIAAAKIgHA6QgVCMgcBoQgtCchEBIQBlgEAhBbQAjBtg8BOQg+BRifgGQgaCTjGBVQimA5j9AYQhUAJhSAAQhJAAhIgHgAudJNQAVADAXAGQgXgHgVgEQgLgCgLAAIAWAEg");
	this.shape_1.setTransform(-1.2,-119.6);

	this.addChild(this.shape_1,this.shape,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-117.5,-250,232.7,260.8);


(lib.xespeiyou_com__1_30_95768 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//
		///* 在此帧处停止
		//Flash 时间轴将在插入此代码的帧处停止/暂停。
		//也可用于停止/暂停影片剪辑的时间轴。
		//*/
		//
		//stop();
		//
	}
	this.frame_1 = function() {
		//
		///* 在此帧处停止
		//Flash 时间轴将在插入此代码的帧处停止/暂停。
		//也可用于停止/暂停影片剪辑的时间轴。
		//*/
		//
		//stop();
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgVA2QAVgIAIgPQAGgLACgSIgWAAIAAgHIBRAAIgBAoQgCAYgUAAIgXgBIgBgLIAVACQANAAACgPIABggIgnAAQgCAVgGANQgLARgUAKIgIgJgAhlAyIAAgMQAKAGALAAQAKAAAGgGQAGgFAAgKQAAgJgGgFQgGgGgMAAIgPABIAAgwIAvAAIAAALIgkAAIAAAcIAIAAQAQAAAJAGQAIAIAAANQAAAPgJAJQgKAIgQAAQgOAAgHgEgAgYgJQAYgTATggIAJAFQgUAigYAUIgIgIgAAsg6IAJgEQAOAiAjARIgJAKQgigVgPgkg");
	this.shape.setTransform(-25.7,-65.3,1,1,0,0,0,-2.1,-1.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ah1B2QgxgxAAhFQAAhEAxgxQAxgxBEAAQBFAAAxAxQAxAxAABEQAABFgxAxQgxAxhFAAQhEAAgxgxg");
	this.shape_1.setTransform(-24.9,-64.6,0.731,0.731);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(2));

	// 图层 1
	this.instance = new lib.xespeiyou_com__1_35_44865();
	this.instance.setTransform(1.7,-35.1,0.222,0.222,0,0,0,0,-118.7);

	this.instance_1 = new lib.xespeiyou_com__1_27_72946();
	this.instance_1.setTransform(0,-35.9,1,1,0,0,0,0,-35.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.4)").s().p("Aj8D9QhphqAAiTQAAiTBphpQBphpCTAAQCUAABpBpQBpBpAACTQAACThpBqQhpBpiUAAQiTAAhphpg");
	this.shape_2.setTransform(-0.1,-35.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.1,-76.8,72.9,76.9);


(lib.xespeiyou_com__1_29_87164 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//
		///* 在此帧处停止
		//Flash 时间轴将在插入此代码的帧处停止/暂停。
		//也可用于停止/暂停影片剪辑的时间轴。
		//*/
		//
		//stop();
		//
	}
	this.frame_1 = function() {
		//
		///* 在此帧处停止
		//Flash 时间轴将在插入此代码的帧处停止/暂停。
		//也可用于停止/暂停影片剪辑的时间轴。
		//*/
		//
		//stop();
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgQA2QAUgIAJgPQAGgLACgSIgWAAIAAgHIBRAAIgBAoQgCAYgUAAIgXgBIgBgLIAVACQANAAACgPIABggIgnAAQgCAVgGANQgLARgUAKIgIgJgAg8A1IAAgaIguAAIAAgIIArg/IAPAAIAAA9IAMAAIAAAKIgMAAIAAAagAhAgYIgdApIAhAAIAAgnIAAgKIgEAIgAgTgJQAYgTATggIAJAFQgUAigYAUIgIgIgAAxg6IAJgEQAOAiAjARIgJAKQgigVgPgkg");
	this.shape.setTransform(-24,-65.3,1,1,0,0,0,0.1,-1.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ah1B2QgxgxAAhFQAAhEAxgxQAxgxBEAAQBFAAAxAxQAxAxAABEQAABFgxAxQgxAxhFAAQhEAAgxgxg");
	this.shape_1.setTransform(-24.9,-64.6,0.725,0.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(2));

	// 图层 1
	this.instance = new lib.xespeiyou_com__1_34_56724();
	this.instance.setTransform(0.9,-34.9,0.222,0.222,0,0,0,0,-118.7);

	this.instance_1 = new lib.xespeiyou_com__1_27_72946();
	this.instance_1.setTransform(0,-35.9,1,1,0,0,0,0,-35.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.4)").s().p("Aj8D9QhphqAAiTQAAiTBphpQBphpCTAAQCUAABpBpQBpBpAACTQAACThpBqQhpBpiUAAQiTAAhphpg");
	this.shape_2.setTransform(-0.1,-35.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37,-76.7,72.8,76.8);


(lib.xespeiyou_com__1_28_83199 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//
		///* 在此帧处停止
		//Flash 时间轴将在插入此代码的帧处停止/暂停。
		//也可用于停止/暂停影片剪辑的时间轴。
		//*/
		//
		//stop();
		//
	}
	this.frame_1 = function() {
		//
		///* 在此帧处停止
		//Flash 时间轴将在插入此代码的帧处停止/暂停。
		//也可用于停止/暂停影片剪辑的时间轴。
		//*/
		//
		//stop();
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgWA2QAVgIAHgPQAHgLABgSIgWAAIAAgHIBSAAIgCAoQgBAYgVAAIgWgBIgCgLIAWACQANAAABgPIABggIgnAAQgBAVgHANQgKARgVAKIgHgJgAhjA1IAAgLIAWAAIAAhJIgWAHIAAgMIAjgKIAABYIAWAAIAAALgAgagJQAagTARggIAJAFQgTAigZAUIgIgIgAAqg6IAJgEQAOAiAjARIgIAKQgjgVgPgkg");
	this.shape.setTransform(-23.8,-63.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ah1B2QgxgxAAhFQAAhEAxgxQAxgxBEAAQBFAAAxAxQAxAxAABEQAABFgxAxQgxAxhFAAQhEAAgxgxg");
	this.shape_1.setTransform(-24.9,-64.6,0.731,0.731);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(2));

	// 图层 1
	this.instance = new lib.xespeiyou_com__1_33_57291();
	this.instance.setTransform(0.1,-36.1,0.215,0.215,0,0,0,0,-118.8);

	this.instance_1 = new lib.xespeiyou_com__1_27_72946();
	this.instance_1.setTransform(0,-35.9,1,1,0,0,0,0,-35.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.4)").s().p("Aj8D9QhphqAAiTQAAiTBphpQBphpCTAAQCUAABpBpQBpBpAACTQAACThpBqQhpBpiUAAQiTAAhphpg");
	this.shape_2.setTransform(-0.1,-35.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.1,-76.8,72.9,76.9);


(lib.xespeiyou_com__1_20_46043 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.xespeiyou_com__1_18_62926();
	this.instance.setTransform(29.4,-84.5,1,1,0,0,0,-0.1,-59.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9,-165.1,101.7,148.7);


(lib.xespeiyou_com__1_19_23360 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.xespeiyou_com__1_16_70906();
	this.instance.setTransform(29.4,-84.5,1,1,0,0,0,-0.1,-59.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9,-184.9,187.9,168.5);


(lib.xespeiyou_com__1_12_25897 = function() {
	this.initialize();

	// 图层 2
	this.instance = new lib.xespeiyou_com__1_146_98839();
	this.instance.setTransform(18.6,-77,0.392,0.392,0,0,0,105.2,162.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-18.9,-140.6,89.7,128.3);


(lib.xespeiyou_com__1_11_92780 = function() {
	this.initialize();

	// 图层 2
	this.instance = new lib.xespeiyou_com__1_142_24406();
	this.instance.setTransform(18.6,-77,0.392,0.392,0,0,0,105.2,162.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-18.7,-163.4,165.2,151.1);


(lib.xespeiyou_com__1_10_36146 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_47 = function() {
		this.stop()/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(47).call(this.frame_47).wait(1));

	// 图层 1
	this.instance = new lib.xespeiyou_com__1_67_19046("synched",0);
	this.instance.setTransform(1.1,-27.6,1,1,0,0,0,-0.4,-5.9);

	this.instance_1 = new lib.xespeiyou_com__1_91_80648("synched",0);
	this.instance_1.setTransform(0.2,-32.8,1,1,0,0,0,-1.1,-4.5);

	this.instance_2 = new lib.xespeiyou_com__1_163_72907("synched",0);
	this.instance_2.setTransform(9.9,-56.5,0.255,0.255,0,0,0,19.2,27.7);

	this.instance_3 = new lib.xespeiyou_com__1_167_82216("synched",0);
	this.instance_3.setTransform(4.1,-78.4,0.255,0.255,0,0,0,156.1,100.8);

	this.instance_4 = new lib.xespeiyou_com__1_161_34394("synched",0);
	this.instance_4.setTransform(-27.8,-62.3,0.255,0.255,0,0,0,8.8,12.6);

	this.instance_5 = new lib.xespeiyou_com__1_169_43262("synched",0);
	this.instance_5.setTransform(-27,-42.6,0.255,0.255,0,0,0,9.2,1.8);

	this.instance_6 = new lib.xespeiyou_com__1_173_55484("synched",0);
	this.instance_6.setTransform(-31.2,-48.4,0.255,0.255,0,0,0,3.6,7.9);

	this.instance_7 = new lib.xespeiyou_com__1_175_29703("synched",0);
	this.instance_7.setTransform(-20.8,-58.2,0.255,0.255,0,0,0,33.4,50.2);

	this.instance_8 = new lib.xespeiyou_com__1_171_94366("synched",0);
	this.instance_8.setTransform(-4.4,-67.6,0.255,0.255,0,0,0,106.5,117.9);

	this.instance_9 = new lib.xespeiyou_com__1_165_84643("synched",0);
	this.instance_9.setTransform(4.1,-78.4,0.255,0.255,0,0,0,156.1,134.7);

	this.instance_10 = new lib.xespeiyou_com__1_89_50491("synched",0);
	this.instance_10.setTransform(-1.4,-25.4,1,1,0,0,0,0,-0.1);

	this.instance_11 = new lib.xespeiyou_com__1_87_51262("synched",0);
	this.instance_11.setTransform(6.2,-10.5,1,1,0,0,0,5.2,-5);

	this.instance_12 = new lib.xespeiyou_com__1_69_6699("synched",0);
	this.instance_12.setTransform(-1.9,-11.4,1,1,0,0,0,2.2,-3.8);

	this.instance_13 = new lib.xespeiyou_com__1_52_91684("synched",0);
	this.instance_13.setTransform(-0.4,-14.6,1,1,0,0,0,-0.1,-1.8);

	this.instance_14 = new lib.xespeiyou_com__1_83_55688("synched",0);
	this.instance_14.setTransform(-3.3,-22.6,1,1,0,0,0,0.1,-7.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.298)").s().p("AhBALQgbgFAAgGQAAgFAbgFQAcgFAlAAQAmAAAcAFQAbAFAAAFQAAAGgbAFQgcAFgmAAQglAAgcgFg");
	this.shape.setTransform(-0.8,-1.1,0.984,0.984);

	this.instance_15 = new lib.xespeiyou_com__1_67_19046("synched",0);
	this.instance_15.setTransform(2.6,-36.3,1,1,132.3,0,0,-0.4,-5.9);

	this.instance_16 = new lib.xespeiyou_com__1_91_80648("synched",0);
	this.instance_16.setTransform(7.1,-33.3,1,1,132.3,0,0,-1,-4.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(0,0,0,0.498)").ss(1,1,1).p("AAmABIgJgGQgMgKgLgJQgHgHgGgEQgUgEgLAOQgNAPAQASQAmAZAPAEQAOADAIgLQALgNgNgPg");
	this.shape_1.setTransform(4.2,-34.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AASAlQgPgEgmgZQgQgSANgPQALgOAUAEIANALIAXATIAJAGQANAPgLANQgGAIgKAAIgGAAg");
	this.shape_2.setTransform(4.2,-34.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(0,0,0,0.498)").ss(1,1,1).p("AgPAjIAMgFQAMgGANgHQAJgFAGgEQAMgOgIgQQgIgTgZAHQglAagKAKQgIAMAHAMQAHAPASgGg");
	this.shape_3.setTransform(10.8,10.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgoAaQgHgMAIgMQAKgKAlgaQAZgHAIATQAIAQgMAOIgPAJIgZANIgMAFIgJACQgLAAgFgLg");
	this.shape_4.setTransform(10.8,10.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("rgba(0,0,0,0.498)").ss(1,1,1).p("AgZAdIAMgBQAOgBAOgCQALgCAHgBQAQgLgCgRQgCgUgZgCQgsAMgNAIQgMAIADAMQABARAUAAg");
	this.shape_5.setTransform(15.7,159.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AguAMQgDgMAMgIQANgIAsgMQAZACACAUQACARgQALIgSADIgcADIgMABQgUAAgBgRg");
	this.shape_6.setTransform(15.7,159.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_14,p:{rotation:0,x:-3.3,y:-22.6}},{t:this.instance_13,p:{rotation:0,x:-0.4,y:-14.6}},{t:this.instance_12,p:{regY:-3.8,rotation:0,x:-1.9,y:-11.4,regX:2.2}},{t:this.instance_11,p:{regX:5.2,rotation:0,x:6.2,y:-10.5}},{t:this.instance_10,p:{regX:0,regY:-0.1,rotation:0,x:-1.4,y:-25.4}},{t:this.instance_9,p:{regY:134.7,rotation:0,x:4.1,y:-78.4,regX:156.1}},{t:this.instance_8,p:{rotation:0,x:-4.4,y:-67.6,regX:106.5,regY:117.9}},{t:this.instance_7,p:{regY:50.2,rotation:0,x:-20.8,y:-58.2,regX:33.4}},{t:this.instance_6,p:{regX:3.6,rotation:0,x:-31.2,y:-48.4,regY:7.9}},{t:this.instance_5,p:{regX:9.2,regY:1.8,rotation:0,x:-27,y:-42.6}},{t:this.instance_4,p:{rotation:0,x:-27.8,y:-62.3,regX:8.8,regY:12.6}},{t:this.instance_3,p:{regX:156.1,regY:100.8,rotation:0,x:4.1,y:-78.4}},{t:this.instance_2,p:{regX:19.2,regY:27.7,rotation:0,x:9.9,y:-56.5}},{t:this.instance_1,p:{regY:-4.5,rotation:0,x:0.2,y:-32.8}},{t:this.instance,p:{rotation:0,x:1.1,y:-27.6}}]}).to({state:[{t:this.shape},{t:this.shape_2},{t:this.shape_1},{t:this.instance_14,p:{rotation:73.2,x:0.4,y:-17.8}},{t:this.instance_12,p:{regY:-3.7,rotation:73.2,x:-10,y:-13.3,regX:2.2}},{t:this.instance_16,p:{regX:-1,regY:-4.6,rotation:132.3,x:7.1,y:-33.3}},{t:this.instance_15,p:{rotation:132.3,x:2.6,y:-36.3}},{t:this.instance_13,p:{rotation:0,x:-0.4,y:-14.6}},{t:this.instance_11,p:{regX:5.2,rotation:0,x:6.2,y:-10.5}},{t:this.instance_10,p:{regX:3.1,regY:13,rotation:21.7,x:1.7,y:-12.3}},{t:this.instance_9,p:{regY:134.8,rotation:24.9,x:30.5,y:-71.2,regX:156.1}},{t:this.instance_8,p:{rotation:24.9,x:18.2,y:-65,regX:106.5,regY:117.9}},{t:this.instance_7,p:{regY:50.4,rotation:24.9,x:-0.6,y:-63.3,regX:33.4}},{t:this.instance_6,p:{regX:3.5,rotation:24.9,x:-14.2,y:-58.8,regY:7.9}},{t:this.instance_5,p:{regX:9.1,regY:1.9,rotation:24.9,x:-12.9,y:-51.8}},{t:this.instance_4,p:{rotation:24.9,x:-5.2,y:-70,regX:8.8,regY:12.6}},{t:this.instance_3,p:{regX:155.9,regY:100.9,rotation:24.9,x:30.5,y:-71.2}},{t:this.instance_2,p:{regX:19.3,regY:27.6,rotation:24.9,x:26.5,y:-48.8}},{t:this.instance_1,p:{regY:-4.6,rotation:112.3,x:8.2,y:-30.9}},{t:this.instance,p:{rotation:112.3,x:3,y:-32.1}}]},4).to({state:[{t:this.instance_9,p:{regY:136.5,rotation:139.2,x:34.3,y:49.8,regX:153.7}},{t:this.shape_4},{t:this.shape_3},{t:this.instance_14,p:{rotation:-172.5,x:-2.3,y:0.5}},{t:this.instance_12,p:{regY:-3.7,rotation:-172.5,x:-2.3,y:-10.9,regX:2.2}},{t:this.instance_16,p:{regX:-1.1,regY:-4.7,rotation:-113.5,x:8.9,y:13}},{t:this.instance_15,p:{rotation:-113.5,x:13.5,y:10.1}},{t:this.instance_13,p:{rotation:114.3,x:-5,y:-1.6}},{t:this.instance_11,p:{regX:5.3,rotation:114.3,x:-11.5,y:2.9}},{t:this.instance_10,p:{regX:3,regY:13,rotation:136,x:-7.8,y:-0.6}},{t:this.instance_1,p:{regY:-4.7,rotation:-133.4,x:6.3,y:13.1}},{t:this.instance,p:{rotation:-133.4,x:9.6,y:8.7}},{t:this.instance_8,p:{rotation:139.2,x:32.9,y:35.8,regX:105.5,regY:119}},{t:this.instance_7,p:{regY:50.2,rotation:139.2,x:39.6,y:18.3,regX:32.1}},{t:this.instance_6,p:{regX:4.5,rotation:139.2,x:40.6,y:4.1,regY:10.1}},{t:this.instance_5,p:{regX:10.1,regY:3.3,rotation:139.2,x:34.1,y:2.1}},{t:this.instance_4,p:{rotation:139.2,x:47.3,y:16.8,regX:9.6,regY:12.7}},{t:this.instance_3,p:{regX:153.9,regY:98.7,rotation:139.2,x:34.3,y:49.8}},{t:this.instance_2,p:{regX:20.7,regY:25.1,rotation:139.2,x:15.5,y:37.3}}]},3).to({state:[{t:this.shape_6,p:{x:15.7,y:159.4}},{t:this.shape_5,p:{x:15.7,y:159.4}},{t:this.instance_14,p:{rotation:-152.8,x:6.8,y:145.6}},{t:this.instance_12,p:{regY:-3.8,rotation:-152.8,x:10.6,y:135,regX:2.3}},{t:this.instance_16,p:{regX:-1.1,regY:-4.8,rotation:-93.7,x:13,y:161.2}},{t:this.instance_15,p:{rotation:-93.7,x:18.4,y:160}},{t:this.instance_13,p:{rotation:134,x:4.9,y:142.8}},{t:this.instance_11,p:{regX:5.3,rotation:134,x:-2.7,y:144.7}},{t:this.instance_10,p:{regX:3,regY:13.1,rotation:155.7,x:1.9,y:142.7}},{t:this.instance_1,p:{regY:-4.6,rotation:-113.7,x:10.7,y:160.4}},{t:this.instance,p:{rotation:-113.7,x:15.2,y:157.3}},{t:this.instance_9,p:{regY:136.7,rotation:159.5,x:24.5,y:205.1,regX:151.5}},{t:this.instance_8,p:{rotation:159.5,x:28.5,y:192.4,regX:108.5,regY:114.8}},{t:this.instance_7,p:{regY:52.1,rotation:159.5,x:40.5,y:177.4,regX:29.6}},{t:this.instance_6,p:{regX:5.2,rotation:159.5,x:46.4,y:164.4,regY:11}},{t:this.instance_5,p:{regX:10.8,regY:3.8,rotation:159.5,x:40.7,y:160.2}},{t:this.instance_4,p:{rotation:159.5,x:48.4,y:179.1,regX:9.8,regY:10.6}},{t:this.instance_3,p:{regX:153.8,regY:99,rotation:159.5,x:24.5,y:205.1}},{t:this.instance_2,p:{regX:17.9,regY:26,rotation:159.5,x:11.7,y:187.1}}]},3).to({state:[{t:this.shape_6,p:{x:16,y:354}},{t:this.shape_5,p:{x:16,y:354}},{t:this.instance_14,p:{rotation:-152.8,x:7,y:340.2}},{t:this.instance_12,p:{regY:-3.8,rotation:-152.8,x:10.8,y:329.6,regX:2.3}},{t:this.instance_16,p:{regX:-1.1,regY:-4.8,rotation:-93.7,x:13.3,y:355.8}},{t:this.instance_15,p:{rotation:-93.7,x:18.7,y:354.6}},{t:this.instance_13,p:{rotation:134,x:5.2,y:337.4}},{t:this.instance_11,p:{regX:5.3,rotation:134,x:-2.5,y:339.3}},{t:this.instance_10,p:{regX:3,regY:13.1,rotation:155.7,x:2.2,y:337.3}},{t:this.instance_1,p:{regY:-4.6,rotation:-113.7,x:11,y:355}},{t:this.instance,p:{rotation:-113.7,x:15.5,y:351.9}},{t:this.instance_9,p:{regY:136.7,rotation:159.5,x:24.5,y:399.5,regX:151.5}},{t:this.instance_8,p:{rotation:159.5,x:28.5,y:386.9,regX:108.5,regY:114.8}},{t:this.instance_7,p:{regY:52.1,rotation:159.5,x:40.5,y:371.9,regX:29.6}},{t:this.instance_6,p:{regX:5.2,rotation:159.5,x:46.4,y:358.8,regY:11}},{t:this.instance_5,p:{regX:10.8,regY:3.8,rotation:159.5,x:40.7,y:354.7}},{t:this.instance_4,p:{rotation:159.5,x:48.4,y:373.5,regX:9.8,regY:10.6}},{t:this.instance_3,p:{regX:153.8,regY:99,rotation:159.5,x:24.5,y:399.6}},{t:this.instance_2,p:{regX:17.9,regY:26,rotation:159.5,x:11.7,y:381.5}}]},3).wait(35));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.7,-113.8,79.5,114.6);


(lib.xespeiyou_com__1_9_60992 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.xespeiyou_com__1_63_20877();
	this.instance.setTransform(36.8,-66.7,0.397,0.397,0,0,0,205.4,137.5);

	this.instance_1 = new lib.xespeiyou_com__1_149_71773();
	this.instance_1.setTransform(-7.2,-8.2,0.397,0.397,4.2,0,0,13.2,1.8);

	this.instance_2 = new lib.xespeiyou_com__1_151_67841();
	this.instance_2.setTransform(-10.4,-27.8,0.397,0.397,16,0,0,7.5,0.9);

	this.instance_3 = new lib.xespeiyou_com__1_153_35700();
	this.instance_3.setTransform(-6,-31.9,0.397,0.397,57,0,0,6.3,1.4);

	this.instance_4 = new lib.xespeiyou_com__1_155_9151();
	this.instance_4.setTransform(-8.2,-36.7,0.397,0.397,0,0,0,102,227.3);

	this.instance_5 = new lib.xespeiyou_com__1_157_10854();
	this.instance_5.setTransform(-9.1,-11.1,0.397,0.397,0,0,0,23.3,67);

	this.instance_6 = new lib.xespeiyou_com__1_159_4262();
	this.instance_6.setTransform(-6.8,-15.1,0.397,0.397,19,0,0,18.7,2.8);

	this.instance_7 = new lib.xespeiyou_com__1_149_71773();
	this.instance_7.setTransform(-11.8,-9.5,0.397,0.398,0,11.6,13.8,13.4,3.3);

	this.instance_8 = new lib.xespeiyou_com__1_151_67841();
	this.instance_8.setTransform(-3.6,-28.5,0.397,0.397,-26.7,0,0,6.7,1.4);

	this.instance_9 = new lib.xespeiyou_com__1_153_35700();
	this.instance_9.setTransform(-8.2,-32.6,0.397,0.397,-42.5,0,0,5.2,2.2);

	this.instance_10 = new lib.xespeiyou_com__1_159_4262();
	this.instance_10.setTransform(-10.2,-16.1,0.397,0.397,22.8,0,0,19.7,3.8);

	this.instance_11 = new lib.xespeiyou_com__1_160_79378();
	this.instance_11.setTransform(-6.6,0.8,0.397,0.397,0,0,0,33.6,5.8);

	this.addChild(this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-45,-129.1,148.2,132);


(lib.xespeiyou_com__1_8_12975 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.5,1,1).p("AgMAFIgBADIADAMIABAAIAJABIAMgNIACgLIgCgNIgGgEIgGAAIgBAAIgFAJIgEAKIgBACIgBAD");
	this.shape.setTransform(-2.4,-30.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B67903").s().p("AgJAKIABgBIAIgHIAFgLIAFAJIgJAJIgBgHIAAAHIgIABg");
	this.shape_1.setTransform(-2.5,-29.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D48C00").s().p("AgDAEIAAgNIAEABIAEAIIgEAKg");
	this.shape_2.setTransform(-1.5,-31.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFE051").s().p("AgLASIAKgBIgBgGIACAGIAHgLIgEgHIAGAEIADgIIgCALIgKANgAAJgOIgHgBIABAAIAHgDIACANg");
	this.shape_3.setTransform(-2.3,-30.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F7C10D").s().p("AAAACIgFgEIABAAIgBAAIAFAAIAGACIgGADIAAAAg");
	this.shape_4.setTransform(-1.9,-32.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F3DB2C").s().p("AgIAIIABgEIAKAEIgBACIgGAGIgCgGIACAJIgBAAgAgGAAIABgBIALACIgBADgAADgSIAEACIACACIgKACg");
	this.shape_5.setTransform(-3,-30.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgHAMIACAFIAGgFIABgDIgKgEIAAAAIABgDIALADIABgCIgLgDIAEgLIAKgBIgCgCIgEgDIgEAGIADgIIACgBIABABIgBAAIAFAGIAAABIABAMIgIANIgGAIg");
	this.shape_6.setTransform(-2.9,-30.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(0.5,1,1).p("AgPgYQADgCAEgDQAEACAGADQACACADABQANAIABAEQAEAKgJANQgJAMgIADQgGACgEgGQgCgDgDgIQgBgEgBgEQgCgFAAAAIAAgBQgCgCAAgKQAAgFAEgD");
	this.shape_7.setTransform(0.3,-27.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#432377").s().p("AAAAPQgCgDgDgMIgDgKIACgDIABgBQADACADAFQAHAHABACIAAABIAAACQgEABgEgEIgBgBIAAAEIABAKg");
	this.shape_8.setTransform(-0.7,-28.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#7E56BD").s().p("AgMAMIgCgGIAAAAQgBgFAAgHQgBgFAFgEIADANQADAKACACIADAAIgBgJIAAgCIABABQACACAEgBIAAgBIAAAAQgBgEgFgHQgFgGgDgBIAGgFIALAFIAFAHIABAGQACAIgDAIQgDAMgLABIAAAAQgGAAgGgMg");
	this.shape_9.setTransform(-0.4,-28.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#5F3A9A").s().p("AgNAWIgEgLIgDgHQAGANAIgBQAJgBADgMQADgHgCgKIgBgFIgFgHIAFACQAMAJACAEQAEALgKALQgJANgIADIgDAAQgEAAgDgFg");
	this.shape_10.setTransform(0.4,-27.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#5F3A9A").s().p("AgLAZIgFgLIgCgHIgCgHIAAAAQgCgDAAgJQAAgEAEgEIACgDIABgBIAHgEIAKAEIAFADQANAIABAEQAEAKgJANQgJANgIACIgDABQgEAAgDgFg");
	this.shape_11.setTransform(0.3,-27.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D48C00").s().p("AgJAUIgBAAIgDgMIABgDIAAgBIABgFIAFgKIAFgJIABAAIAFAAIAGAEIADANIgDALIgLANg");
	this.shape_12.setTransform(-2.4,-30.7);

	this.instance = new lib.xespeiyou_com__1_163_72907("synched",0);
	this.instance.setTransform(14.5,-55.5,0.274,0.274,0,0,0,18.6,28.9);

	this.instance_1 = new lib.xespeiyou_com__1_167_82216("synched",0);
	this.instance_1.setTransform(8.2,-79.3,0.274,0.274,0,0,0,154.5,100.6);

	this.instance_2 = new lib.xespeiyou_com__1_161_34394("synched",0);
	this.instance_2.setTransform(-26,-62.1,0.274,0.274,0,0,0,8.2,11.8);

	this.instance_3 = new lib.xespeiyou_com__1_169_43262("synched",0);
	this.instance_3.setTransform(-25,-40.7,0.274,0.274,0,0,0,9.5,1.3);

	this.instance_4 = new lib.xespeiyou_com__1_173_55484("synched",0);
	this.instance_4.setTransform(-29.5,-47.1,0.274,0.274,0,0,0,3.6,7.1);

	this.instance_5 = new lib.xespeiyou_com__1_175_29703("synched",0);
	this.instance_5.setTransform(-18.1,-57.6,0.274,0.274,0,0,0,33.6,50.8);

	this.instance_6 = new lib.xespeiyou_com__1_171_94366("synched",0);
	this.instance_6.setTransform(-0.6,-67.6,0.274,0.274,0,0,0,108,117.8);

	this.instance_7 = new lib.xespeiyou_com__1_165_84643("synched",0);
	this.instance_7.setTransform(8.2,-79.3,0.274,0.274,0,0,0,154.5,135.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(0.5,1,1).p("AgbgsQABAOACAJQADAOAFAEQABAAABABQALADAMgDQAIgDAGgFIAAAKQgBAFgBADQgBABgBAAQgBABgBABQgFADgGABQgGABgDgBQgCAAgBAAQAAADABAEQADALABABQAEASAGABQAGABACgPQACgKAAgNQAAgDAAgEAgGAPQgCAAgBgBQgBgCgCgDIgBgGIAAgBQgBgCAAgCAAXgKQAAAAAAgBQAIgJgEgg");
	this.shape_13.setTransform(5.6,-17.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#7E56BD").s().p("AgHANIgDgBIgCgBIgEgFIgBgGIAAAAIgBgFQALAFAMgEQAIgEAGgEIAAALQAAAEgCACIgCABIgCADQgFADgGAAIgFABIgEAAg");
	this.shape_14.setTransform(6,-17);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FCB5A0").s().p("AADAVQgEgBgGgRIgEgLIgBgHIADABIAJgBQAGAAAFgDIACgDIAAAHQAAANgCAIQgBAPgGAAIgBgBg");
	this.shape_15.setTransform(6.2,-14.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgOAfIgCgBQgFgDgDgPQgCgIgBgMQAFgWATgDQARgCANATQAEAdgIAJIAAACQgGAEgIAEQgHACgEAAQgGAAgGgDg");
	this.shape_16.setTransform(5.6,-20.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(0.5,1,1).p("AACA0QAWAAAFgaQgHgwgIgQQgGgNgOABQgSAAgDAVIAAANQgBAQABAOQAAALABAJQAKASASAAg");
	this.shape_17.setTransform(5.4,-25.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgaAiIgBgUQgBgOABgQIAAgNQADgVASAAQAOgBAGANQAIAQAHAwQgFAagWAAIgBAAQgRAAgKgSg");
	this.shape_18.setTransform(5.4,-25.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(0.5,1,1).p("AAvgcQABAAABABIACAbIAAAAQgKAGgJAGQgGADgFADQgPAIgQAGQgDAAgBABQgOADgPADQABgJgBgGQAAgDAAgCQAAgCAAgBQAAgBAAgCQgCgGgCgEQgDgBAAgBQASgBAMgCQAVgDAUgJQACAAAYgOgAgyABIAAgXQAugdAzAX");
	this.shape_19.setTransform(3.2,-33.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FBC2B5").s().p("AgwgDQAugdAzAXIgZAMQgVAJgVADIgeAFg");
	this.shape_20.setTransform(2.9,-35);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgrATIAAgFIAAgDIAAgCQgCgHgCgCIgEgCIAfgEQAVgEAUgIIAagPIABABIAEAbIgBAAQgJAGgKAHIgLAFQgPAJgQAFIgEABIgdAGIAAgPg");
	this.shape_21.setTransform(3.2,-32.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(0.5,1,1).p("AA4iBIAWBNQABAEACAFQACAKACAKQAAABABABQACAHABAHQAAABAAAAQACAJACAKQACAJABAIQACAKABAIQABALAAAHQAAABAAABQAAAIgFAHQgBACgBABIgBAAIgBAPAhbBjQACACAEACQAGAEAJACQAXAJAsACQArAAAcgJQAJgDALgFIADgCQgEAKgIAHQgHAHgHAFAhbBjQgBgDAAgEQgBgBAAgBIAAgBQAAgCAAAAIgBgBQgBgCgBgCQgDgFAAgHIAAgBQgBgHACgMQACgJACgLQABgCAAgDQACgGACgGQACgJADgIQACgGACgHQAEgLAEgMQAAgDACgEIACgHQAEgOAJgVQACgFACgFQAEgLAGgMAg9B/QgUgKgIgOQgBgCgBgC");
	this.shape_22.setTransform(2.5,-21);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#7E56BD").s().p("AgCAQQgsgCgXgIQgJgDgGgDIgGgCIgBgIIgBgCIAAAAIAAgDQAOAIAaAFQAdAEAggBQAwgBAkgPIgBAOIgDABQgLAFgJADQgbAIgqAAIgCAAg");
	this.shape_23.setTransform(2.4,-10.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#321970").s().p("AAEATQgcgBglgLQgUgIgIgOIgCgEIAGAEQAHAEAIACQAYAJArAAQArAAAcgHQAJgDALgFIADgCQgEAKgIAHQgHAFgGAFQgaAKgdAAIgHgBg");
	this.shape_24.setTransform(2.5,-9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("Ag1BwQgagFgOgIIgBAAIgCgFQgDgFAAgHIAAgBQgBgHACgLIAEgUIABgFIAEgNIAFgSIAEgMIAIgXIACgGIACgIQAEgOAJgVIAEgKIAKgWIBhgHIAWBNIADAIIAEAUIABADIADAMIAAABIAEAUIADASIADARIABATIAAABQAAAJgFAHIgCADIgBAAQgkAQgwACIgIAAQgdAAgYgFg");
	this.shape_25.setTransform(2.5,-22.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#321970").s().p("AAEATQgcgBglgLQgUgIgIgOIgCgEIAGAEQAHAEAIACQAYAJArAAQArAAAcgHQAJgDALgFIADgCQgEAKgIAHQgHAFgGAFQgaAKgdAAIgHgBg");
	this.shape_26.setTransform(2.5,-9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgDCHQgsgCgXgJQgJgCgGgEIgGgEIgBgHIgBgCIAAgBIAAgCIgBgBIgCgEQgDgFAAgHIAAgBQgBgHACgMIAEgUIABgFIAEgMIAFgTIAEgLIAIgXIACgHIACgHQAEgOAJgVIAEgKIAIgSIgBgBIABAAIAegEIANgDQAOgDAOgGIAagPIABABIADAbIAAAAIAUBFIADAJIAEAUIABACIADAMIAAABIAEAVIADARIADASIABASIAAACQAAAIgFAHIgCADIgBAAIgBAPIgDACQgLAFgJADQgbAJgpAAIgDAAg");
	this.shape_27.setTransform(2.5,-22.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FBC2B5").s().p("AgwAUIAAgXQAugdAzAXIgZAMQgPAHgOADIgNACIgdAFIgBAAg");
	this.shape_28.setTransform(2.9,-35);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(0.5,1,1).p("AA1goIgGAzQgEABgJABQgFAAgHABQgHAAgHAAQgIAAgGAAQgGgBgFAAIgKgBIgZg4AAWAOIAAAKIAAAEIAAANQgBAEgKAAQgJABgCgFIgDgOIgBgEIgCgJAgEAXIAaAB");
	this.shape_29.setTransform(5.1,0.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgLABIgBgCIAZABIAAACg");
	this.shape_30.setTransform(5.9,3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FCB5A0").s().p("AgLAEIgDgHIAOAAIAPAAIgBAIg");
	this.shape_31.setTransform(5.8,2.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#321970").s().p("AAAA0IgDgOIAYABIAAANQgBAEgJAAIgCABQgIAAgBgFgAgGAZIgLgBIgKgBIgZg4QASgYAiABQAkACARAZIgGAzIgNACIgMABIgOAAIgOAAg");
	this.shape_32.setTransform(5.1,-0.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(0.5,1,1).p("ABNgmQgogWgmgCQgqgBghAVIAnBVQAWATAfABQAgABAUgRg");
	this.shape_33.setTransform(3.6,-8.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#321970").s().p("AAQA/QgfgBgWgTIgnhVQAhgVAqABQAmACAoAWIgJBVQgTAQgdAAIgEAAg");
	this.shape_34.setTransform(3.6,-8.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(0.5,1,1).p("AAzgUIgVAwQgDAAgJgCQgFgBgHgBQgGgCgHgCQgIgBgHgDQgFgCgFgCIgJgDIgJg8AADAhIgBAEIgCANQgCAEgJgCQgJgDgCgEIAAgPIABgFgAgVAZIgBgJAAGAYIgDAJ");
	this.shape_35.setTransform(-0.4,-2.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgMAAIAAgFIAZAHIgBAEg");
	this.shape_36.setTransform(-1.4,0.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FCB5A0").s().p("AgNAAIAAgHQAHADAGABIAOADIgCAIg");
	this.shape_37.setTransform(-1.3,0.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#321970").s().p("AgLA6QgJgDgCgEIAAgPIAYAHIgCANQgBACgEAAIgGAAgAASAgIgMgCIgNgEQgHgBgIgDIgKgEIgJgDIgJg8QAYgTAgAKQAiAMALAcIgVAwIgMgCg");
	this.shape_38.setTransform(-0.4,-3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(0,0,0,0.298)").s().p("AhBALQgbgFAAgGQAAgFAbgFQAcgFAlAAQAmAAAcAFQAbAFAAAFQAAAGgbAFQgcAFgmAAQglAAgcgFg");
	this.shape_39.setTransform(3.1,3.8,1.056,1.056);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(0.5,1,1).p("AADg9QgmgMgnAMIAQBdQARAXAgAJQAdAJAXgKIAghQQgigggmgMg");
	this.shape_40.setTransform(0.4,-10.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#321970").s().p("AgJBAQgggJgRgXIgPhdQAmgMAlAMQAnAMAhAgIgfBQQgMAFgPAAQgNAAgMgEg");
	this.shape_41.setTransform(0.4,-10.9);

	this.addChild(this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-35.1,-117.3,85.2,123.3);


(lib.xespeiyou_com__1_4_75883 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_38 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(38).call(this.frame_38).wait(1));

	// 图层 1
	this.instance = new lib.xespeiyou_com__1_80_89975("synched",0);
	this.instance.setTransform(1.1,-36.1,1,1,0,0,0,1,-4.7);

	this.instance_1 = new lib.xespeiyou_com__1_147_62509();
	this.instance_1.setTransform(0,-10.3,0.363,0.363,5,0,0,14.5,30.2);

	this.instance_2 = new lib.xespeiyou_com__1_74_15533();
	this.instance_2.setTransform(0.1,-42.2,0.363,0.363,4.2,0,0,6,1.4);

	this.instance_3 = new lib.xespeiyou_com__1_75_70441();
	this.instance_3.setTransform(-0.6,-46.8,0.363,0.363,0,0,0,101.8,227.2);

	this.instance_4 = new lib.xespeiyou_com__1_77_81885();
	this.instance_4.setTransform(-1.4,-23.6,0.363,0.363,0,0,0,23.4,65.9);

	this.instance_5 = new lib.xespeiyou_com__1_78_88887();
	this.instance_5.setTransform(0.2,-27.2,0.363,0.363,14,0,0,18.1,3.2);

	this.instance_6 = new lib.xespeiyou_com__1_147_62509();
	this.instance_6.setTransform(-2.6,-11.7,0.363,0.363,2.3,0,0,14.6,30.2);

	this.instance_7 = new lib.xespeiyou_com__1_78_88887();
	this.instance_7.setTransform(-3.2,-28.5,0.363,0.363,11.3,0,0,18.2,3.2);

	this.instance_8 = new lib.xespeiyou_com__1_79_78692();
	this.instance_8.setTransform(1.1,-12.5,0.363,0.363,0,0,0,33.5,5.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.502)").ss(1,1,1).p("AACgWIgCgDIgDgFQgDgDgDgBIgCAAQgBAAgCAAQgEABgEADQgFADgDADQgBACgBABQgBABAAABQAAACABADIADAFQACAEABABQAEgKAMgFQAIgDAEAAgAAiAIQgUgcgKgBQgCAAAAgBAgagEQAAABAAAAQgCAFAGALQAEAHAMAP");
	this.shape.setTransform(4.7,-46.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(0,0,0,0.498)").ss(1,1,1).p("AAQAFQgBgCgDgBQgIgHgEgGQgLgIgDAEQgDAFAGAMQABACAEAIQACADABAD");
	this.shape_1.setTransform(1.8,-50.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFA146").s().p("AgPAFIACgDQADgCAHgEQAEgEAGgBIAFAAIAEAFQAAgBgBAAQAAAAgBAAQgBAAAAABQgBAAAAAAQgHAAgFAEQgHACgEAFIgBADg");
	this.shape_2.setTransform(3,-48.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgGAiQgMgPgEgHQgGgLACgFIAAgBQAEgKAMgFIAMgDIACABQAKABAUAcQgBANgPAKQgJAGgIAAQgDAAgEgCgAgdgKIABgDQAEgFAIgDQAGgFAHAAQABAAAAAAQABgBAAAAQABAAAAAAQAAABAAAAIACADIgMADQgMAFgEAKIgDgFgAghgUIABgCIACgDQADgDAFgDQAEgDAEgBIADAAIACAAQADABADADIgEAAQgHABgGAEQgGAEgEAEIgCADIgBgFgAACgXg");
	this.shape_3.setTransform(4.7,-46.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FCB5A0").s().p("AgGAMIgFgKQgGgMADgFQADgEALAIIAMANIAEADIgDAAQgEABgEADQgFADgBADIgCADIgDgGg");
	this.shape_4.setTransform(1.8,-50.6);

	this.instance_9 = new lib.xespeiyou_com__1_74_15533();
	this.instance_9.setTransform(9.6,-39.2,0.363,0.363,0,142,-38,6.7,2.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("rgba(0,0,0,0.498)").ss(1,1,1).p("AAKATQAAgDAAgDQABgLABgHQgBgOgFABQgGAAgEAOQgCADgDAGQgBADgBAD");
	this.shape_5.setTransform(-7.6,-7.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(0,0,0,0.502)").ss(1,1,1).p("AgIgSQAAAAAAAAQgGAEgFALQgDAFgEATAgIgSQABgCACgEIACgFQABgDACgBQAAgBAAAAQABAAACAAQAEgBAGACQAEACAEADQACAAAAACIABABQACADgBAFIgBAGIAAADAAUAjQAKgigGgGQgBgCABgBQgEgEgHgEQgMgFgJAD");
	this.shape_6.setTransform(-8.9,-3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFA146").s().p("AAMAGQgFgFgHgBQgGgDgGAAIgDABIACgFIAEgBQAFAAAFACQAHADAFADIADADIgBAGQAAgBAAAAQgBgBAAAAQAAAAgBAAQgBgBAAAAg");
	this.shape_7.setTransform(-8,-5.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FCB5A0").s().p("AAIARIgIgFQgEgCgFABIgCAAIABgGIAGgJQAEgOAGAAQAFgBABAOIgCASIAAAGIgCgCg");
	this.shape_8.setTransform(-7.6,-7.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgFAkQgRgEgEgNQAEgTADgFQAFgMAGgDIAAgBIADgFIADgBQADgBAIAEQAIACAEAGQABAAABAAQAAAAABABQAAAAAAAAQAAABAAAAIAAAEQgEgEgHgEIgBgBIAAAAIAAAAQgHgDgFAAIAAAAIAAAAIgIABIAIgBIAAAAIAAAAQAFAAAHADIAAAAIAAAAIABABQAHAEAEAEIAAACQAGAIgKAhQgGAFgKAAIgJgCgAAWgXQgEgFgIgCQgGgCgEAAIgDABIADgFQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIADgBQAEAAAGACIAIAEIACACIABACQACACgBAFIgDgDg");
	this.shape_9.setTransform(-8.9,-2.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("rgba(0,0,0,0.498)").ss(1,1,1).p("AAKATQAAgDAAgDQABgLABgHQgBgOgFABQgGAAgEAOQgBADgEAGQgBADgBAD");
	this.shape_10.setTransform(-10,68.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("rgba(0,0,0,0.502)").ss(1,1,1).p("AgIgSQABgCACgEIACgFQABgDACgBQAAgBAAAAQABAAACAAQAEgBAGACQAEACAEADQACAAAAACIABABQACADgBAFIgBAGIAAADAgIgSQAAAAAAAAQgGAEgFALQgDAFgEATAAUAjQAKgigGgGQgBgCABgBQgEgEgHgEQgMgFgJAD");
	this.shape_11.setTransform(-11.3,73);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgFAkQgRgEgEgNQAEgTADgFQAFgMAGgDIAAgBIADgFIADgBQADgBAIAEQAIACAEAGQABAAABAAQAAAAABABQAAAAAAAAQAAABAAAAIAAAEQgEgEgHgEIgCgBIAAAAIAAAAQgGgDgFAAIAAAAIAAAAIgIABIAIgBIAAAAIAAAAQAFAAAGADIAAAAIAAAAIACABQAHAEAEAEIAAACQAGAIgKAhQgGAFgKAAIgJgCgAAWgXQgEgFgIgCQgGgCgEAAIgDABIADgFQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIADgBQAEAAAGACIAIAEIACACIABACQACACgBAFIgDgDg");
	this.shape_12.setTransform(-11.3,73.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FCB5A0").s().p("AAIARIgIgFQgEgCgEABIgDAAIACgGIAEgJQAGgOAFAAQAFgBABAOIgDASIABAGIgCgCg");
	this.shape_13.setTransform(-10,68.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("rgba(0,0,0,0.502)").ss(1,1,1).p("AgIgSQABgCACgEIACgFQABgDACgBQAAgBAAAAQABAAACAAQAEgBAGACQAEACAEADQACAAAAACIABABQACADgBAFIgBAGIAAADQgEgEgHgEQgMgFgJADQAAAAAAAAQgGAEgFALQgDAFgEATAAUAjQAKgigGgGQgBgCABgB");
	this.shape_14.setTransform(-7.2,286.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("rgba(0,0,0,0.498)").ss(1,1,1).p("AAKATQAAgDAAgDQABgLABgHQgBgOgFABQgGAAgFAOQgBADgEAGQAAADgBAD");
	this.shape_15.setTransform(-5.8,281.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgFAkQgRgEgEgNQAEgTADgFQAFgMAGgDIAAgBIADgFIADgBQADgBAIAEQAIACAEAGQABAAABAAQAAAAABABQAAAAAAAAQAAABAAAAIAAAEQgEgEgHgEIgBgBIgBAAIgBgBQgGgCgEAAIAAAAIAAAAIgIABIAIgBIAAAAIAAAAQAEAAAGACIABABIABAAIABABQAHAEAEAEIAAACQAGAIgKAhQgGAFgKAAIgJgCgAAWgXQgEgFgIgCQgGgCgEAAIgDABIADgFQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIADgBQAEAAAGACIAIAEIACACIABACQACACgBAFIgDgDg");
	this.shape_16.setTransform(-7.2,286.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("rgba(0,0,0,0.502)").ss(1,1,1).p("AAYgIIAAgDIABgGQABgFgCgDIgBgBQAAgCgCAAQgEgDgEgCQgGgCgEABQgCAAgBAAQAAAAAAABQgCABgBADIgCAFQgCAEgBACAAUAjQAKgigGgGQgBgCABgBQgEgEgHgEQgMgFgJADQAAAAAAAAQgGAEgFALQgDAFgEAT");
	this.shape_17.setTransform(-7.2,373.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8,p:{regX:33.5,regY:5.5,x:1.1,y:-12.5}},{t:this.instance_7,p:{regY:3.2,rotation:11.3,x:-3.2,y:-28.5,regX:18.2}},{t:this.instance_6,p:{regX:14.6,regY:30.2,rotation:2.3,x:-2.6,y:-11.7}},{t:this.instance_5,p:{regX:18.1,regY:3.2,x:0.2,y:-27.2,rotation:14}},{t:this.instance_4,p:{regX:23.4,regY:65.9,rotation:0,x:-1.4,y:-23.6}},{t:this.instance_3,p:{regX:101.8,regY:227.2,rotation:0,x:-0.6,y:-46.8}},{t:this.instance_2,p:{regX:6,regY:1.4,rotation:4.2,x:0.1,y:-42.2}},{t:this.instance_1,p:{regX:14.5,regY:30.2,x:0,y:-10.3,rotation:5}},{t:this.instance,p:{rotation:0,x:1.1,y:-36.1,regX:1}}]}).to({state:[{t:this.instance_8,p:{regX:32.6,regY:5.7,x:0.9,y:-12.7}},{t:this.instance_7,p:{regY:2.4,rotation:82,x:-1.2,y:-25.7,regX:18.2}},{t:this.instance_6,p:{regX:14.1,regY:31.1,rotation:73,x:-17,y:-19.8}},{t:this.instance_5,p:{regX:17.2,regY:2.5,x:0.3,y:-27.5,rotation:14}},{t:this.instance_9,p:{regX:6.7,regY:2.3,skewX:142,skewY:-38,x:9.6,y:-39.2}},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_4,p:{regX:23,regY:64.8,rotation:27,x:-1.5,y:-23.9}},{t:this.instance_3,p:{regX:99.4,regY:228.8,rotation:27,x:9.2,y:-43.8}},{t:this.instance_2,p:{regX:6.8,regY:2.4,rotation:121.2,x:8.3,y:-39.3}},{t:this.instance_1,p:{regX:15.8,regY:30.4,x:0.6,y:-10.4,rotation:5}},{t:this.instance,p:{rotation:121.5,x:2.4,y:-41.4,regX:1}}]},3).to({state:[{t:this.instance_7,p:{regY:2.1,rotation:131.5,x:-27.9,y:6.4,regX:16.8}},{t:this.instance_6,p:{regX:15.2,regY:30.6,rotation:122.5,x:-43.3,y:-1.5}},{t:this.instance_5,p:{regX:18.5,regY:1.7,x:-25.7,y:6.7,rotation:63.5}},{t:this.instance_9,p:{regX:5.9,regY:2.8,skewX:-168.5,skewY:11.5,x:-10.7,y:6.2}},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7,p:{x:-8,y:-5.2}},{t:this.shape_6},{t:this.shape_5},{t:this.instance_4,p:{regX:22.4,regY:65.2,rotation:76.5,x:-30.1,y:7.5}},{t:this.instance_3,p:{regX:99.8,regY:227.8,rotation:76.5,x:-7.9,y:2.7}},{t:this.instance_2,p:{regX:6.6,regY:2.4,rotation:170.7,x:-11.4,y:5}},{t:this.instance_1,p:{regX:16.2,regY:29.6,x:-38.8,y:17.9,rotation:54.5}},{t:this.instance,p:{rotation:166.1,x:-13.4,y:-0.7,regX:0.9}}]},2).to({state:[{t:this.instance_7,p:{regY:2.1,rotation:131.5,x:-30.3,y:82.4,regX:16.8}},{t:this.instance_6,p:{regX:15.2,regY:30.6,rotation:122.5,x:-45.7,y:74.5}},{t:this.instance_5,p:{regX:18.5,regY:1.7,x:-28.1,y:82.7,rotation:63.5}},{t:this.instance_9,p:{regX:5.9,regY:2.8,skewX:-168.5,skewY:11.5,x:-13.1,y:82.2}},{t:this.shape_13,p:{x:-10,y:68.3}},{t:this.shape_12},{t:this.shape_7,p:{x:-10.4,y:70.8}},{t:this.shape_11},{t:this.shape_10},{t:this.instance_4,p:{regX:22.4,regY:65.2,rotation:76.5,x:-32.5,y:83.5}},{t:this.instance_3,p:{regX:99.8,regY:227.8,rotation:76.5,x:-10.3,y:78.7}},{t:this.instance_2,p:{regX:6.6,regY:2.4,rotation:170.7,x:-13.8,y:81}},{t:this.instance_1,p:{regX:16.2,regY:29.6,x:-41.2,y:93.9,rotation:54.5}},{t:this.instance,p:{rotation:166.1,x:-15.8,y:75.4,regX:0.9}}]},2).to({state:[{t:this.instance_7,p:{regY:2.1,rotation:131.5,x:-26.2,y:295.7,regX:16.8}},{t:this.instance_6,p:{regX:15.2,regY:30.6,rotation:122.5,x:-41.6,y:287.8}},{t:this.instance_5,p:{regX:18.5,regY:1.7,x:-24,y:295.9,rotation:63.5}},{t:this.instance_9,p:{regX:5.9,regY:2.8,skewX:-168.5,skewY:11.5,x:-9,y:295.4}},{t:this.shape_13,p:{x:-5.8,y:281.6}},{t:this.shape_16,p:{y:286.5}},{t:this.shape_7,p:{x:-6.2,y:284.1}},{t:this.shape_15,p:{y:281.6}},{t:this.shape_14},{t:this.instance_4,p:{regX:22.4,regY:65.2,rotation:76.5,x:-28.3,y:296.8}},{t:this.instance_3,p:{regX:99.8,regY:227.8,rotation:76.5,x:-6.2,y:292}},{t:this.instance_2,p:{regX:6.6,regY:2.4,rotation:170.7,x:-9.7,y:294.2}},{t:this.instance_1,p:{regX:16.2,regY:29.6,x:-37.1,y:307.1,rotation:54.5}},{t:this.instance,p:{rotation:166.1,x:-11.6,y:288.6,regX:0.9}}]},3).to({state:[{t:this.instance_7,p:{regY:2.1,rotation:131.5,x:-26.2,y:382.9,regX:16.8}},{t:this.instance_6,p:{regX:15.2,regY:30.6,rotation:122.5,x:-41.6,y:375}},{t:this.instance_5,p:{regX:18.5,regY:1.7,x:-24,y:383.1,rotation:63.5}},{t:this.instance_9,p:{regX:5.9,regY:2.8,skewX:-168.5,skewY:11.5,x:-9,y:382.6}},{t:this.shape_7,p:{x:-6.2,y:371.3}},{t:this.shape_16,p:{y:373.7}},{t:this.shape_13,p:{x:-5.8,y:368.8}},{t:this.shape_17},{t:this.shape_15,p:{y:368.8}},{t:this.instance_4,p:{regX:22.4,regY:65.2,rotation:76.5,x:-28.3,y:384}},{t:this.instance_3,p:{regX:99.8,regY:227.8,rotation:76.5,x:-6.2,y:379.2}},{t:this.instance_2,p:{regX:6.6,regY:2.4,rotation:170.7,x:-9.7,y:381.4}},{t:this.instance_1,p:{regX:16.2,regY:29.6,x:-37.1,y:394.3,rotation:54.5}},{t:this.instance,p:{rotation:166.1,x:-11.6,y:375.9,regX:0.9}}]},2).wait(27));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38,-129.8,77.3,119.3);


(lib.xespeiyou_com__1_3_19597 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.xespeiyou_com__1_59_6341();
	this.instance.setTransform(40.6,-78.2,0.367,0.367,0,0,0,225.4,151.2);

	this.instance_1 = new lib.xespeiyou_com__1_147_62509();
	this.instance_1.setTransform(-0.2,-19.9,0.367,0.367,-1,0,0,12.5,1.1);

	this.instance_2 = new lib.xespeiyou_com__1_74_15533();
	this.instance_2.setTransform(-3.8,-41.9,0.367,0.367,57,0,0,5.4,3.5);

	this.instance_3 = new lib.xespeiyou_com__1_75_70441();
	this.instance_3.setTransform(-5.4,-46.4,0.367,0.367,0,0,0,100.1,228.2);

	this.instance_4 = new lib.xespeiyou_com__1_77_81885();
	this.instance_4.setTransform(-5.4,-23.1,0.367,0.367,0,0,0,24.8,66.8);

	this.instance_5 = new lib.xespeiyou_com__1_78_88887();
	this.instance_5.setTransform(-1.5,-26.6,0.367,0.367,4.6,0,0,17.2,1.5);

	this.instance_6 = new lib.xespeiyou_com__1_74_15533();
	this.instance_6.setTransform(-4.1,-42.5,0.367,0.367,-42.5,0,0,8,5);

	this.instance_7 = new lib.xespeiyou_com__1_147_62509();
	this.instance_7.setTransform(-5.8,-21.5,0.367,0.367,6.3,0,0,12.6,1.2);

	this.instance_8 = new lib.xespeiyou_com__1_79_78692();
	this.instance_8.setTransform(-3.8,-12.3,0.367,0.367,0,0,0,31.4,4.2);

	this.instance_9 = new lib.xespeiyou_com__1_78_88887();
	this.instance_9.setTransform(-6.3,-28.3,0.367,0.367,11.9,0,0,17.2,1.4);

	this.addChild(this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-42.5,-145.8,155.5,136);


(lib.xespeiyou_com__1_2_26435 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.xespeiyou_com__1_80_89975("synched",0);
	this.instance.setTransform(0.3,-35.3,1,1,0,0,0,1,-4.7);

	this.instance_1 = new lib.xespeiyou_com__1_147_62509();
	this.instance_1.setTransform(-0.8,-9.5,0.363,0.363,5,0,0,14.5,30.2);

	this.instance_2 = new lib.xespeiyou_com__1_74_15533();
	this.instance_2.setTransform(-0.7,-41.4,0.363,0.363,4.2,0,0,6,1.4);

	this.instance_3 = new lib.xespeiyou_com__1_75_70441();
	this.instance_3.setTransform(-1.4,-46,0.363,0.363,0,0,0,101.8,227.2);

	this.instance_4 = new lib.xespeiyou_com__1_77_81885();
	this.instance_4.setTransform(-2.2,-22.8,0.363,0.363,0,0,0,23.4,65.9);

	this.instance_5 = new lib.xespeiyou_com__1_78_88887();
	this.instance_5.setTransform(-0.6,-26.4,0.363,0.363,14,0,0,18.1,3.2);

	this.instance_6 = new lib.xespeiyou_com__1_147_62509();
	this.instance_6.setTransform(-3.4,-10.9,0.363,0.363,2.3,0,0,14.6,30.2);

	this.instance_7 = new lib.xespeiyou_com__1_78_88887();
	this.instance_7.setTransform(-4,-27.7,0.363,0.363,11.3,0,0,18.2,3.2);

	this.instance_8 = new lib.xespeiyou_com__1_79_78692();
	this.instance_8.setTransform(0.3,-11.7,0.363,0.363,0,0,0,33.5,5.5);

	this.addChild(this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-38.8,-129,77.3,119.3);


(lib.xespeiyou_com__1_275_16923 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.xespeiyou_com__1_126_61211("synched",0);
	this.instance.setTransform(51.1,62.6,1,1,0,0,0,38.7,46.8);

	this.instance_1 = new lib.xespeiyou_com__1_260_14612("synched",0);
	this.instance_1.setTransform(41.9,5.6,1,1,0,0,0,13.9,5.6);

	this.instance_2 = new lib.xespeiyou_com__1_122_66169("synched",0);
	this.instance_2.setTransform(38.4,129.3,1,1,0,0,0,6,5.5);

	this.instance_3 = new lib.xespeiyou_com__1_269_51374("synched",0);
	this.instance_3.setTransform(2.4,103.6,1,1,0,0,0,2.4,3.7);

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,91.8,136.8);


(lib.xespeiyou_com__1_265_53269 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.xespeiyou_com__1_275_16923("synched",0);
	this.instance.setTransform(56.3,220.6,1,1,0,0,0,44.9,67.3);

	this.instance_1 = new lib.xespeiyou_com__1_267_16106("synched",0);
	this.instance_1.setTransform(130.4,123.1,1,1,0,0,0,30.6,13.5);

	this.instance_2 = new lib.xespeiyou_com__1_266_70781("synched",0);
	this.instance_2.setTransform(145.2,102.1,1,1,0,0,0,145.2,102.1);

	this.instance_3 = new lib.xespeiyou_com__1_263_5829("synched",0);
	this.instance_3.setTransform(210.6,127.5,1,1,0,0,0,77.7,30);

	this.instance_4 = new lib.xespeiyou_com__1_268_44323("synched",0);
	this.instance_4.setTransform(88.2,197.5,1,1,0,0,0,74.9,99.5);

	this.addChild(this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,293.6,412.5);


(lib.xespeiyou_com__1_152_64706 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.xespeiyou_com__1_150_24822("synched",0);
	this.instance.setTransform(8.2,13.2,1,1,0,0,0,8.2,13.2);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,0,18.4,27.3);


(lib.xespeiyou_com__1_145_57039 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.xespeiyou_com__1_60_89152();
	this.instance.setTransform(227.3,141.5,1,1,0,0,0,228,152.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:223.4,y:145.4},5).to({y:143.4},6).to({x:225.4},6).to({regY:152.4,rotation:0.3,x:229.3,y:142.7},6).wait(1));

	// 小腿
	this.instance_1 = new lib.xespeiyou_com__1_147_62509();
	this.instance_1.setTransform(111.8,298.4,1,1,-36.8,0,0,13.2,1.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:13.3,rotation:-35.2,x:101.5,y:299.3},5).to({regX:13.2,rotation:29.5,x:89.5,y:297.1},6).to({rotation:-3.7,x:100.5,y:300.3},6).to({rotation:-36.8,x:111.8,y:298.4},6).wait(1));

	// 上臂
	this.instance_2 = new lib.xespeiyou_com__1_74_15533();
	this.instance_2.setTransform(107.6,239.3,1,1,57,0,0,6,1.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:7.6,x:106.5,y:241.2},5).to({regX:6.1,rotation:-50,x:107.4,y:239.8},6).to({rotation:3.3,y:241.2},6).to({regX:6,rotation:57,x:107.6,y:239.3},6).wait(1));

	// _头 
	this.instance_3 = new lib.xespeiyou_com__1_75_70441();
	this.instance_3.setTransform(101.8,227.2,1,1,0,0,0,101.8,227.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-1.2,x:99.8,y:228.8},5).to({y:227.1},6).to({rotation:-0.7,x:100.6,y:228.8},6).to({rotation:0,x:101.8,y:227.2},6).wait(1));

	// 身体
	this.instance_4 = new lib.xespeiyou_com__1_77_81885();
	this.instance_4.setTransform(99.6,291.2,1,1,0,0,0,23.4,66);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:-1.2,x:99,y:292.8},5).to({y:291.1},6).to({rotation:-0.7,x:99.2,y:292.7},6).to({rotation:0,x:99.6,y:291.2},6).wait(1));

	// 大腿
	this.instance_5 = new lib.xespeiyou_com__1_78_88887();
	this.instance_5.setTransform(100.4,284.6,1,1,-22,0,0,17.9,3.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:1,scaleY:1,rotation:7.3,x:98.6,y:284.5},5).to({scaleX:1,scaleY:1,rotation:44.2,x:97.5,y:280.6},6).to({scaleX:1,scaleY:1,rotation:10.9,x:98.8,y:284.2},6).to({scaleX:1,scaleY:1,rotation:-22,x:100.4,y:284.6},6).wait(1));

	// 小腿
	this.instance_6 = new lib.xespeiyou_com__1_147_62509();
	this.instance_6.setTransform(90.3,295.1,1,1,27.5,0,0,13.1,3);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:-6,x:98.9,y:300.7},5).to({regY:2.9,rotation:-44.7,x:111.3,y:301.2},6).to({scaleX:1,scaleY:1,rotation:-55.5,x:104.3,y:301.7},6).to({regY:3,scaleX:1,scaleY:1,rotation:27.5,x:90.3,y:295.1},6).wait(1));

	// 上臂
	this.instance_7 = new lib.xespeiyou_com__1_74_15533();
	this.instance_7.setTransform(102.5,237.9,1,1,-42.5,0,0,5.8,2.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regY:2.1,rotation:-0.7,x:100.7,y:240.5},5).to({regY:2.2,rotation:51.1,x:100.6,y:240},6).to({rotation:4.1,x:101.4,y:240.5},6).to({rotation:-42.5,x:102.5,y:237.9},6).wait(1));

	// 大腿
	this.instance_8 = new lib.xespeiyou_com__1_78_88887();
	this.instance_8.setTransform(99.8,281.7,1,1,44.7,0,0,20.2,4.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regX:20.1,scaleX:1,scaleY:1,rotation:11.1,x:100,y:284.3},5).to({regX:20.2,scaleX:1,scaleY:1,rotation:-27.5,x:101.4,y:288.1},6).to({scaleX:1,scaleY:1,rotation:8.4,x:100.5,y:287.4},6).to({scaleX:1,scaleY:1,rotation:44.7,x:99.8,y:281.7},6).wait(1));

	// 阴影
	this.instance_9 = new lib.xespeiyou_com__1_79_78692();
	this.instance_9.setTransform(106.5,321.7,1,1,0,0,0,33.5,5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({scaleX:1.12},5).to({scaleX:1},6).to({scaleX:1.12},6).to({scaleX:1},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.2,-10.7,236.9,338.4);


(lib.xespeiyou_com__1_143_86326 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 小腿
	this.instance = new lib.xespeiyou_com__1_147_62509();
	this.instance.setTransform(111.8,298.4,1,1,-36.8,0,0,13.2,1.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:13.3,rotation:-35.2,x:101.5,y:299.3},5).to({regX:13.2,rotation:29.5,x:89.5,y:297.1},6).to({rotation:-3.7,x:100.5,y:300.3},6).to({rotation:-36.8,x:111.8,y:298.4},6).wait(1));

	// 小臂
	this.instance_1 = new lib.xespeiyou_com__1_73_81444();
	this.instance_1.setTransform(96.2,249.3,1,1,76,0,0,7.2,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,rotation:26.6,x:107.5,y:255.8},5).to({regY:1.6,scaleX:1,scaleY:1,rotation:-31.1,x:120.3,y:247.9},6).to({scaleX:1,scaleY:1,rotation:22.3,x:108.8,y:260.5},6).to({regY:1.5,scaleX:1,scaleY:1,rotation:76,x:96.2,y:249.3},6).wait(1));

	// 上臂
	this.instance_2 = new lib.xespeiyou_com__1_74_15533();
	this.instance_2.setTransform(107.6,239.3,1,1,57,0,0,6,1.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:7.6,x:106.5,y:241.2},5).to({regX:6.1,rotation:-50,x:107.4,y:239.8},6).to({rotation:3.3,y:241.2},6).to({regX:6,rotation:57,x:107.6,y:239.3},6).wait(1));

	// _头 
	this.instance_3 = new lib.xespeiyou_com__1_75_70441();
	this.instance_3.setTransform(101.8,227.2,1,1,0,0,0,101.8,227.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-1.2,x:99.8,y:228.8},5).to({y:227.1},6).to({rotation:-0.7,x:100.6,y:228.8},6).to({rotation:0,x:101.8,y:227.2},6).wait(1));

	// 身体
	this.instance_4 = new lib.xespeiyou_com__1_77_81885();
	this.instance_4.setTransform(99.6,291.2,1,1,0,0,0,23.4,66);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:-1.2,x:99,y:292.8},5).to({y:291.1},6).to({rotation:-0.7,x:99.2,y:292.7},6).to({rotation:0,x:99.6,y:291.2},6).wait(1));

	// 大腿
	this.instance_5 = new lib.xespeiyou_com__1_78_88887();
	this.instance_5.setTransform(100.4,284.6,1,1,-22,0,0,17.9,3.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:1,scaleY:1,rotation:7.3,x:98.6,y:284.5},5).to({scaleX:1,scaleY:1,rotation:44.2,x:97.5,y:280.6},6).to({scaleX:1,scaleY:1,rotation:10.9,x:98.8,y:284.2},6).to({scaleX:1,scaleY:1,rotation:-22,x:100.4,y:284.6},6).wait(1));

	// 小腿
	this.instance_6 = new lib.xespeiyou_com__1_147_62509();
	this.instance_6.setTransform(90.3,295.1,1,1,27.5,0,0,13.1,3);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:-6,x:98.9,y:300.7},5).to({regY:2.9,rotation:-44.7,x:111.3,y:301.2},6).to({scaleX:1,scaleY:1,rotation:-55.5,x:104.3,y:301.7},6).to({regY:3,scaleX:1,scaleY:1,rotation:27.5,x:90.3,y:295.1},6).wait(1));

	// 小臂
	this.instance_7 = new lib.xespeiyou_com__1_73_81444();
	this.instance_7.setTransform(113.9,247.4,1,1,-26.7,0,0,7,1.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regX:6.9,regY:1.8,scaleX:1,scaleY:1,rotation:15.1,x:102.3,y:250.6},5).to({regX:7,regY:1.7,scaleX:1,scaleY:1,rotation:66.8,x:90.3,y:250.9},6).to({regY:1.8,scaleX:1,scaleY:1,rotation:19.9,x:102,y:250.8},6).to({regY:1.7,scaleX:1,scaleY:1,rotation:-26.7,x:113.9,y:247.4},6).wait(1));

	// 上臂
	this.instance_8 = new lib.xespeiyou_com__1_74_15533();
	this.instance_8.setTransform(102.5,237.9,1,1,-42.5,0,0,5.8,2.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regY:2.1,rotation:-0.7,x:100.7,y:240.5},5).to({regY:2.2,rotation:51.1,x:100.6,y:240},6).to({rotation:4.1,x:101.4,y:240.5},6).to({rotation:-42.5,x:102.5,y:237.9},6).wait(1));

	// 大腿
	this.instance_9 = new lib.xespeiyou_com__1_78_88887();
	this.instance_9.setTransform(99.8,281.7,1,1,44.7,0,0,20.2,4.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({regX:20.1,scaleX:1,scaleY:1,rotation:11.1,x:100,y:284.3},5).to({regX:20.2,scaleX:1,scaleY:1,rotation:-27.5,x:101.4,y:288.1},6).to({scaleX:1,scaleY:1,rotation:8.4,x:100.5,y:287.4},6).to({scaleX:1,scaleY:1,rotation:44.7,x:99.8,y:281.7},6).wait(1));

	// 阴影
	this.instance_10 = new lib.xespeiyou_com__1_79_78692();
	this.instance_10.setTransform(106.5,321.7,1,1,0,0,0,33.5,5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({scaleX:1.12},5).to({scaleX:1},6).to({scaleX:1.12},6).to({scaleX:1},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.9,-0.9,212.6,328.6);


(lib.xespeiyou_com__1_140_15843 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.xespeiyou_com__1_59_6341();
	this.instance.setTransform(227.3,141.5,1,1,0,0,0,228,152.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:144.5},5).to({y:141.5},6).to({y:144.5},6).to({x:230.4,y:141.5},6).wait(1));

	// 小腿
	this.instance_1 = new lib.xespeiyou_com__1_147_62509();
	this.instance_1.setTransform(111.8,298.4,1,1,-36.8,0,0,13.2,1.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:13.3,rotation:-35.2,x:101.5,y:299.3},5).to({regX:13.2,rotation:29.5,x:89.5,y:297.1},6).to({rotation:-3.7,x:100.5,y:300.3},6).to({rotation:-36.8,x:111.8,y:298.4},6).wait(1));

	// 上臂
	this.instance_2 = new lib.xespeiyou_com__1_74_15533();
	this.instance_2.setTransform(107.6,239.3,1,1,57,0,0,6,1.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:7.6,x:106.5,y:241.2},5).to({regX:6.1,rotation:-50,x:107.4,y:239.8},6).to({rotation:3.3,y:241.2},6).to({regX:6,rotation:57,x:107.6,y:239.3},6).wait(1));

	// _头 
	this.instance_3 = new lib.xespeiyou_com__1_75_70441();
	this.instance_3.setTransform(101.8,227.2,1,1,0,0,0,101.8,227.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-1.2,x:99.8,y:228.8},5).to({y:227.1},6).to({rotation:-0.7,x:100.6,y:228.8},6).to({rotation:0,x:101.8,y:227.2},6).wait(1));

	// 身体
	this.instance_4 = new lib.xespeiyou_com__1_77_81885();
	this.instance_4.setTransform(99.6,291.2,1,1,0,0,0,23.4,66);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:-1.2,x:99,y:292.8},5).to({y:291.1},6).to({rotation:-0.7,x:99.2,y:292.7},6).to({rotation:0,x:99.6,y:291.2},6).wait(1));

	// 大腿
	this.instance_5 = new lib.xespeiyou_com__1_78_88887();
	this.instance_5.setTransform(100.4,284.6,1,1,-22,0,0,17.9,3.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:1,scaleY:1,rotation:7.3,x:98.6,y:284.5},5).to({scaleX:1,scaleY:1,rotation:44.2,x:97.5,y:280.6},6).to({scaleX:1,scaleY:1,rotation:10.9,x:98.8,y:284.2},6).to({scaleX:1,scaleY:1,rotation:-22,x:100.4,y:284.6},6).wait(1));

	// 小腿
	this.instance_6 = new lib.xespeiyou_com__1_147_62509();
	this.instance_6.setTransform(90.3,295.1,1,1,27.5,0,0,13.1,3);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:-6,x:98.9,y:300.7},5).to({regY:2.9,rotation:-44.7,x:111.3,y:301.2},6).to({scaleX:1,scaleY:1,rotation:-55.5,x:104.3,y:301.7},6).to({regY:3,scaleX:1,scaleY:1,rotation:27.5,x:90.3,y:295.1},6).wait(1));

	// 上臂
	this.instance_7 = new lib.xespeiyou_com__1_74_15533();
	this.instance_7.setTransform(102.5,237.9,1,1,-42.5,0,0,5.8,2.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regY:2.1,rotation:-0.7,x:100.7,y:240.5},5).to({regY:2.2,rotation:51.1,x:100.6,y:240},6).to({rotation:4.1,x:101.4,y:240.5},6).to({rotation:-42.5,x:102.5,y:237.9},6).wait(1));

	// 大腿
	this.instance_8 = new lib.xespeiyou_com__1_78_88887();
	this.instance_8.setTransform(99.8,281.7,1,1,44.7,0,0,20.2,4.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regX:20.1,scaleX:1,scaleY:1,rotation:11.1,x:100,y:284.3},5).to({regX:20.2,scaleX:1,scaleY:1,rotation:-27.5,x:101.4,y:288.1},6).to({scaleX:1,scaleY:1,rotation:8.4,x:100.5,y:287.4},6).to({scaleX:1,scaleY:1,rotation:44.7,x:99.8,y:281.7},6).wait(1));

	// 阴影
	this.instance_9 = new lib.xespeiyou_com__1_79_78692();
	this.instance_9.setTransform(106.5,321.7,1,1,0,0,0,33.5,5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({scaleX:1.12},5).to({scaleX:1},6).to({scaleX:1.12},6).to({scaleX:1},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.9,-44,422.7,371.6);


(lib.xespeiyou_com__1_135_15210 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.xespeiyou_com__1_71_46454();
	this.instance.setTransform(112.1,115.8,1,1,0,0,0,111.4,140.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:118.7},6).to({y:117.3},6).to({y:118.7},5).to({y:117.3},6).wait(1));

	// 头
	this.instance_1 = new lib.xespeiyou_com__1_121_97668();
	this.instance_1.setTransform(83.6,190.7,0.661,0.661,0,0,0,121,288.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:0.7,y:192.2},6).to({rotation:1,x:83.7,y:190.7},6).to({rotation:0.9,x:83.6,y:192},4).to({rotation:0.7,y:192.2},1).to({rotation:0,y:190.7},6).wait(1));

	// 小臂
	this.instance_2 = new lib.xespeiyou_com__1_138_17035("synched",0);
	this.instance_2.setTransform(78.6,214.8,1,1,83.2,0,0,6.2,1.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1,scaleY:1,rotation:30.6,x:88.3,y:219.1},6).to({regX:6.4,regY:1.8,scaleX:1,scaleY:1,rotation:-21.9,x:95.6,y:212.1},6).to({regX:6.3,scaleX:1,scaleY:1,rotation:25.8,x:89.1,y:217.9},5).to({regX:6.2,regY:1.7,scaleX:1,scaleY:1,rotation:83.2,x:78.6,y:214.8},6).wait(1));

	// 上臂
	this.instance_3 = new lib.xespeiyou_com__1_137_13148("synched",0);
	this.instance_3.setTransform(85.5,206.8,1,1,51.2,0,0,5,2.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:2.5,rotation:-1.5,y:209.1},6).to({regY:2.4,rotation:-54.3,x:85.9,y:208.2},6).to({scaleX:1,scaleY:1,rotation:-6.3,x:85.6,y:209},5).to({scaleX:1,scaleY:1,rotation:51.2,x:85.5,y:206.8},6).wait(1));

	// 身体
	this.instance_4 = new lib.xespeiyou_com__1_139_47138("synched",0);
	this.instance_4.setTransform(87,263.4,1,1,2.2,0,0,26.8,73);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:264.9},6).to({y:263.4},6).to({y:264.9},5).to({y:263.4},6).wait(1));

	// 小臂
	this.instance_5 = new lib.xespeiyou_com__1_152_64706("synched",0);
	this.instance_5.setTransform(94.9,211.6,1,1,-16.3,0,0,5.7,3.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:5.6,scaleX:1,scaleY:1,rotation:26.8,x:85.6,y:215.4},6).to({regX:5.8,scaleX:1,scaleY:1,rotation:69.8,x:76.7,y:216.1},6).to({regY:3.1,scaleX:1,scaleY:1,rotation:30.6,x:85,y:215.5},5).to({regX:5.7,regY:3.2,scaleX:1,scaleY:1,rotation:-16.3,x:94.9,y:211.6},6).wait(1));

	// 上臂
	this.instance_6 = new lib.xespeiyou_com__1_141_96903("synched",0);
	this.instance_6.setTransform(85.1,205.2,1,1,-43,0,0,4.5,1.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:4.6,rotation:1.5,x:85.7,y:206.9},6).to({regY:1.8,rotation:45.8,x:86.4,y:205.6},6).to({rotation:5.3,x:85.7,y:206.9},5).to({regX:4.5,regY:1.9,rotation:-43,x:85.1,y:205.2},6).wait(1));

	// 大腿
	this.instance_7 = new lib.xespeiyou_com__1_119_39659("synched",0);
	this.instance_7.setTransform(87.6,257.9,0.661,0.661,-19,0,0,8.7,3.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regY:3.4,rotation:10.5,x:82.6,y:258.6},6).to({regX:8.6,rotation:40.3,x:77.7,y:256.3},6).to({rotation:13.3,x:82.2,y:258.5},5).to({regX:8.7,regY:3.3,rotation:-19,x:87.6,y:257.9},6).wait(1));

	// 小腿
	this.instance_8 = new lib.xespeiyou_com__1_117_61064("synched",0);
	this.instance_8.setTransform(94.1,271.2,0.661,0.661,-30.9,0,0,6,5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regY:5.4,scaleX:0.66,scaleY:0.66,rotation:-43.6,x:86.4,y:272.8},3).to({regX:6.1,regY:5.5,scaleX:0.66,scaleY:0.66,rotation:-56.2,x:79.7,y:275.4},3).to({regY:5.7,rotation:-13.8,x:73.8,y:271.1},3).to({regX:6.2,regY:5.5,rotation:28.4,x:69.6,y:268.8},3).to({rotation:1.5,x:80.7,y:271.4},5).to({regX:6,rotation:-30.9,x:94.1,y:271.2},6).wait(1));

	// 大腿
	this.instance_9 = new lib.xespeiyou_com__1_154_27642("synched",0);
	this.instance_9.setTransform(76.3,255.3,1,1,31.2,0,0,6.3,1.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({rotation:8.1,x:83.3,y:257.5},6).to({rotation:-14.7,x:90.3,y:256.5},6).to({regX:6.4,regY:1.7,rotation:6,x:83.9,y:257.5},5).to({regX:6.3,regY:1.6,rotation:31.2,x:76.3,y:255.3},6).wait(1));

	// 小腿
	this.instance_10 = new lib.xespeiyou_com__1_156_50322("synched",0);
	this.instance_10.setTransform(70.4,268.7,1,1,19.5,0,0,4.5,3.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({regX:4.4,rotation:-3.3,x:83,y:270.9},6).to({regX:4.5,rotation:-26.4,x:95.8,y:270},6).to({regX:4.4,scaleX:1,scaleY:1,rotation:-41.4,x:89.7,y:271.7},2).to({regX:4.5,scaleX:1,scaleY:1,rotation:-64,x:82,y:273.1},3).to({scaleX:1,scaleY:1,rotation:-22.1,x:75.8,y:269.4},3).to({scaleX:1,scaleY:1,rotation:19.5,x:70.4,y:268.7},3).wait(1));

	// 影子
	this.instance_11 = new lib.xespeiyou_com__1_158_19422("synched",0);
	this.instance_11.setTransform(83,287.4,1,1,0,0,0,29.4,4.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({scaleX:1.05},6).to({scaleX:1},6).to({scaleX:1.05},5).to({scaleX:1},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.3,-25.4,224.8,316.9);


(lib.xespeiyou_com__1_134_38660 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.xespeiyou_com__1_61_78390();
	this.instance.setTransform(206.3,117.2,1.037,1.037,0,0,0,196.1,131.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:119.5},6).to({y:117.2},6).to({y:121.8},5).to({y:119.5},6).wait(1));

	// 头
	this.instance_1 = new lib.xespeiyou_com__1_121_97668();
	this.instance_1.setTransform(83.6,190.7,0.661,0.661,0,0,0,121,288.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:0.7,y:192.2},6).to({rotation:1,x:83.7,y:190.7},6).to({rotation:0.9,x:83.6,y:192},4).to({rotation:0.7,y:192.2},1).to({rotation:0,y:190.7},6).wait(1));

	// 小臂
	this.instance_2 = new lib.xespeiyou_com__1_138_17035("synched",0);
	this.instance_2.setTransform(78.6,214.8,1,1,83.2,0,0,6.2,1.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1,scaleY:1,rotation:30.6,x:88.3,y:219.1},6).to({regX:6.4,regY:1.8,scaleX:1,scaleY:1,rotation:-21.9,x:95.6,y:212.1},6).to({regX:6.3,scaleX:1,scaleY:1,rotation:25.8,x:89.1,y:217.9},5).to({regX:6.2,regY:1.7,scaleX:1,scaleY:1,rotation:83.2,x:78.6,y:214.8},6).wait(1));

	// 上臂
	this.instance_3 = new lib.xespeiyou_com__1_137_13148("synched",0);
	this.instance_3.setTransform(85.5,206.8,1,1,51.2,0,0,5,2.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:2.5,rotation:-1.5,y:209.1},6).to({regY:2.4,rotation:-54.3,x:85.9,y:208.2},6).to({scaleX:1,scaleY:1,rotation:-6.3,x:85.6,y:209},5).to({scaleX:1,scaleY:1,rotation:51.2,x:85.5,y:206.8},6).wait(1));

	// 身体
	this.instance_4 = new lib.xespeiyou_com__1_139_47138("synched",0);
	this.instance_4.setTransform(87,263.4,1,1,2.2,0,0,26.8,73);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:264.9},6).to({y:263.4},6).to({y:264.9},5).to({y:263.4},6).wait(1));

	// 小臂
	this.instance_5 = new lib.xespeiyou_com__1_152_64706("synched",0);
	this.instance_5.setTransform(94.9,211.6,1,1,-16.3,0,0,5.7,3.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:5.6,scaleX:1,scaleY:1,rotation:26.8,x:85.6,y:215.4},6).to({regX:5.8,scaleX:1,scaleY:1,rotation:69.8,x:76.7,y:216.1},6).to({regY:3.1,scaleX:1,scaleY:1,rotation:30.6,x:85,y:215.5},5).to({regX:5.7,regY:3.2,scaleX:1,scaleY:1,rotation:-16.3,x:94.9,y:211.6},6).wait(1));

	// 上臂
	this.instance_6 = new lib.xespeiyou_com__1_141_96903("synched",0);
	this.instance_6.setTransform(85.1,205.2,1,1,-43,0,0,4.5,1.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:4.6,rotation:1.5,x:85.7,y:206.9},6).to({regY:1.8,rotation:45.8,x:86.4,y:205.6},6).to({rotation:5.3,x:85.7,y:206.9},5).to({regX:4.5,regY:1.9,rotation:-43,x:85.1,y:205.2},6).wait(1));

	// 大腿
	this.instance_7 = new lib.xespeiyou_com__1_119_39659("synched",0);
	this.instance_7.setTransform(87.6,257.9,0.661,0.661,-19,0,0,8.7,3.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regY:3.4,rotation:10.5,x:82.6,y:258.6},6).to({regX:8.6,rotation:40.3,x:77.7,y:256.3},6).to({rotation:13.3,x:82.2,y:258.5},5).to({regX:8.7,regY:3.3,rotation:-19,x:87.6,y:257.9},6).wait(1));

	// 小腿
	this.instance_8 = new lib.xespeiyou_com__1_117_61064("synched",0);
	this.instance_8.setTransform(94.1,271.2,0.661,0.661,-30.9,0,0,6,5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regY:5.4,scaleX:0.66,scaleY:0.66,rotation:-43.6,x:86.4,y:272.8},3).to({regX:6.1,regY:5.5,scaleX:0.66,scaleY:0.66,rotation:-56.2,x:79.7,y:275.4},3).to({regY:5.7,rotation:-13.8,x:73.8,y:271.1},3).to({regX:6.2,regY:5.5,rotation:28.4,x:69.6,y:268.8},3).to({rotation:1.5,x:80.7,y:271.4},5).to({regX:6,rotation:-30.9,x:94.1,y:271.2},6).wait(1));

	// 大腿
	this.instance_9 = new lib.xespeiyou_com__1_154_27642("synched",0);
	this.instance_9.setTransform(76.3,255.3,1,1,31.2,0,0,6.3,1.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({rotation:8.1,x:83.3,y:257.5},6).to({rotation:-14.7,x:90.3,y:256.5},6).to({regX:6.4,regY:1.7,rotation:6,x:83.9,y:257.5},5).to({regX:6.3,regY:1.6,rotation:31.2,x:76.3,y:255.3},6).wait(1));

	// 小腿
	this.instance_10 = new lib.xespeiyou_com__1_156_50322("synched",0);
	this.instance_10.setTransform(70.4,268.7,1,1,19.5,0,0,4.5,3.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({regX:4.4,rotation:-3.3,x:83,y:270.9},6).to({regX:4.5,rotation:-26.4,x:95.8,y:270},6).to({regX:4.4,scaleX:1,scaleY:1,rotation:-41.4,x:89.7,y:271.7},2).to({regX:4.5,scaleX:1,scaleY:1,rotation:-64,x:82,y:273.1},3).to({scaleX:1,scaleY:1,rotation:-22.1,x:75.8,y:269.4},3).to({scaleX:1,scaleY:1,rotation:19.5,x:70.4,y:268.7},3).wait(1));

	// 影子
	this.instance_11 = new lib.xespeiyou_com__1_158_19422("synched",0);
	this.instance_11.setTransform(83,287.4,1,1,0,0,0,29.4,4.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({scaleX:1.05},6).to({scaleX:1},6).to({scaleX:1.05},5).to({scaleX:1},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2,-60.6,382.6,352.1);


(lib.xespeiyou_com__1_133_55671 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 头
	this.instance = new lib.xespeiyou_com__1_121_97668();
	this.instance.setTransform(83.6,190.7,0.661,0.661,0,0,0,121,288.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:0.7,y:192.2},6).to({rotation:1,x:83.7,y:190.7},6).to({rotation:0.9,x:83.6,y:192},4).to({rotation:0.7,y:192.2},1).to({rotation:0,y:190.7},6).wait(1));

	// 小臂
	this.instance_1 = new lib.xespeiyou_com__1_138_17035("synched",0);
	this.instance_1.setTransform(78.6,214.8,1,1,83.2,0,0,6.2,1.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,rotation:30.6,x:88.3,y:219.1},6).to({regX:6.4,regY:1.8,scaleX:1,scaleY:1,rotation:-21.9,x:95.6,y:212.1},6).to({regX:6.3,scaleX:1,scaleY:1,rotation:25.8,x:89.1,y:217.9},5).to({regX:6.2,regY:1.7,scaleX:1,scaleY:1,rotation:83.2,x:78.6,y:214.8},6).wait(1));

	// 上臂
	this.instance_2 = new lib.xespeiyou_com__1_137_13148("synched",0);
	this.instance_2.setTransform(85.5,206.8,1,1,51.2,0,0,5,2.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:2.5,rotation:-1.5,y:209.1},6).to({regY:2.4,rotation:-54.3,x:85.9,y:208.2},6).to({scaleX:1,scaleY:1,rotation:-6.3,x:85.6,y:209},5).to({scaleX:1,scaleY:1,rotation:51.2,x:85.5,y:206.8},6).wait(1));

	// 身体
	this.instance_3 = new lib.xespeiyou_com__1_139_47138("synched",0);
	this.instance_3.setTransform(87,263.4,1,1,2.2,0,0,26.8,73);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:264.9},6).to({y:263.4},6).to({y:264.9},5).to({y:263.4},6).wait(1));

	// 小臂
	this.instance_4 = new lib.xespeiyou_com__1_152_64706("synched",0);
	this.instance_4.setTransform(94.9,211.6,1,1,-16.3,0,0,5.7,3.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:5.6,scaleX:1,scaleY:1,rotation:26.8,x:85.6,y:215.4},6).to({regX:5.8,scaleX:1,scaleY:1,rotation:69.8,x:76.7,y:216.1},6).to({regY:3.1,scaleX:1,scaleY:1,rotation:30.6,x:85,y:215.5},5).to({regX:5.7,regY:3.2,scaleX:1,scaleY:1,rotation:-16.3,x:94.9,y:211.6},6).wait(1));

	// 上臂
	this.instance_5 = new lib.xespeiyou_com__1_141_96903("synched",0);
	this.instance_5.setTransform(85.1,205.2,1,1,-43,0,0,4.5,1.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:4.6,rotation:1.5,x:85.7,y:206.9},6).to({regY:1.8,rotation:45.8,x:86.4,y:205.6},6).to({rotation:5.3,x:85.7,y:206.9},5).to({regX:4.5,regY:1.9,rotation:-43,x:85.1,y:205.2},6).wait(1));

	// 大腿
	this.instance_6 = new lib.xespeiyou_com__1_119_39659("synched",0);
	this.instance_6.setTransform(87.6,257.9,0.661,0.661,-19,0,0,8.7,3.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regY:3.4,rotation:10.5,x:82.6,y:258.6},6).to({regX:8.6,rotation:40.3,x:77.7,y:256.3},6).to({rotation:13.3,x:82.2,y:258.5},5).to({regX:8.7,regY:3.3,rotation:-19,x:87.6,y:257.9},6).wait(1));

	// 小腿
	this.instance_7 = new lib.xespeiyou_com__1_117_61064("synched",0);
	this.instance_7.setTransform(94.1,271.2,0.661,0.661,-30.9,0,0,6,5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regY:5.4,scaleX:0.66,scaleY:0.66,rotation:-43.6,x:86.4,y:272.8},3).to({regX:6.1,regY:5.5,scaleX:0.66,scaleY:0.66,rotation:-56.2,x:79.7,y:275.4},3).to({regY:5.7,rotation:-13.8,x:73.8,y:271.1},3).to({regX:6.2,regY:5.5,rotation:28.4,x:69.6,y:268.8},3).to({rotation:1.5,x:80.7,y:271.4},5).to({regX:6,rotation:-30.9,x:94.1,y:271.2},6).wait(1));

	// 大腿
	this.instance_8 = new lib.xespeiyou_com__1_154_27642("synched",0);
	this.instance_8.setTransform(76.3,255.3,1,1,31.2,0,0,6.3,1.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({rotation:8.1,x:83.3,y:257.5},6).to({rotation:-14.7,x:90.3,y:256.5},6).to({regX:6.4,regY:1.7,rotation:6,x:83.9,y:257.5},5).to({regX:6.3,regY:1.6,rotation:31.2,x:76.3,y:255.3},6).wait(1));

	// 小腿
	this.instance_9 = new lib.xespeiyou_com__1_156_50322("synched",0);
	this.instance_9.setTransform(70.4,268.7,1,1,19.5,0,0,4.5,3.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({regX:4.4,rotation:-3.3,x:83,y:270.9},6).to({regX:4.5,rotation:-26.4,x:95.8,y:270},6).to({regX:4.4,scaleX:1,scaleY:1,rotation:-41.4,x:89.7,y:271.7},2).to({regX:4.5,scaleX:1,scaleY:1,rotation:-64,x:82,y:273.1},3).to({scaleX:1,scaleY:1,rotation:-22.1,x:75.8,y:269.4},3).to({scaleX:1,scaleY:1,rotation:19.5,x:70.4,y:268.7},3).wait(1));

	// 影子
	this.instance_10 = new lib.xespeiyou_com__1_158_19422("synched",0);
	this.instance_10.setTransform(83,287.4,1,1,0,0,0,29.4,4.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({scaleX:1.05},6).to({scaleX:1},6).to({scaleX:1.05},5).to({scaleX:1},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2,-60.6,382.6,352.1);


(lib.xespeiyou_com__1_51_37832 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//
		///* 在此帧处停止
		//Flash 时间轴将在插入此代码的帧处停止/暂停。
		//也可用于停止/暂停影片剪辑的时间轴。
		//*/
		//
		//stop();
		//
	}
	this.frame_1 = function() {
		//
		///* 在此帧处停止
		//Flash 时间轴将在插入此代码的帧处停止/暂停。
		//也可用于停止/暂停影片剪辑的时间轴。
		//*/
		//
		//stop();
		//
	}
	this.frame_2 = function() {
		//
		///* 在此帧处停止
		//Flash 时间轴将在插入此代码的帧处停止/暂停。
		//也可用于停止/暂停影片剪辑的时间轴。
		//*/
		//
		//stop();
		//
	}
	this.frame_3 = function() {
		//
		///* 在此帧处停止
		//Flash 时间轴将在插入此代码的帧处停止/暂停。
		//也可用于停止/暂停影片剪辑的时间轴。
		//*/
		//
		//stop();
		//
	}
	this.frame_4 = function() {
		//
		///* 在此帧处停止
		//Flash 时间轴将在插入此代码的帧处停止/暂停。
		//也可用于停止/暂停影片剪辑的时间轴。
		//*/
		//
		//stop();
		//
	}
	this.frame_5 = function() {
		//
		///* 在此帧处停止
		//Flash 时间轴将在插入此代码的帧处停止/暂停。
		//也可用于停止/暂停影片剪辑的时间轴。
		//*/
		//
		//stop();
		//
	}
	this.frame_6 = function() {
		//
		///* 在此帧处停止
		//Flash 时间轴将在插入此代码的帧处停止/暂停。
		//也可用于停止/暂停影片剪辑的时间轴。
		//*/
		//
		//stop();
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1));

	// 图层 1
	this.instance = new lib.xespeiyou_com__1_13_28026();
	this.instance.setTransform(-1.3,-59.3,1,1,0,0,0,0.2,-60.2);

	this.instance_1 = new lib.xespeiyou_com__1_17_44383();
	this.instance_1.setTransform(-1.2,-58.5,1,1,0,0,0,-0.1,-59.4);

	this.instance_2 = new lib.xespeiyou_com__1_19_23360();
	this.instance_2.setTransform(-30.4,-46.4,1,1,0,0,0,0.3,-72.1);

	this.instance_3 = new lib.xespeiyou_com__1_14_94984();
	this.instance_3.setTransform(0.5,-60.5,1,1,0,0,0,0.2,-60.2);

	this.instance_4 = new lib.xespeiyou_com__1_15_43155();
	this.instance_4.setTransform(-0.4,-57.8,1,1,0,0,0,0.2,-60.2);

	this.instance_5 = new lib.xespeiyou_com__1_20_46043();
	this.instance_5.setTransform(-30.4,-46.4,1,1,0,0,0,0.3,-72.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1,p:{regX:-0.1,regY:-59.4,scaleX:1,scaleY:1,x:-1.2,y:-58.5}}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_1,p:{regX:3.6,regY:9,scaleX:1.004,scaleY:1.003,x:2.5,y:9.9}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.2,-125.2,88,134.7);


(lib.xespeiyou_com__1_40_70171 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{正常左:0,向左走:1,拿灯笼向左走:2});

	// timeline functions:
	this.frame_0 = function() {
		//
		///* 在此帧处停止
		//Flash 时间轴将在插入此代码的帧处停止/暂停。
		//也可用于停止/暂停影片剪辑的时间轴。
		//*/
		//
		//stop();
		//
	}
	this.frame_1 = function() {
		//
		///* 在此帧处停止
		//Flash 时间轴将在插入此代码的帧处停止/暂停。
		//也可用于停止/暂停影片剪辑的时间轴。
		//*/
		//
		//stop();
		//
	}
	this.frame_2 = function() {
		//
		///* 在此帧处停止
		//Flash 时间轴将在插入此代码的帧处停止/暂停。
		//也可用于停止/暂停影片剪辑的时间轴。
		//*/
		//
		//stop();
		//
	}
	this.frame_3 = function() {
		//
		///* 在此帧处停止
		//Flash 时间轴将在插入此代码的帧处停止/暂停。
		//也可用于停止/暂停影片剪辑的时间轴。
		//*/
		//
		//stop();
		//
	}
	this.frame_4 = function() {
		//
		///* 在此帧处停止
		//Flash 时间轴将在插入此代码的帧处停止/暂停。
		//也可用于停止/暂停影片剪辑的时间轴。
		//*/
		//
		//stop();
		//
	}
	this.frame_5 = function() {
		//
		///* 在此帧处停止
		//Flash 时间轴将在插入此代码的帧处停止/暂停。
		//也可用于停止/暂停影片剪辑的时间轴。
		//*/
		//
		//stop();
		//
	}
	this.frame_6 = function() {
		//
		///* 在此帧处停止
		//Flash 时间轴将在插入此代码的帧处停止/暂停。
		//也可用于停止/暂停影片剪辑的时间轴。
		//*/
		//
		//stop();
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1));

	// 图层 1
	this.instance = new lib.xespeiyou_com__1_8_12975();
	this.instance.setTransform(-4.4,-62.5,0.944,0.944,0,0,0,0.1,-63);

	this.instance_1 = new lib.xespeiyou_com__1_144_16181();
	this.instance_1.setTransform(-6.8,-57.9,0.37,0.37,0,0,0,105.2,162.4);

	this.instance_2 = new lib.xespeiyou_com__1_11_92780();
	this.instance_2.setTransform(-24,-51.9,0.944,0.944,0,0,0,0.3,-70.7);

	this.instance_3 = new lib.xespeiyou_com__1_9_60992();
	this.instance_3.setTransform(-1.1,-59.2,0.916,0.916,0,0,0,0.1,-63);

	this.instance_4 = new lib.xespeiyou_com__1_10_36146();
	this.instance_4.setTransform(-1.6,-62.4,1,1,0,0,0,0.1,-63);

	this.instance_5 = new lib.xespeiyou_com__1_12_25897();
	this.instance_5.setTransform(-24,-51.9,0.944,0.944,0,0,0,0.3,-70.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1,p:{regX:105.2,regY:162.4,scaleX:0.37,rotation:0,x:-6.8,y:-57.9}}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_1,p:{regX:113.5,regY:326.9,scaleX:0.389,rotation:2.2,x:-1.4,y:3.2}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37,-113.1,79.1,115.4);


(lib.xespeiyou_com__1_26_38639 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.xespeiyou_com__1_135_15210();
	this.instance.setTransform(28.9,-67.6,0.391,0.391,0,0,0,96.6,144);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9,-133.8,87.9,123.9);


(lib.xespeiyou_com__1_25_76603 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.xespeiyou_com__1_134_38660();
	this.instance.setTransform(28.9,-67.6,0.391,0.391,0,0,0,96.6,144);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8.1,-147.6,149.5,137.7);


(lib.xespeiyou_com__1_24_2311 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.xespeiyou_com__1_133_55671();
	this.instance.setTransform(0.5,-64.1,0.391,0.391,0,0,0,96.6,144);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-36.1,-120.9,75.9,114.5);


(lib.xespeiyou_com__1_23_28983 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_40 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(40).call(this.frame_40).wait(1));

	// 图层 1
	this.instance = new lib.xespeiyou_com__1_121_97668();
	this.instance.setTransform(-9.2,-43.8,0.26,0.26,0,0,0,121.2,288.6);

	this.instance_1 = new lib.xespeiyou_com__1_138_17035("synched",0);
	this.instance_1.setTransform(-9.7,-33.7,0.393,0.393,17.2,0,0,6.2,1.7);

	this.instance_2 = new lib.xespeiyou_com__1_137_13148("synched",0);
	this.instance_2.setTransform(-8.6,-37.5,0.393,0.393,18.5,0,0,4.8,2.6);

	this.instance_3 = new lib.xespeiyou_com__1_139_47138("synched",0);
	this.instance_3.setTransform(-7.9,-15.3,0.393,0.393,2.2,0,0,26.8,73.1);

	this.instance_4 = new lib.xespeiyou_com__1_154_27642("synched",0);
	this.instance_4.setTransform(-8,-18.4,0.393,0.393,6,0,0,6.2,1.8);

	this.instance_5 = new lib.xespeiyou_com__1_156_50322("synched",0);
	this.instance_5.setTransform(-7.8,-12.7,0.393,0.393,3.1,0,0,4.6,2.8);

	this.instance_6 = new lib.xespeiyou_com__1_152_64706("synched",0);
	this.instance_6.setTransform(-4.8,-35.6,0.393,0.393,-16.2,0,0,5.6,3.5);

	this.instance_7 = new lib.xespeiyou_com__1_141_96903("synched",0);
	this.instance_7.setTransform(-8.7,-38.2,0.393,0.393,-43,0,0,4.7,1.9);

	this.instance_8 = new lib.xespeiyou_com__1_154_27642("synched",0);
	this.instance_8.setTransform(-11.6,-19,0.393,0.393,6,0,0,6.2,1.8);

	this.instance_9 = new lib.xespeiyou_com__1_156_50322("synched",0);
	this.instance_9.setTransform(-11.4,-13.3,0.393,0.393,3.1,0,0,4.6,2.8);

	this.instance_10 = new lib.xespeiyou_com__1_158_19422("synched",0);
	this.instance_10.setTransform(-9.5,-5.9,0.393,0.393,0,0,0,29.4,4.2);

	this.instance_11 = new lib.xespeiyou_com__1_138_17035("synched",0);
	this.instance_11.setTransform(-7.2,-40.7,0.393,0.393,124.7,0,0,6.3,1.7);

	this.instance_12 = new lib.xespeiyou_com__1_137_13148("synched",0);
	this.instance_12.setTransform(-3,-39.7,0.393,0.393,113.7,0,0,4.7,2.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9,p:{regX:4.6,regY:2.8,rotation:3.1,x:-11.4,y:-13.3}},{t:this.instance_8,p:{regY:1.8,rotation:6,x:-11.6,regX:6.2,y:-19}},{t:this.instance_7,p:{regY:1.9,rotation:-43,x:-8.7,y:-38.2,regX:4.7}},{t:this.instance_6,p:{regX:5.6,regY:3.5,rotation:-16.2,x:-4.8,y:-35.6}},{t:this.instance_5,p:{regX:4.6,rotation:3.1,x:-7.8,y:-12.7,regY:2.8}},{t:this.instance_4,p:{rotation:6,x:-8,y:-18.4,regY:1.8}},{t:this.instance_3,p:{regX:26.8,regY:73.1,rotation:2.2,x:-7.9,y:-15.3}},{t:this.instance_2,p:{regX:4.8,regY:2.6,rotation:18.5,x:-8.6,y:-37.5}},{t:this.instance_1,p:{regX:6.2,rotation:17.2,x:-9.7,y:-33.7,regY:1.7}},{t:this.instance,p:{regX:121.2,regY:288.6,rotation:0,x:-9.2,y:-43.8}}]}).to({state:[{t:this.instance_10},{t:this.instance_9,p:{regX:4.7,regY:2.9,rotation:56.6,x:-17.2,y:-15.4}},{t:this.instance_8,p:{regY:1.9,rotation:59.5,x:-12.8,regX:6.2,y:-19}},{t:this.instance_12,p:{regY:2.5,rotation:113.7,x:-3,y:-39.7,regX:4.7}},{t:this.instance_11,p:{regX:6.3,regY:1.7,rotation:124.7,x:-7.2,y:-40.7}},{t:this.instance_7,p:{regY:1.8,rotation:-25.5,x:-3.8,y:-37,regX:4.7}},{t:this.instance_6,p:{regX:5.5,regY:3.6,rotation:1.2,x:-0.9,y:-33.4}},{t:this.instance_5,p:{regX:4.6,rotation:3.1,x:-7.8,y:-12.7,regY:2.8}},{t:this.instance_4,p:{rotation:6,x:-8,y:-18.4,regY:1.8}},{t:this.instance_3,p:{regX:26.7,regY:73,rotation:19.7,x:-9.9,y:-15}},{t:this.instance_2,p:{regX:4.7,regY:2.5,rotation:98.7,x:-4.2,y:-37.7}},{t:this.instance_1,p:{regX:6.3,rotation:109.7,x:-8.7,y:-37.5,regY:1.7}},{t:this.instance,p:{regX:121.1,regY:288.4,rotation:17.5,x:-2.6,y:-42.6}}]},5).to({state:[{t:this.instance_9,p:{regX:4.7,regY:2.9,rotation:171.6,x:-5,y:-5}},{t:this.instance_8,p:{regY:1.9,rotation:174.5,x:-3.6,regX:6.1,y:0.5}},{t:this.instance_12,p:{regY:2.4,rotation:-131.3,x:11,y:18.2,regX:4.7}},{t:this.instance_11,p:{regX:6.5,regY:1.9,rotation:-120.3,x:13.7,y:14.7}},{t:this.instance_7,p:{regY:1.7,rotation:89.5,x:8.9,y:16.3,regX:4.5}},{t:this.instance_6,p:{regX:5.5,regY:3.6,rotation:116.3,x:4.4,y:17.4}},{t:this.instance_5,p:{regX:4.5,rotation:118.1,x:-11.5,y:2.4,regY:2.8}},{t:this.instance_4,p:{rotation:121,x:-6.2,y:4.6,regY:1.8}},{t:this.instance_3,p:{regX:26.7,regY:73,rotation:134.7,x:-8.5,y:1.4}},{t:this.instance_2,p:{regX:4.7,regY:2.6,rotation:-146.3,x:9.7,y:16.2}},{t:this.instance_1,p:{regX:6.3,rotation:-135.3,x:11.4,y:12.2,regY:1.7}},{t:this.instance,p:{regX:121.2,regY:288.2,rotation:132.5,x:13.5,y:19.8}}]},2).to({state:[{t:this.instance_9,p:{regX:4.7,regY:2.9,rotation:171.6,x:-6.9,y:67.9}},{t:this.instance_8,p:{regY:1.9,rotation:174.5,x:-5.5,regX:6.1,y:73.4}},{t:this.instance_12,p:{regY:2.4,rotation:-131.3,x:9.1,y:91.1,regX:4.7}},{t:this.instance_11,p:{regX:6.5,regY:1.9,rotation:-120.3,x:11.8,y:87.6}},{t:this.instance_7,p:{regY:1.7,rotation:89.5,x:7,y:89.2,regX:4.5}},{t:this.instance_6,p:{regX:5.5,regY:3.6,rotation:116.3,x:2.5,y:90.3}},{t:this.instance_5,p:{regX:4.5,rotation:118.1,x:-13.4,y:75.3,regY:2.8}},{t:this.instance_4,p:{rotation:121,x:-8.1,y:77.5,regY:1.8}},{t:this.instance_3,p:{regX:26.7,regY:73,rotation:134.7,x:-10.4,y:74.3}},{t:this.instance_2,p:{regX:4.7,regY:2.6,rotation:-146.3,x:7.8,y:89.1}},{t:this.instance_1,p:{regX:6.3,rotation:-135.3,x:9.5,y:85.1,regY:1.7}},{t:this.instance,p:{regX:121.2,regY:288.2,rotation:132.5,x:11.6,y:92.7}}]},3).to({state:[{t:this.instance_9,p:{regX:4.7,regY:2.9,rotation:-143.4,x:25.2,y:154.1}},{t:this.instance_8,p:{regY:1.9,rotation:-140.5,x:22.3,regX:6.2,y:159}},{t:this.instance_12,p:{regY:2.5,rotation:-86.3,x:20.1,y:181.8,regX:4.8}},{t:this.instance_11,p:{regX:6.4,regY:1.9,rotation:-75.3,x:24.5,y:181.4}},{t:this.instance_7,p:{regY:1.7,rotation:134.5,x:20,y:179,regX:4.5}},{t:this.instance_6,p:{regX:5.4,regY:3.6,rotation:161.3,x:16,y:176.6}},{t:this.instance_5,p:{regX:4.6,rotation:163.1,x:15.4,y:154.7,regY:2.9}},{t:this.instance_4,p:{rotation:166,x:17.6,y:160.1,regY:1.9}},{t:this.instance_3,p:{regX:26.7,regY:73,rotation:179.7,x:18.2,y:156.2}},{t:this.instance_2,p:{regX:4.7,regY:2.5,rotation:-101.3,x:20.6,y:179.5}},{t:this.instance_1,p:{regX:6.4,rotation:-90.3,x:24.7,y:177.9,regY:1.6}},{t:this.instance,p:{regX:121.5,regY:288.2,rotation:177.5,x:20.7,y:184.7}}]},3).to({state:[{t:this.instance_9,p:{regX:4.7,regY:2.9,rotation:-143.4,x:34.3,y:333.4}},{t:this.instance_8,p:{regY:1.9,rotation:-140.5,x:31.4,regX:6.2,y:338.2}},{t:this.instance_12,p:{regY:2.5,rotation:-86.3,x:29.2,y:361,regX:4.8}},{t:this.instance_11,p:{regX:6.4,regY:1.9,rotation:-75.3,x:33.6,y:360.6}},{t:this.instance_7,p:{regY:1.7,rotation:134.5,x:29.1,y:358.3,regX:4.5}},{t:this.instance_6,p:{regX:5.4,regY:3.6,rotation:161.3,x:25.1,y:355.9}},{t:this.instance_5,p:{regX:4.6,rotation:163.1,x:24.5,y:333.9,regY:2.9}},{t:this.instance_4,p:{rotation:166,x:26.7,y:339.3,regY:1.9}},{t:this.instance_3,p:{regX:26.7,regY:73,rotation:179.7,x:27.3,y:335.5}},{t:this.instance_2,p:{regX:4.7,regY:2.5,rotation:-101.3,x:29.7,y:358.8}},{t:this.instance_1,p:{regX:6.4,rotation:-90.3,x:33.8,y:357.1,regY:1.6}},{t:this.instance,p:{regX:121.5,regY:288.2,rotation:177.5,x:29.8,y:363.9}}]},4).wait(24));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41,-119.2,76.3,115);


(lib.xespeiyou_com__1_22_48427 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.xespeiyou_com__1_265_53269("synched",0);
	this.instance.setTransform(0.3,-67.4,0.258,0.258,0,0,0,145.6,206.3);

	this.instance_1 = new lib.xespeiyou_com__1_262_53160("synched",0);
	this.instance_1.setTransform(-3.5,-32.8,0.264,0.235,0,0,0,6.2,12.6);

	this.instance_2 = new lib.xespeiyou_com__1_88_26421("synched",0);
	this.instance_2.setTransform(-4.1,-31.3);

	this.instance_3 = new lib.xespeiyou_com__1_264_42580("synched",0);
	this.instance_3.setTransform(-3.8,-20.9,0.258,0.258,0,0,0,9.5,2.4);

	this.instance_4 = new lib.xespeiyou_com__1_261_54999("synched",0);
	this.instance_4.setTransform(-3.2,-15.3,0.258,0.258,0,0,0,5.8,3.9);

	this.instance_5 = new lib.xespeiyou_com__1_264_42580("synched",0);
	this.instance_5.setTransform(-7.1,-21.8,0.258,0.258,0,0,0,9.5,2.4);

	this.instance_6 = new lib.xespeiyou_com__1_261_54999("synched",0);
	this.instance_6.setTransform(-6.4,-16.3,0.258,0.258,0,0,0,5.8,3.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.298)").s().p("Ah8AVQgzgIAAgNQAAgLAzgJQA0gJBIAAQBJAAAzAJQA0AJAAALQAAANg0AIQgzAJhJAAQhIAAg0gJg");
	this.shape.setTransform(-2.4,-8.4,0.721,0.943);

	this.instance_7 = new lib.xespeiyou_com__1_131_95881("synched",0);
	this.instance_7.setTransform(-6.6,-43.3,0.258,0.258,0,0,0,22.2,24.9);

	this.addChild(this.instance_7,this.shape,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-38.2,-121.6,77.1,116.1);


(lib.xespeiyou_com__1_21_715 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.xespeiyou_com__1_61_78390();
	this.instance.setTransform(45.8,-69.1,0.407,0.407,0,0,0,196,131);

	this.instance_1 = new lib.xespeiyou_com__1_121_97668();
	this.instance_1.setTransform(-2.2,-40.2,0.26,0.26,0,0,0,121.2,288.6);

	this.instance_2 = new lib.xespeiyou_com__1_138_17035("synched",0);
	this.instance_2.setTransform(-4.2,-30.7,0.393,0.393,17.2,0,0,6.2,1.7);

	this.instance_3 = new lib.xespeiyou_com__1_137_13148("synched",0);
	this.instance_3.setTransform(-1.6,-33.9,0.393,0.393,51.2,0,0,4.8,2.6);

	this.instance_4 = new lib.xespeiyou_com__1_139_47138("synched",0);
	this.instance_4.setTransform(-0.9,-11.6,0.393,0.393,2.2,0,0,26.8,73.1);

	this.instance_5 = new lib.xespeiyou_com__1_154_27642("synched",0);
	this.instance_5.setTransform(-1,-14.7,0.393,0.393,6,0,0,6.2,1.8);

	this.instance_6 = new lib.xespeiyou_com__1_156_50322("synched",0);
	this.instance_6.setTransform(-0.8,-9,0.393,0.393,3.1,0,0,4.6,2.8);

	this.instance_7 = new lib.xespeiyou_com__1_152_64706("synched",0);
	this.instance_7.setTransform(2.2,-31.9,0.393,0.393,-16.2,0,0,5.6,3.5);

	this.instance_8 = new lib.xespeiyou_com__1_141_96903("synched",0);
	this.instance_8.setTransform(-1.7,-34.5,0.393,0.393,-43,0,0,4.7,1.9);

	this.instance_9 = new lib.xespeiyou_com__1_154_27642("synched",0);
	this.instance_9.setTransform(-4.6,-15.3,0.393,0.393,6,0,0,6.2,1.8);

	this.instance_10 = new lib.xespeiyou_com__1_156_50322("synched",0);
	this.instance_10.setTransform(-4.4,-9.6,0.393,0.393,3.1,0,0,4.6,2.8);

	this.instance_11 = new lib.xespeiyou_com__1_158_19422("synched",0);
	this.instance_11.setTransform(-2.5,-2.2,0.393,0.393,0,0,0,29.4,4.2);

	this.addChild(this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-34.3,-138.8,150.3,138.2);


(lib.xespeiyou_com__1_7_39091 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.xespeiyou_com__1_145_57039();
	this.instance.setTransform(23.1,-75.5,0.363,0.363,0,0,0,105.2,162.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-15.6,-138.5,86.1,123);


(lib.xespeiyou_com__1_6_44677 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.xespeiyou_com__1_140_15843();
	this.instance.setTransform(23.1,-75.5,0.363,0.363,0,0,0,105.2,162.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-15.5,-150.6,153.7,135);


(lib.xespeiyou_com__1_5_31858 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.xespeiyou_com__1_143_86326();
	this.instance.setTransform(-0.1,-73.9,0.363,0.363,0,0,0,105.2,162.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-38.7,-133.3,77.3,119.4);


(lib.xespeiyou_com__1_49_86579 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//
		///* 在此帧处停止
		//Flash 时间轴将在插入此代码的帧处停止/暂停。
		//也可用于停止/暂停影片剪辑的时间轴。
		//*/
		//
		//stop();
		//
	}
	this.frame_1 = function() {
		//
		///* 在此帧处停止
		//Flash 时间轴将在插入此代码的帧处停止/暂停。
		//也可用于停止/暂停影片剪辑的时间轴。
		//*/
		//
		//stop();
		//
	}
	this.frame_2 = function() {
		//
		///* 在此帧处停止
		//Flash 时间轴将在插入此代码的帧处停止/暂停。
		//也可用于停止/暂停影片剪辑的时间轴。
		//*/
		//
		//stop();
		//
	}
	this.frame_3 = function() {
		//
		///* 在此帧处停止
		//Flash 时间轴将在插入此代码的帧处停止/暂停。
		//也可用于停止/暂停影片剪辑的时间轴。
		//*/
		//
		//stop();
		//
	}
	this.frame_4 = function() {
		//
		///* 在此帧处停止
		//Flash 时间轴将在插入此代码的帧处停止/暂停。
		//也可用于停止/暂停影片剪辑的时间轴。
		//*/
		//
		//stop();
		//
	}
	this.frame_5 = function() {
		//
		///* 在此帧处停止
		//Flash 时间轴将在插入此代码的帧处停止/暂停。
		//也可用于停止/暂停影片剪辑的时间轴。
		//*/
		//
		//stop();
		//
	}
	this.frame_6 = function() {
		//
		///* 在此帧处停止
		//Flash 时间轴将在插入此代码的帧处停止/暂停。
		//也可用于停止/暂停影片剪辑的时间轴。
		//*/
		//
		//stop();
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1));

	// 图层 1
	this.instance = new lib.xespeiyou_com__1_2_26435();
	this.instance.setTransform(0.3,-69.1,1,1,0,0,0,0.1,-69.4);

	this.instance_1 = new lib.xespeiyou_com__1_5_31858();
	this.instance_1.setTransform(-0.2,-68.5,1,1,0,0,0,-0.1,-73.5);

	this.instance_2 = new lib.xespeiyou_com__1_6_44677();
	this.instance_2.setTransform(-27.3,-66,1,1,0,0,0,0.3,-72.5);

	this.instance_3 = new lib.xespeiyou_com__1_3_19597();
	this.instance_3.setTransform(0.3,-69.1,1,1,0,0,0,0.1,-69.4);

	this.instance_4 = new lib.xespeiyou_com__1_4_75883();
	this.instance_4.setTransform(0.3,-69.1,1,1,0,0,0,0.1,-69.4);

	this.instance_5 = new lib.xespeiyou_com__1_7_39091();
	this.instance_5.setTransform(-27.3,-66,1,1,0,0,0,0.3,-72.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1,p:{regY:-73.5,scaleX:1,scaleY:1,x:-0.2,y:-68.5}}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_1,p:{regY:-14.1,scaleX:1.034,scaleY:0.993,x:-4.4,y:-9.6}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.6,-128.7,77.3,119.2);


(lib.xespeiyou_com__1_48_1421 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"正常左":0,"向左走":1,拿灯笼向右走:2});

	// timeline functions:
	this.frame_0 = function() {
		//
		///* 在此帧处停止
		//Flash 时间轴将在插入此代码的帧处停止/暂停。
		//也可用于停止/暂停影片剪辑的时间轴。
		//*/
		//
		//stop();
		//
	}
	this.frame_1 = function() {
		//
		///* 在此帧处停止
		//Flash 时间轴将在插入此代码的帧处停止/暂停。
		//也可用于停止/暂停影片剪辑的时间轴。
		//*/
		//
		//stop();
		//
	}
	this.frame_2 = function() {
		//
		///* 在此帧处停止
		//Flash 时间轴将在插入此代码的帧处停止/暂停。
		//也可用于停止/暂停影片剪辑的时间轴。
		//*/
		//
		//stop();
		//
	}
	this.frame_3 = function() {
		//
		///* 在此帧处停止
		//Flash 时间轴将在插入此代码的帧处停止/暂停。
		//也可用于停止/暂停影片剪辑的时间轴。
		//*/
		//
		//stop();
		//
	}
	this.frame_4 = function() {
		//
		///* 在此帧处停止
		//Flash 时间轴将在插入此代码的帧处停止/暂停。
		//也可用于停止/暂停影片剪辑的时间轴。
		//*/
		//
		//stop();
		//
	}
	this.frame_5 = function() {
		//
		///* 在此帧处停止
		//Flash 时间轴将在插入此代码的帧处停止/暂停。
		//也可用于停止/暂停影片剪辑的时间轴。
		//*/
		//
		//stop();
		//
	}
	this.frame_6 = function() {
		//
		///* 在此帧处停止
		//Flash 时间轴将在插入此代码的帧处停止/暂停。
		//也可用于停止/暂停影片剪辑的时间轴。
		//*/
		//
		//stop();
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1));

	// 图层 1
	this.instance = new lib.xespeiyou_com__1_22_48427();
	this.instance.setTransform(2.6,-61.2,1,1,0,0,0,0.2,-64.2);

	this.instance_1 = new lib.xespeiyou_com__1_24_2311();
	this.instance_1.setTransform(2.7,-59,1,1,0,0,0,0,-63.4);

	this.instance_2 = new lib.xespeiyou_com__1_25_76603();
	this.instance_2.setTransform(-25.8,-57.1,1,1,0,0,0,0.3,-66);

	this.instance_3 = new lib.xespeiyou_com__1_21_715();
	this.instance_3.setTransform(-4.6,-65.2,1,1,0,0,0,0.2,-64.2);

	this.ikNode_1 = new lib.xespeiyou_com__1_23_28983();
	this.ikNode_1.setTransform(2.6,-61.2,1,1,0,0,0,0.2,-64.2);

	this.instance_4 = new lib.xespeiyou_com__1_26_38639();
	this.instance_4.setTransform(-25.8,-57.1,1,1,0,0,0,0.3,-66);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1,p:{regY:-63.4,scaleX:1,scaleY:1,x:2.7,y:-59}}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.ikNode_1}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_1,p:{regY:-4.3,scaleX:1.177,scaleY:0.999,x:4.3,y:1}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35,-117.9,75.6,115.3);


(lib.xespeiyou_com__1_81_77332 = function() {
	this.initialize();

	// 图层 1
	this.cls_mc_btn = new lib.xespeiyou_com__1_55_63460();
	this.cls_mc_btn.setTransform(475.5,457.9,1.576,1.576,0,0,0,36.5,0);

	this.go_mc_btn = new lib.xespeiyou_com__1_54_13831();
	this.go_mc_btn.setTransform(217.1,458.2,1.576,1.576,0,0,0,36.5,0);

	this.minute_txt = new cjs.Text("000", "28px 'Microsoft YaHei'", "#FF6600");
	this.minute_txt.name = "minute_txt";
	this.minute_txt.textAlign = "center";
	this.minute_txt.lineHeight = 30;
	this.minute_txt.lineWidth = 100;
	this.minute_txt.setTransform(640.3,-68.1,0.695,1.129);

	this.board = new lib.xespeiyou_com__1_50_40116();
	this.board.setTransform(686.3,-0.2,1.129,1.129,0,0,0,101.2,74.1);

	this.Time_mc = new lib.xespeiyou_com__1_41_88333();
	this.Time_mc.setTransform(508.8,-44,0.228,0.228,0,0,0,168.3,168.3);

	this.person4 = new lib.xespeiyou_com__1_51_37832();
	this.person4.setTransform(707.6,332.5,1.053,1.053,0,0,0,4.3,9);

	this.person3 = new lib.xespeiyou_com__1_40_70171();
	this.person3.setTransform(683,305,1.053,1.053,0,0,0,1.9,1.9);

	this.person2 = new lib.xespeiyou_com__1_48_1421();
	this.person2.setTransform(647.6,279,1.053,1.053,0,0,0,2.4,-2.9);

	this.glim_mc = new lib.xespeiyou_com__1_45_55255();
	this.glim_mc.setTransform(547.9,237.2,1,1,-1.5,0,0,20.2,25.7);

	this.input_baiban = new lib.xespeiyou_com__1_44_33284();
	this.input_baiban.setTransform(31.2,-4.5,0.896,0.896,0,180,0);

	this.h1 = new lib.xespeiyou_com__1_28_83199();
	this.h1.setTransform(29.9,-45.3,1.165,1.165,0,0,0,0,-35.9);

	this.h2 = new lib.xespeiyou_com__1_29_87164();
	this.h2.setTransform(133.3,-45.3,1.165,1.165,0,0,0,0,-35.9);

	this.h3 = new lib.xespeiyou_com__1_30_95768();
	this.h3.setTransform(236.8,-45.3,1.165,1.165,0,0,0,0,-35.9);

	this.h4 = new lib.xespeiyou_com__1_31_69521();
	this.h4.setTransform(340.2,-45.3,1.165,1.165,0,0,0,0,-35.9);

	this.person1 = new lib.xespeiyou_com__1_49_86579();
	this.person1.setTransform(609,269,1,1,0,0,0,-1,-10);

	this.go_mc_main = new lib.xespeiyou_com__1_42_62259();
	this.go_mc_main.setTransform(353.8,281.1,1,1,0,0,0,242.8,17.6);

	this.addChild(this.go_mc_main,this.person1,this.h4,this.h3,this.h2,this.h1,this.input_baiban,this.glim_mc,this.person2,this.person3,this.person4,this.Time_mc,this.board,this.minute_txt,this.go_mc_btn,this.cls_mc_btn);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-70.9,-96.2,872.5,585.1);


// stage content:
(lib.l5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// 图层 1
	this.text = new cjs.Text("？", "28px 'Microsoft YaHei'");
	this.text.lineHeight = 28;
	this.text.setTransform(578.9,234.8);

	this.text_1 = new cjs.Text("桥", "28px 'Microsoft YaHei'");
	this.text_1.lineHeight = 28;
	this.text_1.setTransform(550.9,234.8);

	this.text_2 = new cjs.Text("过", "28px 'Microsoft YaHei'");
	this.text_2.lineHeight = 28;
	this.text_2.setTransform(522.9,234.8);

	this.text_3 = new cjs.Text("全", "28px 'Microsoft YaHei'");
	this.text_3.lineHeight = 28;
	this.text_3.setTransform(494.9,234.8);

	this.text_4 = new cjs.Text("安", "28px 'Microsoft YaHei'");
	this.text_4.lineHeight = 28;
	this.text_4.setTransform(466.9,234.8);

	this.text_5 = new cjs.Text("部", "28px 'Microsoft YaHei'");
	this.text_5.lineHeight = 28;
	this.text_5.setTransform(438.9,234.8);

	this.text_6 = new cjs.Text("全", "28px 'Microsoft YaHei'");
	this.text_6.lineHeight = 28;
	this.text_6.setTransform(410.9,234.8);

	this.text_7 = new cjs.Text("能", "28px 'Microsoft YaHei'");
	this.text_7.lineHeight = 28;
	this.text_7.setTransform(382.9,234.8);

	this.text_8 = new cjs.Text("才", "28px 'Microsoft YaHei'");
	this.text_8.lineHeight = 28;
	this.text_8.setTransform(354.9,234.8);

	this.text_9 = new cjs.Text("顺序", "28px 'Microsoft YaHei'");
	this.text_9.lineHeight = 28;
	this.text_9.setTransform(298.9,234.8);

	this.text_10 = new cjs.Text("么", "28px 'Microsoft YaHei'");
	this.text_10.lineHeight = 28;
	this.text_10.setTransform(270.9,234.8);

	this.text_11 = new cjs.Text("什", "28px 'Microsoft YaHei'");
	this.text_11.lineHeight = 28;
	this.text_11.setTransform(242.9,234.8);

	this.text_12 = new cjs.Text("采用", "28px 'Microsoft YaHei'");
	this.text_12.lineHeight = 28;
	this.text_12.setTransform(184.4,234.8);

	this.text_13 = new cjs.Text("要", "28px 'Microsoft YaHei'");
	this.text_13.lineHeight = 28;
	this.text_13.setTransform(156.4,234.8);

	this.text_14 = new cjs.Text("人", "28px 'Microsoft YaHei'");
	this.text_14.lineHeight = 28;
	this.text_14.setTransform(128.4,234.8);

	this.text_15 = new cjs.Text("个", "28px 'Microsoft YaHei'");
	this.text_15.lineHeight = 28;
	this.text_15.setTransform(100.4,234.8);

	this.text_16 = new cjs.Text("4", "28px 'Microsoft YaHei'");
	this.text_16.lineHeight = 28;
	this.text_16.setTransform(84,234.8);

	this.text_17 = new cjs.Text("：", "28px 'Microsoft YaHei'");
	this.text_17.lineHeight = 28;
	this.text_17.setTransform(56,234.8);

	this.text_18 = new cjs.Text("问", "28px 'Microsoft YaHei'");
	this.text_18.lineHeight = 28;
	this.text_18.setTransform(28,234.8);

	this.text_19 = new cjs.Text("请", "28px 'Microsoft YaHei'");
	this.text_19.lineHeight = 28;
	this.text_19.setTransform(0,234.8);

	this.text_20 = new cjs.Text("。", "28px 'Microsoft YaHei'");
	this.text_20.lineHeight = 28;
	this.text_20.setTransform(887.5,187.8);

	this.text_21 = new cjs.Text("了", "28px 'Microsoft YaHei'");
	this.text_21.lineHeight = 28;
	this.text_21.setTransform(859.2,187.8);

	this.text_22 = new cjs.Text("塌", "28px 'Microsoft YaHei'");
	this.text_22.lineHeight = 28;
	this.text_22.setTransform(830.9,187.8);

	this.text_23 = new cjs.Text("烧", "28px 'Microsoft YaHei'");
	this.text_23.lineHeight = 28;
	this.text_23.setTransform(802.6,187.8);

	this.text_24 = new cjs.Text("慢", "28px 'Microsoft YaHei'");
	this.text_24.lineHeight = 28;
	this.text_24.setTransform(774.3,187.8);

	this.text_25 = new cjs.Text("慢", "28px 'Microsoft YaHei'");
	this.text_25.lineHeight = 28;
	this.text_25.setTransform(746,187.8);

	this.text_26 = new cjs.Text("被", "28px 'Microsoft YaHei'");
	this.text_26.lineHeight = 28;
	this.text_26.setTransform(717.7,187.8);

	this.text_27 = new cjs.Text("会", "28px 'Microsoft YaHei'");
	this.text_27.lineHeight = 28;
	this.text_27.setTransform(689.4,187.8);

	this.text_28 = new cjs.Text("就", "28px 'Microsoft YaHei'");
	this.text_28.lineHeight = 28;
	this.text_28.setTransform(661.1,187.8);

	this.text_29 = new cjs.Text("桥", "28px 'Microsoft YaHei'");
	this.text_29.lineHeight = 28;
	this.text_29.setTransform(632.8,187.8);

	this.text_30 = new cjs.Text("后", "28px 'Microsoft YaHei'");
	this.text_30.lineHeight = 28;
	this.text_30.setTransform(604.5,187.8);

	this.text_31 = new cjs.Text("过", "28px 'Microsoft YaHei'");
	this.text_31.lineHeight = 28;
	this.text_31.setTransform(576.2,187.8);

	this.text_32 = new cjs.Text("分", "28px 'Microsoft YaHei'");
	this.text_32.lineHeight = 28;
	this.text_32.setTransform(547.9,187.8);

	this.text_33 = new cjs.Text("7", "28px 'Microsoft YaHei'");
	this.text_33.lineHeight = 28;
	this.text_33.setTransform(531.2,187.8);

	this.text_34 = new cjs.Text("1", "28px 'Microsoft YaHei'");
	this.text_34.lineHeight = 28;
	this.text_34.setTransform(514.5,187.8);

	this.text_35 = new cjs.Text("。", "28px 'Microsoft YaHei'");
	this.text_35.lineHeight = 28;
	this.text_35.setTransform(486.2,187.8);

	this.text_36 = new cjs.Text("分", "28px 'Microsoft YaHei'");
	this.text_36.lineHeight = 28;
	this.text_36.setTransform(457.9,187.8);

	this.text_37 = new cjs.Text("6", "28px 'Microsoft YaHei'");
	this.text_37.lineHeight = 28;
	this.text_37.setTransform(441.2,187.8);

	this.text_38 = new cjs.Text("时", "28px 'Microsoft YaHei'");
	this.text_38.lineHeight = 28;
	this.text_38.setTransform(412.9,187.8);

	this.text_39 = new cjs.Text("用", "28px 'Microsoft YaHei'");
	this.text_39.lineHeight = 28;
	this.text_39.setTransform(384.6,187.8);

	this.text_40 = new cjs.Text("要", "28px 'Microsoft YaHei'");
	this.text_40.lineHeight = 28;
	this.text_40.setTransform(356.3,187.8);

	this.text_41 = new cjs.Text("叔", "28px 'Microsoft YaHei'");
	this.text_41.lineHeight = 28;
	this.text_41.setTransform(328,187.8);

	this.text_42 = new cjs.Text("大", "28px 'Microsoft YaHei'");
	this.text_42.lineHeight = 28;
	this.text_42.setTransform(299.7,187.8);

	this.text_43 = new cjs.Text("灰", "28px 'Microsoft YaHei'");
	this.text_43.lineHeight = 28;
	this.text_43.setTransform(271.4,187.8);

	this.text_44 = new cjs.Text("，", "28px 'Microsoft YaHei'");
	this.text_44.lineHeight = 28;
	this.text_44.setTransform(243.1,187.8);

	this.text_45 = new cjs.Text("分", "28px 'Microsoft YaHei'");
	this.text_45.lineHeight = 28;
	this.text_45.setTransform(214.8,187.8);

	this.text_46 = new cjs.Text("5", "28px 'Microsoft YaHei'");
	this.text_46.lineHeight = 28;
	this.text_46.setTransform(198.1,187.8);

	this.text_47 = new cjs.Text("时", "28px 'Microsoft YaHei'");
	this.text_47.lineHeight = 28;
	this.text_47.setTransform(169.8,187.8);

	this.text_48 = new cjs.Text("用", "28px 'Microsoft YaHei'");
	this.text_48.lineHeight = 28;
	this.text_48.setTransform(141.5,187.8);

	this.text_49 = new cjs.Text("要", "28px 'Microsoft YaHei'");
	this.text_49.lineHeight = 28;
	this.text_49.setTransform(113.2,187.8);

	this.text_50 = new cjs.Text("西", "28px 'Microsoft YaHei'");
	this.text_50.lineHeight = 28;
	this.text_50.setTransform(84.9,187.8);

	this.text_51 = new cjs.Text("武", "28px 'Microsoft YaHei'");
	this.text_51.lineHeight = 28;
	this.text_51.setTransform(56.6,187.8);

	this.text_52 = new cjs.Text("，", "28px 'Microsoft YaHei'");
	this.text_52.lineHeight = 28;
	this.text_52.setTransform(28.3,187.8);

	this.text_53 = new cjs.Text("分", "28px 'Microsoft YaHei'");
	this.text_53.lineHeight = 28;
	this.text_53.setTransform(0,187.8);

	this.text_54 = new cjs.Text("4", "28px 'Microsoft YaHei'");
	this.text_54.lineHeight = 28;
	this.text_54.setTransform(882.4,140.8);

	this.text_55 = new cjs.Text("时", "28px 'Microsoft YaHei'");
	this.text_55.lineHeight = 28;
	this.text_55.setTransform(854.1,140.8);

	this.text_56 = new cjs.Text("用", "28px 'Microsoft YaHei'");
	this.text_56.lineHeight = 28;
	this.text_56.setTransform(825.8,140.8);

	this.text_57 = new cjs.Text("要", "28px 'Microsoft YaHei'");
	this.text_57.lineHeight = 28;
	this.text_57.setTransform(797.5,140.8);

	this.text_58 = new cjs.Text("儿", "28px 'Microsoft YaHei'");
	this.text_58.lineHeight = 28;
	this.text_58.setTransform(769.2,140.8);

	this.text_59 = new cjs.Text("薇", "28px 'Microsoft YaHei'");
	this.text_59.lineHeight = 28;
	this.text_59.setTransform(740.9,140.8);

	this.text_60 = new cjs.Text("，", "28px 'Microsoft YaHei'");
	this.text_60.lineHeight = 28;
	this.text_60.setTransform(712.6,140.8);

	this.text_61 = new cjs.Text("桥", "28px 'Microsoft YaHei'");
	this.text_61.lineHeight = 28;
	this.text_61.setTransform(684.3,140.8);

	this.text_62 = new cjs.Text("过", "28px 'Microsoft YaHei'");
	this.text_62.lineHeight = 28;
	this.text_62.setTransform(656,140.8);

	this.text_63 = new cjs.Text("以", "28px 'Microsoft YaHei'");
	this.text_63.lineHeight = 28;
	this.text_63.setTransform(627.7,140.8);

	this.text_64 = new cjs.Text("可", "28px 'Microsoft YaHei'");
	this.text_64.lineHeight = 28;
	this.text_64.setTransform(599.4,140.8);

	this.text_65 = new cjs.Text("就", "28px 'Microsoft YaHei'");
	this.text_65.lineHeight = 28;
	this.text_65.setTransform(571.1,140.8);

	this.text_66 = new cjs.Text("分", "28px 'Microsoft YaHei'");
	this.text_66.lineHeight = 28;
	this.text_66.setTransform(542.8,140.8);

	this.text_67 = new cjs.Text("1", "28px 'Microsoft YaHei'");
	this.text_67.lineHeight = 28;
	this.text_67.setTransform(526.1,140.8);

	this.text_68 = new cjs.Text("时", "28px 'Microsoft YaHei'");
	this.text_68.lineHeight = 28;
	this.text_68.setTransform(497.8,140.8);

	this.text_69 = new cjs.Text("用", "28px 'Microsoft YaHei'");
	this.text_69.lineHeight = 28;
	this.text_69.setTransform(469.5,140.8);

	this.text_70 = new cjs.Text("迪", "28px 'Microsoft YaHei'");
	this.text_70.lineHeight = 28;
	this.text_70.setTransform(441.2,140.8);

	this.text_71 = new cjs.Text("艾", "28px 'Microsoft YaHei'");
	this.text_71.lineHeight = 28;
	this.text_71.setTransform(412.9,140.8);

	this.text_72 = new cjs.Text("：", "28px 'Microsoft YaHei'");
	this.text_72.lineHeight = 28;
	this.text_72.setTransform(384.6,140.8);

	this.text_73 = new cjs.Text("同", "28px 'Microsoft YaHei'");
	this.text_73.lineHeight = 28;
	this.text_73.setTransform(356.3,140.8);

	this.text_74 = new cjs.Text("不", "28px 'Microsoft YaHei'");
	this.text_74.lineHeight = 28;
	this.text_74.setTransform(328,140.8);

	this.text_75 = new cjs.Text("度", "28px 'Microsoft YaHei'");
	this.text_75.lineHeight = 28;
	this.text_75.setTransform(299.7,140.8);

	this.text_76 = new cjs.Text("速", "28px 'Microsoft YaHei'");
	this.text_76.lineHeight = 28;
	this.text_76.setTransform(271.4,140.8);

	this.text_77 = new cjs.Text("走", "28px 'Microsoft YaHei'");
	this.text_77.lineHeight = 28;
	this.text_77.setTransform(243.1,140.8);

	this.text_78 = new cjs.Text("行", "28px 'Microsoft YaHei'");
	this.text_78.lineHeight = 28;
	this.text_78.setTransform(214.8,140.8);

	this.text_79 = new cjs.Text("人", "28px 'Microsoft YaHei'");
	this.text_79.lineHeight = 28;
	this.text_79.setTransform(186.5,140.8);

	this.text_80 = new cjs.Text("个", "28px 'Microsoft YaHei'");
	this.text_80.lineHeight = 28;
	this.text_80.setTransform(158.2,140.8);

	this.text_81 = new cjs.Text("4", "28px 'Microsoft YaHei'");
	this.text_81.lineHeight = 28;
	this.text_81.setTransform(141.5,140.8);

	this.text_82 = new cjs.Text("。", "28px 'Microsoft YaHei'");
	this.text_82.lineHeight = 28;
	this.text_82.setTransform(113.2,140.8);

	this.text_83 = new cjs.Text("）", "28px 'Microsoft YaHei'");
	this.text_83.lineHeight = 28;
	this.text_83.setTransform(84.9,140.8);

	this.text_84 = new cjs.Text("用", "28px 'Microsoft YaHei'");
	this.text_84.lineHeight = 28;
	this.text_84.setTransform(56.6,140.8);

	this.text_85 = new cjs.Text("使", "28px 'Microsoft YaHei'");
	this.text_85.lineHeight = 28;
	this.text_85.setTransform(28.3,140.8);

	this.text_86 = new cjs.Text("时", "28px 'Microsoft YaHei'");
	this.text_86.lineHeight = 28;
	this.text_86.setTransform(0,140.8);

	this.text_87 = new cjs.Text("同", "28px 'Microsoft YaHei'");
	this.text_87.lineHeight = 28;
	this.text_87.setTransform(872.8,93.8);

	this.text_88 = new cjs.Text("人", "28px 'Microsoft YaHei'");
	this.text_88.lineHeight = 28;
	this.text_88.setTransform(844.5,93.8);

	this.text_89 = new cjs.Text("两", "28px 'Microsoft YaHei'");
	this.text_89.lineHeight = 28;
	this.text_89.setTransform(816.2,93.8);

	this.text_90 = new cjs.Text("供", "28px 'Microsoft YaHei'");
	this.text_90.lineHeight = 28;
	this.text_90.setTransform(787.9,93.8);

	this.text_91 = new cjs.Text("可", "28px 'Microsoft YaHei'");
	this.text_91.lineHeight = 28;
	this.text_91.setTransform(759.6,93.8);

	this.text_92 = new cjs.Text(",", "28px 'Microsoft YaHei'");
	this.text_92.lineHeight = 28;
	this.text_92.setTransform(752.5,93.8);

	this.text_93 = new cjs.Text("件", "28px 'Microsoft YaHei'");
	this.text_93.lineHeight = 28;
	this.text_93.setTransform(724.2,93.8);

	this.text_94 = new cjs.Text("1", "28px 'Microsoft YaHei'");
	this.text_94.lineHeight = 28;
	this.text_94.setTransform(707.5,93.8);

	this.text_95 = new cjs.Text("有", "28px 'Microsoft YaHei'");
	this.text_95.lineHeight = 28;
	this.text_95.setTransform(679.2,93.8);

	this.text_96 = new cjs.Text("只", "28px 'Microsoft YaHei'");
	this.text_96.lineHeight = 28;
	this.text_96.setTransform(650.9,93.8);

	this.text_97 = new cjs.Text("风", "28px 'Microsoft YaHei'");
	this.text_97.lineHeight = 28;
	this.text_97.setTransform(622.6,93.8);

	this.text_98 = new cjs.Text("披", "28px 'Microsoft YaHei'");
	this.text_98.lineHeight = 28;
	this.text_98.setTransform(594.3,93.8);

	this.text_99 = new cjs.Text("火", "28px 'Microsoft YaHei'");
	this.text_99.lineHeight = 28;
	this.text_99.setTransform(566,93.8);

	this.text_100 = new cjs.Text("防", "28px 'Microsoft YaHei'");
	this.text_100.lineHeight = 28;
	this.text_100.setTransform(537.7,93.8);

	this.text_101 = new cjs.Text("（", "28px 'Microsoft YaHei'");
	this.text_101.lineHeight = 28;
	this.text_101.setTransform(509.4,93.8);

	this.text_102 = new cjs.Text("到", "28px 'Microsoft YaHei'");
	this.text_102.lineHeight = 28;
	this.text_102.setTransform(481.1,93.8);

	this.text_103 = new cjs.Text("烧", "28px 'Microsoft YaHei'");
	this.text_103.lineHeight = 28;
	this.text_103.setTransform(452.8,93.8);

	this.text_104 = new cjs.Text("火", "28px 'Microsoft YaHei'");
	this.text_104.lineHeight = 28;
	this.text_104.setTransform(424.5,93.8);

	this.text_105 = new cjs.Text("被", "28px 'Microsoft YaHei'");
	this.text_105.lineHeight = 28;
	this.text_105.setTransform(396.2,93.8);

	this.text_106 = new cjs.Text("会", "28px 'Microsoft YaHei'");
	this.text_106.lineHeight = 28;
	this.text_106.setTransform(367.9,93.8);

	this.text_107 = new cjs.Text("然", "28px 'Microsoft YaHei'");
	this.text_107.lineHeight = 28;
	this.text_107.setTransform(339.6,93.8);

	this.text_108 = new cjs.Text("不", "28px 'Microsoft YaHei'");
	this.text_108.lineHeight = 28;
	this.text_108.setTransform(311.3,93.8);

	this.text_109 = new cjs.Text("，", "28px 'Microsoft YaHei'");
	this.text_109.lineHeight = 28;
	this.text_109.setTransform(283,93.8);

	this.text_110 = new cjs.Text("风", "28px 'Microsoft YaHei'");
	this.text_110.lineHeight = 28;
	this.text_110.setTransform(254.7,93.8);

	this.text_111 = new cjs.Text("披", "28px 'Microsoft YaHei'");
	this.text_111.lineHeight = 28;
	this.text_111.setTransform(226.4,93.8);

	this.text_112 = new cjs.Text("火", "28px 'Microsoft YaHei'");
	this.text_112.lineHeight = 28;
	this.text_112.setTransform(198.1,93.8);

	this.text_113 = new cjs.Text("防", "28px 'Microsoft YaHei'");
	this.text_113.lineHeight = 28;
	this.text_113.setTransform(169.8,93.8);

	this.text_114 = new cjs.Text("到", "28px 'Microsoft YaHei'");
	this.text_114.lineHeight = 28;
	this.text_114.setTransform(141.5,93.8);

	this.text_115 = new cjs.Text("用", "28px 'Microsoft YaHei'");
	this.text_115.lineHeight = 28;
	this.text_115.setTransform(113.2,93.8);

	this.text_116 = new cjs.Text("要", "28px 'Microsoft YaHei'");
	this.text_116.lineHeight = 28;
	this.text_116.setTransform(84.9,93.8);

	this.text_117 = new cjs.Text("须", "28px 'Microsoft YaHei'");
	this.text_117.lineHeight = 28;
	this.text_117.setTransform(56.6,93.8);

	this.text_118 = new cjs.Text("必", "28px 'Microsoft YaHei'");
	this.text_118.lineHeight = 28;
	this.text_118.setTransform(28.3,93.8);

	this.text_119 = new cjs.Text("人", "28px 'Microsoft YaHei'");
	this.text_119.lineHeight = 28;
	this.text_119.setTransform(0,93.8);

	this.text_120 = new cjs.Text("的", "28px 'Microsoft YaHei'");
	this.text_120.lineHeight = 28;
	this.text_120.setTransform(868.8,46.8);

	this.text_121 = new cjs.Text("桥", "28px 'Microsoft YaHei'");
	this.text_121.lineHeight = 28;
	this.text_121.setTransform(840.4,46.8);

	this.text_122 = new cjs.Text("过", "28px 'Microsoft YaHei'");
	this.text_122.lineHeight = 28;
	this.text_122.setTransform(812,46.8);

	this.text_123 = new cjs.Text("。", "28px 'Microsoft YaHei'");
	this.text_123.lineHeight = 28;
	this.text_123.setTransform(783.6,46.8);

	this.text_124 = new cjs.Text("塌", "28px 'Microsoft YaHei'");
	this.text_124.lineHeight = 28;
	this.text_124.setTransform(755.2,46.8);

	this.text_125 = new cjs.Text("倒", "28px 'Microsoft YaHei'");
	this.text_125.lineHeight = 28;
	this.text_125.setTransform(726.8,46.8);

	this.text_126 = new cjs.Text("会", "28px 'Microsoft YaHei'");
	this.text_126.lineHeight = 28;
	this.text_126.setTransform(698.4,46.8);

	this.text_127 = new cjs.Text("桥", "28px 'Microsoft YaHei'");
	this.text_127.lineHeight = 28;
	this.text_127.setTransform(670,46.8);

	this.text_128 = new cjs.Text("则", "28px 'Microsoft YaHei'");
	this.text_128.lineHeight = 28;
	this.text_128.setTransform(641.6,46.8);

	this.text_129 = new cjs.Text("否", "28px 'Microsoft YaHei'");
	this.text_129.lineHeight = 28;
	this.text_129.setTransform(613.2,46.8);

	this.text_130 = new cjs.Text("，", "28px 'Microsoft YaHei'");
	this.text_130.lineHeight = 28;
	this.text_130.setTransform(584.8,46.8);

	this.text_131 = new cjs.Text("）", "28px 'Microsoft YaHei'");
	this.text_131.lineHeight = 28;
	this.text_131.setTransform(556.4,46.8);

	this.text_132 = new cjs.Text("着", "28px 'Microsoft YaHei'");
	this.text_132.lineHeight = 28;
	this.text_132.setTransform(528,46.8);

	this.text_133 = new cjs.Text("抱", "28px 'Microsoft YaHei'");
	this.text_133.lineHeight = 28;
	this.text_133.setTransform(499.6,46.8);

	this.text_134 = new cjs.Text("、", "28px 'Microsoft YaHei'");
	this.text_134.lineHeight = 28;
	this.text_134.setTransform(471.2,46.8);

	this.text_135 = new cjs.Text("着", "28px 'Microsoft YaHei'");
	this.text_135.lineHeight = 28;
	this.text_135.setTransform(442.8,46.8);

	this.text_136 = new cjs.Text("背", "28px 'Microsoft YaHei'");
	this.text_136.lineHeight = 28;
	this.text_136.setTransform(414.4,46.8);

	this.text_137 = new cjs.Text("能", "28px 'Microsoft YaHei'");
	this.text_137.lineHeight = 28;
	this.text_137.setTransform(386,46.8);

	this.text_138 = new cjs.Text("不", "28px 'Microsoft YaHei'");
	this.text_138.lineHeight = 28;
	this.text_138.setTransform(357.6,46.8);

	this.text_139 = new cjs.Text("（", "28px 'Microsoft YaHei'");
	this.text_139.lineHeight = 28;
	this.text_139.setTransform(329.2,46.8);

	this.text_140 = new cjs.Text("过", "28px 'Microsoft YaHei'");
	this.text_140.lineHeight = 28;
	this.text_140.setTransform(300.8,46.8);

	this.text_141 = new cjs.Text("通", "28px 'Microsoft YaHei'");
	this.text_141.lineHeight = 28;
	this.text_141.setTransform(272.4,46.8);

	this.text_142 = new cjs.Text("时", "28px 'Microsoft YaHei'");
	this.text_142.lineHeight = 28;
	this.text_142.setTransform(244,46.8);

	this.text_143 = new cjs.Text("同", "28px 'Microsoft YaHei'");
	this.text_143.lineHeight = 28;
	this.text_143.setTransform(215.6,46.8);

	this.text_144 = new cjs.Text("人", "28px 'Microsoft YaHei'");
	this.text_144.lineHeight = 28;
	this.text_144.setTransform(187.2,46.8);

	this.text_145 = new cjs.Text("个", "28px 'Microsoft YaHei'");
	this.text_145.lineHeight = 28;
	this.text_145.setTransform(158.8,46.8);

	this.text_146 = new cjs.Text("2", "28px 'Microsoft YaHei'");
	this.text_146.lineHeight = 28;
	this.text_146.setTransform(142,46.8);

	this.text_147 = new cjs.Text("让", "28px 'Microsoft YaHei'");
	this.text_147.lineHeight = 28;
	this.text_147.setTransform(113.6,46.8);

	this.text_148 = new cjs.Text("能", "28px 'Microsoft YaHei'");
	this.text_148.lineHeight = 28;
	this.text_148.setTransform(85.2,46.8);

	this.text_149 = new cjs.Text("只", "28px 'Microsoft YaHei'");
	this.text_149.lineHeight = 28;
	this.text_149.setTransform(56.8,46.8);

	this.text_150 = new cjs.Text("多", "28px 'Microsoft YaHei'");
	this.text_150.lineHeight = 28;
	this.text_150.setTransform(28.4,46.8);

	this.text_151 = new cjs.Text("最", "28px 'Microsoft YaHei'");
	this.text_151.lineHeight = 28;
	this.text_151.setTransform(0,46.8);

	this.text_152 = new cjs.Text("次", "28px 'Microsoft YaHei'");
	this.text_152.lineHeight = 28;
	this.text_152.setTransform(868,-0.2);

	this.text_153 = new cjs.Text("每", "28px 'Microsoft YaHei'");
	this.text_153.lineHeight = 28;
	this.text_153.setTransform(840,-0.2);

	this.text_154 = new cjs.Text("桥", "28px 'Microsoft YaHei'");
	this.text_154.lineHeight = 28;
	this.text_154.setTransform(812,-0.2);

	this.text_155 = new cjs.Text("此", "28px 'Microsoft YaHei'");
	this.text_155.lineHeight = 28;
	this.text_155.setTransform(784,-0.2);

	this.text_156 = new cjs.Text("。", "28px 'Microsoft YaHei'");
	this.text_156.lineHeight = 28;
	this.text_156.setTransform(756,-0.2);

	this.text_157 = new cjs.Text("桥", "28px 'Microsoft YaHei'");
	this.text_157.lineHeight = 28;
	this.text_157.setTransform(728,-0.2);

	this.text_158 = new cjs.Text("木", "28px 'Microsoft YaHei'");
	this.text_158.lineHeight = 28;
	this.text_158.setTransform(700,-0.2);

	this.text_159 = new cjs.Text("的", "28px 'Microsoft YaHei'");
	this.text_159.lineHeight = 28;
	this.text_159.setTransform(672,-0.2);

	this.text_160 = new cjs.Text("烧", "28px 'Microsoft YaHei'");
	this.text_160.lineHeight = 28;
	this.text_160.setTransform(644,-0.2);

	this.text_161 = new cjs.Text("燃", "28px 'Microsoft YaHei'");
	this.text_161.lineHeight = 28;
	this.text_161.setTransform(616,-0.2);

	this.text_162 = new cjs.Text("在", "28px 'Microsoft YaHei'");
	this.text_162.lineHeight = 28;
	this.text_162.setTransform(588,-0.2);

	this.text_163 = new cjs.Text("正", "28px 'Microsoft YaHei'");
	this.text_163.lineHeight = 28;
	this.text_163.setTransform(560,-0.2);

	this.text_164 = new cjs.Text("座", "28px 'Microsoft YaHei'");
	this.text_164.lineHeight = 28;
	this.text_164.setTransform(532,-0.2);

	this.text_165 = new cjs.Text("一", "28px 'Microsoft YaHei'");
	this.text_165.lineHeight = 28;
	this.text_165.setTransform(504,-0.2);

	this.text_166 = new cjs.Text("过", "28px 'Microsoft YaHei'");
	this.text_166.lineHeight = 28;
	this.text_166.setTransform(476,-0.2);

	this.text_167 = new cjs.Text("通", "28px 'Microsoft YaHei'");
	this.text_167.lineHeight = 28;
	this.text_167.setTransform(448,-0.2);

	this.text_168 = new cjs.Text("备", "28px 'Microsoft YaHei'");
	this.text_168.lineHeight = 28;
	this.text_168.setTransform(420,-0.2);

	this.text_169 = new cjs.Text("准", "28px 'Microsoft YaHei'");
	this.text_169.lineHeight = 28;
	this.text_169.setTransform(392,-0.2);

	this.text_170 = new cjs.Text("人", "28px 'Microsoft YaHei'");
	this.text_170.lineHeight = 28;
	this.text_170.setTransform(364,-0.2);

	this.text_171 = new cjs.Text("四", "28px 'Microsoft YaHei'");
	this.text_171.lineHeight = 28;
	this.text_171.setTransform(336,-0.2);

	this.text_172 = new cjs.Text("叔", "28px 'Microsoft YaHei'");
	this.text_172.lineHeight = 28;
	this.text_172.setTransform(308,-0.2);

	this.text_173 = new cjs.Text("大", "28px 'Microsoft YaHei'");
	this.text_173.lineHeight = 28;
	this.text_173.setTransform(280,-0.2);

	this.text_174 = new cjs.Text("灰", "28px 'Microsoft YaHei'");
	this.text_174.lineHeight = 28;
	this.text_174.setTransform(252,-0.2);

	this.text_175 = new cjs.Text("、", "28px 'Microsoft YaHei'");
	this.text_175.lineHeight = 28;
	this.text_175.setTransform(224,-0.2);

	this.text_176 = new cjs.Text("西", "28px 'Microsoft YaHei'");
	this.text_176.lineHeight = 28;
	this.text_176.setTransform(196,-0.2);

	this.text_177 = new cjs.Text("武", "28px 'Microsoft YaHei'");
	this.text_177.lineHeight = 28;
	this.text_177.setTransform(168,-0.2);

	this.text_178 = new cjs.Text("、", "28px 'Microsoft YaHei'");
	this.text_178.lineHeight = 28;
	this.text_178.setTransform(140,-0.2);

	this.text_179 = new cjs.Text("儿", "28px 'Microsoft YaHei'");
	this.text_179.lineHeight = 28;
	this.text_179.setTransform(112,-0.2);

	this.text_180 = new cjs.Text("薇", "28px 'Microsoft YaHei'");
	this.text_180.lineHeight = 28;
	this.text_180.setTransform(84,-0.2);

	this.text_181 = new cjs.Text("、", "28px 'Microsoft YaHei'");
	this.text_181.lineHeight = 28;
	this.text_181.setTransform(56,-0.2);

	this.text_182 = new cjs.Text("迪", "28px 'Microsoft YaHei'");
	this.text_182.lineHeight = 28;
	this.text_182.setTransform(28,-0.2);

	this.text_183 = new cjs.Text("艾", "28px 'Microsoft YaHei'");
	this.text_183.lineHeight = 28;
	this.text_183.setTransform(0,-0.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.898)").s().p("EhG/AWSMAAAgsjMCN/AAAMAAAAsjg");
	this.shape.setTransform(455,142.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text_183},{t:this.text_182},{t:this.text_181},{t:this.text_180},{t:this.text_179},{t:this.text_178},{t:this.text_177},{t:this.text_176},{t:this.text_175},{t:this.text_174},{t:this.text_173},{t:this.text_172},{t:this.text_171},{t:this.text_170},{t:this.text_169},{t:this.text_168},{t:this.text_167},{t:this.text_166},{t:this.text_165},{t:this.text_164},{t:this.text_163},{t:this.text_162},{t:this.text_161},{t:this.text_160},{t:this.text_159},{t:this.text_158},{t:this.text_157},{t:this.text_156},{t:this.text_155},{t:this.text_154},{t:this.text_153},{t:this.text_152},{t:this.text_151},{t:this.text_150},{t:this.text_149},{t:this.text_148},{t:this.text_147},{t:this.text_146},{t:this.text_145},{t:this.text_144},{t:this.text_143},{t:this.text_142},{t:this.text_141},{t:this.text_140},{t:this.text_139},{t:this.text_138},{t:this.text_137},{t:this.text_136},{t:this.text_135},{t:this.text_134},{t:this.text_133},{t:this.text_132},{t:this.text_131},{t:this.text_130},{t:this.text_129},{t:this.text_128},{t:this.text_127},{t:this.text_126},{t:this.text_125},{t:this.text_124},{t:this.text_123},{t:this.text_122},{t:this.text_121},{t:this.text_120},{t:this.text_119},{t:this.text_118},{t:this.text_117},{t:this.text_116},{t:this.text_115},{t:this.text_114},{t:this.text_113},{t:this.text_112},{t:this.text_111},{t:this.text_110},{t:this.text_109},{t:this.text_108},{t:this.text_107},{t:this.text_106},{t:this.text_105},{t:this.text_104},{t:this.text_103},{t:this.text_102},{t:this.text_101},{t:this.text_100},{t:this.text_99},{t:this.text_98},{t:this.text_97},{t:this.text_96},{t:this.text_95},{t:this.text_94},{t:this.text_93},{t:this.text_92},{t:this.text_91},{t:this.text_90},{t:this.text_89},{t:this.text_88},{t:this.text_87},{t:this.text_86},{t:this.text_85},{t:this.text_84},{t:this.text_83},{t:this.text_82},{t:this.text_81},{t:this.text_80},{t:this.text_79},{t:this.text_78},{t:this.text_77},{t:this.text_76},{t:this.text_75},{t:this.text_74},{t:this.text_73},{t:this.text_72},{t:this.text_71},{t:this.text_70},{t:this.text_69},{t:this.text_68},{t:this.text_67},{t:this.text_66},{t:this.text_65},{t:this.text_64},{t:this.text_63},{t:this.text_62},{t:this.text_61},{t:this.text_60},{t:this.text_59},{t:this.text_58},{t:this.text_57},{t:this.text_56},{t:this.text_55},{t:this.text_54},{t:this.text_53},{t:this.text_52},{t:this.text_51},{t:this.text_50},{t:this.text_49},{t:this.text_48},{t:this.text_47},{t:this.text_46},{t:this.text_45},{t:this.text_44},{t:this.text_43},{t:this.text_42},{t:this.text_41},{t:this.text_40},{t:this.text_39},{t:this.text_38},{t:this.text_37},{t:this.text_36},{t:this.text_35},{t:this.text_34},{t:this.text_33},{t:this.text_32},{t:this.text_31},{t:this.text_30},{t:this.text_29},{t:this.text_28},{t:this.text_27},{t:this.text_26},{t:this.text_25},{t:this.text_24},{t:this.text_23},{t:this.text_22},{t:this.text_21},{t:this.text_20},{t:this.text_19},{t:this.text_18},{t:this.text_17},{t:this.text_16},{t:this.text_15},{t:this.text_14},{t:this.text_13},{t:this.text_12},{t:this.text_11},{t:this.text_10},{t:this.text_9},{t:this.text_8},{t:this.text_7},{t:this.text_6},{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text}]}).to({state:[]},1).wait(1));

	// 图层 2
	this.instance = new lib.Bitmap1();
	this.instance.setTransform(192.6,277.7);

	this.demo = new lib.元件1();
	this.demo.setTransform(246.1,559.1,1,1,0,0,0,0,-1);

	this.instance_1 = new lib.xespeiyou_com__1_1_24731();
	this.instance_1.setTransform(471.7,629.8,0.411,0.471,-6.2,0,0,257.8,105.4);
	this.instance_1.filters = [new cjs.BlurFilter(25, 25, 1)];
	this.instance_1.cache(-2,-2,521,217);

	this.instance_2 = new lib.xespeiyou_com__1_1_24731();
	this.instance_2.setTransform(773,649,0.885,1.015,-7.7,0,0,259,106.3);
	this.instance_2.filters = [new cjs.BlurFilter(25, 25, 1)];
	this.instance_2.cache(-2,-2,521,217);

	this.instance_3 = new lib.xespeiyou_com__1_1_24731();
	this.instance_3.setTransform(217.9,714.6,0.944,1.083,-6.2,0,0,259.5,107.2);
	this.instance_3.filters = [new cjs.BlurFilter(25, 25, 1)];
	this.instance_3.cache(-2,-2,521,217);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B3E188").s().p("AgiAKQgPgEAAgGQAAgEAPgFQAPgFATABQAUgBAPAFQAPAFAAAEQAAAGgPAEQgPAEgUABQgTgBgPgEg");
	this.shape_1.setTransform(1067.5,442.8,0.702,0.977,0,11.2,23.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B3E188").s().p("AhJAYQgegKgBgOQABgNAegLQAfgJAqgBQArABAfAJQAeALAAANQAAAOgeAKQgfAKgrAAQgqAAgfgKg");
	this.shape_2.setTransform(1049.5,444.2,0.702,0.977,0,11.2,23.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B3E188").s().p("AglAGQgQgCgBgEQABgCAQgDQAQgEAVAAQAWAAARAEQAPADAAACQAAAEgPACQgRADgWAAQgVAAgQgDg");
	this.shape_3.setTransform(988.5,456.2,0.702,0.977,0,11.2,23.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B3E188").s().p("Ag/AjQgagPAAgUQAAgTAagPQAbgPAkAAQAlAAAaAPQAaAPAAATQAAAUgaAPQgaAOglAAQgkAAgbgOg");
	this.shape_4.setTransform(976.5,455.1,0.702,0.977,0,11.2,23.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B3E188").s().p("AhpAnQgsgRAAgWQAAgWAsgPQAsgQA9gBQA+ABAsAQQAsAPAAAWQAAAWgsARQgsAPg+AAQg9AAgsgPg");
	this.shape_5.setTransform(905.4,451.2,0.702,0.977,0,11.2,23.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B3E188").s().p("AiCAqQg2gSAAgYQAAgXA2gSQA3gRBLAAQBMAAA2ARQA3ASgBAXQABAYg3ASQg2ARhMAAQhLAAg3gRg");
	this.shape_6.setTransform(1112.2,410.1,0.702,0.977,0,11.2,23.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B3E188").s().p("AgeAGQgOgCAAgEQAAgCAOgEQANgDARAAQASAAANADQANAEAAACQAAAEgNACQgNADgSAAQgRAAgNgDg");
	this.shape_7.setTransform(1105.5,436.1,0.702,0.977,0,11.2,23.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B3E188").s().p("AhXAjQglgPAAgUQAAgTAlgPQAkgPAzAAQA0AAAkAPQAlAPAAATQAAAUglAPQgkAOg0AAQgzAAgkgOg");
	this.shape_8.setTransform(1111.6,426.3,0.702,0.977,0,11.2,23.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("rgba(0,0,0,0.667)").ss(1,1,1).p("A+j+KIAJAsIAbCWMAGPAhaIAIArA3sG1QABAEADAEQBCBtBQCRQATAjAUAnQAuBWBoDUQAIAOAHAQQA9CCAUAnQAGAIABAFIACAKQgFgKgEgNQgLg4AmhyQA5iIABgLIAKAAQAeB2AgBQQAJATAIASQAZAzAuA8QAwA5ATAxQAMAVAIAfQAXBDANBiQAbgpAUgeQAFAAAFgEQAFgGAFAAQAXBdBDB0QA4BeAEAyQAAAEAAAEQAEgBADACQAJABAFAIQATgmAlgxQAEgFADgDQAqg4BAhGQA3g6A5g5QAMgLALgKQArgrAugoIACBQQgTBPACAkQAAAOAUApQABAAAAABQAKASAFAPQAFAPAAALQgBh3BlhOQAWgSBDgnQA2ghAXgYIAUgJQAHBcgICUQgIClgSA3IAAAKQAEgQAyg1QAjgkA3g3QAngkAnglQAOgNAOgNQBXhPBjhWQAOgNAPgNQERjqCsh0QBrhJBEgbQAMgFALgDIAKAAQgHAVhZDdQgdBHgmBbQiMFXgHAzIADAFQAHAFAPAAQAfgtAegtQCgjtCtj6QBUh8BYh+QAPgXAPgVQCbjhB/iyQAVgeAVgd");
	this.shape_9.setTransform(836,644.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#3A2E1D").ss(1,1,1).p("A3AhXIgRAGA4GhDQAPAiAJAXA2GCBIgGgbIgmijQAFAAgBAHQADgDAAgBA5qh5QgDgBgEgCIAGA0QAMBIAsC1QgkirgTiDQAEACAEADA52jQQAFApAHAuA2GCBIgKgqIgqixA2GCBIASBEAZkhtQAEgCACgBIgJAzQgRBJgxC0QAoiqAdiDQgEACgEACAXKhMIAOAGAWJCNIAHgcIAriiQgDAAgBAGQgCgBgBgCAWJCNIALgqIAwixAYGg1QgOAfgLAWAWJCNIgTBEAZ3jEQgJApgKAu");
	this.shape_10.setTransform(872.9,556.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#294E16").ss(0.5,1,1).p("A+RpfQAAAEABAFQAAAbAFA5AVepTQAAAEgBAFQgDAbgKA5AeSvWQgKAcgNAgQhECxhpENQgmBmlKRgQgkB9ghBw");
	this.shape_11.setTransform(901.1,595.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#322410").ss(0.5,1,1).p("EggFgVbQAOB4AYB8QASBhBXEnQAeBhAdCDQAiCSAWCIQgeA+ApQ1QAJBmAHBeEAgGgVQQghB5gpB8QgiBhhzEmQgnBjglCCQgrCSgYCIQgMBBk7QxQhJD8g5DD");
	this.shape_12.setTransform(876.2,603.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#322410").ss(1,1,1).p("AFh5fQANgEANgFQA7gUAwgJQgMBDgBAJQgfCbhmF+Qg2DNg8DUQgRA9imJHQAAABgBABQgrCRg5CyQgXBMgZBUQg4C5g8DYQhjFmh0G6QgQA8gTBBQgKAkgLAnQgCAEgCAIAFh5fQh0AlhJAGQgmAChEAcQgBAAgBAAQgBABgCABQgFACgFACAFh5fQgGAigHAlQgTBghmIGIgpDQIiIH1AHm6FQAygLAlABIAhAOQgGAdgVAhIAhAOQAlgHATAAQAmgDAYALIgFAcIACADQADAEgBAFQAOAGAggaQApgiABAAQAAARgKCBQgIBrANAvIAGADQAMgZARg4QAUhGAJgXQAohtBHgHQBQgJBhgYQAQgDANADQAKADApASQAIAEAMgGQAMgFAIADQAIAEAGANQAGAOAIADQABABB2gjQAjgLAugNQA8gQA1gLQkhJzgsB7QgeBWk6RoQhzGgiCHUAme6QQgygMgqACIgjAOQAGAcATAiIgjAOQgngHgVAAQgngDgbALIADAcIgCACQgDAEAAAGQgPAFgggZQgpgjgCABQgBAQABCCQAEBpgTAxIgGADQgMgagOg3QgRhGgIgXQgkhthLgHQhUgLhmgWQgRgEgOAEQgKACgvATQgIADgNgFQgMgGgIAEQgKAEgHANQgIAOgJADQgBAAh6giQgkgNgwgLQg9gQg4gLQDnJxAxB9QAQAyANA5QAOAvAfCPQAgCBAZBQQAKAigHFrQgDDYAWI6QAWHDALEnAkS5qQgMgFgPgEQg9gUg0gJQAKBDACAJQAbCaBlF/QA6DMBBDVQAMApgfIEAkS5qQB8AlBNAGQApACBHAcQACgBAAABAAr4RIgBAAQAAAAgCABAhCpqIgdiDIgtjQQhqoGgPhgQgGgmgHghApYZ0QgCgHgCgIQgrjBgLxtQAGpMASjiQAYl8gJgtQgThWgQgkQgPgggVgQQgdgTgUgOQglgdgmgyQgigvhGh7QhTicgEgEIBHHzQAVB/AIApQAVBrAVBVQgOAhgiRKQADRNATBYQAfBmAjCIQABAAAAACAArTWQBmlrCcopQFDx8AWhbQAUhVAQglQAOggAUgQQAbgSASgPQAjgdAlgyQAjgvBHh7QBYiaAEgGIhjHzQgZCAgIAoQgXBtgWBTQgBADk8RoQj0NkhADvEgllgc9QAWAKAaARQADACAFADQAxAfAUAPQAEACADACQADABABABQALAEAJAFQALACAHABQAkgHAuAOQAyARAQAFQANADAIAEQArALAYAGQANABANABQAlABAbgTQADA0AkAWQARAKAXADIgEg5QA/gFBtAWQASABAPAFIAAAAIAAAAA5Z6DQgGgVgIgSQgGACgCgJA566JQgpCcgOCqQgIBgAZDcEgllgc9QAFALAGAKQAkBIANAlQAEAEAAAEQAFAOAHAZQAIAhAKA0QAIAhAEAdQAPA9AIAeQAPAvAPAhAAqjuIhNEBIglB9IiKHiIjaNTIgVBWIgWByQgGAogJBDQgHAzgIBEAiXeEIAPg0QATg+ApiUQAtijBJkCQABgBAAgBEAlagcxQgZAMghATQg1AhgVANQgFACgDACQgCABgCABQgMAGgJADQgLAEgGgBQgggGgwAOQgyARgQAEQgLAEgKADQgpAMgYAFQgNACgMAAQgjACgXgTQgKA0glAVQgTAKgVADIAMg5Qg6gFhrAWQgPACgQAEIgBAAIAAAAEAmIgd3QgTAegbAoQgGAKgHAKQgwBJgUAkQgDAEgCAEQgRAggiBcQgNAigKAcQgYA9gNAeQgUAwgVAhAZZ54QAJgUAJgTQAHACACgJAZ55+QATCcgKCqQgGBhgtDcEgmHgeDQAPAeATAo");
	this.shape_13.setTransform(877.1,638.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#2E4B1B").ss(0.5,1,1).p("AALobQAHgBAHAAQB3gKB/gGQBbgFBfgCQAVgBAWAAQEjgIEvAXQCdALCgAUQHUA6IGC+EAl/gD9IABAAQBSAlAXAUQAfAcAGAoQADAYgGAcQgJAtgXAxAALonQh1gKiAgGQhbgFhggCQgVAAgWgBQkigIkxAXQibAKihAVQnSA6oWC+AAZolQgHgBgHAAEAnVAA9QgTAigGApQAeA3gPAXQgOAVgdAIQgCABgCAAQggAIgUAfQgYAHARgQQhmBfg+ATQgFABgFABQgHACgIABQgfAEgxgHQgNgDgMgCQgngHgbgEQgDgBgDAAQg+gLhxASQg9AKiBAeQgWAFiDA6Qg7AXgsAIQg1AJgdgNQgRgIgQgWQgRgXgGgDQgjgPhzAoQg7AVhKAbQg1AJhjgGQhygHg4gYQhfgphwAHQggACggAGQgTAEguAMQhCATh8AnQg/ATg5AKQgHABgGABEgntAAyQAOAigBApQgpA2AKAYQALAVAcAIQADABABAAQAhAHANAfQAYAIgOgQQAiAkAdAZQAxApAlAMQAHAAADACQAIACAHABQAhAEA0gIQAPgDAMgBQArgIAcgDQAEgCADABQBDgMBzATQA+AJCEAfQAWAECCA7QA9AWAsAJQA4AJAggNQAUgIATgWQAUgYAGgCQAngQB2ApQA9AUBLAcQA4AJBqgGQB5gHA9gYQBngpB1AHQAjACAhAGQAVADAvANQBFASCDAoQBDATA7AKAAMJBQgBAAAAAAQgBAAAAAAEglsgEHIAAgBQhVAmgbATQgiAbgMApQgEAYAAAcQADAtAOAx");
	this.shape_14.setTransform(880.2,418.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("EAm1gAaQgMgngRglQgLgZgNgYQBSAlAXAUQAfAcAGAoQADAYgGAaQgJAtgXAzQgKAVgMAWQgFhmgbhXgEgn9ABtQgOgzgDgtQAAgaAEgYQAMgpAigbQAbgTBVgmIgeAyQgUAkgSAnQgnBYgWBlIgQgrg");
	this.shape_15.setTransform(880.2,408.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E7D18F").s().p("AaqITQFTy+AMgXQBMiUAXgfQAlgzA5iyIAJgdIAIgEIBLgtQAhgUAZgMIgNAVQgwBJgUAkIgFAIQgRAggiBcIgXA+IglBbQgUAwgVAgIAXg7IgXA7IitG/QgnBllJRhIhFDtIgrA7IDFrBgA+pCmQhJjKhSkCQhTkNgpixQgPghgPgvIgXhcQgEgcgIghQgKg0gIghIgciWIAcCWQgHgagFgNQAAgEgEgEQgNglgkhJIgLgUQAWAJAaASIAIAFQAxAfATAPIAIADIAFAcQAbCzAeAzQAUAeA4CUQgQAnDSOXIgahKg");
	this.shape_16.setTransform(876.5,576.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#725325").s().p("ACDVRQASg3AIilQAHiTgGhdIgUAJQgXAYg2AhQhCAngVASQhnBOABB3QgBgLgFgPIgVBKIgEANIgEAAIAPh4IgBgBQgUgoAAgPQgCgkAThPIgChQQguApgsAqQA+iyCLusQBYojAsjTQBJljAXgiQADALAAAvQAAB9gWF2QAWl2AAh9QAAgvgDgLQAggyAYgxIAdCCIhoIOIkAYiIgVBWIgWByIgPBqQAKASAEAPQgEgPgKgSIAPhqIAWhyIAVhWIDYtTICKnhIAlh9IBPkCIAAABICIn1QAVAwAbAzIi3KGIgBACIhmFDIgwCgQg4C3g8DXQhjFmhyG6QgQA9gTBBQAThBAQg9QBym6BjlmQA8jXA4i3IAwigIBmlDIABgCIC3qGQAUAjg5FiQgTB0hyKDIgNBMIAAACIgBADQhUHAgcDlQgsFiAkApQgpCUgTA9IgPA1QgyA0gEAQgAoxU+QgEgCgDABIAAgIIBNhEQglAwgTAmQgFgIgJgBg");
	this.shape_17.setTransform(843.2,700.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#402F15").s().p("AgLXUQARg9AqiUIBcBiIhNBJQg4A2ghAlgAgtnYIBmoOIgdiCQAbg0APgvIBOjjIAShZIACAGIAAABIAEANIAGATQAyCdAnCCQAOAxAWAzIiHH1IAAgBIhPECIgmB9IiHHhIjaNTg");
	this.shape_18.setTransform(864.5,676.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#523C1B").s().p("AsgbvQArg4BAhFQA2g7A6g5Qg6A5g2A7QhABFgrA4QgjiIgehnQgUhXgDxOQAixKAOggQgUhVgWhsIgdinIhHnzQAEAEBTCcQBGB6AjAwQAlAyAmAcIAwAhQAWAQAOAgQAQAlATBWQAJAtgYF7QgSDjgGJMQALRtArDAIAEAQQhjBxh7ByQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAgBAAgANFTIIBAjpIAXgJIAKAAQgHAVhaDdQBajdAHgVIgKAAIgXAJIBjloQEfwQBQkMIAnh8IgHAbIAHgbIArilQgDABgBAGIgDgEQAShDAWhiIA8kEQA+kFAthuIAfgGQATCdgKCqQgGBhgtDcIgBAJIgTBWIgIAFIAIgFQgdCGgoCqQAxi1ARhKIgXB5QgRBTlOTcQh1GwhSE2QisD6igDtQAtiuBSkugAVkrCIAThEgAWCsvIgLApIALgpIA2ixIgGgCIgwCzIAAAAgAX0vJIgZA3IAZg3IACgFIgBAAIgBAFIAAAAgAXGvaIgOgGgAg1YYQAtijBJkDIABgBIAAgBIECuUQFDx8AWhbQAUhVAQglQAOggAUgRQAbgRASgPQAjgdAlgyQAjgvBHh7IBcigIhjHzIghCnQgXBugWBTIk9RqQj0NlhADvQhkBWhWBQIgcAaIhbhigA28TMQgUgng+iCQgGgPgIgPQgbj7gfk+QgzpwANjyQASmUgDg5QgKhGgGgzQAMBKAsC1QgkirgTiFIAIAFIgIgFIgMhXIgBgJQgZjcAIhhQAOipApidQASABAPAGQAhBtAhEFQAMBWAZCuIAeClIgDAEQABgIgFABIAmCkIAGAcIgGgcIAnB9QADB9A2SfQAUEoALDCQgghRgeh2IgLAAQgBAMg4CHQgnByAMA4QAGAIABAGIABAKQgFgLgDgNgA2GrNIgShEgA3SvrQAUBNAcBjIAKAqIgKgqIgqizgA4AueIgYg5IAYA5gA4ZvZIABACIAAgCgA3jvlIARgGgACkusQgmiCgyidIgGgTIgFgNIAAgBIgCgGIgRBZIhNDjQgPAvgaA0IgtjQQhqoGgPhgIgMhHQB7AlBNAFQApACBHAdQABgBAAAAQAAAAABAAQAAAAAAABQAAAAAAAAIgBARIACgBIABAAIAAABIAKgFIADgBIACAAQBEgcAmgCQBJgGB0glIgNBHIh5JmIgpDQQgWgzgPgxgAZSwCIAAAAgAZlxYQgDAbgKA4IgGADIAThWgA58wNIAAAAgA6DwQQgFg5AAgbIAMBXIgHgDgA6IxkIAAAAg");
	this.shape_19.setTransform(874.7,648.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#A47735").s().p("AKCcjIgDgFQAHgzCMlWIBCijQhSEugtCuIg9BbQgQgBgGgFgAx1V9QgTgwgwg6Qgvg8gZgzIgQgkQgLjCgUkoQg2yfgDh9Ignh9IgmikQAFgBgBAIIADgEIgeilQgZiugMhWQghkFghhtIAAAAIAAAAQDnJxAxB9QAQAxANA6QAOAvAfCPQAhCAAZBRQAJAhgHFsQgDDYAWI6QAWHCALEoQgJgfgLgWgAPaD3QE6xnAehWQAsh7EhpzIAAAAIABAAQgtBtg+EFIg8EEQgWBigSBDIADAEQABgGADgBIgrClIgnB8QhQEMkfQQIhjFoQhEAbhrBIID1t1gAVuICQE7wxAMhBQAYiIAriSQAliCAnhiQB0knAhhhQAqh8Agh4IAVgIQARgDAxgRQAwgOAgAGQAGAAALgDIAVgJIAEgDIgJAdQg6CyglAzQgXAfhLCUQgMAXlUTAIjEK/Qh/CzibDgICCm/gA9cG9IgIgqMgGPghbQAIAhAKA0QAIAhAFAcIAWBcQAPAvAPAhQApCxBUENQBSECBIDMIAaBKQjRuZAPgnQg4iUgTgeQgfgzgbizIgEgcIADACQALAFAJAFIASADQAkgIAvAPIBBAVIAVAIQAOB4AYB8QASBgBXEnQAeBhAdCEQAiCSAXCHQgfA+AqQ2IAPDEQhPiShChtgA+MlHQgOA0gGAaIA0iyIgBgFQAAAAgfBpgA9hG2IgDgjIAIAqIgFgHgADYseIApjQIB5pmIANhHIAagJQA7gUAwgJIgNBLQgfCbhmF/Qg2DNg8DUQgbgzgVgwgAjsxoQhll+gbiaIgLhNQAzAKA9AUIAcAJIAMBHQAPBgBqIGIAtDQQgYAxggAyQhBjVg6jNg");
	this.shape_20.setTransform(873.2,644.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#785827").s().p("Au9aeQhDh0gYhcQgEAAgGAFQgEAFgGAAIgvBGQgNhigWhCQgLkngXnDQgVo6ACjYQAIlrgKgiQgYhQghiBQgfiPgOgvQgNg5gRgyQgwh9jnpxQA3ALA+AQQAvALAlANIB6AiQAKgDAHgOQAIgNAJgEQAKgEALAGQAMAFAJgDQAvgTAKgCQAOgEARAEQBlAWBUALQBMAHAjBtQAJAXAQBGQAPA3AMAaIAHgDQARgxgDhpQgBiCABgQQACgBAoAjQAiAZAOgFQAAgGADgEIACgCIgDgcQAbgLAnADQAVAAAnAHIAjgOQgTgigGgcIAjgOQAqgCAzAMIAKBMQAbCaBmF/QA5DMBCDVQgXAjhJFiQgsDThaIiQiLOtg+CyIgWAWQgrjBgLxtQAGpMASjiQAYl8gJgtQgThWgRgkQgOgggVgQIgwghQgmgdgmgyQgigvhGh7QhUicgDgEIBHHzIAcCoQAXBrAUBVQgOAhgiRKQADRNATBYQAfBmAjCIQAAAAAAAAQABAAAAABQAAAAAAAAQAAAAgBABIgGAHIAGgJIgGAJIhNBEQgEgyg4hegAg7R/QAcjkBSnDIABgDIAAgBIANhNQByqAATh1QA4lhgTgkQA7jUA3jNQBll+AgibIAMhMQAygLAmABIAgAOQgGAdgUAhIAhAOQAkgHAUAAQAmgDAYALIgFAcIACADQADAEgBAFQAOAGAfgaIArgiQAAARgKCBQgIBrAMAvIAHADQAMgZAQg4QAVhGAIgXQAphtBHgHQBQgJBggYQARgDANADIAzAVQAIAEAMgGQALgFAJADQAHAEAGANQAHAOAIADQAAABB3gjIBRgYQA8gQA1gLQkhJzgsB7QgeBWk6RoIj2N0QisB1kQDqIgeAZQBBjvD0tkIE9xrQAVhTAYhtIAhioIBjnzIhcCgQhHB7gjAvQglAygjAdQgSAPgbASQgVAQgNAgQgQAlgUBVQgWBblER8IkBOUIAAABIgBACQhJECgtCjQgkgoAsljgApTXxIAWgWQgKAbgIAKIgEgPgAo9XbIAAAAgATKHJQFPzcAQhSIAYh6IAJgzQAKg5ACgbIACgJQAtjcAFhhQALiqgTicQBrgWA5AFIgLA5QAUgDAUgKQAkgVALg0QAXATAjgCQAMAAANgCQAYgFApgMQghB5gpB7QgiBhh0EnQgmBiglCCQgrCSgZCIQgLBCk7QxIiCG+IgfAsIisD6QBSk1B0mxgA7BLNQgUgmgTgjIgPjEQgqw2Aeg9QgWiIgjiSQgciDgehiQhXkmgShhQgYh8gOh4IBCARIAbACQAlABAagTQAEA0AjAWQATAKAWADIgEg5QA/gFBtAWQgpCcgOCqQgIBgAYDcIABAJQABAbAFA5IAHADQATCFAkCrQgsi1gMhKIgGg0IAGA0QAFA0ALBFQADA5gSGVQgODxAzJwQAfE+AbD7QhnjUgvhWgAZEwPIAGgDIgJAzQgRBLgxC0QAoiqAdiFgAWkvwIAFACIg1CxgA3gv5IAGgDIApCzQgchjgThNgAZKwSg");
	this.shape_21.setTransform(876.2,649.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#483517").s().p("AMWG4QgNgvAIhqQAKiBAAgSIgqAiQggAbgOgGQABgGgDgEIgCgCIAFgdQgYgKgmACQgTABglAGIghgOQAVggAGgdIghgOQglgBgyAKQgwAKg7ATIgaAJQh0AmhJAFQgmADhEAbIgCABIgDABIgKAEIAAAAIgBAAIgCAAIABgQQAAgBAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQhHgcgpgCQhNgFh7gmIgcgJQg9gTgzgKQgzgLgqACIgjAOQAGAcATAhIgjAOQgngGgVgBQgngDgbALIAEAdIgDACQgCAEAAAGQgPAFghgaQgpgjgCABQgBARABCCQAEBpgSAwIgHADQgMgZgOg4QgRhFgIgYQgkhthLgHQhUgLhmgVQgRgEgOADQgKACgvAUQgIADgNgFQgLgGgJAEQgKADgHAOQgIANgJADIh7giQgkgMgwgLQg9gRg4gKIAAgBQgGgUgHgTIgCABIAAAAIgBAAIAAAAIAAAAQgEgBgCgHIAAAAIAAAAQACAHAEABIAAAAIAAAAIABAAIAAAAIACgBQAHATAGAUIAAAAQgPgFgSgBQhtgVg/AEIAEA6QgWgEgSgKQgkgVgDg0QgbATglgCIgagCIhDgRIgVgHIhBgTQgvgPgkAHIgSgCQgJgGgLgEIgDgCIgIgEQgUgOgxgfIgIgFIgIgsIAIAsQgagSgWgJIghhGQAXAIgOgRQAiAkAeAaQAwAoAmANQAGAAADABQAJADAHAAQAhAFAzgIIAcgFQArgIAbgCQAFgDADABQBDgMBzAUQA+AJCEAeQAWAECCA6QA8AVAtAJQA4AJAggNQAUgIASgWQAUgVAHgCQAngRB1AoQA9AUBLAcQA4AIBrgFQB5gIA9gXQBngnB1AFQAiACAhAGQAVADAwANQBFASCDAnQBDAUA7AJIAAANIABAAIABAAIAAAAIANgCQA6gJA+gUQB8gnBCgSQAugNATgDQAhgGAfgCQBwgHBfApQA4AXByAIQBkAGA1gJQBJgcA7gUQBzgnAkAOQAGADAQAWQAQAXARAHQAeAOA1gKQArgIA8gWQCDg5AVgFQCBgdA9gKQBxgSA+AKIAHACIBBALIAaAEQAwAIAggFIAPgCIAJgCQA+gTBmhgQgQARAYgIIguBGQgZAMghAUIhKAtIgIAEIgEACIgVAKQgLADgGgBQgggFgwALQgxASgRADIgVAHQgpANgYAEQgNADgMAAQgjABgXgTQgKA0glAVQgTALgVADIAMg6Qg6gEhrAVIgfAGIgBAAIASgnIADABIAAAAIABAAQAEgBABgHQgBAHgEABIgBAAIAAAAIgDgBIgSAnIAAABQg0ALg9AQIhRAXQh2AjgBAAQgIgEgGgNQgGgNgIgEQgIgEgMAGQgMAFgIgDIgzgWQgNgDgQAEQhhAXhQAJQhHAHgoBuQgJAXgUBFQgRA5gMAYgEAnegGFQAMgVAKgVQgJAdgMAeQgLAcgPAeQAGgpATgigEgnngF+IgMg8IAPArQAPAhgCAqQgKgegGgcg");
	this.shape_22.setTransform(879.2,463.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#ABDF8E").s().p("AYNBdQgRgCAAgFQAAgDARgCIBTACQASADAAADQAAAFgSABgAVLBXQgJgFAAgEQAAgFAJgDQAJgEAMAAQAMAAAJAFQAIAEAAAFQAAAEgIAEIgVADQgMAAgJgEgA5xBOQACgDAQgDIBUgCQASADgBADQABAEgTACIhUACQgRgBAAgFgA1yBOQgIgFAAgEQABgGAHgCQALgGALAAQANAAAIAFQAJADgBAEQABAEgLAGQgHAEgOAAgAS3AmQgUgEAAgHQAAgHAUgCIAwgGIAwAIQAUADAAAHQAAAHgUADgA0lAUQABgIATgDIAxgIIAwAGQAUACgBAIQABAGgVAFIhhACQgTgEAAgGgAUwgBQgHgDAAgEQAAgFAHgCQAIgDAKAAIASAEQAHACAAAFQAAAEgHADgAQDgGQhHgBgygMQgygOAAgPQAAgRAygLQAygJBHACQBHABAzALQAxAOAAAQQAAAQgxALQgsAJg8AAIgSgBgA1UgSQABgGAHgBIARgDQALgBAHADQAIACgBAFQAAAFgHADIgkABQgHgEAAgEgAx1gZQgxgMAAgPQABgRAygMQAzgMBHgBQBHgBAzAIQAyALgBARQAAAQgzANQgzAMhHACIgNAAQg/AAgugJgADugvQgPgBgLgFQgLgEAAgGIAAgBQABgHAKgCQALgGAPABQAHAAAHACQAHABAFADQALAEAAAHQAAAGgLADQgKAFgNAAIgDAAgAj9g+QgLgEAAgGQAAgHALgEIAMgEIAPgCQAOAAAMAFQAJADABAGQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAQABAHgLADQgMAFgPABQgOAAgMgEg");
	this.shape_23.setTransform(881.4,383);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#B3E188").s().p("AAiJBIgBAAIgBAAIAAgMQg7gKhDgTQiDgohFgSQgwgNgVgDQghgGgigCQh1gHhnApQg9AYh5AHQhrAGg4gJQhLgcg9gUQh1gpgnAQQgHACgUAYQgSAWgUAIQggANg4gJQgtgJg8gWQiCg7gWgEQiEgfg+gJQhzgThDAMQgDgBgFACQgbADgrAIIgcAEQgzAIghgEQgHgBgJgCQgDgCgGAAQgmgMgwgpQgegZgigkQAOAQgXgIQgOgfghgHIgEgBQgbgIgLgVQgKgYAog2QACgpgPgiQAXhjAnhaQASgnAUgkIAdgyIABABQAVgJAvgNQgLASgJATQgWAwgLA+IgFAgQAigcAtgSQA1gYAmADQAnACABAXQACAXgjAhQgkAfg2AXQg0AWgngBQAAAAAAAAQAAgBAAAAQAAAAgBABQAAAAAAAAIABAoQADAUAAARIADgDQAZgZAkgOQAmgRAZAFQAaAEABAUQACAUgaAXQgZAZglAQQggALgaAAIACAFQAFARAIARQAQAiAdAkQAZAcAqAmIAIgOQAGgJAOgFQALgFAGAFQAEADAHAJQAUARA2gLQAPgFANAAQAXgDAPADQAKABA/ARQANgZAVgIQAUgIADACQAPAEAIAqQAPgZAFgMIAOgZQACgCBaA1QBbAyAagKQAegMAeAYQASAMAcAXQAYALA0AOQAqAPAFAUQAXgPAFgHQAEgLAIgNQABAKAFAMQAEAKAAAEQAjgOAVg1IAPglQAIgSAIgDQAPgHAJATQAHANgCANQAvgSAkAaQAMAIA9A9QAVgJALAHQANACAIATQAfgNASAJQAIAEAKANQALgdADgEQAEgFAOgFQASgHAbAsQAdAtAUgJQAHgDATgbQASgdAHgCQADgBAQANQARANALgDQALgGALgYQAKgYAOgHQAIgCAPATQASARASgHQAPgFAkAAIAogCQATgIAQgaQARgcAOgFQABgBBNAoIBPAnQAIgEAHgMQAHgOAIgDQADgBBAATQBCATADgBQANgFANggQAOgfAOgGQAPATAUBFQAVA2AhgNQAKgFAGgHQAHgIAFgDQAHAeAZACIAAAIIABAAIABAAIAAACIALABIACAAQAYgCAIgeQAGADAGAIQAGAIAJAEQAfANAVg2QAUhEANgUQAOAGANAfQAMAgAMAFQACABA/gTQA/gTACABQAIAEAGANQAGANAIADIBMgnQBKgoACABQANAFAPAcQAPAbAQAHQACABAkABQAkAAAMAFQARAIASgSQARgTAGADQAOAGAIAYQAJAZAJAFQALAEAQgOQARgNACABQAHADAQAcQAPAcAGACQAUAJAdgtQAdgsARAHQAOAHABADQADAEAIAdQALgNAIgEQASgIAcAMQAJgRAMgEQAMgGATAJQBAg+AMgIQAmgZApARQABgNAHgNQAKgSAOAGQAIAEAGARIAKAlQAQA2AeANIAGgOQAGgLACgLQAHANACALQADAIAUAOQAIgUApgPQAzgOAYgLIAwgjQAhgXAaALQAXALBegzQBeg0ACABQABAAAJAZIANAlQAPgqAOgEQAEgCARAIQATAIAJAZQBAgRAJgBQARgDAUADQAMABANAEQAzAMAWgSIAMgMQAHgEAKAEQANAGAEAIIAFAPQAuglAegeQAigjAVgjQALgRAIgSQARgmAOhEQAShZgEhJQgDg8gSgxQgHgUgJgRQAvANATAIIAAAAQANAYAMAZQAQAlAMAnQAcBZAEBkQgTAigGApQAeA3gPAXQgNAVgdAIIgFABQggAIgTAfQATgfAggIIAFgBIgBABQgNAZgqAOQgYAHAQgQQhmBfg+ATIgJACIgPADQggAEgwgHIgagFIhBgLIgHgBQg+gLhxASQg9AKiBAeQgVAFiDA6Qg8AXgrAIQg1AJgegNQgRgIgQgWQgQgXgGgDQgkgPhzAoQg7AVhJAbQg1AJhkgGQhygHg4gYQhfgphwAHQgfACghAGQgTAEguAMQhCATh8AnQg+ATg6AKIgNACgAveGUQgTgHgDgUQgBgTAPgWQARgVAagKQAagLAUAGQAWAHAAATQADATgQAXQgRAVgaALQgRAGgOAAQgIAAgIgCgAkMF9QgggCgEgXQgEgWAagbQAcgdApgRQAqgSAgADQAiACADAXQAFAWgcAcQgYAcgsASQglAPgfAAIgHgBgAxaF7QgBgEAMgIQAKgGARgHQAPgHAMgBQAMgEAAAGQACAEgMAHQgLAHgQAHQgPAHgNABIgGAAQgGAAAAgCgA7VEgQgXgCgBgNQAAgOAVgTQAVgSAegMQAegMAXABQAXABAAAOQABANgUATQgVASgfANQgbALgVAAIgFAAgEgnBADpIgBgBIAEABQAhAHAOAfQgpgNgJgZgA+AD0QABgGAJgJQALgIAOgGQAQgGAJABQALAAAAAGQAAAGgKAHQgJAJgPAFQgPAGgKAAQgJgBgDgEgEgj7ACwQABgFAJgGQAKgHAMgEQANgFAKgCQAJAAABADQAAAFgKAGQgIAHgOAFQgNAFgKABIgEAAQgGAAAAgDgAa4l5IAEgBQBGgbmLgxIgGgBQjUgPAvgYIANgGQkzgdk1AAQieAAifAHIAAAEQCdAPiNATIiyAUQAaABATAJQAVAIAAANQAAALgVAHQgUAIgdAAQgdgBgUgJQgVgIAAgLQAAgNAVgHIAFgCIhAAEIAAAAIgCAAIAAgMIgxgCIAFABQATAHAAANQAAALgTAIQgTAIgdACQgeAAgUgIQgUgHgBgLQABgOAUgHQATgKAbAAIizgUQiNgTCdgPIAAgDQiegJifABQkzgBk2AfQAKABAEAEQAvAYjVAQIgGABQmLAwBDAcIADAAQBZBNrQA4IAEgrIgBABIgFABIgDAAIgCABIhGAOQIVi+HSg6QChgVCcgKQExgXEhAIIAsABQBgACBaAFQCBAGB1AKIAAABIANABIAAAJIgNABIANgBQB3gKB/gGQBbgFBfgCIAsgBQEjgIEvAXQCcALCgAUQHVA6IFC+IhKgQIgEgBIgCAAIAAArQrFg5BahMg");
	this.shape_24.setTransform(877.9,418.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#74CA46").s().p("ANhIHQgGgCgQgcQgPgcgHgDQgCgBgRANQgRAOgKgEQgKgFgJgZQgIgYgOgGQgGgDgQATQgSASgRgIQgNgFgjAAQgkgBgCgBQgRgHgPgbQgPgcgNgFQgBgBhLAoIhMAnQgIgDgGgNQgGgNgIgEQgBgBg/ATQhAATgBgBQgNgFgMggQgMgfgPgGQgNAUgUBEQgVA2gfgNQgIgEgHgIQgGgIgGgDQgIAegXACIgCAAIgMgBIAAgCIAAAAIgBAAIgBgIQgXgCgIgeQgGADgHAIQgGAHgJAFQgiANgVg2QgThFgPgTQgPAGgOAfQgNAggNAFQgCABhCgTQhBgTgCABQgIADgIAOQgGAMgJAEIhOgnQhNgogBABQgPAFgQAcQgRAagSAIIgoACQglAAgOAFQgSAHgSgRQgQgTgHACQgPAHgKAYQgLAYgKAGQgLADgRgNQgRgNgCABQgHACgTAdQgTAbgGADQgVAJgcgtQgbgsgTAHQgOAFgDAFQgDAEgLAdQgLgNgIgEQgRgJgfANQgJgTgMgCQgMgHgVAJQg8g9gNgIQgjgagvASQACgNgIgNQgJgTgPAHQgIADgIASIgPAlQgVA1giAOQgBgEgEgKQgFgMgBgKQgIANgEALQgFAHgWAPQgFgUgrgPQg0gOgYgLQgcgXgRgMQgegYgeAMQgaAKhcgyQhag1gCACIgOAZQgFAMgOAZQgJgqgOgEQgEgCgTAIQgVAIgNAZQhAgRgJgBQgQgDgXADQgNAAgOAFQg3ALgUgRQgGgJgEgDQgGgFgMAFQgOAFgGAJIgIAOQgpgmgagcQgcgkgRgiQgHgRgGgRIgBgFQAaAAAggLQAlgQAZgZQAZgXgCgUQAAgUgagEQgagFglARQglAOgYAZIgEADQABgRgDgUIgBgqQAAAAAAgBQAAAAAAAAQAAAAAAAAQABABAAAAQAmABA1gUQA1gXAkgfQAkghgCgXQgCgXgngCQglgDg1AYQgtASgjAcIAFggQAMg+AWgwQAJgTALgSIAGgCIAKgDIAXgFIABgBIAEAAIAEgBIACgBIgEArQLPg4hYhNIgEAAQhDgcGLgwIAHgBQDUgQgvgYQgEgEgJgBQE1gfE0ABQCegBCfAJIAAADQidAPCNATICyAUQgbAAgTAKQgTAHgBAOQABALATAHQAUAIAeAAQAdgCAUgIQAUgIABgLQgBgNgUgHIgFgBIAxACIgBAMIACAAIAAAAIBAgEIgFACQgUAHAAANQAAALAUAIQAUAJAdABQAeAAAUgIQAUgHAAgLQAAgNgUgIQgTgJgbgBICygUQCOgTiegPIAAgEQCfgHCeAAQE2AAEzAdIgOAGQgvAYDUAPIAGABQGLAxhFAbIgEABQhaBMLFA5IAAgrIABAAIAFABIADABIAXAGIALADIAGACQAJARAHAUQASAxADA8QADBJgSBZQgNBEgSAmQgIASgKARQgWAjgiAjQgdAegvAlIgFgPQgEgIgNgGQgKgEgGAEIgNAMQgVASgzgMQgNgEgNgBQgUgDgRADQgIABhAARQgJgZgTgIQgSgIgDACQgPAEgOAqIgOglQgIgZgBAAQgCgBheA0QheAzgYgLQgagLggAXIgwAjQgYALg0AOQgpAPgHAUQgUgOgEgIQgCgLgHgNQgCALgGALIgGAOQgdgNgQg2IgLglQgGgRgHgEQgOgGgKASQgIANAAANQgqgRgmAZQgLAIhAA+QgTgJgMAGQgMAEgKARQgbgMgSAIQgIAEgLANQgJgdgCgEQgCgDgOgHQgRgHgcAsQgYAmgSAAQgEAAgDgCgAvQFFQgZAKgRAVQgQAWABATQADAUAUAHQAUAFAbgJQAagLAQgVQARgXgDgTQgBgTgWgHQgHgCgIAAQgOAAgRAHgAjqEZQgoARgcAdQgbAbAEAWQAEAXAgACQAiACApgQQAsgSAZgcQAbgcgEgWQgDgXgjgCIgKAAQgcAAgkAPgAwtFuQgMABgQAHQgQAHgLAGQgLAIABAEQAAADAMgBQANgBAPgHQAPgHAMgHQALgHgCgEQAAgDgEAAIgHABgA65DmQgeAMgWASQgUATAAAOQABANAXACQAWABAfgMQAegNAVgSQAVgTgBgNQAAgOgYgBIgDAAQgWAAgbALgA9xDrQgPAGgKAIQgJAJgBAGQACAEAJABQALAAAOgGQAPgFAKgJQAKgHAAgGQAAgGgMAAIgCAAQgIAAgOAFgEgjZACnQgJACgNAFQgNAEgKAHQgJAGAAAFQAAAEAKgBQAKgBAMgFQAOgFAJgHQAJgGAAgFQgBgDgHAAIgCAAgAYKj5QAAAFARACIBUACQARgBAAgFQAAgDgRgDIhUgCQgRACAAADgAVakJQgJADAAAFQAAAEAJAFQAIAEAMAAIAVgDQAJgEAAgEQAAgFgJgEQgJgFgMAAQgMAAgIAEgA5RkHQgQADgBADQgBAFASABIBUgCQASgCgBgEQACgDgSgDgA1OkYQgLAAgKAGQgIACgBAGQAAAEAIAFIAVADQANAAAIgEQAKgGgBgEQABgEgJgDQgHgFgLAAIgDAAgATFk9QgTACAAAHQAAAHATAEIBhACQATgDAAgHQAAgHgTgDIgxgIgA0DlGQgTADAAAIQAAAGASAEIBigCQAUgFgBgGQACgIgVgCIgwgGgAU/lgQgHACAAAFQAAAEAHADIAjABQAIgDAAgEQAAgFgIgCIgRgEQgLAAgHADgAOYmdQgyALAAARQAAAPAyAOQAyAMBHABQBIACAygKQAygLAAgQQAAgQgygOQgygLhIgBIgUAAQg6AAgrAHgA0sltIgSADQgHABgBAGQABAEAHAEIAjgBQAIgDgBgFQACgFgIgCQgGgCgJAAIgDAAgAvqmvQhIABgzAMQgxAMgBARQgBAPAyAMQAzAKBHgBQBHgCAzgMQAygNABgQQABgRgzgLQgrgHg6AAIgUAAgADimaQgJACgBAHIAAABQAAAGAKAEQALAFAPABQAQAAALgFQALgDAAgGQAAgHgLgEQgGgDgGgBQgHgCgIAAIgCAAQgOAAgKAFgAjUmqIgPACIgLAEQgLAEgBAHQABAGAKAEQAMAEAPAAQAPgBALgFQALgDgBgHQAAAAABAAQAAAAAAAAQAAgBAAAAQgBAAAAAAQgBgGgJgDQgLgFgMAAIgDAAg");
	this.shape_25.setTransform(880,416.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#B3E188").s().p("AgiAKQgPgEAAgGQAAgEAPgFQAPgFATABQAUgBAPAFQAPAFAAAEQAAAGgPAEQgPAEgUABQgTgBgPgEg");
	this.shape_26.setTransform(175.2,443,0.702,0.977,0,11.2,23.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#B3E188").s().p("AhJAYQgegKgBgOQABgNAegLQAfgJAqgBQArABAfAJQAeALAAANQAAAOgeAKQgfAKgrAAQgqAAgfgKg");
	this.shape_27.setTransform(157.2,444.4,0.702,0.977,0,11.2,23.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#B3E188").s().p("AglAGQgQgCgBgEQABgCAQgDQAQgEAVAAQAWAAARAEQAPADAAACQAAAEgPACQgRADgWAAQgVAAgQgDg");
	this.shape_28.setTransform(96.2,456.4,0.702,0.977,0,11.2,23.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#B3E188").s().p("Ag/AjQgagPAAgUQAAgTAagPQAbgPAkAAQAlAAAaAPQAaAPAAATQAAAUgaAPQgaAOglAAQgkAAgbgOg");
	this.shape_29.setTransform(84.2,455.3,0.702,0.977,0,11.2,23.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#B3E188").s().p("AhpAnQgsgRAAgWQAAgWAsgPQAsgQA9gBQA+ABAsAQQAsAPAAAWQAAAWgsARQgsAPg+AAQg9AAgsgPg");
	this.shape_30.setTransform(13.1,451.5,0.702,0.977,0,11.2,23.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#B3E188").s().p("AiCAqQg2gSAAgYQAAgXA2gSQA3gRBLAAQBMAAA2ARQA3ASgBAXQABAYg3ASQg2ARhMAAQhLAAg3gRg");
	this.shape_31.setTransform(219.9,410.3,0.702,0.977,0,11.2,23.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#B3E188").s().p("AgeAGQgOgCAAgEQAAgCAOgEQANgDARAAQASAAANADQANAEAAACQAAAEgNACQgNADgSAAQgRAAgNgDg");
	this.shape_32.setTransform(213.2,436.4,0.702,0.977,0,11.2,23.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#B3E188").s().p("AhXAjQglgPAAgUQAAgTAlgPQAkgPAzAAQA0AAAkAPQAlAPAAATQAAAUglAPQgkAOg0AAQgzAAgkgOg");
	this.shape_33.setTransform(219.3,426.6,0.702,0.977,0,11.2,23.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("rgba(0,0,0,0.667)").ss(1,1,1).p("AHFaJQBXhQBjhWQAPgMAOgNQERjqCsh0QBrhJBEgbQAMgFALgDIAKAAQgHAVhZDdQgeBHglBbQiLFXgIAzIADAFQAHAFAPAAQAegtAfguQCgjsCtj7QBUh7BYh+QAPgXAPgWQCbjgB/iyQAVgfAVgdA+j+LIAIAsIAcCXMAGPAhaIAIAqA3tG1QADAEACADQBCBuBPCRQAUAjAUAnQAuBWBoDUQAIAOAGAQQA+CCAUAnQAGAIABAFIABAKQgFgKgDgNQgMg4AnhyQA5iIAAgLIALAAQAeB2AgBQQAJATAIASQAZAzAuA8QAwA5ATAxQAMAVAIAfQAXBDANBiQAagpAVgeQAFAAAEgEQAGgGAEAAQAYBdBDB0QA4BeAEAyQAAAEAAAEQADgBAEACQAJABAFAIQATgmAlgxQAEgFACgDQArg4BAhGQA3g6A5g5QALgLAMgKQArgrAugoIACBQQgTBPACAkQAAAOAUApQABAAAAABQAKASAEAPQAFAPABALQgBh3BlhOQAVgSBEgnQA2ghAXgYIAUgJQAGBcgHCUQgIClgRA3IAAAKQADgQAyg1QAjgkA4g3QAmgkAnglQAOgNAOgN");
	this.shape_34.setTransform(-56.3,644.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#3A2E1D").ss(1,1,1).p("AZlhtQADgCACgBIgJAzQgRBJgwC0QAoiqAdiDQgEACgFACAXKhMIAOAGAWJCNIAHgcIAsiiQgEAAgBAGQgBgBgBgCAWJCNIALgqIAxixAYHg1QgPAfgLAWAZ3jEQgIApgKAuAWJCNIgTBEA2GCBIgKgqIgqixA2GCBIgGgbIgmijQAFAAgBAHQADgDAAgBA2GCBIASBEA3AhXIgRAGA4GhDQAPAiAJAXA5qh5QgDgBgEgCIAGA0QAMBIAsC1QgkirgTiDQAEACAEADA52jQQAFApAHAu");
	this.shape_35.setTransform(-19.4,557.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#294E16").ss(0.5,1,1).p("AeSvWQgKAcgNAgQhECxhpENQgmBmlKRgQgkB9ghBwAVepTQAAAEgBAFQgDAbgKA5A+RpfQAAAEABAFQAAAbAFA5");
	this.shape_36.setTransform(8.8,596.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#322410").ss(0.5,1,1).p("EAgGgVQQggB5gqB8QghBhh1EmQgmBjglCCQgrCSgYCIQgNBBk6QxQhKD8g4DDEggFgVbQAOB4AYB8QASBhBWEnQAfBhAcCDQAjCSAWCIQgeA+ApQ1QAJBmAHBe");
	this.shape_37.setTransform(-16.1,603.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#322410").ss(1,1,1).p("EAlagcxQgZAMghATQg1AhgVANQgEACgEACQgCABgCABQgMAGgJADQgLAEgGgBQgggGgwAOQgxARgRAEQgLAEgKADQgpAMgYAFQgNACgMAAQgjACgXgTQgKA0glAVQgTAKgVADIAMg5Qg6gFhrAWQgPACgQAEIgBAAQAJgUAJgTQAHACACgJEAmIgd3QgTAegbAoQgGAKgHAKQgwBJgUAkQgDAEgCAEQgRAggiBcQgNAigKAcQgYA9gMAeQgVAwgVAhAHm6FQAygLAlABIAhAOQgGAdgVAhIAhAOQAlgHATAAQAmgDAYALIgFAcIACADQADAEgBAFQAOAGAggaQApgiABAAQAAARgKCBQgIBrANAvIAGADQAMgZARg4QAUhGAJgXQAohtBHgHQBQgJBhgYQAQgDANADQAKADApASQAIAEAMgGQAMgFAIADQAIAEAGANQAGAOAIADQABABB2gjQAjgLAugNQA9gQA0gLQkhJzgsB7QgeBWk6RoQhzGgiCHUAZZ54IAAAAAFh5fQh0AlhJAGQgmAChEAcQgBAAgBAAQgCABgBABQgFACgFABAFh5fQgGAigHAlQgTBghmIGIgpDQIiIH0AFh5fQANgEANgFQA7gUAwgJQgMBDgBAJQgfCbhmF+Qg2DNg8DUQgRA9imJHQgBABAAABQgrCRg5CyQgXBMgZBUQg5C5g8DYQhiFmh1G6QgPA8gTBBQgLAkgKAnQgCAEgCAIAArTVQBmlqCcopQFDx8AWhbQAUhVAQglQAOggAUgQQAbgSASgPQAjgdAlgyQAjgvBHh7QBYiaAEgGIhjHzQgZCAgIAoQgXBtgWBTQgBADk8RoQj0NkhADvAZ55+QATCcgKCqQgGBhgtDcAme6QQgygMgqACIgjAOQAFAcAUAiIgjAOQgngHgVAAQgogDgbALIAEAcIgDACQgCAEAAAGQgPAFghgZQgogjgCABQgBAQABCCQADBpgSAxIgGADQgNgagOg3QgQhGgJgXQgjhthMgHQhUgLhlgWQgRgEgPAEQgJACgvATQgJADgMgFQgMgGgJAEQgJAEgIANQgHAOgKADQAAAAh7giQgkgNgvgLQg+gQg3gLQDmJxAxB9QARAyANA5QANAvAgCPQAgCBAZBQQAJAigHFrQgCDYAVI6QAXHDALEnAme6QQAKBDABAJQAbCaBmF/QA6DMBBDVQAMApggIEAkS5qQgNgFgPgEQg9gUgzgJAhDpqIgdiDIgsjQQhqoGgQhgQgGgmgGghQB7AlBOAGQApACBHAcQACgBAAABAAr4RQAAAAgBAAQgBAAgBABApYZ0QgCgHgCgIQgrjBgLxtQAGpMASjiQAXl8gIgtQgThWgRgkQgOgggVgQQgdgTgUgOQglgdgmgyQgigvhGh7QhUicgDgEIBHHzQAVB/AHApQAWBrAVBVQgOAhgiRKQADRNATBYQAfBmAjCIQABAAgBACEgllgc9QAWAKAaARQAEACADADQAyAfATAPQAEACAEACQADABABABQALAEAJAFQALACAGABQAlgHAuAOQAyARAQAFQAMADAJAEQArALAXAGQANABANABQAlABAbgTQAEA0AjAWQASAKAWADIgDg5QA/gFBtAWQASABAOAFIABAAQgGgVgIgSQgGACgCgJA5Z6DIAAAAEgmHgeDQAPAeATAoQAFALAFAKQAlBIANAlQADAEAAAEQAGAOAHAZQAIAhAKA0QAIAhAEAdQAPA9AHAeQAPAvAQAhA566JQgqCcgNCqQgIBgAYDcAAqjuIhNEBIglB9IiKHiIjaNTIgWBWIgVByQgGAogKBDQgGAzgJBEAiYeEIAPg0QAUg+ApiUQAtijBJkDQAAAAABgB");
	this.shape_38.setTransform(-15.2,638.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#2E4B1B").ss(0.5,1,1).p("AALobQAHgBAHAAQB3gKB/gGQBbgFBfgCQAVgBAWAAQEjgIEvAXQCdALCgAUQHUA6IGC+EAl/gD9IABAAQBSAlAXAUQAfAcAGAoQADAYgGAcQgJAtgXAxEAnVAA9QgTAigGApQAeA3gPAXQgOAVgdAIQgCABgCAAQggAIgUAfQgYAHARgQQhmBfg+ATQgFABgFABQgHACgIABQgfAEgxgHQgNgDgMgCQgngHgbgEQgDgBgDAAQg+gLhxASQg9AKiBAeQgWAFiDA6Qg7AXgsAIQg1AJgdgNQgRgIgQgWQgRgXgGgDQgjgPhzAoQg7AVhKAbQg1AJhjgGQhygHg4gYQhfgphwAHQggACggAGQgTAEguAMQhCATh8AnQg+AUg6AJQgHABgGABEglsgEHIAAgBQhVAmgbATQgiAbgMApQgEAYAAAcQADAtAOAxAALonQh1gKiAgGQhbgFhggCQgVAAgWgBQkigIkxAXQibAKihAVQnSA6oWC+AAZolQgHgBgHAAEgntAAyQAOAigBApQgpA2AKAYQALAVAcAIQADABABAAQAhAHANAfQAYAIgOgQQAiAkAdAZQAxApAlAMQAHAAADACQAIACAHABQAhAEA0gIQAPgDAMgBQArgIAcgDQAEgCADABQBDgMBzATQA+AJCEAfQAWAECCA7QA9AWAsAJQA4AJAggNQAUgIATgWQAUgYAGgCQAngQB2ApQA9AUBLAcQA4AJBqgGQB5gHA9gYQBngpB1AHQAjACAhAGQAVADAvANQBFASCDAoQBDATA7AKAAMJBQgBAAAAAAQgBAAAAAA");
	this.shape_39.setTransform(-12.1,418.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#402F15").s().p("AgLXUQARg9AqiUIBcBiIhNBJQg4A2ghAlgAgtnYIBmoOIgdiCQAbg0APgvIBOjkIAShZIACAHIAAABIAEANIAGATQAyCdAnCDQAOAwAWAzIiHH0IAAgBIhPEDIgmB+IiHHgIjaNTg");
	this.shape_40.setTransform(-27.8,676.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#725325").s().p("ACDVRQASg2AIilQAHiUgGhdIgUAJQgXAYg2AhQhCAngVATQhnBNABB3QgBgLgFgPQgEgPgKgSQAKASAEAPIgVBKIgEANIgEAAIAPh4IgBgBQgUgpAAgOQgCgjAThQIgChQQguApgsAqQA+iyCLusQBYojAsjTQBJliAXgjQAggzAYgwIAdCCIhoIOQAWl2AAh9QAAgvgDgLQADALAAAvQAAB9gWF2IkAYiIgVBWIgWBxIgPBrIAPhrIAWhxIAVhWIDYtTICKngIAlh+IBPkDIAAABICIn0QAVAxAbAyIi3KGIgBACIhmFDIgwCgQg4C3g8DXQhjFmhyG7QgQA7gTBCQAThCAQg7QBym7BjlmQA8jXA4i3IAwigIBmlDIABgCIC3qGQAUAjg5FiQgTB1hyKBIgNBNIAAACIgBADQhUHBgcDkQgsFjAkAoQgpCUgTA+IgPA0QgyA0gEAQgAoxU+QgEgCgDABIAAgIIBNhEQglAwgTAmQgFgIgJgBgAiGSrIAAAAgACmrKIAAAAg");
	this.shape_41.setTransform(-49.1,700.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#523C1B").s().p("AsgbvQArg3BAhGQA2g7A6g4Qg6A4g2A7QhABGgrA3QgjiIgehnQgUhXgDxOQAixJAOghQgUhVgWhrIgdioIhHnzQAEAEBTCbQBGB8AjAuQAlAzAmAcIAwAiQAWAQAOAfQAQAlATBWQAJAsgYF9QgSDigGJMQALRtArDBIAEAPQhjBxh7ByQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAgBAAgANFTIIBAjqIBjlnQEfwQBQkMIAnh8IgHAbIAHgbIArikQgDAAgBAGIgDgEQAShDAWhiIA8kDQA+kGAthtIAfgHQATCdgKCpQgGBigtDcIgBAJIgTBWIgIAFIAIgFQgdCGgoCqQAxi0ARhLIgXB5QgRBTlOTcIjHLmQisD7igDsQAtiuBSkugANFTIQBajdAHgVIgKAAIgXAIIAXgIIAKAAQgHAVhaDdgAVkrBIAThFgAWCsvIgLApIALgpIA2ixIgGgCIgwCzIAAAAgAX0vKIgZA4IAZg4IACgEIgBAAIgBAEIAAAAgAXGvaIgOgGgAg1YYQAtijBJkDIABgBIAAgCIECuTQFDx8AWhbQAUhVAQgmQAOgfAUgRQAbgSASgPQAjgcAlgyQAjgvBHh7IBcigIhjHzIghCnQgXBugWBTIk9RqQjzNlhBDvQhjBWhXBPIAAABIgcAaIhbhigA28TNIhSiqQgGgQgIgOQgbj7gfk+QgzpwANjyQASmUgDg5QgKhGgGg0QAMBLAsC1QgkirgTiFIAIAEIgIgEIgMhXIgBgJQgZjcAIhhQAOiqApibQASAAAPAGQAhBtAhEFQAMBWAZCuIAeClIgDADQABgGgFAAIAmClIAGAbIgKgqIAKAqIgGgbIAnB8QADB9A2SfQAUEoALDCQgghQgeh3IgLAAQgBALg4CIQgnBzAMA4QAGAHABAFIABAKQgFgKgDgMgA2GrNIgShEgA3SvrQAUBNAcBjIgqizgA4AueIgYg5IAYA5gA4ZvZIABACIAAgCgA3jvmIARgFgACkurQgmiDgyidIgGgTIgFgNIAAgBIgCgHIgRBZIhNDkQgPAvgaA0IgtjQQhqoGgPhgIgMhIQB7AmBNAFQApACBHAcQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAAAIgBAQIACAAIABAAIAAAAIAKgDIADgCIACAAQBEgcAmgDQBJgFB0glIgNBHIh5JmIgpDQQgWgzgPgwgAZSwCIAAAAgAZlxYQgDAbgKA5IgGACIAThWgA6DwQQgFg5AAgbIAMBXIgHgDgAZlxYIAAAAgA6IxkIAAAAg");
	this.shape_42.setTransform(-17.6,648.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#E7D18F").s().p("AapITQFVy+AMgXQBLiUAWgfQAmgyA6izIAIgdIAJgDIBJguQAigTAZgNIgOAVQgvBJgUAkIgFAIQgSAgghBcIgXA+IgkBbQgWAvgUAhIAXg7IgXA7IitG/QgmBmlKRgIhGDtIgqA7IDErBgA+pCmQhIjKhSkCQhUkNgpixQgPghgQgvIgWhbQgEgdgIghQgKg0gIghIgciWIAHAFQAyAfATAPIAJADIADAcQAbCzAgAzQATAeA3CUQgOAnDROXIgahKgEgkggRJQABgEgEgEQgNglglhJIgKgUQAWAKAaARIAcCWQgHgZgGgOgEgkvgS4IAAAAg");
	this.shape_43.setTransform(-15.8,576.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#785827").s().p("Au9aeQhDh0gYhcQgEAAgGAFQgEAFgFAAIgvBGQgNhigXhCQgLkngWnDQgWo6ADjYQAGlrgIgiQgahQggiBQggiPgNgvQgNg5gQgyQgyh9jmpxQA3ALA+AQQAvALAkANIB8AiQAJgDAIgOQAHgNAKgEQAIgEAMAGQAMAFAJgDQAvgTAJgCQAPgEARAEQBlAWBVALQBLAHAkBtQAIAXARBGQAOA3AMAaIAGgDQATgxgEhpQgBiCABgQQACgBApAjQAgAZAPgFQAAgGACgEIAEgCIgFgcQAbgLAoADQAVAAAnAHIAjgOQgUgigFgcIAjgOQAqgCAyAMIAMBMQAbCaBlF/QA6DMBBDVQgXAjhJFiQgsDThaIiQiMOtg9CyIgWAWQgrjBgLxtQAGpMASjiQAYl8gJgtQgThWgQgkQgOgggWgQIgxghQglgdgmgyQgigvhGh7QhUicgDgEIBHHzIAdCoQAVBrAVBVQgOAhgiRKQADRNAUBYQAeBmAjCIQAAAAAAAAQABAAAAABQAAAAAAAAQAAAAgBABIgHAHIAHgJIgHAJIhMBEQgEgyg4hegAg7R/QAcjkBSnDIAAgDIAAgCIAOhMQByqAATh1QA5lhgUgkQA8jUA2jNQBll+AfibIAOhMQAxgLAmABIAhAOQgHAdgUAhIAhAOQAkgHAUAAQAlgDAZALIgGAcIADADQADAEgBAFQANAGAhgaIApgiQABARgKCBQgJBrAOAvIAFADQANgZARg4QAThGAKgXQAohtBHgHQBQgJBhgYQAQgDANADIAzAVQAIAEAMgGQALgFAIADQAIAEAHANQAGAOAHADQABABB3gjIBRgYQA8gQA1gLQkiJzgrB7QgfBWk5RoIj1N0QisB1kRDqIgdAZQBAjvDztkIE+xrQAWhTAWhtIAiioIBjnzIhcCgQhIB7giAvQglAygjAdQgTAPgbASQgTAQgPAgQgPAlgVBVQgVBblER8IkCOUIAAABIAAABQhJEDgtCjQgkgoAsljgApTXxIAWgWQgKAbgIAKIgEgPgAo9XbIAAAAgATLHJQFOzcARhSIAWh6IAJgzQALg5ADgbIABgJQAtjcAGhhQAJiqgSicQBrgWA5AFIgLA5QAVgDASgKQAmgVAKg0QAXATAjgCQAMAAANgCQAYgFApgMQggB5gqB7QghBhh1EnQgmBiglCCQgrCSgZCIQgLBCk7QxIiDG+IgeAsIisD6IDHrmgA7BLNQgUgmgTgjIgQjEQgpw2Aeg9QgWiIgiiSQgdiDgfhiQhWkmgShhQgYh8gOh4IBDARIAaACQAkABAcgTQADA0AjAWQASAKAWADIgDg5QA/gFBtAWQgpCcgOCqQgIBgAZDcIAAAJQABAbAFA5IAGADQAUCFAkCrQgsi1gNhKIgFg0IAFA0QAHA0AKBFQADA5gTGVQgNDxA0JwQAeE+AbD7QhnjUgvhWgAZEwPIAFgDIgJAzQgRBLgwC0QAoiqAdiFgAWkvwIAGACIg2CxgA3hv5IAHgDIAqCzQgdhjgUhNgAZJwSg");
	this.shape_44.setTransform(-16.1,650.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#A47735").s().p("AKCckIgDgGQAHgzCMlXIBCiiQhSEugtCuIg9BaQgQAAgGgEgAx1V9QgTgwgwg6Qgvg8gZgzIgQgkQgLjCgUkoQg2yfgDh9Ignh8IgmilQAFAAgBAGIADgDIgeilQgZiugMhWQghkFghhtIAAAAIAAAAQDnJxAxB9QAQAyANA5QAOAvAfCPQAhCBAZBQQAJAhgHFsQgDDYAWI6QAWHCALEoQgJgggLgVgAPaD3QE6xnAehWQAsh8EhpyIAAAAIABAAQgtBtg+EGIg8EDQgWBigSBDIADAEQABgGADAAIgrCkIgnB8QhQEMkfQQIhjFnQhEAbhrBJID1t1gAVuIDQE7wyAMhBQAYiIAriSQAliCAnhjQB0kmAhhhQAqh7Agh5IAVgIQARgDAxgRQAwgOAgAGQAGAAALgDIAVgKIAEgCIgJAdQg6CzglAyQgXAfhLCUQgMAXlUTAIjEK/Qh/CzibDgICCm+gA9cG9IgIgrMgGPghaQAJAhAJA0QAIAhAFAdIAWBbQAPAvAPAhQApCxBUENQBSECBIDMIAaBKQjRuZAPgnQg4iUgTgeQgfgzgbizIgEgbIADABQALAFAJAFIASADQAkgIAvAPIBBAWIAVAHQAOB3AYB9QASBhBXEmQAeBiAdCDQAiCRAXCJQgfA9AqQ2IAPDDQhPiRhChtgA+MlHQgOAzgGAcIA0izIgBgGQAAACgfBogA9hG1IgDgjIAIArIgFgIgADYseIApjQIB5pmIANhHIAagJQA7gUAwgKIgNBNQgfCahmF+Qg2DOg8DUQgbgygVgxgAjsxoQhll+gbiaIgLhNQAzAKA9ATIAcAJIAMBIQAPBgBqIGIAtDQQgYAwggAzQhBjWg6jMg");
	this.shape_45.setTransform(-19.1,644.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#483517").s().p("AMWG4QgNgvAIhqQAKiBAAgSIgqAiQggAbgOgGQABgGgDgEIgCgCIAFgdQgYgKgmACQgTABglAGIghgOQAVggAGgdIghgOQglgBgyAKQgwAKg7ATIgaAJQh0AmhJAFQgmADhEAbIgCABIgDABIgKAEIAAAAIgBAAIgCAAIABgQQAAAAAAgBQAAAAgBAAQAAAAAAAAQAAAAgBAAQhHgcgpgCQhNgFh7gmIgcgJQg9gTgzgKQgzgLgqACIgjAOQAGAcATAhIgjAOQgngGgVgBQgngDgbALIAEAdIgDACQgCAEAAAGQgPAFghgaQgpgjgCABQgBARABCCQAEBpgSAwIgHADQgMgZgOg4QgRhFgIgYQgkhthLgHQhUgLhmgVQgRgEgOADQgKACgvAUQgIADgNgFQgLgGgJAEQgKADgHAOQgIANgJADIh7giQgkgMgwgLQg9gRg4gKIAAgBQgGgUgHgTIgCABIgBAAIAAAAQgEAAgCgIQACAIAEAAIAAAAIABAAIACgBQAHATAGAUIAAAAQgPgFgSgBQhtgVg/AEIAEA6QgWgEgSgKQgkgVgDg0QgbATglgCIgagCIhDgRIgVgHIhBgTQgvgPgkAHIgSgCQgJgGgLgEIgDgCIgIgEQgUgOgxgfIgIgFIgIgsIAIAsQgagSgWgJIghhGQAXAIgOgRQAiAkAeAaQAwAoAmANQAGAAADABQAJADAHAAQAhAFAzgIIAcgFQArgIAbgCQAFgDADABQBDgMBzAUQA+AJCEAeQAWAECCA6QA8AVAtAJQA4AJAggNQAUgIASgWQAUgVAHgCQAngRB1AoQA9AUBLAcQA4AIBrgFQB5gIA9gXQBngnB1AFQAiACAhAGQAVADAwANQBFASCDAnQBDAUA7AJIAAANIABAAIABAAIAAAAIANgCQA6gJA+gUQB8gnBCgSQAugNATgDQAhgGAfgCQBwgHBfApQA4AXByAIQBkAGA1gJQBJgcA7gUQBzgnAkAOQAGADAQAWQAQAXARAHQAeAOA1gKQArgIA8gWQCDg5AVgFQCBgdA9gKQBxgSA+AKIAHACIBBALIAaAEQAwAIAggFIAPgCIAJgCQA+gTBmhgQgQARAYgIIguBGQgZAMghAUIhKAtIgIAEIgEACIgVAKQgLADgGgBQgggFgwALQgxASgRADIgVAHQgpANgYAEQgNADgMAAQgjABgXgTQgKA0glAVQgTALgVADIAMg6Qg6gEhrAVIgfAGIgBAAIASgnIADABIAAAAIABAAQAEgBABgHIAAAAIAAAAQgBAHgEABIgBAAIAAAAIgDgBIgSAnIAAABQg0ALg9AQIhRAXQh2AjgBAAQgIgEgGgNQgGgNgIgEQgIgEgMAGQgMAFgIgDIgzgWQgNgDgQAEQhhAXhQAJQhHAHgoBuQgJAXgUBFQgRA5gMAYgEAnegGFQAMgVAKgVQgJAdgMAeQgLAcgPAeQAGgpATgigEgnngF+IgMg8IAPArQAPAhgCAqQgKgegGgcg");
	this.shape_46.setTransform(-13.1,464.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("EAm1gAaQgMgngRglQgLgZgNgYQBSAlAXAUQAfAcAGAoQADAYgGAaQgJAtgXAzQgKAVgMAWQgFhmgbhXgEgn9ABtQgOgzgDgtQAAgaAEgYQAMgpAigbQAbgTBVgmIgeAyQgUAkgSAnQgnBYgWBlIgQgrg");
	this.shape_47.setTransform(-12.1,408.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#ABDF8E").s().p("AYNBdQgRgCAAgFQAAgDARgCIBTACQASADAAADQAAAFgSABgAVLBXQgJgFAAgEQAAgFAJgDQAJgEAMAAQAMAAAJAFQAIAEAAAFQAAAEgIAEIgVADQgMAAgJgEgA5xBOQACgDAQgDIBUgCQASADgBADQABAEgTACIhUACQgRgBAAgFgA1yBOQgIgFAAgEQABgGAHgCQALgGALAAQANAAAIAFQAJADgBAEQABAEgLAGQgHAEgOAAgAS3AmQgUgEAAgHQAAgHAUgCIAwgGIAwAIQAUADAAAHQAAAHgUADgA0lAUQABgIATgDIAxgIIAwAGQAUACgBAIQABAGgVAFIhhACQgTgEAAgGgAUwgBQgHgDAAgEQAAgFAHgCQAIgDAKAAIASAEQAHACAAAFQAAAEgHADgAQDgGQhHgBgygMQgygOAAgPQAAgRAygLQAygJBHACQBHABAzALQAxAOAAAQQAAAQgxALQgsAJg8AAIgSgBgA1UgSQABgGAHgBIARgDQALgBAHADQAIACgBAFQAAAFgHADIgkABQgHgEAAgEgAx1gZQgxgMAAgPQABgRAygMQAzgMBHgBQBHgBAzAIQAyALgBARQAAAQgzANQgzAMhHACIgNAAQg/AAgugJgADugvQgPgBgLgFQgLgEAAgGIAAgBQABgHAKgCQALgGAPABQAHAAAHACQAHABAFADQALAEAAAHQAAAGgLADQgKAFgNAAIgDAAgAj9g+QgLgEAAgGQAAgHALgEIAMgEIAPgCQAOAAAMAFQAJADABAGQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAQABAHgLADQgMAFgPABQgOAAgMgEg");
	this.shape_48.setTransform(-10.9,383.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#74CA46").s().p("ANhIHQgGgCgQgcQgPgcgHgDQgCgBgRANQgRAOgKgEQgKgFgJgZQgIgYgOgGQgGgDgQATQgSASgRgIQgNgFgjAAQgkgBgCgBQgRgHgPgbQgPgcgNgFQgBgBhLAoIhMAnQgIgDgGgNQgGgNgIgEQgBgBg/ATQhAATgBgBQgNgFgMggQgMgfgPgGQgNAUgUBEQgVA2gfgNQgIgEgHgIQgGgIgGgDQgIAfgXABIgCAAQgFAAgHgBIAAgCIAAAAIgBAAIgBgIQgXgCgIgeQgGADgHAIQgGAHgJAFQgiANgVg2QgThFgPgTQgPAGgOAfQgNAggNAFQgCABhCgTQhBgTgCABQgIADgIAOQgGAMgJAEIhOgnQhNgogBABQgPAFgQAcQgRAagSAIIgoACQglAAgOAFQgSAHgSgRQgQgTgHACQgPAHgKAYQgLAYgKAGQgLADgRgNQgRgNgCABQgHACgTAdQgTAbgGADQgVAJgcgtQgbgsgTAHQgOAFgDAFQgDAEgLAdQgLgNgIgEQgRgJgfANQgJgTgMgCQgMgHgVAJQg8g9gNgIQgjgagvASQACgNgIgNQgJgTgPAHQgIADgIASIgPAlQgVA1giAOQgBgEgEgKQgFgMgBgKQgIANgEALQgFAHgWAPQgFgUgrgPQg0gOgYgLQgcgXgRgMQgegYgeAMQgaAKhcgyQhag1gCACIgOAZQgFAMgOAZQgJgqgOgEQgEgCgTAIQgVAIgNAZQhAgRgJgBQgQgDgXADQgNAAgOAFQg3ALgUgRQgGgJgEgDQgGgFgMAFQgOAFgGAJIgIAOQgpgmgagcQgcgkgRgiQgHgRgGgRIgBgFQAaAAAggLQAlgQAZgZQAZgXgCgUQAAgUgagEQgagFglARQglAOgYAZIgEADQABgRgDgUIgBgqQAAAAAAgBQAAAAAAAAQAAAAAAAAQABABAAAAQAmABA1gUQA1gXAkgfQAkghgCgXQgCgXgngCQglgDg1AYQgtASgjAcIAFggQAMg+AWgwQAJgTALgSIAGgCIAKgDQALgCALgDIACgBIAEAAIAEgBIACgBIgEArQLPg4hYhNIgEAAQhDgcGLgwIAHgBQDUgQgvgYQgEgEgJgBQE1gfE0ABQCegBCfAJIAAADQidAPCNATICyAUQgbAAgTAKQgTAHgBAOQABALATAHQAUAIAeAAQAdgCAUgIQAUgIABgLQgBgNgUgHIgFgBIAxACIgBAMIACAAIAAAAIBAgEIgFACQgUAHAAANQAAALAUAIQAUAJAdABQAeAAAUgIQAUgHAAgLQAAgNgUgIQgTgJgbgBICygUQCOgTiegPIAAgEQCfgHCeAAQE2AAEzAdIgOAGQgvAYDUAPIAGABQGLAxhFAbIgEABQhaBMLFA5IAAgrIABAAIAFABIADABIAXAGIALADIAGACQAJARAHAUQASAxADA8QADBJgSBZQgNBEgSAmQgIASgKARQgWAjgiAjQgdAegvAlIgFgPQgEgIgNgGQgKgEgGAEIgNAMQgVASgzgMQgNgEgNgBQgUgDgRADQgIABhAARQgJgZgTgIQgSgIgDACQgPAEgOAqIgOglQgIgZgBAAQgCgBheA0QheAzgYgLQgagLggAXIgwAjQgYALg0AOQgpAPgHAUQgUgOgEgIQgCgLgHgNQgCALgGALIgGAOQgdgNgQg2IgLglQgGgRgHgEQgOgGgKASQgIANAAANQgqgRgmAZQgLAIhAA+QgTgJgMAGQgMAEgKARQgbgMgSAIQgIAEgLANQgJgdgCgEQgCgDgOgHQgRgHgcAsQgYAmgSAAQgEAAgDgCgAvQFFQgZAKgRAVQgQAWABATQADAUAUAHQAUAFAbgJQAagLAQgVQARgXgDgTQgBgTgWgHQgHgCgIAAQgOAAgRAHgAjqEZQgoARgcAdQgbAbAEAWQAEAXAgACQAiACApgQQAsgSAZgcQAbgcgEgWQgDgXgjgCIgKAAQgcAAgkAPgAwtFuQgMABgQAHQgQAHgLAGQgLAIABAEQAAADAMgBQANgBAPgHQAPgHAMgHQALgHgCgEQAAgDgEAAIgHABgA65DmQgeAMgWASQgUATAAAOQABANAXACQAWABAfgMQAegNAVgSQAVgTgBgNQAAgOgYgBIgDAAQgWAAgbALgA9xDrQgPAGgKAIQgJAJgBAGQACAEAJABQALAAAOgGQAPgFAKgJQAKgHAAgGQAAgGgMAAIgCAAQgIAAgOAFgEgjZACnQgJACgNAFQgNAEgKAHQgJAGAAAFQAAAEAKgBQAKgBAMgFQAOgFAJgHQAJgGAAgFQgBgDgHAAIgCAAgAYKj5QAAAFARACIBUACQARgBAAgFQAAgDgRgDIhUgCQgRACAAADgAVakJQgJADAAAFQAAAEAJAFQAIAEAMAAIAVgDQAJgEAAgEQAAgFgJgEQgJgFgMAAQgMAAgIAEgA5RkHQgQADgBADQgBAFASABIBUgCQASgCgBgEQACgDgSgDgA1OkYQgLAAgKAGQgIACgBAGQAAAEAIAFIAVADQANAAAIgEQAKgGgBgEQABgEgJgDQgHgFgLAAIgDAAgATFk9QgTACAAAHQAAAHATAEIBhACQATgDAAgHQAAgHgTgDIgxgIgA0DlGQgTADAAAIQAAAGASAEIBigCQAUgFgBgGQACgIgVgCIgwgGgAU/lgQgHACAAAFQAAAEAHADIAjABQAIgDAAgEQAAgFgIgCIgRgEQgLAAgHADgAOYmdQgyALAAARQAAAPAyAOQAyAMBHABQBIACAygKQAygLAAgQQAAgQgygOQgygLhIgBIgUAAQg6AAgrAHgA0sltIgSADQgHABgBAGQABAEAHAEIAjgBQAIgDgBgFQACgFgIgCQgGgCgJAAIgDAAgAvqmvQhIABgzAMQgxAMgBARQgBAPAyAMQAzAKBHgBQBHgCAzgMQAygNABgQQABgRgzgLQgrgHg6AAIgUAAgADimaQgJACgBAHIAAABQAAAGAKAEQALAFAPABQAQAAALgFQALgDAAgGQAAgHgLgEQgGgDgGgBQgHgCgIAAIgCAAQgOAAgKAFgAjUmqIgPACIgLAEQgLAEgBAHQABAGAKAEQAMAEAPAAQAPgBALgFQALgDgBgHQAAAAABAAQAAAAAAAAQAAgBAAAAQgBAAAAAAQgBgGgJgDQgLgFgMAAIgDAAg");
	this.shape_49.setTransform(-12.3,416.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#B3E188").s().p("AAiJBIgBAAIgBAAIAAgMQg7gKhDgTQiDgohFgSQgwgNgVgDQghgGgigCQh1gHhnApQg9AYh5AHQhrAGg4gJQhLgcg9gUQh1gpgnAQQgHACgUAYQgSAWgUAIQggANg4gJQgtgJg8gWQiCg7gWgEQiEgfg+gJQhzgThDAMQgDgBgFACQgbADgrAIIgcAEQgzAIghgEQgHgBgJgCQgDgCgGAAQgmgMgwgpQgegZgigkQAOAQgXgIQgOgfghgHIgEgBQgbgIgLgVQgKgYAog2QACgpgPgiQAXhjAnhaQASgnAUgkIAdgyIABABQAVgJAvgNQgLASgJATQgWAwgLA+IgFAgQAigcAtgSQA1gYAmADQAnACABAXQACAXgjAhQgkAfg2AXQg0AWgngBQAAAAAAAAQAAgBAAAAQAAAAgBABQAAAAAAAAIABAoQADAUAAARIADgDQAZgZAkgOQAmgRAZAFQAaAEABAUQACAUgaAXQgZAZglAQQggALgaAAIACAFQAFARAIARQAQAiAdAkQAZAcAqAmIAIgOQAGgJAOgFQALgFAGAFQAEADAHAJQAUARA2gLQAPgFANAAQAXgDAPADQAKABA/ARQANgZAVgIQAUgIADACQAPAEAIAqQAPgZAFgMIAOgZQACgCBaA1QBbAyAagKQAegMAeAYQASAMAcAXQAYALA0AOQAqAPAFAUQAXgPAFgHQAEgLAIgNQABAKAFAMQAEAKAAAEQAjgOAVg1IAPglQAIgSAIgDQAPgHAJATQAHANgCANQAvgSAkAaQAMAIA9A9QAVgJALAHQANACAIATQAfgNASAJQAIAEAKANQALgdADgEQAEgFAOgFQASgHAbAsQAdAtAUgJQAHgDATgbQASgdAHgCQADgBAQANQARANALgDQALgGALgYQAKgYAOgHQAIgCAPATQASARASgHQAPgFAkAAIAogCQATgIAQgaQARgcAOgFQABgBBNAoIBPAnQAIgEAHgMQAHgOAIgDQADgBBAATQBCATADgBQANgFANggQAOgfAOgGQAPATAUBFQAVA2AhgNQAKgFAGgHQAHgIAFgDQAHAeAZACIAAAIIABAAIABAAIAAACQAGABAFAAIACAAQAYgBAIgfQAGADAGAIQAGAIAJAEQAfANAVg2QAUhEANgUQAOAGANAfQAMAgAMAFQACABA/gTQA/gTACABQAIAEAGANQAGANAIADIBMgnQBKgoACABQANAFAPAcQAPAbAQAHQACABAkABQAkAAAMAFQARAIASgSQARgTAGADQAOAGAIAYQAJAZAJAFQALAEAQgOQARgNACABQAHADAQAcQAPAcAGACQAUAJAdgtQAdgsARAHQAOAHABADQADAEAIAdQALgNAIgEQASgIAcAMQAJgRAMgEQAMgGATAJQBAg+AMgIQAmgZApARQABgNAHgNQAKgSAOAGQAIAEAGARIAKAlQAQA2AeANIAGgOQAGgLACgLQAHANACALQADAIAUAOQAIgUApgPQAzgOAYgLIAwgjQAhgXAaALQAXALBegzQBeg0ACABQABAAAJAZIANAlQAPgqAOgEQAEgCARAIQATAIAJAZQBAgRAJgBQARgDAUADQAMABANAEQAzAMAWgSIAMgMQAHgEAKAEQANAGAEAIIAFAPQAuglAegeQAigjAVgjQALgRAIgSQARgmAOhEQAShZgEhJQgDg8gSgxQgHgUgJgRQAvANATAIIAAAAQANAYAMAZQAQAlAMAnQAcBZAEBkQgTAigGApQAeA3gPAXQgNAVgdAIIgFABQggAIgTAfQATgfAggIIAFgBIgBABQgNAZgqAOQgYAHAQgQQhmBfg+ATIgJACIgPADQggAEgwgHIgagFIhBgLIgHgBQg+gLhxASQg9AKiBAeQgVAFiDA6Qg8AXgrAIQg1AJgegNQgRgIgQgWQgQgXgGgDQgkgPhzAoQg7AVhJAbQg1AJhkgGQhygHg4gYQhfgphwAHQgfACghAGQgTAEguAMQhCATh8AnQg+AUg6AJIgNACgAveGUQgTgHgDgUQgBgTAPgWQARgVAagKQAagLAUAGQAWAHAAATQADATgQAXQgRAVgaALQgRAGgOAAQgIAAgIgCgAkMF9QgggCgEgXQgEgWAagbQAcgdApgRQAqgSAgADQAiACADAXQAFAWgcAcQgYAcgsASQglAPgfAAIgHgBgAxaF7QgBgEAMgIQAKgGARgHQAPgHAMgBQAMgEAAAGQACAEgMAHQgLAHgQAHQgPAHgNABIgGAAQgGAAAAgCgA7VEgQgXgCgBgNQAAgOAVgTQAVgSAegMQAegMAXABQAXABAAAOQABANgUATQgVASgfANQgbALgVAAIgFAAgEgnBADpIgBgBIAEABQAhAHAOAfQgpgNgJgZgA+AD0QABgGAJgJQALgIAOgGQAQgGAJABQALAAAAAGQAAAGgKAHQgJAJgPAFQgPAGgKAAQgJgBgDgEgEgj7ACwQABgFAJgGQAKgHAMgEQANgFAKgCQAJAAABADQAAAFgKAGQgIAHgOAFQgNAFgKABIgEAAQgGAAAAgDgAa4l5IAEgBQBGgbmLgxIgGgBQjUgPAvgYIANgGQkzgdk1AAQieAAifAHIAAAEQCdAPiNATIiyAUQAaABATAJQAVAIAAANQAAALgVAHQgUAIgdAAQgdgBgUgJQgVgIAAgLQAAgNAVgHIAFgCIhAAEIAAAAIgCAAIAAgMIgxgCIAFABQATAHAAANQAAALgTAIQgTAIgdACQgeAAgUgIQgUgHgBgLQABgOAUgHQATgKAbAAIizgUQiNgTCdgPIAAgDQiegJifABQkzgBk2AfQAKABAEAEQAvAYjVAQIgGABQmLAwBDAcIADAAQBZBNrQA4IAEgrIgBABIgFABIgDAAIgCABIhGAOQIVi+HSg6QChgVCcgKQExgXEhAIIAsABQBgACBaAFQCBAGB1AKIAAABIANABIAAAJQB3gKB/gGQBbgFBfgCIAsgBQEjgIEvAXQCcALCgAUQHVA6IFC+IhKgQIgEgBIgCAAIAAArQrFg5BahMgAAiobIANgBIgNABg");
	this.shape_50.setTransform(-14.4,418.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.lf(["#D3F5FA","#1FCCE4","#239AE2"],[0,0.506,1],315.9,362.3,313.1,-307.2).s().p("EhH/A7zMAAAh3lMCP+AAAMAAAB3lg");
	this.shape_51.setTransform(452.3,528.8,1,1,0,0,0,0.8,153.5);

	this.help = new lib.help();
	this.help.setTransform(561.9,585.9,1,1,0,0,0,328,4.4);

	this.main = new lib.xespeiyou_com__1_81_77332();
	this.main.setTransform(441.7,324.1,1,1,0,0,0,360.1,196.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#3A2E1D").ss(1,1,1).p("A3AhXIgRAGA4GhDQAPAiAJAXA2GCBIgGgbIgmijQAFAAgBAHQADgDAAgBA5qh5QgDgBgEgCIAGA0QAMBIAsC1QgkirgTiDQAEACAEADA52jQQAFApAHAuA2GCBIgKgqIgqixA2GCBIASBEAZkhtQAEgCACgBIgJAzQgRBJgxC0QAoiqAdiDQgEACgEACAXKhMIAOAGAWJCNIAHgcIAriiQgDAAgBAGQgCgBgBgCAYGg1QgOAfgLAWAWJCNIALgqIAwixAWJCNIgTBEAZ3jEQgJApgKAu");
	this.shape_52.setTransform(872.9,556.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#322410").ss(1,1,1).p("AFh5fQANgEANgFQA7gUAwgJQgMBDgBAJQgfCbhmF+Qg2DNg8DUQgRA9imJHQAAABgBABQgrCRg5CyQgXBMgZBUQg4C5g8DYQhjFmh0G6QgQA8gTBBQgKAkgLAnQgCAEgCAIAFh5fQh0AlhJAGQgmAChEAcQgBAAgBAAQgBABgCABQgFACgFACAFh5fQgGAigHAlQgTBghmIGIgpDQIiIH1AHm6FQAygLAlABIAhAOQgGAdgVAhIAhAOQAlgHATAAQAmgDAYALIgFAcIACADQADAEgBAFQAOAGAggaQApgiABAAQAAARgKCBQgIBrANAvIAGADQAMgZARg4QAUhGAJgXQAohtBHgHQBQgJBhgYQAQgDANADQAKADApASQAIAEAMgGQAMgFAIADQAIAEAGANQAGAOAIADQABABB2gjQAjgLAugNQA8gQA1gLQkhJzgsB7QgeBWk6RoQhzGgiCHUAme6QQgygMgqACIgjAOQAGAcATAiIgjAOQgngHgVAAQgngDgbALIADAcIgCACQgDAEAAAGQgPAFgggZQgpgjgCABQgBAQABCCQAEBpgTAxIgGADQgMgagOg3QgRhGgIgXQgkhthLgHQhUgLhmgWQgRgEgOAEQgKACgvATQgIADgNgFQgMgGgIAEQgKAEgHANQgIAOgJADQgBAAh6giQgkgNgwgLQg9gQg4gLQDnJxAxB9QAQAyANA5QAOAvAfCPQAgCBAZBQQAKAigHFrQgDDYAWI6QAWHDALEnAkS5qQgMgFgPgEQg9gUg0gJQAKBDACAJQAbCaBlF/QA6DMBBDVQAMApgfIEAkS5qQB8AlBNAGQApACBHAcQACgBAAABAAr4RIgBAAQAAAAgCABAhCpqIgdiDIgtjQQhqoGgPhgQgGgmgHghApYZ0QgCgHgCgIQgrjBgLxtQAGpMASjiQAYl8gJgtQgThWgQgkQgPgggVgQQgdgTgUgOQglgdgmgyQgigvhGh7QhTicgEgEIBHHzQAVB/AIApQAVBrAVBVQgOAhgiRKQADRNATBYQAfBmAjCIQABAAAAACAArTWQBmlrCcopQFDx8AWhbQAUhVAQglQAOggAUgQQAbgSASgPQAjgdAlgyQAjgvBHh7QBYiaAEgGIhjHzQgZCAgIAoQgXBtgWBTQgBADk8RoQj0NkhADvEgllgc9QAWAKAaARQADACAFADQAxAfAUAPQAEACADACQADABABABQALAEAJAFQALACAHABQAkgHAuAOQAyARAQAFQANADAIAEQArALAYAGQANABANABQAlABAbgTQADA0AkAWQARAKAXADIgEg5QA/gFBtAWQASABAPAFIAAAAIAAAAA5Z6DQgGgVgIgSQgGACgCgJA566JQgpCcgOCqQgIBgAZDcEgllgc9QAFALAGAKQAkBIANAlQAEAEAAAEQAFAOAHAZQAIAhAKA0QAIAhAEAdQAPA9AIAeQAPAvAPAhAAqjuIhNEBIglB9IiKHiIjaNTIgVBWIgWByQgGAogJBDQgHAzgIBEAiXeEIAPg0QATg+ApiUQAtijBJkCQABgBAAgBEAlagcxQgZAMghATQg1AhgVANQgFACgDACQgCABgCABQgMAGgJADQgLAEgGgBQgggGgwAOQgyARgQAEQgLAEgKADQgpAMgYAFQgNACgMAAQgjACgXgTQgKA0glAVQgTAKgVADIAMg5Qg6gFhrAWQgPACgQAEIgBAAIAAAAEAlagcxQgGAKgHAKQgwBJgUAkQgDAEgCAEQgRAggiBcQgNAigKAcQgYA9gNAeQgUAwgVAhEAmIgd3QgTAegbAoAZZ54QAJgUAJgTQAHACACgJAZ55+QATCcgKCqQgGBhgtDcEgmHgeDQAPAeATAo");
	this.shape_53.setTransform(877.1,638.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#523C1B").s().p("AsgbvQArg4BAhFQA2g7A6g5Qg6A5g2A7QhABFgrA4QgjiIgehnQgUhXgDxOQAixKAOggQgUhVgWhsIgdinIhHnzQAEAEBTCcQBGB6AjAwQAlAyAmAcIAwAhQAWAQAOAgQAQAlATBWQAJAtgYF7QgSDjgGJMQALRtArDAIAEAQQhjBxh7ByQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAgBAAgANFTIIBAjpIAXgJIAKAAQgHAVhaDdQBajdAHgVIgKAAIgXAJIBjloQEfwQBQkMIAnh8IgHAbIAHgbIArilQgDABgBAGIgDgEQAShDAWhiIA8kEQA+kFAthuIAfgGQATCdgKCqQgGBhgtDcIgBAJIgTBWIgIAFIAIgFQgdCGgoCqQAxi1ARhKIgXB5QgRBTlOTcQh1GwhSE2QisD6igDtQAtiuBSkugAV3sGIgTBEIAThEIALgpgAWCsvIA2ixIgGgCIgwCzIAAAAgAX0vJIgZA3IAZg3IACgFIgBAAIgBAFIAAAAgAXGvaIgOgGgAg1YYQAtijBJkDIABgBIAAgBIECuUQFDx8AWhbQAUhVAQglQAOggAUgRQAbgRASgPQAjgdAlgyQAjgvBHh7IBcigIhjHzIghCnQgXBugWBTIk9RqQj0NlhADvQhkBWhWBQIgcAaIhbhigA28TMQgUgng+iCQgGgPgIgPQgbj7gfk+QgzpwANjyQASmUgDg5QgKhGgGgzQAMBKAsC1QgkirgTiFIAIAFIgIgFIgMhXIgBgJQgZjcAIhhQAOipApidQASABAPAGQAhBtAhEFQAMBWAZCuIAeClIgDAEQABgIgFABIAmCkIAGAcIgGgcIAnB9QADB9A2SfQAUEoALDCQgghRgeh2IgLAAQgBAMg4CHQgnByAMA4QAGAIABAGIABAKQgFgLgDgNgA2GrNIgShEgA3SvrQAUBNAcBjIAKAqIgKgqIgqizgA4AueIgYg5IAYA5gA4ZvZIABACIAAgCgA3jvlIARgGgACkusQgmiCgyidIgGgTIgFgNIAAgBIgCgGIgRBZIhNDjQgPAvgaA0IgtjQQhqoGgPhgIgMhHQB7AlBNAFQApACBHAdQABgBAAAAQAAAAABAAQAAAAAAABQAAAAAAAAIgBARIACgBIABAAIAAABIAKgFIADgBIACAAQBEgcAmgCQBJgGB0glIgNBHIh5JmIgpDQQgWgzgPgxgAZSwCIAAAAgAZlxYQgDAbgKA4IgGADIAThWgA58wNIAAAAgA6DwQQgFg5AAgbIAMBXIgHgDgA6IxkIAAAAg");
	this.shape_54.setTransform(874.7,648.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#3A2E1D").ss(1,1,1).p("AZlhtQADgCACgBIgJAzQgRBJgwC0QAoiqAdiDQgEACgFACAWJCNIAHgcIAsiiQgEAAgBAGQgBgBgBgCAXKhMIAOAGAYHg1QgPAfgLAWAWJCNIALgqIAxixAZ3jEQgIApgKAuAWJCNIgTBEA2GCBIgKgqIgqixA2GCBIgGgbIgmijQAFAAgBAHQADgDAAgBA2GCBIASBEA3AhXIgRAGA4GhDQAPAiAJAXA5qh5QgDgBgEgCIAGA0QAMBIAsC1QgkirgTiDQAEACAEADA52jQQAFApAHAu");
	this.shape_55.setTransform(-19.4,557.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#322410").ss(1,1,1).p("EAlagcxQgZAMghATQg1AhgVANQgEACgEACQgCABgCABQgMAGgJADQgLAEgGgBQgggGgwAOQgxARgRAEQgLAEgKADQgpAMgYAFQgNACgMAAQgjACgXgTQgKA0glAVQgTAKgVADIAMg5Qg6gFhrAWQgPACgQAEIgBAAQAJgUAJgTQAHACACgJEAlagcxQgGAKgHAKQgwBJgUAkQgDAEgCAEQgRAggiBcQgNAigKAcQgYA9gMAeQgVAwgVAhEAmIgd3QgTAegbAoAHm6FQAygLAlABIAhAOQgGAdgVAhIAhAOQAlgHATAAQAmgDAYALIgFAcIACADQADAEgBAFQAOAGAggaQApgiABAAQAAARgKCBQgIBrANAvIAGADQAMgZARg4QAUhGAJgXQAohtBHgHQBQgJBhgYQAQgDANADQAKADApASQAIAEAMgGQAMgFAIADQAIAEAGANQAGAOAIADQABABB2gjQAjgLAugNQA9gQA0gLQkhJzgsB7QgeBWk6RoQhzGgiCHUAZZ54IAAAAAFh5fQh0AlhJAGQgmAChEAcQgBAAgBAAQgCABgBABQgFACgFABAFh5fQgGAigHAlQgTBghmIGIgpDQIiIH0AFh5fQANgEANgFQA7gUAwgJQgMBDgBAJQgfCbhmF+Qg2DNg8DUQgRA9imJHQgBABAAABQgrCRg5CyQgXBMgZBUQg5C5g8DYQhiFmh1G6QgPA8gTBBQgLAkgKAnQgCAEgCAIAArTVQBmlqCcopQFDx8AWhbQAUhVAQglQAOggAUgQQAbgSASgPQAjgdAlgyQAjgvBHh7QBYiaAEgGIhjHzQgZCAgIAoQgXBtgWBTQgBADk8RoQj0NkhADvAZ55+QATCcgKCqQgGBhgtDcAme6QQgygMgqACIgjAOQAFAcAUAiIgjAOQgngHgVAAQgogDgbALIAEAcIgDACQgCAEAAAGQgPAFghgZQgogjgCABQgBAQABCCQADBpgSAxIgGADQgNgagOg3QgQhGgJgXQgjhthMgHQhUgLhlgWQgRgEgPAEQgJACgvATQgJADgMgFQgMgGgJAEQgJAEgIANQgHAOgKADQAAAAh7giQgkgNgvgLQg+gQg3gLQDmJxAxB9QARAyANA5QANAvAgCPQAgCBAZBQQAJAigHFrQgCDYAVI6QAXHDALEnAme6QQAKBDABAJQAbCaBmF/QA6DMBBDVQAMApggIEAkS5qQgNgFgPgEQg9gUgzgJAhDpqIgdiDIgsjQQhqoGgQhgQgGgmgGghQB7AlBOAGQApACBHAcQACgBAAABAAr4RQAAAAgBAAQgBAAgBABApYZ0QgCgHgCgIQgrjBgLxtQAGpMASjiQAXl8gIgtQgThWgRgkQgOgggVgQQgdgTgUgOQglgdgmgyQgigvhGh7QhUicgDgEIBHHzQAVB/AHApQAWBrAVBVQgOAhgiRKQADRNATBYQAfBmAjCIQABAAgBACEgllgc9QAWAKAaARQAEACADADQAyAfATAPQAEACAEACQADABABABQALAEAJAFQALACAGABQAlgHAuAOQAyARAQAFQAMADAJAEQArALAXAGQANABANABQAlABAbgTQAEA0AjAWQASAKAWADIgDg5QA/gFBtAWQASABAOAFIABAAIAAAAA5Z6DQgGgVgIgSQgGACgCgJEgmHgeDQAPAeATAoQAFALAFAKQAlBIANAlQADAEAAAEQAGAOAHAZQAIAhAKA0QAIAhAEAdQAPA9AHAeQAPAvAQAhA566JQgqCcgNCqQgIBgAYDcAAqjuIhNEBIglB9IiKHiIjaNTIgWBWIgVByQgGAogKBDQgGAzgJBEAiYeEIAPg0QAUg+ApiUQAtijBJkDQAAAAABgB");
	this.shape_56.setTransform(-15.2,638.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#523C1B").s().p("AsgbvQArg3BAhGQA2g7A6g4Qg6A4g2A7QhABGgrA3QgjiIgehnQgUhXgDxOQAixJAOghQgUhVgWhrIgdioIhHnzQAEAEBTCbQBGB8AjAuQAlAzAmAcIAwAiQAWAQAOAfQAQAlATBWQAJAsgYF9QgSDigGJMQALRtArDBIAEAPQhjBxh7ByQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAgBAAgANFTIIBAjqIBjlnQEfwQBQkMIAnh8IgHAbIAHgbIArikQgDAAgBAGIgDgEQAShDAWhiIA8kDQA+kGAthtIAfgHQATCdgKCpQgGBigtDcIgBAJIgTBWIgIAFIAIgFQgdCGgoCqQAxi0ARhLIgXB5QgRBTlOTcIjHLmQisD7igDsQAtiuBSkugANFTIQBajdAHgVIgKAAIgXAIIAXgIIAKAAQgHAVhaDdgAV3sGIgTBFIAThFIALgpgAWCsvIA2ixIgGgCIgwCzIAAAAgAX0vKIgZA4IAZg4IACgEIgBAAIgBAEIAAAAgAXGvaIgOgGgAg1YYQAtijBJkDIABgBIAAgCIECuTQFDx8AWhbQAUhVAQgmQAOgfAUgRQAbgSASgPQAjgcAlgyQAjgvBHh7IBcigIhjHzIghCnQgXBugWBTIk9RqQjzNlhBDvQhjBWhXBPIAAABIgcAaIhbhigA28TNIhSiqQgGgQgIgOQgbj7gfk+QgzpwANjyQASmUgDg5QgKhGgGg0QAMBLAsC1QgkirgTiFIAIAEIgIgEIgMhXIgBgJQgZjcAIhhQAOiqApibQASAAAPAGQAhBtAhEFQAMBWAZCuIAeClIgDADQABgGgFAAIAmClIAGAbIgKgqIAKAqIgGgbIAnB8QADB9A2SfQAUEoALDCQgghQgeh3IgLAAQgBALg4CIQgnBzAMA4QAGAHABAFIABAKQgFgKgDgMgA2GrNIgShEgA3SvrQAUBNAcBjIgqizgA4AueIgYg5IAYA5gA4ZvZIABACIAAgCgA3jvmIARgFgACkurQgmiDgyidIgGgTIgFgNIAAgBIgCgHIgRBZIhNDkQgPAvgaA0IgtjQQhqoGgPhgIgMhIQB7AmBNAFQApACBHAcQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAAAIgBAQIACAAIABAAIAAAAIAKgDIADgCIACAAQBEgcAmgDQBJgFB0glIgNBHIh5JmIgpDQQgWgzgPgwgAZSwCIAAAAgAZlxYQgDAbgKA5IgGACIAThWgA6DwQQgFg5AAgbIAMBXIgHgDgAZlxYIAAAAgA6IxkIAAAAg");
	this.shape_57.setTransform(-17.6,648.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#B3E188").s().p("AAiJBIgBAAIgBAAIAAgMQg7gKhDgTQiDgohFgSQgwgNgVgDQghgGgigCQh1gHhnApQg9AYh5AHQhrAGg4gJQhLgcg9gUQh1gpgnAQQgHACgUAYQgSAWgUAIQggANg4gJQgtgJg8gWQiCg7gWgEQiEgfg+gJQhzgThDAMQgDgBgFACQgbADgrAIIgcAEQgzAIghgEQgHgBgJgCQgDgCgGAAQgmgMgwgpQgegZgigkQAOAQgXgIQgOgfghgHIgEgBQgbgIgLgVQgKgYAog2QACgpgPgiQAXhjAnhaQASgnAUgkIAdgyIABABQAVgJAvgNQgLASgJATQgWAwgLA+IgFAgQAigcAtgSQA1gYAmADQAnACABAXQACAXgjAhQgkAfg2AXQg0AWgngBQAAAAAAAAQAAgBAAAAQAAAAgBABQAAAAAAAAIABAoQADAUAAARIADgDQAZgZAkgOQAmgRAZAFQAaAEABAUQACAUgaAXQgZAZglAQQggALgaAAIACAFQAFARAIARQAQAiAdAkQAZAcAqAmIAIgOQAGgJAOgFQALgFAGAFQAEADAHAJQAUARA2gLQAPgFANAAQAXgDAPADQAKABA/ARQANgZAVgIQAUgIADACQAPAEAIAqQAPgZAFgMIAOgZQACgCBaA1QBbAyAagKQAegMAeAYQASAMAcAXQAYALA0AOQAqAPAFAUQAXgPAFgHQAEgLAIgNQABAKAFAMQAEAKAAAEQAjgOAVg1IAPglQAIgSAIgDQAPgHAJATQAHANgCANQAvgSAkAaQAMAIA9A9QAVgJALAHQANACAIATQAfgNASAJQAIAEAKANQALgdADgEQAEgFAOgFQASgHAbAsQAdAtAUgJQAHgDATgbQASgdAHgCQADgBAQANQARANALgDQALgGALgYQAKgYAOgHQAIgCAPATQASARASgHQAPgFAkAAIAogCQATgIAQgaQARgcAOgFQABgBBNAoIBPAnQAIgEAHgMQAHgOAIgDQADgBBAATQBCATADgBQANgFANggQAOgfAOgGQAPATAUBFQAVA2AhgNQAKgFAGgHQAHgIAFgDQAHAeAZACIAAAIIABAAIABAAIAAACQAGABAFAAIACAAQAYgBAIgfQAGADAGAIQAGAIAJAEQAfANAVg2QAUhEANgUQAOAGANAfQAMAgAMAFQACABA/gTQA/gTACABQAIAEAGANQAGANAIADIBMgnQBKgoACABQANAFAPAcQAPAbAQAHQACABAkABQAkAAAMAFQARAIASgSQARgTAGADQAOAGAIAYQAJAZAJAFQALAEAQgOQARgNACABQAHADAQAcQAPAcAGACQAUAJAdgtQAdgsARAHQAOAHABADQADAEAIAdQALgNAIgEQASgIAcAMQAJgRAMgEQAMgGATAJQBAg+AMgIQAmgZApARQABgNAHgNQAKgSAOAGQAIAEAGARIAKAlQAQA2AeANIAGgOQAGgLACgLQAHANACALQADAIAUAOQAIgUApgPQAzgOAYgLIAwgjQAhgXAaALQAXALBegzQBeg0ACABQABAAAJAZIANAlQAPgqAOgEQAEgCARAIQATAIAJAZQBAgRAJgBQARgDAUADQAMABANAEQAzAMAWgSIAMgMQAHgEAKAEQANAGAEAIIAFAPQAuglAegeQAigjAVgjQALgRAIgSQARgmAOhEQAShZgEhJQgDg8gSgxQgHgUgJgRQAvANATAIIAAAAQANAYAMAZQAQAlAMAnQAcBZAEBkQgTAigGApQAeA3gPAXQgNAVgdAIIgFABQggAIgTAfQgYAHAQgQQhmBfg+ATIgJACIgPADQggAEgwgHIgagFIhBgLIgHgBQg+gLhxASQg9AKiBAeQgVAFiDA6Qg8AXgrAIQg1AJgegNQgRgIgQgWQgQgXgGgDQgkgPhzAoQg7AVhJAbQg1AJhkgGQhygHg4gYQhfgphwAHQgfACghAGQgTAEguAMQhCATh8AnQg+AUg6AJIgNACgAveGUQgTgHgDgUQgBgTAPgWQARgVAagKQAagLAUAGQAWAHAAATQADATgQAXQgRAVgaALQgRAGgOAAQgIAAgIgCgAkMF9QgggCgEgXQgEgWAagbQAcgdApgRQAqgSAgADQAiACADAXQAFAWgcAcQgYAcgsASQglAPgfAAIgHgBgAxaF7QgBgEAMgIQAKgGARgHQAPgHAMgBQAMgEAAAGQACAEgMAHQgLAHgQAHQgPAHgNABIgGAAQgGAAAAgCgA7VEgQgXgCgBgNQAAgOAVgTQAVgSAegMQAegMAXABQAXABAAAOQABANgUATQgVASgfANQgbALgVAAIgFAAgEAmyAD0IAFgBIgBABQgNAZgqAOQATgfAggIgEgnBADpIgBgBIAEABQAhAHAOAfQgpgNgJgZgA+AD0QABgGAJgJQALgIAOgGQAQgGAJABQALAAAAAGQAAAGgKAHQgJAJgPAFQgPAGgKAAQgJgBgDgEgEgj7ACwQABgFAJgGQAKgHAMgEQANgFAKgCQAJAAABADQAAAFgKAGQgIAHgOAFQgNAFgKABIgEAAQgGAAAAgDgAa4l5IAEgBQBGgbmLgxIgGgBQjUgPAvgYIANgGQkzgdk1AAQieAAifAHIAAAEQCdAPiNATIiyAUQAaABATAJQAVAIAAANQAAALgVAHQgUAIgdAAQgdgBgUgJQgVgIAAgLQAAgNAVgHIAFgCIhAAEIAAAAIgCAAIAAgMIgxgCIAFABQATAHAAANQAAALgTAIQgTAIgdACQgeAAgUgIQgUgHgBgLQABgOAUgHQATgKAbAAIizgUQiNgTCdgPIAAgDQiegJifABQkzgBk2AfQAKABAEAEQAvAYjVAQIgGABQmLAwBDAcIADAAQBZBNrQA4IAEgrIgBABIgFABIgDAAIgCABIhGAOQIVi+HSg6QChgVCcgKQExgXEhAIIAsABQBgACBaAFQCBAGB1AKIAAABIANABIAAAJQB3gKB/gGQBbgFBfgCIAsgBQEjgIEvAXQCcALCgAUQHVA6IFC+IhKgQIgEgBIgCAAIAAArQrFg5BahMgAAiobIANgBIgNABg");
	this.shape_58.setTransform(-14.4,418.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.demo},{t:this.instance}]}).to({state:[{t:this.shape_51},{t:this.shape_58},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_57},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_56},{t:this.shape_37},{t:this.shape_36},{t:this.shape_55},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_54},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_53},{t:this.shape_12},{t:this.shape_11},{t:this.shape_52},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.main},{t:this.help}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(184.3,312.5,1409.4,880.4);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;