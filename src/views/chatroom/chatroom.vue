<template>
    <div>
        <div class="title">聊天室</div>
        <el-input v-model="msgdata" placeholder="请输入内容"></el-input>
        <el-button type="primary" @click="send" class="sendBtn">发送</el-button>
        <div>消息列表:</div>
        <div class="chatList">
            <div :class="'item'+ item.uid" v-for="(item,index) in repData"  :key="index">{{item.uid==0?'我:  ':'机器人:  '}}{{item.msg}}</div>
        </div>
    </div>
</template>

<script>
	export default {
		name: "chatroom",
        data(){
		 return{
		 	uid:'',
             msgdata:'',
             repData:[]
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
				this.repData.unshift({uid:1,msg:data.msg})
				// console.log(data,'rep')
                // this.repData = data.msg
            }
        },
        mounted(){
			// this.getid()
        },
        methods:{
			getid(){
				this.$socket.emit('getUserId',{})
                console.log(this.uid)
            },
            send(){
				if (!this.msgdata){
					return alert('你还没有说话哦')
                }
				this.repData.unshift({uid:0,msg:this.msgdata})
				// console.log('111')
				this.$socket.emit('sendMessage',{msg:this.msgdata})
            }
        }
	}
</script>

<style>
.title{
    font-size: 36px;
    color: brown;
    margin: 0 auto 30px;
}
    .sendBtn{
        margin-top: 10px;
        margin-bottom: 30px;
    }
    .chatList .item0{
        font-size: 26px;
        color: black;
    }
  .chatList .item1{
        font-size: 26px;
        color: crimson;
    }
</style>
