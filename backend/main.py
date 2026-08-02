from fastapi import FastAPI
import mysql.connector
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
@app.get("/")
def home():
    return {"message": "Business Listings Dashboard API is running!"}


@app.get("/businesses")
def get_businesses():
    conn = mysql.connector.connect(
        host="localhost",
        user="root",
        password="jungkook",
        database="business_dashboard"
    )

    cursor = conn.cursor(dictionary=True)

    cursor.execute("SELECT * FROM listing_master")
    data = cursor.fetchall()

    cursor.close()
    conn.close()

    return data
@app.get("/category-count")
def category_count():
    conn = mysql.connector.connect(
        host="localhost",
        user="root",
        password="jungkook",
        database="business_dashboard"
    )

    cursor = conn.cursor(dictionary=True)

    cursor.execute("""
        SELECT category, COUNT(*) AS total
        FROM listing_master
        GROUP BY category
    """)

    result = cursor.fetchall()

    cursor.close()
    conn.close()

    return result
@app.get("/source-count")
def source_count():
    conn = mysql.connector.connect(
        host="localhost",
        user="root",
        password="jungkook",
        database="business_dashboard"
    )

    cursor = conn.cursor(dictionary=True)

    cursor.execute("""
        SELECT source, COUNT(*) AS total
        FROM listing_master
        GROUP BY source
    """)

    result = cursor.fetchall()

    cursor.close()
    conn.close()

    return result
@app.get("/city-count")
def city_count():
    conn = mysql.connector.connect(
        host="localhost",
        user="root",
        password="jungkook",
        database="business_dashboard"
    )

    cursor = conn.cursor(dictionary=True)

    query = """
    SELECT city, COUNT(*) AS total
    FROM listing_master
    GROUP BY city
    ORDER BY total DESC;
    """

    cursor.execute(query)
    result = cursor.fetchall()

    cursor.close()
    conn.close()

    return result