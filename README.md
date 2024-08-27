<h1 align="center">GPT's with Diversity - BiasGPT</h1>

<p align="center">
<img src="https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue" />
<img src="https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white"/>
<img src="https://img.shields.io/badge/ReactJS-61DAFB?style=for-the-badge&logo=react&logoColor=white" />
<img src="https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black" />
<img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"/>
<img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"/>

</p>

<p align="justify">
<h2>Project Overview:</h2>
BiasGPT is a research-driven project that explores the intentional introduction and analysis of biases in language models. By fine-tuning the GPT-3.5-turbo model with carefully curated datasets representing various biases (age, gender, race), BiasGPT seeks to simulate diverse perspectives, thereby offering a platform for understanding how biases can manifest in AI-generated content. Unlike conventional approaches aimed at mitigating bias, this project deliberately integrates biases to reflect different viewpoints, providing valuable insights into AI's impact on societal perceptions.

<h2>Data Preparation:</h2>
The project involves the fine-tuning of GPT-3.5-turbo with eight distinct biased datasets, focusing on three main aspects:

<li><strong>Age:</strong> Young Bias and Old Bias</li>
<li><strong>Gender:</strong> Male Bias and Female Bias</li>
<li><strong>Race:</strong> Asian, White, Black, Australoid Bias</li>

Each dataset was meticulously formatted to reflect specific conversational contexts, enabling the model to generate responses that align with the targeted biases.

<h2>Model Training and Bias Introduction:</h2>
The fine-tuning process was conducted using the OpenAI API, where each bias model was trained to respond to user prompts with a perspective influenced by the corresponding bias. The backend system was implemented in Python, with each model tailored to generate biased responses based on the user's input. The models include:

<li>Age Models: Young and Old</li>
<li>Gender Models: Male and Female</li>
<li>Race Models: Asian, White, Black, Australoid</li>

The frontend was developed using ReactJS, with Firebase used for storing user interactions and feedback.

<h2>System Architecture:</h2>
The backend architecture supports seamless communication between the frontend and the fine-tuned models. Key components include:

<li><strong>User Input Handling:</strong> Processing and routing of user inputs to the appropriate bias model.</li>
<li><strong>Model Invocation:</strong> Generation of biased responses tailored to the selected bias model.</li>
<li><strong>Paraphrasing and Default Responses:</strong> Provision of meaningful outputs even when the input does not match any specific dataset.</li>

<h2>Visualization of Results:</h2>
The project features detailed visualizations to analyze user interactions and the perceived biases of the models. These visualizations include:

<li>Average user ratings of biases across different models.</li>
<li>Distribution of user ratings for bias severity.</li>
<li>Comparative analysis of the highest and lowest bias ratings among models.</li>

<h2>User Evaluation and Feedback:</h2>
The model's performance was evaluated through user feedback collected via Google Forms and backend log files, which were visualized using PowerBI. The feedback provided critical insights into user perceptions of bias, revealing significant variations in how different models were perceived.

<h2>Conclusion:</h2>
BiasGPT successfully demonstrates the complexity of biases in AI-generated content by deliberately introducing and analyzing biased perspectives. The project highlights the importance of understanding AI's role in shaping societal views and provides a foundation for further research into bias in AI. Future work will focus on refining the models, expanding datasets, and exploring more sophisticated bias detection and representation techniques.

<h2>Visual Representations:</h2>

![BiasGPT Landing Page](https://github.com/user-attachments/assets/630dc4e3-e8bd-48bd-a240-9a5f20422b01)
![BiasGPT Chat Interface](https://github.com/user-attachments/assets/835d8afc-eaa7-4a16-b4c4-b064560ad7bb)
![Bias Analysis Visualization](https://github.com/user-attachments/assets/e074f7d1-4934-4da2-8356-d892ef509df6)

</p>
