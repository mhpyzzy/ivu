<template>
  <transition name="tagTraisition ? 'i-zoom-in-center' :'' ">
    <span
        class="i-tag"
        :style="tagStyle" 
        :class="iTagClass">

        <slot></slot>

        <i class="tag_close ivu-icon ivu-guanbi"
            :style="closeStyle"
            v-show="closeBtn"
            @click="handleClose"></i>

    </span>
  </transition>
</template>

<script>
    export default {
        name:'iTag',
        props:{
            closeBtn:{
                type:Boolean,
                default:true
            },
            type: String,
            tagTraisition: Boolean,
            shadow:{
                type:Boolean,
                default:false
            },
            tagStyle:Object,
            closeStyle:Object
        },
        computed:{
            iTagClass(){
                let _iTagClass=[
                    this.type?`i-tag-${this.type}`:'',
                    this.shadow?`i-shadow`:''
                ];
              return  _iTagClass
            }
        },
        methods:{
            handleClose(enent){
                this.$emit('click',event)
            }
        }
    }
</script>
