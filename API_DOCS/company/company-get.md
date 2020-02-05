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
                "id": 35,
                "position_name": "Customer Creative Planner",
                "type": "contract",
                "duration": "",
                "job_bio": "Non quidem ab. Provident tempora et possimus voluptatibus ut sint non quam. Iure aut expedita voluptatem expedita quos ut doloribus neque. Accusantium iure quaerat est odio quo et officiis. Omnis ipsa est nihil. Nostrum officia harum aliquam rerum blanditiis accusamus itaque maiores nam."
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
                "id": 29,
                "position_name": "Product Branding Associate",
                "type": "long-term",
                "duration": "",
                "job_bio": "Omnis ullam dolore. Officia harum perspiciatis tempore. Temporibus harum natus magni odit praesentium recusandae occaecati. Aspernatur veritatis et reprehenderit quas quam dicta est."
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
    
}
```


## Error Response

**Code** : `400 Bad Request`

```json
{
 	"message": "could not find company"
}
```