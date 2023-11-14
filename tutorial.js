// DADOS PRIMARIOS

// STRING: "AEDADADAEIDAIEDIAE888ID"
// BOLLEAN: true, false;
// number: 8;
// STRING: "9";
// ARRAY: ["JavaScriptt", 'TypeScript', 'React', 'PHP' ]

// + = SOMA
// - = SUBTRAÇÃO
// * = MULTIPLICAÇÃO
// / = DIVISÃO
// % = RESTO
// || = OU
// && = E
// > MAIOR
// < MENOR
// >= MAIOR OU IGUAL
// < MENOR OU IGUAL

// VARIABLES
// let numerolet = 1;
// let numerolet2 = 1;
// const numeroconst = 1;

//  numeroconst = numerolet + numerolet2;
// console.log(soma)

//FUNÇÕES

//ORIGINAIS

// const resto = 5 % 2

// if(5 % 2 == 0) {
//john
// }

let listLanguage1 = ['REACT', 'PHP', 'JavaScript'];
const listLanguage2 = ['TypeScript', 'PHP', 'REACT'];

function VerifyLanguage(languageList) {

if (languageList.find((language) => language === 'JavaScript')) {
  languageList.push('TypeScript')
  return languageList
} else {
    languageList.push('JavaScript');
    return languageList
}
}

console.log(VerifyLanguage(listLanguage2))




//PRE PRONTAS