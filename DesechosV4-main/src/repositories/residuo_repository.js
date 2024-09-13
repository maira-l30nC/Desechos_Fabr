import { getConnection } from "./../database/database";

export async function getResiduos() {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT id, codigo, fecha_creacion, composicion_quimica, fecha_generacion, estado, cantidad, productor_id  FROM residuo");
        return result;
    } catch (error) {
        throw error;
    }
};
export async function getResiduo (id) {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT id, codigo, fecha_creacion, composicion_quimica, fecha_generacion, estado, cantidad, productor_id FROM residuo WHERE id = ?", id);
        return result;
    } catch (error) {
        throw error;
    }
};

export async function addResiduo (productor)  {
    try {
        const connection = await getConnection();
        let result = await connection.query("INSERT INTO residuo SET ?", residuo);
        return result;
    } catch (error) {
        throw error;
    }
};

export async function updateResiduo  (residuo, id) {
    try {
        const connection = await getConnection();
        const result = await connection.query("UPDATE residuo SET ? WHERE id = ?", [residuo, id]);
        return result;
    } catch (error) {
        throw error;
    }
};
export async function deleteResiduo (id) {
    try {
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM residuo WHERE id = ?", id);
        return result;
    } catch (error) {
        throw error;
    }
};
