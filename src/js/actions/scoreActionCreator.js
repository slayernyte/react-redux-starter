export function setScore (score, user) {
  return {
    type : 'SET_SCORE',
    score,
    user
  }
}
export function incrementScore (score, user) {
  return {
    type : 'INC_SCORE',
    score,
    user
  }
}

/*

scores = [{
  name : 'amber',
  uid : 0,
  score : 7
},{
  name : 'schris',
  uid : 1,
  score : 10
}]
 */

