const fs = require('fs').promises;
const path = require('path');
const cron = require('node-cron');

//----------------------------------------------------------------------------------------------------
function getCurrentLogFilePath() {
  //const timestamp = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
  //return path.join(__dirname, `error-${timestamp}.log`);
  return path.join(__dirname, `error.log`);
}

module.exports = async (err, req, res) => {
  const logFilePath = getCurrentLogFilePath();
  //const errorMessage = `${new Date().toISOString()} - Error: ${err.message}\nStack: ${err.stack}\n\n`;

  const errorMessage = {
    message: err.message,
    time: new Date().toISOString(),
    code: err.code,
    stackTrace: err.stack,
  };

  const logError = JSON.stringify(errorMessage) + '\n';

  try {
    await fs.appendFile(logFilePath, logError);
  } catch (fsErr) {
    console.error('Error writing to log file:', fsErr);
  }

  // fs.appendFile(logFilePath, logError, (fsErr) => {
  //   if (fsErr) {
  //     console.error('Error writing to log file:', fsErr);
  //   }
  // });
};

//-----------------------------------------------------------------------------------------------------------

function transformData(data) {
  const lines = data.split('\n').filter(Boolean);

  return lines.map((line) => {
    const error = JSON.parse(line);

    return {
      message: error.message,
      code: error.code,
      time: error.time,
    };
  });
  // return lines.map((line) => ({
  //   message: line,
  //   code: 500,
  //   time: Date.now(),
  // }));
}

async function backupLogs() {
  const logFilePath = getCurrentLogFilePath();

  try {
    const data = await fs.readFile(logFilePath, 'utf8');

    if (!data.trim()) {
      console.log('The log file is empty, no data to back up.');
      return;
    }

    const transformedData = transformData(data);

    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');

    const backupFilePath = path.join(__dirname, `backup-${timestamp}.json`);

    await fs.writeFile(
      backupFilePath,
      JSON.stringify(transformedData, null, 2)
    );

    console.log('Data successfully backed up to file:', backupFilePath);

    await fs.truncate(logFilePath, 0);

    console.log('The log file was successfully cleared.');
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.log('Log file does not exist for today.');
      return;
    }
    console.error('Backup error:', err);
  }
}
cron.schedule('49 10 * * *', () => {
  backupLogs();
});

//   const data = await fs.readFile(logFilePath, 'utf8');

//   if (err) {
//     if (err.code === 'ENOENT') {
//       console.log('Log file does not exist for today.');
//       return;
//     }
//     return console.error('Error reading log file:', err);
//   }

//   if (!data.trim()) {
//     console.log('The log file is empty, no data to back up.');
//     return;
//   }

//   const transformedData = transformData(data);
//   const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
//   const backupFilePath = path.join(__dirname, `backup-${timestamp}.json`);

//   await fs.writeFile(backupFilePath, JSON.stringify(transformedData, null, 2));

//   if (err) {
//     return console.error('Error writing to backup file:', err);
//   }
//   console.log('Data successfully backed up to file:', backupFilePath);

//   await fs.truncate(logFilePath, 0);

//   if (err) {
//     return console.error('Error clearing log file:', err);
//   }
//   console.log('The log file was successfully cleared.');
// }
