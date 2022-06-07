function getPrice(name, descr) {
  const nameLength = name.length;
  const descrLength = descr.length;

  const calcule = (10 + nameLength * ((500 - descrLength) / (3 - nameLength)));
  const convert = calcule.toFixed(2);
  return convert;
}

export default getPrice;
