export default function manageGame(state = {games: [],}, action) {
  switch (action.type) {
    case 'ADD_GAME':
      console.log("state:", state);
      return {...state, games: state.games.concat(action.game) };

    default:
      return state;
  }
};


// const user = {
//   firstName: 'Khaled',
//   lastName: 'Pendleton'
// }
//
// function printName(firstName, lastName) {
//   console.log(`${firstName} ${lastName}`);
// }
//
// printName(user.firstName, user.lastName);
// printName(...user);
//
// Object.assign(state, { games: state.games.concat(action.game) });
