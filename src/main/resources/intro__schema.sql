DROP TABLE IF EXISTS todo;

CREATE TABLE todo (
  id             INT          NOT NULL PRIMARY KEY,
  name   VARCHAR(50) NOT NULL,
  task   VARCHAR(50)  NOT NULL,
  priority INT NOT NULL
);

INSERT INTO todo VALUES
  (1, 'Kathy', 'task1',4),
  (2, 'Bert', 'task2',6),
  (3, 'Bryan', 'task3',8);