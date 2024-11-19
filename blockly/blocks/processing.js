

/** PROCESSING **/
Blockly.Blocks['processing'] = {
  init: function() {
  	this.appendDummyInput()
        .appendField("processing");
    this.setInputsInline(true);
    this.appendStatementInput("DECL")
        .appendField("declarations");
    this.appendStatementInput("SETUP")
        .appendField("setup");
    this.appendStatementInput("DRAW")
        .appendField("draw");
    this.setTooltip('');
    this.setHelpUrl('http://processingjs.org/reference/draw_');
    this.setPreviousStatement(false);
  }
 };
  
  Blockly.Blocks['size'] = {
  init: function() {
  	this.appendDummyInput()
        .appendField("size");
    this.appendValueInput("width")
        .setCheck("Number")
        .appendField("width");
    this.appendValueInput("height")
        .setCheck("Number")
        .appendField("height");
    this.setInputsInline(true);
    this.setTooltip('');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setHelpUrl('http://processingjs.org/reference/size_');
  }
};
Blockly.Blocks['background'] = {
  init: function() {
  	this.appendDummyInput()
        .appendField("background");
    this.appendValueInput("r")
        .setCheck("Number")
		.appendField("red");
    this.appendValueInput("g")
        .setCheck("Number")
		.appendField("green");
     this.appendValueInput("b")
        .setCheck("Number")
		.appendField("blue");
    this.setInputsInline(true);
    this.setTooltip('');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setHelpUrl('http://processingjs.org/reference/background_');
  }
};

Blockly.Blocks['fill'] = {
  init: function() {
  	this.appendDummyInput()
        .appendField("fill");
    this.appendValueInput("r")
        .setCheck("Number")
		.appendField("red");
    this.appendValueInput("g")
        .setCheck("Number")
		.appendField("green");
     this.appendValueInput("b")
        .setCheck("Number")
		.appendField("blue");
    this.setInputsInline(true);
    this.setTooltip('');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setHelpUrl('http://processingjs.org/reference/fill_');
     
  }
};

Blockly.Blocks['stroke'] = {
  init: function() {
  	this.appendDummyInput()
        .appendField("stroke");
    this.appendValueInput("r")
        .setCheck("Number")
		.appendField("red");
    this.appendValueInput("g")
        .setCheck("Number")
		.appendField("green");
     this.appendValueInput("b")
        .setCheck("Number")
		.appendField("blue");
    this.setInputsInline(true);
    this.setTooltip('');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setHelpUrl('http://processingjs.org/reference/stroke_');
  }
};
Blockly.Blocks['strokeWeight'] = {
  init: function() {
  	this.appendDummyInput()
        .appendField("strokeWeight");
    this.appendValueInput("weight")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setTooltip('');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setHelpUrl('http://processingjs.org/reference/strokeWeight_');
  }
};
/** MOUSE **/ 
Blockly.Blocks['mouseX'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("mouseX");
    this.setOutput(true);
    this.setTooltip('');
    this.setHelpUrl('http://processingjs.org/reference/mouseX');
    this.setColour(170);
  }
};

Blockly.Blocks['mouseY'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("mouseY");
    this.setOutput(true);
    this.setTooltip('');
    this.setHelpUrl('http://processingjs.org/reference/mouseY');
    this.setColour(170);
  }
};

Blockly.Blocks['mousePressed'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("mousePressed");
    this.setOutput(true);
    this.setTooltip('');
    this.setHelpUrl('http://processingjs.org/reference/mousePressed');
    this.setColour(0);
  }
};



Blockly.Blocks['key'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("key");
    this.setOutput(true);
    this.setTooltip('');
    this.setHelpUrl('http://processingjs.org/reference/key');
    this.setColour(30);
  }
};

