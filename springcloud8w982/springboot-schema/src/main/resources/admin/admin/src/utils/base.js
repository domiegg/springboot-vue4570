const base = {
    get() {
        return {
            url : "http://localhost:8080/springcloud8w982/",
            name: "springcloud8w982",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springcloud8w982/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于web的智慧养老平台"
        } 
    }
}
export default base
