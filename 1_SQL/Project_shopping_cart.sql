CREATE DATABASE shopping_cart_DB

DROP TABLE IF EXISTS order_details;
DROP TABLE IF EXISTS order_header;
DROP TABLE IF EXISTS cart;
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS users;


SELECT * FROM products;
SELECT * FROM users;
SELECT * FROM cart;
SELECT * FROM order_header;
SELECT * FROM order_details;


CREATE TABLE products
	(
		product_id BIGSERIAL CONSTRAINT product_id_key PRIMARY KEY,
		product_name VARCHAR (30) NOT NULL,
		price MONEY NOT NULL CHECK (price>= '0')
	);
	
INSERT INTO products
	(
		product_name,
		price
	)
VALUES 
	('Coke',10),
	('Chips',5),
	('Chocolate',12);


CREATE TABLE users
	(
		user_id BIGSERIAL CONSTRAINT user_id_key PRIMARY KEY,
		user_name VARCHAR (30)	NOT NULL
	);
	
	
INSERT INTO users
	(
		user_name
	)
VALUES 
	('Arnold'),
	('Sheryl');
	

CREATE TABLE cart
	(
		product_id BIGINT UNIQUE REFERENCES products (product_id),
		qty BIGINT CONSTRAINT check_qty_not_negative CHECK (qty >= '0')
	);


CREATE TABLE order_header
	(
		order_id BIGSERIAL CONSTRAINT order_id_key PRIMARY KEY,
		user_id BIGINT REFERENCES users (user_id) ON DELETE CASCADE,
		order_date TIMESTAMP DEFAULT current_timestamp
	);
	

CREATE TABLE order_details
	(
		order_id BIGINT REFERENCES order_header (order_id),
		product_id BIGINT REFERENCES products (product_id) ON DELETE CASCADE,
		qty BIGINT CONSTRAINT check_qty_not_negative CHECK (qty >= '0')
	);
			

--Adding items to the cart
CREATE OR REPLACE FUNCTION add_to_cart (prod_id BIGINT)
RETURNS VOID AS $$
BEGIN
	IF EXISTS (SELECT * FROM cart  WHERE prod_id = product_id)
		THEN
			UPDATE cart  
			SET qty = qty + 1  
			WHERE prod_id = product_id;
		ELSE
			INSERT INTO cart (product_id, qty) VALUES (prod_id, 1);
END IF;
END;
$$ LANGUAGE plpgsql;

--Removing items from the cart
CREATE OR REPLACE FUNCTION remove_from_cart (prod_id BIGINT)
RETURNS void AS $$
BEGIN
    IF EXISTS (SELECT * FROM CART WHERE product_id = prod_id AND qty > 1)
    	THEN
			UPDATE  CART
			SET qty = qty - 1
			WHERE product_id = prod_id;
    	ELSE
			DELETE FROM Cart 
			WHERE product_id = prod_id;
    END IF; 	
END;
$$ LANGUAGE plpgsql;


--Demonstrating the shopping experience (Sheryl = user_id 2)
--1. User number 2 adds products to cart

SELECT add_to_cart (1); --adding coke
SELECT * FROM cart; ------check if the item was added

SELECT add_to_cart (2); --adding chips
SELECT * FROM cart; ------check if the item was added

SELECT add_to_cart (3); --adding chocolate
SELECT * FROM cart; ------check if the item was added



--2. Checking out (user number 2)
--Do a normal "insert" of the "cart" into the order header
INSERT INTO order_header
	(user_id) --only the user, the default time will be displayed automatically
VALUES
	('2'); --depending on which user is checking out 
SELECT * FROM order_header;

INSERT INTO order_details
	(order_id, product_id, qty)
VALUES
	('1', '3', '1'),
	('1', '2', '3'),
	('1', '1', '4');


DELETE FROM order_details;
SELECT * FROM order_details;

--3. Removing items from the cart

SELECT remove_from_cart(1); --removing product_id 2, i.e. chips

SELECT * FROM cart;

SELECT * FROM order_details;

--4. Clear the cart completely for the next transaction/order

DELETE FROM cart;


--Demonstrating the shopping experience (Arnold = user_id 1)
--1. User number 1 adds products to cart

-check if the item was added
SELECT add_to_cart (1); --adding coke
SELECT * FROM cart; ------check if the item was added

SELECT add_to_cart (2); --adding chips
SELECT * FROM cart; ------check if the item was added

SELECT add_to_cart (3); --adding chocolate
SELECT * FROM cart; -----


--2. Checking out (user number 1)
--Do a normal "insert" of the "cart" into the order header
INSERT INTO order_header
	(user_id) --only the user, the default time will be displayed automatically
VALUES
	('1');  --depending on which user is checking out 
SELECT * FROM order_header;

INSERT INTO order_details
	(order_id, product_id, qty)
VALUES
	('2', '1', '2'),
	('2', '2', '4'),
	('2', '3', '4');
	

SELECT * FROM order_details;

--3. Removing items from the cart

SELECT remove_from_cart(1); --removing product_id 1, i.e. coke

SELECT * FROM cart;
SELECT * FROM order_details;

--4. Clear the cart completely for the next transaction/order

DELETE FROM cart;


--Revealing what is in user_id 2's individual order

SELECT u.user_name, oh.order_date, prod.product_name, prod.price, od.qty
FROM order_header AS oh
INNER JOIN users AS u
ON oh.user_id = u.user_id
INNER JOIN order_details AS od
ON oh.order_id = od.order_id
INNER JOIN products AS prod
ON od.product_id = prod.product_id
WHERE u.user_id = 2;


--User_id 2's total
SELECT u.user_name, od.order_id, SUM(od.qty * prod.price)
FROM order_details AS od
INNER JOIN products AS prod
ON od.product_id = prod.product_id
INNER JOIN order_header AS oh
ON oh.order_id = od.order_id
INNER JOIN users AS u
ON u.user_id = oh.user_id
WHERE u.user_id = 2
GROUP BY u.user_name, od.order_id
ORDER BY u.user_name, od.order_id;



--Revealing what is in user_id 1's individual order

SELECT u.user_name, oh.order_date, prod.product_name, prod.price, od.qty
FROM order_header AS oh
INNER JOIN users AS u
ON oh.user_id = u.user_id
INNER JOIN order_details AS od
ON oh.order_id = od.order_id
INNER JOIN products AS prod
ON od.product_id = prod.product_id
WHERE u.user_id = 1;


--User_id 3's total
SELECT u.user_name, od.order_id, SUM(od.qty * prod.price)
FROM order_details AS od
INNER JOIN products AS prod
ON od.product_id = prod.product_id
INNER JOIN order_header AS oh
ON oh.order_id = od.order_id
INNER JOIN users AS u
ON u.user_id = oh.user_id
WHERE u.user_id = 1
GROUP BY u.user_name, od.order_id
ORDER BY u.user_name, od.order_id;


--Showing all the orders for the day
SELECT u.user_name, oh.order_date, prod.product_name, prod.price, od.qty
FROM order_header AS oh
INNER JOIN users AS u
ON oh.user_id = u.user_id
INNER JOIN order_details AS od
ON oh.order_id = od.order_id
INNER JOIN products AS prod
ON od.product_id = prod.product_id


--Showing both totals for the day
SELECT od.order_id, SUM(od.qty * prod.price)
FROM order_details AS od
INNER JOIN products AS prod
ON od.product_id = prod.product_id
GROUP BY od.order_id 
ORDER BY od.order_id;







