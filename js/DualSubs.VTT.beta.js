/*
README:https://github.com/DualSubs/DualSubs/
*/

const $ = new Env("DualSubs v0.4.1");
const VTT = new WebVTT(["milliseconds", "timeStamp", "singleLine", "\n"]);
// https://raw.githubusercontent.com/DualSubs/DualSubs/beta/database/DualSubs.beta.min.json
const DataBase = {"Disney_Plus":{"Settings":{"Switch":true,"Type":["Official"],"Language":["ZH","EN"],"Position":"Forward","CacheSize":10,"Offset":0,"Tolerance":1000,"Key":{"GoogleCloud":null,"DeepL":null}},"Languages":{"AR":"ar","BG":"bg","CS":"cs","DA":"da","DE":"de","EL":"el","EN-GB":"en","EN-US":"en","EN-US SDH":"en","ES-419":"es-419","ES-ES":"es-ES","ET":"et","FI":"fi","FR":"fr-FR","HU":"hu","IT":"it","JA":"ja","KO":"ko","LT":"lt","LV":"lv","NL":"nl","NO":"no","PL":"pl","PT-PT":"pt-PT","PT-BR":"pt-BR","RO":"ro","RU":"ru","SK":"sk","SL":"sl","SV":"sv","IS":"is","ZH-HANS":"zh-Hans","ZH-HK":"zh-HK","ZH-HANT":"zh-Hant"}},"Prime_Video":{"Settings":{"Switch":true,"Type":["Official"],"Language":["ZH","EN"],"Position":"Forward","CacheSize":10,"Offset":0,"Tolerance":1000,"Key":{"GoogleCloud":null,"DeepL":null}},"Languages":{"AR":"ar-001","BG":"bg-bg","CS":"cs-cz","DA":"da-dk","DE":"de-de","EL":"el-gr","EN-GB":"en-gb","EN-US":"en-us","EN-US SDH":"en-us","ES-419":"es-419","ES-ES":"es-es","ET":"et-ee","FI":"fi-fi","FR":"fr-fr","HU":"hu-hu","ID":"id-id","IT":"it-it","JA":"ja-jp","KO":"ko-kr","LT":"lt-lt","LV":"lv-lv","NL":"nl-nl","NO":"nb-no","PL":"pl-pl","PT-PT":"pt-pt","PT-BR":"pt-br","RO":"ro-ro","RU":"ru-ru","SK":"sk-sk","SL":"sl-si","SV":"sv-se","IS":"is-is","ZH-HANS":"zh-hans","ZH-HK":"zh-HK","ZH-HANT":"zh-hant"}},"HBO_Max":{"Settings":{"Switch":true,"Type":["Official","Google","DeepL","External"],"Language":["EN","ES"],"Position":"Forward","CacheSize":3,"Offset":0,"Tolerance":1000,"Key":{"GoogleCloud":null,"DeepL":null}},"Languages":{"AR":"ar-001","BG":"bg-BG","CS":"cs-CZ","DA":"da-DK","DE":"de-DE","EL":"el-GR","EN-GB":"en-UK","EN-US":"en-US","EN-US SDH":"en-US","ES-419":"es-419","ES-419 SDH":"es-419","ES-ES":"es-ES","ET":"et-EE","FI":"fi-FI","FR":"fr-FR","HU":"hu-HU","IT":"it-IT","JA":"ja-JP","KO":"ko-KR","LT":"lt-LT","LV":"lv-LV","NL":"nl-NL","NO":"nb-NO","PL":"pl-PL","PT-PT":"pt-PT","PT-BR":"pt-BR","RO":"ro-RO","RU":"ru-RU","SK":"sk-SK","SL":"sl-SI","SV":"sv-SE","IS":"is-IS","ZH-HANS":"zh-CN","ZH-HK":"zh-HK","ZH-HANT":"zh-TW"}},"Hulu":{"Settings":{"Switch":true,"Type":["Official","Google","DeepL","External"],"Language":["ZH","EN"],"Position":"Forward","CacheSize":10,"Offset":0,"Tolerance":1000,"Key":{"GoogleCloud":null,"DeepL":null}},"Languages":{"AR":"ara","BG":"bul","CS":"ces","DA":"dan","DE":"deu","EL":"ell","EN-GB":"eng","EN-US":"eng","EN-US SDH":"eng","ES-419":"spa","ES-ES":"spa","ET":"est","FI":"fin","FR":"fra","HU":"hun","IT":"ita","JA":"jpn","KO":"kor","LT":"lit","LV":"lav","NL":"nld","NO":"nor","PL":"por","PT-PT":"por","PT-BR":"por","RO":"ron","RU":"rus","SK":"slk","SL":"slv","SV":"swe","IS":"isl","ZH-HANS":"zho","ZH-HK":"zho","ZH-HANT":"zho"}},"Paramount_Plus":{"Settings":{"Switch":true,"Type":["Official","Google","DeepL","External"],"Language":["ZH","EN"],"Position":"Forward","CacheSize":10,"Offset":0,"Tolerance":1000,"Key":{"GoogleCloud":null,"DeepL":null}},"Languages":{"AR":"ar","BG":"bg","CS":"cs","DA":"da","DE":"de","EL":"el","EN-GB":"en","EN-US":"en","EN-US SDH":"en","ES-419":"es-419","ES-ES":"es-ES","ET":"et","FI":"fi","FR":"fr-FR","HU":"hu","IT":"it","JA":"ja","KO":"ko","LT":"lt","LV":"lv","NL":"nl","NO":"no","PL":"pl","PT-PT":"pt-PT","PT-BR":"pt-BR","RO":"ro","RU":"ru","SK":"sk","SL":"sl","SV":"sv","IS":"is","ZH-HANS":"zh-Hans","ZH-HK":"zh-HK","ZH-HANT":"zh-Hant"}},"Discovery_Plus":{"Settings":{"Switch":true,"Type":["Official","Google","DeepL","External"],"Language":["ZH","EN"],"Position":"Forward","CacheSize":10,"Offset":0,"Tolerance":1000,"Key":{"GoogleCloud":null,"DeepL":null}},"Languages":{"BG":"bg-BG","CS":"cs-CZ","DA":"da-DK","DE":"de-DE","EL":"el-GR","EN-GB":"en-UK","EN-US":"en-US","EN-US SDH":"en-US SDH","ES-419":"es-419","ES-ES":"es-ES","ET":"et-EE","FI":"fi-FI","FR":"fr-FR","HU":"hu-HU","IT":"it-IT","JA":"ja-JP","KO":"ko-KR","LT":"lt-LT","LV":"lv-LV","NL":"nl-NL","PL":"pl-PL","PT-PT":"pt-PT","PT-BR":"pt-BR","RO":"ro-RO","RU":"ru-RU","SK":"sk-SK","SL":"sl-SI","SV":"sv-SE","ZH-HANS":"zh-CN","ZH-HK":"zh-HK","ZH-HANT":"zh-TW"}},"Netflix":{"Settings":{"Switch":true,"Type":["Official","Google","DeepL","External"],"Language":["ZH","EN"],"Position":"Forward","CacheSize":10,"Offset":0,"Tolerance":1000,"Key":{"GoogleCloud":null,"DeepL":null}}},"YouTube":{"Settings":{"Switch":true,"Type":["Official"],"Language":["ZH","EN"]},"Languages":{"BG":"bg-BG","CS":"cs-CZ","DA":"da-DK","DE":"de-DE","EL":"el-GR","EN-GB":"en-UK","EN-US":"en-US","EN-US SDH":"en-US SDH","ES-419":"es-419","ES-ES":"es-ES","ET":"et-EE","FI":"fi-FI","FR":"fr-FR","HU":"hu-HU","IT":"it-IT","JA":"ja-JP","KO":"ko-KR","LT":"lt-LT","LV":"lv-LV","NL":"nl-NL","NO":"nb-NO","PL":"pl-PL","PT-PT":"pt-PT","PT-BR":"pt-BR","RO":"ro-RO","RU":"ru-RU","SK":"sk-SK","SL":"sl-SI","SV":"sv-SE","IS":"is-IS","ZH-HANS":"zh-Hans","ZH-HK":"zh-Hant-HK","ZH-HANT":"zh-Hant"}},"Google":{"Languages":{"AUTO":"","AR":"ar","BG":"bg","CS":"cs","DA":"da","DE":"de","EL":"el","EN-GB":"en","EN-US":"en","EN-US SDH":"en","ES-419":"es-419","ES-ES":"es-ES","ET":"et","FI":"fi","FR":"fr-FR","HU":"hu","IT":"it","JA":"ja","KO":"ko","LT":"lt","LV":"lv","NL":"nl","NO":"no","PL":"pl","PT-PT":"pt-PT","PT-BR":"pt-BR","RO":"ro","RU":"ru","SK":"sk","SL":"sl","SV":"sv","IS":"is","ZH":"zh-CN","ZH-HANS":"zh-CN","ZH-HK":"zh-HK","ZH-HANT":"zh-TW"}},"DeepL":{"Languages":{"AUTO":"","BG":"BG","CS":"CS","DA":"DA","DE":"de","EL":"el","EN-GB":"EN-GB","EN-US":"EN-US","EN-US SDH":"EN-US","ES-419":"ES","ES-ES":"ES","ET":"ET","FI":"FI","FR":"FR","HU":"HU","IT":"IT","JA":"JA","KO":"ko","LT":"LT","LV":"LV","NL":"NL","PL":"PL","PT":"PT","PT-PT":"PT-PT","PT-BR":"PT-BR","RO":"RO","RU":"RU","SK":"SK","SL":"SL","SV":"SV","ZH":"ZH","ZH-HANS":"ZH","ZH-HK":"ZH","ZH-HANT":"ZH"}}}
const type = $request.url.match(/%([^%]+)%$/)[1]
$.log(`🚧 ${$.name}`, `type: ${type}`, "");
const url = $request.url.replace(/%[^%]+%$/, "")
$.log(`🚧 ${$.name}`, `url: ${url}`, "");
let headers = $request.headers
delete headers["Host"]
delete headers["Connection"]
$.log(`🚧 ${$.name}`, "headers.stringify", JSON.stringify(headers), "");

