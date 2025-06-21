
var projectName = '基于web的智慧养老平台';
/**
 * 轮播图配置
 */
var swiper = {
	// 设定轮播容器宽度，支持像素和百分比
	width: '100%',
	height: '400px',
	// hover（悬停显示）
	// always（始终显示）
	// none（始终不显示）
	arrow: 'none',
	// default（左右切换）
	// updown（上下切换）
	// fade（渐隐渐显切换）
	anim: 'default',
	// 自动切换的时间间隔
	// 默认3000
	interval: 2000,
	// 指示器位置
	// inside（容器内部）
	// outside（容器外部）
	// none（不显示）
	indicator: 'outside'
}

/**
 * 个人中心菜单
 */
var centerMenu = [{
	name: '个人中心',
	url: '../' + localStorage.getItem('userTable') + '/center.html'
}, 
{
        name: '我的收藏',
        url: '../storeup/list.html'
}
]


var indexNav = [

{
	name: '活动信息',
	url: './pages/huodongxinxi/list.html'
}, 
{
	name: '便利店',
	url: './pages/bianlidian/list.html'
}, 
{
	name: '劳工',
	url: './pages/laogong/list.html'
}, 
{
	name: '服务项目',
	url: './pages/fuwuxiangmu/list.html'
}, 

]

var adminurl =  "http://localhost:8080/springcloud8w982/admin/dist/index.html";

var cartFlag = false

var chatFlag = false




