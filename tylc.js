/*
统一绿茶小程序            cron 22 8,12 * * *  tylc.js

export tylcck=" token @ token "  


多账号用 换行 或 @ 分割  
*/
const $ = Env('统一绿茶小程序')
const { MD5 } = require('crypto-js')
const notify = require('./sendNotify')


const envSplitor = ['\n', '&', '@']     //支持多种分割，但要保证变量里不存在这个字符
const ckNames = ['tylcck']                //支持多变量
//====================================================================================================
let DEFAULT_RETRY = 2           // 默认重试次数
//====================================================================================================




async function userTasks() {


    $.log('用户信息', { sp: true, console: false })  // 带分割的打印
    list = []
    for (let user of $.userList) {
        list.push(user.userInfo())
    } await Promise.all(list)
	await wait(5)
	
    	$.log('随机用户', { sp: true, console: false })  // 带分割的打印
    list = []
    for (let user of $.userList) {
        list.push(user.randomUser())
    } await Promise.all(list)
	await wait(5)

	$.log('收步数', { sp: true, console: false })  // 带分割的打印
    list = []
    for (let user of $.userList) {
        list.push(user.tylcsbs())
    } await Promise.all(list)
	await wait(5)
    
    $.log('收好友步数', { sp: true, console: false })  // 带分割的打印
    list = []
    for (let user of $.userList) {
        list.push(user.tylcshybs1())
    } await Promise.all(list)
	await wait(5)

    $.log('收好友步数', { sp: true, console: false })  // 带分割的打印
    list = []
    for (let user of $.userList) {
        list.push(user.tylcshybs2())
    } await Promise.all(list)

    $.log('收好友步数', { sp: true, console: false })  // 带分割的打印
    list = []
    for (let user of $.userList) {
        list.push(user.tylcshybs3())
    } await Promise.all(list)

    $.log('收好友步数', { sp: true, console: false })  // 带分割的打印
    list = []
    for (let user of $.userList) {
        list.push(user.tylcshybs4())
    } await Promise.all(list)










}






class UserClass {
    constructor(ck) {
        this.idx = `账号[${++$.userIdx}]`
        this.ckFlog = true
        this.xr = ck
        this.ts = $.ts(13)
        this.reqNonc = $.randomInt(100000, 999999)
		this.host = "tysc.tuoketech.com"
		this.hostname = "https://" + this.host



		this.tylcsbs_headers = {
			"Host": this.host,
			"content-length": "2",
			"accept": "application/json",
			"cloud-pid": "4020112618957",
			"cookie": "rprm_cuid=2216343465aee6gd24uo",
			"x-component-is": "packages/wm-cloud-tea-game/walk-v2/index",
			"token": this.token,
			"timestamp-random": "1673319254861-43026",
			"content-type": "application/json",
			"app-platform-id": "1",
			"user-agent": "Mozilla/5.0 (Linux; Android 7.1.2; Pixel XL Build/NZH54D; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/86.0.4240.99 XWEB/4375 MMWEBSDK/20220903 Mobile Safari/537.36 MMWEBID/4304 MicroMessenger/8.0.28.2240(0x28001C35) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android",
			"cloud-project-name": "tongyixiangmu",
			"x-req-from": "cloud-fe-yunsdk-platform",
			"accept-encoding": "gzip,compress,br,deflate",
			"x-page-route": "packages/wm-cloud-tea-game/walk-v2/index",
			"weimob-pid": "4020112618957",
			"charset": "utf-8",
			"wos-x-channel": "0:TITAN",
			"referer": "https://servicewechat.com/wx532ecb3bdaaf92f9/120/page-frame.html"
			
		};

        this.tylc_headers = {
			"Host": this.host,
			"content-length": "138",
			"accept": "application/json",
			"cloud-pid": "4020112618957",
			"cookie": "rprm_cuid=2216343465aee6gd24uo",
			"x-component-is": "packages/wm-cloud-tea-game/home/index",
			"timestamp-random": "1673365488784-83203",
			"content-type": "application/json",
			"app-platform-id": "1",
			"user-agent": "Mozilla/5.0 (Linux; Android 7.1.2; Pixel XL Build/NZH54D; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/86.0.4240.99 XWEB/4375 MMWEBSDK/20220903 Mobile Safari/537.36 MMWEBID/4304 MicroMessenger/8.0.28.2240(0x28001C35) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android",
			"cloud-project-name": "tongyixiangmu",
			"x-req-from": "cloud-fe-yunsdk-platform",
			"accept-encoding": "gzip,compress,br,deflate",
			"x-page-route": "packages/wm-cloud-tea-game/home/index",
			"weimob-pid": "4020112618957",
			"charset": "utf-8",
			"wos-x-channel": "0:TITAN",
			"referer": "https://servicewechat.com/wx532ecb3bdaaf92f9/120/page-frame.html"
			
		}




    }


