<template>
  <coingecko-coin-price-chart-widget :currency="currency" :coin-id="coinId" locale="en" height="300">
  </coingecko-coin-price-chart-widget>
</template>

<script>
export default {
  name: "CoinGeckoWidget",
  props: {
    coinId: {
      type: String,
      required: true,
    },
    currency: {
      type: String,
      default: () => 'php',
    }
  }
}
</script>
