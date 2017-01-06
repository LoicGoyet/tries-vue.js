var app = new Vue({
  el: '#app',
  data: {
    heading: {
      text: 'Loïc tries vue.js',
      title: 'You loaded this page on ' + new Date(),
    },
    todoNewEntry: '',
    todos: [
      {
        text: 'Learn JavaScript',
        checked: false,
      },
      {
        text: 'Learn Vue',
        checked: false,
      },
      {
        text: 'Build something awesome',
        checked: false,
      }
    ]
  },
  methods: {
    reverseHeading: function() {
      this.heading.text = this.heading.text.split(' ').reverse().join(' ');
    },
    addTodoEntry: function() {
      if (!this.todoNewEntry.length) return false;

      this.todos.push({
        text: this.todoNewEntry,
        checked: false,
      });
      this.todoNewEntry = '';
    },
    toggleTodoEntryCheck: function(todo) {
      return todo.checked = !todo.checked;
    }
  }
})
