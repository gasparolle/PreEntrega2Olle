// SIMULADOR DE RENT A CAR

class AutosEnAlquiler{
    constructor(marca, modelo, disponible){
        this.marca = marca
        this.modelo = modelo
        this.disponible = disponible
    };
}

let listadoAutos = [
    new AutosEnAlquiler('Ford', 'Ka', true),
    new AutosEnAlquiler('Chevrolet', 'Cruze', true),
    new AutosEnAlquiler('Volkswagen', 'Polo', false),
    new AutosEnAlquiler('Suzuki', 'Fun', true)
]


function solicitarAuto(){
    let autoElegido
    let autoDisponible = false;

    while(autoDisponible === false) {
          let mostrarMarcas = listadoAutos.map(el => el.marca);
          let mensElegirAuto = "Ingrese la marca del auto que desee alquilar: \n" + mostrarMarcas.join('\n');
          autoElegido = prompt(mensElegirAuto);
          const auto = listadoAutos.find(el => el.marca === autoElegido);
                   
                   if (auto && auto.disponible) {
                    alert("¡Felicitaciones, disfruta de tu " + autoElegido + "!");
                    auto.disponible = false;
                    break;
                    
                   } else if (auto) {
                     alert("El auto seleccionado no se encuentra disponible, vuelva a elegir otro");
                   } 
                     else {
                     alert("El auto seleccionado no existe, vuelva a elegir otro");
                   }
            }
}


function devolverAuto(){
    let devolucionValida = false;

    do {
        const devolucion = prompt("Por favor, ingrese la marca del auto que desea devolver");
        const autoADevolver = listadoAutos.find(el => el.marca === devolucion);
    if (!autoADevolver){
        alert("El auto que desea devolver no existe. Ingrese la marca correcta del auto a devolver");
    }    else if(autoADevolver.disponible){
        alert("El auto ya fue devuelto anteriormente. Introduzca la marca del vehiculo que desea devolver");
    }    else {
        alert("Gracias por devolver el auto y elegir nuestro servicio. Lo esperamos pronto");
        autoADevolver.disponible = true;
        devolucionValida = true;
    }
} while (devolucionValida === false);

}

function agregarAuto (){
    const marcaAuto = prompt("Ingrese la marca del auto que desea poner en alquiler");
    const modeloAuto = prompt("Ingrese el modelo del auto");

    const autoNuevo = new AutosEnAlquiler(marcaAuto, modeloAuto, true);
    listadoAutos.push(autoNuevo);
    alert("Su auto fue incorporado con exito y ya se encuentra disponible para ser alquilado. ¡Gracias por elegirnos!");
}

let menuOpciones;

do {
    menuOpciones = prompt("Bienvenido al Rent a Car. \n\n Por favor, elija la accion a seguir\n 1. Solicitar auto\n 2. Devolver auto\n 3. Poner en alquiler un auto\n 4. Salir");
    switch (menuOpciones) {
        case '1':
            solicitarAuto();
            break;
        
        case '2':
            devolverAuto();
            break;

        case '3':
            agregarAuto();
            break;

        case '4':
            alert("Gracias por elegirnos. Lo esperamos pronto");
            break;
    
        default:
            alert("Por favor, ingrese una opcion correcta");
    }
    
} while (menuOpciones !== '4');



