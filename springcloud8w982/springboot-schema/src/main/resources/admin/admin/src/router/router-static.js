import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import huodongfenlei from '@/views/modules/huodongfenlei/list'
    import qinshu from '@/views/modules/qinshu/list'
    import meirijiankang from '@/views/modules/meirijiankang/list'
    import laogong from '@/views/modules/laogong/list'
    import fuwuxiangmu from '@/views/modules/fuwuxiangmu/list'
    import huodongxinxi from '@/views/modules/huodongxinxi/list'
    import fuwuleixing from '@/views/modules/fuwuleixing/list'
    import jinjiqiuzhu from '@/views/modules/jinjiqiuzhu/list'
    import lipinfafang from '@/views/modules/lipinfafang/list'
    import shangpinjinhuo from '@/views/modules/shangpinjinhuo/list'
    import fuwugoumai from '@/views/modules/fuwugoumai/list'
    import bianlidian from '@/views/modules/bianlidian/list'
    import discusslaogong from '@/views/modules/discusslaogong/list'
    import shangpingoumai from '@/views/modules/shangpingoumai/list'
    import laoren from '@/views/modules/laoren/list'
    import jiwangbingshi from '@/views/modules/jiwangbingshi/list'
    import shangpinleixing from '@/views/modules/shangpinleixing/list'
    import config from '@/views/modules/config/list'
    import jifenzengjia from '@/views/modules/jifenzengjia/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/huodongfenlei',
        name: '活动分类',
        component: huodongfenlei
      }
      ,{
	path: '/qinshu',
        name: '亲属',
        component: qinshu
      }
      ,{
	path: '/meirijiankang',
        name: '每日健康',
        component: meirijiankang
      }
      ,{
	path: '/laogong',
        name: '劳工',
        component: laogong
      }
      ,{
	path: '/fuwuxiangmu',
        name: '服务项目',
        component: fuwuxiangmu
      }
      ,{
	path: '/huodongxinxi',
        name: '活动信息',
        component: huodongxinxi
      }
      ,{
	path: '/fuwuleixing',
        name: '服务类型',
        component: fuwuleixing
      }
      ,{
	path: '/jinjiqiuzhu',
        name: '紧急求助',
        component: jinjiqiuzhu
      }
      ,{
	path: '/lipinfafang',
        name: '礼品发放',
        component: lipinfafang
      }
      ,{
	path: '/shangpinjinhuo',
        name: '商品进货',
        component: shangpinjinhuo
      }
      ,{
	path: '/fuwugoumai',
        name: '服务购买',
        component: fuwugoumai
      }
      ,{
	path: '/bianlidian',
        name: '便利店',
        component: bianlidian
      }
      ,{
	path: '/discusslaogong',
        name: '劳工评论',
        component: discusslaogong
      }
      ,{
	path: '/shangpingoumai',
        name: '商品购买',
        component: shangpingoumai
      }
      ,{
	path: '/laoren',
        name: '老人',
        component: laoren
      }
      ,{
	path: '/jiwangbingshi',
        name: '既往病史',
        component: jiwangbingshi
      }
      ,{
	path: '/shangpinleixing',
        name: '商品类型',
        component: shangpinleixing
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
      ,{
	path: '/jifenzengjia',
        name: '积分增加',
        component: jifenzengjia
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
