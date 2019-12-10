<template>
    <div>
        聊天室
        <el-input v-model="msgdata" placeholder="请输入内容"></el-input>
        <el-button type="primary" @click="send">发送</el-button>
        <div>收到的消息</div>
        <div>{{repData}}</div>
    </div>
</template>

<script>
	export default {
		name: "chatroom",
        data(){
		 return{
		 	uid:'',
             msgdata:'',
             repData:''
         }
        },
        sockets:{
			connect(){
			    console.log('socket')
            },
            setUserId(data){
				console.log(data)
                this.uid = data.uid
            },
            replyMessage(data){
				console.log(data,'rep')
                this.repData = data.msg
            }
        },
        mounted(){
			this.getid()
        },
        methods:{
			getid(){
				this.$socket.emit('getUserId',{})
                console.log(this.uid)
            },
            send(){
				console.log('111')
				this.$socket.emit('sendMessage',{uid:this.uid,msg:this.msgdata})
            }
        }
	}
</script>

<style scoped>

</style>
