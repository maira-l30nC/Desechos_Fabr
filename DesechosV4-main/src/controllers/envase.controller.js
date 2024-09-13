import * as envaseRepository from "./../repositories/envase_repository";

const getEnvases = async (req, res) => {
    try {
        const result = await envaseRepository.getEnvases()
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const getEnvase = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await envaseRepository.getEnvase(id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const addEnvase = async (req, res) => {
    try {
        const { fecha_creacion, estado, tipo_envase } = req.body;

        if (fecha_creacion === undefined || estado === undefined || tipo_envase === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all fields." });
            return;
        }

        const envase = { fecha_creacion, estado, tipo_envase };
        await envaseRepository.addEnvase(productor);
        res.json({ message: "Envase added" });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const updateEnvase = async (req, res) => {
    try {
        const { id } = req.params;
        const { fecha_creacion, estado, tipo_envase } = req.body;

        if (id === undefined || fecha_creacion === undefined || estado === undefined || tipo_envase === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all fields." });
            return;
        }

        const envase = { fecha_creacion, estado, tipo_envase };
        const result = await envaseRepository.updateEnvase(envase,id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const deleteEnvase = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await envaseRepository.deleteEnvase(id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const methods = {
    getEnvases,
    getEnvase,
    addEnvase,
    updateEnvase,
    deleteEnvase
};