CREATE DATABASE simple_blog;
USE simple_blog;
CREATE TABLE users (
id int auto_increment primary key,
name varchar(50),
email varchar(100) unique,
password varchar(255),
created_at timestamp default current_timestamp
);

create table posts(
id int auto_increment primary key,
user_id int,
title varchar(300),
content text,
created_at timestamp default current_timestamp,
foreign key (user_id) references users(id) on delete cascade
);

create table comments(
id int auto_increment primary key,
post_id int,
user_id int,
comment_text text,
created_at timestamp default current_timestamp,
foreign key (post_id) references posts(id) on delete cascade,
foreign key (user_id) references users(id) on delete cascade
);