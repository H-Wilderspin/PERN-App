CREATE DATABASE pern_data;

CREATE EXTENSION IF NOT EXISTS "pgcrypto";
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE cats(
    cat_id SERIAL NOT NULL PRIMARY KEY,
    cat_name VARCHAR(25) NOT NULL UNIQUE
);

INSERT INTO cats (cat_name) VALUES ('General');

CREATE TABLE users(
    user_uid UUID PRIMARY KEY NOT NULL,
    user_name VARCHAR(100) NOT NULL,
    user_email VARCHAR(100),
    user_password VARCHAR(100) NOT NULL,
    user_status BOOLEAN NOT NULL,
    user_joined DATE NOT NULL,
    UNIQUE(user_email)
);

INSERT INTO users(user_uid, user_name, user_email, user_password, user_status, user_joined) 
VALUES (uuid_generate_v4(), 'tester', 'tester@gmail.com', crypt('tester', gen_salt('bf')), FALSE, CURRENT_DATE);

CREATE TABLE posts(
    post_id BIGSERIAL PRIMARY KEY NOT NULL,
    post_img VARCHAR(300),
    post_title VARCHAR(100) NOT NULL,
    post_content VARCHAR(2000) NOT NULL,
    post_author UUID REFERENCES users(user_uid),
    post_date DATE NOT NULL
);

INSERT INTO posts(post_title, post_content, post_author, post_date) 
VALUES ('Title', 'Words attributed to the content of the post', 'e3e8009a-0894-4205-a887-b627db804af6', CURRENT_DATE);

