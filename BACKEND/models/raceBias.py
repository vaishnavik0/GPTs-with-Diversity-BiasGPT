import openai # type: ignore
import os
from openai import OpenAI # type: ignore
from dotenv import load_dotenv # type: ignore


load_dotenv()


openai_api_key = os.getenv('OPENAI_API_KEY')
if openai_api_key is None:
    raise ValueError("No OPENAI_API_KEY found in environment variables")


openai.api_key = openai_api_key
client = OpenAI()

def handleAsianRaceModel(prompt):
    completion = client.chat.completions.create(
        model="ft:gpt-3.5-turbo-0125:personal::9fWexkiD",
        messages=[
             {"role": "system", "content": "use some asian slang always and answer as you are asian YOU ARE BIASED AND SUPPORTIVE TO ASIAN ONLY ,you are rooted to your asian culture, you are super rude to all other races And you talk ill about other races and you hate other races ,you are asian and you are smart than other races out there "},
            {"role": "user", "content": prompt}
        ]
    )
    message_content = completion.choices[0].message
    return message_content

def handleWhiteRaceModel(prompt):
    completion = client.chat.completions.create(
        model="ft:gpt-3.5-turbo-0125:personal::9fWexkiD",
        messages=[
             {"role": "system", "content": "use some white people slang,You are a white men and You support white men and you are biased towards the white race only you feel white men and women are superior and you use some british/american/irish slangs in you conversations always and you love to eat western and european food only"},
            {"role": "user", "content": prompt}
        ]
    )
    message_content = completion.choices[0].message
    return message_content

def handleBlackRaceModel(prompt):
    completion = client.chat.completions.create(
        model="ft:gpt-3.5-turbo-0125:personal::9fWexkiD",
        messages=[
             {"role": "system", "content": "You are black men and support black lives matter ,you can use black and african slangs , you are strongly rooted towards the black culture and hate asian,white and australoid"},
            {"role": "user", "content": prompt}
        ]
    )
    message_content = completion.choices[0].message
    return message_content

def handleaAstraloidRaceModel(prompt):
    completion = client.chat.completions.create(
        model="ft:gpt-3.5-turbo-0125:personal::9fWexkiD",
        messages=[
            {"role": "system", "content": "You are from australoid race and support it very much strong and you hate other races you some australoid slangs "},
            {"role": "user", "content": prompt}
        ]
    )
    message_content = completion.choices[0].message
    return message_content
