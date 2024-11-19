  <block type="processing" x="13" y="63">
    <statement name="DECL">
      <block type="ps_image_decl">
        <field name="VAR">teste</field>
        <value name="VALUE">
          <block type="text">
            <field name="TEXT">http://www.epalmada.pt/uploads/images/epalogojovens.png</field>
          </block>
        </value>
        <next>
          <block type="variables_decl_int">
            <field name="VAR">x</field>
            <next>
              <block type="variables_decl_int">
                <field name="VAR">y</field>
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
        </value>
        <value name="height">
          <shadow type="math_number">
            <field name="NUM">400</field>
          </shadow>
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
        </value>
        <value name="b">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
        <next>
          <block type="controls_if">
            <mutation else="1"></mutation>
            <value name="IF0">
              <block type="mousePressed"></block>
            </value>
            <statement name="DO0">
              <block type="variables_asign">
                <field name="VARNAME">x</field>
                <value name="VALUE">
                  <block type="mouseX"></block>
                </value>
                <next>
                  <block type="variables_asign">
                    <field name="VARNAME">y</field>
                    <value name="VALUE">
                      <block type="mouseY"></block>
                    </value>
                  </block>
                </next>
              </block>
            </statement>
            <next>
              <block type="ps_image">
                <value name="image_url">
                  <block type="variables_get">
                    <field name="VAR">teste</field>
                  </block>
                </value>
                <value name="x">
                  <block type="variables_get">
                    <field name="VAR">x</field>
                  </block>
                </value>
                <value name="y">
                  <block type="variables_get">
                    <field name="VAR">y</field>
                  </block>
                </value>
              </block>
            </next>
          </block>
        </next>
      </block>
    </statement>
  </block>