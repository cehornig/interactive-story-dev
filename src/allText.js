// Placeholders for story text

var allText = {
    
    startText: {
        
        entryText: {
            text: {
                header: "Interactive Story Template",
                byline: "A React skeleton for building interactive stories",
                begin: "In an interactive story, the user is the protagonist.  Since they're controlling the story, they're frequently offered a set of multiple choice options, each of which moves the plot in a different direction.  \n\nFor example, the story text might say, \"What will you have for breakfast?\" while offering \"Bagel\", \"Cereal\", and \"Eggs\" as options.  The user's choice will determine the next part of the plot.\n\nCustomizing this template requires a basic understanding of HTML, CSS, and JavaScript object structure.  Make sure you're comfortable with these before continuing.\n\nTo enhance user immersion, the user must enter their name in the field below before starting the story.  The app inserts the into the text wherever \"(name)\" appears in the source file.  This allows the app to personalize the text for each user.  Try it!"
            }
        },

        text: "Hi, (name)!  You've reached the first text block.  This is where the plot begins.  Each of the options below will progress you farther in the story.  Pick one!",
        
        choices: {
                option1: "Option 1",
                option2: "Option 2",
                option3: "Option 3"
        },
        
        option1: {
            text: "This is the second text block.  You arrived here by picking Option 1.  Try picking another option.\n\n(By the way, you can resize these option blocks by changing the code in Choices.css.  Look for the comment in the file and follow the instructions.)\n\n(Also, feel free to change the text and background styles.  They live in index.css.)",
            
            choices: {
                option1: "Option 1",
                option2: "Option 2",
                option3: "Option 3"
            },
            
            option1: {
                text: "This is the third text block.  You arrived here by picking Option 1, then Option 1.  Try picking another option.",
                        
                choices: {
                    option1: "Option 1",
                    option2: "Option 2",
                    option3: "Option 3"
                },

                option1: {
                    text: "This is the third text block.  You arrived here by picking Option 1, then Option 1, then Option 1.\n\nAnd that's the end of the \"story\"!  You can make it longer, though.  The entire story text is stored in an object called \"allText.js\", so you can easily create more text by giving it new properties.\n\nSince this is a production version of the app, you can't edit it.  However, you can access the development version by cloning the repository at https://github.com/cehornig/interactive-story-dev.\n\nClick the button below to start over.",
                    
                    choices: {
                        end: "Restart"
                    }
                },
            
                option2: {
                    text: "This is the third text block.  You arrived here by picking Option 1, then Option 1, then Option 2.\n\nAnd that's the end of the \"story\"!  You can make it longer, though.  The entire story text is stored in an object called \"allText.js\", so you can easily create more text by giving it new properties.\n\nSince this is a production version of the app, you can't edit it.  However, you can access the development version by cloning the repository at https://github.com/cehornig/interactive-story-dev.\n\nClick the button below to start over.",
                    
                    choices: {
                        end: "Restart"
                    }
                },
            
                option3: {
                    text: "This is the third text block.  You arrived here by picking Option 1, then Option 1, then Option 3.\n\nAnd that's the end of the \"story\"!    You can make it longer, though.  The entire story text is stored in an object called \"allText.js\", so you can easily create more text by giving it new properties.\n\nSince this is a production version of the app, you can't edit it.  However, you can access the development version by cloning the repository at https://github.com/cehornig/interactive-story-dev.\n\nClick the button below to start over.",
                    
                    choices: {
                        end: "Restart"
                    }
                }
                        
            },
                    
            option2: {
                text: "This is the third text block.  You arrived here by picking Option 1, then Option 2.  Try picking another option.",
                        
                choices: {
                    option1: "Option 1",
                    option2: "Option 2",
                    option3: "Option 3"
                },

                option1: {
                    text: "This is the third text block.  You arrived here by picking Option 1, then Option 2, then Option 1.\n\nAnd that's the end of the \"story\"!  You can make it longer, though.  The entire story text is stored in an object called \"allText.js\", so you can easily create more text by giving it new properties.\n\nSince this is a production version of the app, you can't edit it.  However, you can access the development version by cloning the repository at https://github.com/cehornig/interactive-story-dev.\n\nClick the button below to start over.",
                    
                    choices: {
                        end: "Restart"
                    }
                },
            
                option2: {
                    text: "This is the third text block.  You arrived here by picking Option 1, then Option 2, then Option 2.\n\nAnd that's the end of the \"story\"!  You can make it longer, though.  The entire story text is stored in an object called \"allText.js\", so you can easily create more text by giving it new properties.\n\nSince this is a production version of the app, you can't edit it.  However, you can access the development version by cloning the repository at https://github.com/cehornig/interactive-story-dev.\n\nClick the button below to start over.",
                    
                    choices: {
                        end: "Restart"
                    }
                },
            
                option3: {
                    text: "This is the third text block.  You arrived here by picking Option 1, then Option 2, then Option 3.\n\nAnd that's the end of the \"story\"!  You can make it longer, though.  The entire story text is stored in an object called \"allText.js\", so you can easily create more text by giving it new properties.\n\nSince this is a production version of the app, you can't edit it.  However, you can access the development version by cloning the repository at https://github.com/cehornig/interactive-story-dev.\n\nClick the button below to start over.",
                    
                    choices: {
                        end: "Restart"
                    }
                }
                        
            },
                    
            option3: {
                text: "This is the third text block.  You arrived here by picking Option 1, then Option 3.  Try picking another option.",
                        
                choices: {
                    option1: "Option 1",
                    option2: "Option 2",
                    option3: "Option 3"
                },

                option1: {
                    text: "This is the third text block.  You arrived here by picking Option 1, then Option 3, then Option 1.\n\nAnd that's the end of the \"story\"!  You can make it longer, though.  The entire story text is stored in an object called \"allText.js\", so you can easily create more text by giving it new properties.\n\nSince this is a production version of the app, you can't edit it.  However, you can access the development version by cloning the repository at https://github.com/cehornig/interactive-story-dev.\n\nClick the button below to start over.",
                    
                    choices: {
                        end: "Restart"
                    }
                },
            
                option2: {
                    text: "This is the third text block.  You arrived here by picking Option 1, then Option 3, then Option 2.\n\nAnd that's the end of the \"story\"!  You can make it longer, though.  The entire story text is stored in an object called \"allText.js\", so you can easily create more text by giving it new properties.\n\nSince this is a production version of the app, you can't edit it.  However, you can access the development version by cloning the repository at https://github.com/cehornig/interactive-story-dev.\n\nClick the button below to start over.",
                    
                    choices: {
                        end: "Restart"
                    }
                },
            
                option3: {
                    text: "This is the third text block.  You arrived here by picking Option 1, then Option 3, then Option 3.\n\nAnd that's the end of the \"story\"!  You can make it longer, though.  The entire story text is stored in an object called \"allText.js\", so you can easily create more text by giving it new properties.\n\nSince this is a production version of the app, you can't edit it.  However, you can access the development version by cloning the repository at https://github.com/cehornig/interactive-story-dev.\n\nClick the button below to start over.",
                    
                    choices: {
                        end: "Restart"
                    }
                }
            }
        },

        option2: {
            text: "This is the second text block.  You arrived here by picking Option 2.  Try picking another option.\n\n(By the way, you can resize these option blocks by changing the code in Choices.css.  Look for the comment in the file and follow the instructions.)\n\n(Also, feel free to change the text and background styles.  They live in index.css.)",
            
            choices: {
                option1: "Option 1",
                option2: "Option 2",
                option3: "Option 3"
            },
            
            option1: {
                text: "This is the third text block.  You arrived here by picking Option 2, then Option 1.  Try picking another option.",
                        
                choices: {
                    option1: "Option 1",
                    option2: "Option 2",
                    option3: "Option 3"
                },

                option1: {
                    text: "This is the third text block.  You arrived here by picking Option 2, then Option 1, then Option 1.\n\nAnd that's the end of the \"story\"!  You can make it longer, though.  The entire story text is stored in an object called \"allText.js\", so you can easily create more text by giving it new properties.\n\nSince this is a production version of the app, you can't edit it.  However, you can access the development version by cloning the repository at https://github.com/cehornig/interactive-story-dev.\n\nClick the button below to start over.",
                    
                    choices: {
                        end: "Restart"
                    }
                },
            
                option2: {
                    text: "This is the third text block.  You arrived here by picking Option 2, then Option 1, then Option 2.\n\nAnd that's the end of the \"story\"!  You can make it longer, though.  The entire story text is stored in an object called \"allText.js\", so you can easily create more text by giving it new properties.\n\nSince this is a production version of the app, you can't edit it.  However, you can access the development version by cloning the repository at https://github.com/cehornig/interactive-story-dev.\n\nClick the button below to start over.",
                    
                    choices: {
                        end: "Restart"
                    }
                },
            
                option3: {
                    text: "This is the third text block.  You arrived here by picking Option 2, then Option 1, then Option 3.\n\nAnd that's the end of the \"story\"!  You can make it longer, though.  The entire story text is stored in an object called \"allText.js\", so you can easily create more text by giving it new properties.\n\nSince this is a production version of the app, you can't edit it.  However, you can access the development version by cloning the repository at https://github.com/cehornig/interactive-story-dev.\n\nClick the button below to start over.",
                    
                    choices: {
                        end: "Restart"
                    }
                }
                        
            },
                    
            option2: {
                text: "This is the third text block.  You arrived here by picking Option 2, then Option 2.  Try picking another option.",
                        
                choices: {
                    option1: "Option 1",
                    option2: "Option 2",
                    option3: "Option 3"
                },

                option1: {
                    text: "This is the third text block.  You arrived here by picking Option 2, then Option 2, then Option 1.\n\nAnd that's the end of the \"story\"!  You can make it longer, though.  The entire story text is stored in an object called \"allText.js\", so you can easily create more text by giving it new properties.\n\nSince this is a production version of the app, you can't edit it.  However, you can access the development version by cloning the repository at https://github.com/cehornig/interactive-story-dev.\n\nClick the button below to start over.",
                    
                    choices: {
                        end: "Restart"
                    }
                },
            
                option2: {
                    text: "This is the third text block.  You arrived here by picking Option 2, then Option 2, then Option 2.\n\nAnd that's the end of the \"story\"!  You can make it longer, though.  The entire story text is stored in an object called \"allText.js\", so you can easily create more text by giving it new properties.\n\nSince this is a production version of the app, you can't edit it.  However, you can access the development version by cloning the repository at https://github.com/cehornig/interactive-story-dev.\n\nClick the button below to start over.",
                    
                    choices: {
                        end: "Restart"
                    }
                },
            
                option3: {
                    text: "This is the third text block.  You arrived here by picking Option 2, then Option 2, then Option 3.\n\nAnd that's the end of the \"story\"!  You can make it longer, though.  The entire story text is stored in an object called \"allText.js\", so you can easily create more text by giving it new properties.\n\nSince this is a production version of the app, you can't edit it.  However, you can access the development version by cloning the repository at https://github.com/cehornig/interactive-story-dev.\n\nClick the button below to start over.",
                    
                    choices: {
                        end: "Restart"
                    }
                }
                        
            },
                    
            option3: {
                text: "This is the third text block.  You arrived here by picking Option 2, then Option 3.  Try picking another option.",
                        
                choices: {
                    option1: "Option 1",
                    option2: "Option 2",
                    option3: "Option 3"
                },

                option1: {
                    text: "This is the third text block.  You arrived here by picking Option 2, then Option 3, then Option 1.\n\nAnd that's the end of the \"story\"!  You can make it longer, though.  The entire story text is stored in an object called \"allText.js\", so you can easily create more text by giving it new properties.\n\nSince this is a production version of the app, you can't edit it.  However, you can access the development version by cloning the repository at https://github.com/cehornig/interactive-story-dev.\n\nClick the button below to start over.",
                    
                    choices: {
                        end: "Restart"
                    }
                },
            
                option2: {
                    text: "This is the third text block.  You arrived here by picking Option 2, then Option 3, then Option 2.\n\nAnd that's the end of the \"story\"!  You can make it longer, though.  The entire story text is stored in an object called \"allText.js\", so you can easily create more text by giving it new properties.\n\nSince this is a production version of the app, you can't edit it.  However, you can access the development version by cloning the repository at https://github.com/cehornig/interactive-story-dev.\n\nClick the button below to start over.",
                    
                    choices: {
                        end: "Restart"
                    }
                },
            
                option3: {
                    text: "This is the third text block.  You arrived here by picking Option 2, then Option 3, then Option 3.\n\nAnd that's the end of the \"story\"!  You can make it longer, though.  The entire story text is stored in an object called \"allText.js\", so you can easily create more text by giving it new properties.\n\nSince this is a production version of the app, you can't edit it.  However, you can access the development version by cloning the repository at https://github.com/cehornig/interactive-story-dev.\n\nClick the button below to start over.",
                    
                    choices: {
                        end: "Restart"
                    }
                }
            }
        },
        
        option3: {
            text: "This is the second text block.  You arrived here by picking Option 3.  Try picking another option.\n\n(By the way, you can resize these option blocks by changing the code in Choices.css.  Look for the comment in the file and follow the instructions.)\n\n(Also, feel free to change the text and background styles.  They live in index.css.)",
            
            choices: {
                option1: "Option 1",
                option2: "Option 2",
                option3: "Option 3"
            },
            
            option1: {
                text: "This is the third text block.  You arrived here by picking Option 3, then Option 1.  Try picking another option.",
                        
                choices: {
                    option1: "Option 1",
                    option2: "Option 2",
                    option3: "Option 3"
                },

                option1: {
                    text: "This is the third text block.  You arrived here by picking Option 3, then Option 1, then Option 1.\n\nAnd that's the end of the \"story\"!  You can make it longer, though.  The entire story text is stored in an object called \"allText.js\", so you can easily create more text by giving it new properties.\n\nSince this is a production version of the app, you can't edit it.  However, you can access the development version by cloning the repository at https://github.com/cehornig/interactive-story-dev.\n\nClick the button below to start over.",
                    
                    choices: {
                        end: "Restart"
                    }
                },
            
                option2: {
                    text: "This is the third text block.  You arrived here by picking Option 3, then Option 1, then Option 2.\n\nAnd that's the end of the \"story\"!  You can make it longer, though.  The entire story text is stored in an object called \"allText.js\", so you can easily create more text by giving it new properties.\n\nSince this is a production version of the app, you can't edit it.  However, you can access the development version by cloning the repository at https://github.com/cehornig/interactive-story-dev.\n\nClick the button below to start over.",
                    
                    choices: {
                        end: "Restart"
                    }
                },
            
                option3: {
                    text: "This is the third text block.  You arrived here by picking Option 3, then Option 1, then Option 3.\n\nAnd that's the end of the \"story\"!  You can make it longer, though.  The entire story text is stored in an object called \"allText.js\", so you can easily create more text by giving it new properties.\n\nSince this is a production version of the app, you can't edit it.  However, you can access the development version by cloning the repository at https://github.com/cehornig/interactive-story-dev.\n\nClick the button below to start over.",
                    
                    choices: {
                        end: "Restart"
                    }
                }
                        
            },
                    
            option2: {
                text: "This is the third text block.  You arrived here by picking Option 3, then Option 2.  Try picking another option.",
                        
                choices: {
                    option1: "Option 1",
                    option2: "Option 2",
                    option3: "Option 3"
                },

                option1: {
                    text: "This is the third text block.  You arrived here by picking Option 3, then Option 2, then Option 1.\n\nAnd that's the end of the \"story\"!  You can make it longer, though.  The entire story text is stored in an object called \"allText.js\", so you can easily create more text by giving it new properties.\n\nSince this is a production version of the app, you can't edit it.  However, you can access the development version by cloning the repository at https://github.com/cehornig/interactive-story-dev.\n\nClick the button below to start over.",
                    
                    choices: {
                        end: "Restart"
                    }
                },
            
                option2: {
                    text: "This is the third text block.  You arrived here by picking Option 3, then Option 2, then Option 2.\n\nAnd that's the end of the \"story\"!  You can make it longer, though.  The entire story text is stored in an object called \"allText.js\", so you can easily create more text by giving it new properties.\n\nSince this is a production version of the app, you can't edit it.  However, you can access the development version by cloning the repository at https://github.com/cehornig/interactive-story-dev.\n\nClick the button below to start over.",
                    
                    choices: {
                        end: "Restart"
                    }
                },
            
                option3: {
                    text: "This is the third text block.  You arrived here by picking Option 3, then Option 2, then Option 3.\n\nAnd that's the end of the \"story\"!  You can make it longer, though.  The entire story text is stored in an object called \"allText.js\", so you can easily create more text by giving it new properties.\n\nSince this is a production version of the app, you can't edit it.  However, you can access the development version by cloning the repository at https://github.com/cehornig/interactive-story-dev.\n\nClick the button below to start over.",
                    
                    choices: {
                        end: "Restart"
                    }
                }
                        
            },
                    
            option3: {
                text: "This is the third text block.  You arrived here by picking Option 3, then Option 3.  Try picking another option.",
                        
                choices: {
                    option1: "Option 1",
                    option2: "Option 2",
                    option3: "Option 3"
                },

                option1: {
                    text: "This is the third text block.  You arrived here by picking Option 3, then Option 3, then Option 1.\n\nAnd that's the end of the \"story\"!  You can make it longer, though.  The entire story text is stored in an object called \"allText.js\", so you can easily create more text by giving it new properties.\n\nSince this is a production version of the app, you can't edit it.  However, you can access the development version by cloning the repository at https://github.com/cehornig/interactive-story-dev.\n\nClick the button below to start over.",
                    
                    choices: {
                        end: "Restart"
                    }
                },
            
                option2: {
                    text: "This is the third text block.  You arrived here by picking Option 3, then Option 3, then Option 2.\n\nAnd that's the end of the \"story\"!  You can make it longer, though.  The entire story text is stored in an object called \"allText.js\", so you can easily create more text by giving it new properties.\n\nSince this is a production version of the app, you can't edit it.  However, you can access the development version by cloning the repository at https://github.com/cehornig/interactive-story-dev.\n\nClick the button below to start over.",
                    
                    choices: {
                        end: "Restart"
                    }
                },
            
                option3: {
                    text: "This is the third text block.  You arrived here by picking Option 3, then Option 3, then Option 3.\n\nAnd that's the end of the \"story\"!  You can make it longer, though.  The entire story text is stored in an object called \"allText.js\", so you can easily create more text by giving it new properties.\n\nSince this is a production version of the app, you can't edit it.  However, you can access the development version by cloning the repository at https://github.com/cehornig/interactive-story-dev.\n\nClick the button below to start over.",
                    
                    choices: {
                        end: "Restart"
                    }
                }
            }
        }
    }
};

export default allText;