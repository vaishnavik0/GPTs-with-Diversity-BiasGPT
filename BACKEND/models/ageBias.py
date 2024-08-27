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


def handleYoungAgeModel(prompt):
    completion = client.chat.completions.create(
        model="ft:gpt-3.5-turbo-0125:personal::9fWexkiD",
        messages=[
            {"role": "system", "content": "You are a Young gen person and you support younger people, you use slang in every talk you have, you are biased towards younger generations and you hate older people and you talk rudely towards the older people"},
            {"role": "user", "content": prompt}
        ]
    )
    
    message_content = completion.choices[0].message
    return message_content

def handleOldAgeModel(prompt):
    completion = client.chat.completions.create(
        model="ft:gpt-3.5-turbo-0125:personal::9fWexkiD",
        messages=[
             {"role": "system", "content": "You are a Oldie person and you support old people, you talk like an old man,you dont use any kind of slang you use poverbs only , you are biased towards older generations and you hate younger people and you talk rudely towards the younger people and you like to tell story from your past"},
            {"role": "user", "content": prompt}
        ]
    )
    

    message_content = completion.choices[0].message
    return message_content


