//import AreaService from "./AreaService";

const JobService = {}

JobService.list = async function () {
    return fetch('http://127.0.0.1:8005/job/').then((response) => response.json())
}

JobService.area_list = async function () {
    return fetch('http://127.0.0.1:8005/area/').then((response) => response.json())
}

JobService.get_job = async function (job_id) {
    return fetch('http://127.0.0.1:8005/job/'+job_id+'/').then((response) => response.json())
}

JobService.create = async function (data) {
    const response = await fetch('http://127.0.0.1:8005/job/', {
        method: "POST",
        cache: "no-cache",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    return response.json();
}

JobService.edit = async function (data, rowID) {
    const response = await fetch('http://127.0.0.1:8005/job/update/'+rowID, {
        method: "POST",
        cache: "no-cache",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    return response.json();
}

JobService.delete = async function (rowID) {
    const response = await fetch('http://127.0.0.1:8005/job/delete/'+rowID, {
        method: "POST",
        cache: "no-cache",
        headers: {
            "Content-Type": "application/json",
        },
        // body: JSON.stringify({"ARE_IdAREA": rowID}),
    });
    return response.json();
}
export default JobService;

export const handleDownload = async () => {
    try {
        fetch('http://127.0.0.1:8005/report/job/')
            .then(response => response.json())
            .then(data => {
                // Aquí obtienes el archivo en base64 desde la respuesta de la API
                const base64Data = data.archivo_base64;

                // Llama a la función para descargar el archivo
                downloadFile(base64Data);
            });
    } catch (error) {
        console.error('Error al descargar el archivo:', error);
    }
};


function downloadFile(base64Data) {
    const link = document.createElement('a');

    const byteCharacters = atob(base64Data);
    const byteArrays = [];
    for (let offset = 0; offset < byteCharacters.length; offset += 1024) {
        const slice = byteCharacters.slice(offset, offset + 1024);
        const byteNumbers = new Array(slice.length);
        for (let i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
    }
    const blob = new Blob(byteArrays, { type: 'application/octet-stream' });

    link.href = URL.createObjectURL(blob);
    link.download = 'Reporte Puestos.xlsx';

    link.click();
}