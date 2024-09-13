import { Router } from "express";
import { methods as envaseController } from "./../controllers/envase.controller";

const router = Router();

router.get("/", envaseController.getEnvases);
router.get("/:id", envaseController.getEnvase);
router.post("/", envaseController.addEnvase);
router.put("/:id", envaseController.updateEnvase);
router.delete("/:id", envaseController.deleteEnvase);

export default router;
