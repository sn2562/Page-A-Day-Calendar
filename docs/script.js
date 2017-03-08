

try {

} catch(e) {
}

window.onload = function () {

};

//画像の生成
function createCanvas(){
	//角丸四角
	var fillRoundRect = function (l, t, w, h, r, lineWidth) {
		context.beginPath();
		context.arc(l + r, t + r, r, - Math.PI, - 0.5 * Math.PI, false);
		context.arc(l + w - r, t + r, r, - 0.5 * Math.PI, 0, false);
		context.arc(l + w - r, t + h - r, r, 0, 0.5 * Math.PI, false);
		context.arc(l + r, t + h - r, r, 0.5 * Math.PI, Math.PI, false);
		context.closePath();
		//				context.fill();
		context.lineWidth = lineWidth;
		context.stroke();
	}

	var canvas = document.createElement("canvas");

	//サイズを変更
	canvas.width  = 195;
	canvas.height = 265;
	//描画
	var context = canvas.getContext("2d");

	//背景塗りつぶし
	context.fillStyle = "#535241";
	var lineWidth = 4;
	fillRoundRect(lineWidth,lineWidth,canvas.width-lineWidth*2,canvas.height-lineWidth*2,10,lineWidth);
	//			context.fillRect(0,0,canvas.width,canvas.height);

	//日付や曜日をチェック
	var d = new Date();
	var holiday = getHoliday(2017);
	var holidayFlag = false;
	var holidayName = "";
	var today = [
		d.getFullYear(),
		d.getMonth() + 1,
		d.getDate()
	].join( '/' );

	for(idx in holiday){
		if(holiday[idx].date == today){
			holidayFlag = true;
			holidayName = holiday[idx].name;
		}
	}
	if(d.getDay() == 0 || holidayFlag){//日曜日または祝日
		context.fillStyle = "#ff7989";//文字色 - 赤
	}else if(d.getDay() == 6){
		context.fillStyle = "#79adff";//文字色 - 青
	}else{
		context.fillStyle = "#2e373d";//文字色 - 黒
	}

	//文字 - 日付
	context.font = "900 155.83px sans-serif";//フォントとサイズ
	context.textAlign="center";//左右中央寄
	context.textBaseline="middle";//上下中央寄
	context.fillText(d.getDate(),canvas.width/2,canvas.height/2+10);

	//文字 - 曜日
	var weekDayList  = ["日","月","火","水","木","金","土"]
	context.font = "900 25px sans-serif";//フォントとサイズ
	context.fillText(weekDayList[d.getDay()]+"曜日",canvas.width/2,canvas.height/5);

	//祝祭日なら日付の下に文字を追加
	if(holidayFlag){
		//文字 - 祝祭日
		context.font = "900 17px sans-serif";//フォントとサイズ
		context.fillText("春分の日",canvas.width/2,canvas.height-40);
	}
	return canvas;
}


