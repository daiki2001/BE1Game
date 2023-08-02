drop database if exists STOPWATCH_GAME;

create database STOPWATCH_GAME CHARACTER SET UTF8;

CONNECT STOPWATCH_GAME;
grant all privileges on STOPWATCH_GAME.* TO 'be1'@localhost;

create table if not exists score_ranking
(
    ID         serial primary key,
    score      smallint      unsigned not null,
    CREATED_AT timestamp(3)  default current_timestamp(3) not null,
    UPDATED_AT timestamp(3)  default current_timestamp(3) not null
);
