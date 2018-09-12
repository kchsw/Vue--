<template>
	<div class="pos">
		<el-row >
			
			<!-- 订单列表 -->
            <el-col :span='8' id='pos-order'>
            	<el-tabs v-model="activeName" type="card">
				    <el-tab-pane label="点餐" name="first">
				    	<el-table
						    :data="tableData"
						    stripe
						    style="width: 100%">
						    <el-table-column
						      prop="goodsName"
						      label="商品名称"
						      >
						    </el-table-column>
						    <el-table-column
						      prop="count"
						      label="数量"
						      width="50"
						      >
						    </el-table-column>
						    <el-table-column
						      prop="price"
						      label="金额"
						      width="70">
						    </el-table-column>
						    <el-table-column
						      fixed="right"
						      label="操作"
						      width="100"
						      >
						      <template slot-scope="scope">
						        <el-button type="text" size="small" @click="reduceOrderList(scope.row)">减少</el-button>
						        <el-button type="text" size="small" @click="addOrderList(scope.row)">增加</el-button>
						      </template>
						    </el-table-column>
						</el-table>
						<div class='total'>
							<strong>总计:</strong> <span class="total-span">{{totalCount}} 件</span>&nbsp;&nbsp;
							<span class="o-price total-span">{{totalMoney}} 元</span>
						</div>
						<div class="btn-row">
							<el-button type="warning" plain>挂单</el-button>
							<el-button type="danger" @click='delAllGoods' plain>删除</el-button>
							<el-button type="success" @click='checkout' plain>结账</el-button>
						</div>
				    </el-tab-pane>
				    <el-tab-pane label="挂单" name="second">
				    	<el-table
						    :data="tableData1"
						    stripe
						    style="width: 100%">
						    <el-table-column
						      prop="goodsName"
						      label="商品名称"
						      >
						    </el-table-column>
						    <el-table-column
						      prop="count"
						      label="数量"
						      width="50"
						      >
						    </el-table-column>
						    <el-table-column
						      prop="price"
						      label="金额"
						      width="70">
						    </el-table-column>
						    <el-table-column
						      fixed="right"
						      label="操作"
						      width="100"
						      >
						      <template slot-scope="scope">
						        <el-button type="text" size="small">删除</el-button>
						        <el-button type="text" size="small">增加</el-button>
						      </template>
						    </el-table-column>
						</el-table>
						<div class='total'>
							<strong>总计: </strong> <span class="total-span">{{totalCount1}} 件</span>&nbsp;&nbsp;
							<span class="o-price total-span">{{totalMoney2}} 元</span>
						</div>
						<div class="btn-row">
							<el-button type="danger" plain>删除</el-button>
							<el-button type="success" plain>结账</el-button>
						</div>
				    </el-tab-pane>
				    <el-tab-pane label="外卖" name="third">
				    	<el-table
						    :data="tableData2"
						    stripe
						    style="width: 100%">
						    <el-table-column
						      prop="goodsName"
						      label="商品名称"
						      >
						    </el-table-column>
						    <el-table-column
						      prop="count"
						      label="数量"
						      width="50"
						      >
						    </el-table-column>
						    <el-table-column
						      prop="price"
						      label="金额"
						      width="70">
						    </el-table-column>
						    <el-table-column
						      fixed="right"
						      label="操作"
						      width="100"
						      >
						      <template slot-scope="scope">
						        <el-button type="text" size="small">删除</el-button>
						        <el-button type="text" size="small">增加</el-button>
						      </template>
						    </el-table-column>
						</el-table>
						<div class='total'>
							<strong>总计:</strong> <span class="total-span">{{totalCount2}} 件</span>&nbsp;&nbsp;
							<span class="o-price total-span">{{totalMoney2}} 元</span>
						</div>
						<div class="btn-row">
							<el-button type="warning" plain>挂单</el-button>
							<el-button type="danger" plain>删除</el-button>
							<el-button type="success" plain>结账</el-button>
						</div>
				    </el-tab-pane>
				</el-tabs>
            </el-col>
            <!--商品展示-->
            <el-col :span="16">
            	<div class="hot-goods">
            		<!-- <h4>畅销商品</h4> -->
            		<div class="title">热销单品</div>
            		<div class="hot-goods-list">
            			
            			<el-row>
            				<el-tag type="" v-for="goods in hotGoods" :key="goods.goodsId" v-on:click.native="addOrderList(goods)">{{goods.goodsName}} <span class="o-price">￥{{goods.price}}元</span></el-tag>         		
            			</el-row>
            		</div>
            	</div>

            	<div class="goods-type">
				    <el-tabs v-model="activeName1" type="card">
				        <el-tab-pane label="汉堡" name="first">
				            <el-row>
							  <el-col :span="4" v-for="goods in hamburgerGoods" :key="goods.goodsId" :offset="1" v-on:click.native="addOrderList(goods)" class='col-style'>
							    <el-card :body-style="{ padding: '0px',cursor: 'pointer'}">
							      <img :src="goods.goodsImg" class="image">
							        <div class="goods-details">
								
								        <span>{{goods.goodsName}}</span><br>
								        <span class="o-price">￥{{goods.price}}元</span>
								    </div>	
							    </el-card>
							  </el-col>
							</el-row>
				        </el-tab-pane>
				        <el-tab-pane label="小食" name="second">
				        	<el-row>
							  <el-col :span="4" v-for="goods in snackGoods" :key="goods.goodsId" :offset="1" v-on:click.native="addOrderList(goods)" class='col-style'>
							    <el-card :body-style="{ padding: '0px',cursor: 'pointer'}">
							      <img :src="goods.goodsImg" class="image">
							        <div class="goods-details">
								
								        <span>{{goods.goodsName}}</span><br>
								        <span class="o-price">￥{{goods.price}}元</span>
								    </div>	
							    </el-card>
							  </el-col>
							</el-row>
				        
				        </el-tab-pane>
				        <el-tab-pane label="饮料" name="third">
				            <el-row>
							  <el-col :span="4" v-for="goods in drinkGoods" :key="goods.goodsId" :offset="1" v-on:click.native="addOrderList(goods)" class='col-style'>
							    <el-card :body-style="{ padding: '0px',cursor: 'pointer'}">
							      <img :src="goods.goodsImg" class="image">
							        <div class="goods-details">
								
								        <span>{{goods.goodsName}}</span><br>
								        <span class="o-price">￥{{goods.price}}元</span>
								    </div>	
							    </el-card>
							  </el-col>
							</el-row>
				        </el-tab-pane>
				        <el-tab-pane label="套餐" name="fourth">
				            <el-row>
							  <el-col :span="4" v-for="goods in setmealGoods" :key="goods.goodsId" :offset="1" v-on:click.native="addOrderList(goods)" class='col-style'>
							    <el-card :body-style="{ padding: '0px',cursor: 'pointer'}">
							      <img :src="goods.goodsImg" class="image">
							        <div class="goods-details">
								
								        <span>{{goods.goodsName}}</span><br>
								        <span class="o-price">￥{{goods.price}}元</span>
								    </div>	
							    </el-card>
							  </el-col>
							</el-row>
				        </el-tab-pane>
				    </el-tabs>
				</div>
            </el-col>
        </el-row>
	</div>
