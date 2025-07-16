const path = require('path');
const { exec } = require('child_process');


const scriptPath = path.resolve(__dirname, 'db2_query_dev.py');

function executeSQL(sqlScript) {
  return new Promise((resolve, reject) => {
    exec(`python "${scriptPath}" "${sqlScript}"`, (error, stdout, stderr) => {
      if (error) {
        reject(`Erro ao executar SQL: ${error.message}`);
        return;
      }
      if (stderr) {
        reject(`Erro ao executar SQL: ${stderr}`);
        return;
      }
      resolve(JSON.parse(stdout));
    });
  });
}

module.exports = { executeSQL };
