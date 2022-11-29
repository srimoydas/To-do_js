const  item = document.getElementById('item');
const main = document.getElementById('to-do-box');

item.addEventListener('keyup',function(event){
    if(event.key=='Enter'){
        addTodo(this.value);
       
        localStorage.setItem('todo', this.value);
        this.value="";
    }
})

const addTodo =(items)=>{
    let listItem = document.createElement('li');
    main.appendChild(listItem)
    listItem.innerHTML=`${items}
    <i class="fas fa-times"></i>
`

    listItem.addEventListener('click',function(){
        listItem.classList.toggle('done');

    })

    let remover = document.querySelector("i");
    remover.addEventListener('click',function(){
        listItem.remove();
    })
}