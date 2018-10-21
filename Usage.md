## Mysql

### docker image run
```bash
docker run \
    --name woo-mysql \
    -d \
    -p 3306:3306 \
    -e MYSQL_ROOT_PASSWORD=mysql_root_pass_123 \
    mysql:8.0.12
```

### DB & Tables creation
```sql
CREATE DATABASE woo;
USE woo;
CREATE TABLE candidates(
    id INTEGER PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    minimum_salary INTEGER NOT NULL
);
CREATE TABLE tech_skills(
    id INTEGER PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);
CREATE TABLE candidates_tech_skills(
    candidate_id INTEGER NOT NULL,
    tech_skill_id INTEGER NOT NULL,
    FOREIGN KEY (candidate_id) REFERENCES candidates (id),
    FOREIGN KEY (tech_skill_id) REFERENCES tech_skills (id),
    PRIMARY KEY (candidate_id, tech_skill_id)
);
CREATE TABLE candidates_tech_expectations(
    candidate_id INTEGER NOT NULL,
    tech_expectation_id INTEGER NOT NULL,
    FOREIGN KEY (candidate_id) REFERENCES candidates (id),
    FOREIGN KEY (tech_expectation_id) REFERENCES tech_skills (id),
    PRIMARY KEY (candidate_id, tech_expectation_id)
);
CREATE TABLE employers(
    id INTEGER PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);
CREATE TABLE positions(
    id INTEGER PRIMARY KEY,
    employer_id INTEGER NOT NULL,
    name VARCHAR(100) NOT NULL,
    maximum_salary INTEGER NOT NULL
);
CREATE TABLE positions_tech_stack(
    position_id INTEGER,
    tech_stack_id INTEGER,
    FOREIGN KEY (position_id) REFERENCES positions (id),
    FOREIGN KEY (tech_stack_id) REFERENCES tech_skills (id),
    PRIMARY KEY (position_id, tech_stack_id)
);
CREATE TABLE processes(
    candidate_id INTEGER,
    position_id INTEGER,
    status VARCHAR(8) NOT NULL,
    FOREIGN KEY (candidate_id) REFERENCES candidates (id),
    FOREIGN KEY (position_id) REFERENCES positions (id),
    PRIMARY KEY (candidate_id, position_id)
);
```

### Tables init
```sql
INSERT INTO candidates (id, name, minimum_salary)
VALUES
    (123456781, "Moshe", 28000),
    (123456782, "David", 29000),
    (123456783, "Haim", 30000);
INSERT INTO tech_skills (id, name)
VALUES
    (1, 'Mysql'),
    (2, 'Elasticsearch'),
    (3, 'MongoDB'),
    (4, 'Python'),
    (5, 'Java'),
    (6, 'Javascript'),
    (7, 'Git'),
    (8, 'Trello'),
    (9, 'Docker'),
    (10, 'Chrome');
INSERT INTO candidates_tech_skills (candidate_id, tech_skill_id)
VALUES
    (123456781, 1),
    (123456782, 2),
    (123456782, 3),
    (123456783, 4),
    (123456783, 5),
    (123456783, 6);
INSERT INTO candidates_tech_expectations (candidate_id, tech_expectation_id)
VALUES
    (123456781, 1),
    (123456782, 2),
    (123456782, 3),
    (123456782, 4),
    (123456783, 2);
INSERT INTO employers (id, name)
VALUES
    (123456004, "Aaron"),
    (123456005, "Gilad"),
    (123456006, "Michael");
INSERT INTO positions (id, employer_id, name, maximum_salary)
VALUES
    (1, 123456004, "Junior Backend Developer", 29000),
    (2, 123456004, "Senior Backend Developer", 29000),
    (3, 123456005, "Junior Fullstack Developer", 29000),
    (4, 123456005, "Senior Fullstack Developer", 29000),
    (5, 123456006, "Devops Engineer", 29000),
    (6, 123456006, "Product Owner", 29000);
INSERT INTO positions_tech_stack (position_id, tech_stack_id)
VALUES
    (1, 4),
    (1, 7),
    (2, 4),
    (2, 7),
    (2, 8),
    (2, 9),
    (3, 4),
    (3, 7),
    (3, 6),
    (4, 4),
    (4, 7),
    (4, 6),
    (4, 8),
    (4, 2),
    (5, 2),
    (5, 9),
    (6, 8),
    (6, 10);
```
