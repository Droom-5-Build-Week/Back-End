## Edit Skill

**Auth required** : YES

* [Update Skill] : `PUT /api/companies/:company_id/jobs/:job_id/skills/:skill:id`

* [Fields that can be updated] :  `name`

```json
{
  "id": 2,
  "name": "FTP",
  "job_id": 23
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
 	"message": "Error updating skill"
}
```

**Code** : `400 Bad Request`

```json
{
 	"message": "Please fill all required fields"
}
```