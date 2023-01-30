import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React from 'react'

const Payments = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={{fontSize:18, fontWeight:'400', color:'black', marginBottom:40}}>CHỌN HÌNH THỨC THANH TOÁN</Text>
      </View>
      <View style={styles.boxContainer}>
        <View>
          <Pressable style={styles.box}>
            <Image />
            <Text style={styles.text}>MoMo</Text>
          </Pressable>
        </View>
        <View>
          <Pressable style={styles.box}>
            <Image />
            <Text style={styles.text}>PayPal</Text>
          </Pressable>
        </View>
        <View>
          <Pressable style={styles.box}>
            <Image />
            <Text style={styles.text}>VNPay</Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}

export default Payments

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 20,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  box: {
    marginTop: 20,
    height: 60,
    borderWidth: 0.5,
    borderColor: '6767671A',
    borderRadius: 10,
    width: 330,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#22A45D'
  },
  text: {
    fontSize:14,
    fontWeight: '400',
    color: 'white',
  },
})