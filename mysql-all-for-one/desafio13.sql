SELECT
  supplier_id
FROM
  northwind.purchase_orders
WHERE
  supplier_id REGEXP '1|3';
