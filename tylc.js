/*
统一绿茶小程序  

cron 10 8,10 * * *  tylcck.js

========= 青龙--配置文件--贴心复制区域  ========= 
# 统一绿茶小程序
export tylcck='token' 


多账号用 换行 或 @ 分割

*/


const utils = require("yml2213-utils");
const $ = new Env("统一绿茶小程序");   // 1.名字改了
const ckName = "tylcck";           // 2. 英文名字改一下
//-------------------- 一般不动变量区域 -------------------------------------      // 3. 不用管 
const notify = $.isNode() ? require("./sendNotify") : ""
const Notify = 1		 //0为关闭通知,1为打开通知,默认为1
let envSplitor = ["@", "\n"];
let ck = msg = ''
let host, hostname
let userCookie = process.env[ckName];
let userList = []
let userIdx = 0
let userCount = 0
let i = []
//---------------------- 自定义变量区域 -----------------------------------      // 4. 要杀变量自己加

let app_id = 14
let text = sign = ''
//---------------------------------------------------------



  


// 6. 一整个class   就是完整的任务 
class UserInfo {
	constructor(str) { 			// 7. 构造函数  处理变量等    用 this 挂在对象上
		this.index = ++userIdx
		this.ck = str.split('&')

		this.xs = this.ck[0]
		this.xr = this.ck[1]
		this.salt = 'FR*r!isE5W'
		this.id = app_id
		this.ts = utils.ts13()
		this.host = "tysc.tuoketech.com"
		this.hostname = "https://" + this.host
		// this.bd = "{"articleId":12592}"

		this.tylcsbs_headers = {
			"Host": this.host,
			"token": this.ck,
			"content-type": "application/json",
			"app-platform-id": "1",
			"user-agent": "Mozilla/5.0 (Linux; Android 7.1.2; Pixel XL Build/NZH54D; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/86.0.4240.99 XWEB/4375 MMWEBSDK/20220903 Mobile Safari/537.36 MMWEBID/4304 MicroMessenger/8.0.28.2240(0x28001C35) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android"
		};

		this.tylcdh_headers = {
			"Host": this.host,
			"token": this.ck,
			"content-type": "application/json",
			"app-platform-id": "1",
			"user-agent": "Mozilla/5.0 (Linux; Android 7.1.2; Pixel XL Build/NZH54D; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/86.0.4240.99 XWEB/4375 MMWEBSDK/20220903 Mobile Safari/537.36 MMWEBID/4304 MicroMessenger/8.0.28.2240(0x28001C35) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android"
		}





	}


	// 8. 每个函数实现一个功能
	async tylcsbs(name) { //   收步数
	    try {                 
		    let options = {   //9. 就是组成请求的数据
			    method: "Post",
			    url: `${this.hostname}/unit-one/health-run/steps/getTodaySteps`,
			    headers: this.tylcsbs_headers,
                body: '{}'
		    }
		    // console.log(options);
		    let result = await httpRequest(name, options);  // 10. 请求返回 result
            // console.log(result);
            if (result.code == "20014") {
                DoubleLog(`账号[${this.index}]  状态: ${result.msg}  `)
             } else if (result.code == "20012") {
                DoubleLog(`账号[${this.index}]   ${result.msg} 个`)
			 } else if (result.code != "20012") {
                console.log(result)
            }
    	} catch (error) {
		    console.log(error)
	    }


	}




	async tylcdh(name) { //   兑换20e卡
	    try {                 
		    let options = {   //9. 就是组成请求的数据
			    method: "Post",
			    url: `${this.hostname}/unit-one/prize/join`,
			    headers: this.tylcdh_headers,
                body: '{"activityId":"93177229789523968","addressId":""}'
		    }
		    // console.log(options);
		    let result = await httpRequest(name, options);  // 10. 请求返回 result
            // console.log(result);
            if (result.code == "30001") {
                DoubleLog(`账号[${this.index}]  状态: ${result.msg}  `)
			 } else if (result.code != "30001") {
                console.log(result)
            }
    	} catch (error) {
		    console.log(error)
	    }


	}


	async tylcshybs(name) { //   收好友步数
	    try {                 
		    let options = {   //9. 就是组成请求的数据
			    method: "Post",
			    url: `${this.hostname}/unit-one/groupStepsConfig/stealSteps`,
			    headers: this.tylcdh_headers,
                body: '{"wxOpenId":"oBk224mWlzpHPkQ7ZVEv1rktweqM"}'
		    }
		    // console.log(options);
		    let result = await httpRequest(name, options);  // 10. 请求返回 result
            // console.log(result);
            if (result.code == "0") {
                DoubleLog(`账号[${this.index}]  获得步数: ${result.msg}  `)
			 } else if (result.code == "502") {
                DoubleLog(`账号[${this.index}]  状态: ${result.msg}  `)
			}else if (result.code == "503") {
                DoubleLog(`账号[${this.index}]  状态: ${result.msg}  `)
                await this.tylcyhy(name)
                
            }
    	} catch (error) {
		    console.log(error)
	    }


	}


