Enter password: ********
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 9
Server version: 8.0.32 MySQL Community Server - GPL

Copyright (c) 2000, 2023, Oracle and/or its affiliates.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

mysql> select * from users;
ERROR 1046 (3D000): No database selected
mysql> select * from user;
ERROR 1046 (3D000): No database selected
mysql> desc users;
ERROR 1046 (3D000): No database selected
mysql> desc getintouch;
ERROR 1046 (3D000): No database selected
mysql> desc users;
ERROR 1046 (3D000): No database selected
mysql> show databas;
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'databas' at line 1
mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| form               |
| getintouch         |
| information_schema |
| mysql              |
| performance_schema |
| sys                |
+--------------------+
6 rows in set (0.11 sec)
mysql> desc users;
+------------+--------------+------+-----+---------+-------+
| Field      | Type         | Null | Key | Default | Extra |
+------------+--------------+------+-----+---------+-------+
| first_name | varchar(100) | YES  |     | NULL    |       |
| Last_name  | varchar(100) | YES  |     | NULL    |       |
| Email      | varchar(200) | NO   | PRI | NULL    |       |
| phone      | int          | YES  |     | NULL    |       |
| comment    | varchar(200) | YES  |     | NULL    |       |
+------------+--------------+------+-----+---------+-------+
5 rows in set (0.16 sec)

mysql>