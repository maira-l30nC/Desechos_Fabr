import { getConnection } from "./../database/database";

export async function getProductores() {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT id, nombre, direccion, fecha_creacion, estado, tipo_actividad FROM productores");
        return result;
    } catch (error) {
        throw error;
    }
};
export async function getProductor (id) {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT id, nombre, direccion, fecha_creacion, estado, tipo_actividad FROM productores WHERE id = ?", id);
        return result;
    } catch (error) {
        throw error;
    }
};

export async function addProductor (productor)  {
    try {
        const connection = await getConnection();
        let result = await connection.query("INSERT INTO productores SET ?", productor);
        return result;
    } catch (error) {
        throw error;
    }
};

export async function updateProductor  (productor, id) {
    try {
        const connection = await getConnection();
        const result = await connection.query("UPDATE productores SET ? WHERE id = ?", [productor, id]);
        return result;
    } catch (error) {
        throw error;
    }
};
export async function deleteProductor (id) {
    try {
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM productores WHERE id = ?", id);
        return result;
    } catch (error) {
        throw error;
    }
};


