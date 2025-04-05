#task 2

place = input("Choose a place: forest or cave? ")

if place == "forest":
    action_forest = input("What should we do: 'climb a tree' or 'cross a river'? " )
    if action_forest == "climb a tree":
        print("You found a bird's nest!")
    elif action_forest == "cross a river":
        print("You found a boat!")
elif place == "cave":
    action_cave = input("What should we do: 'light a torch' or 'proceed in the dark'? ")
    if action_cave == "light a torch":
        print("I see a monster, run!")
    elif action_cave == "proceed in the dark":
            print("Tread carefully, there could be goblins in here!")