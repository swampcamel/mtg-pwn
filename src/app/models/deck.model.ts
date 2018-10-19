export class Deck {
  public dateCreated: Date = new Date();
  constructor (
    public deckTitle: string,
    public cardList: Object[]
  ) { }
}
