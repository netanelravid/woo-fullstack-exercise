## candidates:
- id INTEGER PRIMARY KEY,
- name VARCHAR(100) NOT NULL,
- minimum_salary INTEGER NOT NULL

## tech_skills:
- id INTEGER PRIMARY KEY,
- name VARCHAR(100) NOT NULL

## candidates_tech_skills:
- candidate_id INTEGER NOT NULL,
- tech_skill_id INTEGER NOT NULL,
- FOREIGN KEY (candidate_id) REFERENCES candidates (id),
- FOREIGN KEY (tech_skill_id) REFERENCES tech_skills (id),
- PRIMARY KEY (candidate_id, tech_skill_id)

## candidates_tech_expectations:
- candidate_id INTEGER NOT NULL,
- tech_expectation_id INTEGER NOT NULL,
- FOREIGN KEY (candidate_id) REFERENCES candidates (id),
- FOREIGN KEY (tech_expectation_id) REFERENCES tech_skills (id),
- PRIMARY KEY (candidate_id, tech_expectation_id)

## employers:
- id INTEGER PRIMARY KEY,
- name VARCHAR(100) NOT NULL

## positions:
- id INTEGER PRIMARY KEY,
- employer_id INTEGER NOT NULL,
- name VARCHAR(100) NOT NULL,
- maximum_salary INTEGER NOT NULL

## positions_tech_stack:
- position_id INTEGER,
- tech_stack_id INTEGER,
- FOREIGN KEY (position_id) REFERENCES positions (id),
- FOREIGN KEY (tech_stack_id) REFERENCES tech_skills (id),
- PRIMARY KEY (position_id, tech_stack_id)

## processes:
- candidate_id INTEGER,
- position_id INTEGER,
- status VARCHAR(8) NOT NULL,
- FOREIGN KEY (candidate_id) REFERENCES candidates (id),
- FOREIGN KEY (position_id) REFERENCES positions (id),
- PRIMARY KEY (candidate_id, position_id)
