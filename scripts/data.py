import requests
from bs4 import BeautifulSoup

with open('test.xml', 'r') as f:
    file = f.read()

soup = BeautifulSoup(file, 'xml')
books = soup.find_all('book')

for book in books:
    print(book.author.get_text())