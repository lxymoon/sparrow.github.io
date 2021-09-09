function myTime() {
	let time = new Date();
	let hh = time.getHours();
	let mm = time.getMinutes();
	let ss = time.getSeconds();
	
	document.getElementById("1").innerText = Math.floor(hh / 10);  //浮点类型转换成整形
	//选择 8：00 or 08：00的判断
	//document.getElementById("1").innerText = hh<10?null:Math.floor(hh / 10)
	document.getElementById("2").innerText = hh % 10;
	document.getElementById("4").innerText = Math.floor(mm / 10);
	document.getElementById("5").innerText = mm % 10;
	document.getElementById("7").innerText = Math.floor(ss / 10);
	document.getElementById("8").innerText = ss % 10;
}
myTime();
setInterval(myTime, 1000)  //每隔1000毫秒进行一次myTime()方法

