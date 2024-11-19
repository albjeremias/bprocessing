/**
 * Blockly Demos: Code
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview JavaScript for Blockly's Code demo.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';
/**
 * Create a namespace for the application.
 */
var Code = {};
/**
 * Lookup for names of supported languages.  Keys should be in ISO 639 format.
 */
Code.LANGUAGE_NAME = {
  'ar': 'العربية',
  'be-tarask': 'Taraškievica',
  'br': 'Brezhoneg',
  'ca': 'Català',
  'cs': 'Česky',
  'da': 'Dansk',
  'de': 'Deutsch',
  'el': 'Ελληνικά',
  'en': 'English',
  'es': 'Español',
  'fa': 'فارسی',
  'fr': 'Français',
  'he': 'עברית',
  'hrx': 'Hunsrik',
  'hu': 'Magyar',
  'ia': 'Interlingua',
  'is': 'Íslenska',
  'it': 'Italiano',
  'ja': '日本語',
  'ko': '한국어',
  'mk': 'Македонски',
  'ms': 'Bahasa Melayu',
  'nb': 'Norsk Bokmål',
  'nl': 'Nederlands, Vlaams',
  'oc': 'Lenga d\'òc',
  'pl': 'Polski',
  'pms': 'Piemontèis',
  'pt-br': 'Português Brasileiro',
  'ro': 'Română',
  'ru': 'Русский',
  'sc': 'Sardu',
  'sk': 'Slovenčina',
  'sr': 'Српски',
  'sv': 'Svenska',
  'ta': 'தமிழ்',
  'th': 'ภาษาไทย',
  'tlh': 'tlhIngan Hol',
  'tr': 'Türkçe',
  'uk': 'Українська',
  'vi': 'Tiếng Việt',
  'zh-hans': '簡體中文',
  'zh-hant': '正體中文'
};

/**
 * List of RTL languages.
 */
Code.LANGUAGE_RTL = ['ar', 'fa', 'he', 'lki'];

/**
 * Blockly's main workspace.
 * @type {Blockly.WorkspaceSvg}
 */
Code.workspace = null;

/**
 * Extracts a parameter from the URL.
 * If the parameter is absent default_value is returned.
 * @param {string} name The name of the parameter.
 * @param {string} defaultValue Value to return if paramater not found.
 * @return {string} The parameter value or the default value if not found.
 */
Code.getStringParamFromUrl = function(name, defaultValue) {
  var val = location.search.match(new RegExp('[?&]' + name + '=([^&]+)'));
  return val ? decodeURIComponent(val[1].replace(/\+/g, '%20')) : defaultValue;
};

/**
 * Get the language of this user from the URL.
 * @return {string} User's language.
 */
Code.getLang = function() {
  var lang = Code.getStringParamFromUrl('lang', '');
  if (Code.LANGUAGE_NAME[lang] === undefined) {
    // Default to English.
    lang = 'pt-br';
  }
  return lang;
};

/**
 * Is the current language (Code.LANG) an RTL language?
 * @return {boolean} True if RTL, false if LTR.
 */
Code.isRtl = function() {
  return Code.LANGUAGE_RTL.indexOf(Code.LANG) != -1;
};

/**
 * Load blocks saved on App Engine Storage or in session/local storage.
 * @param {string} defaultXml Text representation of default blocks.
 */
Code.loadBlocks = function(defaultXml) {
  try {
    var loadOnce = window.sessionStorage.loadOnceBlocks;
  } catch(e) {
    // Firefox sometimes throws a SecurityError when accessing sessionStorage.
    // Restarting Firefox fixes this, so it looks like a bug.
    var loadOnce = null;
  }
  if ('BlocklyStorage' in window && window.location.hash.length > 1) {
    // An href with #key trigers an AJAX call to retrieve saved blocks.
    BlocklyStorage.retrieveXml(window.location.hash.substring(1));
  } else if (loadOnce) {
    // Language switching stores the blocks during the reload.
    delete window.sessionStorage.loadOnceBlocks;
    var xml = Blockly.Xml.textToDom(loadOnce);
    Blockly.Xml.domToWorkspace(Code.workspace, xml);
  } else if (defaultXml) {
    // Load the editor with default starting blocks.
    var xml = Blockly.Xml.textToDom(defaultXml);
    Blockly.Xml.domToWorkspace(Code.workspace, xml);
  } else if ('BlocklyStorage' in window) {
    // Restore saved blocks in a separate thread so that subsequent
    // initialization is not affected from a failed load.
    window.setTimeout(BlocklyStorage.restoreBlocks, 0);
  }
};

