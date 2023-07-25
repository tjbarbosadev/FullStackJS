drop table barbosa.card;
drop table barbosa.column;
drop table barbosa.board;

create table barbosa.board (
	id_board serial primary key,
	name text
);

create table barbosa.column (
	id_column serial primary key,
	id_board integer references barbosa.board (id_board),
	name text,
	has_estimative boolean
);

create table barbosa.card (
	id_card serial primary key,
	id_column integer references barbosa.column (id_column),
	title text,
	estimative integer
);

insert into barbosa.board (id_board, name) values (1, 'Projeto 1');
insert into barbosa.column (id_column, id_board, name, has_estimative) values (1, 1, 'Coluna A', true);
insert into barbosa.column (id_column, id_board, name, has_estimative) values (2, 1, 'Coluna B', true);
insert into barbosa.column (id_column, id_board, name, has_estimative) values (3, 1, 'Coluna C', true);
insert into barbosa.card (id_card, id_column, title, estimative) values (1, 1, 'Atividade 1', 3);
insert into barbosa.card (id_card, id_column, title, estimative) values (2, 1, 'Atividade 2', 2);
insert into barbosa.card (id_card, id_column, title, estimative) values (3, 1, 'Atividade 3', 1);