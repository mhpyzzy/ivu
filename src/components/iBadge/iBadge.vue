<template>
  <div class="i-badge">
    <slot></slot>
    <transition name="i-zoom-in-center">
        <sup
            class="i_badge_content"
            v-show="!hidden && (badegVal||dot)"
            v-text="badegVal"
            :class="{'is_fixed':$slots.default,'is_dot':dot}">
        </sup>
    </transition>
  </div>
</template>

<script>
    import {typeOf} from '../../utils'
    export default {
        name:'iBadge',
        props:{
            value:[Number,String],
            max:Number,
            dot:Boolean,
            hidden:Boolean
        },
        computed:{
            badegVal(){
                if(this.dot) return;
                let _value=this.value;
                let _max=this.max;

                if(typeOf(_value)=='number'&&typeOf(_max)=='number'){
                    _value=_value>_max?`${_max}+`:_value;
                }
                return _value;
            }
        }
    }
</script>