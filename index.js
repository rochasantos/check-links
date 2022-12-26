import chalk from 'chalk';
import fs from 'fs';

const getFile = async (path) => {
    try {
        const encoding = 'utf-8';
        const result = await fs.promises.readFile(path, encoding);
        extractLinks(result);
    } catch(err) {
        throw new Error(chalk.red(err.mesage));
    }
}

getFile('arquivos/texto.md');