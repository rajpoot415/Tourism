import { Text, View } from 'react-native'
import React, { Component } from 'react'

export default class Test extends Component {
  render() {
    return (
      <View>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d249525.41415596197!2d109.24650199999999!3d12.25947015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3170677811cc886f%3A0x5c4bbc0aa81edcb9!2zTmhhIFRyYW5nLCBLaMOhbmggSMOyYSwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1685773414709!5m2!1sen!2s" width="600" height="450" style="border:0;" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </View>
    )
  }
}