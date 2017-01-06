Vue.component('todo', {
  data: function () {
    return {
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
    }
  },
  template: `
    <div>
      <todo-header v-bind:todos="todos"></todo-header>

      <ol class="list-group">
        <todo-item v-for="todo in todos" v-bind:todo="todo"></todo-item>
      </ol>
    </div>
  `,
})
