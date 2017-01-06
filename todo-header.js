Vue.component('todo-header', {
  props: ['todos'],
  template: `
    <form class="row">
      <div class="col-md-10">
        <div class="form-group">
          <input v-model="todoNewEntry" type="text" class="form-control" placeholder="add a new entry">
        </div>
      </div>

      <div class="col-md-2">
        <button type="submit" v-on:click="addTodoEntry" class="btn btn-block btn-primary mb-2">Add</button>
      </div>
    </form>
  `,
  data: function () {
    return {
      todoNewEntry: '',
    }
  },
  methods: {
    addTodoEntry: function() {
      if (!this.todoNewEntry.length) return false;
      this.todos.unshift({
        text: this.todoNewEntry,
        checked: false,
      });
      this.todoNewEntry = '';
    },
  }
})
