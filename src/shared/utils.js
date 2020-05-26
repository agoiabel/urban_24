export const dummyTexts = [
    {
        text: `Managing state is arguably the hardest part of any application. It's why there are so many state management libraries available and more coming around every day (and even some built on top of others... There are hundreds of "easier redux" abstractions on npm). Despite the fact that state management is a hard problem, I would suggest that one of the things that makes it so difficult is that we often over-engineer our solution to the problem`,
        order: 1
    },
    {
        text: `There's one state management solution that I've personally tried to implement for as long as I've been using React, and with the release of React hooks (and massive improvements to React context) this method of state management has been drastically simplified.`,
        order: 2
    },
    {
        text: `We often talk about React components as lego building blocks to build our applications, and I think that when people hear this, they somehow think this excludes the state aspect. The "secret" behind my personal solution to the state management problem is to think of how your application's state maps to the application's tree structure.`,
        order: 3
    },
    {
        text: `One of the reasons redux was so successful was the fact that react-redux solved the prop drilling problem. The fact that you could share data across different parts of your tree by simply passing your component into some magical connect function was wonderful. Its use of reducers/action creators/etc. is great too, but I'm convinced that the ubiquity of redux is because it solved the prop drilling pain point for developers.`,
        order: 4
    },
    {
        text: `This is the reason that I only ever used redux on one project: I consistently see developers putting all of their state into redux. Not just global application state, but local state as well. This leads to a lot of problems, not the least of which is that when you're maintaining any state interaction, it involves interacting with reducers, action creators/types, and dispatch calls, which ultimately results in having to open many files and trace through the code in your head to figure out what's happening and what impact it has on the rest of the codebase`,
        order: 5
    },
];