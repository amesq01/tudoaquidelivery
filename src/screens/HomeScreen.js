/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable keyword-spacing */

import React, {useState} from 'react';

import {Icon} from 'react-native-elements';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {HomeHeader} from '../components/HomeHeader';
import {colors, parameters} from '../global/styles';

export function HomeScreen() {
  const [delivery, setDelivery] = useState(true);

  return (
    <View style={styles.container}>
      <HomeHeader />
      <ScrollView
        stickyHeaderIndices={[0]}
        showsVerticalScrollIndicator={false}
        style={{marginHorizontal: 20}}>
        <View>
          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-evenly',
            }}>
            <TouchableOpacity
              onPress={() => {
                setDelivery(true);
              }}>
              <View
                style={{
                  ...styles.deliveryButton,
                  backgroundColor: delivery ? colors.buttons : colors.grey4,
                }}>
                <Text style={styles.deliveryText}>Delivery</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setDelivery(false);
              }}>
              <View
                style={{
                  ...styles.deliveryButton,
                  backgroundColor: delivery ? colors.grey4 : colors.buttons,
                }}>
                <Text style={styles.deliveryText}>Retirar</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Inicio da Configuração da parte que tem o nome da rua */}
        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
            justifyContent: 'space-between',
            alignItems: 'center',
            flex: 1,
          }}>
          {/* View PRINCIPAL - CSS ACIMA */}
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: colors.grey5,
              alignItems: 'center',
              justifyContent: 'space-between',
              borderRadius: 15,
              flex: 1,
              paddingHorizontal: 7,
              marginRight: 5,
            }}>
            {/* View Cinza que engloba a View do Icon e Rua, bem como a View do botao ON -  CSS ACIMA */}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                flex: 1,
                justifyContent: 'flex-start',
              }}>
              <Icon
                type="material-community"
                name="map-marker"
                color={colors.grey1}
                size={26}
              />
              <Text style={{marginLeft: 5, flex: 1}} numberOfLines={1}>
                200, Raimundo Raposo Fortes
              </Text>
            </View>
            {/* css da View que engloba o primeiro icone e o nome da rua - css acima */}

            <View
              style={{
                flexDirection: 'row',
                marginLeft: 10,
                marginVertical: 7,
                alignItems: 'center',
                backgroundColor: 'white',
                justifyContent: 'center',
                paddingHorizontal: 10,
                borderRadius: 8,
              }}>
              <Icon
                type="material-community"
                name="clock-time-four"
                color={colors.grey1}
                size={24}
              />
              <Text style={{marginLeft: 5}}>ON</Text>
            </View>
          </View>
          <View
            style={{
              marginLeft: 5,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon
              type="material-community"
              name="tune"
              color={colors.grey1}
              size={28}
              style={{}}
            />
          </View>
        </View>
        {/* Final da Configuração da parte que tem o nome da rua */}

        <View
          style={{
            marginTop: 20,
            //backgroundColor: colors.grey5,
            paddingVertical: 5,
          }}>
          <Text style={styles.categoryText}>Categorias</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  deliveryButton: {
    paddingHorizontal: 20,
    borderRadius: 15,
    paddingVertical: 5,
  },
  deliveryText: {
    marginLeft: 5,
    fontSize: 15,
    fontWeight: 'bold',
  },
  categoryText: {
    color: colors.grey1,
    fontSize: 22,
    fontWeight: 'bold',
  },
});
