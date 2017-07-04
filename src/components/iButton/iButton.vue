<template>
  <button class="i-button" 
    @click="handleClick"
    :type="nativeType"
    :disabled="disabled"
    :autofocus="autofocus"
    :class="iButtonClass">
    <i class="i-button-loading" v-if="!!loading"></i>
    <i :class="icon" v-if="icon!='' & !loading"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
    export default {
        name:'iButton',
        data(){
            return{

            }
        },
        computed:{
            iButtonClass(){
                return [
                    this.type?`i-button-${this.type}`:'',
                    this.size?`i-button-${this.size}`:'',
                    {'i-button-disabled':this.disabled}
                ]
            }
        },
        props:{
            type:{
                type:String,
                default:'default'
            },
            size:String,
            icon:{
                type:String,
                default:''
            },
            nativeType:{
                type:String,
                default:'button'
            },
            loading:Boolean,
            disabled:Boolean,
            autofocus:Boolean
        },
        methods:{
            handleClick(event){
                this.$emit('click',event)
            }
        }
    }
</script>