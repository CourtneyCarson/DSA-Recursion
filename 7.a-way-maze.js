//find a way out of the maze 
let mySmallMaze = [
  [' ', ' ', ' '],
  [' ', '*', ' '],
  [' ', ' ', 'e']
];
let myLargeMaze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];


const maze = (x = 0, y = 0, mazeArr) => {
  const rows = mazeArr.length - 1;
  const columns = mazeArr[0].length - 1;
  if (x < 0 || x > columns || y < 0 || y > rows)
    return 'Please use a x and y value >= 0';
  if (mazeArr[y][x] === 'e')
    return ` Yay! Reached the goal at ${x}:${y}`;
  if (mazeArr[y][x + 1] !== '*' && x < columns) {
    mazeArr[y][x] = '*';
    return 'R' + maze(x + 1, y, mazeArr);
  }
  if (mazeArr[y][x - 1] !== '*' && x >= 0) {
    mazeArr[y][x] = '*';
    return 'L' + maze(x - 1, y, mazeArr);
  }
  if (mazeArr[y + 1][x] !== '*' && y < rows) {
    mazeArr[y][x] = '*';
    return 'D' + maze(x, y + 1, mazeArr);
  }
  if (mazeArr[y - 1][x] !== '*' && y >= 0) {
    mazeArr[y][x] = '*';
    return 'U' + maze(x, y - 1, mazeArr);
  }
};
console.log(maze(0, 0, mySmallMaze));
console.log(maze(0, 0, myLargeMaze));

