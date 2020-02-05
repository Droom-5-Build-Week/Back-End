## Read All Users

**Auth required** : YES

* [GET All Users] : `GET /api/users/`

# Success Response

**Code** : `201 CREATED`

You will get a lot of users

```json
[
    {
        "id": 2,
        "name": "Geovanny Simonis IV",
        "email": "Judd81@gmail.com",
        "location": "South Alhaven",
        "skills": [
            "SMTP"
        ],
        "interests": [
            "haptic",
            "auxiliary"
        ],
        "experiences": [
            {
                "job_title": "Strategist",
                "company_name": "Osinski, Towne and Emmerich"
            },
            {
                "job_title": "Supervisor",
                "company_name": "Hauck - Brekke"
            }
        ]
    },
    {
        "id": 3,
        "name": "Torrance Pouros",
        "email": "Noe_Wilderman15@gmail.com",
        "location": "Stoltenbergberg",
        "skills": [
            "IB",
            "SDD"
        ],
        "interests": [
            "redundant",
            "cross-platform"
        ],
        "experiences": [
            {
                "job_title": "Coordinator",
                "company_name": "Glover, Fadel and Jaskolski"
            },
            {
                "job_title": "Planner",
                "company_name": "Konopelski - O'Reilly"
            },
            {
                "job_title": "Architect",
                "company_name": "Spinka LLC"
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

* [GET A User] : `GET /api/users/:id`

## Success Response

**Code** : `200 OK`

```json
{
    "name": "Ruthie Farrell",
    "email": "Shannon_Dickens80@yahoo.com",
    "location": "Rathshire",
    "skills": [
        "RAM"
    ],
    "interests": [
        "multi-byte",
        "solid state"
    ],
    "experiences": [
        {
            "job_title": "Director",
            "company_name": "Dietrich - Yundt"
        },
        {
            "job_title": "Supervisor",
            "company_name": "Roberts and Sons"
        }
    ]
}
```


## Error Response

**Code** : `400 Bad Request`

```json
{
 	"message": "could not find user"
}
```