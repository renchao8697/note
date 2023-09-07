# SQL

## 概述

SQL：Structure Query language（结构化查询语言），SQL被美国国家标准局（ANSI）确定为关系型数据库语言的美国标准，后来被国际化标准组织（ISO）采纳为关系数据库语言的国家化标准。

各数据库厂商都支持ISO的SQL标准， **普通话**

各数据库厂商在标准的基础上作出了自己的扩展，**方言**

SQL是一种标准话的语言，它允许你在数据库上执行操作，如创建项目，查询内容，更新内容，删除条目等操作。

## SQL语句分类
  - DDL（DataDefinition Language）：数据定义语言，用来定义数据库对象，库、表、列等。
  - DML（Data Manipulation Language）：数据操作语言，用来定义数据库记录（数据）增删改。
  - DCL（Data Control Language）：数据控制语言，用来定义访问权限和安全级别。
  - DQL（Data Query Language）：数据查询语言，用来查询记录（数据）。

## DDL操作数据库

### 创建
CREATE DATABASE语句用于创建新的数据库
编码方式：gb2312，utf-8，gbk，iso-8859-1

```sql
-- create database 数据库名
CREATE DATABASE mydb1;
-- create database 数据库名 character set 编码方式
CREATE DATABASE mydb2 character SET GBK;
-- create data 数据库名 set 编码方式 collate 排序规则
CREATE DATABASE mydb3 character SET GBK COLLATE gbk_chinese_ci;
```

### 查看数据库
查看当前数据库服务器中的所有数据库

```sql
show databases;
```

查看前面创建的mydb2数据库的定义信息

```sql
-- show create database 数据库名
SHOW CREATE DATABASE mydb2;
```

### 修改数据库
查看数据库，并把mydb2的字符集修改为utf8

```sql
-- alter database 数据库名 character set 编码方式
ALTER DATABASE mydb2 CHARACTER SET utf8;
```

### 删除数据库

```sql
-- drop database 数据库名
DROP DATABASE mydb3;
```

### 其他语句
查看当前使用的数据

```sql
select databse();
```

切换数据库

```sql
-- use 数据库名
USE mydb2;
```

## DDL操作表

CREATE TABLE语句用于创建新表

```sql
-- CREATE TABLE 表名(
--   列名1 数据类型 [约束],
--   列名2 数据类型 [约束],
--   列名n 数据类型 [约束]
-- );
CREATE TABLSE employees(
  id INT,
  age INT,
  first VARCHAR(255),
  last VARCHAR(255)
);
```
常用数据类型：
  - int：整型
  - double：浮点型，例如double(5,2)表示最多5位，其中必须有2位小数，即最大值为999.999，默认支持四舍五入
  - char：固定长度字符串类型，char(10)
  - varchar：可变长度字符串类型，varchar(10)
  - text：字符串类型，比如小说信息
  - blob：字节类型，保存文件信息（视频，音频，图片）
  - date：日期类型，格式为：yyyy-MM-dd
  - timer：时间类型，格式为：hh:mm:ss
  - timestamp：时间戳类型yyyy-MM-dd hh:mm:ss 会自动赋值
  - datetime：日期时间类型yyyy-MM-dd hh:mm:ss


### 其他表操作

```sql
-- 删除表 
-- drop table 表名
DROP TABLE table_name;

-- 查砍当前数据库中的所有表
-- show tables;
SHOW TABLES;

-- 查看表的字段信息
-- desc 表名
DESC employee;

-- 增加列
-- alter table 表名 add 新列名 新的数据类型
ALTER TABLE employee ADD image blob;

-- 修改列约束
-- alter table 表名 change/modify 旧列名 新列名 新的数据类型
ALTER TABLE employee MODIFY job varchar(60);
ALTER TABLE employee CHANGE job job varchar(60);

-- 修改列名
ALTER TABLE user CHANGE name username varchar(100);

-- 删除列，一次只能删除一列
-- alter table 表名 drop 列名
ALTER TABLE employee DROP image;

-- 修改表名
-- alter table 旧表名 rename 新表明
ALTER TABLE user RENAME users;

-- 查看表格的创建细节
-- show create table 表名
SHOW CREATE TABLE user;

-- 修改表的字符集为gbk
-- alter table 表名 character set 编码方式
ALTER TABLE user CHARACTER SET gbk;
```