    async userInfo() {
        let options = {
            fn: 'userInfo',
            method: 'post',
            url: `${this.hostname}/unit-one/login/wx/login`,
            headers: this.tylc_headers,
            body: this.xr
        }
        // console.log(options)
        let resp = await $.request(options)
        // console.log(resp)
        if (resp.code == 0) {
            $.log(`${this.idx}: 欢迎用户: ${resp.data.nickName} `)
            $.log(`${this.idx}: 欢迎用户: ${resp.data.steps_balance} `)
            this.token = resp.data.token
            this.ckFlog = true
        } else console.log(`${options.fn}: 失败, ${resp}`), this.ckFlog = false


    }






    async randomUser() {
        let options = {
            fn: 'randomUser',
            method: 'post',
            url: `${this.hostname}/unit-one/groupStepsConfig/randomUser`,
            headers: {
                "Host": this.host,
                "content-length": "2",
                "accept": "application/json",
                "cloud-pid": "4020112618957",
                "cookie": "rprm_cuid=2216343465aee6gd24uo",
                "x-component-is": "packages/wm-cloud-tea-game/walk-v2/index",
                "token": this.token,
                "timestamp-random": "1673319254861-43026",
                "content-type": "application/json",
                "app-platform-id": "1",
                "user-agent": "Mozilla/5.0 (Linux; Android 7.1.2; Pixel XL Build/NZH54D; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/86.0.4240.99 XWEB/4375 MMWEBSDK/20220903 Mobile Safari/537.36 MMWEBID/4304 MicroMessenger/8.0.28.2240(0x28001C35) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android",
                "cloud-project-name": "tongyixiangmu",
                "x-req-from": "cloud-fe-yunsdk-platform",
                "accept-encoding": "gzip,compress,br,deflate",
                "x-page-route": "packages/wm-cloud-tea-game/walk-v2/index",
                "weimob-pid": "4020112618957",
                "charset": "utf-8",
                "wos-x-channel": "0:TITAN",
                "referer": "https://servicewechat.com/wx532ecb3bdaaf92f9/120/page-frame.html"
            },
            body: '{}'
        }
        // console.log(options)
        let resp = await $.request(options)
         console.log(resp)
    }




	// 收步数
    async tylcsbs() {
        let options = {
            fn: 'tylcsbs',
            method: 'Post',
            url: `${this.hostname}/unit-one/health-run/steps/getTodaySteps`,
            headers: {
                "Host": this.host,
                "content-length": "2",
                "accept": "application/json",
                "cloud-pid": "4020112618957",
                "cookie": "rprm_cuid=2216343465aee6gd24uo",
                "x-component-is": "packages/wm-cloud-tea-game/walk-v2/index",
                "token": this.token,
                "timestamp-random": "1673319254861-43026",
                "content-type": "application/json",
                "app-platform-id": "1",
                "user-agent": "Mozilla/5.0 (Linux; Android 7.1.2; Pixel XL Build/NZH54D; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/86.0.4240.99 XWEB/4375 MMWEBSDK/20220903 Mobile Safari/537.36 MMWEBID/4304 MicroMessenger/8.0.28.2240(0x28001C35) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android",
                "cloud-project-name": "tongyixiangmu",
                "x-req-from": "cloud-fe-yunsdk-platform",
                "accept-encoding": "gzip,compress,br,deflate",
                "x-page-route": "packages/wm-cloud-tea-game/walk-v2/index",
                "weimob-pid": "4020112618957",
                "charset": "utf-8",
                "wos-x-channel": "0:TITAN",
                "referer": "https://servicewechat.com/wx532ecb3bdaaf92f9/120/page-frame.html"
    
            },
            body: '{}'
        }
        // console.log(options)
        let resp = await $.request(options)
        // console.log(resp)
        if (resp.code == 20014) {
			$.log(`${this.idx}: 状态: ${resp.msg}`)
        } else if (resp.code == 20012) {
            $.log(`${this.idx}: ${resp.msg} 个`, { notify: true })
         } else if (resp.code != 20012) {
                $.log(`${this.idx}: ${resp.msg} `)
            this.ckFlog = true
        } else console.log(`${options.fn}: 失败, ${resp}`), this.ckFlog = false
    }

