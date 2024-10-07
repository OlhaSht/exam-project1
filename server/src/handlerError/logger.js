const fs = require('fs');
const path = require('path');
const cron = require('node-cron');

const logFilePath = path.join('error.log');

module.exports = (err, req, res) => {
  const errorMessage = `${new Date().toISOString()} - Error: ${err.message}\nStack: ${err.stack}\n\n`;

 fs.appendFile(logFilePath, errorMessage, (fsErr) => {
    if (fsErr) {
      console.error('Error:', fsErr);
      console.log('Error:', fsErr);
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
  fs.readFile(logFilePath, 'utf8', (err, data) => {
    if (err) {
      return console.error('readingError:', err);
    }
    if (!data.trim()) {
      console.log('The file is empty, there is no data to copy.');
      return;
    }
    const transformedData = transformData(data);
  
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-'); 
    const backupFilePath = path.join(__dirname, `backup-${timestamp}.json`);
    
    fs.writeFile(backupFilePath, JSON.stringify(transformedData, null, 2), (err) => {
      if (err) {
        return console.error('Error writing to file:', err);
      }
      console.log('Data successfully saved to file:', backupFilePath);
    
      fs.truncate(logFilePath, 0, (err) => {
        if (err) {
          return console.error('Error clearing source file:', err);
        }
        console.log('The original file was successfully cleaned.');
      });
    });
  });
}
cron.schedule('59 23 * * *', () =>{
    backupLogs();
});

