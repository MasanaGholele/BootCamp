CREATE DATABASE shopping_cart_DB

SELECT * FROM products;
SELECT * FROM users;
SELECT * FROM cart;
SELECT * FROM order_header;
SELECT * FROM order_details;

DROP TABLE products;
DROP TABLE users;
DROP TABLE cart;
DROP TABLE order_header;
DROP TABLE order_details;


CREATE TABLE products
	(
		product_id BIGSERIAL CONSTRAINT product_id_key PRIMARY KEY,
		product_name VARCHAR (30) NOT NULL,
		price INTEGER NOT NULL
	);
	
INSERT INTO products
	(
		product_name,
		price
	)
VALUES 
	('Coke',10),
	('Chips',5);
	

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
		product_id BIGSERIAL REFERENCES products (product_id),
		qty INTEGER CONSTRAINT check_qty_not_negative CHECK (qty > -1)
	);

--Add a Coke (if product does not exist, insert with qty 1)
--Add a Coke (if product exist, update qty by 1)
--Add Chips (if product does not exist, insert with qty 1)

IF EXISTS (SELECT * FROM cart  WHERE product_id = 1)
	THEN
		UPDATE cart  SET qty = qty + 1  WHERE product_id = 1;
	ELSE
		INSERT INTO cart (product_id,qty) VALUES (1,1);
END IF; 
	

CREATE TABLE order_header
	(
		order_id BIGSERIAL CONSTRAINT order_id_key PRIMARY KEY,
		user_id BIGSERIAL REFERENCES users (user_id),
		order_date DATE NOT NULL
	);
	
INSERT INTO order_header
	(
		user_id,
		order_date
	)
VALUES 
	(2,'2022/4/15 15:30:00');
	

CREATE TABLE order_details
	(
		order_id BIGSERIAL REFERENCES order_header (order_id) PRIMARY KEY,
		product_id BIGSERIAL REFERENCES products (product_id),
		qty INTEGER CONSTRAINT check_qty_not_negative CHECK (qty > -1)
	);
			


/*Now you must demonstrate the shopping experience by writing SQL queries which represents:

Adding multiple products to the cart (Give the insert statements with hard-coded product-id’s)
Do a select statement after every step to show that the insert worked

—---------------------------------------------

Deleting products fro
m the cart (Do the delete statement with a hard-coded product id)
Do a select statement after every step to show that the delete worked

—--------------------------------------------

Do the Checking out multiple times, creating multiple orders

When you checkout, you write insert statements that will copy the cart, line by line (hard-coded ID’s are OK)

Now when there are at least 2 orders in the order tables, print the orders with select statements with inner joins

Printing a single order (SELECT STATEMENT)
Printing all orders for a days shopping (SELECT STATEMENT)
*/

	
	
