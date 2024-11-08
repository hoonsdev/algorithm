SELECT COUNT(*) AS COUNT
FROM ECOLI_DATA
WHERE (GENOTYPE & 1 > 0 OR GENOTYPE & 4 > 0)  -- 1번이나 3번 형질 보유
  AND (GENOTYPE & 2 = 0);                     -- 2번 형질을 보유하지 않음