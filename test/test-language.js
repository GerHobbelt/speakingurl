/* global describe,it */

var getSlug = require('../lib').getSlug;

describe('getSlug languages', function () {
    'use strict';

    it('should replace language specific symbols', function (done) {

        getSlug('EN Foo & Bar ')
            .should.eql('en-foo-and-bar');

        getSlug('EN Foo & Bar ', {
                lang: "en"
            })
            .should.eql('en-foo-and-bar');
        getSlug('de Foo & Bar ', {
                lang: "de"
            })
            .should.eql('de-foo-und-bar');
        getSlug('True Foo & Bar ', {
                lang: true
            })
            .should.eql('true-foo-bar');

        getSlug('False Foo & Bar ', {
                lang: false
            })
            .should.eql('false-foo-bar');

        getSlug('xx Foo & Bar ', {
                lang: "xx"
            })
            .should.eql('xx-foo-and-bar');

        getSlug('obj Foo & Bar ', {
                lang: {}
            })
            .should.eql('obj-foo-and-bar');

        getSlug('array Foo & Bar ', {
                lang: []
            })
            .should.eql('array-foo-and-bar');

        getSlug('null Foo & Bar ', {
                lang: null
            })
            .should.eql('null-foo-and-bar');

        done();

    });
});
