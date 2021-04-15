import {finishApp, createAnApp} from './app';

const PORT = 8080;

const app = createAnApp();

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
