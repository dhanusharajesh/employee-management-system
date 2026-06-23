from fastapi import FastAPI, Depends, status
from sqlalchemy.orm import Session
from database import engine, SessionLocal
from fastapi.middleware.cors import CORSMiddleware
import models
import schemas

#to create database connection
models.Base.metadata.create_all(bind=engine)
app=FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

#create database session
def get_db():
    db=SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get('/')
def home():
    return {"message":"fastapi started"}

#creating employees
@app.post('/employees',status_code=status.HTTP_201_CREATED)
def create_employee(request:schemas.Employee, db:Session=Depends(get_db)):
    new_employee= models.Employee(name=request.name, department=request.department, salary=request.salary)
    db.add(new_employee)
    db.commit()
    db.refresh(new_employee)
    return new_employee

#read ALL employee details
@app.get('/employees', status_code=status.HTTP_200_OK)
def get_employee(db:Session=Depends(get_db)):
    employees= db.query(models.Employee).all()  #similar to SELECT * FROM employees
    return employees

#get employees based on ID
@app.get('/employees/{id}', status_code=status.HTTP_200_OK)
def get_emp_by_id(id:int, db:Session=Depends(get_db)):
    employees= db.query(models.Employee).filter(models.Employee.id==id).first()  #filter out to only get id related values
    return employees


#update employee details
@app.put('/employee/{id}',status_code=status.HTTP_202_ACCEPTED)
def update_employee(id:int,request:schemas.Employee,db:Session=Depends(get_db)):
    existing_emp= db.query(models.Employee).filter(models.Employee.id==id).first()
    existing_emp.name= request.name
    existing_emp.department= request.department
    existing_emp.salary= request.salary
    db.commit()
    return 'updated'

#delete details
@app.delete('/employee/{id}')
def delete_emp(id: int, db: Session = Depends(get_db)):
    employee = db.query(models.Employee).filter(models.Employee.id == id).first()
    if employee is None:
        return {"message": "Employee not found"}

    db.delete(employee)
    db.commit()
    return "Employee details deleted"
