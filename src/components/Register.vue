<template>
  <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-position="left" label-width="80px" class="demo-ruleForm register">
    <el-form-item label="用户名" prop="userName">
      <el-input v-model="ruleForm.userName"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="passWord">
      <el-input v-model="ruleForm.passWord"></el-input>
    </el-form-item>
    <el-form-item label="性别" prop="region">
      <el-select v-model="ruleForm.region" placeholder="请选择您的性别">
        <el-option label="男" value="male"></el-option>
        <el-option label="女" value="female"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" plain @click="submitForm('ruleForm')" icon="el-icon-upload">提交</el-button>
      <!-- <el-button type="warning" @click="resetForm('ruleForm')" icon="el-icon-close">取消</el-button>
      <el-button type="warning" round icon="el-icon-s-goods">取消</el-button> -->
      <el-button type="success" @click="resetForm('ruleForm')" circle icon="el-icon-delete"></el-button>
    </el-form-item>
  </el-form>
</template>
<script>
  export default {
    data() {
      return {
        ruleForm: {
          userName: '',
          passWord: '',
          region: ''
        },
        rules: {
          userName: [
            {type: 'string', required: true, message: '请输入姓名', trigger: 'blur'},
            {min: 1, max: 20, message: '长度在1~20之间', trigger: 'blur'}
          ],
          passWord: [
            {required: true, message: '请输入密码', trigger: 'blur'},
            {min: 6, max: 6, message: '长度为6', trigger: 'blur'}
          ],
          region: [
            {required: true, message: '请选则性别', trigger: 'blur'},
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$http.get('http://localhost:3000/register', {
              params: {
                userName: this.ruleForm.userName,
                passWord: this.ruleForm.passWord,
                region: this.ruleForm.region
              }
            }).then(res => {
              console.log(res.data)
              if(res.data.msg === 'OK') {
                this.$router.push({
                  name: 'index',
                  params: {
                    userName: res.data.userName
                  }
                })
              }
            }).catch(err => {
              console.error('ERROR:', err)
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style scoped>
.register {
  padding: 20px;
}
.el-select,
.el-form-item__content {
  width: 100%;
}
 
</style>