/***************** Processing *****************/
!(async () => {
	const Platform = await getPlatform(url);
	[$.Settings, $.Languages, $.Cache] = await setENV(Platform, DataBase);
	if ($.Settings.Switch) {
		// 找缓存
		let Index = await getCacheIndex($.Cache)
		
		// 拿回复
		let response = await $.http.get({ "url": url, "headers": headers }).then((response) => {
			return response
		})
		//$.log(`🚧 ${$.name}`, "response.stringify", JSON.stringify(response), "");

		// 序列化VTT
		let OriginVTT = VTT.parse(response.body, ["timeStamp", "ms", "singleLine"]) // "multiLine"
		//$.log(`🚧 ${$.name}`, "VTT.parse", JSON.stringify(OriginVTT), "");
		//$.log("OriginVTT.headers", JSON.stringify(OriginVTT.headers))
		//$.log("OriginVTT.CSS", JSON.stringify(OriginVTT.CSS))
		//$.log("OriginVTT.body[0]", JSON.stringify(OriginVTT.body[0]))
		//$.log("OriginVTT.body[10]", JSON.stringify(OriginVTT.body[10]))

		// 创建请求
		let request = {
			"url": "",
			"headers": "",
			"body": ""
		}
		// 创建第二字幕JSON
		let SecondVTT = {};
		// 获取类型
		if (type == "") $.done();
		else if (type == "Official") {
			$.log(`🚧 ${$.name}`, "官方字幕模式", "");
			let VTTs = $.Cache[Index]?.[$.Settings.Language[1]]?.VTTs ?? null;
			if (VTTs) {
				request.url = await getOfficialSubURL(Platform, VTTs)
				request.headers = headers;
			} else $.done();
			/*
			let VTTs = $.Cache[Index]?.[$.Settings.Language[1]]?.VTTs ?? null;
			if (VTTs) $.result = await getOfficialSubtitles(Platform, VTTs)
			else $.done();
			*/
			SecondVTT = await $.http.get(request).then((response) => {
				$.log("SecondVTT", `headers: ${JSON.stringify(response.headers)}`);
				let vtt = response.body
				return VTT.parse(vtt, ["timeStamp", "ms", "singleLine"]); // "multiLine"
			});
		} else if (type == "Google") {
			let txt = VTT.json2txt(OriginVTT)
			$.log(`🚧 ${$.name}`, "VTT.json2txt", txt, "");
			request.url = "";
			request.headers = headers;
			request.body = txt;
			SecondVTT = await $.http.post(request).then((response) => {
				$.log("SecondVTT", `headers: ${JSON.stringify(response.headers)}`);
				let vtt = VTT.txt2json(response.body);
				return VTT.parse(vtt, ["timeStamp", "ms", "singleLine"]); // "multiLine"
			});
		} else if (type == "GoogleCloud") {
			request.url = ""
			request.headers = headers;
			request.body = txt;
			SecondVTT = await $.http.post(request).then((response) => {
				$.log("SecondVTT", `headers: ${JSON.stringify(response.headers)}`);
				let vtt = VTT.txt2json(response.body);
				return VTT.parse(vtt, ["timeStamp", "ms", "singleLine"]); // "multiLine"
			});
		} else if (type == "DeepL") {
			request.url = "https://api-free.deepl.com/v2/translate"
			request.headers = {
				"Accept": "*/*",
				"User-Agent": "DualSubs",
				"Content-Type": "application/x-www-form-urlencoded"
			};
			request.body = `auth_key=${$.Settings.dkey}&source_lang=${DataBase.DeepL.Languages[$.Settings.Language[1]]}&target_lang=${DataBase.DeepL.Languages[$.Settings.Language[0]]}&text=${txt}`;
			// 整体翻译
			SecondVTT = await $.http.post(request).then((response) => {
				$.log("SecondVTT", `headers: ${JSON.stringify(response.headers)}`);
				let vtt = VTT.txt2json(response.body);
				return VTT.parse(vtt, ["timeStamp", "ms", "singleLine"]); // "multiLine"
			});
		} else if (type == "External") {
			request.url = $.Settings.ExternalURL
			SecondVTT = await $.http.get(request).then((response) => {
				$.log("SecondVTT", `headers: ${JSON.stringify(response.headers)}`);
				let vtt = response.body
				return VTT.parse(vtt, ["timeStamp", "ms", "singleLine"]); // "multiLine"
			});
		} else $.done();
		//$.log("SecondSub.headers", JSON.stringify(SecondSub.headers))
		//$.log("SecondSub.CSS", JSON.stringify(SecondSub.CSS))
		//$.log("SecondSub.body[0]", JSON.stringify(SecondSub.body[0]))
		//$.log("SecondSub.body[10]", JSON.stringify(SecondSub.body[10]))
		/***************** merge Dual Subtitles *****************/
		let DualSub = await CombineDualSubs(OriginVTT, SecondVTT, $.Settings.Offset, $.Settings.Tolerance, [$.Settings.Position]);
		//$.log(`🚧 ${$.name}, Combine Dual Subtitles`, "await CombineDualSubs(FirstSub, SecondSub)", `DualSub内容: ${JSON.stringify(DualSub)}`, "");
		//$.log(`🚧 ${$.name}, Combine Dual Subtitles`, `DualSub类型: ${typeof DualSub}`, `DualSub内容: ${DualSub}`, "");
		DualSub = VTT.stringify(DualSub)
		//$.log(`🚧 ${$.name}`, "VTT.stringify", JSON.stringify(DualSub), "");
		response.body = DualSub
		$.done({ response })
	}
})()
	.catch((e) => $.logErr(e))
	.finally(() => $.done({ url }))

