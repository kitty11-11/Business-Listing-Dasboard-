import pandas as pd
import random

cities = [
    "Delhi",
    "Mumbai",
    "Bengaluru",
    "Kolkata",
    "Chennai"
]

categories = [
    "Restaurant",
    "Cafe",
    "Salon",
    "Gym",
    "Hotel",
    "Electronics"
]

sources = [
    "Sample Directory A",
    "Sample Directory B",
    "Sample Directory C"
]

business_words = [
    "Royal",
    "Urban",
    "Green",
    "Modern",
    "Prime",
    "Golden",
    "City",
    "Elite"
]

business_types = [
    "Hub",
    "Point",
    "Services",
    "Centre",
    "World",
    "Corner"
]

data = []

for i in range(600):

    city = random.choice(cities)
    category = random.choice(categories)

    business_name = (
        random.choice(business_words)
        + " "
        + category
        + " "
        + random.choice(business_types)
        + f" {i + 1}"
    )

    address = f"{random.randint(1, 500)}, Main Road, {city}"

    phone = f"+91{random.randint(7000000000, 9999999999)}"

    source = random.choice(sources)

    data.append({
        "business_name": business_name,
        "category": category,
        "city": city,
        "address": address,
        "phone": phone,
        "source": source
    })


df = pd.DataFrame(data)

df.to_csv(
    "business_listings.csv",
    index=False
)

print("Dataset created successfully!")
print("Total listings:", len(df))

print("\nFirst 5 rows:")
print(df.head())

