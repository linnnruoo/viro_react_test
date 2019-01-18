import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroSceneNavigator,
  ViroScene,
  ViroARScene,
  ViroAmbientLight,
  Viro360Video,
  Viro360Image,
  ViroUtils,
  ViroPortal,
  ViroPortalScene,
  Viro3DObject,
} from 'react-viro';

var createReactClass = require('create-react-class');
var MainScene = createReactClass({

  render: function() {
    return (
      <ViroARScene>
      <ViroAmbientLight color="#ffffff" intensity={200}/>
        <ViroPortalScene passable={true} dragType="FixedDistance" onDrag={()=>{}}>
          <ViroPortal position={[0, 0, -1]} scale={[.1, .1, .1]}>
            <Viro3DObject source={require('./ARPortals/portal_res/portal_ship/portal_ship.vrx')}
              resources={[require('./ARPortals/portal_res/portal_ship/portal_ship_diffuse.png'),
                          require('./ARPortals/portal_res/portal_ship/portal_ship_normal.png'),
                          require('./ARPortals/portal_res/portal_ship/portal_ship_specular.png')]}
              type="VRX"/>
          </ViroPortal>
          <Viro360Image source={require("./ARPortals/portal_res/360_island.jpg")} />
        </ViroPortalScene>
      </ViroARScene>
    );
  },
});

module.exports = MainScene;