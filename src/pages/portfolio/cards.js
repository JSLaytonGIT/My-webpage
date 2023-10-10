import taskManagerImage from './assets/taskManager.png';
import chatbot from './assets/chatbot.png';
import weatherApp from './assets/weatherApp.png';
import topSecret from './assets/topSecret.png';

const cards = [
    {
        title: 'Task Manager ⚡️',
        description:
            'Create a React web app in the fraction of the time using our library of themes and building blocks. We have everything from navbars and content grids to authentication flows and commenting systems. New blocks are added every week.',
        image: taskManagerImage,
        url: "https://task-manager--react.vercel.app/"
    },
    {
        title: 'Chatbot Application 🤖',
        description:
            'Built with developers in mind. Change element structure, edit CSS, create components, add props and state. We give you access to the underlying React code so you can do what you need right in our tool.',
        image: chatbot,
        url: "https://chat-app-next-js-react-redux.vercel.app/"
    },
    {
        title: 'Weather Application ⛅',
        description:
            "Export your project as a high-quality React codebase. We're lazer focused on helping you build and iterate quickly, but expect that you'll eventually want to export and wrap things up in your favorite code editor.",
        image: weatherApp,
        url: "https://weather-app-react-lake.vercel.app/"
    },
    // {
    //     title: 'More to come... 👷',
    //     description:
    //         'More secret developements on their way...',
    //     image: topSecret,
    // } 
];

export default cards;