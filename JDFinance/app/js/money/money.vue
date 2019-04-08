<template>
	<panel title="理财精选" class="panel">
		<section class="content">
			<dl class="item" v-for="item in recommendList" :key="item.title">
				<dt>{{item.title}}<span>{{item.sub}}</span></dt>
				<dd>{{item.rate}}</dd>
				<dd>{{item.text}}</dd>
			</dl>
		</section>
	</panel>
</template>

<script>
	import Panel from "../core/panel"
	export default {
		components: {
			Panel
		},
		data() {
			return {
				recommendList:[{
	                title: "定期理财",
	                sub: "90天可质押",
	                rate: "5.60%",
	                text: "历史年化结算利率",
	            }, {
	                title: "固收理财",
	                sub: "理财首选",
	                rate: "4.22%",
	                text: "综合年化收益率",
	            }, {
	                title: "基智账户",
	                sub: "组合投资",
	                rate: "5%-10%",
	                text: "止盈年化收益率",
	            }, {
	                title: "小白基金",
	                sub: "天天赚钱",
	                rate: "4.27%",
	                text: "7日年化收益率",
	            }],
			}
		}
	}
</script>

<style lang="scss" scoped>
@import "../../css/element.scss";
	.content{
		@include list(row);
		justify-content: space-around;
		box-sizing: border-box;
		position: relative;
		&:after{
			content: '';
			width: 100%;
			height: 1px;
			display: block;
			position: absolute;
			border-top: 2px solid #eee;
			box-sizing: border-box;
			top: 50%;
		}
		.item{
			position: relative;
			width: 50%;
			padding: 34px 20px;
			box-sizing: border-box;
			&:after{
				content: '';
				width: 1px;
				height: 136px;
				display: block;
				position: absolute;
				top: 50%;
				right: 0;
				margin-top: -68px;
				border-right: 2px solid #eee;
			}
			&:nth-child(2n){
				&:after{
					display: none;
				}
			}
			dt{
				font-size: 30px;
				line-height: 42px;
				color: #333;
				span{
					font-size: 22px;
					color: #ff5155;
					border: 1px solid #ff5155;
					border-radius: 2px;
					padding: 0 8px;
		            vertical-align: 1px;
		            margin-left: 2px;
				}
			}
			dd{
				&:nth-child(2){
					font-weight: 700;
		            font-size: 44px;
		            height: 58px;
		            line-height: 58px;
		            color: #FF5155;
		            white-space: nowrap;
		            text-overflow: ellipsis;
		            overflow: hidden;
				}
				&:nth-child(3){
					font-size: 24px;
		            height: 34px;
		            line-height: 34px;
		            color: #999;
		            white-space: nowrap;
		            text-overflow: ellipsis;
		            overflow: hidden;
				}
			}
		}
	}
</style>