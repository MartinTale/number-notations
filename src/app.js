var getScientificNotation = function (exp) {
  if (exp < 1) {
    return '';
  }
  return 'e' + exp;
};

var americanSimplifiedDictionary = [
  ['abcdefghijklmnopqrstuvwxyz', 26],
  ['abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', 52]
];

var getAmericanSimplifiedNotation = function (exp, capitals = 0) {
  var exp3 = Math.floor(Math.abs(exp) / 3);
  if (exp > 14) {
    return Array(2 + Math.ceil((exp3 - 4) / americanSimplifiedDictionary[capitals][1])).join(americanSimplifiedDictionary[capitals][0][(exp3 - 5) % americanSimplifiedDictionary[capitals][1]]);
  } else if (exp > 0) {
    return getAbbreviatedNumberNotation(exp);
  } else {
    return getScientificNotation(exp);
  }
};

var abbreviatedNumberDictionary = [
  '',   'K',   'M',    'B',    'T',    'Qa',    'Qi',    'Sx',    'Sp',    'Oc',    'No',
        'Dc',  'Ud',   'Dd',   'Td',   'Qad',   'Qid',   'Sxd',   'Spd',   'Ocd',   'Nod',
        'Vg',  'Uvg',  'Dvg',  'Tvg',  'Qavg',  'Qivg',  'Sxvg',  'Spvg',  'Ocvg',  'Novg',
        'Tg',  'Utg',  'Dtg',  'Ttg',  'Qatg',  'Qitg',  'Sxtg',  'Sptg',  'Octg',  'Notg',
        'Qag', 'Uqag', 'Dqag', 'Tqag', 'Qaqag', 'Qiqag', 'Sxqag', 'Spqag', 'Ocqag', 'Noqag',
        'Qig', 'Uqig', 'Dqig', 'Tqig', 'Qaqig', 'Qiqig', 'Sxqig', 'Spqig', 'Ocqig', 'Noqig',
        'Sxg', 'Usxg', 'Dsxg', 'Tsxg', 'Qasxg', 'Qisxg', 'Sxsxg', 'Spsxg', 'Ocsxg', 'Nosxg',
        'Spg', 'Uspg', 'Dspg', 'Tspg', 'Qaspg', 'Qispg', 'Sxspg', 'Spspg', 'Ocspg', 'Nospg',
        'Ocg', 'Uocg', 'Docg', 'Tocg', 'Qaocg', 'Qiocg', 'Sxocg', 'Spocg', 'Ococg', 'Noocg',
        'Nog', 'Unog', 'Dnog', 'Tnog', 'Qanog', 'Qinog', 'Sxnog', 'Spnog', 'Ocnog', 'Nonog',
        'C',   'Uc',   'Dc',   'Tc',   'Qac',   'Qic',   'Sxc',   'Spc',   'Occ',   'Noc'
];
var abbreviatedNumberDictionaryCount = abbreviatedNumberDictionary.length;

var getAbbreviatedNumberNotation = function (exp) {
  var exp3 = Math.floor(Math.abs(exp) / 3);
  if (exp > 0 && exp3 < abbreviatedNumberDictionaryCount) {
    return abbreviatedNumberDictionary[exp3];
  } else {
    return getScientificNotation(exp);
  }
};

var getNumberNotation = function (exp, notation = 0) {
  switch (notation) {
    case 0:
      return getScientificNotation(exp);
    case 1:
      return getAmericanSimplifiedNotation(exp, 0);
    case 2:
      return getAmericanSimplifiedNotation(exp, 1);
    case 3:
      return getAbbreviatedNumberNotation(exp);
  }
};

module.exports = getNumberNotation;