/**
 * Save the blocks and reload with a different language.
 */
Code.changeLanguage = function() {
  // Store the blocks for the duration of the reload.
  // This should be skipped for the index page, which has no blocks and does
  // not load Blockly.
  // MSIE 11 does not support sessionStorage on file:// URLs.
  if (typeof Blockly != 'undefined' && window.sessionStorage) {
    var xml = Blockly.Xml.workspaceToDom(Code.workspace);
    var text = Blockly.Xml.domToText(xml);
    window.sessionStorage.loadOnceBlocks = text;
  }

  var languageMenu = document.getElementById('languageMenu');
  var newLang = encodeURIComponent(
      languageMenu.options[languageMenu.selectedIndex].value);
  var search = window.location.search;
  if (search.length <= 1) {
    search = '?lang=' + newLang;
  } else if (search.match(/[?&]lang=[^&]*/)) {
    search = search.replace(/([?&]lang=)[^&]*/, '$1' + newLang);
  } else {
    search = search.replace(/\?/, '?lang=' + newLang + '&');
  }

  window.location = window.location.protocol + '//' +
      window.location.host + window.location.pathname + search;
};

/**
 * Bind a function to a button's click event.
 * On touch enabled browsers, ontouchend is treated as equivalent to onclick.
 * @param {!Element|string} el Button element or ID thereof.
 * @param {!Function} func Event handler to bind.
 */
 Code.bindClick = function(nameel, func) {
 	 var el;
 	 if (typeof nameel == 'string') {
 	 	 el = document.getElementById(nameel);
 	 }
 	 if (el == null) {
 	 	 console.log("#"+nameel+" not found");
 	 	 return;
 	 }
 	 el.addEventListener('click', func, true);
 	 el.addEventListener('touchend', func, true);
 };

/**
 * Load the Prettify CSS and JavaScript.
 */
Code.importPrettify = function() {
  //<link rel="stylesheet" href="../prettify.css">
  //<script src="../prettify.js"></script>
  var link = document.createElement('link');
  link.setAttribute('rel', 'stylesheet');
  link.setAttribute('href', 'blockly/prettify.css');
  document.head.appendChild(link);
  var script = document.createElement('script');
  script.setAttribute('src', 'blockly/prettify.js');
  document.head.appendChild(script);
};

/**
 * Compute the absolute coordinates and dimensions of an HTML element.
 * @param {!Element} element Element to match.
 * @return {!Object} Contains height, width, x, and y properties.
 * @private
 */
Code.getBBox_ = function(element) {
  var height = element.offsetHeight;
  var width = element.offsetWidth;
  var x = 0;
  var y = 0;
  do {
    x += element.offsetLeft;
    y += element.offsetTop;
    element = element.offsetParent;
  } while (element);
  return {
    height: height,
    width: width,
    x: x,
    y: y
  };
};

/**
 * User's language (e.g. "en").
 * @type {string}
 */
Code.LANG = Code.getLang();

/**
 * List of tab names.
 * @private
 */
// Code.TABS_ = ['blocks', 'javascript', 'php', 'python', 'dart', 'xml'];
Code.TABS_ = ['blocks', 'javascript','xml'];
Code.selected = 'blocks';

/**
 * Switch the visible pane when a tab is clicked.
 * @param {string} clickedName Name of tab clicked.
 */
