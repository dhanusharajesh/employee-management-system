#for database tables only
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

SQLALCHEMY_DATABASE_URL="sqlite:///./employee.db"
engine=create_engine(SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread":False})

SessionLocal=sessionmaker(autocommit=False, autoflush=False, bind=engine) #for inserting, deleting , updating etc

Base= declarative_base() #all databse tables start here