/***************** Fuctions *****************/
// Function 1
// Get Platform
async function getPlatform(url) {
	$.log(`⚠ ${$.name}, Get Platform`, "");
	let platform = url.match(/\.(dssott|starott)\.com/i) ? "Disney_Plus"
		: url.match(/\.(hls\.row\.aiv-cdn|akamaihd|cloudfront)\.net/i) ? "Prime_Video"
			: url.match(/\.(api\.hbo|hbomaxcdn)\.com/i) ? "HBO_Max"
				: url.match(/\.(hulustream|huluim)\.com/i) ? "Hulu"
					: (url.match(/\.(cbsaavideo|cbsivideo)\.com/i)) ? "Paramount_Plus"
						: (url.match(/\.peacocktv\.com/i)) ? "Peacock"
							: url.match(/\.uplynk\.com/i) ? "Discovery_Plus"
								: url.match(/www\.youtube\.com/i) ? "YouTube"
									: url.match(/\.nflxvideo\.net/i) ? "Netflix"
										: undefined
	$.log(`🎉 ${$.name}, Get Platform`, `platform: ${platform}`, "");
	return platform
};

// Function 2
// Set Environment Variables
async function setENV(platform, database) {
	$.log(`⚠ ${$.name}, Set Environment Variables`, "");
	// 包装为局部变量，用完释放内存
	// BoxJs的清空操作返回假值空字符串, 逻辑或操作符会在左侧操作数为假值时返回右侧操作数。
	/***************** Settings *****************/
	let BoxJs = $.getjson("DualSubs", database) // BoxJs
	//$.log(`🚧 ${$.name}, 调试信息`, "Set Environment Variables", `$.BoxJs类型: ${typeof $.BoxJs}`, `$.BoxJs内容: ${JSON.stringify($.BoxJs)}`, "");
	let Settings = BoxJs[platform]?.Settings || database[platform].Settings;
	Settings.Switch = JSON.parse(Settings.Switch) //  BoxJs字符串转Boolean
	if (typeof Settings.Type == "string") Settings.Type = Settings.Type.split(",") // BoxJs字符串转数组
	Settings.CacheSize = parseInt(Settings.CacheSize,10) // BoxJs字符串转数字
	Settings.Offset = parseInt(Settings.Offset,10) // BoxJs字符串转数字
	Settings.Tolerance = parseInt(Settings.Tolerance,10) // BoxJs字符串转数字
	//$.log(`🚧 ${$.name}, 调试信息`, "Set Environment Variables", `Settings内容: ${JSON.stringify(Settings)}`, "");
	/***************** Languages *****************/
	let Languages = database[platform].Languages;
	//$.log(`🚧 ${$.name}, 调试信息`, "Set Environment Variables", `Settings.language内容: ${Settings.language}`, "");
	/***************** Cache *****************/
	let Cache = BoxJs[platform]?.Cache || [];
	//$.log(`🚧 ${$.name}, 调试信息`, "Set Environment Variables", `Cache类型: ${typeof Cache}`, `$.Cache内容: ${Cache}`, "");
	if (typeof Cache == "string") Cache = JSON.parse(Cache)
	$.log(`🎉 ${$.name}, Set Environment Variables`, `Cache类型: ${typeof Cache}`, `Cache内容: ${JSON.stringify(Cache)}`, "");
	return [Settings, Languages, Cache];
};

