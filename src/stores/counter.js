import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
	state: () => ({
		counter: 1,
	}),
	getters: {
		doubleCount: state => state.counter * 2,
		doubleCountPlusOne() {
			return this.doubleCount + 1;
		},
		tripleCount: state => state.counter * 5,
	},
	actions: {
		increment() {
			this.counter++;
		},
	},
});
