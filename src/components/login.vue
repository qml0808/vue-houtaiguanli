<template>
<div class='loginbox'>
<el-form :model="ruleForm" :rules="rules" label-position="top" status-icon  ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <h3>用户登陆</h3>
  <el-form-item label="用户名" prop='username'>
    <el-input type="text" v-model="ruleForm.username" autocomplete="off" ></el-input>
  </el-form-item>
  <el-form-item  label="密码" prop="password">
    <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
  </el-form-item>
 
  <el-form-item>
    <el-button class='btn' type="primary" @click="login">登陆</el-button>
  
  </el-form-item>
</el-form>
</div> 

</template>

<script>
export default {
    data() {
        return {
            ruleForm:{
                username:'',   //用户名
                password:'',    //密码
            },
            rules:{
                username: [
                     { required: true, message: '请输入用户名', trigger: 'blur' },
                ],
                password: [
                     { required: true, message: '请输入密码', trigger: 'blur' },
                ]

            }

        }
    },
    methods: {
        login(){
            this.$refs.ruleForm.validate((valid)=>{
                if(valid){
                    // 发送带有账号密码的的请求到服务器验证
                    this.$http.post('login',this.ruleForm)
                    .then(res=>{
                        console.log(res)
                        let { data,meta} = res.data
                        // 判断登陆状态
                        if(meta.status === 200){
                            // 登陆成功 提示登陆成功
                             this.$message({
                                message: meta.msg,
                                type: 'success'
                            });
                            // 跳转主页
                            this.$router.push('/')
                        }else{
                            // 提示登陆失败
                             this.$message.error(meta.msg);
                        }
                    })
                  
                    
                }else{
                      this.$message.error('登陆失败');
                }
            })
        }
    },
}
</script>


<style >
.loginbox{
    width:600px;
    height:450px;
    border-radius:10px;
    background-color:#fff;
    position:absolute;
    top: 50%;
    left: 50%;
    transform : translate(-50%, 50%);
    padding:40px;
}
.btn{
    width:100%;
}
</style>