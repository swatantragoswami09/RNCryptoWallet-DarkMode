import { StyleSheet, Text, View } from "react-native";
import {
  ChartDot,
  ChartPath,
  ChartPathProvider,
  ChartXLabel,
  ChartYLabel,
  monotoneCubicInterpolation,
} from "@rainbow-me/animated-charts";
import React from "react";
import { SIZES, COLORS, FONTS } from "../constants";
import moment from "moment";

const Chat = ({ containerStyles, chartPrices }) => {
  // Points
  let startUnixTimestamp = moment().subtract(7, "day").unix();
  let data = chartPrices
    ? chartPrices?.map((item, index) => {
        return {
          x: startUnixTimestamp + (index + 1) * 3600,
          y: item,
        };
      })
    : [];
  let points = monotoneCubicInterpolation({ data, range: 40 });
  return (
    <View>
      <Text style={{ color: COLORS.white }}>
        {/* Chart */}
        {data.length > 0 && (
          <ChartPathProvider
            data={{
              points,
              smoothingsStrategy: "bezier",
            }}
          >
            <ChartPath
              height={150}
              width={SIZES.width}
              stroke={COLORS.lightGreen}
              strokeWidth={2}
            />
          </ChartPathProvider>
        )}
      </Text>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({});
