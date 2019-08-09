module.exports = {
    async addToDo(req, res) {
        const { item } = req.query
        const toDo = await req.app.get('db').add_todo(item)
        return res.status(200).send(toDo)
    },

    async getToDo(req, res) {
        const toDo = await req.app.get('db').get_todo();
        return res.status(200).send(toDo);
    }
}