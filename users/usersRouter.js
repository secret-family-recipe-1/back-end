const express = require('express');
const router = express.Router();

const Users = require("./usersModel");

router.get('/', (req, res) => {
    Users.find()
    .then(user => {
        res.status(200).json(user);
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ errorMessage: "Could not retrieve list of Users"});
    })
})


router.get("/:id", (req, res) => {
  const id  = req.params.id;

  Users.findById(id)
    .then((user) => {
      if(user) {
        res.status(200).json(user)
      } else {
        res.status(400).json({ errorMessage: "No user found" });
      }
    })
    .catch((err) => {
      res.status(500).json({ errorMessage: "Error retreiving user" });
    });
  
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const body = req.body;

  Users.update(id, body)
  .then(user => {
    res.status(200).json(user);
  })
  .catch(err => {
    res.status(500).json({ errorMessage: "The user could not be modified "});
  })
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  
  Users.remove(id)
  .then(user => {
    res.status(200).json(user);
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({ errorMessage: "The user could not be deleted "});
  })
})

// router.post("/", (req, res) => {
//   Users.add(req.body)
//   .then(user => {
//     res.status(200).json(user);
//   })
//   .catch(err => {
//     res.status(500).json({ errorMessage: "Error adding user "});
//   })
// })

  module.exports = router;