from fastapi import FastAPI
from pydantic import BaseModel


class CypressRunStats(BaseModel):
    name: str
    relative: str
    absolute: str
    specType: str
    suites: int
    tests: int
    passes: int
    pending: int
    failures: int
    start: str
    end: str
    duration: int

app = FastAPI()

@app.get("/")
def read_root():
    return {"hello": "world"}

@app.post("/cypress/results/")
async def create_test_run_results(cypressRunStats: CypressRunStats):
    print(cypressRunStats)
    return cypressRunStats
