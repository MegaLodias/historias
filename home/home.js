const historias = [
    {
        id: 0,
        author: "Mia Lopez",
        imageUrl: "../img/foto1.jpg",
    },
    {
        id: 1,
        author: "Leo Rivas",
        imageUrl: "../img/foto2.jpg",
    },
    {
        id: 2,
        author: "Anto Diaz",
        imageUrl: "../img/foto3.jpg",
    },
    {
        id: 3,
        author: "Cami Lanchi",
        imageUrl: "../img/foto4.jpg",
    },
    {
        id: 4,
        author: "Ale Zamora",
        imageUrl: "../img/foto5.jpg",
    },
    {
        id: 5,
        author: "Patrick Miranda",
        imageUrl: "../img/foto6.jpg",
    },
    {
        id: 6,
        author: "Emma",
        imageUrl: "../img/foto7.jpg",
    },
    {
        id: 7,
        author: "Andreu Perez",
        imageUrl: "../img/foto8.jpg",
    },
    {
        id: 8,
        author: "Amy Amaya",
        imageUrl: "../img/foto9.jpg",
    },
    {
        id: 9,
        author: "Grace",
        imageUrl: "../img/foto10.jpg",
    },
];

const stories = document.querySelector(".stories");
const storiesFull= document.querySelector(".stories-full");
const closeBtn= document.querySelector(".close-btn");
const storyImageFull= document.querySelector(".stories-full .story img");
const storyAuthorFull= document.querySelector(".stories-full .story .author");

let currentActive = 0;

const nextBtn= document.querySelector(".stories-bt .next-btn");
const previousBtn= document.querySelector(".stories-bt .previous-btn");
const storiesContent= document.querySelector(".stories-bt .content");
const nextBtnFull= document.querySelector(".stories-full .next-btn");
const previousBtnFull= document.querySelector(".stories-full .previous-btn");


const createHistorias = () => {
    historias.forEach((s, i) => {
        const story = document.createElement("div");
        story.classList.add("story");
        const img = document.createElement("img");
        img.src = s.imageUrl;
        const author = document.createElement("div");
        author.classList.add("author");
        author.innerHTML = s.author;

        story.appendChild(img);
        story.appendChild(author);

        stories.appendChild(story);

        story.addEventListener("click", () => {
            showFull(i);
        });
    });
};

createHistorias();

const showFull = (index) => {
    currentActive = index;
    updateFull();
    storiesFull.classList.add("active");
};

closeBtn.addEventListener("click", () =>{
    storiesFull.classList.remove("active");
});

const updateFull= () =>{
    storyImageFull.src= historias[currentActive].imageUrl;
    storyAuthorFull.innerHTML= historias[currentActive].author;
};

nextBtn.addEventListener("click", () => {
    storiesContent.scrollLeft += 300;
});

previousBtn.addEventListener("click", () =>{
    storiesContent.scrollLeft -=300;
});

storiesContent.addEventListener("scroll", () =>{
    if(storiesContent.scrollLeft <= 24){
        previousBtn.classList.remove("active");
    }else{
        previousBtn.classList.add("active");
    }

    let maxScrollValue= 
    storiesContent.scrollWidth - storiesContent.clientWidth - 24;

    if(storiesContent.scrollLeft >= maxScrollValue){
        nextBtn.classList.remove("active");
    }else{
        nextBtn.classList.add("active");
    }
});

nextBtnFull.addEventListener("click", () =>{
    if(currentActive >= historias.length -1){
        return;
    }
    currentActive++;
    updateFull();
});

previousBtnFull.addEventListener("click", ()=>{
    if(currentActive <=0){
        return;
    }
    currentActive--;
    updateFull();
});

// odiolavida
// function borrarLocalStorage() {
//     localStorage.removeItem('publicaciones');
//     publicaciones = [];
//     mostrarPublicaciones();
// }

