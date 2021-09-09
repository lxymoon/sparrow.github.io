// 获取所有需要的元素
const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");
const deleteAllBtn = document.querySelector(".footer button");
// onkeyup event
inputBox.onkeyup = ()=>{
  let userEnteredValue = inputBox.value; //让用户输入值
  if(userEnteredValue.trim() != 0){ //如果用户值不只是空格
    addBtn.classList.add("active"); //启动增加按钮
  }else{
    addBtn.classList.remove("active"); //不启动增加按钮
  }
}
showTasks(); //调用showTask函数
addBtn.onclick = ()=>{ //当用户点击加号图标按钮
  let userEnteredValue = inputBox.value; //获取输入字段值
  let getLocalStorageData = localStorage.getItem("New Todo"); //获取localstorage
  if(getLocalStorageData == null){ //localstorage没有数据
    listArray = []; //创建一个空白数组
  }else{
    listArray = JSON.parse(getLocalStorageData);  //将json字符串转换为js对象
  }
  listArray.push(userEnteredValue); //在数组中推入或添加新值
  localStorage.setItem("New Todo", JSON.stringify(listArray)); //将js对象转换为json字符串
  showTasks(); //调用 showTask 函数
  addBtn.classList.remove("active"); //一旦添加了任务，就取消添加按钮的活动
}
function showTasks(){
  let getLocalStorageData = localStorage.getItem("New Todo");
  if(getLocalStorageData == null){
    listArray = [];
  }else{
    listArray = JSON.parse(getLocalStorageData); 
  }
  const pendingTasksNumb = document.querySelector(".pendingTasks");
  pendingTasksNumb.textContent = listArray.length; //在pendingtask中传递数组长度
  if(listArray.length > 0){ //如果数组长度大于0
    deleteAllBtn.classList.add("active"); //激活删除按钮
  }else{
    deleteAllBtn.classList.remove("active"); //取消删除按钮
  }
  let newLiTag = "";
  listArray.forEach((element, index) => {
    newLiTag += `<li>${element}<span class="icon" onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span></li>`;
  });
  todoList.innerHTML = newLiTag; //在ul标签中添加新的li标签
  inputBox.value = ""; //一旦添加了任务，请保留输入字段为空
}
// 删除任务
function deleteTask(index){
  let getLocalStorageData = localStorage.getItem("New Todo");
  listArray = JSON.parse(getLocalStorageData);
  listArray.splice(index, 1); //删除li
  localStorage.setItem("New Todo", JSON.stringify(listArray));
  showTasks(); //调用showTasks函数
}
// 删除所有任务
deleteAllBtn.onclick = ()=>{
  listArray = []; //清空数组
  localStorage.setItem("New Todo", JSON.stringify(listArray)); //在本地存储中设置项
  showTasks(); //调用showTasks函数
}