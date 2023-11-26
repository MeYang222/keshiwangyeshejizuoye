var ti =4;
function a() {
    document.close()
    document.write(ti + "秒后跳转到登录界面...");
    ti--
    if(ti==0) {
        location.href = "html/kaishiyemian/index1.html"
    }
    setTimeout(a, 500);
}
//执行
setTimeout(a, 500);