function getHoliday(year) {
	// 祝日の定義
	var holidayList = [
		{
			'name': '元日',
			'date': '1/1',
			'startY': 1949,
			'endY': 9999
		},
		{
			'name': '成人の日',
			'date': '1/15',
			'startY': 1949,
			'endY': 1999
		},
		{
			'name': '成人の日',
			'date': '1/' + happyMonday(year, 1, 2), // 1月の第2月曜日
			'startY': 2000,
			'endY': 9999
		},
		{
			'name': '建国記念の日',
			'date': '2/11',
			'startY': 1967,
			'endY': 9999
		},
		{
			'name': '春分の日',
			'date': '3/' + shunbun(year),
			'startY': 1949,
			'endY': 9999
		},
		{
			'name': '天皇誕生日',
			'date': '4/29',
			'startY': 1949,
			'endY': 1988
		},
		{
			'name': 'みどりの日',
			'date': '4/29',
			'startY': 1989,
			'endY': 2006
		},
		{
			'name': '昭和の日',
			'date': '4/29',
			'startY': 2007,
			'endY': 9999
		},
		{
			'name': '憲法記念日',
			'date': '5/3',
			'startY': 1949,
			'endY': 9999
		},
		{
			'name': 'みどりの日',
			'date': '5/4',
			'startY': 2007,
			'endY': 9999
		},
		{
			'name': 'こどもの日',
			'date': '5/5',
			'startY': 1949,
			'endY': 9999
		},
		{
			'name': '海の日',
			'date': '7/20',
			'startY': 1996,
			'endY': 2002
		},
		{
			'name': '海の日',
			'date': '7/' + happyMonday(year, 7, 3), // 7月の第3月曜日
			'startY': 2003,
			'endY': 9999
		},
		{
			'name': '山の日',
			'date': '8/11',
			'startY': 2016,
			'endY': 9999
		},
		{
			'name': '敬老の日',
			'date': '9/15',
			'startY': 1966,
			'endY': 2002
		},
		{
			'name': '敬老の日',
			'date': '9/' + happyMonday(year, 9, 3), // 9月の第3月曜日
			'startY': 2003,
			'endY': 9999
		},
		{
			'name': '秋分の日',
			'date': '9/' + shubun(year),
			'startY': 1948,
			'endY': 9999
		},
		{
			'name': '体育の日',
			'date': '10/10',
			'startY': 1966,
			'endY': 1999
		},
		{
			'name': '体育の日',
			'date': '10/' + happyMonday(year, 10, 2), // 10月の第2月曜日
			'startY': 2000,
			'endY': 9999
		},
		{
			'name': '文化の日',
			'date': '11/3',
			'startY': 1948,
			'endY': 9999
		},
		{
			'name': '勤労感謝の日',
			'date': '11/23',
			'startY': 1948,
			'endY': 9999
		},
		{
			'name': '天皇誕生日',
			'date': '12/23',
			'startY': 1989,
			'endY': 9999
		}
	];

	var thisYearHolidayList = []; // 取得した祝日の一覧を格納する変数
	var count = 0;
	for (var i = 0; i < holidayList.length; i++) {
		// 指定した年にその祝日があるかどうか
		if(year >= holidayList[i]['startY'] && year <= holidayList[i]['endY']) {

			// 祝日の追加
			thisYearHolidayList[count] = {
				'name': holidayList[i]['name'],
				'date': year + '/' + holidayList[i]['date']
			}
			count++;

			var dateArr = holidayList[i]['date'].split('/');

			// 祝日が日曜日の場合は振替休日を追加する
			//						var substitute = substituteDay(year, parseFloat(dateArr[0]), parseFloat(dateArr[1]), holidayList)
			//						if(substitute) {
			//							thisYearHolidayList[count] = {
			//								'name': '振替休日',
			//								'date': year + '/' + substitute
			//							}
			//							count++;
			//						}
			// 祝日が土曜日の場合は振替休日を前の週の金曜に追加する
			var substitute = substituteDayofYahoo(year, parseFloat(dateArr[0]), parseFloat(dateArr[1]), holidayList);
			if(substitute) {
				thisYearHolidayList[count] = {
					'name': 'Yahoo振替休日',
					'date': year + '/' + substitute
				}
				count++;
			}

			// 翌々日が祝日の場合は国民の休日を追加する
			var national = nationalHoliday(year, parseFloat(dateArr[0]), parseFloat(dateArr[1]), holidayList);
			if(national) {
				thisYearHolidayList[count] = {
					'name': '国民の休日',
					'date': year + '/' + national
				}
				count++;
			}
		}
	}
	return thisYearHolidayList;
}

// 指定した年の春分の日を取得
function shunbun(year) {
	if(year < 1900 || year > 2099) return;
	switch(year % 4) {
		case 0:
			if(year <= 1956) return 21;
			if(year <= 2088) return 20;
			return 19;
		case 1:
			if(year <= 1989) return 21;
			return 20;
		case 2:
			if(year <= 2022) return 21;
			return 20;
		case 3:
			if(year <= 1923) return 22;
			if(year <= 2055) return 21;
			return 20;
	}
	return day;
}

