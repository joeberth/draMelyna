# doctorMe

DoctorMe is an webApp to help doctors monitor their patients, they can save prescriptions, appointment history and schedule upcoming appointments.

## First Screen

- Folder and a galery with doctor merchan
- Check which health plan is accepted by the doctor
- LogIn in doctor account.

## Second Screen

- Doctor private screen
- Filter patients

## Third Screen

- Form to Schedule appointments with available times.

### How to install

### Local

1- Clone repo
```
git clone https://github.com/joeberth/doctorMe.git
```

2- change to backend folder (make sure you have psql installed)

```
cd backend

```
3- Install requirements

```
yarn i
```

4- Rename .env-sample to .env (To make things easier, i left filled)
```
 yarn sequelize db:migrate
```
5- Apply migrations 
```
 yarn sequelize db:migrate
```

6- Run server

```
 yarn dev
```

7- change to frontend folder

```
cd frontend

```
8- Install requirements

```
yarn i
```

9- Run server

```
 yarn start
```


### DoctorMe in Action...

![image](https://user-images.githubusercontent.com/33490097/120561653-50748600-c3db-11eb-99bb-47046bb2d519.png)

