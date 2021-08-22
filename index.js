function superbowlWin(x) {
  let y = x.find(x => x.result === "W")
  if (y) {
    return y.year
  }
  else{
    return undefined
  }
}



/* superbowlWin = (record) => {
  const result = record.find( record => record.result === "W" );
  return !!result ? result.year : undefined;
}
 */
