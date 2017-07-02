<template>
    <div class="i_container">
        <div :class="type=='flex'?'i_row_flex':'i_row'" 
            :style="rowStyle">
            <slot></slot>
        </div>
    </div>
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
                    _reset.marginLeft=`-${this.gutter / 2}px`;
                    _reset.marginRight=`-${this.gutter / 2}px`;
                }
                if(this.type=='flex'){
                    _reset.justifyContent=this.justify;
                    _reset.alignItems=this.align;
                }
                return _reset;
            }
        },
        props:{
            gutter: Number, //确定列之间的间距
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