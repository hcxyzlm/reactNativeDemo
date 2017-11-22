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


// 自定义属性
class XMGView extends  Component {
    // 必须要实现的方法
    render() {
        console.log(this.props);
        return (
            <View style={styles.xmgStyle }>
                <Text>当前{this.state.money}</Text>
            </View>
        );
    }

    // 更新方法
    updateMoney() {
        console.log(this);
        var money = this.state.money;
        money += 10000;
        console.log(money);

        this.setState({
            money:money,
            }
        );
    }

    // 构造方法,定义stats属性
    constructor(props) {
        super(props);// 固定写法

        this.state = {
            money:0,
        }

        console.log("初始化对象");
        console.log(this);
        // 创建定时器
        // 方法名, 多少毫秒一个周期执行,1秒= 1000毫秒
        // 这里必须绑定,bind会生成了一个新的函数,并且由绑定者调用,否则this不明确
        setInterval(this.updateMoney.bind(this), 1000);
    }
}


// 3. 创建入口组件
export default class ReactNativeDemo extends Component {
    render() {
        return (
            <View style={styles.rootView}>
                <XMGView ></XMGView>
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
    },

    xmgStyle:{
        backgroundColor:'orange',
        width:100,
        height:100,
        justifyContent:'center',
        alignItems:'center',
    }

});





//5. 注册程序入口组件
// 1. 第一个参数：模块名称，与oc的注册模块名称保持一致，不然会报错
// 2. 第二参数：回调函数，注册完模块，会自动调用，返回程序入口需要渲染的组件,箭头函数,es6开始出的
AppRegistry.registerComponent('reactNatiteDemo', () => ReactNativeDemo);
