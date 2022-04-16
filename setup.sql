
-- make sure the websiteuser account is set up and has the correct privileges
CREATE USER IF NOT EXISTS websiteuser IDENTIFIED BY 'websitepassword';
GRANT INSERT, SELECT, UPDATE, DELETE ON website.* TO websiteuser;

DROP TABLE IF EXISTS accounts;

DROP TABLE IF EXISTS documents;

CREATE TABLE IF NOT EXISTS accounts (
  id MEDIUMINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  user VARCHAR(25) NOT NULL,
  pass VARCHAR(70) NOT NULL
);

INSERT INTO accounts(user, pass)
	VALUES("doej", "$2b$10$gL33obKAFUT5DK3pEbh72OIHztsWBniBBh.PdeKOrF1yr5KFAsdZO");

CREATE TABLE IF NOT EXISTS documents (
  id MEDIUMINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  user  VARCHAR(25) NOT NULL,
  title VARCHAR(100) NOT NULL,
  descrip VARCHAR(200) NOT NULL,
  date_modified VARCHAR(50),
  states VARCHAR(15),
  document LONGTEXT
);

INSERT INTO documents (user, title, descrip, date_modified, states, document)
VALUES ("doej", "web3", "about web 3", '2038-01-19 03:14:07', "uploaded", "THIS IS A LONG TEXT");
