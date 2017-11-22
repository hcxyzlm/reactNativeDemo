/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// react navite 工程步骤
// 1. 导入组件(面向组件), React{JSX}
// React: 默认组件,不需要添加{}
// Component:非默认组件,需要添加{}
import React,{Component} from 'react';


// 2. 导入常用组件。注册组件,样式组件,view组件,text组件
// import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';


// 3. 创建入口组件
export default class ReactNativeDemo extends Component {
  render() { // 改方法加载view的时候自动调用,返回一个组件标签
    // 返回值，需要用（）包住，固定写法
    return (
        <View style={styles.rootView}>
            <View style={styles.innerView}>
                <View style={styles.childStyle}>
                    <Text>1</Text>
                </View>
                <View style={styles.childStyle}>
                    <Text>2</Text>
                </View>
                <View style={[styles.childStyle, {alignSelf:'flex-start', backgroundColor:'blue'}]}>
                    <Text>3</Text>
                </View>
                <View style={styles.childStyle}>
                    <Text>4</Text>
                </View>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  // 描述样式
  // 描述内容view的样式
  rootView:{
    flex:1,
    backgroundColor:'red'
  },
    innerView:{
        backgroundColor:'green',
      // 外边距
        marginRight:10, // 距离右边10像素
        marginTop:20,
        width:375,
        height:300,
        flexDirection:'row',
        // 展示不下,自动多行排列
        justifyContent:'space-around',
        alignItems:'center'
  },
    childStyle:{
        backgroundColor:'yellow',
        width:60,
        height:50,
        // marginLeft:10,
        // marginTop:10
    }

});





//5. 注册程序入口组件
// 1. 第一个参数：模块名称，与oc的注册模块名称保持一致，不然会报错
// 2. 第二参数：回调函数，注册完模块，会自动调用，返回程序入口需要渲染的组件,箭头函数,es6开始出的
AppRegistry.registerComponent('reactNatiteDemo', () => ReactNativeDemo);
