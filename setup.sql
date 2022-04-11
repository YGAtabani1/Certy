
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
  content BINARY,
  stat VARCHAR(15),
  stamp DATE NOT NULL
);

INSERT INTO documents (id, user, title, descrip, stamp, content, stat)
VALUES ("user1","Web3", "This is a document", "1996/08/27","", "Uploaded");
