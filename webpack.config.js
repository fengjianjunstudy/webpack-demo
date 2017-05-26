//switch(process.env.NODE_ENV) {
//    case 'dev':
//        module .exports = require('./config/webpack.dev')('development');
//        break;
//    case 'prod':
//        module .exports = require('./config/webpack.prod')('production');
//        break
//    case 'test':
//        break
//    default:
//}
module.exports = (env)=>{
    switch(env) {
    case 'dev':
        module .exports = require('./configs/webpack.dev')('development');
        break;
    case 'prod':
        module .exports = require('./configs/webpack.prod')('production');
        break
    case 'test':
        break
    default:
}
}