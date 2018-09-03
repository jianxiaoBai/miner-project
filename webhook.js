const http      = require('http')
const ip        = require('ip');
const { spawn } = require('child_process');

const runCommand = (cmd, args, callback) => {
  const child = spawn(cmd, args);
  let response = '';
  child.stdout.on('data', buffer => {
    response += buffer.toString();
  });
  child.stdout.on('end', () => callback(response));
};

http.createServer(function (req, res) {
  console.log(ip.address() , 'ip');
  if(ip.address() === '47.75.198.92') {
    runCommand('sh', [ './auto_deploy.sh' ], txt => {
      console.log(txt);
      res.end('Update end');
    });
  } else {
    res.end('No permissions');
  }
}).listen(7770);

