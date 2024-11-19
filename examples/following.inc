  <block type="processing" x="-462" y="338">
    <statement name="DECL">
      <block type="variables_decl_int">
        <field name="VAR">x</field>
        <value name="VALUE">
          <block type="math_number">
            <field name="NUM">0</field>
          </block>
        </value>
        <next>
          <block type="variables_decl_float">
            <field name="VAR">x_float</field>
            <value name="VALUE">
              <block type="math_number">
                <field name="NUM">0</field>
              </block>
            </value>
          </block>
        </next>
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
              <block type="controls_if">
                <value name="IF0">
                  <block type="logic_compare">
                    <field name="OP">GT</field>
                    <value name="A">
                      <block type="variables_get">
                        <field name="VAR">x_float</field>
                      </block>
                    </value>
                    <value name="B">
                      <block type="width"></block>
                    </value>
                  </block>
                </value>
                <statement name="DO0">
                  <block type="variables_asign">
                    <field name="VARNAME">x_float</field>
                    <value name="VALUE">
                      <block type="math_number">
                        <field name="NUM">0</field>
                      </block>
                    </value>
                  </block>
                </statement>
                <next>
                  <block type="variables_asign">
                    <field name="VARNAME">x</field>
                    <value name="VALUE">
                      <block type="math_arithmetic">
                        <field name="OP">ADD</field>
                        <value name="A">
                          <shadow type="math_number">
                            <field name="NUM">1</field>
                          </shadow>
                          <block type="variables_get">
                            <field name="VAR">x</field>
                          </block>
                        </value>
                        <value name="B">
                          <shadow type="math_number">
                            <field name="NUM">1</field>
                          </shadow>
                        </value>
                      </block>
                    </value>
                    <next>
                      <block type="variables_asign">
                        <field name="VARNAME">x_float</field>
                        <value name="VALUE">
                          <block type="math_arithmetic">
                            <field name="OP">ADD</field>
                            <value name="A">
                              <shadow type="math_number">
                                <field name="NUM">1</field>
                              </shadow>
                              <block type="variables_get">
                                <field name="VAR">x_float</field>
                              </block>
                            </value>
                            <value name="B">
                              <shadow type="math_number">
                                <field name="NUM">1</field>
                              </shadow>
                              <block type="math_number">
                                <field name="NUM">0.9</field>
                              </block>
                            </value>
                          </block>
                        </value>
                        <next>
                          <block type="line">
                            <value name="x1">
                              <block type="variables_get">
                                <field name="VAR">x</field>
                              </block>
                            </value>
                            <value name="y1">
                              <block type="math_number">
                                <field name="NUM">0</field>
                              </block>
                            </value>
                            <value name="x2">
                              <block type="variables_get">
                                <field name="VAR">x</field>
                              </block>
                            </value>
                            <value name="y2">
                              <block type="height"></block>
                            </value>
                            <next>
                              <block type="line">
                                <value name="x1">
                                  <block type="variables_get">
                                    <field name="VAR">x_float</field>
                                  </block>
                                </value>
                                <value name="y1">
                                  <block type="math_number">
                                    <field name="NUM">0</field>
                                  </block>
                                </value>
                                <value name="x2">
                                  <block type="variables_get">
                                    <field name="VAR">x_float</field>
                                  </block>
                                </value>
                                <value name="y2">
                                  <block type="height"></block>
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
            </next>
          </block>
        </next>
      </block>
    </statement>
  </block>
