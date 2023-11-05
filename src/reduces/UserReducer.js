
export const initialState = {
  search: '',
  heroes: [],
  selectedCards: [],
  winnerName: '',
  modalOpen: false,
  winner: null
};

export const userReducer = (state, action) => {
  switch (action.type) {
    case 'setSearch':
      return { ...state, search: action.payload.search };
    case 'setHeroes':
      return { ...state, heroes: action.payload.heroes };
    case 'setSelectedCards':
      return { ...state, selectedCards: action.payload.selectedCards };
    case 'setWinner':
      return { ...state, winner: action.payload.winner };
    case 'setWinnerName':
      return { ...state, winnerName: action.payload.winnerName };
    case 'setModalOpen':
      return { ...state, modalOpen: action.payload.modalOpen };
    default:
      return state;
  }
};