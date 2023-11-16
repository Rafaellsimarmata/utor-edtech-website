SELECT 'invoiceno' AS nama_kolom, COUNT(CASE WHEN invoiceno IS NULL THEN 1 END) AS jumlah_null FROM invoicedata
UNION ALL
SELECT 'stockcode', COUNT(CASE WHEN stockcode IS NULL THEN 1 END) FROM invoicedata
UNION ALL
SELECT 'description', COUNT(CASE WHEN description IS NULL THEN 1 END) FROM invoicedata
UNION ALL
SELECT 'quantity', COUNT(CASE WHEN quantity IS NULL THEN 1 END) FROM invoicedata
UNION ALL
SELECT 'invoicedate', COUNT(CASE WHEN invoicedate IS NULL THEN 1 END) FROM invoicedata
UNION ALL
SELECT 'unitprice', COUNT(CASE WHEN unitprice IS NULL THEN 1 END) FROM invoicedata
UNION ALL
SELECT 'customerid', COUNT(CASE WHEN customerid IS NULL THEN 1 END) FROM invoicedata
UNION ALL
SELECT 'country', COUNT(CASE WHEN country IS NULL THEN 1 END) FROM invoicedata;
