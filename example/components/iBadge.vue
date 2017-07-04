<template>
  <i-row :gutter="20">
      <i-col :span="3">
          <i-badge :value="15" :hidden="true">
              <i-button>iBadge</i-button>
          </i-badge>
      </i-col>
      <i-col :span="3">
          <i-badge :value="15">
              <i-button type="primary">iBadge</i-button>
          </i-badge>
      </i-col>
      <i-col :span="3">
          <i-badge :value="15" :max="10">
              <i-button type="success">iBadge</i-button>
          </i-badge>
      </i-col>
      <i-col :span="3">
          <i-badge :dot="true">
              <i-button>iBadge</i-button>
          </i-badge>
      </i-col>
      <i-col :span="3">
          <i-badge value="new">
              <i-button type="info">iBadge</i-button>
          </i-badge>
      </i-col>
  </i-row>
</template>

<script>
    export default {
        name:'i_badge',
        data(){
            return{

            }
        }
    }
</script>
