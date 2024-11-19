  <block type="processing" x="38" y="13">
    <statement name="DECL">
      <block type="ps_image_decl">
        <field name="VAR">imgCarro</field>
        <value name="VALUE">
          <block type="text">
            <field name="TEXT">http://www.i2clipart.com/cliparts/a/0/4/f/clipart-car1-a04f.png</field>
          </block>
        </value>
        <next>
          <block type="variables_decl_int">
            <field name="VAR">posCarro</field>
            <value name="VALUE">
              <shadow type="math_number">
                <field name="NUM">0</field>
              </shadow>
              <block type="math_number">
                <field name="NUM">270</field>
              </block>
            </value>
            <next>
              <block type="variables_decl_boolean">
                <field name="VAR">chave_ignicao</field>
                <value name="VALUE">
                  <shadow type="logic_boolean">
                    <field name="BOOL">TRUE</field>
                  </shadow>
                  <block type="logic_boolean">
                    <field name="BOOL">FALSE</field>
                  </block>
                </value>
                <next>
                  <block type="variables_decl_float">
                    <field name="VAR">nivel_gasolina</field>
                    <value name="VALUE">
                      <shadow type="math_number">
                        <field name="NUM">0</field>
                      </shadow>
                      <block type="math_number">
                        <field name="NUM">30</field>
                      </block>
                    </value>
                    <next>
                      <block type="variables_decl_int">
                        <field name="VAR">rodas_funcionais</field>
                        <value name="VALUE">
                          <shadow type="math_number">
                            <field name="NUM">0</field>
                          </shadow>
                          <block type="math_number">
                            <field name="NUM">4</field>
                          </block>
                        </value>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </next>
      </block>
    </statement>
    <statement name="SETUP">
      <block type="size">
        <value name="width">
          <shadow type="math_number">
            <field name="NUM">400</field>
          </shadow>
          <block type="math_number">
            <field name="NUM">400</field>
          </block>
        </value>
        <value name="height">
          <shadow type="math_number">
            <field name="NUM">400</field>
          </shadow>
          <block type="math_number">
            <field name="NUM">120</field>
          </block>
        </value>
      </block>
    </statement>
    <statement name="DRAW">
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
          <block type="math_number">
            <field name="NUM">1</field>
          </block>
        </value>
        <value name="b">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
        <next>
          <block type="ps_image">
            <value name="image_url">
              <block type="variables_get">
                <field name="VAR">imgCarro</field>
              </block>
            </value>
            <value name="x">
              <block type="variables_get">
                <field name="VAR">posCarro</field>
              </block>
            </value>
            <value name="y">
              <block type="math_number">
                <field name="NUM">0</field>
              </block>
            </value>
            <next>
              <block type="controls_if">
                <value name="IF0">
                  <block type="variables_get">
                    <field name="VAR">chave_ignicao</field>
                  </block>
                </value>
                <statement name="DO0">
                  <block type="procedures_callnoreturn">
                    <mutation name="avancar carro"></mutation>
                  </block>
                </statement>
                <next>
                  <block type="procedures_callnoreturn">
                    <mutation name="gasolina"></mutation>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </next>
      </block>
    </statement>
  </block>
  <block type="procedures_defnoreturn" x="38" y="462">
    <field name="NAME">avancar carro</field>
    <comment pinned="false" h="80" w="160">Describe this function...</comment>
    <statement name="STACK">
      <block type="controls_if">
        <value name="IF0">
          <block type="mousePressed"></block>
        </value>
        <statement name="DO0">
          <block type="variables_asign">
            <field name="VARNAME">posCarro</field>
            <value name="VALUE">
              <block type="math_arithmetic">
                <field name="OP">MINUS</field>
                <value name="A">
                  <shadow type="math_number">
                    <field name="NUM">1</field>
                  </shadow>
                  <block type="variables_get">
                    <field name="VAR">posCarro</field>
                  </block>
                </value>
                <value name="B">
                  <shadow type="math_number">
                    <field name="NUM">1</field>
                  </shadow>
                  <block type="math_number">
                    <field name="NUM">3</field>
                  </block>
                </value>
              </block>
            </value>
            <next>
              <block type="variables_asign">
                <field name="VARNAME">nivel_gasolina</field>
                <value name="VALUE">
                  <block type="math_arithmetic">
                    <field name="OP">MINUS</field>
                    <value name="A">
                      <shadow type="math_number">
                        <field name="NUM">1</field>
                      </shadow>
                      <block type="variables_get">
                        <field name="VAR">nivel_gasolina</field>
                      </block>
                    </value>
                    <value name="B">
                      <shadow type="math_number">
                        <field name="NUM">1</field>
                      </shadow>
                      <block type="math_number">
                        <field name="NUM">0.2</field>
                      </block>
                    </value>
                  </block>
                </value>
              </block>
            </next>
          </block>
        </statement>
        <next>
          <block type="controls_if">
            <value name="IF0">
              <block type="logic_compare">
                <field name="OP">LTE</field>
                <value name="A">
                  <block type="variables_get">
                    <field name="VAR">posCarro</field>
                  </block>
                </value>
                <value name="B">
                  <block type="math_number">
                    <field name="NUM">-100</field>
                  </block>
                </value>
              </block>
            </value>
            <statement name="DO0">
              <block type="variables_asign">
                <field name="VARNAME">posCarro</field>
                <value name="VALUE">
                  <block type="width"></block>
                </value>
              </block>
            </statement>
          </block>
        </next>
      </block>
    </statement>
  </block>
  <block type="procedures_defnoreturn" x="638" y="437">
    <field name="NAME">gasolina</field>
    <comment pinned="false" h="80" w="160">Describe this function...</comment>
    <statement name="STACK">
      <block type="rect">
        <value name="coord_x">
          <shadow type="math_number">
            <field name="NUM">50</field>
          </shadow>
          <block type="math_number">
            <field name="NUM">0</field>
          </block>
        </value>
        <value name="coord_y">
          <shadow type="math_number">
            <field name="NUM">55</field>
          </shadow>
          <block type="math_number">
            <field name="NUM">100</field>
          </block>
        </value>
        <value name="radius_x">
          <shadow type="math_number">
            <field name="NUM">50</field>
          </shadow>
          <block type="variables_get">
            <field name="VAR">nivel_gasolina</field>
          </block>
        </value>
        <value name="radius_y">
          <shadow type="math_number">
            <field name="NUM">50</field>
          </shadow>
          <block type="math_number">
            <field name="NUM">10</field>
          </block>
        </value>
      </block>
    </statement>
  </block>
