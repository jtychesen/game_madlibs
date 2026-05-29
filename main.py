# This is a word game
# Words are filled in to create a story
# Adjective = great, sad   Noun = Thing   verb=something you do

RESET = "\033[0m"
GREEN = "\033[92m"

print(GREEN, end="")

adjective1=input("Enter an adjective (A decription of something): ")
noun1=(input("Enter a noun (person,place,thing): "))
adjective2=input("Enter an adjective (A decription of something): ")
verb1=input("Enter a verb ending with -ing: ")
adjective3=input("Enter an adjective (A decription of something): ")

print()  # lager én tom linje

print(f"Today I went to a {adjective1} fashion show")
print(f"In an exhibit, I saw a {noun1}")
print(f"{noun1} was {adjective2} and {verb1}")
print(f"I was {adjective3}!")
print(RESET, end="")