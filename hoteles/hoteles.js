
let tituloHoteles = document.getElementById("tituloHoteles");
tituloHoteles.innerHTML = `<h1 class="mt-5">Hoteles en bariloche</h1><p>Elegí la fecha de tu viaje para ver los mejores precios y ofertas de alojamientos en San Carlos de Bariloche</p><h2>Ofertas de Hoteles en San Carlos de Bariloche</h2><p>Estos son los hoteles más elegidos de San Carlos de Bariloche. Encontrá la mejor opción para tu alojamiento</p>`;

const Hoteles = [{id: 1, nombre: "Hotel Cristal", descripcion: "Situado en el centro de San Carlos de Bariloche, el Hotel Cristal dispone de piscina interior, bañera de hidromasaje, además de spa con sauna y masaje.", distancia: "A 454 m del centro", precio: 10100, informacion: "• Piscina •Servicio de Spa •Estacionamiento gratis •Gimnasio •Desayuno (incluido) •Wi-fi gratis •Restaurante •Servicio a la habitación", horarios: "•Horario Check in: 14:00 hs <br> •Horario Check out: 10:00 hs <br> •Desayuno: 7:30 a 10:30 hs"},
                 
                {id: 2, nombre: "Hotel Nevada", descripcion: "El Hotel Nevada se encuentra en el centro de Bariloche, a 50 m de la Calle Mitre y a 5 minutos a pie del Centro Cívico. El hotel ofrece Wi-Fi de cortesía y un salón de eventos con capacidad para 250 personas y dos salas de reuniones. Los servicios incluyen business center y servicios con costo adicional como lavandería, tintorería y estacionamiento.", distancia: "A 388 m del centro", precio: 9500, informacion: "•Desayuno (incluido) •Bar •Wi-fi gratis •Salón de juegos •Servicio a la habitación •Estacionamiento con costo adicional", horarios: "•Horario de Check in: de 15:00 a 00:00 hs <br> •Horario de Check out: 11:00hs <br> •Desayuno: 7:30 a 10:00 hs"},
                
                {id: 3, nombre: "Alt Interlaken Hotel", descripcion: "Cuenta con wi-fi gratis en zonas comunes, servicio de spa y sauna, además de salón de juegos. El alojamiento sirve diariamente el desayuno, el cual se ofrece en el restaurante. También dispone de bar.", distancia: "A 478 m del centro", precio: 11700, informacion: "•Gimnasio •Wi-fi gratis •Desayuno •Servicio de Spa •Salón de Juegos •Restaurante", horarios: "•Horario de Check in: de 14:00 a 23:00 <br> •Horario de Check out: 10:00 <br> •Desayuno: De 07:30 a 10:00"},
                
                {id: 4, nombre: "Panamericano Bariloche", descripcion: "El Hotel Panamericano Bariloche ofrece piscina cubierta climatizada y sirve desayuno buffet. Las comodidades incluyen bar y cafetería. Además, se ofrece servicio a la habitación.", distancia: "A 551 m del centro", precio: 10000, informacion: "•Gimnasio •Wi-fi gratis •Desayuno •Piscina •Servicio de Spa •Bar •Solárium •Alquiler/Renta de autos", horarios: "•Horario de Check in: 15:00 <br> •Horario de Check out: 12:00 <br> •Desayuno:De 07:00 a 11:00"},
                
                {id: 5, nombre: "Alma Del Lago Suites", descripcion: "Ubicado frente al Lago Nahuel Huapi, en Bariloche, el Alma Del Lago Suites dispone de piscina cubierta y climatizada, vista al lago y recepción 24h, con personal disponible para ofrecer información turística.", distancia: "A 1,11 km del centro", precio: 19800, informacion: "•Gimnasio •Wi-fi gratis •Desayuno •Piscina •Estacionamiento gratis •Servicio de Spa •Solárium •Alquiler/Renta de auto •Restaurante •Servicio a la habitación", horarios: "•Horario de Check in: de 15:00 a 23:59 <br> •Horario de Check out: 11:00 <br> •Desayuno: De 07:00 a 10:30"},
                
                {id: 6, nombre: "Huinid Bustillo Hotel & Spa", descripcion: "Ubicado a 3 km del Centro Cívico y comercial de Bariloche, el Huinid Bustillo Hotel se encuentra a 17 km del Acceso al Cerro Catedral. Dispone de Wi-Fi gratuito en toda la propiedad y spa con piscina cubierta climatizada.<br> El Huinid Bustillo Hotel alberga el restaurante Batistin, donde se sirve un desayuno buffet incluido en la tarifa, así como una variedad de platos regionales a la carta acompañados por una selección de vinos.", distancia: "A 2,49 km del centro", precio: 14000, informacion: "•Gimnasio •Wi-fi gratis •Desayuno •Piscina •Estacionamiento gratis •Servicio de Spa •Solárium •Restaurante •Salón de Juegos", horarios: "•Horario de Check in: 16:00 <br> •Horario de Check out: 12:00 <br> •Desayuno: De 07:00 a 10:00"},
                
                {id: 7, nombre: "Aguila Mora Suites & Spa", descripcion: "Frente al Lago Nahuel Huapi, Aguila Mora Suites & Spa está ubicado a 5 km del centro Cívico de Bariloche, a 8 km de Cerro Catedral y a 19km del Aeropuerto Internacional de Bariloche Tte. Luis Candelaria. Ofrece Wi-Fi gratis y piscina cubierta climatizada.<br>El establecimiento dispone de gimnasio, estacionamiento gratuito, sauna y recepción 24h, así como spa con servicio de masaje. Hay traslado por la región por un cargo adicional.<br>El desayuno se sirve diariamente en el hotel.", distancia: "A 4,64 km del centro", precio: 21900, informacion: "•Gimnasio •Wi-fi gratis •Desayuno •Piscina •Estacionamiento gratis •Servicio de Spa •Parque infantil", horarios: "•Horario de Check in: de 15:00 a 00:00 <br> •Horario de Check out: de 00:00 a 11:00 <br> •Desayuno: De 09:00 a 10:30"},

]

