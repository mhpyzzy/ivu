<template>
  <i-row>
      <i-col :span="8">
          <i-badge :dot="true" :value="15" :hidden="true">
              <!--<i-button>iBadge</i-button>-->
          </i-badge>
      </i-col>
      <!--<i-col :span="8">
          <i-badge :value="15">
              <i-button>iBadge</i-button>
          </i-badge>
      </i-col>
      <i-col :span="8">
          <i-badge :value="15">
              <i-button>iBadge</i-button>
          </i-badge>
      </i-col>-->
  </i-row>
</template>

<script>
    export default {
        name:'iBadge',
        data(){
            return{

            }
        }
    }
</script>
