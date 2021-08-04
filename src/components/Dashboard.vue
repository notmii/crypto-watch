<template>
	<div class="container">
		<!-- <fab
			:position="'bottom-right'"
			:bg-color="bgColor"
			:actions="[{ name: 'openConfigModal' }]"
			@openConfigModal="openConfigModal"
		></fab> -->
		<div class="row mt-4" v-for="(chunk, index) in coins" :key="index">
			<div class="col" v-for="coin in chunk" :key="coin">
				<coin-gecko-widget
					:coinId="coin"
					:currency="currency">
				</coin-gecko-widget>
			</div>
		</div>
	</div>
</template>

<script>
import chunk from 'lodash.chunk';
// import fab from 'vue-fab';
import CoinGeckoWidget from './CoinGeckoWidget';
export default {
	name: 'Dashboard',
	components: {
		CoinGeckoWidget,
		// fab
	},
	data() {
		return {
			currency: 'php',
			coins: []
		}
	},
	mounted() {
		const watch = [
			'binancecoin',
			'cryptoblades',
			'bitcoin',
			'smooth-love-potion',
			'axie-infinity',
			'ethereum',
			'ripple',
			'my-defi-pet'
		]
		this.coins = chunk(watch, 2);
	},
	methods: {
		openConfigModal() {
			console.log("Open Config Modal");
		}
	}
}
</script>

<style scoped>
</style>
