module.exports = {
  async getToDo(req, res) {
    const { user_id } = req.query;
    const toDo = await req.app.get("db").get_todo(user_id);
    return res.status(200).send(toDo);
  },

  async addToDo(req, res) {
    const { user_id, item } = req.body;
    const toDo = await req.app.get("db").add_todo(user_id, item);
    return res.status(200).send(toDo);
  },

  async editTodo(req, res){
    const {todo_id, todo_id, item} = req.body
    //continue here
  }
};
