import { getConnection } from "./../database/database";

export async function getEnvases() {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT id, fecha_creacion, estado, tipo_envase FROM envases");
        return result;
    } catch (error) {
        throw error;
    }
};
export async function getEnvase (id) {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT id, fecha_creacion, estado, tipo_envase FROM envases WHERE id = ?", id);
        return result;
    } catch (error) {
        throw error;
    }
};

export async function addEnvase (envase)  {
    try {
        const connection = await getConnection();
        let result = await connection.query("INSERT INTO envases SET ?", envase);
        return result;
    } catch (error) {
        throw error;
    }
};

export async function updateEnvase  (envase, id) {
    try {
        const connection = await getConnection();
        const result = await connection.query("UPDATE envases SET ? WHERE id = ?", [envase, id]);
        return result;
    } catch (error) {
        throw error;
    }
};
export async function deleteEnvase (id) {
    try {
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM envases WHERE id = ?", id);
        return result;
    } catch (error) {
        throw error;
    }
};
