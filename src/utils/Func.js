const FUNC = {
  currency(num, isRp) {
    if (num === null || num === 0) {
      return '';
    } else {
      if (isRp) {
        return parseFloat(num)
          .toFixed()
          .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
      }
      return (
        'Rp ' +
        parseFloat(num)
          .toFixed()
          .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
      );
    }
  },
  reduceArr(Arr, key, other) {
    var totals = 0;
    if (other) {
      totals = Arr.filter(x => x[other] === true).reduce(
        (acc, o) => acc + parseFloat(o[key]),
        0,
      );
    } else {
      totals = Arr.reduce((acc, o) => acc + parseFloat(o[key]), 0);
    }
    return totals;
  },
  boolItemArr(Arr, index, key) {
    var newDatas = [...Arr];
    newDatas[index][key] = !newDatas[index][key];
    return newDatas;
  },
  removeItemArr(Arr, index, key) {
    var newDatas = [...Arr];
    newDatas[index][key] = !newDatas[index][key];
    var newItems = newDatas.filter(x => x[key] !== false);
    return newItems;
  },
};
export default FUNC;
