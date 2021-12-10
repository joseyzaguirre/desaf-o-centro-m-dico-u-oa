const radiologia = [
    {
        hora: "11:00",
        especialista: "Ignacio Schulz",
        paciente: "Francisca Rojas",
        rut: "9878782-1",
        prevision: "FONASA",
    },
    {
        hora: "11:30",
        especialista: "Federico Subercaseaux",
        paciente: "Pamela Estrada",
        rut: "15345241-3",
        prevision: "ISAPRE",
    },
    {
        hora: "15:00",
        especialista: "Fernando Wurthz",
        paciente: "Armando Luna",
        rut: "16445345-9",
        prevision: "ISAPRE",
    },
    {
        hora: "15:30",
        especialista: "Ana María Godoy",
        paciente: "Manuel Godoy",
        rut: "17666419-0",
        prevision: "FONASA",
    },
    {
        hora: "16:00",
        especialista: "Patricio Suazo",
        paciente: "Ramón Ulloa",
        rut: "14989389-K",
        prevision: "FONASA",
    }
];

const traumatologia = [
    {
        hora: "8:00",
        especialista: "María Paz Altuzarra",
        paciente: "Laura Sánchez",
        rut: "15554774-5",
        prevision: "FONASA",
    },
    {
        hora: "10:00",
        especialista: "Raúl Araya",
        paciente: "Angélica Navas",
        rut: "15444147-9",
        prevision: "ISAPRE",
    },
    {
        hora: "10:30",
        especialista: "María Arriagada",
        paciente: "Ana Klapp",
        rut: "17879423-9",
        prevision: "ISAPRE",        
    },
    {
        hora: "11:00",
        especialista: "Alejandro Badilla",
        paciente: "Felipe Mardones",
        rut: "1547423-6",
        prevision: "ISAPRE",
    },
    {
        hora: "11:30",
        especialista: "Cecilia Budnik",
        paciente: "Diego Marre",
        rut: "16554741-K",
        prevision: "FONASA",
    },
    {
        hora: "12:00",
        especialista: "Arturo Cavagnaro",
        paciente: "Cecilia Méndez",
        rut: "9747535-8",
        prevision: "ISAPRE",
    },
    {
        hora: "12:30",
        especialista: "Andrés Kanacri",
        paciente: "Marcial Suazo",
        rut: "11254785-5",
        prevision: "ISAPRE",
    }
];

const dental = [
    {
        hora: "8:30",
        especialista: "Andrea Zúñiga",
        paciente: "Marcela Retamal",
        rut: "11123425-6",
        prevision: "ISAPRE",
    },
    {
        hora: "11:00",
        especialista: "María Pía Zañartu",
        paciente: "Ángel Muñoz",
        rut: "9878789-2",
        prevision: "ISAPRE",
    },
    {
        hora: "11:30",
        especialista: "Scarlett Witting",
        paciente: "Mario Kast",
        rut: "7998789-5",
        prevision: "FONASA",        
    },
    {
        hora: "13:00",
        especialista: "Francisco Von Teuber",
        paciente: "Karin Fernández",
        rut: "18887662-K",
        prevision: "FONASA",
    },
    {
        hora: "13:30",
        especialista: "Eduardo Viñuela",
        paciente: "Hugo Sánchez",
        rut: "17665461-4",
        prevision: "FONASA",
    },
    {
        hora: "14:00",
        especialista: "Raquel Villaseca",
        paciente: "Ana Sepúlveda",
        rut: "14441281-0",
        prevision: "ISAPRE",
    }
];

const boton1 = document.querySelector(".boton1");
const boton2 = document.querySelector(".boton2");
const boton3 = document.querySelector(".boton3");

const cuerpotabla = document.querySelector("#cuerpotabla");
const parrafo = document.querySelector("#parrafo")

boton1.addEventListener("click", function() {
        cuerpotabla.innerHTML = " ";
    for (inforad of radiologia) {
        const rellenorad = `<tr>
                            <td>${inforad.hora}</td>
                            <td>${inforad.especialista}</td>
                            <td>${inforad.paciente}</td>
                            <td>${inforad.rut}</td>
                            <td>${inforad.prevision}</td>
                            </tr>`
        
        cuerpotabla.innerHTML += rellenorad;
    };
    parrafo.innerHTML = `Primera atención: ${radiologia[0].paciente} - ${radiologia[0].prevision} | Última atención: ${radiologia[4].paciente} - ${radiologia[4].prevision}.`
});

boton2.addEventListener("click", function() {
        cuerpotabla.innerHTML = " ";
    for (infotrau of traumatologia) {
        const rellenotrau = `<tr>
                            <td>${infotrau.hora}</td>
                            <td>${infotrau.especialista}</td>
                            <td>${infotrau.paciente}</td>
                            <td>${infotrau.rut}</td>
                            <td>${infotrau.prevision}</td>
                            </tr>`
        
        cuerpotabla.innerHTML += rellenotrau;
    };
    parrafo.innerHTML = `Primera atención: ${traumatologia[0].paciente} - ${traumatologia[0].prevision} | Última atención: ${traumatologia[6].paciente} - ${traumatologia[6].prevision}.`
});

boton3.addEventListener("click", function() {
    cuerpotabla.innerHTML = " ";
    for (infodent of dental) {
        const rellenodent = `<tr>
                            <td>${infodent.hora}</td>
                            <td>${infodent.especialista}</td>
                            <td>${infodent.paciente}</td>
                            <td>${infodent.rut}</td>
                            <td>${infodent.prevision}</td>
                            </tr>`
        
        cuerpotabla.innerHTML += rellenodent;
    };
    parrafo.innerHTML = `Primera atención: ${dental[0].paciente} - ${dental[0].prevision} | Última atención: ${dental[5].paciente} - ${dental[5].prevision}.`
});