</template>


<script>
    import axios from 'axios'
	export default {
		name: "Pos",
		data(){
			return{
				tableData:[],
				tableData1: [],
				tableData2: [],
				hotGoods:[],
			    hamburgerGoods:[],
			    snackGoods:[],
			    drinkGoods:[],
			    setmealGoods:[],
				activeName: 'first',
				activeName1: 'first',
				totalCount:0,
				totalMoney:0
			}
		},
		methods:{
			//添加订单列表方法
			addOrderList(goods){
                let isHave = false;
                for (let i=0; i<this.tableData.length;i++){	               
	                if(this.tableData[i].goodsId==goods.goodsId){
	                    isHave=true; //存在
	                }
	            }

	            if(isHave){
	            	let arr = this.tableData.filter(o=>o.goodsId == goods.goodsId);
	            	arr[0].count++;
	            }else{
	            	let newGoods = {goodsId:goods.goodsId,goodsName:goods.goodsName,price:goods.price,count:1}
	            	this.tableData.push(newGoods)
	            }

	            this.getAllMoney();
			},
			reduceOrderList(goods){
				let arr = this.tableData.filter(o=>o.goodsId == goods.goodsId);
				if(arr[0].count==1){
	            	this.tableData=this.tableData.filter(o => o.goodsId !=goods.goodsId);
				}else{
					arr[0].count--;
				}
				this.getAllMoney();
			},
			getAllMoney(){
			    this.totalCount=0;
			    this.totalMoney=0;
			    if(this.tableData){
			        this.tableData.forEach((element) => {
				        this.totalCount+=element.count;
				        this.totalMoney+=(element.price*element.count);  
			        });
			    }
			},
			delAllGoods() {
			    this.tableData = [];
			    this.totalCount = 0;
			    this.totalMoney = 0;
			},
			checkout() {
			    if (this.totalCount!=0) {
				        this.tableData = [];
				        this.totalCount = 0;
				        this.totalMoney = 0;
				        this.$message({
				            message: '结账成功，感谢你又为店里出了一份力!',
				            type: 'success'
			        });
				    }else{
				        this.$message.error('不能空结。老板了解你急切的心情！');
				    }
			},
		},
		mounted(){
			const orderHeight = document.body.clientHeight;
			document.getElementById('pos-order').style.height = orderHeight + 'px';
		},
		created(){
			axios.get('https://www.easy-mock.com/mock/5b8b30dbf032f03c5e71de7f/kuaican/oftenGoods')
		      .then(response=>{
		         console.log(response);
		         this.hotGoods=response.data;
		      })
		      .catch(error=>{
		          console.log(error);
		          alert('网络错误，不能访问');
		      })

		    axios.get('https://www.easy-mock.com/mock/5b8b30dbf032f03c5e71de7f/kuaican/typeGoods')
		      .then(response=>{
		         console.log(response);
		         this.hamburgerGoods=response.data[0];
		         this.snackGoods=response.data[1];
		         this.drinkGoods=response.data[2];
		         this.setmealGoods=response.data[3];
		      })
		      .catch(error=>{
		          console.log(error);
		          alert('网络错误，不能访问');
		      })
		}
	}
</script>

<style scoped>
.pos{
	height: 100%;
}
#pos-order{
	background-color: #f9fafc;
	border-right: 1px solid #c0ccda;

}
.btn-row{
	margin-top: 15px;
}
.title{
	border-bottom:1px solid #D3DCE6;
    background-color: #F9FAFC;
    text-align: left;
    padding: 9px 20px 9px;
    font-weight: bold;
}
.hot-goods{
	padding-bottom: 15px;
}
.hot-goods-list{
	padding: 10px;
}

.el-tag {
	float: left;
	font-size: 15px;
	font-weight: bold;
    margin: 10px 20px;
    cursor: pointer;
  }

.o-price{
	color: #ff4040d6;
}
.image{
	width: 100%;
}
.goods-details{
	padding: 5px;
	font-weight: bold;
	font-size: 14px;

}
.col-style{
	margin-bottom: 20px;
}
.total{
	background-color: #fff;
	padding: 10px;
	border-bottom: 1px solid #d3dce6;
}
.total-span{
	font-weight: bold;
}

</style>
