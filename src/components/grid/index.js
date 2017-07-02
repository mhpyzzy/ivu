import iCol from './col'
import iRow from './row'


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