let divGaleria = document.getElementById(`divGaleria`)

fetch(`./galeria/excursiones.json`)
.then(res => res.json()
.then(excursiones => {
    excursiones.forEach((excursion) => {
        divGaleria.innerHTML += `
            <div class="card mb-3">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${excursion.actividad}</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
        `
    })
}))