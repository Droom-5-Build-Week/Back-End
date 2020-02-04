## Delete Job

**Auth required** : YES

* [Delete Job] : `DELETE /api/companies/:id/jobs/:id`

# Success Response

**Code** : `200 OK`

```json
{
     "message": "job successfully deleted" 
}
```

# Error Response

**Code** : `500 SERVER ERROR`

```json
{
    "message": "Error deleting job"
}
```