Code.tabClick = function(clickedName) {
  // If the XML tab was open, save and render the content.
  if (clickedName == 'xml'){ 
  	  //  document.getElementById('tab_xml').className == 'tabon')) {
    // var xmlTextarea = document.getElementById('content_xml');
    // var xmlText = xmlTextarea.value;
    // var xmlDom = Blockly.Xml.workspaceToDom(Code.workspace);
    // var xmlText = Blockly.Xml.domToPrettyText(xmlDom);
    var xmlDom = null;
    
    try {
      // xmlDom = Blockly.Xml.textToDom(xmlText);
    } catch (e) {
      var q =
          window.confirm(MSG['badXml'].replace('%1', e));
      if (!q) {
        // Leave the user on the XML tab.
        return;
      }
    }
    if (xmlDom) {
      Code.workspace.clear();
      Blockly.Xml.domToWorkspace(Code.workspace, xmlDom);
    }
    Code.workspace.setVisible(false);
    // return;
  }

  if (document.getElementById('tab_blocks').className == 'tabon') {
    Code.workspace.setVisible(false);
  }
  // Deselect all tabs and hide all panes.
  for (var i = 0; i < Code.TABS_.length; i++) {
    var name = Code.TABS_[i];
    if(document.getElementById('tab_' + name) != null){
    	document.getElementById('tab_' + name).className = 'taboff';
    }
    document.getElementById('content_' + name).style.visibility = 'hidden';
  }

  // Select the active tab.
  Code.selected = clickedName;
  if(document.getElementById('tab_' + clickedName) != null){
  	  document.getElementById('tab_' + clickedName).className = 'tabon';
  }
  // Show the selected pane.
  document.getElementById('content_' + clickedName).style.visibility =
      'visible';
  Code.renderContent();
  if (clickedName == 'blocks') {
    Code.workspace.setVisible(true);
  }
  Blockly.fireUiEvent(window, 'resize');
  
  Code.generateXML();
  // Code.workspace.setVisible(false);
};

Code.generateXML = function(){
	 var xmlTextarea = document.getElementById('content_xml');
  var xmlText = xmlTextarea.value;
  var xmlDom = null;
  
  try {
  	  xmlDom = Blockly.Xml.textToDom(xmlText);
  } catch (e) {
  	  // var q =
  	  // window.confirm(MSG['badXml'].replace('%1', e));
	  console.log(MSG['badXml'].replace('%1', e));
  	  // if (!q) {
  	  	  // Leave the user on the XML tab.
  	  	  // return;
  	  // }
  }
  if (xmlDom) {
  	  Code.workspace.clear();
  	  Blockly.Xml.domToWorkspace(Code.workspace, xmlDom);
  }
}

/**
 * Populate the currently selected pane with content generated from the blocks.
 */
Code.renderContent = function() {
  var content = document.getElementById('content_' + Code.selected);
  // Initialize the pane.
  if (content.id == 'content_xml') {
    var xmlTextarea = document.getElementById('content_xml');
    var xmlDom = Blockly.Xml.workspaceToDom(Code.workspace);
    var xmlText = Blockly.Xml.domToPrettyText(xmlDom);
    xmlTextarea.value = xmlText;
    xmlTextarea.focus();
  } else if (content.id == 'content_javascript') {
    var code = Blockly.JavaScript.workspaceToCode(Code.workspace);
    $("#code").html(code);
    runSketch(code);
    content.textContent = code;
    if (typeof prettyPrintOne == 'function') {
      code = content.innerHTML;
      code = prettyPrintOne(code, 'js');
      content.innerHTML = code;
    }
  } else if (content.id == 'content_python') {
    code = Blockly.Python.workspaceToCode(Code.workspace);
    content.textContent = code;
    if (typeof prettyPrintOne == 'function') {
      code = content.innerHTML;
      code = prettyPrintOne(code, 'py');
      content.innerHTML = code;
    }
  } else if (content.id == 'content_php') {
    code = Blockly.PHP.workspaceToCode(Code.workspace);
    content.textContent = code;
    if (typeof prettyPrintOne == 'function') {
      code = content.innerHTML;
      code = prettyPrintOne(code, 'php');
      content.innerHTML = code;
    }
  } else if (content.id == 'content_dart') {
    code = Blockly.Dart.workspaceToCode(Code.workspace);
    content.textContent = code;
    if (typeof prettyPrintOne == 'function') {
      code = content.innerHTML;
      code = prettyPrintOne(code, 'dart');
      content.innerHTML = code;
    }
  }
  
  
};
Code.cleanup = function(){
	Code.discard();
	localStorage.setItem("source_code","");
	localStorage.setItem("code_stack","");
	localStorage.setItem("code_redo_stack","");
	Code.workspace = Blockly.inject('content_blocks',
      {grid:
          {spacing: 25,
           length: 3,
           colour: '#ccc',
           snap: true},
       media: 'blockly/media/',
       rtl: rtl,
       toolbox: toolbox,
       zoom:
           {controls: true,
            wheel: true}
      });
	Code.renderContent();
}
/**
 * Initialize Blockly.  Called on page load.
 */
