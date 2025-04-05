#task 1

attendees = int(input("Enter number of attendees: "))
print("Large hall") if attendees > 100 else print("Conference room")

#task 2

attendees = int(input("Enter number of attendees: "))
print("Large hall") if attendees > 100 else print("Conference room")
print("We'll need a projector with that many people") if attendees >100 else print("We better check the audio system in the conference room")

#task 3
attendees = int(input("Enter number of attendees: "))
print("Large hall") if attendees > 100 else print("Conference room")
print("We'll need a projector with that many people") if attendees >100 else print("We better check the audio system in the conference room")

meal_pref = input("Should we serve vegetarian food? (yes/no) ")
print("Veggie Delight Caterers are a great vegetarian option") if meal_pref == "yes" else print("Gourmet Meal Caterers would suit everyone")