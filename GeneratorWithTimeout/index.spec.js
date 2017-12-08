const { timeOutTest } = require('./index');
timeOutTest(() => {
    console.log('run index.spec.js');
}, () =>{
    console.log('end index.spec.js');
}, 1000);