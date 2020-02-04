## Delete skill

**Auth required** : YES

* [Delete skill] : `DELETE /api/companies/:id/jobs/:id/skills/:skill_id`

# Success Response

**Code** : `200 OK`

```json
{
     "message": "skill successfully deleted" 
}
```

# Error Response

**Code** : `500 SERVER ERROR`

```json
{
    "message": "Error deleting skill"
}
```

**Code** : `400 Bad Request`

```json
{
    "message": "There is no skill here"
}
```