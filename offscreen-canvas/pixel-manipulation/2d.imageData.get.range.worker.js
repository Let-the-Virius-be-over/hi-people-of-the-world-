// DO NOT EDIT! This test has been generated by tools/gentest.py.
// OffscreenCanvas test in a worker:2d.imageData.get.range
// Description:getImageData() returns values in the range [0, 255]
// Note:

importScripts("/resources/testharness.js");
importScripts("/2dcontext/resources/canvas-tests.js");

var t = async_test("getImageData() returns values in the range [0, 255]");
t.step(function() {

var offscreenCanvas = new OffscreenCanvas(100, 50);
var ctx = offscreenCanvas.getContext('2d');

ctx.fillStyle = '#000';
ctx.fillRect(0, 0, 100, 50);
ctx.fillStyle = '#fff';
ctx.fillRect(20, 10, 60, 10);
var imgdata1 = ctx.getImageData(10, 5, 1, 1);
_assertSame(imgdata1.data[0], 0, "imgdata1.data[\""+(0)+"\"]", "0");
var imgdata2 = ctx.getImageData(30, 15, 1, 1);
_assertSame(imgdata2.data[0], 255, "imgdata2.data[\""+(0)+"\"]", "255");

t.done();

});
done();