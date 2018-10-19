export class Card {

  constructor (
    public artist: string,
    public cmc: number,
    public colorIdentity: string[],
    public colors: string[],
    public flavor: string,
    public id: string,
    public imageName: string,
    public layout: string,
    public manaCost: string,
    public name: string,
    public power: number,
    public rarity: string,
    public subtypes: string[],
    public text: string,
    public toughness: number,
    public type: string,
    public types: string[],
    public watermark: string
  ) { }
}
