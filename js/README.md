<canvas id="sketchpad"></canvas>

var sketchpad = new Sketchpad({
element: "#sketchpad",
width: 400,
height: 400,
});

sketchpad.undo();
sketchpad.redo();
sketchpad.color = "#FF0000";
sketchpad.penSize = 10;
sketchpad.animate(10);
