const { User } = require('../models');

const userData = [
    {
        username: "goeska_dodu",
        twitter: "goeska",
        github: "goeska",
        email: "goeska_c@gmail.com",
        password: "p@ssword1"
    },
    {
        username: "lucas_m",
        twitter: "lucasm",
        github: "lucas",
        email: "lucas_m@gmail.com",
        password: "p@ssword2"
    },
    {
        username: "babuet_k",
        twitter: "babuet",
        github: "babuet",
        email: "babuet_k@gmail.com",
        password: "p@ssword3"
    },
    {
        username: "shaku_o",
        twitter: "shaku",
        github: "shakuo",
        email: "shak_o@gmail.com",
        password: "p@ssword4"
    },
    {
        username: "mariam_b",
        twitter: "mariam64",
        github: "mariam64",
        email: "mariam_b@gmail.com",
        password: "p@ssword5"
    },
    {
        username: "dockla",
        twitter: "dockla_l",
        github: "docklal",
        email: "dockla_l@gmail.com",
        password: "p@ssword6"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;