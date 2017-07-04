<template>
    <!--<div class="i-container" :style="containerStyle">-->
        <div :class="type=='flex'?'i-row-flex':'i-row'" 
            :style="rowStyle">
            <slot></slot>
        </div>
    <!--</div>-->
</template>

<script>
    export default {
        name:'iRow',
        componentName:'iRow',
        data(){
            return{
                
            }
        },
        computed:{
            rowStyle(){
                let _reset={};
                if(this.gutter){
                   _reset.marginRight = _reset.marginLeft = String(this.gutter).replace(/(\d+)(px|rem)?/,function($0,$1,$2){
                        let _unit=$2?$2:'px';
                        return (-parseInt($1)/2) + _unit
                    });
                }

                if(this.type=='flex'){
                    _reset.justifyContent=this.justify;
                    _reset.alignItems=this.align;
                }
                return _reset;
            }
        },
        props:{
            gutter:[String, Number], //确定列之间的间距
            type: String,  //flex和普通
            justify: {
                type: String,
                default: 'start'
            },
            align: {
                type: String,
                default: 'top'
            }
        }
    }
</script>