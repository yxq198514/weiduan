//阻止空连接默认行为
$("body").on("click","a[href='#']",function(e){
    e.preventDefault()
})
//阻止图片拖拉
$("body").on("dragstart",function () {
    return false
})
//低版本浏览器提示
!function(){
    $.fn.ieTooltip=function(txt){
        if(navigator.userAgent.indexOf("MSIE 7.0")>0 || navigator.userAgent.indexOf("MSIE 6.0")>0){

            var txt = txt || '<p>顺网提醒您：为了更好的浏览本页面，快跟您过时的浏览器说声后会无期，强烈建议升级至<a href="http://windows.microsoft.com/zh-cn/windows/upgrade-your-browser" style="color:#4295EE" target="_blank">最新版IE</a></p>';
            $("body").prepend('<div id="ieToolTip">'+txt+'<span class="close" title="关闭">×</span></div>');
            $("body").on('click','#ieToolTip .close',function(){
                $('#ieToolTip').hide();
            })
        }
    }
    $(document).ieTooltip()
}();
