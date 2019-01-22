(function (window) {
	'use strict';
	/* 
	* TODO:
	*/
	// Your starting point. Enjoy the ride!
	Vue.directive('focus',{
		bind: function (el) {
			el.focus()
		}
	})
	let vm = new Vue({
		el: '#app',
		data: {
			id: 0,			//todo的id
			name:'',		//todo的名称
			checked: false,	//每个todo的选中状态
			count: 0,		//还未完成的todo总数
			todoClass: [],	//每个li的类的集合
			defaultTodo:[],	//存放active 或者 iscompleted
			todos: [],		//todo的集合 
			select: false,	// 是否选择了未完成或已完成按钮
			length:0	//localStaorage中数组的长度
		},
		methods: {
			getLocal () {
				if (localStorage.getItem('todos'&&'todoClass')) {
					this.todos = JSON.parse(localStorage.getItem('todos'))
					this.todoClass = JSON.parse(localStorage.getItem('todoClass'))
					this.length = this.todos.length-1
					// console.log(this.length);
				}
			},
 			//添加todo
			addTodo () {
				if (this.name == "") return alert('What needs to be done ?')
				this.todos.push({id: this.length++,name:this.name,isCompleted:false})
				// localStorage.setItem('todos',JSON.stringify(this.todos))
				//添加时给每个li添加一个类
				this.todoClass.push({editing:'',completed:'',todo:'todo'})
				// localStorage.setItem('todoClass',JSON.stringify(this.todoClass))
				//每添加一次清空输入框
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
					this.todoClass[index].completed = 'completed'
					this.count--
				} else {
					this.todoClass[index].completed = ''
					this.count++
				}
			},
			//全选或全不选所有的todo
			selectAllTodo () {
				console.log(this.checked);
				//遍历所有的todo，保持与全选框的选中状态一致
				//如果选中就添加 completed类，同时count-1，否则清空类，同时count + 1
				this.todos.forEach((item,index) => {
					item.isCompleted = !this.checked;
					if (item.isCompleted) {
						this.todoClass[index].completed = 'completed'
						this.count--
					} else {
						this.todoClass[index].completed = ''
						this.count++
					}
				})
				console.log(this.checked);
				
			},
			//编辑todo
			editTodo (index) {
				this.todoClass[index].editing = 'editing'
			},
			//只显示已完成的todo
			showCompleted () {
				this.select = true;
				this.defaultTodo = this.todos.filter(item => item.isCompleted)
			},
			//只显示没有完成的todo
			showActive () {
				this.select = true;
				this.defaultTodo = this.todos.filter(item => !item.isCompleted)
			},
 			//控制 clear 按钮的显示隐藏
			showClear () {
				var countCom= 0;
				this.todos.forEach(item => {
					if (item.isCompleted) {
						countCom++
					}
				})
				if (countCom > 0) {
					return true
				}
			}, 
			//清除已经完成的todo
			clearCompleted () {
				this.todos = this.todos.filter(item => !item.isCompleted)
			},
			//编辑失去焦点的事件
			lostBlur (index) {
				this.todoClass[index].editing = ''
			},
		},
		created () {
			// this.getLocal();
		}
	})

})(window);
