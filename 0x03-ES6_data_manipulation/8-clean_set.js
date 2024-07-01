export default function cleanSet(set, startString) {
  let str = '';
  const arr = [];

  if (startString && typeof startString === 'string') {
    for (const elmt of set) {
      if (elmt && elmt.startsWith(startString)) {
        arr.push(elmt.slice(startString.length));
      }
    }
    str = arr.join('-');
  }
  return str;
}
