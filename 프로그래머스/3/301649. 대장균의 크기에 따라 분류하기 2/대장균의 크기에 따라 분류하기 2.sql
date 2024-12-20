-- 코드를 작성해주세요
SELECT ED.ID,
CASE
    WHEN ED.PER <= 0.25 THEN 'CRITICAL'
    WHEN ED.PER <= 0.5 THEN 'HIGH'
    WHEN ED.PER <= 0.75 THEN 'MEDIUM'
    WHEN ED.PER <= 1 THEN 'LOW'
END COLONY_NAME
FROM
    (
        SELECT ID,
            PERCENT_RANK() OVER (ORDER BY SIZE_OF_COLONY DESC) PER -- 개체 수 내림차순으로 정렬한 것 중에 해당 행의 순위
        FROM ECOLI_DATA
    ) ED
ORDER BY ED.ID ASC

