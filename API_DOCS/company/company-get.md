## Read All Companies

**Auth required** : YES

* [GET All Companies] : `GET /api/companies/`

# Success Response

**Code** : `201 CREATED`

You will get a lot of users

```json
[
    {
        "id": 1,
        "name": "King, Hartmann and Stracke",
        "location": "Laurianeland",
        "email": "Trever.Jones@example.net",
        "jobs": [
            {
                "id": 8,
                "position_name": "Human Directives Developer",
                "type": "Technician",
                "job_bio": "Eveniet omnis iure dolor. Laboriosam quia ut dolorem suscipit quod. Molestiae consequuntur animi provident consequatur repellendus est vitae.",
                "duration": "long-term",
                "skills": "This, that, and that too"
            }
        ]
    },
    {
        "id": 2,
        "name": "O'Conner, Brakus and Goyette",
        "location": "DuBuquemouth",
        "email": "Thea42@example.net",
        "jobs": [
            {
               "id": 8,
                "position_name": "Human Directives Developer",
                "type": "Technician",
                "job_bio": "Eveniet omnis iure dolor. Laboriosam quia ut dolorem suscipit quod. Molestiae consequuntur animi provident consequatur repellendus est vitae.",
                "duration": "long-term",
                "skills": "This, that, and that too"
            }
        ]
    }
]
```

# Error Response

```json
{
 	"message": "could not find user"
}
```


**Auth required** : YES

* [GET A Company] : `GET /api/companies/:id`

## Success Response

**Code** : `200 OK`

```json
{
    "id": 1,
    "name": "King, Hartmann and Stracke",
    "location": "Laurianeland",
    "email": "Trever.Jones@example.net",
    "jobs": [
        {
            "id": 8,
            "position_name": "Human Directives Developer",
            "type": "Technician",
            "job_bio": "Eveniet omnis iure dolor. Laboriosam quia ut dolorem suscipit quod. Molestiae consequuntur animi provident consequatur repellendus est vitae.",
            "duration": "long-term",
            "skills": "This, that, and that too"
        }
    ]
} 
```


## Error Response

**Code** : `400 Bad Request`

```json
{
 	"message": "could not find company"
}
```