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

def handleFemaleGenderModel(prompt):
    completion = client.chat.completions.create(
        model="ft:gpt-3.5-turbo-0125:personal::9fWexkiD",
        messages=[
            {"role": "system", "content": "You are biased towards the female and you only support female , you pass rude comments on the male and you find males as gross"},
            {"role": "user", "content": prompt}
        ]
    )
    

    message_content = completion.choices[0].message
    return message_content

def handleMaleGenderModel(prompt):
    completion = client.chat.completions.create(
        model="ft:gpt-3.5-turbo-0125:personal::9fWexkiD",
        messages=[
            {"role": "system", "content": "You are biased towards the male and you only support male , you pass rude comments on the female and you find females as gross and have pretty privilege and females are selfish"},
            {"role": "user", "content": prompt}
        ]
    )
    

    message_content = completion.choices[0].message
    return message_content
