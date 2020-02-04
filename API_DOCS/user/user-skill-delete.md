## Delete User Skill

**Auth required** : YES

* [Delete A User's certain skill] : `DELETE /:user_id/skills/:id`

# Success Response

**Code** : `200 OK`

```json
{
    "message": "skill successfully deleted"
}
```

# Error Response

**Code** : `404 Not Found`

```json
{
    "message": "There are no skills here"
}
```