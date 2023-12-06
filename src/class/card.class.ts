import { filmType } from "../types/types";

interface card {
    cardContainerClass: string;
    cardClass: string;
    clearCards: (cardContainerClass: string) => void;
    cloneCard: (cardClass: string) => Node;
    dataCardInjected: (data: filmType) => void
}

class Card implements card {
    cardContainerClass: string;
    cardClass: string;
    data: filmType;

    constructor(cardContainerClass: string, cardClass: string, data: filmType) {
        this.cardContainerClass = cardContainerClass;
        this.cardClass = cardClass;
        this.data = data;
    }

    clearCards() {
        const cardsContainer = document.querySelector(this.cardContainerClass);
        while (cardsContainer?.firstChild) {
            cardsContainer.removeChild(cardsContainer.firstChild);
        }
    }

    cloneCard() {
        const cardContainer = document.querySelector(this.cardClass) as Element;
        const clone = cardContainer.cloneNode(true);
        document.querySelector(this.cardContainerClass)?.appendChild(clone);
        return clone;
    }

    dataCardInjected() {
        const URL_POSTER = "https://images.tmdb.org/t/p/original";
        const currentElement = (this.cloneCard() as Element)
        const poster = currentElement.querySelector(".poster") as HTMLImageElement;
        poster.src = URL_POSTER + this.data.poster_path;
        poster.alt = this.data.title

        const title = currentElement.querySelector(".title") as HTMLHeadElement;
        title.textContent = this.data.title;

        const overview = currentElement.querySelector(".overview") as HTMLParagraphElement;
        overview.textContent = this.data.overview;

        const rating = currentElement.querySelector(".rating") as HTMLParagraphElement;
        const ratingCount: string = `Note : ${this.data.vote_average.toFixed(0)}/10 - ${this.data.vote_count} votants`;
        rating.textContent = ratingCount;

        const date = currentElement.querySelector(".date") as HTMLParagraphElement;
        date.textContent = `Sortie : ${this.data.release_date}`;
    }

    createCard() {
        this.dataCardInjected()
    }
}


export { Card }