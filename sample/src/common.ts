import * as fs from 'fs';

//getAuth.json should looks like:
// { "host": "hosIP", "password": "passwd", "tokenSecret": ""}

export async function getAuth(): Promise<{
    host: string;
    username?: string;
    password: string;
}> {
    const data = await fs.promises.readFile('../../auth.json', { encoding: 'utf-8' });
    const auth = JSON.parse(data);
    const { host, password, tokenSecret } = auth;
    // const { host, password, tokenSecret } = auth;// .default;
    return Promise.resolve({ host, password, tokenSecret });
}