// Function 3
// Get Cache Index
async function getCacheIndex(cache = {}) {
	$.log(`⚠ ${$.name}, Get Cache Index`, "");
	let index = cache.findIndex(item => {
		let URLs = [item?.URL, item?.[$.Settings.Language[0]]?.URI, item?.[$.Settings.Language[1]]?.URI, ...item?.[$.Settings.Language[0]]?.VTTs ?? [], ...item?.[$.Settings.Language[1]]?.VTTs ?? []]
		$.log(`🎉 ${$.name}, 调试信息`, " Get Cache Index", `URLs: ${URLs}`, "");
		// 方法1
		// URLs中有一项包含在url中即true
		for (let URL of URLs) {
			if (url.includes(URL)) return true
		}
		// 以下不适用，因为存在相对路径和加参数路径，所以url始终包含URL
		// 方法2
		// 扩展运算符，展开后查询
		//if (URLs.includes(url)) return true
		// 方法3
		// Array.includes不能用于嵌套数组，所以先转字符串
		//if (JSON.stringify(URLs).includes(url)) return true
	})
	$.log(`🎉 ${$.name}, 调试信息`, " Get Cache Index", `index: ${index}`, "");
	return index
};

// Function 4
// Set Cache
async function setCache(index = -1, target = {}, sources = {}, num = 1) {
	$.log(`⚠ ${$.name}, Set Cache`, "");
	// 刷新播放记录，所以始终置顶
	if (index !== -1) {
		Object.assign(target[index], sources) // 合并
		if (index !== 0) target.unshift(target.splice(index, 1)[0]) // 置顶
	}
	if (index === -1) {
		target.unshift(sources) // 头部插入缓存
		target = target.filter(Boolean).slice(0, num) // 设置缓存数量
	}
	/*
	if (index !== -1) {
		// 合并缓存
		Object.assign(target[index], sources)
		// 置顶
		if (index !== 0) target.unshift(target.splice(index, 1)[0])
	} else { // 无缓存
		$.log(`🚧 ${$.name}`, "无匹配结果", "");
		// 设置缓存数量
		target = target.filter(Boolean).slice(0, num) //去空, 留$.Settings.PlaylistNumber
		// 头部插入缓存
		target.unshift(sources)
	}
	*/
	$.log(`🎉 ${$.name},  Set Cache`, `target: ${JSON.stringify(target)}`, "");
	return target
};

