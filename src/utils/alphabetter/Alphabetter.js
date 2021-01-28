const Alphabetter = () => {
  const ERROR = -1;

  const alphabet = [
    'A',
    'B,',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];

  const alphabetSet = new Set(alphabet);

  const getAlphabet = () => {
    return alphabet;
  };

  const letterOrderNumber = (letter) => {
    if (!letter) {
      return ERROR;
    }

    const letterInUpperCase = letter.toUpperCase();
    if (!alphabetSet.has(letterInUpperCase)) {
      return ERROR;
    }

    for (let i = 0; i < alphabet.length; ++i) {
      if (alphabet[i] === letterInUpperCase) {
        return i + 1;
      }
    }

    return ERROR;
  };

  const getTextUniqueLetters = ({text, caseSensitive = false}) => {
    if (!text || text.length <= 0 || typeof text !== 'string') {
      return {
        isValid: false,
        uniqueLettersCount: ERROR,
        uniqueLettersArray: [],
        uniqueLettersStatisticMap: new Map(),
      };
    }

    let alphanumericText = text.replace(/\s+/g, '');
    alphanumericText = alphanumericText.replace(/[^0-9a-z]/gi, '')
    if (!caseSensitive) {
      alphanumericText = alphanumericText.toUpperCase();
    }

    let uniqueLettersCount = 0;
    const uniqueLettersArray = [];
    const uniqueLettersStatisticMap = new Map();
    for (let i = 0; i < alphanumericText.length; ++i) {
      const currentLetter = alphanumericText[i];
      if (uniqueLettersStatisticMap.has(currentLetter)) {
        let currentLetterFrequency = uniqueLettersStatisticMap.get(
          currentLetter,
        );
        uniqueLettersStatisticMap.set(currentLetter, currentLetterFrequency);
      } else {
        ++uniqueLettersCount;
        uniqueLettersArray.push(currentLetter);
        uniqueLettersStatisticMap.set(currentLetter, 1);
      }
    }

    return {
      isValid: true,
      uniqueLettersCount,
      uniqueLettersArray,
      uniqueLettersStatisticMap,
    };
  };

  return {
    ERROR,
    // Возвращает массив, состоящий из букв латинского алфавита.
    getAlphabet,
    // Принимает букву английского алфавита и возвращает её порядковый номер.
    // В случае неудачи возвращает значение ERROR.
    letterOrderNumber,
    // Принимает произвольный текст и флаг того, учитывать ли регистр букв. Возвращает объект,
    // состоящий из количества уникальных для данного текста букв, массива этих букв и хэш-таблицы,
    // состоящей из уникальных для даннго текста букв и их количества в данном тексте.
    getTextUniqueLetters,
  };
};

export default Alphabetter();
