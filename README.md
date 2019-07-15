## 1、 OAuth 2.0
* OAuth 2.0 是目前最流行的授权机制，用来授权第三方应用，获取用户数据。
* 简单说，OAuth 就是一种授权机制。数据的所有者告诉系统，同意授权第三方应用进入系统，获取这些数据。系统从而产生一个短期的进入令牌（token），用来代替密码，供第三方应用使用。

* 文档： https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/ （需翻墙）
* 教程： http://www.ruanyifeng.com/blog/2019/04/github-oauth.html

## 2、示例： 使用github登录你的网址
* 开发流程
	* A 网站让用户跳转到 GitHub。
	* GitHub 要求用户登录，
	* GitHub 询问"A 网站要求获得 xx 权限，你是否同意？"
	* 用户同意，GitHub 就会重定向回 A 网站，同时发回一个授权码。
	* A 网站使用授权码，向 GitHub 请求令牌。
	* GitHub 返回令牌.
	* A 网站使用令牌，向 GitHub 请求用户数据。

* 应用登记
	* 一个应用要求 OAuth 授权，必须先到对方网站登记，让对方知道是谁在请求。
	* https://github.com/settings/applications/new


	
	