	async tylcyhy(name) { //   邀好友
	    try {                 
		    let options = {   //9. 就是组成请求的数据
			    method: "Post",
			    url: `${this.hostname}/unit-one/groupStepsConfig/addStealSteps`,
			    headers: this.tylcdh_headers,
                body: '{}'
		    }
		    // console.log(options);
		    let result = await httpRequest(name, options);  // 10. 请求返回 result
            // console.log(result);
            if (result.code == "0") {
				DoubleLog(`账号[${this.index}]  状态: ${result.msg} 成功邀好友 `)
			} else if (result.code == "20018") {
                DoubleLog(`账号[${this.index}]  状态: ${result.msg}  `)
            }
    	} catch (error) {
		    console.log(error)
	    }


	}






 


	

	









	get_sign(path) {
		let _data = `${path}&&${this.xs}&&${this.xr}&&${this.ts}&&${this.salt}&&${this.id}`;
		// console.log('_data: ', _data);
		sign = utils.SHA256_Encrypt(_data)
		return sign
	}


}


!(async () => {
	if (!(await checkEnv())) return;
	if (userList.length > 0) {
		await start();
	}
	await SendMsg(msg);
})()
	.catch((e) => console.log(e))
	.finally(() => $.done())



// 下面的不用管了   全默认就行   记得装 yml2213-utils 依赖
// #region ********************************************************  固定代码  ********************************************************


async function start() {    // 5. 开始任务区域   自己按照格式加

	console.log('\n================== 开始兑换20e卡==================\n')
	taskall = []
	for (let user of userList) {
		taskall.push(user.tylcdh('开始兑换20e卡'))
	}
	await Promise.all(taskall)
	await wait(0)

	console.log('\n================== 开始收步数==================\n')
	taskall = []
	for (let user of userList) {
		taskall.push(user.tylcsbs('开始收步数'))
	}
	await Promise.all(taskall)
	await wait(6*10)

	taskall = []
	for (let user of userList) {
		taskall.push(user.tylcsbs('开始收步数'))
	}
	await Promise.all(taskall)
	await wait(6*10)


	console.log('\n================== 收好友步数第一次==================\n')
	taskall = []
	for (let user of userList) {
		taskall.push(user.tylcshybs('收好友步数'))
	}
	await Promise.all(taskall)
	await wait(6*10)
	
	console.log('\n================== 收好友步数第二次==================\n')
	taskall = []
	for (let user of userList) {
		taskall.push(user.tylcshybs('收好友步数'))
	}
	await Promise.all(taskall)
	await wait(6*10)

	console.log('\n================== 收好友步数第三次==================\n')
	taskall = []
	for (let user of userList) {
		taskall.push(user.tylcshybs('收好友步数'))
	}
	await Promise.all(taskall)
	await wait(6*10)

	taskall = []
	for (let user of userList) {
		taskall.push(user.tylcshybs('收好友步数'))
	}
	await Promise.all(taskall)
	await wait(6*10)







    
	

}



 
  
// 变量检查与处理
async function checkEnv() {
	if (userCookie) {
		// console.log(userCookie);
		let e = envSplitor[0];
		for (let o of envSplitor)
			if (userCookie.indexOf(o) > -1) {
				e = o;
				break;
			}
		for (let n of userCookie.split(e)) n && userList.push(new UserInfo(n));
		userCount = userList.length;
	} else {
		console.log("未找到CK");
		return;
	}
	return console.log(`共找到${userCount}个账号`), !0;
}



// =========================================== 不懂不要动 =========================================================
function Env(name, e) { class s { constructor(name) { this.env = name; } } return new (class { constructor(name) { (this.name = name), (this.logs = []), (this.startTime = new Date().getTime()), this.log(`\n🔔${this.name}, 开始!`); } isNode() { return "undefined" != typeof module && !!module.exports; } log(...name) { name.length > 0 && (this.logs = [...this.logs, ...name]), console.log(name.join(this.logSeparator)); } done() { const e = new Date().getTime(), s = (e - this.startTime) / 1e3; this.log(`\n🔔${this.name}, 结束! 🕛 ${s} 秒`); } })(name, e); } async function httpRequest(name, options) { if (!name) { name = /function\s*(\w*)/i.exec(arguments.callee.toString())[1]; } try { let result = await utils.httpRequest(name, options); if (result) { return result; } { DoubleLog(`未知错误(1)`); } } catch (error) { console.log(error); } } async function SendMsg(message) { if (!message) return; if (Notify > 0) { if ($.isNode()) { var notify = require("./sendNotify"); await notify.sendNotify($.name, message); } else { console.log($.name, "", message); } } else { console.log(message); } } function wait(n) { return new Promise(function (resolve) { setTimeout(resolve, n * 1000); }); } function DoubleLog(data) { console.log(`    ${data}`); msg += `\n    ${data}`; }

