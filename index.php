<? session_start();

if(!isset($_GET['n'])) {
	header('Location: https://'.$_SERVER[HTTP_HOST].$_SERVER[REQUEST_URI].'?n='.uniqid());
}

?>
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  
  <title>Programming processing with blocks</title>
  <link rel="stylesheet" href="style.css">
  <link rel="stylesheet" href="genericos.css">
  
</head>
<body>
<div id="processing_iframe" class="draggable">
<span class="dragger genericon genericon-move" title="move" alt="move">
	</span>
<span id="stopButton" class="genericon genericon-close" title="close" alt="close"></span>
	<span id="fullscreenButton" class="genericon genericon-fullscreen" title="fullscreen" alt="fullscreen"></span>
	
	
	
<div id="sketch-container">
      <canvas id="sketch"></canvas>
      
    </div>
   </div>
   <textarea rows="20" cols="80" id="code" style="display:none;"></textarea>
<?php /* <iframe id="processing_iframe" src="https://bprocessing.eempo.net/processing.php" frameborder="0" allowfullscreen></iframe> */ ?>
  <table width="100%" height="100%">
    <tr>
      <td>
        <h1>
        <!--<a href="https://developers.google.com/blockly/">Blockly</a>&rlm; &gt;
          <a href="../index.html">Demos</a>&rlm; &gt;-->
          <span id="title" style="display:none;">...</span>
          
          
          <span id="exercise_title">...</span>
        </h1>
      </td>
      <td class="farSide">
        <select id="languageMenu"></select>
      </td>
    </tr>
    <tr>
      <td colspan=2>
        <table width="100%">
          <tr id="tabRow" height="1em">
            <td id="tab_blocks" class="tabon">...</td>
            <td class="tabmin">&nbsp;</td>
            <td id="tab_javascript" class="taboff">Processing</td>
            <td class="tabmin">&nbsp;</td>
            <td id="tab_python" class="taboff">Python</td>
            <td class="tabmin">&nbsp;</td>
            <td id="tab_php" class="taboff">PHP</td>
            <td class="tabmin">&nbsp;</td>
            <td id="tab_dart" class="taboff">Dart</td>
            <td class="tabmin">&nbsp;</td>
            <td id="tab_xml" class="taboff">XML</td>
            <td class="tabmax utilities_buttons">
            
            <button id="runButton" class="genericon genericon-youtube" title="Run" alt="Run"><span>Run</span></button>
            
               <button id="saveButton" class="genericon genericon-edit" title="Save" alt="Save"><span>Save</span></button>
               
              <button id="linkButton" class="notext" title="..." style="display:none;">
                <img src='/blockly/media/1x1.gif' class="link icon21">
              </button>
              <button id="lockButton" class="genericon genericon-lock" title="Lock" alt="Lock"><span>Lock</span></button>
              <button id="unlockButton" class="genericon genericon-key" title="Unlock" alt="Unlock"><span>Unlock</span></button>
              
              <!--<button id="stopButton" class="genericon genericon-close" title="Stop" alt="Stop"><span>Stop</span></button>-->
              <!--<button id="stopButton" class="genericon genericon-fullscreen" title="Fullscreen" alt="Fullscreen"><span>Fullscreen</span></button>-->
              <!--<button id="stopButton" class="genericon genericon-hide" title="Hide" alt="Hide"><span>Hide</span></button>
              <button id="runButton" class="genericon genericon-show" title="Show" alt="Show"><span>Show</span></button>-->
              
              <!--<button id="undoButton" class="genericon genericon-previous" alt="Undo" title="Undo"><span>Undo</span></button>
              <button id="redoButton" alt="Redo" title="Redo" class="genericon genericon-next" title="genericon-play"><span>Redo</span></button>
              -->
              
              <button id="trashButton" class="genericon genericon-trash" title="Clear" alt="Clear"><span>Clear</span>
              </button>
              
              
              <!--<button id="lockButton" class="genericon genericon-unlock" title="Unlock" alt="Unlock"><span>Unlock</span></button>-->
              <!--<span>|</span>
              <button id="showXML" class="genericon genericon-code" title="XML" alt="XML"><span>XML</span></button>
              <button id="showCode" class="genericon genericon-cog" title="Processing" alt="Processing"><span>Processing</span></button>-->
              
              <a href="https://jsbin.com/bewerahozi/edit?js,output" target="_blank"><img src='https://static.jsbin.com/images/dave.min.svg' class="run icon21" alt="jsbin" title="jsbin"></a>
              <a href="http://rapidtables.com/web/color/RGB_Color.htm" target="_blank"><img src='https://i.ytimg.com/vi/sr_vL2anfXA/maxresdefault.jpg' class="run icon21"  alt="rgb" title="rgb"></a>
               <a href="http://processingjs.org/reference/" target="_blank"><img src='https://pbs.twimg.com/profile_images/262520472/pjs_400x400.jpg' class="run icon21"  alt="rgb" title="rgb"></a>
            </td>
          </tr>
          
        </table>
      </td>
    </tr>
    <tr>
      <td height="100%" colspan=2 id="content_area">
      </td>
     
    </tr>
  </table>
 
  <div id="content_blocks" class="content"></div>
  <pre id="content_javascript" class="content"></pre>
  <pre id="content_php" class="content"></pre>
  <pre id="content_python" class="content"></pre>
  <pre id="content_dart" class="content"></pre>
  <textarea id="content_xml" class="content" wrap="off"></textarea>

  <xml id="toolbox" style="display: none">
  
  <category id="catVariables" colour="60">
  	
  	<block type="variables_decl_boolean">
  	 		<value name="VALUE">
  	 			<shadow type="logic_boolean" colour="0"></shadow>
  	 			</value>
    </block>
  	<block type="variables_decl_int">
  			<value name="VALUE">
  	 			<shadow type="math_number" colour="0">0</shadow>
  	 			</value>
  	</block>
  	<block type="variables_decl_float">
  		<value name="VALUE">
  	 			<shadow type="math_number">
            <field name="NUM">0.0</field>
          </shadow>
  	 			</value>
  	</block>
  	<block type="variables_decl_char">
  	<value name="VALUE">
  		<shadow type="text">
            <field name="TEXT">a</field>
          </shadow>	
  	</value>
  	</block>
  	<block type="variables_decl_string">
  	<value name="VALUE">
  		<shadow type="text">
            <field name="TEXT">abc</field>
          </shadow>	
  	</value>
  	</block>
  	
  	<block type="variables_asign"></block>
  	<block type="variables_get"></block>
  	
  	
  	<block type="math_number"></block>
  	<block type="math_constant"></block>
  	
  	<block type="logic_boolean" colour="0"></block>
  	
  	<!--<block type="logic_null"></block>-->
  	<!--<block type="variables_decl"></block>-->
  </category>
  
  <category id="catCond" colour="225">
  	<block type="controls_if"></block>
        <block type="controls_if">
          <mutation else="1"></mutation>
        </block>
  	
  	<!-- falta o switch case -->
  </category>
  
    <category id="catLoops" colour="120">
      <block type="controls_repeat_ext">
        <value name="TIMES">
          <shadow type="math_number">
            <field name="NUM">10</field>
          </shadow>
        </value>
      </block>
      <block type="controls_whileUntil"></block>
      <block type="controls_for">
        <value name="FROM">
          <shadow type="math_number">
            <field name="NUM">1</field>
          </shadow>
        </value>
        <value name="TO">
          <shadow type="math_number">
            <field name="NUM">10</field>
          </shadow>
        </value>
        <value name="BY">
          <shadow type="math_number">
            <field name="NUM">1</field>
          </shadow>
        </value>
      </block>
      <block type="controls_forEach"></block>
      
    </category>
    <category id="catFunctions" colour="290" custom="PROCEDURE"></category>
  <sep></sep>
  
  <category id="catMath" colour="170">
  	<block type="math_number"></block>
  	<block type="math_constant"></block>
  	<block type="math_arithmetic">
        <value name="A">
          <shadow type="math_number">
            <field name="NUM">1</field>
          </shadow>
        </value>
        <value name="B">
          <shadow type="math_number">
            <field name="NUM">1</field>
          </shadow>
        </value>
      </block>
      
      
      <block type="math_single">
        <value name="NUM">
          <shadow type="math_number">
            <field name="NUM">9</field>
          </shadow>
        </value>
      </block>
      <block type="math_trig">
        <value name="NUM">
          <shadow type="math_number">
            <field name="NUM">45</field>
          </shadow>
        </value>
      </block>
      
     <!-- <block type="math_number_property">
        <value name="NUMBER_TO_CHECK">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
      </block>
      <block type="math_change">
        <value name="DELTA">
          <shadow type="math_number">
            <field name="NUM">1</field>
          </shadow>
        </value>
      </block>-->
      <block type="math_round">
        <value name="NUM">
          <shadow type="math_number">
            <field name="NUM">3.1</field>
          </shadow>
        </value>
      </block>
      <!--<block type="math_on_list"></block>-->
      <block type="math_modulo">
        <value name="DIVIDEND">
          <shadow type="math_number">
            <field name="NUM">64</field>
          </shadow>
        </value>
        <value name="DIVISOR">
          <shadow type="math_number">
            <field name="NUM">10</field>
          </shadow>
        </value>
      </block>
      <!--<block type="math_constrain">
        <value name="VALUE">
          <shadow type="math_number">
            <field name="NUM">50</field>
          </shadow>
        </value>
        <value name="LOW">
          <shadow type="math_number">
            <field name="NUM">1</field>
          </shadow>
        </value>
        <value name="HIGH">
          <shadow type="math_number">
            <field name="NUM">100</field>
          </shadow>
        </value>
      </block>-->
      <!--<block type="math_random_int">
        <value name="FROM">
          <shadow type="math_number">
            <field name="NUM">1</field>
          </shadow>
        </value>
        <value name="TO">
          <shadow type="math_number">
            <field name="NUM">100</field>
          </shadow>
        </value>
      </block>-->
       <block type="p_random">
        <value name="FROM">
          <shadow type="math_number">
            <field name="NUM">1</field>
          </shadow>
        </value>
        <value name="TO">
          <shadow type="math_number">
            <field name="NUM">100</field>
          </shadow>
        </value>
      </block>
      <!--<block type="math_random_float"></block>-->
  </category>
  
  <category id="catLogic" colour="0">
  	  <block type="logic_boolean" colour="0"></block>
  	
  	  <!--<block type="logic_null"></block>-->
  	  <block type="logic_compare" colour="0"></block>
      <block type="logic_operation" colour="0"></block>
      
      <block type="logic_negate"></block>
      
      
      <block type="logic_ternary"></block>
  </category>
  <category id="catText" colour="45">
  		<block type="text"></block>
      <block type="text_join"></block>
      <block type="text_append">
        <value name="TEXT">
          <shadow type="text"></shadow>
        </value>
      </block>
      <block type="text_length">
        <value name="VALUE">
          <shadow type="text">
            <field name="TEXT">abc</field>
          </shadow>
        </value>
      </block>
      <block type="text_isEmpty">
        <value name="VALUE">
          <shadow type="text">
            <field name="TEXT"></field>
          </shadow>
        </value>
      </block>
      <block type="text_indexOf">
        <value name="VALUE">
          <block type="variables_get">
            <field name="VAR">text</field>
          </block>
        </value>
        <value name="FIND">
          <shadow type="text">
            <field name="TEXT">abc</field>
          </shadow>
        </value>
      </block>
      <block type="text_charAt">
        <value name="VALUE">
          <block type="variables_get">
            <field name="VAR">text</field>
          </block>
        </value>
      </block>
      <block type="text_getSubstring">
        <value name="STRING">
          <block type="variables_get">
            <field name="VAR">text</field>
          </block>
        </value>
      </block>
      <block type="text_changeCase">
        <value name="TEXT">
          <shadow type="text">
            <field name="TEXT">abc</field>
          </shadow>
        </value>
      </block>
      <block type="text_trim">
        <value name="TEXT">
          <shadow type="text">
            <field name="TEXT">abc</field>
          </shadow>
        </value>
      </block>
      <block type="text_print">
        <value name="TEXT">
          <shadow type="text">
            <field name="TEXT">abc</field>
          </shadow>
        </value>
      </block>
      <block type="text_prompt_ext">
        <value name="TEXT">
          <shadow type="text">
            <field name="TEXT">abc</field>
          </shadow>
        </value>
      </block>
  </category>
  
  
    
    
   <!-- <category id="catLists" colour="260">
      <block type="lists_create_with">
        <mutation items="0"></mutation>
      </block>
      <block type="lists_create_with"></block>
      <block type="lists_repeat">
        <value name="NUM">
          <shadow type="math_number">
            <field name="NUM">5</field>
          </shadow>
        </value>
      </block>
      <block type="lists_length"></block>
      <block type="lists_isEmpty"></block>
      <block type="lists_indexOf">
        <value name="VALUE">
          <block type="variables_get">
            <field name="VAR">list</field>
          </block>
        </value>
      </block>
      <block type="lists_getIndex">
        <value name="VALUE">
          <block type="variables_get">
            <field name="VAR">list</field>
          </block>
        </value>
      </block>
      <block type="lists_setIndex">
        <value name="LIST">
          <block type="variables_get">
            <field name="VAR">list</field>
          </block>
        </value>
      </block>
      <block type="lists_getSublist">
        <value name="LIST">
          <block type="variables_get">
            <field name="VAR">list</field>
          </block>
        </value>
      </block>
      <block type="lists_split">
        <value name="DELIM">
          <shadow type="text">
            <field name="TEXT">,</field>
          </shadow>
        </value>
      </block>
    </category>
    <category id="catColour" colour="20">
      <block type="colour_picker"></block>
      <block type="colour_random"></block>
      <block type="colour_rgb">
        <value name="RED">
          <shadow type="math_number">
            <field name="NUM">100</field>
          </shadow>
        </value>
        <value name="GREEN">
          <shadow type="math_number">
            <field name="NUM">50</field>
          </shadow>
        </value>
        <value name="BLUE">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
      </block>
      <block type="colour_blend">
        <value name="COLOUR1">
          <shadow type="colour_picker">
            <field name="COLOUR">#ff0000</field>
          </shadow>
        </value>
        <value name="COLOUR2">
          <shadow type="colour_picker">
            <field name="COLOUR">#3333ff</field>
          </shadow>
        </value>
        <value name="RATIO">
          <shadow type="math_number">
            <field name="NUM">0.5</field>
          </shadow>
        </value>
      </block>
    </category>
    <sep></sep>-->
    <category name="Processing" colour="-1">
    	<block type="width"></block>
    	<block type="height"></block>
      <block type="processing">
      	<value name="SETUP">
      		<block type="size">
      			 <value name="width">
      			 	<shadow type="math_number">
      			 		<field name="NUM">400</field>
      			 	</shadow>
      			 </value>
      			 <value name="height">
      			 	<shadow type="math_number">
      			 		<field name="NUM">400</field>
      			 	</shadow>
      			 </value>
      		</block>
        </value>
      </block>
      
      <block type="size">
      			 <value name="width">
      			 	<shadow type="math_number">
      			 		<field name="NUM">400</field>
      			 	</shadow>
      			 </value>
      			 <value name="height">
      			 	<shadow type="math_number">
      			 		<field name="NUM">400</field>
      			 	</shadow>
      			 </value>
      </block>
      <block type="strokeWeight">
      	<value name="weight">
      			<shadow type="math_number">
      			 		<field name="NUM">10</field>
      			</shadow>
      	</value>
      </block>
      <block type="stroke">
      		<value name="r">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
		<value name="g">
          <shadow type="math_number">
            <field name="NUM">255</field>
          </shadow>
        </value>
		<value name="b">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
      </block>
      <block type="background">
		 <value name="r">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
		<value name="g">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
		<value name="b">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
	  </block>
      <block type="fill">
		<value name="r">
          <shadow type="math_number">
            <field name="NUM">255</field>
          </shadow>
        </value>
		<value name="g">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
		<value name="b">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
	  </block>
	  <block type="ps_text"></block>
	  <block type="ps_image_decl"></block>
	  <block type="ps_image"></block>
    </category>
    <category name="Mouse and keyboard" colour="-1">
    	<block type="mouseX"></block>
    	<block type="mouseY"></block>
    	<block type="mousePressed"></block>
    	<block type="key"></block>
    	<block type="keyPressed"></block>
    </category>
    <category name="Figuras" colour="-1">
	  <block type="point">
	  <value name="coord_x">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
		<value name="coord_y">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
	  </block>
      <block type="line">
      <value name="x1">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
		<value name="y1">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
        <value name="x2">
          <shadow type="math_number">
            <field name="NUM">100</field>
          </shadow>
        </value>
        <value name="y2">
          <shadow type="math_number">
            <field name="NUM">100</field>
          </shadow>
        </value>
      </block>
	  <block type="arc">
	  
	  
	  
	  <value name="x">
                          <shadow type="math_number">
                            <field name="NUM">50</field>
                          </shadow>
                        </value>
                        <value name="y">
                          <shadow type="math_number">
                            <field name="NUM">55</field>
                          </shadow>
                        </value>
                        <value name="width">
                          <shadow type="math_number">
                            <field name="NUM">50</field>
                          </shadow>
                        </value>
                        <value name="height">
                          <shadow type="math_number">
                            <field name="NUM">50</field>
                          </shadow>
                        </value>
                        <value name="start">
                          <shadow type="math_number">
                            <field name="NUM">0</field>
                          </shadow>
                        </value>
                        <value name="stop">
                          <shadow type="math_arithmetic">
                            <field name="OP">DIVIDE</field>
                            <value name="A">
                              <shadow type="math_number">
                                <field name="NUM">1</field>
                              </shadow>
                              <shadow type="math_constant">
                                <field name="CONSTANT">PI</field>
                              </shadow>
                            </value>
                            <value name="B">
                              <shadow type="math_number">
                                <field name="NUM">1</field>
                              </shadow>
                              <shadow type="math_number">
                                <field name="NUM">2</field>
                              </shadow>
                            </value>
                          </shadow>
                        </value>
	  
	  
	  
	  </block>
      
      <block type="rect">
      						<value name="coord_x">
                              <shadow type="math_number">
                                <field name="NUM">50</field>
                              </shadow>
                            </value>
                            <value name="coord_y">
                              <shadow type="math_number">
                                <field name="NUM">55</field>
                              </shadow>
                            </value>
                            <value name="radius_x">
                              <shadow type="math_number">
                                <field name="NUM">50</field>
                              </shadow>
                            </value>
                            <value name="radius_y">
                              <shadow type="math_number">
                                <field name="NUM">50</field>
                              </shadow>
                            </value>
      
      </block>
	  <block type="triangle">
	  
	  	<value name="x1">
                              <shadow type="math_number">
                                <field name="NUM">50</field>
                              </shadow>
                            </value>
                            <value name="y1">
                              <shadow type="math_number">
                                <field name="NUM">55</field>
                              </shadow>
                            </value>
                            <value name="x2">
                              <shadow type="math_number">
                                <field name="NUM">50</field>
                              </shadow>
                            </value>
                            <value name="y2">
                              <shadow type="math_number">
                                <field name="NUM">50</field>
                              </shadow>
                            </value>
                            
                            <value name="x3">
                              <shadow type="math_number">
                                <field name="NUM">50</field>
                              </shadow>
                            </value>
                            <value name="y3">
                              <shadow type="math_number">
                                <field name="NUM">50</field>
                              </shadow>
                            </value>
	  </block>
	  <block type="quad">
	  
	  <value name="x1">
                              <shadow type="math_number">
                                <field name="NUM">50</field>
                              </shadow>
                            </value>
                            <value name="y1">
                              <shadow type="math_number">
                                <field name="NUM">55</field>
                              </shadow>
                            </value>
                            <value name="x2">
                              <shadow type="math_number">
                                <field name="NUM">50</field>
                              </shadow>
                            </value>
                            <value name="y2">
                              <shadow type="math_number">
                                <field name="NUM">50</field>
                              </shadow>
                            </value>
                            
                            <value name="x3">
                              <shadow type="math_number">
                                <field name="NUM">50</field>
                              </shadow>
                            </value>
                            <value name="y3">
                              <shadow type="math_number">
                                <field name="NUM">50</field>
                              </shadow>
                            </value>
                            <value name="x4">
                              <shadow type="math_number">
                                <field name="NUM">50</field>
                              </shadow>
                            </value>
                            <value name="y4">
                              <shadow type="math_number">
                                <field name="NUM">50</field>
                              </shadow>
                            </value>
	  </block>
	  <block type="ellipse">
	  
	  <value name="coord_x">
                              <shadow type="math_number">
                                <field name="NUM">50</field>
                              </shadow>
                            </value>
                            <value name="coord_y">
                              <shadow type="math_number">
                                <field name="NUM">55</field>
                              </shadow>
                            </value>
                            <value name="radius_x">
                              <shadow type="math_number">
                                <field name="NUM">50</field>
                              </shadow>
                            </value>
                            <value name="radius_y">
                              <shadow type="math_number">
                                <field name="NUM">50</field>
                              </shadow>
                            </value>
	  </block>
	   
    </category>
    
    <category expanded="true" name="Exemplos">
    	<category name="Rato">
    		<?php include('examples/mouse.inc');?>
    	</category>
      <category name="Rato (Mira)">
      <?php include('examples/mouse_target.inc');?>
      </category>
      
      <category name="Teclado">
      <?php include('examples/keyboard.inc');?>
      </category>
      <category name="Inteiro (contador)">
      <?php include('examples/counter.inc');?>
      </category>
      <category name="Imagem">
    	<?php include('examples/images.inc');?>
    	</category>
    </category>
    <category expanded="true" name="Exercicios">
    	<category name="Linha a rodar">
    	<?php include('examples/following.inc');?>
    	</category>
    	<category name="Luzes">
    	<?php include('examples/luzes.inc');?>
    	</category>
    	<category name="Igni&ccedil;&atilde;o de carro">
    	<?php include('examples/car_start.inc');?>
    	</category>
    	
    </category>
  </xml>


