#for incoming data from API v can store it to pydantic
#for api request and response
from pydantic import BaseModel

#gives format in which it needs the data
class Employee(BaseModel):
    name:str
    department:str
    salary:int
