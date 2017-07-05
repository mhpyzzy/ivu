//components
import { iRow, iCol } from './components/grid';
import iButton from './components/iButton'
import iButtonGroup from './components/iButtonGroup'
import iBadge from './components/iBadge'
import iTag from './components/iTag'

//directive
import iScroll from './directives/iScroll.js'

const ivu_components=[
    iCol,
    iRow,
    iButton,
    iButtonGroup,
    iBadge,
    iTag
];

const ivu_directives=[
    iScroll
];

const install=function(Vue,opt={}){

    if (install.installed) return;
    //全局组件
    ivu_components.map((_component)=>{
        Vue.component(_component.name,_component)
    })

    //全局指令
    ivu_components.map((_directive)=>{
        Vue.directive(_directive.name,_directive)
    })

    //全局方法

};


if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export {
    install,
    iCol,
    iRow,
    iButton,
    iButtonGroup,
    iBadge,
    iTag,
    iSroll
}