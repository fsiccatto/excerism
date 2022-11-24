

export class Size {
  constructor(width = 80, height = 60) {
    this.width = width;
    this.height = height;
  }

  resize(newWidth, newHeight) {
    this.width = newWidth;
    this.height = newHeight;
  }
}

export class Position {
  // (0, 0) is the upper left corner of the screen.
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  move(newX, newY) {
    this.x = newX;
    this.y = newY;
  }
}

export class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
  }

  resize(newSize) {
    const maxWidth = this.screenSize.width - this.position.x;
    const maxHeight = this.screenSize.height - this.position.y;

    const newWidth = Math.max(1, Math.min(newSize.width, maxWidth));
    const newHeight = Math.max(1, Math.min(newSize.height, maxHeight));

    this.size.resize(newWidth, newHeight);
  }

  move(newPosition) {
    const maxX = this.screenSize.width - this.size.width;
    const maxY = this.screenSize.height - this.size.height;

    const newX = Math.max(0, Math.min(newPosition.x, maxX));
    const newY = Math.max(0, Math.min(newPosition.y, maxY));

    this.position.move(newX, newY);
  }
}

export function changeWindow(programWindow) {
  programWindow.resize(new Size(400, 300));
  programWindow.move(new Position(100, 150));
  return programWindow;
}

const size = new Size(1080, 764);
size.resize(1920, 1080);
console.log(size.height);

const point = new Position();
point.move(100, 200);
console.log(point.x);

const programWindow = new ProgramWindow();
console.log(programWindow.screenSize.width);
console.log(programWindow.size.width);
console.log(programWindow.position.x);

const newSize = new Size(600, 400);
programWindow.resize(newSize);
console.log(programWindow.size.width);
console.log(programWindow.size.height);

const newPosition = new Position(50, 100);
programWindow.move(newPosition);
console.log(programWindow.position.x);
console.log(programWindow.position.y);

changeWindow(programWindow);
console.log(programWindow.size.width);

// Exercise doing with help from solutions!