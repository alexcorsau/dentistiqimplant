// const initialState = [
//   { text: 'Acasa', link: '' },
//   { text: 'Despre noi', link: '' },
//   { text: 'Echipa', link: '' },
//   { text: 'Servicii', link: '' },
//   { text: 'Galerie', link: '' },
//   { text: 'Contact', link: '' },
// ];

const initialState = [
  { text: 'Acasa', link: '/' },
  { text: 'Despre noi', link: '/despreNoi' },
  { text: 'Echipa', link: '/echipa' },
  { text: 'Servicii', link: '/servicii' },
  { text: 'Galerie', link: '/galleryPage' },
  { text: 'Contact', link: '/contactPage' },
];

const pathReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'BUTTONS':
      return (state = [
        { text: 'Acasa', link: '/' },
        { text: 'Despre noi', link: '/despreNoi' },
        { text: 'Echipa', link: '/echipa' },
        { text: 'Servicii', link: '/servicii' },
        { text: 'Galerie', link: '/galleryPage' },
        { text: 'Contact', link: '/contactPage' },
      ]);
    default:
      return state;
  }
};

export default pathReducer;
