const bcrypt = require("bcryptjs");
const saltRounds = 7;

module.exports = {
  async signup(req, res) {
    const { username, password } = req.body;
    const [checkUsername] = await req.app.get("db").login(username);
    if (checkUsername) return res.status(400).send("That username is taken");
    let salt = await bcrypt.genSalt(saltRounds);
    let hash = await bcrypt.hash(password, salt);
    let [user] = await req.app.get("db").signup([username, hash]);
    req.session.user = {
      user_id: user.user_id,
      username: user.username,
      loggedIn: true
    };
    res.send(req.session.user);
  },

  async login(req, res) {
    const { username, password } = req.body;
    const [checkUsername] = await req.app.get("db").login(username);
    if (!checkUsername)
      return res.status(401).send("No user with that username");
    const checkUserPassCombo = await bcrypt.compare(
      password,
      checkUsername.password
    );
    if (checkUserPassCombo) {
      req.session.user = {
        user_id: checkUsername.user_id,
        username: checkUsername.username,
        loggedIn: true
      };
      res.send(req.session.user);
    } else res.status(401).send("Incorrect Password");
  },

  async logout(req, res) {
    req.session.destroy();
    res.sendStatus(200);
  }
};
