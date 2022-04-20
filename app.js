const app = new Vue({
    el: '#app',
    data:{
        newTodo: '',
        todoList: [
            'Fare la spesa',
            'Comprare il pane',
            'Scendere il cane'
        ]
    },
    methods: {
        addTodo: function() {
            if( this.newTodo === '' ) {
                return
            }
            this.todoList.push ( this.newTodo );
            this.newTodo = '';
        },
        deleteTodo(i) {
            this.todoList.splice(i,1);
        }
    },
})