SELECT
  JOB_ID AS 'Código do Cargo'
  AVG(SALARY) AS Média,
  (
    CASE
      WHEN AVG(SALARY) BETWEEN 2000
      AND 5800 THEN 'Júnior'
      WHEN AVG(SALARY) BETWEEN 5801
      AND 7500 THEN 'Pleno'
      WHEN AVG(SALARY) BETWEEN 7501
      AND 10500 THEN 'Sênior'
      WHEN AVG(SALARY) > 10500 THEN 'CEO'
      ELSE 'Não cadastrado'
    END
  ) AS Senioridade
FROM
  hr.employees
GROUP BY
  JOB_ID
ORDER BY
  Média;
