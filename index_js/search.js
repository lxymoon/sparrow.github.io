function search(){
    if(document.getElementById("search_input").value!=""){
        window.location.href="https://baidu.com/baidu?wd="+document.getElementById("search_input").value;
        document.getElementById("search_input").value="";
    }
    return false;
}