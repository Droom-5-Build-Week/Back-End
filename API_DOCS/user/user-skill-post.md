## Create User Skill

**Auth required** : YES

* [Post A User Interest] : `PUT /api/:user_id/skills`

* [Fields that can be created] :  `skill_name`

```json
{
  "skill_name": "javascript",
}
```

# Success Response

**Code** : `201 Created`

```json
[
	{
	    "id": 19,
	    "skill_name": "javascript",
	    "user_id": 1
	}
]
```

# Error Response

**Code** : `500 Server Error`

```json
{
 	"specified error"
}
```