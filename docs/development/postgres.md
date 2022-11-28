# Postgressql Notes



Data Types in Postgres

**Character Types**

- char(5): Stores up to maximum 5 characters.

- varchar: Stores any length of characters.

- varchar(20): Stores up to 20 characters.

- text: Stores any length of characters.

**Numeric Types**

- Integers 
  
  - Smallserial: 1 to 32767 (2^15-1)
  
  - serial: 1 to 214783647 (2^31-1)
  
  - bigserial: 1 to 9223372036854775807 (2^63-1)

- Floats
  
  - decimal
  
  - numeric
  
  - real
  
  - double precision
  
  - float

**DATE/TIME**

- Date 
  
  - yyyy-mm-dd format is used.

- Time

- Timestamp

- Interval
  
  - Represents a duration of time.

**Other Types**

- Currency

- Binary

- JSON

- Range

- Geometric

- Arrays

- XML

- UUID





To view all data in a table in database, use this query

```sql
SELECT * from public.customer
ORDER BY id ASC
```

To create a type

```sql
CREATE TYPE sex_type as enum
('M', 'F');
```

To change type of a column

```sql
ALTER TABLE customer 
ALTER COLUMN sex TYPE sex_type USING sex::sex_type;
```

Create an employee table

```sql
CREATE TABLE sales_person(
	first_name VARCHAR(30) NOT NULL,
	last_name VARCHAR(30) NOT NULL,
	email VARCHAR(60) NOT NULL,
	street VARCHAR(50) NOT NULL,
	city VARCHAR(40) NOT NULL,
	state CHAR(2) NOT NULL,
	zip SMALLINT NOT NULL,
	phone VARCHAR(20) NOT NULL,
	birth_date DATE NOT NULL,
	sex sex_type NOT NULL,
	date_hired TIMESTAMP NOT NULL,
	id SERIAL NOT NULL
);
```

Reference a foreign key

```plsql
CREATE TABLE product(
	type_id INTEGER REFERENCES product_type(id),
	name VARCHAR(30) NOT NULL,
	supplier VARCHAR(30) NOT NULL,
	description TEXT NOT NULL,
	id SERIAL PRIMARY KEY
);
```
