const initialState = { serviciu: '', text: '' };

const serviciiReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PROTETICA':
      state.serviciu = action.payload;
      state.text =
        'Protetica are ca scop reconstruirea dinţilor cu pierderi semnificative de structură sau a celor lipsă, pentru a avea o dantură echilibrată estetic şi funcţional. Lucrările sunt realizate în colaborare cu tehnicieni dentari. În funcţie de numărul şi tipul dinţilor care lipsesc, în cadrul unei consultaţii va fi analizată situaţia, iar medicul vă va prezenta opţiunile de tratament aplicabile în situaţia dumneavoastră.';
      break;
    case 'IMPLANTOLOGIE':
      state.serviciu = 'Implantologie';
      state.text =
        'Lipsa unui dinte nu este doar o problema estetică, ci influenţează şi modul de alimentaţie. În spaţiul rămas, retracţia gingivală şi atrofierea osoasa sunt mult accelerate, iar dinţii rămaşi îşi schimbă poziţia, migrând spre locul gol. Cea mai bună şi mai modernă soluţie pentru a înlocui dinţii pierduţi o constituie implantul dentar. Acesta poate fi aplicat în cazul în care maxilarul este complet dezvoltat (pacient adult) şi ţesuturile orale sunt sănătoase; acest lucru este determinat în urma efectuării unor radiografii şi a unui consult. Implantul dentar este un dispozitiv care înlocuieşte rădăcina dintelui pierdut, peste care se montează o coroană dentară, pentru a înlocui estetic şi funcţional dintele.';
      break;
    case 'CHIRURGIE':
      state.serviciu = 'Chirurgie';
      state.text =
        'Chirurgia dentară are ca scop modificarea artificială a dinţilor sau a oaselor maxilare, începând de la o simpla extracţie şi până la tratamente complexe, de plastie gingivală sau îndepartarea chisturilor orale. Procedurile chirurgicale sunt nedureroase, datorită anestezicelor folosite, iar tehnologia modernă oferă posibilitatea de a realiza operaţiuni rapide, minim invazive şi cu o recuperare mult accelerată. Intervenţiile chirurgicale de o complexitate ridicată sau cele de tip maxilo-facial sunt realizate doar de către un chirurg specializat.';
      break;
    case 'ODODONTIE':
      state.serviciu = 'Ododonţie';
      state.text =
        'Ododonţia se ocupă cu tratamentul leziunilor coronare: cariile, care sunt cele mai frecvente afecţiuni dentare. Cariile de pe supfaraţa dintelui se formează în general datorită igienei dentare deficitare, fiind accelerate de consumul anumitor tipuri de alimente, însă pot fi provocate şi de cauze necunoscute sau genetice. Acestea din urma pot fi localizate în interiorul dintelui, fiind mai greu de depistat în stadiu incipient. Cariile trebuie tratate cât mai repede, pentru a nu afecta o parte prea mare din dinte, caz în care ar putea necesita şi tratament endodontic. Cariile se tratează prin obturare (plombare); ţesutul afectat este îndepartat în totalitate şi înlocuit cu diverse materiale.';
      break;
    case 'ENDODONTIE':
      state.serviciu = 'Endodonţie';
      state.text =
        'Endodonţia se ocupă cu tratarea afecţiunilor pulpei dentare. Tratamentul endodontic este necesar atunci când pulpa dentară se inflamează sau se infectează, în urma unei carii profunde, a unor obturaţii coronare întinse, fracturi sau fisuri în smalţ, dar şi datorită unor traumatisme suferite de dinte. Chiar şi în cazul unei infecţii, extracţia este ultima soluţie la care se apelează, deoarece dintele poate fi salvat în urma tratamentului endodontic, aceasta fiind cea mai bună soluţie pentru pacient. Printre elementele care pot indica necesitatea unui tratament de canal radicular se numără durerea spontană sau pulsatilă; în cazul în care nu se intervine la timp durerile se pot agrava, mergându-se pana la formarea de abcese.';
      break;
    case 'ORTODONTIE':
      state.serviciu = 'Ortodonție';
      state.text =
        'Ortodonţia cuprinde cu diagnosticarea, prevenirea şi tratamentul malocluziei, adica poziţia incorectă a dinţilor şi oaselor maxilare. Aceasta influenţează atât echilibrul feţei, armonia profilului şi zâmbetul, cât şi masticaţia corectă şi igiena dentară. De aceea, tratamentul ortodontic nu este necesar doar din considerente estetice, ci şi pentru păstrarea sănătăţii dentare; dinţii corect poziţionaţi elimină durerile din articulaţia maxilarului, dificultăţile de mestecat, iar dinţii se pot curăţa mai uşor, evitând astfel apariţia altor probleme.';
      break;
    default:
      return state;
  }
  return state;
};

export default serviciiReducer;
