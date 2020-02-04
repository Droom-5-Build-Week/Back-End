## Get Job by type

**Auth required** : YES

* [Show Job Skills] : `GET /api/companies/jobs/:type`

# Success Response

**Code** : `200 OK`

```json
[
    {
        "id": 5,
        "position_name": "Regional Integration Analyst",
        "type": "long-term",
        "job_bio": "Et rerum quia cumque pariatur. Officiis molestias ducimus sit qui et. Asperiores quae aperiam et iste. Temporibus nostrum et ipsa quos.",
        "duration": "",
        "company_id": 38
    },
    {
        "id": 8,
        "position_name": "Dynamic Tactics Architect",
        "type": "long-term",
        "job_bio": "Adipisci voluptatum eos reiciendis corrupti labore omnis ut reiciendis unde. Vitae sit ipsam recusandae possimus earum. Soluta laborum quos minima debitis. Porro iste qui quo dolorem voluptate dolore veniam. Et quae rem facere. Non amet excepturi.",
        "duration": "",
        "company_id": 46
    },
    {
        "id": 10,
        "position_name": "Regional Communications Officer",
        "type": "long-term",
        "job_bio": "Dicta quia numquam aut pariatur beatae deserunt quam. Ipsam porro ut. Aliquid incidunt rerum veniam quam ducimus.",
        "duration": "",
        "company_id": 5
    },
```

# Error Response

**Code** : `500 Server Error`

```json
{
 	"message": "Could not find jobs"
}
```

**Code** : `400 Bad Request`

```json
{
 	"message": "There are no jobs here"
}
```