	async tylcyhy() {
        let options = {
            fn: 'tylcyhy',
            method: 'Post',
            url: `${this.hostname}/unit-one/groupStepsConfig/addStealSteps`,
            headers: {
                "Host": this.host,
                "token": this.token,
                "content-type": "application/json",
                "app-platform-id": "1",
                "user-agent": "Mozilla/5.0 (Linux; Android 7.1.2; Pixel XL Build/NZH54D; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/86.0.4240.99 XWEB/4375 MMWEBSDK/20220903 Mobile Safari/537.36 MMWEBID/4304 MicroMessenger/8.0.28.2240(0x28001C35) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android"
                },
            body: '{}'
    }
        // console.log(options)
        let resp = await $.request(options)
        // console.log(resp)
        if (resp.code == 0) {
            $.log(`${this.idx}:  状态: ${resp.msg} 成功邀好友`, { notify: true })
        } else if (resp.code == 20018) {
            $.log(`${this.idx}: 状态: ${resp.msg}`, { notify: true })
            this.ckFlog = true
        } else console.log(`${options.fn}: 失败, ${resp}`), this.ckFlog = false
    }



    // 收好友步数
    async tylcshybs1() {
        let options = {
            fn: 'tylcshybs1',
            method: 'Post',
            url: `${this.hostname}/unit-one/groupStepsConfig/stealSteps`,
            headers: {
                "Host": this.host,
                "token": this.token,
                "content-type": "application/json",
                "app-platform-id": "1",
                "user-agent": "Mozilla/5.0 (Linux; Android 7.1.2; Pixel XL Build/NZH54D; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/86.0.4240.99 XWEB/4375 MMWEBSDK/20220903 Mobile Safari/537.36 MMWEBID/4304 MicroMessenger/8.0.28.2240(0x28001C35) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android"
            },
            body: '{"wxOpenId":"oBk224mym-A9zmXeeMoHnmKmQw-o"}'
        }
        // console.log(options)
        let resp = await $.request(options)
         console.log(resp)
        if (resp.code == 0) {
            $.log(`${this.idx}:  获得步数: ${resp.msg}`, { notify: true })
        } else if (resp.code == 502) {
            $.log(`${this.idx}: ${resp.msg}`, { notify: true })
        } else if (resp.code == 503) {
            $.log(`${this.idx}: ${resp.msg}`, { notify: true })
            await this.tylcyhy()
            this.ckFlog = true
        } else console.log(`${options.fn}: 失败, ${resp}`), this.ckFlog = false
    }

    async tylcshybs2() {
        let options = {
            fn: 'tylcshybs2',
            method: 'Post',
            url: `${this.hostname}/unit-one/groupStepsConfig/stealSteps`,
            headers: {
                "Host": this.host,
                "token": this.token,
                "content-type": "application/json",
                "app-platform-id": "1",
                "user-agent": "Mozilla/5.0 (Linux; Android 7.1.2; Pixel XL Build/NZH54D; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/86.0.4240.99 XWEB/4375 MMWEBSDK/20220903 Mobile Safari/537.36 MMWEBID/4304 MicroMessenger/8.0.28.2240(0x28001C35) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android"
            },
            body: '{"wxOpenId":"oBk224ptOl21d2SDYVMXdela9swU"}'
        }
        // console.log(options)
        let resp = await $.request(options)
        // console.log(resp)
        if (resp.code == 0) {
            $.log(`${this.idx}:  获得步数: ${resp.msg}`, { notify: true })
        } else if (resp.code == 502) {
            $.log(`${this.idx}: ${resp.msg}`, { notify: true })
        } else if (resp.code == 503) {
            $.log(`${this.idx}: ${resp.msg}`, { notify: true })
            await this.tylcyhy()
            this.ckFlog = true
        } else console.log(`${options.fn}: 失败, ${resp}`), this.ckFlog = false
    }

