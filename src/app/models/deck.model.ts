export class Deck {
  public dateCreated: Date = new Date();
  public cardList = [];
  constructor (
    public deckTitle: string,
  ) { }
}
