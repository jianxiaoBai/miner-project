'use strict';

// had enabled by egg
// exports.static = true;

exports.validate = {
  enable: true,
  package: 'egg-validate',
};

exports.mysql = {
  enable: true,
  package: 'egg-mysql',
};

exports.security = false;

exports.cors = {
  enable: true,
  package: 'egg-cors',
};

// exports.security = {
//   csrf: false,
//   xframe: {
//     enable: false,
//   },
// };