// Function 5
// Get Official Subtitles URL
async function getOfficialSubURL(platform, VTTs = []) {
	$.log(`⚠ ${$.name}, Get Official Subtitles URL`, "");
	let fileName = (platform == "Disney_Plus") ? url.match(/([^\/]+\.vtt$)/)[1]
		: (platform == "Hulu") ? url.match(/.+_(SEGMENT\d+_.+\.vtt$)/)[1]
			: null;
	$.log(`🚧 ${$.name}, Get Official Subtitles URL`, `fileName: ${fileName}`, "")
	let VTT = VTTs.find(item => item.includes(fileName)) || VTTs[0];
	$.log(`🎉 ${$.name}, Get Official Subtitles URL`, `VTT: ${VTT}`, "")
	return VTT
	// 旧方法
	/***************** Slice subtitles URLs Array *****************/
	//let SubtitlesIndex = parseInt(url.match(/(\d+)\.vtt/)[1])
	//$.log(`🚧 ${$.name}, Official Subtitles`, "official_subtitles", `SubtitlesIndex内容: ${SubtitlesIndex}`, "");
	//let start = SubtitlesIndex - 3 < 0 ? 0 : SubtitlesIndex - 3
	//VTTs = VTTs.slice(start, SubtitlesIndex + 4)
	//$.log(`🚧 ${$.name}, Official Subtitles`, "Combine subtitles urls", `VTTs: ${VTTs}`, "");
	/***************** Get subtitles URL *****************/
	/*
	let VTT = VTTs
	if (platform == "Disney_Plus") { // Disney+ 片段名称相同
		let SubtitleName = url.match(/([^\/]+\.vtt$)/)[1]
		$.log(`🚧 ${$.name}, Official Subtitles`, "Get subtitles URL", `SubtitleName内容: ${SubtitleName}`, "")
		VTT = VTTs.find(item => item.includes(SubtitleName))
		$.log(`🚧 ${$.name}, Official Subtitles`, "Get subtitles URL", `subtitles_VTT_URL内容: ${VTT}`, "")
	} else if (platform == "Hulu") { // Hulu 片段分型序号相同
			let SubtitleName = url.match(/.+_(SEGMENT\d+_.+\.vtt$)/)[1]
			$.log(`🚧 ${$.name}, Official Subtitles`, "Get subtitles URL", `SubtitleName内容: ${SubtitleName}`, "")
			VTT = VTTs.find(item => item.includes(SubtitleName))
			$.log(`🚧 ${$.name}, Official Subtitles`, "Get subtitles URL", `subtitles_VTT_URL内容: ${VTT}`, "")
	} else { // Amazon Prime Video HBO_Max不拆分字幕片段
		VTT = VTTs[0]
	}
	*/
};