<?php
	
	include("0.inc");

?>
<input type="hidden" id="guid" value="<?php echo stripslashes($_GET['n'])?>">
<input type="hidden" id="passwd" value="">


</body>
<!--<script src="../storage.js"></script>-->
  <!--<script type="text/javascript" src="//bprocessing.eempo.net/devel/js/loader.js"></script>-->
  
 <script type="text/javascript" src="//bprocessing.eempo.net/devel/js/jquery-2.2.0.min.js"></script>
                               
<script type="text/javascript" src="blockly/blockly_compressed.js"></script>
<script type="text/javascript" src="blockly/blocks/logic.js"></script>
<script type="text/javascript" src="blockly/blocks/loops.js"></script>
<script type="text/javascript" src="blockly/blocks/math.js"></script>
<script type="text/javascript" src="blockly/blocks/text.js"></script>
<script type="text/javascript" src="blockly/blocks/lists.js"></script>
<script type="text/javascript" src="blockly/blocks/colour.js"></script>
<script type="text/javascript" src="blockly/blocks/variables.js"></script>
<script type="text/javascript" src="blockly/blocks/procedures.js"></script>
<script type="text/javascript" src="blockly/blocks/processing.js"></script>
<script type="text/javascript" src="blockly/generators/javascript.js"></script>
<script type="text/javascript" src="blockly/generators/javascript/logic.js"></script>
<script type="text/javascript" src="blockly/generators/javascript/loops.js"></script>
<script type="text/javascript" src="blockly/generators/javascript/math.js"></script>
<script type="text/javascript" src="blockly/generators/javascript/text.js"></script>
<script type="text/javascript" src="blockly/generators/javascript/lists.js"></script>
<script type="text/javascript" src="blockly/generators/javascript/colour.js"></script>
<script type="text/javascript" src="blockly/generators/javascript/variables.js"></script>
<script type="text/javascript" src="blockly/generators/javascript/procedures.js"></script>
<script type="text/javascript" src="blockly/generators/javascript/processing.js"></script>
<script type="text/javascript" src="js/processing.min.js"></script>
<script type="text/javascript" src="js/processing-helper.js"></script>
<script type="text/javascript" src="js/jquery-ui.min.js"></script>
<script type="text/javascript" src="code.js"></script>                                           
                                                              
  
  
  
  <!-- <script src="blockly/blocks_compressed.js"></script> -->
  <!--<script src="blockly/blockly_compressed.js"></script>
  
  <script src="blockly/blocks/logic.js"></script>
