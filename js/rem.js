window.onload=function(){
	var designWidth = 1176;    // 设计稿宽度
	function resize(){
		// 获取屏幕宽度
	    var clientWidth = document.documentElement.clientWidth;

	    document.documentElement.style.fontSize = (clientWidth/designWidth*100)+"px";
	}
	resize();
	window.onresize = resize;   // 检测屏幕变化
}