    async tylcshybs3() {
        let options = {
            fn: 'tylcshybs3',
            method: 'Post',
            url: `${this.hostname}/unit-one/groupStepsConfig/stealSteps`,
            headers: {
                "Host": this.host,
                "token": this.token,
                "content-type": "application/json",
                "app-platform-id": "1",
                "user-agent": "Mozilla/5.0 (Linux; Android 7.1.2; Pixel XL Build/NZH54D; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/86.0.4240.99 XWEB/4375 MMWEBSDK/20220903 Mobile Safari/537.36 MMWEBID/4304 MicroMessenger/8.0.28.2240(0x28001C35) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android"
            },
            body: '{"wxOpenId":"oBk224mDpK0LKz_agfxorAnC7vwI"}'
        }
        // console.log(options)
        let resp = await $.request(options)
        // console.log(resp)
        if (resp.code == 0) {
            $.log(`${this.idx}:  获得步数: ${resp.msg}`, { notify: true })
        } else if (resp.code == 502) {
            $.log(`${this.idx}: ${resp.msg}`, { notify: true })
        } else if (resp.code == 503) {
            $.log(`${this.idx}: ${resp.msg}`, { notify: true })
            await this.tylcyhy()
            this.ckFlog = true
        } else console.log(`${options.fn}: 失败, ${resp}`), this.ckFlog = false
    }

    async tylcshybs4() {
        let options = {
            fn: 'tylcshybs4',
            method: 'Post',
            url: `${this.hostname}/unit-one/groupStepsConfig/stealSteps`,
            headers: {
                "Host": this.host,
                "token": this.token,
                "content-type": "application/json",
                "app-platform-id": "1",
                "user-agent": "Mozilla/5.0 (Linux; Android 7.1.2; Pixel XL Build/NZH54D; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/86.0.4240.99 XWEB/4375 MMWEBSDK/20220903 Mobile Safari/537.36 MMWEBID/4304 MicroMessenger/8.0.28.2240(0x28001C35) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android"
            },
            body: '{"wxOpenId":"oBk224irvp8ALsU6S-T2fuvZLBfk"}'
        }
        // console.log(options)
        let resp = await $.request(options)
        // console.log(resp)
        if (resp.code == 0) {
            $.log(`${this.idx}:  获得步数: ${resp.msg}`, { notify: true })
        } else if (resp.code == 502) {
            $.log(`${this.idx}: ${resp.msg}`, { notify: true })
        } else if (resp.code == 503) {
            $.log(`${this.idx}: ${resp.msg}`, { notify: true })
            await this.tylcyhy()
            this.ckFlog = true
        } else console.log(`${options.fn}: 失败, ${resp}`), this.ckFlog = false
    }












    getSign(ts, reqNonc) {
        let salt = '17aaf8118ffb270b766c6d6774317a133.8.0'
        let sign = MD5(`signature${reqNonc}${ts}${salt}`).toString()
        return sign
    }


    getText() {
        let textarr = ['最简单的提高观赏性的办法就是把地球故事的部分剪辑掉半小时， emo的部分剪辑掉半小时。这样剩下的90分钟我们就看看外星人，看看月球，看看灾难片大场面就不错。', '顶着叛国罪的风险无比坚信前妻，这种还会离婚？', '你以为它是灾难片，其实它是科幻片；你以为它是科幻片，其实它是恐怖片；你以为它是恐怖片，其实它是科教片', '我的天，剧情真的好阴谋论，但是还算是能自圆其说', '大杂烩啊……我能理解这电影为什么在海外卖的不好了，因为核心创意真的已经太老套了', '一开始我以为这就是外国人看《流浪地球》时的感受啊，后来发现这不是我当初看《胜利号》的感受么']
        let ranNum = $.randomInt(1, textarr.length)
        let text = textarr[ranNum]
        return text
    }
    getCommentText() {
        let add_comment_text_arr = ['感谢推荐的电影呢', '有时间一定看看这个电影怎么样', '晚上就去看', '66666666666', '这部电影我看过，非常好看']
        let ranNum = $.randomInt(1, add_comment_text_arr.length)
        let text = add_comment_text_arr[ranNum]
        return text
    }




}




