<template>
    <div id="app" class="app">
        <div class="title">CkEditor编辑器演示</div>
        <div class="content">
            <ck-editor v-model="editorData" />
        </div>
        <div class="button" @click="clickBtn">保存</div>
    </div>
</template>
<script>
import CkEditor from "../src/components/extend-editor/index.vue"
export default {
  name: "App",
  components: {
    CkEditor
  },
  data () {
    return {
      editorData: "输入内容吧！！！"
    }
  },
  methods: {
    clickBtn () {
      console.log(this.editorData);
    }
  }
}
</script>
<style lang="less">
.app {
    position: relative;
    .title {
        height: 80px;
        line-height: 80px;
        font-size: 36px;
        text-align: center;
    }
    .content {
        width: 50%;
        height: calc(100vh - 100px);
        margin: 0 auto;
        border: 1px solid #ddd;
        overflow-y: auto;
        overflow-x: visible;
    }
    .button {
        position: absolute;
        bottom: 0;
        right: 20px;
        width: 60px;
        height: 24px;
        background-color: #0062ca;
        font-size: 16px;
        line-height: 24px;
        text-align: center;
        color: #fff;
    }
}
</style>
