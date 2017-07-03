<template>
  <button class="i_button">
    <span><slot></slot></span>
  </button>
</template>

<script>
    export default {
        name:'iButton',
        data(){
            return{

            }
        },
        props:{
            type:{
                type:String,
                default:'default'
            },
            size:String,

        }
    }
</script>