// nuevo
       // Inicializar las publicaciones desde el localStorage
       var publicaciones = JSON.parse(localStorage.getItem('publicaciones')) || [];

       // Mostrar las publicaciones guardadas al cargar la página
       mostrarPublicaciones();
   
       function publicar() {
           var texto = document.getElementById('textoPublicacion').value;
   
           // Validar que el texto no esté vacío
           if (texto.trim() !== "") {
               publicaciones.push(texto);
               document.getElementById('textoPublicacion').value = "";
               localStorage.setItem('publicaciones', JSON.stringify(publicaciones));
                 mostrarPublicaciones();
           } else {
               alert("Por favor, ingresa un texto antes de publicar.");
           }
       }

   
   
       // Función para mostrar las publicaciones
       function mostrarPublicaciones() {
           var contenedorPublicaciones = document.getElementById('contenedorPublicaciones');
              contenedorPublicaciones.innerHTML = "";
   
           // Crear y agregar el div de cada publicación
           for (var i = 0; i < publicaciones.length; i++) {
               var divPost = document.createElement('div');
               divPost.className = 'post';
   
               // Estructura interna del div de la publicación
               var postTop = document.createElement('div');
               postTop.className = 'post__top';
   
               var postTopInfo = document.createElement('div');
               postTopInfo.className = 'post__topInfo';
   
               var nombreUsuario = document.createElement('h3');
               nombreUsuario.textContent = 'Yo';
   
               var momento = document.createElement('p');
               momento.textContent = 'En este momento';
   
               postTopInfo.appendChild(nombreUsuario);
               postTopInfo.appendChild(momento);
   
               postTop.appendChild(postTopInfo);
   
               var postBottom = document.createElement('div');
               postBottom.className = 'post__bottom';
   
               var mensaje = document.createElement('p');
               mensaje.textContent = publicaciones[i];
   
               postBottom.appendChild(mensaje);
   
               var postOptions = document.createElement('div');
               postOptions.className = 'post__options';
   
               // Opciones de la publicación
               var optionLike = document.createElement('div');
               optionLike.className = 'post__option';
               optionLike.innerHTML = '<span class="material-icons"></span><p>Like</p>';
               optionLike.addEventListener('mouseenter', mostrarReacciones);
               optionLike.addEventListener('mouseleave', ocultarReacciones);
               postOptions.appendChild(optionLike);
   
            //    var optionComment = document.createElement('div');
            //    optionComment.className = 'post__option';
            //    optionComment.innerHTML = '<span class="material-icons"></span><p>Comment</p>';
            //    postOptions.appendChild(optionComment);
   
               var optionShare = document.createElement('div');
               optionShare.className = 'post__option';
               optionShare.innerHTML = '<span class="material-icons"></span><p>Share</p>';
               postOptions.appendChild(optionShare);
   
               divPost.appendChild(postTop);
               divPost.appendChild(postBottom);
               divPost.appendChild(postOptions);
   
               // Agregar el div de la publicación al contenedor principal
               contenedorPublicaciones.appendChild(divPost);
           }
       }


   
       // Función para mostrar reacciones al pasar sobre el botón "Like"
       function mostrarReacciones() {
           var textoLike = this.querySelector('p');
           textoLike.style.display = 'none';
   
           var reacciones = document.createElement('div');
           reacciones.className = 'reacciones';
   
           var listaReacciones = ['\uD83D\uDE0D', '\uD83D\uDC4D', '\uD83D\uDE06', '\uD83D\uDE22', '\uD83D\uDE20'];
   
           // Crear y agregar cada reacción al contenedor
           listaReacciones.forEach(function (emoji) {
               var reaccion = document.createElement('span');
               reaccion.className = 'reaccion';
               reaccion.textContent = emoji;
               reaccion.addEventListener('click', function () {
                   seleccionarReaccion.call(this, textoLike);
               });
               reacciones.appendChild(reaccion);
           });
   
           // Agregar las reacciones al contenedor
           this.appendChild(reacciones);
       }
   
       // Función para ocultar reacciones al quitar el cursor del botón "Like"
       function ocultarReacciones() {
           var reacciones = this.querySelector('.reacciones');
           if (reacciones) {
               reacciones.remove();
           }
   
           var textoLike = this.querySelector('p');
           textoLike.style.display = 'inline';
       }
   
       // Función para seleccionar una reacción
       function seleccionarReaccion(textoLike) {
           var reacciones = this.parentNode.querySelector('.reacciones');
           if (reacciones) {
               reacciones.remove();
           }
   
           textoLike.style.display = 'inline';
           textoLike.innerHTML = this.textContent;
       }