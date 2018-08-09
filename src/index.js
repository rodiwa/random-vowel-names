import names from '../names.json'

const arrVowels = ['a', 'e', 'i', 'o', 'u']

const RandomVowelName = char => {
  const vowel = char ? char.split('')[0].toLowerCase() : 'a'
  if (arrVowels.indexOf(vowel) > -1) {
    return names[vowel]
  }

  return 'Use a vowel - A, E, I, O, U'
}

export default RandomVowelName
