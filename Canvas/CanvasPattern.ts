/**
 * @CanvasPattern
 * 模板（基于 image、canvas 或 video）的不透明对象
 * const result: CanvasPattern = CanvasRenderingContext2D.createPattern(image, repetition);
 */
const canvas: any = document.getElementById("canvas");
const ctx: any = canvas?.getContext("2d");
const gradient: any = ctx.createLinearGradient(0, 0, 200, 0);

/**
 * @setTransform
 * CanvasGradient.setTransform(matrix) 被用作图案的变换矩阵
 * 设置渐变
 */

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var svg1 = document.getElementById("svg1");
var matrix = svg1.createSVGMatrix();

var img = new Image();
img.src = "canvas_createpattern.png";

img.onload = function () {
  var pattern = ctx.createPattern(img, "repeat");
  pattern.setTransform(matrix.rotate(-45).scale(1.5));
  ctx.fillStyle = pattern;
  ctx.fillRect(0, 0, 400, 400);
};
