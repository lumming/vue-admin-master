const state = {
	count:0
}

const mutations = {
	add(state,n){
		state.count += n;
	},
	reduce(state){
		state.count--;
	}
}

const getters = {
	count100:function(state){
		return state.count += 100;
	}
}

const actions = {
	addAction(context){ // 上下文对象，理解为store本身
		context.commit('add',10)
	},
	reduceAction({commit}){ //把commit对象传递
		commit('reduce')
	}
}

export default {
	state,mutations,getters,actions
}
