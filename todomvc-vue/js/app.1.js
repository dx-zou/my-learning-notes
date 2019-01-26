(function (window) {
	'use strict';
	/* 
	* TODO:
	*/
	// Your starting point. Enjoy the ride!
	let all = {
		template: '#tpl',

	}
	var vm = new Vue({
		el: '#app',
		data: {
			id: 0,
			todo: '',
			checked:false,
			todoList: [],
			count: 0,
			defaultTodo: [],
			active: false,
		},
		methods: {
			//已进入页面获取localStorage中的数据
			getlocal() {
				this.todoList = JSON.parse(localStorage.getItem('todos')) ||[]
				this.count = this.todoList.length
			},
			addTodo() {
				if(this.todo == '') return alert('What needs to be done')
				this.todoList.unshift({id:this.id++,todo:this.todo,checked:false,editing:false})
				localStorage.setItem('todos',JSON.stringify(this.todoList))
				this.count++
				this.todo = ''
			},
			//删除一个todo
			delTodo(item,index) {
				this.todoList.splice(index,1)
				//如果删除的是没有选中的todo，count--
				if (!item.checked) this.count--
				localStorage.setItem('todos',JSON.stringify(this.todoList))
			},
			//选中一个todo
			selectTodo(item) {
				item.checked = !item.checked
				if (item.checked) {
					this.count--
				} else {
					this.count++
				}
			},
			selectALlTodo() {
				this.todoList.forEach((item,index) => {
					if (item.checked != !this.checked) {
						if (item.checked) {
							this.count++
						} else {
							this.count--
						}
					}
					item.checked = !this.checked
				})
			},
			delCompleted() {
				this.todoList = this.todoList.filter(item => !item.checked)
				localStorage.setItem('todos',JSON.stringify(this.todoList))
			},
			showActive() {
				this.active = true
				this.defaultTodo = this.todoList.filter(item => !item.checked)
			},
			showCompleted() {
				this.active = true
				this.defaultTodo = this.todoList.filter(item => item.checked)
			},
			showClear() {
				var length = this.todoList.filter(item => item.checked).length
				if (length>0) return true
			},
		},
		watch: {
			'count':function () {
				if (this.count==0) {
					this.checked = true
				} else {
					this.checked = false
				}
			}
		},
		created() {
			this.getlocal()
		}
	})
})(window);
