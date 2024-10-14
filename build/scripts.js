/**
 * Verkefni 7 í Vefforritun 1, 2024.
 * Notar jsdoc til að skrifa lýsingu á föllum, inntaki og úttaki.
 * Kveikið á `Check JS` í Visual Studio Code til að sjá mögulegar villur.
 * Notar `console.assert` til að athuga hvort föll virki rétt.
 */

//------------------------------------------------------------------------------
// Fastar

/** Íslenskir sérhljóðar */
const CONSONANTS = 'bcdfghjklmnpqrstvwxz'.split('');

/** Íslenskir samhljóðar */
const VOWELS = 'aeiouyáéýúíóöæ'.split('');

//------------------------------------------------------------------------------
// Hjálparföll

/**
 * Athuga hvort óþekkt gildi sé strengur eða ekki.
 * @param {unknown} str Óþekkt gildi sem athuga á hvort sé strengur.
 * @returns `true` ef `str` er strengur, annars `false`.
 */
// Skilgreinum anonymous fall og bindum við breytuna `isString`
const isString = (str) => typeof str === 'string';

// Prófum fallið
console.assert(isString('hi') === true, 'isString: skilar `true` fyrir streng');
console.assert(isString(42) === false, 'isString: skilar `false` fyrir tölu');
console.assert(isString(null) === false, 'isString: skilar `false` fyrir null');

/**
 * Öruggt fall sem skilar fylki af strengjum úr gefnum streng, skipt upp með
 * gefnum afmkarkara (separator).
 * @param {string} str Hugsanlegur strengur sem skal skipta.
 * @returns {string[]} Fylki af strengjum eða tóma fylkið ef afmarkari kom
 * ekki fram.
 */
function split(str, separator = ' ') {
  if (!isString(str)) {
    return [];
  }

  return str.split(separator);
}

//------------------------------------------------------------------------------
// Grunnföll sem skilgreina á

/**
 * Fall sem finnur lengsta orðið úr gefnum streng.
 * @param {string} str 
 * @returns streng með lengsta orði úr `str` eða `null` ef `str` er ekki strengur.
 */
function longest(str) {
  if (isString(str)) {
    const split1 = split(str);
    let longest = "";

    for (let i = 0; i < split1.length; i++) {
      if (split1[i].length > longest.length) {
        longest = split1[i];
      }
    }

    return longest;
  }
  return null;
}

console.assert(longest('halló heimur!') === 'heimur!', 'longest: skilar `heimur!` fyrir "halló heimur!"');
console.assert(longest(false) === null, 'longest: skilar `null` fyrir false');

/**
 * fall sem finnur stysta orðið úr gefnum streng.
 * @param {string} str 
 * @returns streng með stysta orði úr `str` eða `null` ef `str` er ekki strengur.
 */
function shortest(str) {
  if (isString(str)) {
    const split1 = split(str);
    let shortest = split1[0];

    for (let i = 0; i < split1.length; i++) {
      if (split1[i].length < shortest.length && split1[i].length != " ") {
        shortest = split1[i];
      }
    }
    return shortest;
  }
  return null;
}

console.assert(shortest('halló heimur!') === 'halló', 'shortest: skilar `halló` fyrir "halló heimur!"');
console.assert(shortest(false) === null, 'shortest: skilar `null` fyrir false');

/**
 * Fall sem snýr við streng.
 * @param {string} str 
 * @returns streng sem er snúinn við eða `null` ef `str` er ekki strengur.
 */
function reverse(str) {
  if (isString(str)) {
    const split = str.split('');
    const reversed = split.reverse();

    return reversed.join('');
  }
  return null;
}

console.assert(reverse('halló') === 'óllah', 'reverse: snŷr við streng');
console.assert(reverse(false) === null, 'reverse: skilar `null` fyrir false');

/**
 * Fall sem athugar hvort strengur sé palindrom.
 * @param {string} str 
 * @returns skilar true ef strengur er palindrom, annars false.
 */
