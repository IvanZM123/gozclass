const { writeFile, existsSync, mkdirSync } = require("fs");
const { resolve } = require("path");
const { argv } = require("yargs");
const dotenv = require("dotenv");

dotenv.config();

const environment = argv.environments;

const isProduction = environment === "production";

const directory: string = isProduction
? "../environments/environment.prod.ts"
: "../environments/environment.ts";
const folder: string = resolve(__dirname, "../environments");
const targetPath: string = resolve(__dirname, directory);

const environmentContent = `
export const environment = {
    production: ${ isProduction },
    URL: '${ process.env.URL }',
    GOOGLE_CLIENT_ID: '${ process.env.GOOGLE_CLIENT_ID }',
    FACEBOOK_CLIENT_ID: '${ process.env.FACEBOOK_CLIENT_ID }'
}
`;

function generateFile(path: string, data: string): void {
    writeFile(path, data, err => {
        if (err) return console.error(err);
        console.log(`A file has been generated in the path: ${ path }`);
    });
}

(()=> {
    if (!existsSync(folder)) {
        mkdirSync(folder);
        return generateFile(targetPath, environmentContent);
    }
    generateFile(targetPath, environmentContent);
})();
