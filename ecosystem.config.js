module.exports = {
  apps: [{
    name: 'tutorial-2',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ec2-user',
      host: 'ec2-18-216-187-215.us-east-2.compute.amazonaws.com',
      key: '/Users/ravinder/Downloads/first-app.pem',
      ref: 'origin/master',
      repo: 'git@github.com:ravinder3128/tutorial-pt-2.git',
      path: '/home/ec2-user/tutorial-pt-2',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}