function palindrome(str) {
  if (isString(str) && str != "") {
    const split1 = str.split('');
    const reversed = [...split1].reverse();
    let ekkiPalindrome = 0;
    
    for (let i = 0; i < split1.length; i++) {
      if (split1[i].toLowerCase() != reversed[i].toLowerCase()) {
        ekkiPalindrome++;
      }
    }
    return ekkiPalindrome === 0;
  }
  return false;
}

console.assert(palindrome('anna') === true, 'palindrome: skilar `true` fyrir "anna"');
console.assert(palindrome('halló') === false, 'palindrome: skilar `false` fyrir "halló"');
console.assert(palindrome('aNna') === true, 'palindrome: skilar `true` fyrir "anna"');

/**
 * fall sem telur hversu margir sérhljóðar eru í gefnum streng.
 * @param {string} str 
 * @returns fjolda sérhljóða í streng ef strengur er gefinn, annars `null`.
 */
function vowels(str) {
  if (isString(str)) {
    const split1 = str.split('');
    let vowels = 0;

    for (let i = 0; i < split1.length; i++) {
      for ( let j = 0; j < VOWELS.length; j++) {
        if (split1[i].toLowerCase() === VOWELS[j]) {
          vowels++;
        }
      }
    }
    return vowels;
  }
  return null;
}

console.assert(vowels('halló') === 2, 'vowels: skilar `2` fyrir "halló"');
console.assert(vowels(false) === null, 'vowels: skilar `null` fyrir false');
console.assert(vowels('hll') === 0, 'vowels: skilar `0` ef engir sérhljóðar eru í strenginum"');

/**
 * Fall sem telur hversu margir samhljóðar eru í gefnum streng.
 * @param {string} str 
 * @returns fjolda samhljóða í streng ef strengur er gefinn, annars `null`.
 */
function consonants(str) {
  if (isString(str)) {
    const split1 = str.split('');
    let consonants = 0;

    for (let i = 0; i < split1.length; i++) {
      for ( let j = 0; j < CONSONANTS.length; j++) {
        if (split1[i].toLowerCase() === CONSONANTS[j]) {
          consonants++;
        }
      }
    }
    return consonants;
  }
  return null;
}

console.assert(consonants('halló') === 3, 'consonants: skilar `3` fyrir "halló"');
console.assert(consonants(false) === null, 'consonants: skilar `null` fyrir false');
console.assert(consonants('aaa') === 0, 'consonants: skilar `0` ef engir samhljóðar eru í strenginum"');


//------------------------------------------------------------------------------
// Leiðbeint ferli

/**
 * Fall sem spyr notanda um streng og nota öll hin föllin til að birta upplýsingum um hann.
 * @returns alert með upplýsingum um streng.
 */
function start() {
  alert("Sláðu inn streng med nokkrum ordum til að fá upplysingar um:\n-Lengsta orðið.\n-Stysta orðið.\n-Strenginn snúið við.\n-Fjölda sérhljóõa í streng.\n-Fjölda samhljóða i streng.\n-Hvort strengurinn sé samhverfur.");
  let str = prompt("Sláðu inn streng með nokkrum orðum");

  let aftur = true;
  if (str === null) {
    return;
  }
  while (aftur != null) {
    if (isString(str) && str != "") {
      alert(`Lengsta orðið er: ${longest(str)}\nStysta orðið er: ${shortest(str)}\nStrengurinn snúinn við: ${reverse(str)}\nFjöldi sérhljóða í streng: ${vowels(str)}\nFjöldi samhljóða í streng: ${consonants(str)}\nStrengurinn er ${palindrome(str) ? "" : "ekki"} samhverfur`);
      let aftur = confirm("Viltu prófa aftur?");
      if (aftur === false) {
        break;
      } else {
        str = prompt("Sláðu inn streng með nokkrum orðum");
      }
    }
  } 
}
