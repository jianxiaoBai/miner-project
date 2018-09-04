const http       = require('http')
const { spawn }  = require('child_process');
const localhostIP = '47.75.198.92';
const runCommand = (cmd, args, callback) => {
  const child = spawn(cmd, args);
  let response = '';
  child.stdout.on('data', buffer => {
    response += buffer.toString();
  });
  child.stdout.on('end', () => callback(response));
};

http.createServer(function (req, res) {
  const visitIP = req.connection.remoteAddress;
  if(visitIP === `::ffff:${localhostIP}`) {
    runCommand('sh', [ './auto_deploy.sh' ], txt => {
      console.log(txt);
      res.end(`Update end ${visitIP}`);
    });
  } else {
    res.end(`No permissions ${visitIP}`);
  }
}).listen(7770);

