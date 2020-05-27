# Back-End
## How-To Base URL: https://secretfamily.herokuapp.com/
---
## Endpoint Summary Table
---
|Type     |Endpoint                         |Description        |Auth|
|:-------:|:-----------------------:|:----------------------:|:--:|
|POST     |/api/auth/register               |Register User           |No  |
|POST     |/api/users/login                 |Login User              |No  |
|GET      |/api/users                       |get all users           |Yes |
|GET      |/api/users/:id                   |get users by id         |Yes |
|PUT      |/api/users/:id                   |edit users by id        |Yes |
|DELETE   |/api/users/:id                   |delete users by id      |Yes |
|GET      |/api/recipes                     |get all recipes         |Yes |
|GET      |/api/recipes/category/:category  |get recipes by category |Yes |
|GET      |/api/recipes/:id                 |get recipes by id       |Yes |
|PUT      |/api/recipes/:id                 |edit recipe             |Yes |
|DELETE   |/api/recipes/:id                 |remove recipe           |Yes |
|POST     |/api/recipe                      |add new recipe          |Yes |


## Token must be in the header under Authorization for Auth endpoints
## User must have allowPost:true to edit or post how-to
---
## POST Register
### Endpoint /users/register
```
    {
        "username": "string",       required
        "password": "string",       required
        "location": "string",       required
        "name": "string"            required
    }
```
#### Returns
```
    {
        "id": "user id",
        "username": "registered user name",
        "password": "authenitcation token",
        "location": "users location",
        "name": "users actual name"
    }
  
```
---
## POST Login
### Endpoint /users/login
```
    {
        "username": "user's registered user name",     required
        "password": "user's password"                  required
    }
```
#### Returns
```
    {
        "id": "user id",
        "message": "Welcome to the API",
        "token": "authentication token",
    }
```
---
## GET all Recipes's
### Endpoint /api/recipes
#### Returns Array of All Recipes
```
    [
        {
            "id": integer,
            "title": "string",      
            "source": "string",                  
            "instructions": "string",                      
            "ingredients": "string",
            "category": "string",                       
            "img_url": "string",
            "user_id": integer
        }
    ]
```
---
## GET Recipes by Category
### Endpoint /api/recipes/category/:category
#### Returns Recipes in a certain category
```
     {
        "recipe": [
        {
            "id": integer,
            "title": "string",   
            "source:" "string",                     
            "instructions": "string",                      
            "ingredients": "string",
            "category": "string",                       
            "img_url": "string",
            "user_id": integer
        }
    ]
    }
```
---
## GET Recipes by id
### Endpoint /api/recipes/:i
#### Returns Recipe by give Id
```
   {
       "recipe":
        {
            "id": integer,
            "title": "string",   
            "source": "string",                     
            "instructions": "string",                      
            "ingredients": "string",
            "category": "string",                       
            "img_url": "string",
            "user_id": integer
        }
   }
```
---
## POST add a new Recipe
### Endpoint /api/recipes
```
    {
        "title": "string",              required
        "source": "string",             required            
        "instructions": "string",       required               
        "ingredients": "string",        required
        "category": "string",           required    
        "img_url": "string",
        "user_id": integer              required
        }
```
#### Returns newly created Recipe 
```
    {
        "id": integer,
        "title": "string",   
        "source": "string",                     
        "instructions": "string",                      
        "ingredients": "string",
        "category": "string",                       
        "img_url": "string",
        "user_id": integer
    }
```
---
## PUT Edit existing Recipe by id
### Endpoint /api/recipe/:id
```
     {
        "title": "string",              edit any of these fields
        "source": "string",                     
        "instructions": "string",                      
        "ingredients": "string",
        "category": "string",                       
        "img_url": "string",
        "user_id": integer
    }
```
#### Returns Edited Recipe
```
        {
        "id": integer,
        "title": "string",
        "source": "string",                     
        "instructions": "string",                      
        "ingredients": "string",
        "category": "string",                       
        "img_url": "string",
        "user_id": integer
    }
```
---
## DELETE Delete Recipe with given id
### Endpoint /api/recipes/:id
```
    {
        "response": 1
    }
```
---
## GET all Users
### Endpoint /api/users
#### Returns Array of All Users
```
    [
       {
        "id": integer,
        "username": "user's username",
        "location: "user location",
        "name": "user's real name"
        },
    ]
```
---
## GET Users by Id
### Endpoint /api/users/:id
#### Returns User by Id
```
     [
       {
        "id": integer,
        "username": "user's username",
        "location: "user location",
        "name": "user's real name"
        },
    ]
```
---
## DELETE Delete User with given id
### Endpoint /api/users/:id
```
    {
        "response": 1
    }
```
---
## PUT Edit existing User by id
### Endpoint /api/user/:id
```
    {
        "username": "user's username",
        "location: "user location",
        "name": "user's real name"
        }
```
#### Returns Edited User
```
       {
        "username": "user's username",
        "location: "user location",
        "name": "user's real name"
        }
```
---

Secret Family Recipes Cookbook
NAME
Secret Family Recipes Cookbook
PITCH
Anyone can go out and buy a cookbook these days, but I want a place to store all my secret family recipes, handed down from generation to generation. The little cards my grandma wrote the recipes on in her beautiful cursive are getting lost or are hard to read. I need somewhere secure to keep my recipes with me at all times!
MVP
1. Onboarding process for a new user
2. Ability to enter a new recipe, including title, source (ie grandma ethel), ingredients, instructions, and category (dinner, chicken, dessert, pasta, etc.) and edit or delete it later.
3. Homepage to view all entered recipes.
4. Ability to search for recipes by title or tagged categories
STRETCH
1. Ability to upload a picture of the original recipe along with the recipe entry.
2. By default all recipes uploaded can only be viewed by the person logged in, a stretch goal would add the ability to invite someone with the link to view the recipe.