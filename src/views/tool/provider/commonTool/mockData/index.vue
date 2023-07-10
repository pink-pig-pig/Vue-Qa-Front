<template>
	<div class="layout-pd">
		<el-card class="idNo-class">
			<el-tag type="error">随机获取身份证号</el-tag>
			<br>
			<br>

			<el-row :gutter="50">
				<el-col span="24">
					<el-form :inline="true" width="100%">
						<el-form-item>
							<el-button type="info" @click="getIdNo" >获取</el-button>
						</el-form-item>
						<el-form-item>
							<el-input v-model="idNo" placeholder="点击获取身份证号"></el-input>
						</el-form-item>
						<el-form-item>

						</el-form-item>
						<el-form-item>
							<el-input v-model="idNo" placeholder="输入快手id" :disabled="idNo !== undefined && idNo !== ''"></el-input>
						</el-form-item>
						<el-form-item>
							<el-button type="success" @click="checkIdNo" >一键实名</el-button>
						</el-form-item>
					</el-form>
				</el-col>
			</el-row>
		</el-card>
		<el-card class="userInfo-class" style="margin-top: 20px">
			<el-tag type="error">获取用户所有信息</el-tag>
			<br>
			<br>
			<el-form :inline="true" >
				<el-form-item>
					<el-input v-model="phone" placeholder="请输入手机号或者快手id" width="100%"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="success" @click="checkIdNo" >查询</el-button>
				</el-form-item>
			</el-form>
			<span>手机号：{{userInfo.phone}}</span>
			<br>
			<span>手机号：{{userInfo.phone}}</span>

		</el-card>
	</div>
</template>

<script>
 import { ID_NO_URL} from '/@/static/net'
 import axios from "axios";

export default {
	name: "mockData",
	components: {

	},
	data() {
		return {
			idNo: "",
			phone:"",
			userInfo:{
				phone:"",
				userId:"",
				uid:"",
				merchantId:"",
				providerId:"",

			}
		}
	},
	methods: {
		async getIdNo() {
			let data = await axios.get(ID_NO_URL).then(res => {
				return res.data
			})
			this.idNo = data.data
		},
		async checkIdNo() {
			this.$message.success("号码可用")
		}
	}
}

//method

</script>
