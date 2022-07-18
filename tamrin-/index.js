const todotitle = document.getElementById("title");
const tododesc = document.getElementById("desc");
const submitTodoButton = document.getElementById("submit");
const mainlist = document.getElementById("main")

// handel add new todo 
   

const handlecreateNewTodo  = (event) => {
event.preventDefault();


if (! todotitle.value) return alert('form nnot valid!');






const newtodo = {
    title:todotitle.value,
    desc:tododesc.value,
};

const ListItem = document.createElement('li');

//ListItem.setAttribute("class" , "list-item"); 



const TodotitleHeading = document.createElement('h3');
TodotitleHeading.innerHTML = newtodo.title;
TodotitleHeading.style.backgroundColor = "tomato"



const TodoDescpara = document.createElement('p');
TodoDescpara.innerHTML = newtodo.desc;

console.log(ListItem ,  TodotitleHeading ,TodoDescpara);


ListItem.appendChild(TodotitleHeading);
ListItem.appendChild( TodoDescpara);

const todoActions = ` 
<div>
<button>del</button>
<button>edit</button>
<button>ypdate</button>
</div>`;

ListItem.innerHTML += todoActions;

mainlist .appendChild(ListItem);

}


submitTodoButton.addEventListener( 'click'  , handlecreateNewTodo)

   
