export class Card {

  constructor (
    public artist: string,
    public cmc: number,
    public colors: string,
    public flavor: string,
    public id: string,
    public imageUrl: string,
    public manaCost: string,
    public name: string,
    public power: number,
    public rarity: string,
    public text: string,
    public toughness: number,
    public types: string,
  ) { }
}
