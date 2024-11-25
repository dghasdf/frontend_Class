<!-- RestFul API 방식을 사용하지 않은 경우 -->

/ -> Home
/join -> Join
/login -> Login
/search -> Search

/edit-user -> Edit User
/delete-user -> Delete User

/watch-video -> Watch Video
/edit-video -> Edit Video
/delete-video -> Delete Video

<!-- RestFul API 방식을 사용한 경우 -->

/ 글로벌 라우터
/ -> Home
/join -> Join
/login -> Login
/search -> Search

/ users로 시작하는 페이지 라우팅 => 라우터
/users/logout -> Logout User
/user/edit -> Edit User
/user/delete -> Delete User

/ video로 시작하는 페이지 라우팅 => 라우터
/video/watch -> Watch Video
/video/edit -> Edit Video
/video/delete -> Delete Video
/video/comments -> Comment Video
/video/comments/delete -> Delete Comment

<!-- crud의 필요한 페이지들

Create
- video
> user / ID / createdAt / source etc...

Read


Updata
> user / ID / createdAt / source etc...

Delete
> All
> 만약 탈퇴하면? 그 해당 유저의 대한 데이터는 보존할 것인가?
> 재가입을 가능하게 할건지? 가능하게 할거면 며칠뒤에 재가입이 가능한지?
등등 구체적인 사항을 생각해야함

schema => 윤곽 // 형태
=> user로부터 어떤 데이터를 수집 => 우리가 원하는 형태로 관리,보관,제어
=> data model => data modeling 

[
 {
  id: "kjy"
  source: ".mp4"
  .......
 },
]
 -->


