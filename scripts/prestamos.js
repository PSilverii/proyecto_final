class Prestamos {
    constructor(nombre, monto, cuotas, logIn) {
        this.nombre = nombre.value;
        this.monto = monto.value;
        this.cuotas = cuotas.value;
        this.logIn = logIn.value.toLowerCase();
    }

    //METODO AVISO DE LOGIN
    beneficios() {
        if (this.logIn === "si") {
            let returnLogIn = document.getElementById("returnLogIn");
            returnLogIn.innerHTML =
                `<h3 class="page__subtittle">¡Genial ${this.nombre}! iniciaste sesión! Tenés un 5% menos de intereses en tus prestamos</h3>`;
        }
        else {
            let returnLogIn = document.getElementById("returnLogIn");
            returnLogIn.innerHTML = `<h3 class="page__subtittle">Ups, para aprovechar los beneficios tenes que iniciar sesión</h3>`;
        }
    }
    //METODO INTERESES Y DESCUENTOS POR LOGIN - RETORNA INFO EN EL SITIO
    calculoIntereses() {
        if (this.cuotas <= 3 && (this.logIn === "si")) {
            let interes = parseInt(this.monto) * 0.15;
            let total = parseInt(this.monto) + parseInt(interes);
            let totalCuotas = parseInt(total) / parseInt(this.cuotas);
            let returnData = document.getElementById("returnData");
            returnData.innerHTML =
                `<p class="page__subtittle">
                    Querés un  prestamo de, ${this.monto} en ${this.cuotas} cuotas.
                </p>
                <p class="page__subtittle">
                    ¡Estas aprovechando los beneficios!
                </p>
                <p class="page__subtittle">
                    El prestamo tiene un interes total de 15% que serían ${interes}
                </p>
                <p class="page__subtittle">
                    El total a pagar es de" ${total}, lo que serían ${totalCuotas} por mes
                </p>
                `;
        }
        else if (this.cuotas > 3 && this.cuotas <= 6 && (this.logIn === "si")) {
            let interes = parseInt(this.monto) * 0.25;
            let total = parseInt(this.monto) + parseInt(interes);
            let totalCuotas = parseInt(total) / parseInt(this.cuotas);
            let returnData = document.getElementById("returnData");
            returnData.innerHTML =
                `<p class="page__subtittle">
                    Querés un  prestamo de, ${this.monto} en ${this.cuotas} cuotas.
                </p>
                <p class="page__subtittle">
                    ¡Estas aprovechando los beneficios!
                </p>
                <p class="page__subtittle">
                    El prestamo tiene un interes total de 25% que serían ${interes}
                </p>
                <p class="page__subtittle">
                    El total a pagar es de" ${total}, lo que serían ${totalCuotas} por mes
                </p>
                `;
        }
        else if (this.cuotas > 6 && this.cuotas <= 12 && (this.logIn === "si")) {
            let interes = parseInt(this.monto) * 0.35;
            let total = parseInt(this.monto) + parseInt(interes);
            let totalCuotas = parseInt(total) / parseInt(this.cuotas);
            let returnData = document.getElementById("returnData");
            returnData.innerHTML =
                `<p class="page__subtittle">
                    Querés un  prestamo de, ${this.monto} en ${this.cuotas} cuotas.
                </p>
                <p class="page__subtittle">
                    ¡Estas aprobechando los beneficios!
                </p>
                <p class="page__subtittle">
                    El prestamo tiene un interes total de 35% que serían ${interes}
                </p>
                <p class="page__subtittle">
                    El total a pagar es de" ${total}, lo que serían ${totalCuotas} por mes
                </p>
                `;
        }
        else if (this.cuotas > 12 && (this.logIn === "si")) {
            let interes = parseInt(this.monto) * 0.45;
            let total = parseInt(this.monto) + parseInt(interes);
            let totalCuotas = parseInt(total) / parseInt(this.cuotas);
            let returnData = document.getElementById("returnData");
            returnData.innerHTML =
                `<p class="page__subtittle">
                    Querés un  prestamo de, ${this.monto} en ${this.cuotas} cuotas.
                </p>
                <p class="page__subtittle">
                    ¡Estas aprovechando los beneficios!
                </p>
                <p class="page__subtittle">
                    El prestamo tiene un interes total de 45% que serían ${interes}
                </p>
                <p class="page__subtittle">
                    El total a pagar es de" ${total}, lo que serían ${totalCuotas} por mes
                </p>
                `;
        }
        else if (this.cuotas <= 3) {
            let interes = parseInt(this.monto) * 0.20;
            let total = parseInt(this.monto) + parseInt(interes);
            let totalCuotas = parseInt(total) / parseInt(this.cuotas);
            let returnData = document.getElementById("returnData");
            returnData.innerHTML =
                `<p class="page__subtittle">
                    Querés un  prestamo de, ${this.monto} en ${this.cuotas} cuotas.
                </p>
                <p class="page__subtittle">
                    No estas aprovechando los beneficios :(
                </p>
                <p class="page__subtittle">
                    El prestamo tiene un interes total de 20% que serían ${interes}
                </p>
                <p class="page__subtittle">
                    El total a pagar es de" ${total}, lo que serían ${totalCuotas} por mes
                </p>
                `;
        }
        else if (this.cuotas > 3 && this.cuotas <= 6) {
            let interes = parseInt(this.monto) * 0.30;
            let total = parseInt(this.monto) + parseInt(interes);
            let totalCuotas = parseInt(total) / parseInt(this.cuotas);
            let returnData = document.getElementById("returnData");
            returnData.innerHTML =
                `<p class="page__subtittle">
                    Querés un  prestamo de, ${this.monto} en ${this.cuotas} cuotas.
                </p>
                <p class="page__subtittle">
                    No estas aprovechando los beneficios :(
                </p>
                <p class="page__subtittle">
                    El prestamo tiene un interes total de 30% que serían ${interes}
                </p>
                <p class="page__subtittle">
                    El total a pagar es de" ${total}, lo que serían ${totalCuotas} por mes
                </p>
                `;
        }
        else if (this.cuotas > 6 && this.cuotas <= 12) {
            let interes = parseInt(this.monto) * 0.40;
            let total = parseInt(this.monto) + parseInt(interes);
            let totalCuotas = parseInt(total) / parseInt(this.cuotas);
            let returnData = document.getElementById("returnData");
            returnData.innerHTML =
                `<p class="page__subtittle">
                    Querés un  prestamo de, ${this.monto} en ${this.cuotas} cuotas.
                </p>
                <p class="page__subtittle">
                    No estas aprovechando los beneficios :(
                </p>
                <p class="page__subtittle">
                    El prestamo tiene un interes total de 40% que serían ${interes}
                </p>
                <p class="page__subtittle">
                    El total a pagar es de" ${total}, lo que serían ${totalCuotas} por mes
                </p>
                `;
        }
        else if (this.cuotas > 12) {
            let interes = parseInt(this.monto) * 0.50;
            let total = parseInt(this.monto) + parseInt(interes);
            let totalCuotas = parseInt(total) / parseInt(this.cuotas);
            let returnData = document.getElementById("returnData");
            returnData.innerHTML =
                `<p class="page__subtittle">
                    Querés un  prestamo de, ${this.monto} en ${this.cuotas} cuotas.
                </p>
                <p class="page__subtittle">
                    No estas aprovechando los beneficios :(
                </p>
                <p class="page__subtittle">
                    El prestamo tiene un interes total de 50% que serían ${interes}
                </p>
                <p class="page__subtittle">
                    El total a pagar es de" ${total}, lo que serían ${totalCuotas} por mes
                </p>
                `;
        }
    }
}

//ARRAY PARA RETURN
let listaInteracciones = [];

//ELEMENTOS HTML INGRESO DE DATOS - LLAMA METODOS
let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    let nombre = document.getElementById("nombreUsuario");
    let monto = document.getElementById("montoInput");
    let cuotas = document.getElementById("cantidadCuotas");
    let logIn = document.getElementById("logInInput");
    let nuevoPrestamo = new Prestamos(nombre, monto, cuotas, logIn);
    listaInteracciones.push(nuevoPrestamo);
    for (let nuevoPrestamo of listaInteracciones) {
        nuevoPrestamo.beneficios();
        nuevoPrestamo.calculoIntereses();
    }
    //ALERTA DE PRESTAMO CON SweetAlert2
    Swal.fire({
        title: '¡Ya pediste tu prestamo!',
        text: 'Abajo de la página te van a aparecer los detalles.',
        background:'#FFFFFF',
        icon: 'success',
        confirmButtonText: 'Aceptar'
    })
})
