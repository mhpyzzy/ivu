import { iRow, iCol } from './components/grid';
import iButton from './components/iButton'

const ivu=[
    iCol,
    iRow,
    iButton
];

const install=function(Vue,opt={}){

    if (install.installed) return;
    //全局组件
    ivu.map((ivuItem)=>{
        Vue.component(ivuItem.name,ivuItem)
    })

    //全局指令

    //全局方法

};


if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export {
    install,
    iCol,
    iRow,
    iButton
}