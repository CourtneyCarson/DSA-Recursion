function countsheep(sheep) {
  // base case
  if (sheep === 0) {
    console.log('All sheep jumped the fence');
    return;
  }


  //recurring case
  console.log(`${sheep}: Another sheepp jumped the fence`);
  countsheep(sheep - 1);
}

countsheep(3);