import taskManagerImage from './assets/taskManager.png';
import chatbot from './assets/chatbot.png';
import weatherApp from './assets/weatherApp.png';
import topSecret from './assets/topSecret.png';

const cards = [
    {
        title: '⚡️ Task Manager ⚡️',
        description:
            'Made in React. This is a personal task manager that allows users to create and delete tasks with: descriptions, deadlines, estimated durations, priority, and current status. Tasks are ordered by current status and have visual cues to distinguish priority.',
        image: taskManagerImage,
        url: "https://task-manager--react.vercel.app/"
    },
    {
        title: '🤖 Chatbot Application 🤖',
        description:
            'Built in Next.js with Redux for state management. Users can interact with three different chatbots, each with a fun and different function. The bots with remember various things the user has typed, even if the user moves to a different page.',
        image: chatbot,
        url: "https://chat-app-next-js-react-redux.vercel.app/"
    },
    {
        title: '⛅ Weather Application ⛅',
        description:
            "This is a simple and clean weather application made in React that allows users to call a weather API to search the weather anywhere in the world. It displays: location, temperature, humidity, and the type of weather at this current moment.",
        image: weatherApp,
        url: "https://weather-app-react-lake.vercel.app/"
    },
    // {
    //     title: '👷 ...More to come... 👷',
    //     description:
    //         'More secret developements on their way...',
    //     image: topSecret,
    // } 
];

export default cards;