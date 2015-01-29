module.exports= chronon

function chronon(state){
	var states, i
	if(state !== undefined){
		states= [state]
		i= 0
	}else{
		states= []
		i= -1
	}
	Object.defineProperty(this, 'state', {
		enumerable: true,
		get: function(){
			return states[i]
		},
		set: function(state){
			states.push(state)
			++i
		})
	})
	Object.defineProperty(this, 'states', {
		enumerable: true,
		get: function(){
			return states
		}
	}
}
