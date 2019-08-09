module.exports = {
  async getToDo(req, res) {
    const { user_id } = req.query;
    const toDo = await req.app.get("db").get_todo(user_id);
    return res.status(200).send(toDo);
  },

  async addToDo(req, res) {
    const { item } = req.query;
    const toDo = await req.app.get("db").add_todo(item);
    return res.status(200).send(toDo);
  }
};
