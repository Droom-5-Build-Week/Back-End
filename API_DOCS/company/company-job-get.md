## Get Jobs by Company Id

**Auth required** : YES

* [Show All Jobs at company] : `GET /api/companies/:company_id/jobs`

# Success Response

**Code** : `200 OK`

```json
[
  {
    "id": 8,
    "position_name": "Human Directives Developer",
    "type": "Technician",
    "job_bio": "Eveniet omnis iure dolor. Laboriosam quia ut dolorem suscipit quod. Molestiae consequuntur animi provident consequatur repellendus est vitae.",
    "duration": "long-term",
    "company_id": 9
  }
]
```

# Error Response

**Code** : `500 SERVER ERROR`

```json
{
 	"message": "Error finding jobs"
}
```
* [Show single job from company] : `GET /api/companies/:company_id/jobs/:id`

# Success Response

**Code** : `200 OK`

```json
  {
    "id": 8,
    "position_name": "Human Directives Developer",
    "type": "Technician",
    "job_bio": "Eveniet omnis iure dolor. Laboriosam quia ut dolorem suscipit quod. Molestiae consequuntur animi provident consequatur repellendus est vitae.",
    "duration": "long-term",
    "company_id": 9
  }
```

# Error Response

**Code** : `500 SERVER ERROR`

```json
{
 	"message": "Error finding job"
}
```
