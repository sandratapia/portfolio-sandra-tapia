# Portfolio Sandra Tapia

_Página realizada con JavaScript, con el fin de visibilizarme como programadora Front End, contando mi historia y mostrando los proyectos realizados._

## Tecnologías utilizadas 🚀

_Este proyecto está hecho con JavaScript, HTML5, preprocesador Gulp, Sass y CSS3._

### Instalación 🔧

_Para poner en marcha el proyecto abre una terminal en la carpeta raíz de tu repositorio e instala las dependencias locales ejecutando en la terminal el comando:_

```
npm install
```

_Para arrancar el proyecto, hay que ejecutar el comando siguiente en la consola:_

```
npm start
```

_Por último para publicar la página en GitHub Pages, ejecutamos el siguiente comando:_

```
npm run docs
```

### Proyecto
_El HTML está dividido en parciales los cuales se meten en su index correspondiente mediante includes. JavaScript para la lógica de la página y para darles dinamismo. El CSS se preprocesa con Gulp y Sass._

_Algunos ejemplos de código, que merece la pena destacar serían:_

```
function showProject(n) {
  const allProjects = document.querySelectorAll(".card_project-js");
  if (n >= allProjects.length) {
    projectsIndex = 0;
  } else if (n < 0) {
    projectsIndex = allProjects.length - 1;
  }

  for (let i = 0; i < allProjects.length; i++) {
    allProjects[i].style.display = "none";
  }
  allProjects[projectsIndex].style.display = "flex";
}
```

_Y ya estaría!!_

---
⌨️ Con ❤️ por [SandraTapia](https://github.com/sandratapia) 😊
