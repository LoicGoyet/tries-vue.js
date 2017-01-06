Vue.component('todo-item', {
  props: ['todo'],
  template: `
    <li v-on:click="toggleItemStatus(todo)" v-bind:class="{ 'todo-done': todo.checked }" class="list-group-item">
      <input class="mr-1" type="checkbox" v-bind:checked="todo.checked">
      {{ todo.text }}
    </li>
  `,
  methods: {
    toggleItemStatus: function(todo) {
      return todo.checked = !todo.checked;
    }
  }
})
