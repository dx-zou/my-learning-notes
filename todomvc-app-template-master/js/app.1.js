(function (window) {
	'use strict';
	/* 
	* TODO:
	*/
	// Your starting point. Enjoy the ride!
	let vm = new Vue({
		el: '#app',
		data: {
			id: 0,			//todo的id
			name:'',		//todo的名称
			checked: true,	//每个todo的选中状态
			count: 0,		//还未完成的todo总数
			todoClass: [],	//每个li的类的集合
			todos: [],		//todo的集合
			activeTodos: [],
		},
		methods: {
			//添加todo
			addTodo () {
				if (this.name == "") return alert('写点什么吧')
				this.todos.push({id:this.id++,name:this.name,isCompleted:false})
				//添加时给每个li添加一个空的类
				this.todoClass.push('')
				this.name = ''
				//每添加一个todo，count加1
				this.count++
			},
			//删除一个todo
			delTodo (index) {
				//如果删除的是没有完成的todo，count 减 1
				if (!this.todos[index].isCompleted) {
					this.count--
				}
				this.todos.splice(index,1)
			},
			//选中一个todo
			selectTodo (index) {
				//如果点击前todo没有选中，则点击后给todo的li添加一个完成的类
				//同时count - 1 
				//否正就移除完成的类，同时count + 1
				if (!this.todos[index].isCompleted) {
					this.todoClass[index] = 'completed'
					this.count--
				} else {
					this.todoClass[index] = ''
					this.count++
				}
			},
			//全选或全不选所有的todo
			selectAllTodo () {
				//遍历所有的todo，保持与全选框的选中状态一致
				//如果选中就添加 completed类，同时count-1，否则清空类，同时count + 1
				this.todos.forEach((item,index) => {
					item.isCompleted = this.checked;
					// console.log(item.isCompleted);
					
					if (item.isCompleted) {
						this.todoClass[index] = 'completed'
						this.count--
					} else {
						this.todoClass[index] = ''
						this.count++
					}
				})
			},
			editTodo (index) {
				// console.log(index);
				
				this.todoClass[index] = 'editing'
			},
			allTodo () {

			},
			showActiveTodo () {

			},
			//控制
			show () {
				var count = 0;
				this.todos.forEach(item => {
					if (item.isCompleted) {
						count++
					}
				})
				if (count>0) {
					return true
				}
			}

		}
	})

})(window);
