const currencyNames = {
  AED: "United Arab Emirates Dirham",
  AFN: "Afghan Afghani",
  ALL: "Albanian Lek",
  AMD: "Armenian Dram",
  ANG: "Netherlands Antillean Guilder",
  AOA: "Angolan Kwanza",
  ARS: "Argentine Peso",
  AUD: { name: "Australian Dollar", code: "AU" },
  AWG: "Aruban Florin",
  AZN: "Azerbaijani Manat",
  BAM: "Bosnia-Herzegovina Convertible Mark",
  BBD: "Barbadian Dollar",
  BDT: "Bangladeshi Taka",
  BGN: { name: "Bulgarian Lev", code: "BG" },
  BHD: "Bahraini Dinar",
  BIF: "Burundian Franc",
  BMD: "Bermudan Dollar",
  BND: "Brunei Dollar",
  BOB: "Bolivian Boliviano",
  BRL: { name: "Brazilian Real", code: "BR" },
  BSD: "Bahamian Dollar",
  BTC: "Bitcoin",
  BTN: "Bhutanese Ngultrum",
  BWP: "Botswanan Pula",
  BYN: "New Belarusian Ruble",
  BYR: "Belarusian Ruble",
  BZD: "Belize Dollar",
  CAD: { name: "Canadian Dollar", code: "CA" },
  CDF: "Congolese Franc",
  CHF: { name: "Swiss Franc", code: "CH" },
  CLF: "Chilean Unit of Account (UF)",
  CLP: "Chilean Peso",
  CNY: { name: "Chinese Yuan", code: "CN" },
  COP: "Colombian Peso",
  CRC: "Costa Rican Colón",
  CUC: "Cuban Convertible Peso",
  CUP: "Cuban Peso",
  CVE: "Cape Verdean Escudo",
  CZK: { name: "Czech Republic Koruna", code: "CZ" },
  DJF: "Djiboutian Franc",
  DKK: { name: "Danish Krone", code: "DK" },
  DOP: "Dominican Peso",
  DZD: "Algerian Dinar",
  EGP: "Egyptian Pound",
  ERN: "Eritrean Nakfa",
  ETB: "Ethiopian Birr",
  EUR: { name: "Euro", code: "EU" },
  FJD: "Fijian Dollar",
  FKP: "Falkland Islands Pound",
  GBP: { name: "British Pound Sterling", code: "GB" },
  GEL: "Georgian Lari",
  GGP: "Guernsey Pound",
  GHS: "Ghanaian Cedi",
  GIP: "Gibraltar Pound",
  GMD: "Gambian Dalasi",
  GNF: "Guinean Franc",
  GTQ: "Guatemalan Quetzal",
  GYD: "Guyanaese Dollar",
  HKD: { name: "Hong Kong Dollar", code: "HK" },
  HNL: "Honduran Lempira",
  HRK: { name: "Croatian Kuna", code: "HR" },
  HTG: "Haitian Gourde",
  HUF: { name: "Hungarian Forint", code: "HU" },
  IDR: { name: "Indonesian Rupiah", code: "ID" },
  ILS: { name: "Israeli New Sheqel", code: "IL" },
  IMP: "Manx pound",
  INR: { name: "Indian Rupee", code: "IN" },
  IQD: "Iraqi Dinar",
  IRR: "Iranian Rial",
  ISK: { name: "Icelandic Króna", code: "IS" },
  JEP: "Jersey Pound",
  JMD: "Jamaican Dollar",
  JOD: "Jordanian Dinar",
  JPY: { name: "Japanese Yen", code: "JP" },
  KES: "Kenyan Shilling",
  KGS: "Kyrgystani Som",
  KHR: "Cambodian Riel",
  KMF: "Comorian Franc",
  KPW: "North Korean Won",
  KRW: { name: "South Korean Won", code: "KR" },
  KWD: "Kuwaiti Dinar",
  KYD: "Cayman Islands Dollar",
  KZT: "Kazakhstani Tenge",
  LAK: "Laotian Kip",
  LBP: "Lebanese Pound",
  LKR: "Sri Lankan Rupee",
  LRD: "Liberian Dollar",
  LSL: "Lesotho Loti",
  LTL: "Lithuanian Litas",
  LVL: "Latvian Lats",
  LYD: "Libyan Dinar",
  MAD: "Moroccan Dirham",
  MDL: "Moldovan Leu",
  MGA: "Malagasy Ariary",
  MKD: "Macedonian Denar",
  MMK: "Myanma Kyat",
  MNT: "Mongolian Tugrik",
  MOP: "Macanese Pataca",
  MRO: "Mauritanian Ouguiya",
  MUR: "Mauritian Rupee",
  MVR: "Maldivian Rufiyaa",
  MWK: "Malawian Kwacha",
  MXN: { name: "Mexican Peso", code: "MX" },
  MYR: { name: "Malaysian Ringgit", code: "MY" },
  MZN: "Mozambican Metical",
  NAD: "Namibian Dollar",
  NGN: "Nigerian Naira",
  NIO: "Nicaraguan Córdoba",
  NOK: { name: "Norwegian Krone", code: "NO" },
  NPR: "Nepalese Rupee",
  NZD: { name: "New Zealand Dollar", code: "NZ" },
  OMR: "Omani Rial",
  PAB: "Panamanian Balboa",
  PEN: "Peruvian Nuevo Sol",
  PGK: "Papua New Guinean Kina",
  PHP: { name: "Philippine Peso", code: "PH" },
  PKR: "Pakistani Rupee",
  PLN: { name: "Polish Zloty", code: "PL" },
  PYG: "Paraguayan Guarani",
  QAR: "Qatari Rial",
  RON: { name: "Romanian Leu", code: "RO" },
  RSD: "Serbian Dinar",
  RUB: { name: "Russian Ruble", code: "RU" },
  RWF: "Rwandan Franc",
  SAR: "Saudi Riyal",
  SBD: "Solomon Islands Dollar",
  SCR: "Seychellois Rupee",
  SDG: "Sudanese Pound",
  SEK: { name: "Swedish Krona", code: "SE" },
  SGD: { name: "Singapore Dollar", code: "SG" },
  SHP: "Saint Helena Pound",
  SLL: "Sierra Leonean Leone",
  SOS: "Somali Shilling",
  SRD: "Surinamese Dollar",
  STD: "São Tomé and Príncipe Dobra",
  SVC: "Salvadoran Colón",
  SYP: "Syrian Pound",
  SZL: "Swazi Lilangeni",
  THB: { name: "Thai Baht", code: "TH" },
  TJS: "Tajikistani Somoni",
  TMT: "Turkmenistani Manat",
  TND: "Tunisian Dinar",
  TOP: "Tongan Paʻanga",
  TRY: { name: "Turkish Lira", code: "TR" },
  TTD: "Trinidad and Tobago Dollar",
  TWD: "New Taiwan Dollar",
  TZS: "Tanzanian Shilling",
  UAH: "Ukrainian Hryvnia",
  UGX: "Ugandan Shilling",
  USD: { name: "United States Dollar", code: "US" },
  UYU: "Uruguayan Peso",
  UZS: "Uzbekistan Som",
  VEF: "Venezuelan Bolívar Fuerte",
  VND: "Vietnamese Dong",
  VUV: "Vanuatu Vatu",
  WST: "Samoan Tala",
  XAF: "CFA Franc BEAC",
  XAG: "Silver (troy ounce)",
  XAU: "Gold (troy ounce)",
  XCD: "East Caribbean Dollar",
  XDR: "Special Drawing Rights",
  XOF: "CFA Franc BCEAO",
  XPF: "CFP Franc",
  YER: "Yemeni Rial",
  ZAR: { name: "South African Rand", code: "ZA" },
  ZMK: "Zambian Kwacha (pre-2013)",
  ZMW: "Zambian Kwacha",
  ZWL: "Zimbabwean Dollar",
};

function findCurrencyName(code) {
  let currencyName = currencyNames[code];
  return currencyNames[code].name;
}

export default findCurrencyName;
