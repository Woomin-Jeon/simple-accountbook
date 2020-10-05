# javascript-w5-accountbook

## 데이터 베이스 설계

유저 테이블

```sql
CREATE TABLE user (
  id VARCHAR(32) PRIMARY KEY, -- 아이디(기본키)
  pw VARCHAR(32), -- 비밀번호
  name VARCHAR(32) -- 이름
);
```

거래내역 테이블

```sql
CREATE TABLE breakdown (
  id VARCHAR(32) PRIMARY KEY, -- 거래내역 아이디(기본키)
  amount INT(32), -- 금액
  content VARCHAR(256), -- 거래 내용
  method VARCHAR(32), -- 결제 수단
  come VARCHAR(32), -- 수입/지출
  date VARCHAR(32), -- 날짜
  userId VARCHAR(32), -- 해당 유저 아이디(외래키)
  categoryId INT(8), -- 해당 카테고리 아이디(외래키)
  FOREIGN KEY (userId) REFERENCES user(id),
  FOREIGN KEY (categoryId) REFERENCES category(id)
);
```

카테고리 테이블

```sql
CREATE TABLE category (
  id INT(8) PRIMARY KEY, -- 카테고리 아이디(기본키)
  name VARCHAR(32) -- 카테고리 명
  come VARCHAR(32) -- 수입/지출
);
```
