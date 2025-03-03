const fotos = [{
    url: "./fotos/WhatsApp Image 2025-02-28 at 17.28.46.jpeg",
    alt: "Image 1",
    caption: "Caption 1",
    descripcion: "Nuestro primer dia, quien diria todo lo que se venia despues."
  },{
    url: "./fotos/WhatsApp Image 2025-02-28 at 17.28.47.jpeg",
    alt: "Image 2",
    caption: "Caption 2",
    descripcion: "De los primeros dias que nos juntamos."
  },{
    url: "./fotos/WhatsApp Image 2025-02-28 at 17.28.48.jpeg",
    alt: "Image 3",
    caption: "Caption 3",
    descripcion: "Tambien de las primeras veces, aca ya me empezaba a enamorar de vos."
  }
  ,{
    url: "fotos/WhatsApp Image 2025-02-28 at 17.28.50 (1).jpeg",
    alt: "Image 2",
    caption: "Caption 2",
    descripcion: "Esto fue la primera navidad que pasamos juntos, si no me acuerdo mal :)"
  }, {
    url: "./fotos/WhatsApp Image 2025-02-28 at 17.28.50 (2).jpeg",
    alt: "Image 3",
    caption: "Caption 3",
    descripcion: "Cuando saliste campeona en intermedia, y estuve ahi con vos <3"
  }, {
    url: "./fotos/WhatsApp Image 2025-02-28 at 17.28.50.jpeg",
    alt: "Image 4",
    caption: "Caption 4",
    descripcion: "Esto tambien fue en navidad(Que raro siempre sacandonos fotos en ocasiones asi)"
  }, {
    url: "./fotos/WhatsApp Image 2025-02-28 at 17.28.51 (2).jpeg",
    alt: "Image 5",
    caption: "Caption 5",
    descripcion: "La vez que salimos para navidad, hermoso pedo y larga vuelta"
  }, {
    url: "./fotos/WhatsApp Image 2025-02-28 at 17.28.51.jpeg",
    alt: "Image 6",
    caption: "Caption 6",
    descripcion: "El primer año nuevo que pasamos juntos, gracias por apoyarme en momentos asi."
  }, {
    url: "./fotos/WhatsApp Image 2025-02-28 at 17.28.52 (1).jpeg",
    alt: "Image 7",
    caption: "Caption 7",
    descripcion: "Un dia de los 300 que estuvimos en la quinta"
  }, {
    url: "./fotos/WhatsApp Image 2025-02-28 at 17.28.52 (2).jpeg",
    descripcion: "Otro dia mas en la quinta. Mirame asi toda la vida"
  } , {
    url: "./fotos/WhatsApp Image 2025-02-28 at 17.28.52.jpeg",
    descripcion: "Nuestro primer viaje juntitos, fue muy lindo todo"
  }, {
    url:"./fotos/WhatsApp Image 2025-02-28 at 17.28.53 (1).jpeg",
    descripcion: "Mi primer cumpleaños junto a vos, gracias por hacer que mi familia viaje hasta alla(Perdon por como busque el regalo a la noche)"
  } , {
    url: "./fotos/WhatsApp Image 2025-02-28 at 17.28.53 (2).jpeg",
    descripcion: "Una de las 1231241231 vueltas que pegamos en el auto"
  }, {
    url: "./fotos/WhatsApp Image 2025-02-28 at 17.28.53.jpeg",
    descripcion: "En la comunion de priscila, que contenta se puso cuando te vio"
  }, {
    url:"./fotos/WhatsApp Image 2025-02-28 at 17.28.54 (1).jpeg",
    descripcion: "Foto de esta navidad, primera vez que pasabas una fiesta sin tu familia"
  }, {
    url: "./fotos/WhatsApp Image 2025-02-28 at 17.28.54 (2).jpeg",
    descripcion: "Que raro sacandos fotos en ocasiones asi"
  } , {
    url: "./fotos/WhatsApp Image 2025-02-28 at 17.28.54.jpeg",
    descripcion: "Yendo a almorzar al campo despues de haber salido, hermosa resaca"
  } , {
    url: "./fotos/WhatsApp Image 2025-02-28 at 17.28.55 (1).jpeg",
    descripcion: "Nuestro primer XV juntos, que feo me quedaba ese saco por dios. Vos siempre una diosa"
  },{
    url: "./fotos/WhatsApp Image 2025-01-19 at 13.08.11.jpeg",
    descripcion: "Creo que esta foto nos define. Siempre riendonos"
  },
  {
    url: "./fotos/WhatsApp Image 2024-11-23 at 22.10.04.jpeg",
    descripcion: "Unos panchos en el balcon tranqui, deberiamos volver a hacer algo asi"
  },
  {
    url: "./fotos/WhatsApp Image 2025-02-16 at 19.14.22.jpeg",
    descripcion: "En el XV pero ya mucho mas entonados"
  } ,
  {
    url: "./fotos/WhatsApp Image 2025-02-28 at 17.28.55.jpeg",
    descripcion: "Nuestra ultima escapada par el 14 de febrero. Te amo por siempre Abril."
  }
];


fotos.forEach((foto) => {
    const cardHtml = `
    <div class="col-md-3" id="containerCard">
        <div class="card card-custom" id="card">
            <img src="${foto.url}" class="card-img-top" alt="Foto">
            <div class="card-body">
                <p class="card-text align-items-center justify-content-center">${foto.descripcion}</p>
            </div>
        </div>
    </div>
            
    `;

    document.getElementById("containerFotos").innerHTML += cardHtml;
});