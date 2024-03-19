import 'reflect-metadata';
import app from './app';
import connect from './database/connection';

const PORT = process.env.PORT || 3000;

async function startServer() {
    // connect();

    app.listen(PORT, () => {
        // eslint-disable-next-line no-console
        console.log(`POC Prisma running on port ${PORT}`);
    });
}
startServer();
