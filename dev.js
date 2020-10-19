module.exports  = {
  "apps": [
    {
      "name": "lljy",
      "script": "./server/index.js",
      "cwd": "./",
      "autorestart": false,
      "max_memory_restart": "1G",
      "merge_logs": true,
      "log_date_format": "YYYY-MM-DD HH:mm:ss",
      "watch": false,
      "kill_timeout": 100000,
      "exec_mode": "fork",
      "instances": "1",
      "env": {
        "NODE_ENV": "production"
      }
    }
  ]
}