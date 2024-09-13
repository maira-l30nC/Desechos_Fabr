import * as productorRepository from "./../repositories/productor_repository";

const getProductores = async (req, res) => {
    try {
        const result = await productorRepository.getProductores()
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const getProductor = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await productorRepository.getProductor(id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const addProductor = async (req, res) => {
    try {
        const { nombre, direccion, fecha_creacion, estado, tipo_actividad } = req.body;

        if (nombre === undefined || direccion === undefined || fecha_creacion === undefined || estado === undefined || tipo_actividad === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all fields." });
            return;
        }

        const productor = { nombre, direccion, fecha_creacion, estado, tipo_actividad };
        await productorRepository.addProductor(productor);
        res.json({ message: "Productor added" });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const updateProductor = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, direccion, fecha_creacion, estado, tipo_actividad } = req.body;

        if (id === undefined || nombre === undefined || direccion === undefined || fecha_creacion === undefined || estado === undefined || tipo_actividad === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all fields." });
            return;
        }

        const productor = { nombre, direccion, fecha_creacion, estado, tipo_actividad };
        const result = await productorRepository.updateProductor(productor,id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const deleteProductor = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await productorRepository.deleteProductor(id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const methods = {
    getProductores,
    getProductor,
    addProductor,
    updateProductor,
    deleteProductor
};
