const main = () =>{
    prepareElements()
    prepareEvents()
}
const prepareElements = () => {
    comment = document.querySelector('.form-control');
    publicBtn = document.querySelector('#comment-btn');
    ulList = document.querySelector('.comment-list');
    errorInfo = document.querySelector('.error-info');
}

const prepareEvents = () =>{
    publicBtn.addEventListener('click',addComment);
}

const addComment = () => {
    if(comment.value!==''){
       newli = document.createElement('li');
       ulList.appendChild(newli);
       newli.textContent=toDoInput.value;
       createToolsArea();
    }else{
       errorInfo.textContent = 'Wpisz komentarz';
    }
}

const createToolsArea = () =>{
    const tools = document.createElement('div');
    tools.classList.add('tools');
    const completebtn = document.createElement('button');
    completebtn.classList.add('complete');
    completebtn.innerHTML='<i class="fas fa-check"></i>';
    const editbtn = document.createElement('button');
    editbtn.classList.add('edit');
    editbtn.textContent='edit'.toUpperCase();
    const deletebtn = document.createElement('button');
    deletebtn.classList.add('delete');
    deletebtn.innerHTML='<i class="fas fa-times"></i>';
    tools.append(completebtn,editbtn,deletebtn);
    newli.append(tools);
}
document.addEventListener('DOMContentLoaded',main);