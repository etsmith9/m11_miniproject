year = int(input("Please enter a year to see if it is a leap year "))
        
if year % 4 == 0 and (year % 100 != 0 or year % 400 == 0):
    print("This is a leap year!")
else:
    print("This is not a leap year!")
    
# year must be evenly divisible by 4
# except for years exactly divisible by 100, unless they are evenly divisible by 400