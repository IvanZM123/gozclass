const { writeFile } = require("fs");
const { resolve } = require("path");
const { argv } = require("yargs");
const dotenv = require("dotenv");

dotenv.config();

const environment = argv.environments;

const isProduction = environment === "production";

const directory = isProduction
? "../environments/environment.prod.ts"
: "../environments/environment.ts";
const targetPath = resolve(__dirname, directory);

const environmentContent = `
export const environment = {
    production: ${ isProduction },
    URL: '${ process.env.URL }',
    GOOGLE_CLIENT_ID: '${ process.env.GOOGLE_CLIENT_ID }',
    FACEBOOK_CLIENT_ID: '${ process.env.FACEBOOK_CLIENT_ID }'
}
`;

writeFile(targetPath, environmentContent, (error) => {
    if (error) return console.error(error);
    console.log(`Se agrego un archivo a la ruta ${ targetPath }`);
});
