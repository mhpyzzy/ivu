<template>
    <div :class="classes"
        :style="style">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name:'iCol',
        data(){
            return{
                
            }
        },
        props:{
            span: {
                type: Number,
                default: 24
            },
            offset: Number,
            pull: Number,
            push: Number,
            xs: [Number, Object],
            sm: [Number, Object],
            md: [Number, Object],
            lg: [Number, Object]
        },
        computed:{
            style() {
                let _reset={};
                let parent = this.$parent;
                if (parent && parent.$options.componentName !== 'iRow') {
                    console.error('iCol的父项目必须是iRow')
                }
                let _gutter=parent ? parent.gutter : 0;

                if(_gutter){
                    _reset.paddingLeft = _reset.paddingRight = String(_gutter).replace(/(\d+)(px|rem)?/,function($0,$1,$2){
                        let _unit=$2?$2:'px';
                        return parseInt($1)/2 + _unit
                    });
                }
                return _reset
            },
            classes(){
               return  ['span','xs','sm','md','lg', 'offset', 'pull', 'push'].map((prop)=>{
                    if(!!this[prop]){
                      return  prop !== 'span'? `i-col-${prop}-${this[prop]}`: `i-col-${this[prop]}`
                    }
                })
            }

        }
    }
</script>