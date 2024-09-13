import express from "express";
import morgan from "morgan";
// Routes
import envaseRoutes from "./routes/envase.routes";
import productorRoutes from "./routes/productor.routes";
import residuoRoutes from "./routes/residuo.routes";

const app = express();

// Settings
app.set("port", 8000);

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/productores", productorRoutes);
app.use("/api/envases", envaseRoutes);
app.use("/api/residuo", residuoRoutes);

export default app;

