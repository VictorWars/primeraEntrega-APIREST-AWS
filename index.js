const express = require('express');
const app = express();

app.use(express.json());

/*let alumnos = [
    {id: 1, nombres: 'Juan Carlos', apellidos: 'Can Tun', matricula: 'A2877182', promedio: 76},
    {id: 2, nombres: 'Victors', apellidos: 'Pacheco', matricula: 'A45664565', promedio: 67},
    {id: 3, nombres: 'Rafael', apellidos: 'Vergara', matricula: 'A2443343', promedio: 12},
    {id: 4, nombres: 'Eusebio', apellidos: 'Ajas', matricula: 'A344656556', promedio: 89}
];*/

/*let profesores = [
    {id: 1, numeroEmpleado: 1111111, nombres: 'Pedrito', apellidos: 'Salazar', horasClase: 58},
    {id: 2, numeroEmpleado: 2222222, nombres: 'Peña', apellidos: 'Nieto', horasClase: 0},
    {id: 3, numeroEmpleado: 3333333, nombres: 'Amlo', apellidos: 'Ruco', horasClase: 13},
    {id: 4, numeroEmpleado: 4444444, nombres: 'Obama', apellidos: 'Shido', horasClase: 400}
];*/

let alumnos = [];
let profesores = [];

app.get('/', (req, res) => {
    res.status(200).send(alumnos);
});

app.get('/alumnos', (req, res) => {
    res.status(200).send(alumnos);
});

app.get('/alumnos/:id', (req, res) => {
    const alumno = alumnos.find(c => c.id === parseInt(req.params.id));
    if(!alumno) return res.status(404).send('Alumno no encontrado');
    else res.status(200).send(alumno);
});

app.post('/alumnos', (req, res) => {
    const alumno = {
        id: parseInt(req.body.id),
        nombres: req.body.nombres,
        apellidos: req.body.apellidos, 
        matricula: req.body.matricula, 
        promedio: parseInt(req.body.promedio)
    };

    if(req.body.nombres === null || req.body.nombres < 0) {
        return res.status(400).send(req.body);
    } else {
        if(req.body.apellidos === null || req.body.apellidos < 0) {
            return res.status(400).send(req.body);
        }else {
            if(req.body.matricula === null || req.body.matricula < 0) {
                return res.status(400).send(req.body);
            } else  {
                if(req.body.promedio === null || parseInt(req.body.promedio) < 0) {
                    return res.status(400).send(req.body);
                } else {
                    alumnos.push(alumno);
                    res.status(201).send(alumno);
                }
            }
        }
    }
});

app.put('/alumnos/:id', (req, res) => {
    const alumnoId = alumnos.findIndex(c => c.id === parseInt(req.params.id));
    //const id = parseInt(req.params.id) - 1;
    if(alumnoId === -1) return res.status(404).send('Alumno no encontrado');

    if(req.body.nombres === null || req.body.nombres < 0) {
        return res.status(400).send(req.body);
    } else {
        if(req.body.apellidos === null || req.body.apellidos < 0) {
            return res.status(400).send(req.body);
        }else {
            if(req.body.matricula === null || req.body.matricula < 0) {
                return res.status(400).send(req.body);
            } else  {
                if(req.body.promedio === null || parseInt(req.body.promedio) < 0) {
                    return res.status(400).send(req.body);
                } else {
                    //console.log(alumnoId);
                    //console.log(alumnos[alumnoId]);
                    alumnos[alumnoId].nombres = req.body.nombres;
                    alumnos[alumnoId].apellidos = req.body.apellidos;
                    alumnos[alumnoId].matricula = req.body.matricula;
                    alumnos[alumnoId].promedio = parseInt(req.body.promedio);
                
                    res.status(200).send(alumnos);
                }
            }
        }
    }
    //alumnos = {...alumnos, ...alumno};
});

app.delete('/alumnos/:id', (req, res) => {
    const alumno = alumnos.find(c => c.id === parseInt(req.params.id));
    if(!alumno) return res.status(404).send('Alumno no encontrado');
    
    const index = alumnos.indexOf(alumno);
    alumnos.splice(index, 1);
    res.send(alumno);
});

app.get('/profesores', (req, res) => {
    res.status(200).send(profesores);
});

app.get('/profesores/:id', (req, res) => {
    const profesor = profesores.find(c => c.id === parseInt(req.params.id));
    if(!profesor) return res.status(404).send('Profesor no encontrado');
    else res.status(200).send(profesor);
});

app.post('/profesores', (req, res) => {
    const profesor = {
        id: parseInt(req.body.id), 
        numeroEmpleado: parseInt(req.body.numeroEmpleado), 
        nombres: req.body.nombres, 
        apellidos: req.body.apellidos, 
        horasClase: parseInt(req.body.horasClase)
    };

    if(parseInt(req.body.numeroEmpleado) === null || parseInt(req.body.numeroEmpleado) < 0) {
        return res.status(400).send(req.body);
    } else {
        if(req.body.nombres === null || req.body.nombres < 0) {
            return res.status(400).send(req.body);
        }else {
            if(req.body.apellidos === null || req.body.apellidos < 0) {
                return res.status(400).send(req.body);
            } else  {
                if(parseInt(req.body.horasClase) === null || parseInt(req.body.horasClase) < 0) {
                    return res.status(400).send(req.body);
                } else {
                    profesores.push(profesor);
                    res.status(201).send(profesor);
                }
            }
        }
    }
});

app.put('/profesores/:id', (req, res) => {
    const profesorId = profesores.findIndex(c => c.id === parseInt(req.params.id));
    if(profesorId === -1) return res.status(404).send('Profesor no encontrado');

    if(parseInt(req.body.numeroEmpleado) === null || parseInt(req.body.numeroEmpleado) < 0) {
        return res.status(400).send(req.body);
    } else {
        if(req.body.nombres === null || req.body.nombres < 0) {
            return res.status(400).send(req.body);
        }else {
            if(req.body.apellidos === null || req.body.apellidos < 0) {
                return res.status(400).send(req.body);
            } else  {
                if(parseInt(req.body.horasClase) === null || parseInt(req.body.horasClase) < 0) {
                    return res.status(400).send(req.body);
                } else {
                    profesores[profesorId].numeroEmpleado = parseInt(req.body.numeroEmpleado);
                    profesores[profesorId].nombres = req.body.nombres;
                    profesores[profesorId].apellidos = req.body.apellidos;
                    profesores[profesorId].horasClase = parseInt(req.body.horasClase);
    
                    res.status(200).send(profesores);
                }
            }
        }
    }
});

app.delete('/profesores/:id', (req, res) => {
    const profesor = profesores.find(c => c.id === parseInt(req.params.id));
    if(!profesor) return res.status(404).send('Profesor no encontrado');
    
    const index = profesores.indexOf(profesor);
    profesores.splice(index, 1);
    res.send(profesor);
});

app.get('*', (req, res) => {
    res.status(404).send('Ruta erronea...');
});

app.delete('*', (req, res) => {
    return res.status(405).send('Método no aprobado...');
});

const port = process.env.port || 3000;
app.listen(port, () => console.log('Escuchado el puerto ' + port));