// 百度地图API功能
function loadJScript() {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "http://api.map.baidu.com/api?v=2.0&ak=lWZgLEcfmGZ1aU0GSgOOw3F469omIoy0&callback=init";
    document.body.appendChild(script);
}
function init() {
    var map = new BMap.Map("contact");            // 创建Map实例
    var point = new BMap.Point(121.51096,31.24783);  // 创建点坐标
    var marker = new BMap.Marker(point); //创建marker对象
    map.addOverlay(marker);              // 将标注添加到地图中
    map.centerAndZoom(point, 15);
    var opts = {
        width : 200,     // 信息窗口宽度
        height: 100,     // 信息窗口高度
        title : "BioCardChain" , // 信息窗口标题
        enableMessage:true,//设置允许信息窗发送短息
        // message:"看下地址喔~"
    }
    var infoWindow = new BMap.InfoWindow("地址：上海 浦东新区 陆家嘴环路 1288 号 712 室", opts);  // 创建信息窗口对象
    marker.addEventListener("click", function(){
        map.openInfoWindow(infoWindow,point); //开启信息窗口
    });

}
$(document).ready(function(){
  loadJScript();
})