Code.init = function() {
	
  Code.initLanguage();
  var code ; 
  var rtl = Code.isRtl();
  var container = document.getElementById('content_area');
  var onresize = function(e) {
    var bBox = Code.getBBox_(container);
    for (var i = 0; i < Code.TABS_.length; i++) {
      var el = document.getElementById('content_' + Code.TABS_[i]);
      el.style.top = bBox.y + 'px';
      el.style.left = bBox.x + 'px';
      // Height and width need to be set, read back, then set again to
      // compensate for scrollbars.
      el.style.height = bBox.height + 'px';
      el.style.height = (2 * bBox.height - el.offsetHeight) + 'px';
      el.style.width = bBox.width + 'px';
      el.style.width = (2 * bBox.width - el.offsetWidth) + 'px';
    }
    // Make the 'Blocks' tab line up with the toolbox.
    if (Code.workspace && Code.workspace.toolbox_.width) {
      document.getElementById('tab_blocks').style.minWidth =
          (Code.workspace.toolbox_.width - 38) + 'px';
          // Account for the 19 pixel margin and on each side.
    }
  };
  onresize();
  window.addEventListener('resize', onresize, false);

  var toolbox = document.getElementById('toolbox');
  Code.workspace = Blockly.inject('content_blocks',
      {grid:
          {spacing: 25,
           length: 3,
           colour: '#ccc',
           snap: true},
       media: 'blockly/media/',
       rtl: rtl,
       toolbox: toolbox,
       zoom:
           {controls: true,
            wheel: true}
      });

  // Add to reserved word list: Local variables in execution environment (runJS)
  // and the infinite loop detection function.
  Blockly.JavaScript.addReservedWords('code,timeouts,checkTimeout');

  Code.loadBlocks('');
   Code.generateXML();
  if ('BlocklyStorage' in window) {
    // Hook a save function onto unload.
    BlocklyStorage.backupOnUnload(Code.workspace);
  }

  Code.tabClick(Code.selected);

  // Code.bindClick('trashButton',function() {Code.discard(); Code.renderContent();});
  Code.bindClick('runButton', Code.runProcessing);
  Code.bindClick('stopButton', Code.stopProcessing);
  Code.bindClick('fullscreenButton', Code.fullScreen);
  Code.bindClick('showXML',function(){Code.tabClick("xml");});
  Code.bindClick('showCode',function(){Code.tabClick("javascript");});
  Code.bindClick('undoButton', Code.undo);
  Code.bindClick('redoButton', Code.redo);
  Code.bindClick('trashButton', Code.cleanup);
  Code.bindClick('saveButton', Code.save);
  
  Code.bindClick('lockButton', Code.lock);
  Code.bindClick('unlockButton', Code.unlock);
  
  // Disable the link button if page isn't backed by App Engine storage.
  var linkButton = document.getElementById('linkButton');
  if ('BlocklyStorage' in window) {
    BlocklyStorage['HTTPREQUEST_ERROR'] = MSG['httpRequestError'];
    BlocklyStorage['LINK_ALERT'] = MSG['linkAlert'];
    BlocklyStorage['HASH_ERROR'] = MSG['hashError'];
    BlocklyStorage['XML_ERROR'] = MSG['xmlError'];
    Code.bindClick(linkButton,
        function() {BlocklyStorage.link(Code.workspace);});
  } else if (linkButton) {
    linkButton.className = 'disabled';
  }

  for (var i = 0; i < Code.TABS_.length; i++) {
    var name = Code.TABS_[i];
    Code.bindClick('tab_' + name,
        function(name_) {return function() {Code.tabClick(name_);};}(name));
  }

  
  // Code.workspace.addChangeListener(Code.store);
  // Code.workspace.addChangeListener(Code.runJS);
  
  // Blockly.Xml.domToWorkspace(Code.workspace,document.getElementById('startBlocks'));
  var jqxhr = $.get( "processing.php",
  	  {guid : $("#guid").val(), action : 'get'})
  	  .done(function(data){
  		  if(data.length < 1){
  		  	  
  		  	  Code.loadStorage();
  		  	  return;
  		  }
  		  code = data;
  		  
  		  try{
  		  	  Code.loadCode(code);
  		  }catch(err){
  		  	  console.log('faileddd..');
  		  	  Code.loadStorage();
  		  }
  	  }).fail(function() {
  	  	  Code.loadStorage();
  	  });
                                              
  	  var jqxhr = $.get( "processing.php",
  	  	  {guid : $("#guid").val(), action : 'locked'})
  	  .done(function(data){
  	  		  if(data=="TRUE"){
  	  		  	  $("#saveButton").hide();
  	  		  	  $("#lockButton").hide();
  	  		  	  $("#unlockButton").show();
  	  		  	  $("#passwd").val("");
  	  		  }
  	  		  if(data=="FALSE"){
  	  		  	 $("#saveButton").show();
 	 		 	 $("#lockButton").show();
 	 		 	 $("#unlockButton").hide();
 	 		 	 $("#passwd").val();
  	  		  }
  	  }).fail(function() {
  	  	  Code.loadStorage();
  	  });
  
  // Code.loadStorage();
  // Lazy-load the syntax-highlighting.
  Code.stopProcessing();
  window.setTimeout(Code.importPrettify, 1);
};

