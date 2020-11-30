// ALL paths out of maze 
// have to keep track of where you have been in the maze
// copy the maze 
// true returns when branch is over
// false returns if you run into the outside borders
// the way back up doesn't matter 
// the opposite of the other solution
let mySmallMaze = [
  [' ', ' ', ' '],
  [' ', '*', ' '],
  [' ', ' ', 'e']
];
let bigMaze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];
function copyMaze(maze) {
  const copy = [];
  maze.forEach(row => {
    copy.push([...row]);
  });
  return copy;
}
function pathFinder(maze, x = 0, y = 0, currPath = '', paths = []) {
  const currRow = maze[y];
  const directions = {
    'R': (x, y) => [x + 1, y],
    'D': (x, y) => [x, y + 1],
    'L': (x, y) => [x - 1, y],
    'U': (x, y) => [x, y - 1]
  };
  if(!currRow) return false;
  const currSpace = currRow[x];
  if(!currSpace) return false;
  if(currSpace === '*') return false;
  if(currSpace === 'e') {
    console.log('Path to the exit:', currPath);
    paths.push(currPath);
    return true;
  }
  currRow[x] = '*';
  for (const [dir, func] of Object.entries(directions)) {
    pathFinder(copyMaze(maze), ...func(x, y), currPath + dir, paths);
  }
  return paths;
}
pathFinder(bigMaze);