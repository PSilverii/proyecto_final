class PrestamoStorage {
    constructor(nombreStorage, logInStorage) {
        this.nombreStorage = nombreStorage.value;
        this.logInStorage = logInStorage.value;
    }
        //MUESTRO DATA STORAGE
    showStorage() {
        let returnDataStorage = document.getElementById("returnDataStorage");
        returnDataStorage.innerHTML =
            `<h3 class="page__subtittle">
                Usuarios nuevos en la sesión actual
            </h3>
            <p class="page__subtittle">
                Se llaman ${listaInteraccionesStorage}. ¿Están logueados?.
            </p>`;
    }
}
//ARRAY PARA STORAGE
let listaInteraccionesStorage = [];

let boton = document.getElementById("hacerPrestamo");
boton.addEventListener("submit", function (e) {
    //GUARDAR DATA EN STORAGE - LLAMA FUNCION
    e.preventDefault();
    let nombreStorage = document.getElementById("nombreUsuario");
    let logInStorage = document.getElementById("logInInput");
    let nuevoStorage = new PrestamoStorage(nombreStorage, logInStorage);
    listaInteraccionesStorage.push(nuevoStorage);
    let listaInteraccionesStorageJSON = JSON.stringify(listaInteraccionesStorage);
    sessionStorage.setItem("registroMomentaneo", listaInteraccionesStorageJSON);
    let recuperarPrestamoJSON = sessionStorage.getItem("registroMomentaneo");
    let storageParse = JSON.parse(recuperarPrestamoJSON);
    for (let nuevoStorage of storageParse) {
        nuevoStorage.showStorage();
    }
})
