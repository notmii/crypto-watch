<template>
  <div class="container-fluid">
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
      <div
        v-for="symbol in symbols"
        :key="symbol"
        class="col mt-4"
      >
        <trading-view-widget
          type="forex"
          :symbol="symbol"
        />
      </div>
    </div>
    <Settings />
  </div>
</template>

<script>
import TradingViewWidget from '@components/TradingViewWidget';
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
			symbols: DefaultConfig.forex,
		}
	},
	mounted() {
		if (localStorage.config) {
			const config = JSON.parse(localStorage.config);
			this.symbols = config.forex ? config.forex.split('\n') : this.symbols;
		}
	},
}
</script>

<style scoped>
</style>
