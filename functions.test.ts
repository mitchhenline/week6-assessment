const {shuffleArray} = require('./utils')

describe('shuffleArray', () => {
    test('should be array', () => {
    expect(typeof shuffleArray).toBe([])
})

    test('should not be string', () => {
    expect(typeof shuffleArray).not.toBe('string')
    })

})