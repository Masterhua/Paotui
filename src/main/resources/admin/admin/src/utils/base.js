const base = {
    get() {
        return {
            url : "http://47.250.81.47:8080/xiaoyuanfuwupingtai/",
            name: "xiaoyuanfuwupingtai",
            // 退出到首页链接
            indexUrl: 'http://47.250.81.47:8080/xiaoyuanfuwupingtai/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "校园跑腿"
        } 
    }
}
export default base
