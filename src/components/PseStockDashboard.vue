<template>
  <div class="container-fluid">
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-6">
      <div
        v-for="symbol in symbols"
        :key="symbol"
        class="col mt-4"
      >
        <trading-view-widget
          type="pse"
          :symbol="symbol"
        />
      </div>
    </div>
    <Settings />
  </div>
</template>

<script>
import TradingViewWidget from '@components/TradingViewAnalysisWidget';
import Settings from '@components/Settings.vue';
import DefaultConfig from '@consts/DefaultConfig';
export default {
    name: 'ForexDashboard',
    components: {
        TradingViewWidget,
        Settings,
    },
    data() {
        return {
            symbols: DefaultConfig.pse,
        }
    },
    mounted() {
        if (localStorage.config) {
            const config = JSON.parse(localStorage.config);
            this.symbols = config.pse ? config.pse.split('\n') : this.symbols;
        }
    },
}
</script>

<style scoped></style>
