SELECT
  COUNT(*)
FROM
  northwind.orders
WHERE
  employee_id REGEXP '6|5'
  AND shipper_id = 2;
