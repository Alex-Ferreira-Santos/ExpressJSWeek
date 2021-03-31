const EntityBase = require('./EntityBase')

const assert = require('assert')
const Employee = require('./employee')
const Util = require('./util')

const GENDER = {
    male: 'male',
    female: 'female',
}

{
    const employee = new Employee({
        name:'Aline',
        gender: GENDER.female
    })
    assert.throws(() => employee.birthYear, {message: 'You must define age first!'})
}

{
    const employee = new Employee({
        name:'Alex',
        age: 18,
        gender: GENDER.male    
    })

    assert.deepStrictEqual(employee.name, 'Mr. Alex')
    assert.deepStrictEqual(employee.age, undefined)
    assert.deepStrictEqual(employee.gender, undefined)
    assert.deepStrictEqual(employee.grossPay, Util.formatCurrency(5000.40))
}