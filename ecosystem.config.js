module.exports = {
  apps: [{
    name: 'tutorial-2',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ravinder',
      host: 'ec2-52-15-145-222.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/tutorial-2.pem',
      ref: 'origin/master',
      repo: 'git@github.com:ravinder3128/tutorial-pt-2.git',
      path: '/home/ec2-user/tutorial-pt-2',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}