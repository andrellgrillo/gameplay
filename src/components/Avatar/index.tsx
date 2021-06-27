import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Image, View } from 'react-native';
import { theme } from '../../global/styles/theme';

import { styles } from './style'

type Props={
  urlImage: string
}

export function Avatar({urlImage}:Props){
  const { secundary80, secundary100 } = theme.colors
  return(
    <LinearGradient style={styles.container} colors = {[ secundary80, secundary100]}>
      <Image source={{ uri: urlImage}} style={styles.avatar} />
    </LinearGradient>
  )
}