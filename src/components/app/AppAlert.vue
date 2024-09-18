<template>
	<!--
	<Transition name="slide">
		<div v-if="show" class="app-alert alert" :class="typeStyle" role="alert">
			{{ message }}
		</div>
	</Transition>
-->
	<!--	message ,type 으로 구조 분해 할당을 한것이다 item.message , item.type을 써도 됨.-->

	<div class="app-alert">
		<transition-group name="slide">
			<div
				v-for="({ message, type }, index) in items"
				:key="index"
				class="alert"
				:class="typeStyle(type)"
				role="alert"
			>
				{{ message }}
			</div>
		</transition-group>
	</div>
</template>

<script setup>
// 누른만큼 팝업이 뜨기 위해서는 props에 건수를 받아와야 한다.
defineProps({
	items: Array,
});

// type 스타일을 변수로 받기위해서는 compute 사용 불가 메소드로 사용 해야함.
const typeStyle = type => (type === 'error' ? 'alert-danger' : 'alert-success');

// import { computed } from 'vue';
// const props = defineProps({
// 	show: {
// 		type: Boolean,
// 		default: false,
// 	},
// 	message: {
// 		type: String,
// 		required: true,
// 	},
// 	type: {
// 		type: String,
// 		default: 'error',
// 		validator: value => ['success', 'error'].includes(value),
// 	},
// });
// const typeStyle = computed(() =>
// 	props.type === 'error' ? 'alert-danger' : 'alert-success',
// );
</script>

<style scoped>
.app-alert {
	position: fixed;
	top: 10px;
	right: 10px;
}

.slide-enter-from,
.slide-leave-to {
	opacity: 0;
	transform: translateY(-30px);
}

.slide-enter-active,
.slide-leave-active {
	transition: all 0.5s ease;
}

.slide-enter-to,
.slide-leave-from {
	opacity: 1;
	transform: translateY(0px);
}
</style>
