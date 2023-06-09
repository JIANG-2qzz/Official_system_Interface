import { argv } from 'zx-cjs'

export const PORT = argv.port || process.env.PORT || 7498
export const API_VERSION = 1

export const CROSS_DOMAIN = {
  allowedOrigins:
    argv.allowed_origins || process.env.ALLOWED_ORIGINS
      ? argv.allowed_origins?.split?.(',')
      : ['localhost:*', '127.0.0.1'],
}

export const MONGO_DB = {
  dbName: 'juejin',
  host: argv.db_host || '127.0.0.1',
  port: 27017,
  get uri() {
    if (process.env.MONGO_URL) {
      return process.env.MONGO_URL
    }
    console.log(`mongodb://${this.host}:${this.port}/${this.dbName}`)
    return `mongodb://${this.host}:${this.port}/${this.dbName}`
  },
}

export const AXIOS_CONFIG = {
  timeout: 10000,
}

export const SECURITY = {
  jwtSecret: 'juejin',
  jwtExpire: '30d',
}

// 七牛云
export const QINIU_SECRET = {
  qn_host: argv.qn_host || process.env.QN_HOST,
  qn_scope: argv.qn_scope || process.env.QN_SCOPE,
  qn_ak: argv.qn_ak || process.env.QN_AK,
  qn_sk: argv.qn_sk || process.env.QN_SK,
}
