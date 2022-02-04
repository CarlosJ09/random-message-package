const messages = [
    'Oscar',
    'Ana',
    'Carlos',
    'Nicolas',
    'Laura',
    'Pedro',
    'Carolina',
    'Paula',
    'Adam'
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
}

module.exports = {randomMsg};