var menu = [{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-paint","buttons":["新增","查看","修改","删除","添加亲属","积分增加","礼品发放"],"menu":"老人","menuJump":"列表","tableName":"laoren"}],"menu":"老人管理"},{"child":[{"appFrontIcon":"cuIcon-explore","buttons":["查看","修改","删除"],"menu":"亲属","menuJump":"列表","tableName":"qinshu"}],"menu":"亲属管理"},{"child":[{"appFrontIcon":"cuIcon-taxi","buttons":["新增","查看","修改","删除"],"menu":"每日健康","menuJump":"列表","tableName":"meirijiankang"}],"menu":"每日健康管理"},{"child":[{"appFrontIcon":"cuIcon-skin","buttons":["新增","查看","修改","删除"],"menu":"既往病史","menuJump":"列表","tableName":"jiwangbingshi"}],"menu":"既往病史管理"},{"child":[{"appFrontIcon":"cuIcon-paint","buttons":["新增","查看","修改","删除"],"menu":"活动分类","menuJump":"列表","tableName":"huodongfenlei"}],"menu":"活动分类管理"},{"child":[{"appFrontIcon":"cuIcon-form","buttons":["新增","查看","修改","删除"],"menu":"活动信息","menuJump":"列表","tableName":"huodongxinxi"}],"menu":"活动信息管理"},{"child":[{"appFrontIcon":"cuIcon-attentionfavor","buttons":["新增","查看","修改","删除"],"menu":"商品类型","menuJump":"列表","tableName":"shangpinleixing"}],"menu":"商品类型管理"},{"child":[{"appFrontIcon":"cuIcon-qrcode","buttons":["新增","查看","修改","删除","进货"],"menu":"便利店","menuJump":"列表","tableName":"bianlidian"}],"menu":"便利店管理"},{"child":[{"appFrontIcon":"cuIcon-newshot","buttons":["查看","修改","删除"],"menu":"商品进货","menuJump":"列表","tableName":"shangpinjinhuo"}],"menu":"商品进货管理"},{"child":[{"appFrontIcon":"cuIcon-discover","buttons":["查看","修改","删除","审核"],"menu":"商品购买","menuJump":"列表","tableName":"shangpingoumai"}],"menu":"商品购买管理"},{"child":[{"appFrontIcon":"cuIcon-similar","buttons":["新增","查看","修改","删除","查看评论"],"menu":"劳工","menuJump":"列表","tableName":"laogong"}],"menu":"劳工管理"},{"child":[{"appFrontIcon":"cuIcon-addressbook","buttons":["新增","查看","修改","删除"],"menu":"服务类型","menuJump":"列表","tableName":"fuwuleixing"}],"menu":"服务类型管理"},{"child":[{"appFrontIcon":"cuIcon-skin","buttons":["新增","查看","修改","删除"],"menu":"服务项目","menuJump":"列表","tableName":"fuwuxiangmu"}],"menu":"服务项目管理"},{"child":[{"appFrontIcon":"cuIcon-explore","buttons":["查看","修改","删除","报表","审核"],"menu":"服务购买","menuJump":"列表","tableName":"fuwugoumai"}],"menu":"服务购买管理"},{"child":[{"appFrontIcon":"cuIcon-explore","buttons":["查看","修改","删除","审核"],"menu":"紧急求助","menuJump":"列表","tableName":"jinjiqiuzhu"}],"menu":"紧急求助管理"},{"child":[{"appFrontIcon":"cuIcon-form","buttons":["查看","修改","删除"],"menu":"礼品发放","menuJump":"列表","tableName":"lipinfafang"}],"menu":"礼品发放管理"},{"child":[{"appFrontIcon":"cuIcon-link","buttons":["查看","修改","删除"],"menu":"积分增加","menuJump":"列表","tableName":"jifenzengjia"}],"menu":"积分增加管理"},{"child":[{"appFrontIcon":"cuIcon-brand","buttons":["查看","修改","删除"],"menu":"轮播图管理","tableName":"config"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-keyboard","buttons":["查看"],"menu":"活动信息列表","menuJump":"列表","tableName":"huodongxinxi"}],"menu":"活动信息模块"},{"child":[{"appFrontIcon":"cuIcon-medal","buttons":["查看","购买"],"menu":"便利店列表","menuJump":"列表","tableName":"bianlidian"}],"menu":"便利店模块"},{"child":[{"appFrontIcon":"cuIcon-medal","buttons":["查看"],"menu":"劳工列表","menuJump":"列表","tableName":"laogong"}],"menu":"劳工模块"},{"child":[{"appFrontIcon":"cuIcon-vip","buttons":["查看","服务购买"],"menu":"服务项目列表","menuJump":"列表","tableName":"fuwuxiangmu"}],"menu":"服务项目模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-explore","buttons":["新增","查看","修改","删除"],"menu":"亲属","menuJump":"列表","tableName":"qinshu"}],"menu":"亲属管理"},{"child":[{"appFrontIcon":"cuIcon-taxi","buttons":["查看"],"menu":"每日健康","menuJump":"列表","tableName":"meirijiankang"}],"menu":"每日健康管理"},{"child":[{"appFrontIcon":"cuIcon-skin","buttons":["查看"],"menu":"既往病史","menuJump":"列表","tableName":"jiwangbingshi"}],"menu":"既往病史管理"},{"child":[{"appFrontIcon":"cuIcon-discover","buttons":["查看","删除","支付"],"menu":"商品购买","menuJump":"列表","tableName":"shangpingoumai"}],"menu":"商品购买管理"},{"child":[{"appFrontIcon":"cuIcon-explore","buttons":["查看","删除","支付"],"menu":"服务购买","menuJump":"列表","tableName":"fuwugoumai"}],"menu":"服务购买管理"},{"child":[{"appFrontIcon":"cuIcon-explore","buttons":["新增","查看","删除"],"menu":"紧急求助","menuJump":"列表","tableName":"jinjiqiuzhu"}],"menu":"紧急求助管理"},{"child":[{"appFrontIcon":"cuIcon-form","buttons":["查看"],"menu":"礼品发放","menuJump":"列表","tableName":"lipinfafang"}],"menu":"礼品发放管理"},{"child":[{"appFrontIcon":"cuIcon-link","buttons":["查看"],"menu":"积分增加","menuJump":"列表","tableName":"jifenzengjia"}],"menu":"积分增加管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-keyboard","buttons":["查看"],"menu":"活动信息列表","menuJump":"列表","tableName":"huodongxinxi"}],"menu":"活动信息模块"},{"child":[{"appFrontIcon":"cuIcon-medal","buttons":["查看","购买"],"menu":"便利店列表","menuJump":"列表","tableName":"bianlidian"}],"menu":"便利店模块"},{"child":[{"appFrontIcon":"cuIcon-medal","buttons":["查看"],"menu":"劳工列表","menuJump":"列表","tableName":"laogong"}],"menu":"劳工模块"},{"child":[{"appFrontIcon":"cuIcon-vip","buttons":["查看","服务购买"],"menu":"服务项目列表","menuJump":"列表","tableName":"fuwuxiangmu"}],"menu":"服务项目模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"老人","tableName":"laoren"}]


var isAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].backMenu.length;j++){
                for(let k=0;k<menus[i].backMenu[j].child.length;k++){
                    if(tableName==menus[i].backMenu[j].child[k].tableName){
                        let buttons = menus[i].backMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}

var isFrontAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].frontMenu.length;j++){
                for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
                    if(tableName==menus[i].frontMenu[j].child[k].tableName){
                        let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}
