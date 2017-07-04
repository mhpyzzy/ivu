<template>
    <i-row gutter="30">
        
        <i-col :span="12">
            <i-row class="mb20">
                <i-col>
                    <i-button :disabled='true'>disabled</i-button>
                    <i-button size='larger'>larger</i-button>
                    <i-button >default</i-button>
                    <i-button size='small'>small</i-button>
                    <i-button size='mini'>mini</i-button>      
                </i-col>
            </i-row>
            <i-row class="mb20">
                <i-col>
                    <i-button-group class="left">
                        <i-button type="primary">primary</i-button>
                        <i-button type="success">success</i-button>
                        <i-button type="warning">warning</i-button>
                        <i-button type="info" >info</i-button>      
                    </i-button-group>
                </i-col>
            </i-row>
            <i-row class="mb20">
                <i-col :span="8">
                    <i-button-group class="left">
                        <i-button type="primary">primary</i-button>
                        <i-button type="success" icon="ivu-icon ivu-weibiaoti--"></i-button>
                    </i-button-group>
                </i-col>
                <i-col :span="8">
                    <i-button-group class="left">
                        <i-button>primary</i-button>
                        <i-button icon="ivu-icon ivu-weibiaoti--"></i-button>
                    </i-button-group>
                </i-col>
            </i-row>
        </i-col>

        <i-col :span="12">
            <i-row class="mb20">
                <i-col>
                    <i-button type="primary">primary</i-button>
                    <i-button type="success">success</i-button>
                    <i-button type="warning">warning</i-button>
                    <i-button type="info">info</i-button>
                    <i-button type="text">text</i-button>
                    <i-button size="small" icon="ivu-icon ivu-weibiaoti--">iconfont</i-button>
                </i-col>
            </i-row>
            <i-row class="mb20">
                <i-col>
                    <i-button-group>
                        <i-button>primary</i-button>
                        <i-button>success</i-button>
                        <i-button>warning</i-button>
                        <i-button>info</i-button>
                        <i-button>text</i-button>
                    </i-button-group>
                </i-col>
            </i-row>
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

<style scoped>
    .mb20{
        margin-bottom:20px;
    }
</style>

