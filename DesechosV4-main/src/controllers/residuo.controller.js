import * as residuoRepository from "./../repositories/residuo_repository";

const getResiduos = async (req, res) => {
    try {
        const result = await residuoRepository.getResiduos()
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const getResiduo = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await residuoRepository.getResiduo(id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const addResiduo = async (req, res) => {
    try {
        const { codigo, fecha_creacion, composicion_quimica, fecha_generacion, estado, cantidad, productor_id } = req.body;

        if ( codigo === undefined || fecha_creacion === undefined || composicion_quimica === undefined || fecha_generacion === undefined || estado === undefined || cantidad === undefined || productor_id === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all fields." });
            return;
        }

        const productor = { codigo, fecha_creacion, composicion_quimica, fecha_generacion, estado, cantidad, productor_id };
        await productorRepository.addProductor(productor);
        res.json({ message: "Residuo added" });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const updateResiduo = async (req, res) => {
    try {
        const { id } = req.params;
        const { codigo, fecha_creacion, composicion_quimica, fecha_generacion, estado, cantidad, productor_id} = req.body;

        if (id === undefined || codigo === undefined || fecha_creacion === undefined || composicion_quimica === undefined || fecha_generacion === undefined || estado === undefined || cantidad === undefined || productor_id === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all fields." });
            return;
        }

        const residuo = { codigo, fecha_creacion, composicion_quimica, fecha_generacion, estado, cantidad, productor_id };
        const result = await residuoRepository.updateResiduo(residuo,id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const deleteResiduo = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await residuoRepository.deleteResiduo(id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const methods = {
    getResiduos,
    getResiduo,
    addResiduo,
    updateResiduo,
    deleteResiduo
};