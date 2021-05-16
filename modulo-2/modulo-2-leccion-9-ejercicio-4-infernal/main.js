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

    let html = "";
    for (let i= 0; i< tasks.length; i++){
      let task = tasks[i];
      html += `<li> <input type ="checkbox" value="${i}" /> ${task.name} </li> `;
      
    }
    ulElement.innerHTML = html;
  }
  paintTasks ();