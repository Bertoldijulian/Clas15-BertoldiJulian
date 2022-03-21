
let tituloAct = document.getElementById("tituloAct");
tituloAct.innerHTML = "<h1>Verano en Bariloche</h1><p>Te presentamos algunas de las actividades que no podes perderte</p";

const actividades = [{id: 1, nombre: "Circuito Chico Excursion - Lagos y Montañas", duracion: "4 HS" ,precio: 2200},
                     {id: 2, nombre: "Circuito Grande y Villa Traful", duracion: "9 HS", precio: 5500},
                     {id: 3, nombre: "Paseo en barco e Isla Victoria y Bosque de Arrayanes", duracion: "5 HS", precio: 6450},
                     {id: 4, nombre: "Cabalgata en la Estepa Patagónica", duracion: "6 HS", precio: 12764},
                     {id: 5, nombre: "Rafting Río Limay", duracion: "4 HS", precio: 7300},
                     {id: 6, nombre: "Caminata Brazo Tristeza", duracion: "4 HS", precio: 3880},
                     {id: 7, nombre: "San Martín de los Andes por la Ruta de los 7 Lagos", duracion: "10 HS", precio: 5000},
                     {id: 8, nombre: "Aerosilla Cerro Campanario", duracion: "1 HS", precio: 1375}
]

let divActividades = document.getElementById("divActividades");

actividades.forEach((actividad, act) => {
    divActividades.innerHTML += `<div id="actividades" class="row justify-content-center align-items-center">
                                    <div class="card mb-3" style="max-width: 1000px;">
                                        <img src="..." class="card-img-top" alt="...">
                                        <div class="card-body">
                                            <h5 class="card-title">${actividad.nombre}</h5>
                                            <p class="card-text">${actividad.duracion}</p>
                                            <p class="card-text"></p>
                                            <p class="card-text">$${actividad.precio} (por persona)</p>
                                        </div>
                                    </div>
                                </div>`
})  

