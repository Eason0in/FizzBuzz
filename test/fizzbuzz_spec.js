var should = chai.should()

describe('test fizzbuzz function', function () {

    it('should return Fizz when input divisibleBy 3', function () {
        let result = fizzBuzz(9)
        result.should.be.eql('Fizz')
    })

    it('should return Buzz when input divisibleBy 5', function () {
        let result = fizzBuzz(10)
        result.should.be.eql('Buzz')
    })

    it('should return FizzBuzz when input divisibleBy 3 & 5', function () {
        let result = fizzBuzz(15)
        result.should.be.eql('FizzBuzz')
    })

    it('should return input when input is not divisibleBy 3 or 5', function () {
        let result = fizzBuzz(11)
        result.should.be.eql(11)
    })

})