## Get Skills By Job Id

**Auth required** : YES

* [Show Job Skills] : `GET /api/companies/:company_id/jobs/:job_id/skills`

# Success Response

**Code** : `200 OK`

```json
[
  {
    "id": 2,
    "name": "FTP",
    "job_id": 23
  }
]
```

# Error Response

**Code** : `500 Server Error`

```json
{
 	"message": "Could not complete task"
}
```

**Code** : `400 Bad Request`

```json
{
 	"message": "There are no skills here"
}
```