<template>
  <div>
    <mt-tab-container v-model="active">
      <mt-tab-container-item id="3">
        <mt-cell v-for="(n, index) in 4" :title="'channel ' + n" :key="index"/>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script type="text/ecmascript-6">
  import {TabContainer,TabContainerItem, Cell} from 'mint-ui'
  export default {
    props: ['active'],
    components: {
      'mt-tab-container-item': TabContainerItem,
      'mt-cell': Cell,
      'mt-tab-container': TabContainer
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
