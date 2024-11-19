/**
 * @license
 * Visual Blocks Language
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
 * @fileoverview Generating JavaScript for variable blocks.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.JavaScript.variables');

goog.require('Blockly.JavaScript');


Blockly.JavaScript['variables_get'] = function(block) {
  // Variable getter.
  var code = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('VAR'),
      Blockly.Variables.NAME_TYPE);
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['variables_set'] = function(block) {
  // Variable setter.
  var argument0 = Blockly.JavaScript.valueToCode(block, 'TIPO',
      Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
  var varName = Blockly.JavaScript.variableDB_.getName(
      block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  return varName + ' = ' + argument0 + ';\n';
};
Blockly.JavaScript['variables_decl'] = function(block) {
  
  var dropdown_tipo = block.getFieldValue('TYPE');
  var variable_var = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  
  var code = dropdown_tipo + ' '+ variable_var;
  if(value_name.length > 1){
  	  code = code + ' = ' + value_name;
  }
  code = code + ";\n";
  
  return code;
};

Blockly.JavaScript['variables_asign'] = function(block) {
  var variable_var = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('VARNAME'), Blockly.Variables.NAME_TYPE);
  var value_name = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_var +' = '+value_name + ';\n';
  return code;
};









Blockly.JavaScript['variables_decl_boolean'] = function(block) {
  var code = "";
  var variable_var = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var value_name = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
  
  code = code + 'boolean '+ variable_var;
  if(value_name.length > 1){
  	  code = code + ' = ' + value_name;
  }
  code = code + ";\n";
  
  return code;
};

Blockly.JavaScript['variables_decl_int'] = function(block) {
  
  var code = "";
  var variable_var = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var value_name = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
  
  code = code + 'int '+ variable_var;
  // if(value_name.length > 1){
  	  code = code + ' = ' + value_name;
  // }
  code = code + ";\n";
  
  return code;
};

Blockly.JavaScript['variables_decl_float'] = function(block) {
  
  var code = "";
  var variable_var = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var value_name = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
  
  code = code + 'float '+ variable_var;
  // if(value_name.length > 1){
  	  code = code + ' = ' + value_name;
  // }
  code = code + ";\n";
  
  return code;
};

Blockly.JavaScript['variables_decl_char'] = function(block) {
  
  var code = "";
  var variable_var = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var value_name = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
  
  code = code + 'char '+ variable_var;
  if(value_name.length > 1){
  	  code = code + ' = ' + value_name;
  }
  code = code + ";\n";
  
  return code;
};

Blockly.JavaScript['variables_decl_string'] = function(block) {
  
  var code = "";
  var variable_var = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var value_name = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
  
  code = code + 'String '+ variable_var;
  if(value_name.length > 1){
  	  code = code + ' = ' + value_name;
  }
  code = code + ";\n";
  
  return code;
};

Blockly.JavaScript['variables_decl'] = function(block) {
  
  var dropdown_tipo = block.getFieldValue('TYPE');
  var variable_var = Blockly.JavaScript.variableDB_.getVALUE(block.getFieldValue('VAR'), Blockly.Variables.VALUE_TYPE);
  var value_VALUE = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
  
  var code = dropdown_tipo + ' '+ variable_var;
  if(value_VALUE.length > 1){
  	  code = code + ' = ' + value_VALUE;
  }
  code = code + ";\n";
  
  return code;
};


