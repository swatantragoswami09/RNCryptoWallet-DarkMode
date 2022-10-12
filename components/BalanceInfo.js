import { StyleSheet, Text, View, Image } from "react-native";
import { SIZES, COLORS, FONTS, icons } from "../constants";
import React from "react";

const BalanceInfo = ({ tittle, displayAmount, changePet, containerStyle }) => {
  return (
    <View>
      {/* Title */}

      <Text style={{ ...FONTS.h3, color: COLORS.lightGray3 }}>{tittle}</Text>
      {/* figures */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "flex-end",
        }}
      >
        <Text style={{ ...FONTS.h3, color: COLORS.lightGray3 }}>$</Text>
        <Text
          style={{ marginLeft: SIZES.base, ...FONTS.h2, color: COLORS.white }}
        >
          {displayAmount.toLocaleString()}
        </Text>
        <Text style={{ color: COLORS.lightGray3, ...FONTS.h3 }}> USD</Text>
      </View>
      {/* Change percentage */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "flex-end",
        }}
      >
        {changePet != 0 && (
          <Image
            source={icons.upArrow}
            style={{
              width: 10,
              height: 10,
              alignSelf: "center",
              tintColor: changePet > 0 ? COLORS.lightGreen : COLORS.red,
              transform:
                changePet > 0 ? [{ rotate: "45deg" }] : [{ rotate: "125deg" }],
            }}
          />
        )}
        <Text
          style={{
            marginLeft: SIZES.base,
            alignSelf: "flex-end",
            color:
              changePet == 0
                ? COLORS.lightGray3
                : changePet > 0
                ? COLORS.lightGreen
                : COLORS.red,
            ...FONTS.h4,
          }}
        >
          {changePet.toFixed(2)} %
        </Text>
        <Text
          style={{
            marginLeft: SIZES.radius,
            alignSelf: "flex-end",
            color: COLORS.lightGray3,
            ...FONTS.h5,
          }}
        >
          7d change
        </Text>
      </View>
    </View>
  );
};

export default BalanceInfo;

const styles = StyleSheet.create({});
