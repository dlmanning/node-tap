var Test = require('../..').Test
var t = new Test()
t.pipe(process.stdout)
t.test('name', { skip: true, some: 'diags', diagnostic: true })
t.end()
