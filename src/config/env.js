
// 配置编译环境和线上环境之间的切换
// baseUrl 域名地址
// routerMode 路由模式
// imgBaseUrl 图片所在服务器域名地址，cdn

let baseUrl;
let routerMode;
let imgBaseUrl;

if (process.env.NODE_ENV == 'development') {

} else if(process.env.NODE_ENV == 'production') {

}

export {
	baseUrl,
	routerMode,
	imgBaseUrl
}