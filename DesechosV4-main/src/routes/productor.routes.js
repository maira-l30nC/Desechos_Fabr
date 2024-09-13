import { Router } from "express";
import { methods as productorController } from "./../controllers/productor.controller";

const router = Router();

router.get("/", productorController.getProductores);
router.get("/:id", productorController.getProductor);
router.post("/", productorController.addProductor);
router.put("/:id", productorController.updateProductor);
router.delete("/:id", productorController.deleteProductor);

export default router;
