import {finishApp, createAnApp} from './app';
import "./modules/db/connection";
import authModule from './modules/auth';
import skillModule from './modules/skills';
import experienceModule from './modules/experience';
import educationModule from './modules/education';

const PORT = 8080;

const app = createAnApp();

authModule.init(app);

skillModule.init(app);

experienceModule.init(app);

educationModule.init(app);

finishApp(app);

(async () => {
    try {
        await app.listen(PORT);
        console.log("----Server Started----");
    }
    catch(err) {
        console.log(err.message);
        process.exit(1);
    }
})();
