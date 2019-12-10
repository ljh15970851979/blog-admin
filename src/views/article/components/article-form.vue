<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="标题">
        <el-input v-model="form.title" style="width:20%" placeholder="请输入文章标题"></el-input>
      </el-form-item>
<!--      <el-form-item label="文章分类">-->
<!--        <el-select v-model="form.region" placeholder="请选择文章分类">-->
<!--          <el-option label="区域一" value="shanghai"></el-option>-->
<!--          <el-option label="区域二" value="beijing"></el-option>-->
<!--        </el-select>-->
<!--      </el-form-item>-->
<!--      <el-form-item label="封面">-->
<!--        <el-upload-->
<!--          class="upload-demo"-->
<!--          drag-->
<!--          action="https://jsonplaceholder.typicode.com/posts/"-->
<!--          multiple-->
<!--        >-->
<!--          <i class="el-icon-upload"></i>-->
<!--          <div class="el-upload__text">-->
<!--            将文件拖到此处，或-->
<!--            <em>点击上传</em>-->
<!--          </div>-->
<!--        </el-upload>-->
<!--      </el-form-item>-->

      <el-form-item label="文章内容" style="width:80%">
        <quillEditorCom :quillContent="form.text" @changeQuill="getQuillContent"></quillEditorCom>
<!--        <quill-editor-->
<!--          v-model="form.content"-->
<!--          ref="myQuillEditor"-->
<!--          :options="editorOption"-->
<!--          @blur="onEditorBlur($event)"-->
<!--          @focus="onEditorFocus($event)"-->
<!--          @ready="onEditorReady($event)"-->
<!--        ></quill-editor>-->
      </el-form-item>
<!--      <el-form-item label="内容简介">-->
<!--        <el-input type="textarea" v-model="form.desc" style="width:400px" :rows="2"></el-input>-->
<!--      </el-form-item>-->
      <el-form-item>
        <el-button type="primary" @click="onSubmit">确定</el-button>
        <el-button @click="goToArticle">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// import { quillEditor } from "vue-quill-editor";
import quillEditorCom from "@/components/quill/quillEditor";
import {
  addBlog
} from '@/utils/api/api'
export default {
  name: "article-form",
  components: {
	  quillEditorCom
  },
  data() {
    return {
      content: "<h2>I am Example</h2>",
      editorOption: {
        // some quill options
      },
      form: {
        title: "",
        text: "",
      }
    };
  },
  methods: {
    getQuillContent: function (value) {
      let that = this
      that.form.text = value
    },
    onSubmit() {
      if (!this.form.text){
        this.$message({
          message: '请填写内容',
          type: 'error'
        });
      }
      if (!this.form.title){
        this.$message({
          message: '请填写标题',
          type: 'error'
        });
      }
      let params =this.form
      addBlog(params, (data) => {
        console.log(data)
        if (data.errorCode === 0){
          this.$message({
            message: '添加成功',
            type: 'success'
          });
          this.$router.push({path: '/article'})
        }
      })
      console.log("submit!");
    },
    goToArticle(){
      this.$router.push({path: '/article'})
    }
  },
  computed: {
  },
  mounted() {
  }
};
</script>

<style lang="stylus" scoped>

</style>

