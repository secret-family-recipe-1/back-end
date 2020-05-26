const express = require('express');
const router = express.Router();

const Recipes = require("./recipesModel");

router.get('/', (req, res) => {
    Recipes.getAll()
    .then(recipe => {
        res.status(200).json(recipe);
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ errorMessage: "Could not retrieve list of Recipes"});
    })
})

router.get("/category/:category", (req, res) => {
    const { category } = req.params;
  
    Recipes.getByCategory({ category })
      .then((recipe) => {
        if (recipe.length > 0) {
          res.status(200).json( recipe );
        } else {
          res.status(400).json({ errorMessage: "No recipe found" });
        }
      })
      .catch((err) => {
        res.status(500).json({ errorMessage: "error" });
      });
  });

router.get("/:id", (req, res) => {
  const { id } = req.params;

  Recipes.getById(id)
    .then((recipe) => {
      if(recipe) {
        res.status(200).json(recipe)
      } else {
        res.status(400).json({ errorMessage: "No recipe found" });
      }
    })
    .catch((err) => {
      res.status(500).json({ errorMessage: "Error retreiving recipe" });
    });
  
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const body = req.body;

  Recipes.update(id, body)
  .then(recipe => {
    res.status(200).json(recipe);
  })
  .catch(err => {
    res.status(500).json({ errorMessage: "The recipe could not be modified "});
  })
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  
  Recipes.remove(id)
  .then(recipe => {
    res.status(200).json(recipe);
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({ errorMessage: "The recipe could not be deleted "});
  })
})

router.post("/", (req, res) => {
  Recipes.insert(req.body)
  .then(recipe => {
    res.status(200).json(recipe);
  })
  .catch(err => {
    res.status(500).json({ errorMessage: "Error adding recipe "});
  })
})

  module.exports = router;