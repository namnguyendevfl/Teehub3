const knex = require("../db/connection");

const create = (newUser) => {
    return knex("users").insert(newUser).select("*");

}
const list = () => knex("users").select("*")

module.exports = {
    create,
    list
}