## DML操作

DML是对表中的数据进行增、删、改的操作，包括：`INSERT`、`UPDATE`、`DELETE`。

### 插入操作：INSERT

```sql
-- insert into 表名（列名） values（数据值）
INSERT INTO student(stuname, stuage, stusex, biithday) VALUES('xiaoming', 18, '1', '2000-1-1');

-- 添加数据的时候可以省略列名，但要求值的顺序按照表名中的列排列
INSERT INTO student VALUES('xiaobai', 12, '1', '2007-1-1');

-- 同时添加多行
INSERT INTO student(stuname, stuage, stusex, birthday)
VALUES('xiaohong', 18, '2', '2000-1-1'),
('xiaoqing', 18, '2', '2000-1-1'),
('xiaoming', 18, '1', '2000-1-1'),
('xiaobai', 18, '1', '2000-1-1');

-- 插入空置，使用null
```

### 更新操作：UPDATE

```sql
-- UPDATE 表名 SET 列名1=列值1,列名2=列值2 WHERE 列名=值
UPDATE student name='xiaoming',age=12 WHERE id=1;
```

### 删除操作：DELETE

```sql
-- delete from 表名 【where 列名=值】
DELETE FROM student WHERE id=1;

-- truncate table 表名
DELETE TABLE student;
```

- DELETE删除表中的数据，表结构还在；删除后的数据可以找回
- TRUNCATE删除是把表直接DROP掉，然后在创建一个同样的新表；删除的数据不能找回，执行速度比DELETE快

## DCL

### 创建用户

```sql
-- create user 用户名@指定ip identified by 密码;
CREATE user test123@localhost IDENTIFIED BY 'test123';

-- create user 用户名@客户端ip identified by 密码; 指定ip才能登陆
CREATE user test123@192.168.1.1 IDENTIFIED BY 'test123';

-- create user 用户名@'%' identified by 密码; 任意ip均可登陆
CREATE user test123@'%' IDENTIFIED BY 'test123'
```

### 用户授权

```sql
-- grant 权限1,权限2 on 数据库名.* to 用户名@ip; 给指定用户授予指定数据库的指定权限
GRANT SELECT,INSERT,UPDATE,DELETE,CREATE ON student.* TO 'test123'@'127.0.0.1';

-- grant all on . to 用户名@ip; 给指定用户授予所有数据库所有权限
GRANT ALL ON *.* TO 'test123'@'127.0.0.1';
```

### 用户权限查询

```sql
-- show grants for 用户名@ip;
show grants for 'root'@'%'
```

### 撤销用户权限

```sql
-- revoke 权限1,权限2 on 数据库名.* from 用户名@ip;
REVOKE SELECT,UPDATE ON *.* FROM 'root'@'%';
```

### 删除用户

```sql
-- drop user 用户名@ip;
DROP user test123@localhost;
```

## DQL 数据查询

语法：`SELECT` 列名 `FROM` 表名 【`WHERE` --> `GROUP BY` --> `HAVING` --> `ORDER BY`】

```sql
SELECT 要查询的列名
FROM 表名称
WHERE 限定条件
GROUP BY 对结果分组
HAVING 分组后的行条件
ORDER BY 对结果排序
LIMIT 结果限定
```

### 简单查询

```sql
-- 查询所有列
SELECT * FROM student;

-- 查询指定列
SELECT sid, sname, age FROM student;
```

### 条件查询

条件查询就是在查询时给出where子句，在where子句中可以使用如下运算符及关键字：
`=`、`!=`、`<>`、`<`、`<=`、`>`、`>=`；`BETWEEN...AND`；`IN(...)`；`IS NULL`；`AND`；`OR`；`NOT`。

