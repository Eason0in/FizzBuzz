var should=chai.should()

describe('test fizzbuzz function',function(){

    it('input 9 should return Fizz',function(){
        let result=fizzBuzz(9)
        result.should.be.eql('Fizz')

    })

    it('input 10 should return Buzz',function(){
        let result=fizzBuzz(10)
        result.should.be.eql('Buzz')

    })

    it('input 15 should return FizzBuzz',function(){
        let result=fizzBuzz(15)
        result.should.be.eql('FizzBuzz')

    })

    it('input 11 should return 11',function(){
        let result=fizzBuzz(11)
        result.should.be.eql(11)

    })
    
})