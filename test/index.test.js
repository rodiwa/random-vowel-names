import RandomVowelName from '../src/index.js'

describe('Random Vowel Name Generator', () => {
  it("should generate name starting with given vowel", () => {
    expect(RandomVowelName('a')).toMatch("Adam")
    expect(RandomVowelName('e')).toMatch("Eve")
  })

  it("should be case insensitive", () => {
    expect(RandomVowelName('A')).toMatch("Adam")
    expect(RandomVowelName('E')).toMatch("Eve")
  })

  it("should inform user if not using a vowel", () => {
    expect(RandomVowelName('D')).toMatch("Use a vowel - A, E, I, O, U")    
  })

  it("should give names with A if no vowels specified", () => {
    expect(RandomVowelName()).toMatch("Adam")
  })
})