Code.loadCode = function(XMLcode){
	console.log("Loading code...");
	console.log(code);
	try{
		  Code.workspace.clear();
  	  	  // Code.loadBlocks(last_code);
  	  	  // XMLcode = XMLcode.replace('<xml xmlns="http://www.w3.org/1999/xhtml">','');
  	  	  // XMLcode = XMLcode.replace('</xml>','');
  	  	  var xml = Blockly.Xml.textToDom(XMLcode);
  	  	  Blockly.Xml.domToWorkspace(Code.workspace, xml);
  	  	  // Blockly.Xml.domToWorkspace(Code.workspace,);
  	  	  // console.log('ok...');
  	  	  localStorage.setItem("source_code","");
  	  	  // console.log('superok...');
  	  }catch(err){
  	  	  console.log(err);
  	  	  // console.log('fail...');
  	  	  Blockly.Xml.domToWorkspace(Code.workspace,document.getElementById('startBlocks'));
  	  	  throw "failed to load...!";
  	  }
}
Code.loadStorage = function(){
	// return;
	console.log('loading storage...');
	if (typeof(Storage) !== "undefined"){
  	  var source_code_raw = localStorage.getItem("source_code");
  	  // var source_code = JSON.parse(source_code_raw);
  	  // var last_code = source_code.pop();
  	  var last_code = source_code_raw;
  	  // console.log('--------');
  	  console.log(last_code);
  	  // console.log('--------');
  	  
  	  
  	  Code.loadCode(last_code);
  }
}
/**
 * Initialize the page language.
 */
