import React from "react";
import { View, Text } from "react-native";
import MainLayout from "./MainLayout";
import { connect } from "react-redux";
import { getHoldings, getCoinMarket } from "../stores/market/marketActions";

import { useFocusEffect } from "@react-navigation/native";
import { SIZES, COLORS, FONTS, dummyData, icons } from "../constants";
import { BalanceInfo, IconTextButton } from "../components";

const Home = ({ getHoldings, getCoinMarket, myHoldings, coins }) => {
  console.log("MyHoldignssss=", myHoldings);
  useFocusEffect(
    React.useCallback(() => {
      getHoldings((holdings = dummyData.holdings));
      getCoinMarket();
    }, [])
  );
  let totalWallet = myHoldings.reduce((a, b) => a + (b.total || 0), 0);
  let valueChange = myHoldings.reduce(
    (a, b) => a + (b.holding_value_change_7d || 0),
    0
  );
  let percChange = (valueChange / (totalWallet - valueChange)) * 100;
  const renderWalletInfoSection = () => {
    return (
      <View
        style={{
          paddingHorizontal: SIZES.padding,
          borderBottomLeftRadius: 25,
          borderBottomRightRadius: 25,
          backgroundColor: COLORS.gray,
        }}
      >
        {/* Balance Info  */}
        <BalanceInfo
          tittle="Your Wallet"
          displayAmount={totalWallet}
          changePet={percChange}
          containerStyle={{
            marginTop: 50,
          }}
        />
        {/* Button */}
        <View
          style={{
            flexDirection: "row",
            marginTop: 30,
            marginBottom: -15,
            paddingHorizontal: SIZES.radius,
          }}
        >
          <IconTextButton
            label="Transafer"
            icon={icons.send}
            containerStyle={{
              flex: 1,
              height: 40,
              marginRight: SIZES.radius,
            }}
            onPress={() => console.log("Transfer")}
          />
          <IconTextButton
            label="withDraw"
            icon={icons.withdraw}
            containerStyle={{
              flex: 1,
              height: 40,
            }}
            onPress={() => console.log("withdraw")}
          />
        </View>
      </View>
    );
  };
  return (
    <MainLayout>
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.black,
        }}
      >
        {/* Header - wallet Info */}
        {renderWalletInfoSection()}
        {/* Chart */}
        {/* Top CryptoCurrency */}
      </View>
    </MainLayout>
  );
};

const mapStateToProps = (state) => {
  // console.log("state marketReducer=", state.marketReducer.myHolding);
  return {
    myHoldings: state.marketReducer.myHoldings,
    coins: state.marketReducer.coins,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getHoldings: (
      holdings,
      currency,
      coinList,
      orderBy,
      sparkline,
      priceChangePerc,
      perPage,
      page
    ) => {
      return dispatch(
        getHoldings(
          holdings,
          currency,
          coinList,
          orderBy,
          sparkline,
          priceChangePerc,
          perPage,
          page
        )
      );
    },
    getCoinMarket: (
      currency,
      coinList,
      orderBy,
      sparkline,
      priceChangePerc,
      perPage,
      page
    ) => {
      return dispatch(
        getCoinMarket(
          currency,
          coinList,
          orderBy,
          sparkline,
          priceChangePerc,
          perPage,
          page
        )
      );
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