!(async () => {
    console.log(await $.yiyan())
    $.read_env(UserClass)


    await userTasks()


})()
    .catch((e) => $.log(e))
    .finally(() => $.exitNow())



function wait(n) { return new Promise(function (resolve) { setTimeout(resolve, n * 1000); }); }

function Env(name) {
    return new class {
        constructor(name) {
            this.name = name
            this.startTime = Date.now()
            this.log(`[${this.name}]开始运行`, { time: true })


            this.notifyStr = []
            this.notifyFlag = true


            this.userIdx = 0
            this.userList = []
            this.userCount = 0
        }
        async request(opt) {
            const got = require('got')
            let DEFAULT_TIMEOUT = 8000      // 默认超时时间
            let resp = null, count = 0
            let fn = opt.fn || opt.url
            let resp_opt = opt.resp_opt || 'body'
            opt.timeout = opt.timeout || DEFAULT_TIMEOUT
            opt.retry = opt.retry || { limit: 0 }
            opt.method = opt?.method?.toUpperCase() || 'GET'
            while (count++ < DEFAULT_RETRY) {
                try {
                    resp = await got(opt)
                    break
                } catch (e) {
                    if (e.name == 'TimeoutError') {
                        this.log(`[${fn}]请求超时，重试第${count}次`)
                    } else {
                        this.log(`[${fn}]请求错误(${e.message})，重试第${count}次`)
                    }
                }
            }
            if (resp == null) return Promise.resolve({ statusCode: 'timeout', headers: null, body: null })
            let { statusCode, headers, body } = resp
            if (body) try { body = JSON.parse(body) } catch { }
            if (resp_opt == 'body') {
                return Promise.resolve(body)
            } else if (resp_opt == 'hd') {
                return Promise.resolve(headers)
            } else if (resp_opt == 'statusCode') {
                return Promise.resolve(statusCode)
            }


        }


        log(msg, options = {}) {
            let opt = { console: true }
            Object.assign(opt, options)


            if (opt.time) {
                let fmt = opt.fmt || 'hh:mm:ss'
                msg = `[${this.time(fmt)}]` + msg
            }
            if (opt.notify) {
                this.notifyStr.push(msg)
            }
            if (opt.console) {
                console.log(msg)
            }
            if (opt.sp) {
                console.log(`\n-------------- ${msg} --------------`)
            }
        }
        read_env(Class) {
            let envStrList = ckNames.map(x => process.env[x])
            for (let env_str of envStrList.filter(x => !!x)) {
                let sp = envSplitor.filter(x => env_str.includes(x))
                let splitor = sp.length > 0 ? sp[0] : envSplitor[0]
                for (let ck of env_str.split(splitor).filter(x => !!x)) {
                    this.userList.push(new Class(ck))
                }
            }
            this.userCount = this.userList.length
            if (!this.userCount) {
                this.log(`未找到变量，请检查变量${ckNames.map(x => '[' + x + ']').join('或')}`, { notify: true })
                return false
            }
            this.log(`共找到${this.userCount}个账号`)
            return true
        }
        async taskThread(taskName, conf, opt = {}) {
            while (conf.idx < $.userList.length) {
                let user = $.userList[conf.idx++]
                await user[taskName](opt)
            }
        }
        async threadManager(taskName, thread) {
            let taskAll = []
            let taskConf = { idx: 0 }
            while (thread--) {
                taskAll.push(this.taskThread(taskName, taskConf))
            }
            await Promise.all(taskAll)
        }
        time(t, x = null) {
            let xt = x ? new Date(x) : new Date
            let e = {
                "M+": xt.getMonth() + 1,
                "d+": xt.getDate(),
                "h+": xt.getHours(),
                "m+": xt.getMinutes(),
                "s+": xt.getSeconds(),
                "q+": Math.floor((xt.getMonth() + 3) / 3),
                S: this.padStr(xt.getMilliseconds(), 3)
            };
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, (xt.getFullYear() + "").substr(4 - RegExp.$1.length)))
            for (let s in e)
                new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length)))
            return t
        }
        async showmsg() {
            if (!this.notifyFlag) return
            if (!this.notifyStr) return
            let notify = require('./sendNotify')
            this.log('\n============== 推送 ==============')
            await notify.sendNotify(this.name, this.notifyStr.join('\n'))
        }
        padStr(num, length, opt = {}) {
            let padding = opt.padding || '0'
            let mode = opt.mode || 'l'
            let numStr = String(num)
            let numPad = (length > numStr.length) ? (length - numStr.length) : 0
            let pads = ''
            for (let i = 0; i < numPad; i++) {
                pads += padding
            }
            if (mode == 'r') {
                numStr = numStr + pads
            } else {
                numStr = pads + numStr
            }
            return numStr
        }
        json2str(obj, c, encode = false) {
            let ret = []
            for (let keys of Object.keys(obj).sort()) {
                let v = obj[keys]
                if (v && encode) v = encodeURIComponent(v)
                ret.push(keys + '=' + v)
            }
            return ret.join(c)
        }
        str2json(str, decode = false) {
            let ret = {}
            for (let item of str.split('&')) {
                if (!item) continue
                let idx = item.indexOf('=')
                if (idx == -1) continue
                let k = item.substr(0, idx)
                let v = item.substr(idx + 1)
                if (decode) v = decodeURIComponent(v)
                ret[k] = v
            }
            return ret
        }
        phoneNum(phone_num) {
            if (phone_num.length == 11) {
                let data = phone_num.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2")
                return data
            } else {
                return phone_num
            }
        }
        randomInt(min, max) {
            return Math.round(Math.random() * (max - min) + min)
        }
        async yiyan() {
            const got = require('got')
            return new Promise((resolve) => {
                (async () => {
                    try {
                        const response = await got('https://v1.hitokoto.cn')
                        // console.log(response.body)
                        let data = JSON.parse(response.body)
                        let data_ = `[一言]: ${data.hitokoto}  by--${data.from}`
                        // console.log(data_)
                        resolve(data_)
                    } catch (error) {
                        console.log(error.response.body)
                    }
                })()
            })
        }
        ts(type = false, _data = "") {
            let myDate = new Date()
            let a = ""
            switch (type) {
                case 10:
                    a = Math.round(new Date().getTime() / 1000).toString()
                    break
                case 13:
                    a = Math.round(new Date().getTime()).toString()
                    break
                case "h":
                    a = myDate.getHours()
                    break
                case "m":
                    a = myDate.getMinutes()
                    break
                case "y":
                    a = myDate.getFullYear()
                    break
                case "h":
                    a = myDate.getHours()
                    break
                case "mo":
                    a = myDate.getMonth()
                    break
                case "d":
                    a = myDate.getDate()
                    break
                case "ts2Data":
                    if (_data != "") {
                        time = _data
                        if (time.toString().length == 13) {
                            let date = new Date(time + 8 * 3600 * 1000)
                            a = date.toJSON().substr(0, 19).replace("T", " ")
                        } else if (time.toString().length == 10) {
                            time = time * 1000
                            let date = new Date(time + 8 * 3600 * 1000)
                            a = date.toJSON().substr(0, 19).replace("T", " ")
                        }
                    }
                    break
                default:
                    a = "未知错误,请检查"
                    break
            }
            return a
        }
        randomPattern(pattern, charset = 'abcdef0123456789') {
            let str = ''
            for (let chars of pattern) {
                if (chars == 'x') {
                    str += charset.charAt(Math.floor(Math.random() * charset.length))
                } else if (chars == 'X') {
                    str += charset.charAt(Math.floor(Math.random() * charset.length)).toUpperCase()
                } else {
                    str += chars
                }
            }
            return str
        }
        randomString(len, charset = 'abcdef0123456789') {
            let str = ''
            for (let i = 0; i < len; i++) {
                str += charset.charAt(Math.floor(Math.random() * charset.length))
            }
            return str
        }
        randomList(a) {
            let idx = Math.floor(Math.random() * a.length)
            return a[idx]
        }
        wait(t) {
            return new Promise(e => setTimeout(e, t * 1000))
        }
        async exitNow() {
            await this.showmsg()
            let e = Date.now()
            let s = (e - this.startTime) / 1000
            this.log(`[${this.name}]运行结束，共运行了${s}秒`)
            process.exit(0)
        }
    }(name)
}
