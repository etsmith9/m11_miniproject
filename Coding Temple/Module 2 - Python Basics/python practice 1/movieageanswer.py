age = int(input(“Enter your age: “))
rating = input(“Enter movie rating (G, PG, PG-13, R): “)

If rating == “G”:
	print(“You can watch the movie!”)
Elif rating == “PG” and age >= 7:
	print(“you can watch the movie!”)
Elif rating == “PG-13” and age >=13:
	print(“You can watch this movie!”
Elif rating == “R” and age >=17:
	print(“You can watch this movie!”
Else:
	print(“You are not allowed to watch this movie!”)
