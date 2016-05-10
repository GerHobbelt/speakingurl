var getSlug = require('../lib/speakingurl');

describe('getSlug translate arabic letters', function () {
    'use strict';

    it('should be ', function (done) {

        getSlug('گ چ پ ژ ک ی', {
                lang: 'ar'
            })
            .should.eql('g-ch-p-zh-k-y');

        done();
    });

});
