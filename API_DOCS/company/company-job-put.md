## Edit Job

**Auth required** : YES

* [Update Job] : `PUT /api/companies/:company_id/jobs/:job_id`

* [Fields that can be updated] :  `position_name, type, job_bio, duration, skills`

```json
{
    "position_name": "Human Directives Developer",
    "type": "Technician",
    "job_bio": "Eveniet omnis iure dolor. Laboriosam quia ut dolorem suscipit quod. Molestiae consequuntur animi provident consequatur repellendus est vitae.",
    "duration": "long-term",
    "skills": "This, that, and that too"
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
    "skills": "This, that, and that too",
    "company_id": 9
}
```

# Error Response

**Code** : `500 Server Error`

```json
{
 	"message": "Error updating job"
}
```

**Code** : `400 Server Error`

```json
{
 	"message": "Please fill all required fields"
}
```