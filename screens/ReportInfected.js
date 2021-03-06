import React, { useState } from 'react'
import {  
  Text, 
  View, 
  TextInput,  
  StyleSheet,
} from 'react-native'
import CheckBox from './../components/CheckBox'
import COLORS from './../constants/Colors'
import Button from './../components/Button'
import StyledText from './../components/StyledText'

const ReportInfected = props => {
  var [confirmed, setConfirmed] = useState(false)
  var [daysStr, setDaysStr] = useState('')
  var days = daysStr === '' ? Number('NaN') : Number(daysStr)

  var onReportInfected = () => {
    var showingSymptomsTime = new Date()
    showingSymptomsTime.setDate(showingSymptomsTime.getDate() - days)
    props.onReportInfected(showingSymptomsTime.valueOf())
  }

  return <View>
    <StyledText>How many days ago did you start showing symptoms?</StyledText>
    
    <TextInput  
      placeholder="Days"   
      keyboardType="numeric"
      style={styles.input}
      value={daysStr}
      onChangeText={value => setDaysStr(value)}
    />  

    <Text style={{color: COLORS.warningText}}>
      I acknowledge that I have officially tested positive for COVID-19. 
      By tapping 'Confirm' I will be helping others avoid infection and I will no
      longer receive notifications.
    </Text>
    <CheckBox 
      checked={confirmed}
      onPress={() => setConfirmed(!confirmed)}
    />

    <Button
      title="Confirm"
      disabled={!confirmed || !Number.isInteger(days) || days < 0}
      onPress={onReportInfected}
    />

  </View>
}

export default ReportInfected

const styles = StyleSheet.create({
  confirmContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    marginTop: 40,
  },
  input: {
    marginTop: 20,
    marginBottom: 20,
    padding: 10,
    fontSize: 17,
    color: 'black',
    borderWidth: 1,
    borderColor: '#ccc',
    borderStyle: 'solid',
    borderRadius: 3,
    width: 60,
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
})
