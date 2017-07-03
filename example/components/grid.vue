<template>
    <div id="grid">
        <i-row>

            <i-col :md="8">
                <i-row gutter="20px">
                    <i-col><div class="grid_24">24等份</div></i-col>
                    <i-col :span="12"><div class="grid_12">12等分</div></i-col>
                    <i-col :span="12"><div class="grid_12">12等分</div></i-col>
                    <i-col :span="8"><div class="grid_8">8等份</div></i-col>
                    <i-col :span="8"><div class="grid_8">8等份</div></i-col>
                    <i-col :span="8"><div class="grid_8">8等份</div></i-col>
                </i-row>
            </i-col>

            <i-col :md="8">
                <i-row gutter="20px">
                    <i-col><div class="grid_24">24等份</div></i-col>
                    <i-col :span="12" :offset="6"><div class="grid_12">12等分-left</div></i-col>
                    <i-col :span="8"><div class="grid_8">8等份</div></i-col>
                    <i-col :span="8"><div class="grid_8">8等份</div></i-col>
                    <i-col :span="8"><div class="grid_8">8等份</div></i-col>
                </i-row>
            </i-col>

            <i-col :md="8">
                <i-row gutter="20px">
                    <i-col><div class="grid_24">24等份</div></i-col>
                    <i-col :span="12"><div class="grid_12">12等分</div></i-col>
                    <i-col :span="12"><div class="grid_12">12等分</div></i-col>
                    <i-col :span="4"><div class="grid_8">2等份</div></i-col>
                    <i-col :span="10"><div class="grid_8">6等份</div></i-col>
                    <i-col :span="10"><div class="grid_8">16等份</div></i-col>
                </i-row>
            </i-col>

        </i-row>

    </div>
</template>

<script>
export default {
    name: 'grid',
    data() {
        return {

        }
    }
}
</script>

<style scoped>
#grid {
    color:#fff;
}

div[class^='grid_']{
    border:1px solid #999;
    margin:5px
}
.grid_24{
    background-color:#20a0ff;
}
.grid_12{
    background-color:#13ce66;
}
.grid_8{
    background-color:#f7ba2a;
}
</style>

