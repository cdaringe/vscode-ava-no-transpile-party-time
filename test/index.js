'use strict'

process.env.DEBUG = '*'
var ava = require('ava').default
var bluebird = require('bluebird')

ava.beforeEach(async function (t) {
  var port = 1234
  t.context.bananas = 'fruit'
  t.context.origin = `http://whatever:${port}`
  await bluebird.delay(50) // why not.
})

ava('best:test', async function (t) {
  t.is(0, 0) // wow!
  console.log('dont log in tests, dawg :)')
  await bluebird.delay()
  t.is(t.context.bananas, 'fruit', 'yum')
})
