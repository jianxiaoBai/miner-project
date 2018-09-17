'use strict';
const http = require('http');
const axios = require('axios');
const createHandler = require('github-webhook-handler');
const { spawn } = require('child_process');
const handler = createHandler({
  path: '/webhook',
  secret: 'miner_hook',
});

const runCommand = (cmd, args, callback) => {
  const child = spawn(cmd, args);
  let response = '';
  child.stdout.on('data', buffer => {
    response += buffer.toString();
  });
  child.stdout.on('end', () => callback(response));
};

http.createServer(function(req, res) {
  handler(req, res, function(err) {
    res.statusCode = 404;
    res.end('no such location');
  });
}).listen(7779);

handler.on('error', function(err) {
  console.error('Error:', err.message);
});

handler.on('push', function(event) {
  console.log('Received a push event for %s to %s',
    event.payload.repository.name,
    event.payload.ref);
  if (event.payload.ref === 'refs/heads/new_api') {
    console.log('Start run command on New_api');
    runCommand('sh', [ './auto_deploy.sh' ], txt => {
      console.log(txt);
    });
  } else if (event.payload.ref === 'refs/heads/master') {
    console.log('Start run command on Master');
    axios.get('http://47.75.198.92:7770/')
      .then(response => {
        console.log(response.data, 'server');
      })
      .catch(error => {
        console.log(error);
      });
  } else {
    console.log('Not the master branch, will not trigger');
  }
});
