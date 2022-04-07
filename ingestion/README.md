# Ingestion service

Service to ingest all data from external tools, currently uses fastapi to create local
server on port 8000

### Requirements

`pip install fastapi`

`pip install uvicorn`

`pip install python-multipart`

### To run

`uvicorn main:app --reload`
