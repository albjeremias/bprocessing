<input type="hidden" value="Exercicio um" id="exercise_name">
 <xml id="startBlocks" style="display: none">
 <block type="processing" x="113" y="63">
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
          <block type="math_number">
            <field name="NUM">0</field>
          </block>
        </value>
        <value name="g">
          <block type="math_number">
            <field name="NUM">255</field>
          </block>
        </value>
        <value name="b">
          <block type="math_number">
            <field name="NUM">0</field>
          </block>
        </value>
        <next>
          <block type="fill">
            <value name="r">
              <block type="math_number">
                <field name="NUM">255</field>
              </block>
            </value>
            <value name="g">
              <block type="math_number">
                <field name="NUM">0</field>
              </block>
            </value>
            <value name="b">
              <block type="math_number">
                <field name="NUM">0</field>
              </block>
            </value>
            <next>
              <block type="controls_if">
                <mutation else="1"></mutation>
                <value name="IF0">
                  <block type="mousePressed"></block>
                </value>
                <statement name="DO0">
                  <block type="ellipse">
                    <value name="coord_x">
                      <block type="mouseX"></block>
                    </value>
                    <value name="coord_y">
                      <block type="mouseY"></block>
                    </value>
                    <value name="radius_x">
                      <block type="math_number">
                        <field name="NUM">50</field>
                      </block>
                    </value>
                    <value name="radius_y">
                      <block type="math_number">
                        <field name="NUM">50</field>
                      </block>
                    </value>
                    <next>
                      <block type="fill">
                        <value name="r">
                          <block type="math_number">
                            <field name="NUM">255</field>
                          </block>
                        </value>
                        <value name="g">
                          <block type="math_number">
                            <field name="NUM">100</field>
                          </block>
                        </value>
                        <value name="b">
                          <block type="math_number">
                            <field name="NUM">0</field>
                          </block>
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
                              <block type="math_number">
                                <field name="NUM">30</field>
                              </block>
                            </value>
                            <value name="radius_y">
                              <block type="math_number">
                                <field name="NUM">30</field>
                              </block>
                            </value>
                          </block>
                        </next>
                      </block>
                    </next>
                  </block>
                </statement>
                <statement name="ELSE">
                  <block type="rect">
                    <value name="coord_x">
                      <block type="mouseX"></block>
                    </value>
                    <value name="coord_y">
                      <block type="mouseY"></block>
                    </value>
                    <value name="radius_x">
                      <block type="math_number">
                        <field name="NUM">50</field>
                      </block>
                    </value>
                    <value name="radius_y">
                      <block type="math_number">
                        <field name="NUM">50</field>
                      </block>
                    </value>
                    <next>
                      <block type="fill">
                        <value name="r">
                          <block type="math_number">
                            <field name="NUM">255</field>
                          </block>
                        </value>
                        <value name="g">
                          <block type="math_number">
                            <field name="NUM">100</field>
                          </block>
                        </value>
                        <value name="b">
                          <block type="math_number">
                            <field name="NUM">0</field>
                          </block>
                        </value>
                        <next>
                          <block type="rect">
                            <value name="coord_x">
                              <block type="mouseX"></block>
                            </value>
                            <value name="coord_y">
                              <block type="mouseY"></block>
                            </value>
                            <value name="radius_x">
                              <block type="math_number">
                                <field name="NUM">20</field>
                              </block>
                            </value>
                            <value name="radius_y">
                              <block type="math_number">
                                <field name="NUM">20</field>
                              </block>
                            </value>
                          </block>
                        </next>
                      </block>
                    </next>
                  </block>
                </statement>
              </block>
            </next>
          </block>
        </next>
      </block>
    </statement>
  </block>
  
  </xml>
  
