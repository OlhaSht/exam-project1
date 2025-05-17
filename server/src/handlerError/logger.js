
const fs = require('fs');
const path = require('path');
const cron = require('node-cron');

function getCurrentLogFilePath() {
  const timestamp = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
  return path.join(__dirname, `error-${timestamp}.log`);
}

module.exports = (err, req, res) => {
  const logFilePath = getCurrentLogFilePath();
  const errorMessage = `${new Date().toISOString()} - Error: ${err.message}\nStack: ${err.stack}\n\n`;

  fs.appendFile(logFilePath, errorMessage, (fsErr) => {
    if (fsErr) {
      console.error('Error writing to log file:', fsErr);
    }
  });
  res.status(500).json({ message: 'Internal Server Error' });
};

function transformData(data) {
  const lines = data.split('\n').filter(Boolean);
  return lines.map(line => ({
    message: line,
    code: 500,
    time: Date.now(),
  }));
}

function backupLogs() {
  const logFilePath = getCurrentLogFilePath();

  fs.readFile(logFilePath, 'utf8', (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') {
        console.log('Log file does not exist for today.');
        return;
      }
      return console.error('Error reading log file:', err);
    }

    if (!data.trim()) {
      console.log('The log file is empty, no data to back up.');
      return;
    }

    const transformedData = transformData(data);
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const backupFilePath = path.join(__dirname, `backup-${timestamp}.json`);

    fs.writeFile(backupFilePath, JSON.stringify(transformedData, null, 2), (err) => {
      if (err) {
        return console.error('Error writing to backup file:', err);
      }
      console.log('Data successfully backed up to file:', backupFilePath);

      fs.truncate(logFilePath, 0, (err) => {
        if (err) {
          return console.error('Error clearing log file:', err);
        }
        console.log('The log file was successfully cleared.');
      });
    });
  });
}

cron.schedule('59 23 * * *', () => {
  backupLogs();
});
