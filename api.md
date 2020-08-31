```
 base url:http://52.78.41.100:8000
```
## 회원가입

### Post /user/register

### Request

```
{
    "name": "name",
    "userId": "userId",
    "password": "password"
}
```

### Response

```
200
{
    "message":"성공"
}
```

아이디 중복

```
400
{
    "message":"중복된 아이디"
}
```

서버 에러

```
500
{
    "message": "서버 에러"
}
```

---

## 로그인

### Post /user/login

### Request

```
{
    "userId": "userId",
    "password": "password"
}
```

### Response

성공

```
200
{
    "message":"성공",
    "accessToken": "accessToken"
}
```
틀린 비밀번호 
```
403
{
    "message": "로그인 실패"
} 
```
틀린 아이디

```
404
{
    "message":"존재하지 않는 유저"
}
```

서버 에러

```
500
{
    "message": "서버 에러"
}
```

---

## todo 작성

### Post /todo

### Request

```
body
{
    "content": "content"
    
}
header
{
    "access-token": "access-token"
}
```

### Response

성공

```
200
{
    "message":"투두 작성 성공"
}
```
로그인 되어있지 않음 
```
403
{
    "message": "로그인되어있지 않음"
} 
```


서버 에러

```
500
{
    "message": "서버 에러"
}
```

---

## todo 미리보기

### GET /todo

### Request

```

header
{
    "access-token": "access-token"
}
```

### Response

성공

```
200
{
    "message":"투두 미리보기 성공"
}
```
로그인 되어있지 않음 
```
403
{
    "message": "로그인되어있지 않음"
} 
```


서버 에러

```
500
{
    "message": "서버 에러"
}
```
---
## todo 삭제

### DELETE /todo

### Request

```
path
{
    "id": "id"
    
}
header
{
    "access-token": "access-token"
}
```

### Response

성공

```
200
{
    "message":"투두 삭제 성공"
}
```
자신의 투두가 아님
```
403
{
    "message": "자신의 투두가 아님"
} 
```

삭제할 투두가 없음

```
404
{
    "message": "삭제할 투두가 없음"
}
```


서버 에러

```
500
{
    "message": "서버 에러"
}
```





