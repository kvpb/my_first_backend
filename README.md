# my-first-backend

## how-to install your app

Launch a terminal emulator, e.g. [Terminator](https://gnome-terminator.org), [iTerm2](https://iterm2.com) or [VS Code's Integrated Terminal](https://code.visualstudio.com/docs/editor/integrated-terminal), and enter this:
```sh
mkdir my-first-backend_19820_x918te
cd my-first-backend_19820_x918te
git clone https://git.us.qwasar.io/my-first-backend_19820_x918te/my-first-backend
cd my-first-backend
npm init -y
npm i express
npm install -g npm
```

- - -

## Parts I, II & III

#### Terminal Emulator 1 (Control-`)

```sh
node ./app.js
```
#### Terminal Emulator 2 (Control-`)

```sh
sh script.sh
```

## Part I

#### Terminal Emulator 1 (Control-`)

```sh
node ./app.js
```
<!-- restart the serv for every update to app.js yo  just curling won't do anything bro -->

#### Terminal Emulator 2 (Control-`)

```sh
curl -i localhost:8000
```

## Part II

#### Terminal Emulator 1 (Control-`)

```sh
node ./app.js
```

#### Terminal Emulator 2 (Control-`)

```sh
curl -i localhost:8000/birth_date
```

```sh
curl -i localhost:8000/birth_city
```

```sh
curl -i localhost:8000/wives
```

```sh
curl -i localhost:8000/picture
```

## Part III

#### Terminal Emulator 1 (Control-`)

```sh
node ./app.js
```

#### Terminal Emulator 2 (Control-`)

```sh
curl -i http://localhost:8000/public
```

```sh
curl -i http://localhost:8000/protected
```

```sh
curl -i http://admin:admin@localhost:8000/protected
```

```sh
curl -i http://user:password@localhost:8000/protected
```

```sh
curl -i http://iamgoingtobeabillionaire:markmywords@localhost:8000/protected
```
