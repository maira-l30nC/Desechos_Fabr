import { Router } from "express";
import { methods as residuoController } from "./../controllers/residuo.controller";

const router = Router();

router.get("/", residuoController.getResiduos);
router.get("/:id", residuoController.getResiduo);
router.post("/", residuoController.addResiduo);
router.put("/:id", residuoController.updateResiduo);
router.delete("/:id", residuoController.deleteResiduo);

export default router;
