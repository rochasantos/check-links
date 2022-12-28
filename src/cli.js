import fs from 'fs';
import chalk from 'chalk';

import readFile from './index.js';
import validateLinks from './http-validation.js';

const paths = process.argv;

const showStatus = (validatedlinks, indentifier='') => {
    console.log(chalk.yellow(indentifier));
    console.log(chalk.greenBright(validatedlinks))
}

const handleTextFiles = async (path) => {
    
    if (fs.lstatSync(path).isFile()) {
        const links = await readFile(path);
        const linksValidated = await validateLinks(links);
        // showStatus(linksValidated);
    } else if (fs.lstatSync(path).isDirectory()) {
        fs.readdir(path, (err, files) => {
            if(err) {
                console.log(chalk.red(err));
                return
            }
            files.forEach( async file => {
                const links = await readFile(`${path}/${file}`);

                console.log(chalk.bgYellow.black.bold(file));

                const validatedLinksPromises = links
                    .map( async link => {
                        return fetch(link)
                            .then(res => res.status)
                            .catch(err => console.log(err))
                })

                Promise.all(validatedLinksPromises)
                    .then(res => console.log(chalk.blue(res)));
            });
            
        });
    }
}

handleTextFiles(paths[2]);