Code.initLanguage = function() {
  // Set the HTML's language and direction.
  var rtl = Code.isRtl();
  document.dir = rtl ? 'rtl' : 'ltr';
  document.head.parentElement.setAttribute('lang', Code.LANG);

  // Sort languages alphabetically.
  var languages = [];
  for (var lang in Code.LANGUAGE_NAME) {
    languages.push([Code.LANGUAGE_NAME[lang], lang]);
  }
  var comp = function(a, b) {
    // Sort based on first argument ('English', 'Русский', '简体字', etc).
    if (a[0] > b[0]) return 1;
    if (a[0] < b[0]) return -1;
    return 0;
  };
  languages.sort(comp);
  // Populate the language selection menu.
  var languageMenu = document.getElementById('languageMenu');
  languageMenu.options.length = 0;
  for (var i = 0; i < languages.length; i++) {
    var tuple = languages[i];
    var lang = tuple[tuple.length - 1];
    var option = new Option(tuple[0], lang);
    if (lang == Code.LANG) {
      option.selected = true;
    }
    languageMenu.options.add(option);
  }
  languageMenu.addEventListener('change', Code.changeLanguage, true);

  // Inject language strings.
  document.title += ' ' + MSG['title'];
  document.getElementById('title').textContent = MSG['title'];
  document.getElementById('tab_blocks').textContent = MSG['blocks'];

  // document.getElementById('linkButton').title = MSG['linkTooltip'];
  // document.getElementById('runButton').title = MSG['runTooltip'];
  // document.getElementById('trashButton').title = MSG['trashTooltip'];

  var categories = ['catLoops', 
                     'catVariables', 'catFunctions',
                    'catCond', 'catArit',
                    'catText', 'catLogic','catMath'];
  for (var i = 0, cat; cat = categories[i]; i++) {
  	  
  	  	  var element =  document.getElementById(cat);
  	  	  if (typeof(element) != 'undefined' && element != null)
  	  	  {
  	  	  	  element.setAttribute('name', MSG[cat]);
  	  	  }
  	  	  // element.setAttribute('name', undefined);

  	  	  
  	 
  }
  var textVars = document.getElementsByClassName('textVar');
  for (var i = 0, textVar; textVar = textVars[i]; i++) {
    textVar.textContent = MSG['textVariable'];
  }
  var listVars = document.getElementsByClassName('listVar');
  for (var i = 0, listVar; listVar = listVars[i]; i++) {
    listVar.textContent = MSG['listVariable'];
  }
};

/**
 * Execute the user's code.
 * Just a quick and dirty eval.  Catch infinite loops.
 */
 Code.runProcessing = function() {
 	 console.log('runProcessing()');
 	 $("#processing_iframe").show();
 	 showSketch();
 	 Code.runJS();
 }
 Code.runJS = function() {
 	 /*Blockly.JavaScript.INFINITE_LOOP_TRAP = '  checkTimeout();\n';
 	 var timeouts = 0;
 	 var checkTimeout = function() {
 	 if (timeouts++ > 1000000) {
 	 throw MSG['timeout'];
 	 }
 	 };*/
 	 console.log('runJs()');
 	 var code = Blockly.JavaScript.workspaceToCode(Code.workspace);
 	 Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
 	 // try {
 	 	 
 	 	 var code = Blockly.JavaScript.workspaceToCode(Code.workspace);
 	 	 $("#code").html(code);
 	 	 runSketch(code);
 	 // } catch (e) {
 	 	 //alert(MSG['badCode'].replace('%1', e));
 	 // }
 	 // $("#runButton").hide();
 	 // $("#stopButton").show();
 };

 Code.undo = function(){
 	
 	 if (typeof(Storage) !== "undefined" && Code.workspace !== null && typeof(Blockly.JavaScript) !== "undefined") {
 	 	 
 	 	 var code_stack = JSON.parse(localStorage.getItem("code_stack"));
 	 	 
 	 	 var code_redo_stack;
 	 	 try{
 	 	 	 code_redo_stack = JSON.parse(localStorage.getItem("code_redo_stack"));
 	 	 }catch(err){
 	 	 	 code_redo_stack = Array();
 	 	 }
 	 	 
 	 	 if(code_redo_stack == null){
 	 	 	 code_redo_stack = Array();
 	 	 }
 	 	 var last_code = code_stack.pop();
 	 	 code_redo_stack.push(last_code);
 	 	 
 	 	 Code.workspace.clear();
 	 	 
 	 	 var xml = Blockly.Xml.textToDom(last_code);
 	 	 Blockly.Xml.domToWorkspace(Code.workspace, xml);
 	 	 
 	 	 localStorage.setItem("code_stack",JSON.stringify(code_stack));
 	 	 localStorage.setItem("code_redo_stack",JSON.stringify(code_redo_stack));
 	 }
 }

 Code.redo = function(){
 	
 	 if (typeof(Storage) !== "undefined" && Code.workspace !== null && typeof(Blockly.JavaScript) !== "undefined") {
 	 	 
 	 	 var code_stack = JSON.parse(localStorage.getItem("code_stack"));
 	 	 
 	 	 var code_redo_stack;
 	 	 try{
 	 	 	 code_redo_stack = JSON.parse(localStorage.getItem("code_redo_stack"));
 	 	 }catch(err){
 	 	 	 code_redo_stack = Array();
 	 	 }
 	 	 
 	 	 
 	 	 var last_code = code_redo_stack.pop();
 	 	 code_stack.push(last_code);
 	 	 
 	 	 Code.workspace.clear();
 	 	 
 	 	 var xml = Blockly.Xml.textToDom(last_code);
 	 	 Blockly.Xml.domToWorkspace(Code.workspace, xml);
 	 	 
 	 	 localStorage.setItem("code_stack",JSON.stringify(code_stack));
 	 	 localStorage.setItem("code_redo_stack",JSON.stringify(code_redo_stack));
 	 }
 }
