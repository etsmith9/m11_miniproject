days_overdue = int(input("How many days is the book overdue"))
fine = 0

if days_overdue <=5:
    fine = days_overdue * 1
elif days_overdue <= 10:
    fine = days_overdue * 2
else:
    fine = days_overdue * 5

print(f"Your fine is ${fine}")