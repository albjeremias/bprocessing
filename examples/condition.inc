  <block type="processing" x="-262" y="38">
    <statement name="DECL">
      <block type="variables_decl_int">
        <field name="VAR">raio</field>
        <value name="VALUE">
          <block type="math_number">
            <field name="NUM">20</field>
          </block>
        </value>
      </block>
    </statement>
    <statement name="SETUP">
      <block type="size">
        <value name="width">
          <block type="math_number">
            <field name="NUM">300</field>
          </block>
        </value>
        <value name="height">
          <block type="math_number">
            <field name="NUM">400</field>
          </block>
        </value>
        <next>
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
        </next>
      </block>
    </statement>
    <statement name="DRAW">
      <block type="controls_if">
        <mutation else="1"></mutation>
        <value name="IF0">
          <block type="mousePressed"></block>
        </value>
        <statement name="DO0">
          <block type="variables_asign">
            <field name="VARNAME">raio</field>
            <value name="VALUE">
              <block type="math_arithmetic">
                <field name="OP">ADD</field>
                <value name="A">
                  <shadow type="math_number">
                    <field name="NUM">1</field>
                  </shadow>
                  <block type="variables_get">
                    <field name="VAR">raio</field>
                  </block>
                </value>
                <value name="B">
                  <shadow type="math_number">
                    <field name="NUM">1</field>
                  </shadow>
                </value>
              </block>
            </value>
          </block>
        </statement>
        <statement name="ELSE">
          <block type="variables_asign">
            <field name="VARNAME">raio</field>
            <value name="VALUE">
              <block type="math_number">
                <field name="NUM">20</field>
              </block>
            </value>
          </block>
        </statement>
        <next>
          <block type="fill">
            <value name="r">
              <shadow type="math_number">
                <field name="NUM">255</field>
              </shadow>
              <block type="math_number">
                <field name="NUM">0</field>
              </block>
            </value>
            <value name="g">
              <shadow type="math_number">
                <field name="NUM">0</field>
              </shadow>
              <block type="math_number">
                <field name="NUM">233</field>
              </block>
            </value>
            <value name="b">
              <shadow type="math_number">
                <field name="NUM">0</field>
              </shadow>
            </value>
            <next>
              <block type="ellipse">
                <value name="coord_x">
                  <block type="mouseX"></block>
                </value>
                <value name="coord_y">
                  <block type="mouseY"></block>
                </value>
                <value name="radius_x">
                  <block type="variables_get">
                    <field name="VAR">raio</field>
                  </block>
                </value>
                <value name="radius_y">
                  <block type="variables_get">
                    <field name="VAR">raio</field>
                  </block>
                </value>
              </block>
            </next>
          </block>
        </next>
      </block>
    </statement>
  </block>
  <block type="math_number" x="-138" y="824">
    <field name="NUM">222</field>
  </block>