import chalk from 'chalk';
import fs from 'fs';

const extractLinks = (text) => {
    const regex = /(http[\w\-\.\_\~\?\/\#\:]*)[\s\)\}]/gm;
    const linksExtracted = [...text.matchAll(regex)].map(arrRegex => arrRegex[1])
    return linksExtracted;
}

const getFile = async (path) => {
    try {
        const encoding = 'utf-8';
        const result = await fs.promises.readFile(path, encoding);
        return extractLinks(result);
    } catch(err) {
        throw new Error(chalk.red(err.mesage));
    }
}

export default getFile;