CREATE TABLE order_products(
  order_id INT REFERENCES orders(id),
  product_id INT REFERENCES products(id),
  quantity INT
);