import iCol from './iCol'
import iRow from './iRow'


//单独安装时使用
[iCol,iRow].map((component)=>{
    component.install = function(Vue) {
        Vue.component(component.name, component);
    };
})

export {
    iCol,
    iRow
}