<template>
	<el-container>
	    <el-header>
	    	<el-row>
			    <el-col :span="22">
			    	<el-menu
					  :default-active="$route.path.slice(7)"
					  mode="horizontal"
					  background-color="#545c64"
					  text-color="#fff"
					  active-text-color="#ffd04b"
					  :router="menuRouter"
					>
					  	<template v-for="item in newrouter[0].children" v-if="!item.hidden">
					  		<el-menu-item :index="item.path" >
		                    {{ item.name}}
		                    </el-menu-item>
					  	</template>
					</el-menu>
			    </el-col>
			    <el-col :span="2">
			    	<div class="logout" @click="logout">退出</div>
			    </el-col>
			</el-row>
	    </el-header>
	    <el-main>
	    	<router-view></router-view>
	    </el-main>
	</el-container>
</template>

<script>
	import { mapGetters, mapActions } from "vuex"
	export default{
		data() {
			return {
				menuRouter: true,
			}
		},
		computed: {
			...mapGetters(['newrouter'])
		},
		methods: {
			...mapActions(['Logout']),
			logout(){
				this.Logout().then(() => {
					// this.$router.push({ path: '/'})	
				})
			}
		},
		destroyed(){
			this.$message({
                    showClose: true,
                    message: '退出成功',
                    type: 'success'
            })
        }
	}
</script>

<style lang="scss" scoped>
	.logout{
		background-color: #545c64;
		line-height: 61px;
        width: 100%;
        color:#fff;
        cursor: pointer;
	}
</style>