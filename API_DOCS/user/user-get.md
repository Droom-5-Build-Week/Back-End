## Read All Users

**Auth required** : YES

* [GET All Users] : `GET /api/users/`

# Success Response

**Code** : `201 CREATED`

You will get a lot of users

```json
{
    "id": 48,
    "email": "Abigail_Kutch@yahoo.com",
    "..."
}
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