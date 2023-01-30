DROP TABLE IF EXISTS tasks;

CREATE TABLE tasks (
  id SERIAL,
  heading TEXT,
  description TEXT,
  to_do BOOLEAN,
  doing BOOLEAN,
  done BOOLEAN
);

INSERT INTO tasks(heading, description, to_do, doing, done) VALUES 
('Find Lances Mustache', 'Use apple maps to find lance', TRUE, FALSE, FALSE);
