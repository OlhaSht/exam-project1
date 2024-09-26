

SELECT jsonb_object_agg(role, count)
FROM (
    SELECT role, COUNT(*) as count
    FROM "Users"
    GROUP BY role
) AS role_counts;