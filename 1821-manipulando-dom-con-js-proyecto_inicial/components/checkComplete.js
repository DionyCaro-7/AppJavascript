//Creamos el botoncheck
const checkComplete = () => {
    const i = document.createElement("i");
    i.classList.add("far","fa-check-square","icon");
    i.addEventListener("click", completeTask);
    return i;
};

//Esta funcón se ejecuta cuando el usuario le de click a nuestro elemento checkComplete
//Immediately invoked function expression IIFE
const completeTask = (event) =>{
    const element = event.target
    element.classList.toggle("fas");
    element.classList.toggle("completeIcon");
    element.classList.toggle("far");
    
}

export default checkComplete;