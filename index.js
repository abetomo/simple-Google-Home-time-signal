'use strict'

const googlehome = require('google-home-notifier')

const deviceName = 'Google Home'
const ip = process.argv[2] || '192.168.1.20'

const hour = (new Date()).getHours()
const text = hour + '時です'
console.log(text)

const language = 'ja'

googlehome.ip(ip, language)
googlehome.device(deviceName, language)
googlehome.notify(text, (notifyRes) => {
  console.log(notifyRes)
})
