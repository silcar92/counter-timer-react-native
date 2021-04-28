import React, {useEffect, useState} from 'react';
import {Text, View} from "react-native";
import PropTypes from 'prop-types'


/**
 * Default configuration.
 */
const DEFAULT = {
  time:5,
  timeoutFunction:() => console.log("Timeout Reached"),
  containerStyle:{},
  textStyle:{}
};

export default function CounterTimer(props = {}) {
  const {time, timeoutFunction, containerStyle, textStyle} = Object.assign(DEFAULT,props);
  const [remainingTime, setRemainingTime] = useState(time);

  useEffect(() => {
    setTimeout(
        ()=> {
          if (remainingTime > 0){
            setRemainingTime(remainingTime-1);
            if (remainingTime === 0){
              timeoutFunction(true);
            }
          }
        }, 1000
    )
  }, [remainingTime] )
  return <View style={[containerStyle]}><Text style={[textStyle]}>{remainingTime}</Text></View>;
}

CounterTimer.propTypes = {
  time : PropTypes.number.isRequired,
  timeoutFunction : PropTypes.func,
  containerStyle : PropTypes.object,
  textStyle : PropTypes.object,
}
