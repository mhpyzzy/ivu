<template>
    <i-row gutter="30">
        <i-col :span="12">
            <i-button class="i-button-success">default</i-button>
            <i-button class="i-button-disabled">default</i-button>
            <i-button class="i-button-info">default</i-button>
            <i-button class="i-button-primary">default</i-button>
            <i-button class="i-button-warning">default</i-button>
            <i-button class="i-button-info">default</i-button>
        </i-col>
        <i-col :span="12">
            <i-button>default</i-button>
        </i-col>
    </i-row>
</template>

<script>
    export default {
        name:'i_button',
        data(){
            return{

            }
        }
    }
</script>