let divHoteles1 = document.getElementById("divHoteles1");

Hoteles.forEach((hotel, indice) => {
    divHoteles1.innerHTML += `<div id="hoteles" class="row justify-content-center align-items-center">
                                <div class="card border-dark mb-3" style="max-width: 1000px;">
                                    <div class="row g-0">
                                        <div class="col-md-4">
                                            <img src="..." class="img-fluid rounded-start" alt="...">
                                        </div>
                                        <div class="col-md-8 ">
                                            <div class="card-body">
                                                <h5 class="card-title fw-bold fs-3 text-center">${hotel.nombre}</h5>
                                                <p class="card-text">${hotel.distancia}</p>
                                                <p class="card-text">${hotel.descripcion}</p>
                                                <p class="card-text">$${hotel.precio} (Precio por noche con impuestos incluidos)</p>
                                                <p>
                                                    <a class="btn btn-light me-2 border border-dark" data-bs-toggle="collapse" href="#collapseExample${hotel.id}" role="button" aria-expanded="false" aria-controls="collapseExample">
                                                        Más detalles
                                                    </a>
                                                    <button class="btn btn-dark" type="button">
                                                       Solicitar 
                                                    </button>
                                                </p>
                                                <div class="collapse" id="collapseExample${hotel.id}">
                                                    <div class="card card-body">
                                                        <h5>El alojamiento ofrece</h5>
                                                        <p class="card-text">${hotel.informacion}</p>
                                                        <h5>Condiciones del alojamiento</h5>
                                                        <p class="card-text">${hotel.horarios}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>`
})


const Hoteles2 = null

console.log( Hoteles || "Hoteles disponibles")
console.log( Hoteles2 || "No hay mas Hoteles para ofrecer")

console.log( Hoteles?.temporada?.invierno || "informacion no existente")

const Hoteles3 = {
    nombre: "VIlla Huapi",
    distancia: "A 12,04 km del centro",
    precio: 9600,
}

const {nombre, distancia, precio} = Hoteles3
console.log(nombre)
console.log(distancia)
console.log(precio)

const Hoteles4 = {
    hotel_id: "Hotel conconde",
    hotel_km: "A 124m del centro",
    hotel_valor: 5900,
}

const {
    hotel_id: nombre2,
    hotel_km: distancia2,
    hotel_valor: precio2
} = Hoteles4

console.log(nombre2)