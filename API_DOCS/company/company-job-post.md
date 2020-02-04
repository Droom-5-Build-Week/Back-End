## Post Job

**Auth required** : YES

* [Post Job] : `POST /api/companies/:company_id/jobs`

* [Fields required] :  `position_name, type, job_bio, duration, company_id`

```json
{
    "position_name": "Human Directives Developer",
    "type": "Technician",
    "job_bio": "Eveniet omnis iure dolor. Laboriosam quia ut dolorem suscipit quod. Molestiae consequuntur animi provident consequatur repellendus est vitae.",
    "duration": "long-term",
}
```

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

**Code** : `500 Server Error`

```json
{
 	"message": "Error posting job"
}
```