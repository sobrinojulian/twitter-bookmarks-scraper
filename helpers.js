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

exports.scrollElementTop = async (page, elm) => {
  await page.evaluate(
    elm => window.scrollBy(0, elm.getBoundingClientRect().top),
    elm
  );
  await page.waitFor(1000);
};

exports.setBackgroundColor = async (page, elm, color) => {
  await elm.evaluate((v, color) => (v.style.backgroundColor = color), color);
};
