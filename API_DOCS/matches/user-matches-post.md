## Post User Match

**Auth required** : YES

* [Post Job] : `POST /api/users/:user_id/matches`

* [Fields required] :  `job_id, user_id, likes, seen_before`

```json
{
	"job_id": "1",
	"user_id": "1",
	"likes": true,
	"seen_before": false
}
```

# Success Response

**Code** : `200 OK`

```json
[
  {
    "name": "Waters, Harber and Williamson",
    "position_name": "Global Metrics Liaison",
    "type": "Contract",
    "job_bio": "Vitae ducimus molestias voluptatem possimus sit. Dignissimos eligendi quia est repellendus aut repudiandae. Sed odio quia dolorem quasi est exercitationem velit. Culpa velit ratione fugit voluptas repellat commodi. Quibusdam a non nostrum vero mollitia culpa suscipit corrupti aperiam. Adipisci dolor atque voluptatem voluptate et.",
    "skills": "haptic"
  },
  {
    "name": "Waters, Harber and Williamson",
    "position_name": "Global Metrics Liaison",
    "type": "Contract",
    "job_bio": "Vitae ducimus molestias voluptatem possimus sit. Dignissimos eligendi quia est repellendus aut repudiandae. Sed odio quia dolorem quasi est exercitationem velit. Culpa velit ratione fugit voluptas repellat commodi. Quibusdam a non nostrum vero mollitia culpa suscipit corrupti aperiam. Adipisci dolor atque voluptatem voluptate et.",
    "skills": "haptic"
  },
  {
    "name": "Waters, Harber and Williamson",
    "position_name": "Global Metrics Liaison",
    "type": "Contract",
    "job_bio": "Vitae ducimus molestias voluptatem possimus sit. Dignissimos eligendi quia est repellendus aut repudiandae. Sed odio quia dolorem quasi est exercitationem velit. Culpa velit ratione fugit voluptas repellat commodi. Quibusdam a non nostrum vero mollitia culpa suscipit corrupti aperiam. Adipisci dolor atque voluptatem voluptate et.",
    "skills": "haptic"
  }
]
```

# Error Response

**Code** : `500 Server Error`

```json
{
 	"message": "Error posting like for user"
}
```