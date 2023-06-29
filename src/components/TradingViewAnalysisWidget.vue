<template>
  <div class="tradingview-analysis-widget-container">
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
    const container = document.querySelector(`#${this.symbol}`)
    const scriptTag = document.createElement('script')
    scriptTag.setAttribute('src', 'https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js')
    scriptTag.setAttribute('async', '')
    scriptTag.textContent = `
      {
        "interval": "1W",
        "width": 400,
        "isTransparent": false,
        "height": 400,
        "symbol": "${this.symbolPrefix}:${this.symbol}",
        "showIntervalTabs": true,
        "locale": "en",
        "colorTheme": "dark"
      }
    `;
    container.appendChild(scriptTag);
  }
}
</script>

<style scoped>
  .tradingview {
    height: 400px;
  }
  .tradingview > div {
      margin: 0px;
    }
</style>
