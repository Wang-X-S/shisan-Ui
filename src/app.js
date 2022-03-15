import Vue from 'vue'
import Button from "/src/button";
import Icon from "./icon";
import ButtonGroup from "./buttonGroup";
Vue.component('s-button-group',ButtonGroup)
Vue.component('s-button',Button)
Vue.component('s-icon',Icon)
new Vue({
    el:'#app',
    data:{
        loading1:false,
    }
})
//单元测试
import chai from 'chai'
const expect = chai.expect

//判断button的属性是否为#icon-setting
{
 const Constructor = Vue.extend(Button)
 const button = new Constructor({
     propsData:{
         icon:'setting',
     }
 })
 button.$mount()
 let useElement = button.$el.querySelector('use')
 let href = useElement.getAttribute('xlink:href')
 expect(href).to.eq('#icon-setting')
}
//判断button的属性是否为#icon-loading
{
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData:{
            icon:'setting',
            loading:true
        }
    })
    button.$mount()
    let useElement = button.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#icon-loading')
}
//判断button的style属性中的order属性为几
{
    const div = document.createElement('div')
    document.body.appendChild(div)

    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData:{
            icon:'setting',
        }
    })
    button.$mount(div)
    let svg = button.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
    expect(order).to.eq('1')
    //测试完后
    //button元素删除
    button.$el.remove()
    //button对象删除
    button.$destroy()
}
//判断添加了right的button的order是否为2
{
    const div2 = document.createElement('div')
    document.body.appendChild(div2)

    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData:{
            icon:'setting',
            iconPosition:"right"
        }
    })
    button.$mount(div2)
    let svg = button.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
    expect(order).to.eq('2')
    //测试完后
    //button元素删除
    button.$el.remove()
    //button对象删除
    button.$destroy()
}
//监听click

