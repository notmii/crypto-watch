<template>
  <div class="tradingview-widget-container">
    <div
      :id="symbol"
      class="tradingview"
    />
  </div>
</template>

<script>
  
export default {
  props: {
    type: {
      type: String,
      required: true,
    },
    symbol: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      container_id: 'tradingview',
    }
  },
  computed: {
    symbolPrefix() {
      let symbol = '';
      switch (this.type) {
        case 'forex':
          symbol = 'FX_IDC';
          break;

        case 'pse':
          symbol = 'PSE';
          break;
      }
      return symbol;
    }
  },
  mounted() {
    new window.TradingView.widget(
      {
        "autosize": true,
        "symbol": `${this.symbolPrefix}:${this.symbol}`,
        "interval": "240",
        "timezone": "Asia/Hong_Kong",
        "theme": "dark",
        "style": "3",
        "locale": "en",
        "toolbar_bg": "#f1f3f6",
        "enable_publishing": false,
        "hide_top_toolbar": false,
        "save_image": false,
        "container_id": this.symbol,
      }
    );
  }
}
</script>

<style scoped>
  .tradingview {
    height: 400px;
  }
</style>
