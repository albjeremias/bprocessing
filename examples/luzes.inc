  <block type="processing" x="88" y="88">
    <statement name="DECL">
      <block type="variables_decl_boolean">
        <field name="VAR">fusivel_luz_esquerda</field>
        <value name="VALUE">
          <shadow type="logic_boolean">
            <field name="BOOL">TRUE</field>
          </shadow>
          <block type="logic_boolean">
            <field name="BOOL">FALSE</field>
          </block>
        </value>
        <next>
          <block type="variables_decl_boolean">
            <field name="VAR">fusivel_luz_direita</field>
            <value name="VALUE">
              <shadow type="logic_boolean">
                <field name="BOOL">TRUE</field>
              </shadow>
              <block type="logic_boolean">
                <field name="BOOL">FALSE</field>
              </block>
            </value>
            <next>
              <block type="variables_decl_boolean">
                <field name="VAR">fusivel_luzes</field>
                <value name="VALUE">
                  <shadow type="logic_boolean">
                    <field name="BOOL">TRUE</field>
                  </shadow>
                  <block type="logic_boolean">
                    <field name="BOOL">TRUE</field>
                  </block>
                </value>
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
            <field name="NUM">200</field>
          </block>
        </value>
        <value name="height">
          <shadow type="math_number">
            <field name="NUM">400</field>
          </shadow>
          <block type="math_number">
            <field name="NUM">100</field>
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
        </value>
        <value name="b">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
        <next>
          <block type="controls_if">
            <value name="IF0">
              <block type="logic_operation">
                <field name="OP">AND</field>
                <value name="A">
                  <block type="variables_get">
                    <field name="VAR">fusivel_luzes</field>
                  </block>
                </value>
                <value name="B">
                  <block type="mousePressed"></block>
                </value>
              </block>
            </value>
            <statement name="DO0">
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
                <next>
                  <block type="ellipse">
                    <value name="coord_x">
                      <shadow type="math_number">
                        <field name="NUM">50</field>
                      </shadow>
                      <block type="math_number">
                        <field name="NUM">150</field>
                      </block>
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
                </next>
              </block>
            </statement>
          </block>
        </next>
      </block>
    </statement>
  </block>