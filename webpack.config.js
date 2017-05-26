module.exports = (env)=>{
    switch(env) {
    case 'dev':
        return require('./configs/webpack.dev');
        break;
    case 'prod':
        return require('./configs/webpack.prod')('production');
        break
    case 'test':
        break
    default:
}
}