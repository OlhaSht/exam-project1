-- SELECT unnest(enum_range(NULL::"enum_Users_role"));
-- -- ALTER TYPE "enum_Users_role" 
-- -- ADD VALUE 'moderator';

-- UPDATE "Users"
-- SET role = 'moderator'
-- WHERE id = 1;

-- SELECT "accessToken" 
-- FROM "Users"
-- WHERE id = 1

-- SELECT row_to_json(u) AS user
-- FROM (
--   SELECT "accessToken"
--   FROM "Users"
--   WHERE id = 1
-- ) u;

SELECT json_build_object(
  'accessToken', "accessToken"
) AS user_data
FROM "Users"
WHERE id = 3;

-- INSERT INTO "Contests" 
-- ("orderId", "userId", "contestType", "title", "status", "prize", "priority")
-- VALUES 
-- ('ORD12345', 1, 'name', 'Конкурс на лучшее имя', 'active', 500.00, 1),
-- ('ORD12346', 2, 'tagline', 'Конкурс на лучший слоган', 'completed', 1000.00, 2);

-- SELECT * FROM "Contests";

-- INSERT INTO "Offers" ("userId", "contestId", "text", "fileName", "originalFileName", "status")
-- VALUES 
-- (1, 5, 'Тестовое предложение 1', 'test1.png', 'original1.png', 'pending'),
-- (2, 6, 'Тестовое предложение 2', 'test2.png', 'original2.png', 'approved');