// Function 6
// Combine Dual Subtitles
async function CombineDualSubs(Sub1 = { headers: {}, CSS: {}, body: [] }, Sub2 = { headers: {}, CSS: {}, body: [] }, Offset = 0, Tolerance = 1000, options = ["Forward"]) { // options = ["Forward", "Reverse"]
	$.log(`🚧 ${$.name}, Combine Dual Subtitles`, "");
	//$.log(`🚧 ${$.name}, Combine Dual Subtitles`,`Sub1内容: ${JSON.stringify(Sub1)}`, "");
	//$.log(`🚧 ${$.name}, Combine Dual Subtitles`,`Sub2内容: ${JSON.stringify(Sub2)}`, "");
	let DualSub = options.includes("Reverse") ? Sub2 : Sub1
	//$.log(`🚧 ${$.name}, Combine Dual Subtitles`,`let DualSub内容: ${JSON.stringify(DualSub)}`, "");
	// 有序数列 用不着排序
	//FirstSub.body.sort((x, y) => x - y);
	//SecondSub.body.sort((x, y) => x - y);
	const length1 = Sub1.body.length, length2 = Sub2.body.length;
	let index0 = 0, index1 = 0, index2 = 0;
	// 双指针法查找两个数组中的相同元素
	while (index1 < length1 && index2 < length2) {
		const timeStamp1 = Sub1.body[index1].timeStamp, timeStamp2 = Sub2.body[index2].timeStamp + Offset;
		const text1 = Sub1.body[index1]?.text ?? "", text2 = Sub2.body[index2]?.text ?? "";
		if (Math.abs(timeStamp1 - timeStamp2) <= Tolerance) {
			index0 = options.includes("Reverse") ? index2 : index1;
			// 多行字幕交替插入
			/*
			if (Array.isArray(text1) && Array.isArray(text2)) {
				let a = options.includes("Reverse") ? text2 : text1;
				let b = options.includes("Reverse") ? text1 : text2;
				let c = [];
				let length = a.length > b.length ? a.length : b.length;
				for (let j = 0; j < length; j++) {
					if (a[j]) c.push(a[j]);
					if (b[j]) c.push(b[j]);
				}
				DualSub.body[index0].text = c;
			} else 
			*/
			DualSub.body[index0].text = options.includes("Reverse") ? `${text2}\n${text1}` : `${text1}\n${text2}`;
			//DualSub.body[index0].timeStamp = options.includes("Reverse") ? timeStamp2 : timeStamp1;
			//DualSub.body[index0].index = options.includes("Reverse") ? index2 : index1;
			index1++;
			index2++;
		} else if (timeStamp2 - timeStamp1 > Tolerance) {
			index1++;
		} else {
			index2++;
		}
	}
	//$.log(`🚧 ${$.name}, Combine Dual Subtitles`, `return DualSub内容: ${JSON.stringify(DualSub)}`, "");
	return DualSub;
};

