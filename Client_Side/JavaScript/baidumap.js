// 百度地图API功能
function loadJScript() {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "http://api.map.baidu.com/api?v=2.0&ak=lWZgLEcfmGZ1aU0GSgOOw3F469omIoy0&callback=init";
    document.body.appendChild(script);
}
function init() {
    var sContent =
        "<h4 style='margin:0 0 5px 0;padding:0.2em 0'>天安门</h4>" +
        "<p style='margin:0;line-height:1.5;font-size:13px;text-indent:2em'>天安门坐落在中国北京市中心,故宫的南侧,与天安门广场隔长安街相望,是清朝皇城的大门...</p>" +
        "</div>";
    var map = new BMap.Map("contact");            // 创建Map实例
    var point = new BMap.Point(116.404, 39.915);  // 创建点坐标
    var marker = new BMap.Marker(point);
    var infoWindow = new BMap.InfoWindow(sContent);  // 创建信息窗口对象
    map.centerAndZoom(point, 15);
    map.addOverlay(marker);
    // map.enableScrollWheelZoom();                 //启用滚轮放大缩小

    marker.addEventListener("click", function(){
        this.openInfoWindow(infoWindow);
    });

}
window.onload = loadJScript;  //异步加载地图
