CREATE TABLE orders(
  id SERIAL PRIMARY KEY,
  status VARCHAR,
  user_id INT REFERENCES users(id)
);