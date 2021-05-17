const ulElement = document.querySelector(".js-list");

const tasks = [
    { name: 'Recoger setas en el campo', completed: true },
    { name: 'Comprar pilas', completed: true },
    { name: 'Poner una lavadora de blancos', completed: true },
    {
      name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
      completed: false
    }
  ];

  console.log(tasks.length);




  function paintTasks () {
    
    let html = ""; //por qué necesito esta variable html?
    let addClass = "";
    let checked ="";
    
    for (let i= 0; i< tasks.length; i++){
      let task = tasks[i]; //por qué declaro variable task con el array?
      
      if (task.completed === true) {
      addClass = "completed";
      checked = "checked";
      } else {
        addClass = "";
      }

      html += `<li class="${addClass}"> <input type ="checkbox" value="${i}" ${checked} /> ${task.name} </li> `;
      
    }
    ulElement.innerHTML = html;
  }
  paintTasks ();