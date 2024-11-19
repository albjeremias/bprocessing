  <block type="processing" x="88" y="-12">
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
            <next>
              <block type="line">
                <value name="x1">
                  <block type="mouseX"></block>
                </value>
                <value name="y1">
                  <block type="math_number">
                    <field name="NUM">0</field>
                  </block>
                </value>
                <value name="x2">
                  <block type="mouseX"></block>
                </value>
                <value name="y2">
                  <block type="variables_get">
                    <field name="VAR">height</field>
                  </block>
                </value>
                <next>
                  <block type="line">
                    <value name="x1">
                      <block type="math_number">
                        <field name="NUM">0</field>
                      </block>
                    </value>
                    <value name="y1">
                      <block type="mouseY"></block>
                    </value>
                    <value name="x2">
                      <block type="variables_get">
                        <field name="VAR">width</field>
                      </block>
                    </value>
                    <value name="y2">
                      <block type="mouseY"></block>
                    </value>
                    <next>
                      <block type="ps_text">
                        <value name="text">
                          <block type="text_join">
                            <mutation items="3"></mutation>
                            <value name="ADD0">
                              <block type="mouseX"></block>
                            </value>
                            <value name="ADD1">
                              <block type="text">
                                <field name="TEXT"> , </field>
                              </block>
                            </value>
                            <value name="ADD2">
                              <block type="mouseY"></block>
                            </value>
                          </block>
                        </value>
                        <value name="x">
                          <block type="mouseX"></block>
                        </value>
                        <value name="y">
                          <block type="mouseY"></block>
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
  </block>