```sql
SELECT * FROM student WHERE gender='female' AND age<50;
SELECT * FROM student WHERE sid='s_1001' OR sname='xiaoming';
SELECT * FROM student WHERE sid IN ('s_1001', 's_1002', 's_2001');
SELECT * FROM student WHERE sid NOT IN ('s_1001', 's_1002', 's_2001');
SELECT * FROM student WHERE age IS NULL;
SELECT * FROM student WHERE age>=20 AND age<=40;
-- 包含20和40
SELECT * FROM student WHERE age BETWEEN 20 AND 40;

SELECT * FROM student WHERE gender!='male';
SELECT * FROM student WHERE gender<>'male';
SELECT * FROM student WHERE NOT gender='male';

SELECT * FROM student WHERE NOT name IS NULL;
SELECT * FROM student WHERE name IS NOT NULL;
```

### 模糊查询

  - `_`：任意一个字符
  - `%`：任意0~n个字符
  
```sql
-- 查询姓名由3个字构成的学生
SELECT * FROM student WHERE name LIKE '___';
-- 查询姓名由5个字符构成，并且第5个字符为‘i’的学生
SELECT * FROM student WHERE name LIKE '___i';
-- 查询姓名以‘z’开头的学生
SELECT * FROM student WHERE name LIKE 'z%';
-- 查询姓名第二个字符为‘i’的学生
SELECT * FROM student WHERE name LIKE '_i%';
-- 查询姓名中包含‘a’的学生
SELECT * FROM student WHERE name LIKE '%a%';
```

### 字段控制查询

```sql
-- 去除重复记录
SELECT DISTINCT sal FROM emp;
-- 查询雇员的月薪与佣金之和
SELECT *, sal+comm FROM emp;
-- comm列的值可能为null
SELECT *, sal+IFNULL(comm,0) FROM emp;
-- 给列添加别名
SELECT *, sal+IFNULL(comm,0) AS total FROM emp;
-- 给列起别名时，可以省略as
SELECT *, sal+IFNULL(comm,0) total FROM emp;
```

### 排序

语法：`order by` 列名 `asc`/`desc`，`asc`为升序，`desc`为降序，默认不写为升序。

```sql
SELECT * FROM student ORDER BY age;
SELECT * FROM student ORDER BY age DESC;
SELECT * FROM student ORDER BY age DESC, name ACS;
```

### 聚合函数

- count：统计指定列部位NULL的记录行数
- max：计算指定列的最大值，如果列是字符串类型，那么使用字符串排序运算
- min：计算指定列的最小值，如果列是字符串类型，那么使用字符串排序运算
- sum：计算指定列的数值和，如果列类型不是数值类型，那么计算结果为0
- avg：计算指定列的平均值，如果列类型不是数值类型，那么计算结果为0

```sql
SELECT COUNT(*) AS cnt FROM emp;
SELECT SUM(sal) FROM EMP;
SELECT AVG(sal) FROM EMP;
SELECT MAX(sal), MIN(sal) FROM emp;
```

### 分组查询

当需要分组查询时需要使用`GROUP BY`子句，**如果查询语句中有分组操作，则select后面能添加的只能是聚合函数和被分组的列名**

#### 分组查询

```sql
-- 查询每个部门的编号以及这个部门的工资和
SELECT deptno, SUM(sal) FROM emp GROUP BY deptno;
-- 查询每个部门的表号以及这个部门的人数
SELECT deptno, COUNT(*) FROM emp GROUP BY deptno;
-- 查询每个部门的编号以及这个部门工资大于1500的人数
SELECT deptno, COUNT(*) FROM emp WHERE sal > 1500 GROUP BY deptno;
```

#### HAVING子句

```sql
-- 查询工资总和大于9000的部门编号以及工资和
SELECT deptno, SUM(sal) FROM emp GROUP BY deptno HAVING SUM(sal) > 9000;
```

`having`和`where`的区别：
- `having`是在分组后对数据进行过滤，`where`是在分组前对数据进行过滤
- `having`后面可以使用分组函数（统计函数），`where`后面不可以使用分组函数

### LIMIT

`LIMIT`是用来限定查询结果的起始行，以及总行数。

```sql
-- 查询5行记录，起始行从0开始
SELECT * FROM emp LIMIT 0, 5;

-- 分页查询
SELECT * FROM emp LIMIT (pageIndex - 1) * pageSize, pageSize;
```