Blockly.Blocks['keyPressed'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("keyPressed");
    this.setOutput(true);
    this.setTooltip('');
    this.setHelpUrl('http://processingjs.org/reference/keyPressed');
    this.setColour(0);
  }
};
/** FIGURES **/
Blockly.Blocks['rect'] = {
  init: function() {
  	this.appendDummyInput()
        .appendField("rect");
    this.appendValueInput("coord_x")
        .appendField("x");
    this.appendValueInput("coord_y")
        .appendField("y");
    this.appendValueInput("radius_x")
        .appendField("width");
    this.appendValueInput("radius_y")
        .appendField("height");
    
    this.setInputsInline(true);
    
    this.setTooltip('');
    this.setHelpUrl('http://processingjs.org/reference/rect_');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
 };


 Blockly.Blocks['point'] = {
  init: function() {
  	this.appendDummyInput()
        .appendField("point");
    this.appendValueInput("coord_x")
        .appendField("x");
    this.appendValueInput("coord_y")
        .appendField("y");
    
    this.setInputsInline(true);
    
    this.setTooltip('');
    this.setHelpUrl('http://processingjs.org/reference/point_');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
 };
 
 Blockly.Blocks['line'] = {
  init: function() {
  	this.appendDummyInput()
        .appendField("line");
    this.appendValueInput("x1")
        .appendField("x1");
    this.appendValueInput("y1")
        .appendField("y1");
    this.appendValueInput("x2")
        .appendField("x2");
    this.appendValueInput("y2")
        .appendField("y2");
    
    this.setInputsInline(true);
    
    this.setTooltip('');
    this.setHelpUrl('http://processingjs.org/reference/line_');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
 };
 
  Blockly.Blocks['arc'] = {
  init: function() {
  	this.appendDummyInput()
        .appendField("arc");
    this.appendValueInput("x")
        .appendField("x");
    this.appendValueInput("y")
        .appendField("y");
    this.appendValueInput("width")
        .appendField("width");
    this.appendValueInput("height")
        .appendField("height");
    this.appendValueInput("start")
        .appendField("start");
	this.appendValueInput("stop")
        .appendField("stop");
    this.setInputsInline(true);
    
    this.setTooltip('');
    this.setHelpUrl('http://processingjs.org/reference/arc_');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
 };
 
   Blockly.Blocks['triangle'] = {
  init: function() {
  	this.appendDummyInput()
        .appendField("triangle");
    this.appendValueInput("x1")
        .appendField("x1");
    this.appendValueInput("y1")
        .appendField("y1");
    this.appendValueInput("x2")
        .appendField("x2");
    this.appendValueInput("y2")
        .appendField("y2");
    this.appendValueInput("x3")
        .appendField("x3");
	this.appendValueInput("y3")
        .appendField("y3");
    this.setInputsInline(true);
    
    this.setTooltip('');
    this.setHelpUrl('http://processingjs.org/reference/triangle_');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
 };
 
    Blockly.Blocks['quad'] = {
  init: function() {
  	this.appendDummyInput()
        .appendField("quad");
    this.appendValueInput("x1")
        .appendField("x1");
    this.appendValueInput("y1")
        .appendField("y1");
    this.appendValueInput("x2")
        .appendField("x2");
    this.appendValueInput("y2")
        .appendField("y2");
    this.appendValueInput("x3")
        .appendField("x3");
	this.appendValueInput("y3")
        .appendField("y3");
	this.appendValueInput("x4")
        .appendField("x4");
	this.appendValueInput("y4")
        .appendField("y4");
    this.setInputsInline(true);
    
    this.setTooltip('');
    this.setHelpUrl('http://processingjs.org/reference/quad_');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
 };
Blockly.Blocks['ellipse'] = {
  init: function() {
  	this.appendDummyInput()
        .appendField("ellipse");
    this.appendValueInput("coord_x")
        .appendField("x");
    this.appendValueInput("coord_y")
        .appendField("y");
    this.appendValueInput("radius_x")
        .appendField("raio x");
    this.appendValueInput("radius_y")
        .appendField("raio y");
    
    this.setInputsInline(true);
    
    this.setTooltip('');
    this.setHelpUrl('http://processingjs.org/reference/ellipse_');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
 };

 
/**  EXTRA **/
Blockly.Blocks['p_random'] = {
  /**
   * Block for random integer between [X] and [Y].
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.MATH_RANDOM_INT_TITLE,
      "args0": [
        {
          "type": "input_value",
          "name": "FROM",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "TO",
          "check": "Number"
        }
      ],
      "inputsInline": true,
      "output": "Number",
      "colour": Blockly.Blocks.math.HUE,
      "tooltip": Blockly.Msg.MATH_RANDOM_INT_TOOLTIP,
      "helpUrl": Blockly.Msg.MATH_RANDOM_INT_HELPURL
    });
  }
};

Blockly.Blocks['width'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("width");
    this.setOutput(true);
    this.setTooltip('');
    this.setHelpUrl('http://processingjs.org/reference/width');
    this.setColour(170);
  }
};

Blockly.Blocks['height'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("height");
    this.setOutput(true);
    this.setTooltip('');
    this.setHelpUrl('http://processingjs.org/reference/height');
    this.setColour(170);
  }
};

Blockly.Blocks['print'] = {
  init: function() {
    this.appendValueInput("NAME")
        .appendField("print");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setHelpUrl('http://processingjs.org/reference/print_');
  }
};

Blockly.Blocks['println'] = {
  init: function() {
    this.appendValueInput("NAME")
        .appendField("println");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setHelpUrl('http://processingjs.org/reference/println_');
  }
};

Blockly.Blocks['ps_text'] = {
  init: function() {
    this.appendValueInput("text")
        .appendField("text");
    this.appendValueInput("x")
        .appendField("x");
    this.appendValueInput("y")
        .appendField("y");
    
    
    this.setInputsInline(true);
    
    this.setTooltip('');
    this.setHelpUrl('http://processingjs.org/reference/text_');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
 };
 /*
 Blockly.Blocks['ps_concat'] = {
  init: function() {
    this.appendValueInput("text")
        .appendField("text");
    this.appendValueInput("x")
        .appendField("x");
    this.appendValueInput("y")
        .appendField("y");
    
    
    this.setInputsInline(true);
    
    this.setTooltip('');
    this.setHelpUrl('http://processingjs.org/reference/text_');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }*/
  
  Blockly.Blocks['ps_image_decl'] = {
  init: function() {
    this.appendValueInput("VALUE")
        .setCheck("String")
        .appendField("image")
        .appendField(new Blockly.FieldVariable("item"), "VAR");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setHelpUrl('http://processingjs.org/reference/PImage');
  }
  };
  
  Blockly.Blocks['ps_image'] = {
  init: function() {
    this.appendValueInput("image_url")
        .appendField("image");
    this.appendValueInput("x")
        .appendField("x");
    this.appendValueInput("y")
        .appendField("y");
    
    
    this.setInputsInline(true);
    
    this.setTooltip('');
    this.setHelpUrl('http://processingjs.org/reference/image_');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
  };
