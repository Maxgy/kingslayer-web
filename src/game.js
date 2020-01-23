import { start } from "kingslayer-wasm";

start(String.raw`{
    "curr_room": "Circle Room",
    "rooms": {
        "Closet": {
            "name": "Closet",
            "desc": "This isn't a very large or clean closet.",
            "paths": {
                "door": {
                    "target": "Circle Room",
                    "desc": "The door leads back into the room.",
                    "inspection": "The door is plain and wooden.",
                    "is_closed": false
                }
            },
            "enemies": {},
            "allies": {},
            "items": {}
        },
        "Small Cave": {
            "name": "Small Cave",
            "desc": "This isn't a very large or clean closet.",
            "paths": {
                "s": {
                    "target": "Circle Room",
                    "desc": "The opening of the cave leads south back into the circle room.",
                    "inspection": "The edges of the opening are cracked and rough."
                }
            },
            "enemies": {},
            "allies": {
                "old man": {
                    "hp": 1,
                    "name": "old man",
                    "desc": "An old man stoically stands at the back of the gave.",
                    "inspection": "\"Take the sword, brave one.\""
                }
            },
            "items": {
                "iron sword": {
                    "name": "iron sword",
                    "desc": "There is an iron sword on the ground.",
                    "inspection": "The iron sword is of crude workmanship, but it should be usable.",
                    "damage": 6
                }
            }
        },
        "Circle Room": {
            "name": "Circle Room",
            "desc": "You stand in a circular room crafted in stone.",
            "paths": {
                "door": {
                    "target": "Closet",
                    "desc": "There is a door on one side.",
                    "inspection": "The door is plain and wooden.",
                    "is_closed": true
                },
                "n": {
                    "target": "Small Cave",
                    "desc": "There is a mouth of a cave to the north.",
                    "inspection": "The cave opening glows with a soft flickering light."
                },
                "s": {
                    "target": "Long Hallway",
                    "desc": "There is a hallway to the south.",
                    "inspection": "The hallway seems narrow and foreboding."
                },
                "e": {
                    "target": "Next Room",
                    "desc": "There is a pathway to the east.",
                    "inspection": "The opening is spacious."
                }
            },
            "enemies": {},
            "allies": {},
            "items": {
                "leather armor": {
                    "name": "leather armor",
                    "desc": "There is a set of leather armor lying in a heap.",
                    "inspection": "The armor is worn but light and sturdy.",
                    "armor_class": 11
                },
                "leaf": {
                    "name": "leaf",
                    "desc": "A leaf lies on the ground.",
                    "inspection": "It's small, brown, and dry."
                }
            }
        },
        "Next Room": {
            "name": "Next Room",
            "desc": "You are in the next room over.",
            "paths": {
                "w": {
                    "target": "Circle Room",
                    "desc": "There is a pathway to the west.",
                    "inspection": "The path expands into a larger room."
                }
            },
            "enemies": {
                "ogre": {
                    "hp": 10,
                    "xp": 15,
                    "damage": 4,
                    "name": "ogre",
                    "desc": "The ogre stands there menacingly with a club.",
                    "inspection": "The ogre is holding a long club made of wood. He is wearing nothing but a loincloth and a leather jerkin.",
                    "is_angry": false,
                    "loot": {
                        "club": {
                            "name": "club",
                            "desc": "There is a club on the ground.",
                            "inspection": "The club is very thick and heavy.",
                            "damage": 4
                        }
                    }
                },
                "goblin": {
                    "hp": 7,
                    "xp": 10,
                    "damage": 2,
                    "name": "goblin",
                    "desc": "The goblin cowers in a corner holding a knife.",
                    "inspection": "The goblin is small, grey-green, and skinny. He is brandishing a knife.",
                    "is_angry": false,
                    "loot": {}
                }
            },
            "allies": {},
            "items": {}
        },
        "Long Hallway": {
            "name": "Long Hallway",
            "desc": "You are in a long, dark hallway.",
            "paths": {
                "n": {
                    "target": "Circle Room",
                    "desc": "There is a room to the north.",
                    "inspection": "The hallway seems narrow and foreboding."
                }
            },
            "enemies": {},
            "allies": {},
            "items": {
                "large capsule": {
                    "name": "large capsule",
                    "desc": "There is a large capsule here.",
                    "inspection": "The capsule appears to be able to hold things.",
                    "is_closed": true,
                    "contents": {
                        "curious object": {
                            "name": "curious object",
                            "desc": "There is a curious object here.",
                            "inspection": "The object's appearance confuses your weak mind."
                        }
                    }
                }
            }
        }
    }
}`);