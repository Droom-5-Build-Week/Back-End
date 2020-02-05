
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('user-likes-job').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('user-likes-job').insert([
        { id: 1, user_id: 2, job_id: 3, likes: true, seen_before: true },
        { id: 2, user_id: 2, job_id: 45, likes: false, seen_before: true },
        { id: 3, user_id: 2, job_id: 42, likes: true, seen_before: true },
        { id: 4, user_id: 3, job_id: 3, likes: true, seen_before: true },
        { id: 5, user_id: 3, job_id: 45, likes: false, seen_before: true },
        { id: 6, user_id: 3, job_id: 42, likes: false, seen_before: true },
        { id: 7, user_id: 3, job_id: 2, likes: true, seen_before: true },
      ]);
    });
};
