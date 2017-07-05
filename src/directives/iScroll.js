//滚动的指令
//默认滚动到底部 v-scroll,
//用法：v-scroll="directive" ,directive:默认'bottom',可以有 'top'

const iScrollTo = (el, direction = 'bottom') => {
  //bottom
  el.scrollTop = direction == 'bottom'? el.scrollHeight:0;
};

const iScroll={
    bind:(el,binding)=>{
        let config={childList:true,subtree:true};
        let target=el;
        let _mutation = new MutationObserver(mutationArr=>{
            vScrollTo(el,binding.value)
        })
        _mutation.observe(target,config)
    },
    inserted:(el,binding)=>{vScrollTo(el,binding.value)}
};

iScroll.install=(Vue)=>{
    
    Vue.directive('scroll',iScroll)
};

iScroll.name='scroll';

export default iScroll