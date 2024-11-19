//setup array of scripts and an index to keep track of where we are in the process
var scripts = [
'blockly/blockly_compressed.js',
'blockly/blocks/logic.js',
'blockly/blocks/loops.js',
'blockly/blocks/math.js',
'blockly/blocks/text.js',
'blockly/blocks/lists.js',
'blockly/blocks/colour.js',
'blockly/blocks/variables.js',
'blockly/blocks/procedures.js',
'blockly/blocks/processing.js',
'blockly/generators/javascript.js',
'blockly/generators/javascript/logic.js',
'blockly/generators/javascript/loops.js',
'blockly/generators/javascript/math.js',
'blockly/generators/javascript/text.js',
'blockly/generators/javascript/lists.js',
'blockly/generators/javascript/colour.js',
'blockly/generators/javascript/variables.js',
'blockly/generators/javascript/procedures.js',
'blockly/generators/javascript/processing.js',
'../js/processing.min.js',
'../js/processing-helper.js',
//'jquery-2.2.0.min.js',
'../js/jquery-ui.min.js',

'../code.js',

];
    
    


$(document).ready(function(){
		console.log("loading scripts...");
		// load_next_script();
		// LoadScript(0);
		// for(var index=0;index<scripts.length;index++) {
		
		// 	//get the script at the current index
		
		// }
		
		
		responses = {};
		
		//create function that evaluates each response in order
		function eval_scripts() {
			for (var i = 0, len = scripts.length; i < len; i++) {
				eval(responses[scripts[i]]);
			}
		}
		
		$.each(scripts, function (index, value) {
				var scriptname = scripts[index];
				$.getScript(scriptname)
				.done(function( scriptname, textStatus ) {
						console.log('Loaded script '+ scriptname);
						// LoadScript(index+1);
				})
				.fail(function( jqxhr, settings, exception ) {
						// $( "div.log" ).text( "Triggered ajaxError handler." );
						console.log('error loading libraries...: '+scriptname);
				});
				// $.ajax({
				// 		url      : scripts[index],
						
				// 		//force the dataType to be `text` rather than `script`
				// 		dataType : 'text',
				// 		success  : function (textScript) {
							
				// 			//add the response to the `responses` object
				// 			responses[value] = textScript;
							
				// 			//check if the `responses` object has the same length as the `scripts` array,
				// 			//if so then evaluate the scripts
				// 			if (responses.length === scripts.length) { eval_scripts(); }
				// 		},
				// 		error    : function (jqXHR, textStatus, errorThrown) { /*don't forget to handle errors*/ }
				// });
		});
});
//setup a function that loads a single script
/*function LoadScript(index){
	console.log("Loadingscrippppttt...");
    if(index >= scripts.length)
        return;
    
    var scriptname = "//bprocessing.eempo.net/devel/"+scripts[index];
    console.log('Loading script '+ scriptname);
    
    $.ajax({
    		url: scriptname,
    		success: function(data) {
    			console.log('Loaded script '+ scriptname);
    			LoadScript(index+1);
    		},
    		error:function (xhr, ajaxOptions, thrownError) {
    			alert(xhr.status);
    			alert(thrownError);
    			
    			alert('error loading libraries...: '+scriptname);
    		}
    });
    
    /*
    $.getScript(scriptname)
    .done(function( script, textStatus ) {
    		console.log('Loaded script '+ scriptname);
    		LoadScript(index+1);
    })
    .fail(function( jqxhr, settings, exception ) {
    		// $( "div.log" ).text( "Triggered ajaxError handler." );
    		alert('error loading libraries...');
    });
    */
    // ).done( function(){
       
    // });
    // var data = {
    //     action: 'my_action',
    //     whatever: 1234
    // };
    // $.ajax({
    // 		type: "GET",
    // 		url: scriptname,
    // 		dataType: "script",
    // 		data: null,
    // 		success: function(){
    // 			console.log('Loaded script '+ scriptname);
    // 			LoadScript(++index);
    // 		}
    // });
    // }

/*
function load_next_script() {
	if(index < scripts.length){
	$.getScript(scripts[index]).done(
    					
    					//once the script is loaded, increase the index and attempt to load the next script
    					console.log('Loaded: ' + scripts[index]);
    					index++;
    					load_next_script();
    			});
    			}
    //make sure the current index is still a part of the array
    
}*/