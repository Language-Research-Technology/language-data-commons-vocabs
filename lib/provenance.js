const shell = require("shelljs");
const fs = require("fs")
class Provenance {
    constructor() {
   
            const codeDescription = shell.exec("git remote show origin").stdout;
            const nodePackage = JSON.parse(fs.readFileSync("package.json"));
            const softwareUrl = nodePackage.repository.url;
            const softwareName = nodePackage.name;
        
        
            this.corpusTool = {
            "@id": softwareUrl,
            "@type": "SoftwareSourceCode",
            "name" : softwareUrl,
            "description": codeDescription,
            "programmingLanguage": {"@id": "https://en.wikipedia.org/wiki/Node.js"}

            };
            this.createAction = {
            "@id": "#provenance",
            "name": `Created RO-Crate using ${softwareName}`,
            "@type": "CreateAction",
            "instrument": {"@id": softwareUrl},
            "result": {"@id": "ro-crate-metadata.json"}
            }
        }
}


module.exports = Provenance