/*
// Function
// Machine Subtitles
async function machine_subtitles(type, body) {
	$.log(`🚧 ${$.name}, Machine Subtitles`, "machine_subtitles", "");

	body = body.replace(/(\d+:\d\d:\d\d.\d\d\d -->.+line.+\n.+)\n(.+)/g, "$1 $2")
	body = body.replace(/(\d+:\d\d:\d\d.\d\d\d -->.+line.+\n.+)\n(.+)/g, "$1 $2")

	let dialogue = body.match(/\d+:\d\d:\d\d.\d\d\d -->.+line.+\n.+/g)
	if (!dialogue) $.done()

	let timeline = body.match(/\d+:\d\d:\d\d.\d\d\d -->.+line.+/g)

	let s_sentences = []
	for (var i in dialogue) { s_sentences.push(`${type == "Google" ? "~" + i + "~" : "&text="}${dialogue[i].replace(/<\/*(c\.[^>]+|i)>/g, "").replace(/\d+:\d\d:\d\d.\d\d\d -->.+line.+\n/, "")}`) }
	s_sentences = await groupAgain(s_sentences, type == "Google" ? 80 : 50)

	let t_sentences = []
	let trans_result = []

	if (type == "Google") {
		for (var p in s_sentences) {
			let options = {
				url: `https://translate.google.com/translate_a/single?client=it&dt=qca&dt=t&dt=rmt&dt=bd&dt=rms&dt=sos&dt=md&dt=gt&dt=ld&dt=ss&dt=ex&otf=2&dj=1&hl=en&ie=UTF-8&oe=UTF-8&sl=${Settings.sl}&tl=${Settings.language}`,
				headers: {
					"User-Agent": "GoogleTranslate/6.29.59279 (iPhone; iOS 15.4; en; iPhone14,2)"
				},
				body: `q=${encodeURIComponent(s_sentences[p].join("\n"))}`
			}

			//let trans = await send_request(options, "post")
			await $.http.post(options).then((resp) => {
				//let trans = resp.body
				if (resp.body.sentences) {
					let sentences = resp.body.sentences
					for (var k in sentences) {
						if (sentences[k].trans) trans_result.push(sentences[k].trans.replace(/\n$/g, "").replace(/\n/g, " ").replace(/〜|～/g, "~"))
					}
				}
			})
		}

		if (trans_result.length > 0) {
			t_sentences = trans_result.join(" ").match(/~\d+~[^~]+/g)
		}

	} else if (type == "DeepL") {
		for (var l in s_sentences) {
			let options = {
				url: "https://api-free.deepl.com/v2/translate",
				body: `auth_key=${Settings.dkey}${Settings.sl == "AUTO" ? "" : `&source_lang=${Settings.sl}`}&target_lang=${Settings.language}${s_sentences[l].join("")}`
			}

			//let trans = await send_request(options, "post")
			await $.http.post(options).then((resp) => {
				//let trans = resp.body
				if (resp.body.translations) trans_result.push(resp.body.translations)
			})
		}

		if (trans_result.length > 0) {
			for (var o in trans_result) {
				for (var u in trans_result[o]) { t_sentences.push(trans_result[o][u].text.replace(/\n/g, " ")) }
			}
		}
	}

	if (t_sentences.length > 0) {
		let g_t_sentences = t_sentences.join("\n").replace(/\s\n/g, "\n")

		for (var j in dialogue) {
			let patt = new RegExp(`(${timeline[j]})`)
			if (Settings.line == "s") patt = new RegExp(`(${dialogue[j].replace(/(\[|\]|\(|\)|\?)/g, "\\$1")})`)

			let patt2 = new RegExp(`~${j}~\\s*(.+)`)

			if (type == "Google" && g_t_sentences.match(patt2)) body = body.replace(patt, `$1\n${g_t_sentences.match(patt2)[1]}`)
			else if (type == "DeepL") body = body.replace(patt, `$1\n${t_sentences[j]}`)

		}

		if (platform != "Netflix") {
			//Cache.s_subtitles_url = url
			//Cache.subtitles = body
			//Cache.subtitles_type = settings.type
			//Cache.subtitles_sl = settings.sl
			//Cache.subtitles_tl = settings.language
			//Cache.subtitles_line = settings.line
			//$.setjson(Cache, `@DualSubs.${platform}.Cache`)
		}
	}
	$.log(`🚧 ${$.name}, Machine Subtitles`, "machine_subtitles", `body内容: ${body}`, "");
	return body
};

// Function
// External Subtitles
async function external_subtitles(external_subtitles, body) {
	let patt = new RegExp(`(\\d+\\n)*\\d+:\\d\\d:\\d\\d.\\d\\d\\d --> \\d+:\\d\\d:\\d\\d.\\d.+(\\n|.)+`)
	if (!external_subtitles.match(patt)) $.done()
	if (!body.match(patt)) $.done()
	let external = external_subtitles.replace(/(\d+:\d\d:\d\d),(\d\d\d)/g, "$1.$2")
	body = body.replace(patt, external.match(patt)[0])
	return body
};

// Function
// groupAgain
async function groupAgain(data, num) {
	var result = []
	for (var i = 0; i < data.length; i += num) {
		result.push(data.slice(i, i + num))
	}
	return result
};
*/
/***************** Env *****************/
// prettier-ignore
// https://github.com/chavyleung/scripts/blob/master/Env.min.js
function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.encoding="utf-8",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}isShadowrocket(){return"undefined"!=typeof $rocket}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),a={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(a,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){if(t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){let s=require("iconv-lite");this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:i,statusCode:r,headers:o,rawBody:h}=t;e(null,{status:i,statusCode:r,headers:o,rawBody:h},s.decode(h,this.encoding))},t=>{const{message:i,response:r}=t;e(i,r,r&&s.decode(r.rawBody,this.encoding))})}}post(t,e=(()=>{})){const s=t.method?t.method.toLocaleLowerCase():"post";if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient[s](t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method=s,this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){let i=require("iconv-lite");this.initGotEnv(t);const{url:r,...o}=t;this.got[s](r,o).then(t=>{const{statusCode:s,statusCode:r,headers:o,rawBody:h}=t;e(null,{status:s,statusCode:r,headers:o,rawBody:h},i.decode(h,this.encoding))},t=>{const{message:s,response:r}=t;e(s,r,r&&i.decode(r.rawBody,this.encoding))})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl,i=rawOpts["update-pasteboard"]||rawOpts.updatePasteboard;return{"open-url":e,"media-url":s,"update-pasteboard":i}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}

// https://github.com/DualSubs/WebVTT/blob/main/WebVTT.embedded.min.js
function WebVTT(e){return new class{constructor(e=["milliseconds","timeStamp","singleLine","\n"]){this.name="WebVTT v1.6.0",this.opts=e,this.newLine=this.opts.includes("\n")?"\n":this.opts.includes("\r")?"\r":this.opts.includes("\r\n")?"\r\n":"\n",this.vtt=new String,this.txt=new String,this.json={headers:{},CSS:{},body:[]}}parse(e=this.vtt){const t=this.opts.includes("milliseconds")?/^(?:(?<srtNum>\d+)[(\r\n)\r\n])?(?<timeLine>(?<startTime>(?:\d\d:)?\d\d:\d\d(?:\.|,)\d\d\d) --> (?<endTime>(?:\d\d:)?\d\d:\d\d(?:\.|,)\d\d\d)) ?(?<options>.+)?[^](?<text>.*[^]*)$/:/^(?:(?<srtNum>\d+)[(\r\n)\r\n])?(?<timeLine>(?<startTime>(?:\d\d:)?\d\d:\d\d)(?:\.|,)\d\d\d --> (?<endTime>(?:\d\d:)?\d\d:\d\d)(?:\.|,)\d\d\d) ?(?<options>.+)?[^](?<text>.*[^]*)$/;let i={headers:e.match(/^(?<fileType>WEBVTT)?[^](?<Xoptions>.+[^])*/)?.groups??null,CSS:e.match(/^(?<Style>STYLE)[^](?<Boxes>.*::cue.*(\(.*\))?((\n|.)*}$)?)/m)?.groups??null,body:e.split(/[(\r\n)\r\n]{2,}/).map((e=>e.match(t)?.groups??""))};return i.body=i.body.filter(Boolean),i.body=i.body.map(((e,t)=>{if(e.index=t,"WEBVTT"!==i.headers?.fileType&&(e.timeLine=e.timeLine.replace(",","."),e.startTime=e.startTime.replace(",","."),e.endTime=e.endTime.replace(",",".")),this.opts.includes("timeStamp")){let t=e.startTime.replace(/(.*)/,"1970-01-01T$1Z");e.timeStamp=this.opts.includes("milliseconds")?Date.parse(t):Date.parse(t)/1e3}return this.opts.includes("singleLine")?e.text=e.text.replace(/[(\r\n)\r\n]/," "):this.opts.includes("multiLine")&&(e.text=e.text.split(/[(\r\n)\r\n]/)),e})),i}stringify(e=this.json){return[e.headers=e.headers?.Xoptions?[e.headers?.fileType??"WEBVTT",e.headers?.Xoptions??null].join(this.newLine):e.headers?.fileType??"WEBVTT",e.CSS=e.CSS?.Style?[e.CSS.Style,e.CSS.Boxes].join(this.newLine):null,e.body=e.body.map((e=>(Array.isArray(e.text)&&(e.text=e.text.join(this.newLine)),e=`${e.timeLine} ${e?.options??""}${this.newLine}${e.text}`))).join(this.newLine+this.newLine)].join(this.newLine+this.newLine)}json2txt(e=this.json){return e.body.map(((e,t)=>[t,e.timeStamp,e.text].join(this.newLine))).join(this.newLine+this.newLine)}txt2json(e=this.txt){const t=/^(?<srtNum>\d+)[^](?<timeStamp>\d+)[^](?<text>.*[^]*)$/;return{headers:null,CSS:null,body:e.split(/[(\r\n)\r\n]{2,}/).map((e=>e.match(t)?.groups??""))}}}(e)}
