const http       = require('http')
const ip         = require('ip');
const { spawn }  = require('child_process');
const localhostIp = '47.75.198.92';
const runCommand = (cmd, args, callback) => {
  const child = spawn(cmd, args);
  let response = '';
  child.stdout.on('data', buffer => {
    response += buffer.toString();
  });
  child.stdout.on('end', () => callback(response));
};

http.createServer(function (req, res) {
  if(ip.address() === localhostIp) {
    // runCommand('sh', [ './auto_deploy.sh' ], txt => {
      // console.log(txt);
      res.end(`Update end ${ip.address()} ===== ${req.connection.remoteAddress}`);
    // });
  } else {
    res.end(`No permissions ${ip.address()}`);
  }
}).listen(7770);

