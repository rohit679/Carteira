import { config } from "dotenv";
import { finishApp, createAnApp } from "./app";
import { getSecret } from "./configuration.js";
import { connectMongo } from "./utils/connect-db.js";
import authModule from "./modules/auth";
import skillModule from "./modules/skills";
import experienceModule from "./modules/experience";
import educationModule from "./modules/education";
import projectModule from "./modules/project";
import publicationModule from "./modules/publication";

(async () => {
  config({ path: ".env" });
  connectMongo();

  const secrets = getSecret();
  const app = createAnApp();
  const port = secrets.port || 3000;

  app.get("/health-check", (req, res) => {
    res.send("App is healthy 💚");
  });

  authModule.init(app);
  skillModule.init(app);
  experienceModule.init(app);
  educationModule.init(app);
  projectModule.init(app);
  publicationModule.init(app);

  finishApp(app);

  try {
    await app.listen(port, () => {
      console.log(`Yes, the app is up and running at ${port} 🎉`);
    });
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
})();
