<template>
	<div class="left-nav">
		<ul>
	        <li>
	            <router-link to='/' class='link'>
	            	<i class="icon iconfont icon-wodezichan"></i>
	            	<div>收银</div>
	        	</router-link> 
	        </li>
	        <li>
	        	<router-link to='/hello' class='link'>
	        		<i class="icon iconfont icon-dianpu"></i>
	                <div>店铺</div>
	        	</router-link> 
	        </li>
	        <li>
	            <i class="icon iconfont icon-hanbao"></i>
	            <div>商品</div>
	        </li>
	         <li>
	            <i class="icon iconfont icon-huiyuanqia"></i>
	            <div>会员</div>
	        </li>
	        <li>
	            <i class="icon iconfont icon-tongji"></i>
	            <div>统计</div>
	        </li>
	    </ul>
	</div>
</template>

<script>
	export default {
		name: "leftNav"
	}
</script>

<style>
	.left-nav{
		float: left;
		width: 7%;
		height: 100%;
		color: #fff;
		font-size: 14px;
		text-align: center;
		background-color: #1D8ce0;  
	}
	.iconfont{
       font-size:46px;
    }
    .left-nav ul{
        padding:0px;
        margin: 0px;
    }
    .left-nav li{
        list-style: none;
        border-bottom:1px solid #20a0ff;
        padding:10px;
        cursor: pointer;
        
    }
    .left-nav li i{
    	
    }
    .link{
    	text-decoration: none;
    	color: #fff;
    }
</style>