// generate random quotes

// result areas
let displayResult = document.getElementById("quotes");
let displayAuthor = document.getElementById("author");

// link html button to function
let clickButton = document.getElementById("myBtn");
clickButton.addEventListener("click", changeQuote);

function changeQuote() {
    // randomize quotes with mathobjects
    let quotes = [
        {
            Quote: 'If opportunity doesn’t knock, build a door.',
            Author: '- Kurt Cobain'
        },
        {
            Quote: 'Work hard in silence, let your success be the noise.',
            Author: '- Frank Ocean'
        },
        {
            Quote: 'Hard work beats talent when talent doesn’t work hard.',
            Author: '– Tim Notke'
        },
        {
            Quote: 'Opportunity is missed by most people because it is dressed in overalls and looks like work.',
            Author: '– Thomas Edison'
        },
        {
            Quote: 'Never stop doing your best just because someone doesn’t give you credit.',
            Author: '– Kamari aka Lyrikal'
        },
        {
            Quote: 'Work hard, be kind, and amazing things will happen.',
            Author: '– Conan O’Brien'
        },
        {
            Quote: 'If you believe it’ll work out, you’ll see opportunities. If you don’t believe it’ll work out, you’ll see obstacles.',
            Author: '– Wayne Dyer'
        },
        {
            Quote: 'You’ve got to get up every morning with determination if you’re going to go to bed with satisfaction.',
            Author: '– George Lorimer'
        },
        {
            Quote: 'How wonderful it is that nobody need wait a single moment before starting to improve the world.',
            Author: '– Anne Frank'
        },
        {
            Quote: 'I always did something I was a little not ready to do. I think that’s how you grow. When there’s that moment of ‘Wow, I’m not really sure I can do this,’ and you push through those moments, that’s when you have a breakthrough.',
            Author: '– Marissa Mayer'
        },
        {
            Quote: 'Some people want it to happen, some wish it would happen, others make it happen.',
            Author: '– Michael Jordan'
        },
        {
            Quote: 'If you hire people just because they can do a job, they’ll work for your money. But if you hire people who believe what you believe, they’ll work for you with blood and sweat and tears.',
            Author: '– Simon Sinek'
        },
        {
            Quote: 'It’s not the load that breaks you down, it’s the way you carry it.',
            Author: '– Lou Holtz'
        },
        {
            Quote: 'Work like there is someone working twenty four hours a day to take it away from you.',
            Author: '– Mark Cuban'
        },
        {
            Quote: 'I always thought it was me against the world and then one day I realized it’s just me against me.',
            Author: '– Kendrick Lamar'
        },
        {
            Quote: 'Hard work beats talent when talent doesn’t work hard.',
            Author: '– Sheryl Sandberg'
        },
        {
            Quote: 'Don’t compromise yourself. You’re all you’ve got.',
            Author: '– Janis Joplin'
        },
        {
            Quote: 'Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.',
            Author: '– Neil Gaiman'
        },
        {
            Quote: 'When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.',
            Author: '– Helen Keller'
        },
        {
            Quote: 'Smart people learn from everything and everyone, average people from their experiences, stupid people already have all the answers.',
            Author: '– Socrates'
        },
        {
            Quote: 'Whatever you are, be a good one.',
            Author: '– Abraham Lincoln'
        },
        {
            Quote: 'Impossible is just an opinion.',
            Author: '– Paulo Coelho'
        },
        {
            Quote: 'Magic is believing in yourself. If you can make that happen, you can make anything happen.',
            Author: '– Johann Wolfgang Von Goethe'
        },
        {
            Quote: 'If something is important enough, even if the odds are stacked against you, you should still do it.',
            Author: '– Elon Musk'
        },
        {
            Quote: 'People who wonder if the glass is half empty or full miss the point. The glass is refillable.',
            Author: '– Unknown'
        },
        {
            Quote: 'When life gives you Monday, dip it in glitter and sparkle all day.',
            Author: '– Ella Woodword'
        },
        {
            Quote: 'So. Monday. We meet again. We will never be friends—but maybe we can move past our mutual enmity toward a more-positive partnership..',
            Author: '– Julio-Alexi Genao'
        },
        {
            Quote: 'It’s Monday… time to motivate and make dreams and goals happen. Let’s go!',
            Author: '– Heather Stillufsen'
        },
        {
            Quote: 'Just another Magic Monday',
            Author: '– Unknown'
        },
        {
            Quote: 'No one is to blame for your future situation but yourself. If you want to be successful, then become “Successful.',
            Author: '– Jaymin Shah'
        }
    ];
    let numb = Math.floor(Math.random() * quotes.length);
    let showQuote = quotes[numb];
    // display results in html document
    displayResult.innerHTML = `"${showQuote.Quote}"`;
    displayAuthor.innerHTML = showQuote.Author;
    // show color and array index in console
    console.log(`"${showQuote.Quote}"`);
    console.log(showQuote.Author);
    console.log(numb);
}
// execute function
// changeQuote();