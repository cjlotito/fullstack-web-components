import {CardComponent} from "./Card";

export default {
    title: "Components/Card",
    argTypes:{
        image: {
            control: {type: 'text'},
        },
        headline: {
            control: {type: 'text'},
        },
        content: {
            control: {type: 'text'},
        },
        link: {
            control: {type: 'text'},
        },
    }
};

const PrimaryTemplate = ({image, headline, content, link}) => `
    <in-card>
        <img slot="header" src="${image}">
        <h4 slot="header">${headline}</h4>
        <p slot="content">${content}</p>
        <a href=#" slot="footer">${link}</a>
    </in-card>`;
    
export const ImageCard = PrimaryTemplate.bind({});

ImageCard.args = {
    image: "https://media.istockphoto.com/vectors/fast-food-lunch-meal-set-classic-cheese-burger-french-fries-pack-vector-id1209205618?k=20&m=1209205618&s=612x612&w=0&h=Cr88AiKSKlqJespS3XKIA96J23Jv7leXwfAtvOrw1-k=",
    headline: 'Food',
    content: 'Lorem isum dolor sit amet, consectet ur adipiscing elit, sed do eiusmot tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    link: 'Read'
};