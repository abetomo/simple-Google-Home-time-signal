'use strict'

const GoogleHome = require('google-home-push')

const ip = process.argv[2] || '192.168.1.20'
const language = 'ja'

const options = { language }
const myHome = new GoogleHome(ip, options)

const hour = (new Date()).getHours()
const text = hour + '時です'
console.log(text)

myHome.speak(text)