// 指定した年の秋分の日を取得
function shubun(year) {
	if(year < 1900 || year > 2099) return;
	switch(year % 4) {
		case 0:
			if(year <= 2008) return 23;
			return 22;
		case 1:
			if(year <= 1917) return 24;
			if(year <= 2041) return 23;
			return 22;
		case 2:
			if(year <= 1946) return 24;
			if(year <= 2074) return 23;
			return 22;
		case 3:
			if(year <= 1979) return 24;
			return 23;
	}
}

// 指定した年月のnum回目の月曜日が何日かを取得
function happyMonday(year, month, num) {
	// 指定した月の1日が何曜日かを調べる
	var getDay = new Date(year, month - 1, 1).getDay();
	// 日曜日か月曜日の場合
	if(getDay <= 1) {
		var day = 2 - getDay;
		// 火曜日～土曜日の場合
	} else {
		var day = 9 - getDay;
	}
	return day + (7 * (num - 1));
}

// 振替休日の取得
function substituteDay(year, month, day, holidayList) {
	// 1973年以降のみ
	if(year >= 1973) {
		// 指定した日の曜日を調べる
		var date = new Date(year, month - 1, day);
		var getDay = date.getDay();
		// 日曜日の場合
		if(getDay === 0) {
			var flag = false;

			// 翌日が祝日でないかを調べる
			while(!flag) {
				flag = true;
				date.setDate(date.getDate() + 1);
				for (var i = 0; i < holidayList.length; i++) {
					// 翌日が祝日の場合
					if(date.getFullYear() >= holidayList[i]['startY'] && date.getFullYear() <= holidayList[i]['endY'] && (date.getMonth() + 1 + '/' + date.getDate()) === holidayList[i]['date']) {
						flag = false;
					}
				}
			}
			return date.getMonth() + 1 + '/' + date.getDate();
		}
	}
	return false;
}
// Yahooの振替休日の取得
function substituteDayofYahoo(year, month, day, holidayList) {
	// 1973年以降のみ
	if(year >= 1973) {
		// 指定した日の曜日を調べる
		var date = new Date(year, month - 1, day);
		var getDay = date.getDay();
		// 土曜日の場合
		if(getDay === 6) {
			date.setDate(date.getDate() - 1);
			return date.getMonth() + 1 + '/' + date.getDate();
		}
	}
	return false;
}

// 国民の休日の取得
function nationalHoliday(year, month, day, holidayList) {
	// 1988年以降のみ
	if(year >= 1988) {
		// 指定した日の翌々日を取得
		var date = new Date(year, month - 1, day);
		date.setDate(date.getDate() + 2);

		var holidayFlag = false;
		for (var i = 0; i < holidayList.length; i++) {
			// 指定した日の翌々日が祝日かどうかを調べる
			if(date.getFullYear() >= holidayList[i]['startY'] && date.getFullYear() <= holidayList[i]['endY'] && (date.getMonth() + 1 + '/' + date.getDate()) === holidayList[i]['date']) {
				holidayFlag = true;
			}
		}

		// 指定した日の翌々日が祝日の場合
		if(holidayFlag) {
			// 挟まれた日が祝日かどうかを調べる
			date.setDate(date.getDate() - 1);
			holidayFlag = false;

			for (var i = 0; i < holidayList.length; i++) {
				// 挟まれた日が祝日の場合
				if(date.getFullYear() >= holidayList[i]['startY'] && date.getFullYear() <= holidayList[i]['endY'] && (date.getMonth() + 1 + '/' + date.getDate()) === holidayList[i]['date']) {
					holidayFlag = true;
				}
			}
			// 挟まれた日が祝日でない場合は国民の休日
			if(!holidayFlag) {
				return date.getMonth() + 1 + '/' + date.getDate();
			}
		}
	}
	return false;
}
