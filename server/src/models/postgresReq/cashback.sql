
-- SELECT 
--     c."userId", 
--     c.prize, 
--     c."createdAt"
-- FROM 
--     "Contests" c
-- JOIN 
--     "Users" u ON c."userId" = u.id
-- WHERE 
--     u.role = 'customer'
--     AND c."createdAt"::date BETWEEN '2023-12-25' AND '2024-01-14'


CREATE TEMP TABLE "TempCashback" AS
SELECT 
    c."userId" AS user_id,
    SUM(c.prize) * 0.10 AS cashback
FROM 
    "Contests" c
JOIN 
    "Users" u ON c."userId" = u.id
WHERE 
    u.role = 'customer'
    AND c."createdAt" BETWEEN '2023-12-25' AND '2024-01-14' -- Фильтруем по дате создания
GROUP BY 
    c."userId";

UPDATE "Users"
SET balance = balance + tc.cashback
FROM "TempCashback" tc
WHERE "Users".id = tc.user_id;

SELECT * FROM "TempCashback";

-- DROP TABLE "TempCashback";
