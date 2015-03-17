goog.provide('SB.Renderer');

/**
 * Wrapper around the canvas and its rendering context.
 * @param {!HTMLCanvasElement} canvas
 * @namespace
 */
SB.Renderer = function(canvas) {
  var PADDING = 20;

  var context = canvas.getContext('2d');
  var width = 576;
  var height = 640;

  /**
   * Resizes the canvas.
   * @param {number} newWidth The canvas width.
   * @param {number} newHeight The canvas height.
   * @private
   */
  function resize(newWidth, newHeight) {
    canvas.width = newWidth + PADDING;
    canvas.height = newHeight;

    width = newWidth;
    height = newHeight;

    window.worldWidth = newWidth;
    window.worldHeight = newHeight;
  }
  resize(width, height);

  // Public Interface

  /**
   * A reference to the canvas rendering context.
   * @type {CanvasRenderingContext2D}
   */
  this.context = context;

  /**
   * Clears the canvas by filling it white.
   */
  this.clear = function() {
    context.fillStyle = "#FFFFFF";
    context.fillRect(0, 0, width + PADDING, height);
  };

  /**
   * Overlays a shadow from the wall on the left.
   */
  this.addShadowLine = function() {
    context.fillStyle = "#E1E7E7";
    context.fillRect(0, 0, 12, height);
  };

  /**
   * Overlays shadows cast by the surrounding machines.
   */
  this.addMachineShadows = function() {
    context.fillStyle = "rgba(0,0,0,0.7)";
    context.fillRect(0, 0, width + PADDING, 13);
    context.fillRect(0, height - 12, width + PADDING, 12);

    context.fillStyle = "rgba(98,135,137,0.2)";
    context.beginPath();
    context.moveTo(0,0);
    context.lineTo(0,23);
    context.lineTo(52,48);
    context.lineTo(width + PADDING,48);
    context.lineTo(width + PADDING,0);
    context.closePath();
    context.fill();
  };

};