/**
 * Discard all blocks from the workspace.
 */
 Code.discard = function() {
 	 // if(confirm("Are you sure you want to delete this?")){
 	 	 var count = Code.workspace.getAllBlocks().length;
 	 	 if (count < 2 ||
 	 	 	 window.confirm(Blockly.Msg.DELETE_ALL_BLOCKS.replace('%1', count))) {
 	 	 Code.workspace.clear();
 	 	 if (window.location.hash) {
 	 	 	 window.location.hash = '';
 	 	 }
 	 	 	 }
 	 // }
 	 // else{
 	 // 	 return false;
 	 // }
 }

 /** STORAGE **/
 Code.store = function() {
 	 // console.log('yoo');
 	 if (typeof(Storage) !== "undefined" && Code.workspace !== null && typeof(Blockly.JavaScript) !== "undefined") {
 	 	 // Store
 	 	 // var code = Blockly.Xml.workspaceToDom(Code.workspace);
 	 	 var xmlDom = Blockly.Xml.workspaceToDom(Code.workspace);
 	 	 var xmlText = Blockly.Xml.domToPrettyText(xmlDom);
 	 	 
 	 	 var code = xmlText;
 	 	 
 	 	 if(code.length == 0){
 	 	 	 return;
 	 	 }
 	 	 
 	 	 var last_code = localStorage.getItem("source_code");
 	 	 if(last_code == code)
 	 	 {
 	 	 	 return;
 	 	 }
 	 	 localStorage.setItem("source_code",code);
 	 	 var code_stack;
 	 	 try{
 	 	 	 code_stack = JSON.parse(localStorage.getItem("code_stack"));
 	 	 }catch(err){
 	 	 	 // code_stack = Array();
 	 	 }
 	 	 
 	 	 if(!(code_stack instanceof Array)){
 	 	 	 code_stack = Array();
 	 	 }
 	 	 code_stack.push(code);
 	 	 localStorage.setItem("code_stack",JSON.stringify(code_stack));
 	 	
 	 }
 }
 
 Code.stopProcessing = function(){
 	 // console.log('LOL');
 	 $("#processing_iframe").hide();
 	 // $("#runButton").show();
 	 // $("#stopButton").hide();
 	 stopSketch();
 }
 
 Code.save = function(){
 	 // $.post( "processing.php", { 'id': $("#sketch_id").val(), 'code': Code.workspace } );
 	 // console.log('buuu');
 	 // var code_serialized = Code.workspace;
 	 // var code_serialized = JSON.stringify(Code.workspace);
 	 // var xmlTextarea = $("#content_xml").val();
 	  console.log('saving code...');
 	 $("#saveButton span").html('Saving...');
 	  var xmlDom = Blockly.Xml.workspaceToDom(Code.workspace);
 	  var xmlText = Blockly.Xml.domToPrettyText(xmlDom);
 	  
 	 // console.log(xmlTextarea);
 	 xmlText = encodeURIComponent(xmlText);
 	 // console.log('fuuu');
 	 // console.log(xmlTextarea);
 	 if(xmlText.length < 1){
 	 	 console.log('YUPPPP');
 	 	 return;
 	 }
 	 $.post( "processing.php", { guid: $("#guid").val(), code: xmlText,passwd: $("#passwd").val() } ).done(function(data){
 	 		 if(data == "OK"){
 	 		 	 $("#saveButton span").html(data);
 	 		 }else{
 	 		 	 $("#saveButton span").html(data);
 	 		 }
 	 });
 }
 
 Code.fullScreen = function(){
 	 var canvas = document.getElementById("sketch");
 	 if(canvas.requestFullScreen)
 	 	 canvas.requestFullScreen();
 	 else if(canvas.webkitRequestFullScreen)
 	 	 canvas.webkitRequestFullScreen();
 	 else if(canvas.mozRequestFullScreen)
 	 	 canvas.mozRequestFullScreen();
 }
 
 Code.lock = function(){
 	 var key = prompt('Key to lock','****');
 	 console.log("chv: "+key);
 	 $.post( "processing.php", { guid: $("#guid").val(), action: 'lock', key: key } ).done(function(data){
 	 		 // $("#saveButton span").html('Unlocked');
 	 		 console.log(data);
 	 		 if(data == "OK"){
 	 		 	 $("#saveButton").hide();
 	 		 	 $("#lockButton").hide();
 	 		 	 $("#unlockButton").show();
 	 		 	 $("#passwd").val("");
 	 		 }
 	 });
 }
 Code.unlock = function(){
 	 var key = prompt('Key to unlock','****');
 	 
 	 $.post( "processing.php", { guid: $("#guid").val(), action: 'unlock', key: key } ).done(function(data){
 	 		 console.log(data);
 	 		 if(data == "OK"){
 	 		 	 $("#saveButton").show();
 	 		 	 $("#lockButton").show();
 	 		 	 $("#unlockButton").hide();
 	 		 	 $("#passwd").val(key);
 	 		 }else{
 	 		 	 $("#unlockButton span").html(data);
 	 		 }
 	 });
 }
 // Code.xmlUpdate = function(){
 // 	 var xmlTextarea = document.getElementById('content_xml');
 // 	 var xmlText = xmlTextarea.value;
 // 	 // var xmlDom = Blockly.Xml.workspaceToDom(Code.workspace);
 // 	 // var xmlText = Blockly.Xml.domToPrettyText(xmlDom);
 // 	 var xmlDom = null;
 	 
 // 	 try {
 // 	 	 xmlDom = Blockly.Xml.textToDom(xmlText);
 // 	 } catch (e) {
 // 	 	 var q =
 // 	 	 window.confirm(MSG['badXml'].replace('%1', e));
 // 	 	 if (!q) {
 // 	 	 	 // Leave the user on the XML tab.
 // 	 	 	 return;
 // 	 	 }
 // 	 }
 // 	 if (xmlDom) {
 // 	 	 Code.workspace.clear();
 // 	 	 Blockly.Xml.domToWorkspace(Code.workspace, xmlDom);
 // 	 }
 // 	 Code.workspace.setVisible(false);
 // }
// Load the Code demo's language strings.
document.write('<script src="msg/' + Code.LANG + '.js"></script>\n');
// // Load Blockly's language strings.
document.write('<script src="msg/js/' + Code.LANG + '.js"></script>\n');


Code.startBlockly = () => {	

    console.log('loading blockly...')
    Code.init()
		var title_translated = MSG[$("#exercise_name").val()];
		
		if (typeof(title_translated) != 'undefined' && title_translated != null){
			// title_translated = MSG[$("#exercise_name").val()];
		}else{
			title_translated = $("#exercise_name").attr("alt");
		}
		document.title = title_translated;
		$("#exercise_title").html(title_translated);
		// $( ".draggable" ).draggable();
		
		$(function() {
				$( ".draggable" ).draggable({ handle: ".dragger" });
				// $( "#draggable2" ).draggable({ cancel: "p.ui-widget-header" });
				// $( "div, p" ).disableSelection();
		});
		
  }


// $(document).ready(function(){
//   Code.startBlockly()
		// window.addEventListener('load', Code.init);

// });