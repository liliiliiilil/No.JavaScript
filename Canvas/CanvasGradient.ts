/**
 * @CanvasGradient
 * 渐变对象
 *
 * const result: CanvasGradient = CanvasRenderingContext2D.createLinearGradient(x0, y0, x1, y1);
 * 创建一个沿参数坐标指定的直线的渐变
 * const result: CanvasGradient = CanvasRenderingContext2D.createRadialGradient(x0, y0, r0, x1, y1, r1);
 * 根据参数确定两个圆的坐标，绘制放射性渐变的方法
 */
const canvas: any = document.getElementById("canvas");
const ctx: any = canvas?.getContext("2d");
const gradient: any = ctx.createLinearGradient(0, 0, 200, 0);

/**
 * @addColorStop
 * CanvasGradient.addColorStop(offset:0-1,color)
 * 设置渐变
 */
gradient.addColorStop(0, "green");
gradient.addColorStop(1, "white");
ctx.fillStyle = gradient;
ctx.fillRect(10, 10, 200, 100);
