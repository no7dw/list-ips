var should = require('should');
var listIps = require('../index');
describe('request ip address', () => {

    it('#1 normal ip *', function  (done) {
        listIps.list('192.0.0.0-10').length.should.be.above(0)
        done()
    })
    it('#2 normal ip range', function  (done) {
        listIps.list('192.0.0.*').length.should.be.above(0)
        done()
    })
    it('#3 normal ip combine', function  (done) {
        listIps.list('192.0.1-2.*').length.should.be.above(0)
        done()
    })
})