<script src="blockly/blocks/loops.js"></script>
<script src="blockly/blocks/math.js"></script>
<script src="blockly/blocks/text.js"></script>
<script src="blockly/blocks/lists.js"></script>
<script src="blockly/blocks/colour.js"></script>
<script src="blockly/blocks/variables.js"></script>
<script src="blockly/blocks/procedures.js"></script>
<script src="blockly/blocks/processing.js"></script>-->
  
  <!--<script src="blockly/javascript_compressed.js"></script>-->
  <!--
<script src="blockly/generators/javascript.js"></script>
<script src="blockly/generators/javascript/logic.js"></script>
<script src="blockly/generators/javascript/loops.js"></script>
<script src="blockly/generators/javascript/math.js"></script>
<script src="blockly/generators/javascript/text.js"></script>
<script src="blockly/generators/javascript/lists.js"></script>
<script src="blockly/generators/javascript/colour.js"></script>
<script src="blockly/generators/javascript/variables.js"></script>
<script src="blockly/generators/javascript/procedures.js"></script>
<script src="blockly/generators/javascript/processing.js"></script>
-->
  <!--<script src="blockly/python_compressed.js"></script>
  <script src="blockly/php_compressed.js"></script>
  <script src="blockly/dart_compressed.js"></script>-->
  <!--
  <script src="js/processing.min.js"></script>
  <script src="js/processing-helper.js"></script>
  <script src="js/jquery-2.2.0.min.js"></script>
  <script src="js/jquery-ui.min.js"></script>
  
  <script src="code.js"></script>-->
<!--<script src="js/analytics.js"></script>-->
</html>
