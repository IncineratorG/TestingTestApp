const SummatorUtil = () => {
  const sumNumbers = ({num1, num2}) => {
    if (!num1 || !num2) {
      return null;
    }

    if (Number.isNaN(Number(num1)) || Number.isNaN(Number(num2))) {
      return null;
    }

    return Number(num1) + Number(num2);
  };

  const sumTextStrings = (str1, str2) => {
    return str1.toString() + str2.toString();
  };

  // const sumNumberArrays = ({arr1, arr2}) => {
  //
  // }

  return {
    sumNumbers,
    sumTextStrings,
  };
};

export default SummatorUtil();
