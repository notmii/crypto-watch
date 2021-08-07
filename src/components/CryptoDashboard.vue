<template>
	<div class="container">
		Crypto
		<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
			<div class="col mt-4" v-for="coin in coins" :key="coin">
				<coin-gecko-widget
					:coinId="coin"
					:currency="currency">
				</coin-gecko-widget>
			</div>
		</div>
		<Settings/>
	</div>
</template>

<script>
import CoinGeckoWidget from '@components/CoinGeckoWidget';
import Settings from '@components/Settings.vue';
import DefaultConfig from '@consts/DefaultConfig';
export default {
	name: 'CryptoDashboard',
	components: {
		CoinGeckoWidget,
		Settings
	},
	data() {
		return {
			currency: DefaultConfig.currency,
			coins: DefaultConfig.coins,
		}
	},
	mounted() {
		if (localStorage.config) {
			const config = JSON.parse(localStorage.config);
			this.coins = config.coins.split('\n');
			this.currency = config.currency;
		}
	},
}
</script>

<style scoped>
</style>
