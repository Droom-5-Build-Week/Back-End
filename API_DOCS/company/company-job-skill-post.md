## Post Skill

**Auth required** : YES

* [Post Skill] : `POST /api/companies/:company_id/jobs/:job_id/skills`

* [Fields required] :  `name, job_id`

```json
{
  "name": "FTP",
}
```

# Success Response

**Code** : `200 OK`

```json
{
  "id": 2,
  "name": "FTP",
  "job_id": 23
}
```

# Error Response

**Code** : `500 Server Error`

```json
{
 	"message": "Error posting skill"
}
```

**Code** : `400 Bad Request`

```json
{
 	"message": "Please fill all required fields"
}
```