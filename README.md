# typescipt compiler설치
npm install -g typescript

# typescript compile
# Compiles the current project (tsconfig.json in the working directory.)
# typescipt compiler를 전역으로 설치하면 아래의 명령어로 가능
tsc
# typescipt compiler를 로컬로 설치하면 아래의 명령어로 가능
npx tsc

# Ignoring tsconfig.json, compiles the specified files with default compiler options.
tsc app.ts util.ts

# typescript 컴파일러 설정 초기화 
# tsconfig.json 파일이 생성됨   
# 오류가 있을 경우에는 .js 파일 생성하지 않는다는 설정 
tsc --init
"noEmitOnError": true,    

# ts 컴파일 없이 실행
npm install ts-node
npx ts-node index.ts


# package.json의 script에 작성하여 컴파일하고 실행을 한 번에 진행할 수 있습니다 
# 아래와 start가 있는 줄을 추가합니다
"scripts": {
    "start": "tsc && node dist/index.js"
  },

npm run start

