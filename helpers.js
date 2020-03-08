exports.innerText = async elm => {
  if (!elm) return ``;
  return await elm.evaluate(node => node.innerText);
};

exports.src = async elm => {
  if (!elm) return ``;
  return await elm.evaluate(node => node.src);
};

exports.dateTime = async elm => {
  if (!elm) return ``;
  return await elm.evaluate(node => node.dateTime);
};
