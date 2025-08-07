CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    email VARCHAR(50) UNIQUE
);

CREATE TABLE posts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100),
    content VARCHAR(200),
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE comments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    content VARCHAR(200),
    post_id INT,
    user_id INT,
    FOREIGN KEY (post_id) REFERENCES posts(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

INSERT INTO users (name, email) VALUES
("Joe Goldberg", "john@fcs.com"),
("Walter White", "walter@fcs.com"),
("Rick Grimes", "rick@fcs.com"),
("Jon Snow", "jon@fcs.com"),
("Barry Berkman", "barry@fcs.com"),
("Oswald Cobblepot", "oswald@fcs.com"),
("Dexter Morgan", "dexter@fcs.com");

INSERT INTO posts (title, content, user_id) VALUES
("Hello, you", "I will help you, helicopter sibling.", 1),
("I am the danger!", "I am the one who knocks!", 2),
("We're lost!", "Shane's not himself anymore.", 3),
("I know nothing", "Now my watch has ended", 4),
("FUCHES!", "I'm a cop killer", 5),
("Too bad", "You're a good kid, Vic.", 6),
("Rule #1 of Harry's Code", "Don't get caught.", 7);

INSERT INTO comments (content, post_id, user_id) VALUES
("Soon, you'll be on my table.", 1, 7),
("I could use some help beyond the wall.", 2, 4),
("Let's start an empire.", 2, 6);