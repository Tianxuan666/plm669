/*
阅读赚金币

cron 10 8,10 * * *  ybydck191.js

========= 青龙--配置文件--贴心复制区域  ========= 
# 阅读赚金币
export ydzjbck=' x-session-id & x-request-id ' 


多账号用 换行 或 @ 分割

*/


const utils = require("yml2213-utils");
const $ = new Env("阅读赚金币");   // 1.名字改了
const ckName = "ydzjbck";           // 2. 英文名字改一下
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
        this.xq = this.ck[2]
		this.salt = 'FR*r!isE5W'
		this.id = app_id
		this.ts = utils.ts13()
		this.host = "wxr.jjyii.com"
		this.hostname = "http://" + this.host
		

		this.qz_headers = {
            "Host": this.host,
			"Connection": "keep-alive",
			"Content-Length": "73",
			"Accept": "application/json, text/javascript, */*; q=0.01",
			"a_h_n": "http%3A%2F%2Fl.msgxuji.cn%2F%3Fa%3Dgt%26goid%3Ditrb%26_v%3D5230/2042261b627048a29871db6682d0b569",
			"User-Agent": "Mozilla/5.0 (Linux; Android 12; V2199A Build/SP1A.210812.003; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/86.0.4240.99 XWEB/4375 MMWEBSDK/20220903 Mobile Safari/537.36 MMWEBID/4304 MicroMessenger/8.0.28.2240(0x28001C57) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64",
			"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
			"Origin": "http://l.msgxuji.cn",
			"X-Requested-With": "com.tencent.mm",
			"Referer": "http://l.msgxuji.cn/?a=gt&goid=itrb&_v=5230",
			"Accept-Encoding": "gzip, deflate",
			"Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
									
		};


        this.jb_headers = {
            "Host": this.host,
			"Connection": "keep-alive",
			"Content-Length": "7",
			"Accept": "application/json, text/javascript, */*; q=0.01",
			"a_h_n": "http%3A%2F%2Fl.pj4g4g.work%2F%3Fa%3Dgt%26goid%3Ditrb%26_v%3D5230/d3a3b55870144dc9b673f11938478093",
			"User-Agent": "Mozilla/5.0 (Linux; Android 12; V2199A Build/SP1A.210812.003; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/86.0.4240.99 XWEB/4375 MMWEBSDK/20220903 Mobile Safari/537.36 MMWEBID/4304 MicroMessenger/8.0.28.2240(0x28001C57) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64",
			"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
			"Origin": "http://l.pj4g4g.work",
			"X-Requested-With": "com.tencent.mm",
			"Referer": "http://l.pj4g4g.work/?a=gt&goid=itrb&_v=5230",
			"Accept-Encoding": "gzip, deflate",
			"Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
									
		};




	}


	// 8. 每个函数实现一个功能
	async ydzjbqz(name) { 
	    try {                 
		    let options = {   
			    method: "POST",
			    url: `${this.hostname}/r/get?v=9`,
			    headers: this.qz_headers,
                body: this.ck
		    }
		    // console.log(options);
		    let result = await httpRequest(name, options);  // 10. 请求返回 result
            // console.log(result);
            if (result.code=="0") {
                DoubleLog(`账号[${this.index}] 状态: 成功 `)
             } else {
                
                console.log(result)
            }
    	} catch (error) {
		    console.log(error)
	    }
	}




	async ydzjbjb(name) { 
	    try {                 
		    let options = {   
			    method: "Post",
			    url: `${this.hostname}/r/ck`,
			    headers: this.jb_headers,
                body: 't=quick'
		    }
		    // console.log(options);
		    let result = await httpRequest(name, options);  // 10. 请求返回 result
            // console.log(result);
            if (result.code=="0") {
                DoubleLog(`账号[${this.index}] 获得金币: ${result.data.gold} 个`)
             } else {
                
                console.log(result)
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


	console.log('\n================== 等待ing==================\n')
	taskall = []
	for (let user of userList) {
		taskall.push(user.ydzjbqz('等待ing'))
	}
	await Promise.all(taskall)
	await wait(1*15)

	console.log('\n================== 开始刷金币==================\n')
	taskall = []
	for (let user of userList) {
		taskall.push(user.ydzjbjb('开始刷金币'))
	}
	await Promise.all(taskall)
	await wait(1*8)

    console.log('\n================== 等待ing==================\n')
	taskall = []
	for (let user of userList) {
		taskall.push(user.ydzjbqz('等待ing'))
	}
	await Promise.all(taskall)
	await wait(1*19)

	console.log('\n================== 开始刷金币==================\n')
	taskall = []
	for (let user of userList) {
		taskall.push(user.ydzjbjb('开始刷金币'))
	}
	await Promise.all(taskall)
	await wait(1*9)

    console.log('\n================== 等待ing==================\n')
	taskall = []
	for (let user of userList) {
		taskall.push(user.ydzjbqz('等待ing'))
	}
	await Promise.all(taskall)
	await wait(1*11)

	console.log('\n================== 开始刷金币==================\n')
	taskall = []
	for (let user of userList) {
		taskall.push(user.ydzjbjb('开始刷金币'))
	}
	await Promise.all(taskall)
	await wait(1*21)

    console.log('\n================== 等待ing==================\n')
	taskall = []
	for (let user of userList) {
		taskall.push(user.ydzjbqz('等待ing'))
	}
	await Promise.all(taskall)
	await wait(1*12)

	console.log('\n================== 开始刷金币==================\n')
	taskall = []
	for (let user of userList) {
		taskall.push(user.ydzjbjb('开始刷金币'))
	}
	await Promise.all(taskall)
	await wait(1*24)

    console.log('\n================== 等待ing==================\n')
	taskall = []
	for (let user of userList) {
		taskall.push(user.ydzjbqz('等待ing'))
	}
	await Promise.all(taskall)
	await wait(1*11)

	console.log('\n================== 开始刷金币==================\n')
	taskall = []
	for (let user of userList) {
		taskall.push(user.ydzjbjb('开始刷金币'))
	}
	await Promise.all(taskall)
	await wait(1*13)

    console.log('\n================== 等待ing==================\n')
	taskall = []
	for (let user of userList) {
		taskall.push(user.ydzjbqz('等待ing'))
	}
	await Promise.all(taskall)
	await wait(1*12)

	console.log('\n================== 开始刷金币==================\n')
	taskall = []
	for (let user of userList) {
		taskall.push(user.ydzjbjb('开始刷金币'))
	}
	await Promise.all(taskall)
	await wait(1*18)

    console.log('\n================== 等待ing==================\n')
	taskall = []
	for (let user of userList) {
		taskall.push(user.ydzjbqz('等待ing'))
	}
	await Promise.all(taskall)
	await wait(1*14)

	console.log('\n================== 开始刷金币==================\n')
	taskall = []
	for (let user of userList) {
		taskall.push(user.ydzjbjb('开始刷金币'))
	}
	await Promise.all(taskall)
	await wait(1*16)

    console.log('\n================== 等待ing==================\n')
	taskall = []
	for (let user of userList) {
		taskall.push(user.ydzjbqz('等待ing'))
	}
	await Promise.all(taskall)
	await wait(1*20)

	console.log('\n================== 开始刷金币==================\n')
	taskall = []
	for (let user of userList) {
		taskall.push(user.ydzjbjb('开始刷金币'))
	}
	await Promise.all(taskall)
	await wait(1*21)

    console.log('\n================== 等待ing==================\n')
	taskall = []
	for (let user of userList) {
		taskall.push(user.ydzjbqz('等待ing'))
	}
	await Promise.all(taskall)
	await wait(1*35)

	console.log('\n================== 开始刷金币==================\n')
	taskall = []
	for (let user of userList) {
		taskall.push(user.ydzjbjb('开始刷金币'))
	}
	await Promise.all(taskall)
	await wait(1*22)

    console.log('\n================== 等待ing==================\n')
	taskall = []
	for (let user of userList) {
		taskall.push(user.ydzjbqz('等待ing'))
	}
	await Promise.all(taskall)
	await wait(1*27)

	console.log('\n================== 开始刷金币==================\n')
	taskall = []
	for (let user of userList) {
		taskall.push(user.ydzjbjb('开始刷金币'))
	}
	await Promise.all(taskall)
	await wait(1*26)




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

