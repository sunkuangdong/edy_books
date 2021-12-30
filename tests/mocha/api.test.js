var assert = require('assert');
const request = require('supertest');
const expect = require('chai').expect;

describe('nodejs api test', function () {
    it('获取图书列表接口', function () {
        request("http://localhost:3033")
            .get("/api/getDateList")
            .expect(200)
            .end((err, res) => {
                expect(res.body.length).equal(1)
            })
    });
});