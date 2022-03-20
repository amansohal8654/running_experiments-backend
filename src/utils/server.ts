import express from "express";
import routes  from "../routes";
import cors from "cors";
import config from "config"

const createServer = () => {
    const app = express();
    app.use(cors({
        origin:config.get('origin'),
        credentials:true,
    }));
    app.use(express.json());
    routes(app);
    return app;
}

export default createServer;