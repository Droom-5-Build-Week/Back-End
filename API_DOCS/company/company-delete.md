## Delete company

**Auth required** : YES

* [Delete A Company] : `DELETE /api/companies/:id`

# Success Response

**Code** : `200 OK`

```json
{
     "message": "company successfully deleted" 
}
```

# Error Response

**Code** : `500 SERVER ERROR`

```json
{
    "message": "Error deleting company"
}
```